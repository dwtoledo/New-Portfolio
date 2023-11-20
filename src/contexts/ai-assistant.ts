import { Dispatch, SetStateAction, createContext } from 'react'

interface AIAssistantContextModel {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const AIAssistantContext = createContext(
  {} as AIAssistantContextModel,
)
