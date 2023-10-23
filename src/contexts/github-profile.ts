import { createContext } from 'react'

interface GitHubProfileContextModel {
  profile: any
  repos: Array<any>
}

export const GitHubProfileContext = createContext(
  {} as GitHubProfileContextModel,
)
