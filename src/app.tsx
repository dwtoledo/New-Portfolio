import { useEffect, useState } from 'react'
import { GitHubProfileContext } from './contexts/github-profile'
import { useToast } from '@/components/ui/use-toast'
import { ThemeProvider } from './components/theme-provider'
import { Separator } from './components/ui/separator'
import { Header } from './components/Header'
import { Profile } from './components/Profile'
import { Projects } from './components/Projects'
import { Footer } from './components/Footer'
import { Contact } from './components/Contact'
import { AIChat } from './components/AIChat'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import botAvatar from './assets/images/bot-avatar.webp'

import './index.css'
import { Button } from './components/ui/button'
import { Toaster } from './components/ui/toaster'
import { Badge } from './components/ui/badge'
import { AIAssistantContext } from './contexts/ai-assistant'

const publicRepoNamesToRemove = [
  'portfolio',
  'dwtoledo',
  'Gmail-Clone',
  'Google-Search-Clone',
  'Funko-Store',
  'JS-Unit-Tests-with-Jest',
]

export function App() {
  const { toast } = useToast()
  const [profile, setProfile] = useState({})
  const [repos, setRepos] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    getGitHubProfileData()
    getGitHubPublicRepos()
  }, [])

  async function getGitHubProfileData() {
    await fetch('https://api.github.com/users/dwtoledo').then(response =>
      response.json().then(data => {
        setProfile(data)
      }),
    )
  }

  async function getGitHubPublicRepos() {
    await fetch('https://api.github.com/users/dwtoledo/repos').then(response =>
      response.json().then(data => {
        const allPortfolioRepos = data.sort(
          (a: { id: number }, b: { id: number }) => b.id - a.id,
        )
        setRepos(removeSpecificRepos(allPortfolioRepos))
      }),
    )
  }

  function removeSpecificRepos(repos: any) {
    return repos.filter(
      (repo: { name: string }) => !publicRepoNamesToRemove.includes(repo.name),
    )
  }

  function handleToastOpen() {
    toast({ description: <AIChat /> })
    setIsOpen(true)
  }

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <GitHubProfileContext.Provider value={{ profile, repos }}>
        <Header />
        <Profile />
        <Separator />
        <Projects />
        <Separator />
        <Contact />
        <Separator />
        <Footer />
        <AIAssistantContext.Provider value={{ isOpen, setIsOpen }}>
          <Button
            style={{ display: isOpen ? 'none' : 'flex' }}
            variant="link"
            className="fixed bottom-12 right-4 flex flex-col gap-2"
            onClick={handleToastOpen}
          >
            <Avatar className="w-10 h-10">
              <AvatarImage
                src={botAvatar}
                alt="Chat with our AI Assistant logo"
              />
              <AvatarFallback>AI Assistant</AvatarFallback>
            </Avatar>
            <Badge>Try our AI Assistant!</Badge>
          </Button>
          <Toaster />
        </AIAssistantContext.Provider>
      </GitHubProfileContext.Provider>
    </ThemeProvider>
  )
}
