import { useContext, useEffect } from 'react'
import { Accessibility } from 'lucide-react'
import { AccessibilityContext } from '@/contexts/accessibility'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function AnimationsToggle() {
  const { animations, setAnimations } = useContext(AccessibilityContext)
  const storageKey = 'is-animation-enabled'

  useEffect(() => {
    const isAnimationEnabled = localStorage.getItem(storageKey)
    if (isAnimationEnabled) {
      setAnimations(JSON.parse(isAnimationEnabled))
    }
  }, [setAnimations])

  function handleEnableAnimations() {
    localStorage.setItem(storageKey, 'true')
    setAnimations(true)
  }

  function handleDisableAnimations() {
    localStorage.setItem(storageKey, 'false')
    setAnimations(false)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={animations ? 'secondary' : 'destructive'}
          className="flex items-center gap-2"
        >
          <Accessibility className="h-[1.2rem] w-[1.2rem]" />
          <span>Animations {animations ? 'enabled' : 'disabled'}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={handleEnableAnimations}>
          Enable animations
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleDisableAnimations}>
          Disable animations
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
