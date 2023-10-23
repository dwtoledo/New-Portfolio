import { Linkedin, Mail } from 'lucide-react'
import { Button } from '../ui/button'
import Typewriter from 'typewriter-effect'

export function Contact() {
  return (
    <div className="container py-20 px-10 flex flex-col gap-8">
      <p className="text-4xl">
        My technical skills and creativity are at your disposal!
      </p>
      <strong className="text-4xl text-primary">
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
      </strong>

      <div className="flex gap-2 flex-wrap">
        <a href="mailto:dwtoledo@outlook.com" target="_blank" rel="noreferrer">
          <Button className="flex gap-2 items-center w-fit">
            <Mail className="h-[1.2rem] w-[1.2rem]" />
            <span className="hidden sm:inline">Send me an email</span>
          </Button>
        </a>
        <a
          href="https://www.linkedin.com/in/dwtoledo/"
          target="_blank"
          rel="noreferrer"
        >
          <Button>
            <Linkedin className="h-[1.2rem] w-[1.2rem]" />
          </Button>
        </a>
      </div>
    </div>
  )
}
