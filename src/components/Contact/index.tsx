import { Linkedin, Mail } from 'lucide-react'
import { Button } from '../ui/button'
import Typewriter from 'typewriter-effect'
import { useContext } from 'react'
import { AccessibilityContext } from '@/contexts/accessibility'

export function Contact() {
  const { animations } = useContext(AccessibilityContext)

  function getAnimationText() {
    return (
      <>
        <span aria-hidden="true">
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
        </span>
        <span className="sr-only">
          Let's create something amazing together?
        </span>
      </>
    )
  }

  return (
    <div className="bg-primary">
      <div className="container py-20 flex flex-col gap-8 px-6 md:px-20">
        <h2 className="text-4xl text-accent">
          My technical skills and creativity are at your disposal!
        </h2>
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
              <span className="sr-only md:not-sr-only">Send me an email</span>
            </a>
          </Button>

          <Button variant="secondary" asChild>
            <a
              href="https://www.linkedin.com/in/dwtoledo/"
              target="_blank"
              rel="noreferrer"
              aria-label="Go to my Linkedin profile"
            >
              <Linkedin className="h-[1.2rem] w-[1.2rem]" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
