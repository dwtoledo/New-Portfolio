import { Dispatch, SetStateAction, createContext } from 'react'

interface AccessibilityContextModel {
  animations: boolean
  setAnimations: Dispatch<SetStateAction<boolean>>
}

export const AccessibilityContext = createContext(
  {} as AccessibilityContextModel,
)
