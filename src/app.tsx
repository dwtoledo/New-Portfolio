import { useEffect, useState } from 'react'
import { ThemeProvider } from './components/theme-provider'
import { Header } from './components/Header'
import { Separator } from './components/ui/separator'
import { Profile } from './components/Profile'

import { GitHubProfileContext } from './contexts/github-profile'

import './index.css'
import { Projects } from './components/Projects'
import { Footer } from './components/Footer'
import { Contact } from './components/Contact'

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
        const portfolioRepos = removeSpecificRepos(
          data,
          publicRepoNamesToRemove,
        )
        setRepos(portfolioRepos)
      }),
    )
  }

  function removeSpecificRepos(repos: any, names: Array<string>) {
    return repos
      .filter((repo: { name: string }) => !names.includes(repo.name))
      .sort((a: { id: number }, b: { id: number }) => b.id - a.id)
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
      </GitHubProfileContext.Provider>
    </ThemeProvider>
  )
}
