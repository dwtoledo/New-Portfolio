import { useEffect, useState } from 'react'
import { GitHubProfileContext } from './contexts/github-profile'
import { useToast } from '@/components/ui/use-toast'
import { ThemeProvider } from './hooks/theme-provider'
import { Separator } from './components/ui/separator'
import { Header } from './components/Header'
import { Profile } from './components/Profile'
import { Projects } from './components/Projects'
import { Footer } from './components/Footer'
import { Contact } from './components/Contact'
import { AIChat } from './components/AIChat'
import Typewriter from 'typewriter-effect'
import axios from 'axios'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import botAvatar from './assets/images/bot-avatar.webp'

import './index.css'
import { Button } from './components/ui/button'
import { Toaster } from './components/ui/toaster'
import { AIAssistantContext } from './contexts/ai-assistant'
import { WorkExperience } from './components/WorkExperience'
import { AccessibilityContext } from './contexts/accessibility'

const publicRepoNamesToRemove = [
  'portfolio',
  'dwtoledo',
  'Gmail-Clone',
  'Google-Search-Clone',
  'Funko-Store',
  'JS-Unit-Tests-with-Jest',
  'python-projects',
  'portfolio-API',
  'API-Endpoints-Portfolio'
]

export function App() {
  const { toast } = useToast()
  const [profile, setProfile] = useState({})
  const [repos, setRepos] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [animations, setAnimations] = useState(true)

  useEffect(() => {
    getGitHubProfileData()
    getGitHubPublicRepos()
  }, [])

  async function getGitHubProfileData() {
    await axios
      .get('https://api.github.com/users/dwtoledo')
      .then(response => {
        setProfile(response.data)
      })
  }

  async function getGitHubPublicRepos() {
    await axios
      .get('https://api.github.com/users/dwtoledo/repos')
      .then(response => {
        const allPortfolioRepos = response.data.sort(
          (a: { id: number }, b: { id: number }) => b.id - a.id,
        )
        setRepos(removeSpecificRepos(allPortfolioRepos))
      })
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

  function getAnimationText() {
    return (
      <Typewriter
        options={{
          loop: true,
          wrapperClassName: 'text-foreground font-bold',
          cursorClassName: 'Typewriter__cursor text-foreground',
        }}
        onInit={typewriter => {
          typewriter
            .typeString('Try my AI Assistant!')
            .pauseFor(60000)
            .deleteAll()
            .start()
        }}
      />
    )
  }

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <GitHubProfileContext.Provider value={{ profile, repos }}>
        <AccessibilityContext.Provider value={{ animations, setAnimations }}>
          <Header />
          <main id="main-content">
            <Profile />
            <Separator />
            <WorkExperience />
            <Separator />
            <Projects />
            <Separator />
            <Contact />
            <Separator />
          </main>
        </AccessibilityContext.Provider>
        <Footer />
        <AIAssistantContext.Provider value={{ isOpen, setIsOpen }}>
          <Button
            variant="ghost"
            style={{ display: isOpen ? 'none' : 'flex' }}
            className="fixed bottom-8 right-0 flex gap-2 rounded-none rounded-tl-lg rounded-bl-lg border-0 h-fit py-2 px-4 bg-complementary hover:bg-complementary-foreground"
            onClick={handleToastOpen}
          >
            <Avatar className="w-6 h-6">
              <AvatarImage src={botAvatar} alt="A robot" />
              <AvatarFallback>AI Assistant</AvatarFallback>
            </Avatar>

            {animations ? (
              getAnimationText()
            ) : (
              <span className="text-foreground font-bold">
                Try my AI Assistant!
              </span>
            )}
          </Button>
          <Toaster />
        </AIAssistantContext.Provider>
      </GitHubProfileContext.Provider>
    </ThemeProvider>
  )
}
