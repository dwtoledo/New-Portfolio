import { Linkedin, Mail } from 'lucide-react'
import { Button } from '../ui/button'
import Typewriter from 'typewriter-effect'
import { useContext } from 'react'
import { AccessibilityContext } from '@/contexts/accessibility'

export function Contact() {
  const { animations } = useContext(AccessibilityContext)

  function getAnimationText() {
    return (
      <Typewriter
        options={{ loop: true }}
        onInit={typewriter => {
          typewriter
            .typeString("Let's create something <br/> amazing together?")
            .pauseFor(5000)
            .deleteAll()
            .start()
        }}
      />
    )
  }

  return (
    <div className="bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-primary via-primary-foreground to-primary">
      <div className="container py-20 flex flex-col gap-8 px-6 md:px-20">
        <p className="text-4xl text-accent">
          My technical skills and creativity are at your disposal!
        </p>
        <strong className="text-4xl text-accent">
          {animations
            ? getAnimationText()
            : "Let's create something amazing together?"}
        </strong>

        <div className="flex gap-2 flex-wrap">
          <Button
            asChild
            className="flex gap-2 items-center w-fit"
            variant="secondary"
          >
            <a
              href="mailto:dwtoledo@outlook.com"
              target="_blank"
              rel="noreferrer"
            >
              <Mail className="h-[1.2rem] w-[1.2rem]" />
              <span className="hidden sm:inline">Send me an email</span>
            </a>
          </Button>

          <Button variant="secondary" asChild>
            <a
              href="https://www.linkedin.com/in/dwtoledo/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin
                className="h-[1.2rem] w-[1.2rem]"
                aria-label="Go to my Linkedin profile"
              />
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
