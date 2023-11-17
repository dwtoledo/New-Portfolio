import { useEffect, useState } from 'react'
import { GitHubProfileContext } from './contexts/github-profile'

import { ThemeProvider } from './components/theme-provider'
import { Separator } from './components/ui/separator'
import { Header } from './components/Header'
import { Profile } from './components/Profile'
import { Projects } from './components/Projects'
import { Footer } from './components/Footer'
import { Contact } from './components/Contact'
import { AIChat } from './components/AIChat'

import './index.css'

const publicRepoNamesToRemove = [
  'portfolio',
  'dwtoledo',
  'Ignite-Todo-List',
  'Gmail-Clone',
  'Google-Search-Clone',
  'Funko-Store',
  'JS-Unit-Tests-with-Jest',
]

export function App() {
  const [profile, setProfile] = useState({})
  const [repos, setRepos] = useState([])
  const [allRepos, setAllRepos] = useState([])

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
        const filteredPortfolioRepos = removeSpecificRepos(allPortfolioRepos)
        setAllRepos(allPortfolioRepos)
        setRepos(filteredPortfolioRepos)
      }),
    )
  }

  function removeSpecificRepos(repos: any) {
    return repos.filter(
      (repo: { name: string }) => !publicRepoNamesToRemove.includes(repo.name),
    )
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
        <AIChat />
        <Footer />
      </GitHubProfileContext.Provider>
    </ThemeProvider>
  )
}
