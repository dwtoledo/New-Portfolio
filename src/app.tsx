import { useEffect, useState } from 'react'
import { ThemeProvider } from './components/theme-provider'
import { Header } from './components/Header'
import { Separator } from './components/ui/separator'
import { Profile } from './components/Profile'

import { GitHubProfileContext } from './contexts/github-profile'

import './index.css'

export function App() {
  const [profile, setProfile] = useState({})

  useEffect(() => {
    getGitHubProfileData()
  }, [])

  async function getGitHubProfileData() {
    await fetch('https://api.github.com/users/dwtoledo').then(response =>
      response.json().then(data => {
        setProfile(data)
      }),
    )
  }

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <GitHubProfileContext.Provider value={{ profile, setProfile }}>
        <Header />
        <Separator />
        <Profile />
      </GitHubProfileContext.Provider>
    </ThemeProvider>
  )
}
