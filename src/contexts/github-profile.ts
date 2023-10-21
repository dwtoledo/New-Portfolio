import { Dispatch, SetStateAction, createContext } from 'react'

interface GitHubProfileContextModel {
  profile: any
  setProfile: Dispatch<SetStateAction<any>>
}

export const GitHubProfileContext = createContext(
  {} as GitHubProfileContextModel,
)
