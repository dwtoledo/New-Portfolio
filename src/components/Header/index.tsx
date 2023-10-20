import { Button } from '@/components/ui/button'
import { Github, Linkedin, Mail } from 'lucide-react'
import { ModeToggle } from '../mode-toggle'

export function Header() {
  return (
    <header className="container flex flex-col py-4 items-center gap-y-2 sm:flex-row justify-between">
      <span className="text-3xl font-extrabold">Douglas Toledo</span>
      <div className="flex gap-x-2">
        <Button asChild>
          <a
            href="mailto:dwtoledo@outlook.com"
            target="_blank"
            className="flex gap-x-2 justify-center items-center"
            rel="noreferrer"
          >
            <Mail className="h-[1.2rem] w-[1.2rem]" />
            <span className="hidden sm:inline">Send me a mail</span>
          </a>
        </Button>
        <Button variant="secondary">
          <a
            href="https://www.linkedin.com/in/dwtoledo/"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin className="h-[1.2rem] w-[1.2rem]" />
          </a>
        </Button>
        <Button variant="secondary">
          <a
            href="https://github.com/dwtoledo"
            target="_blank"
            rel="noreferrer"
          >
            <Github className="h-[1.2rem] w-[1.2rem]" />
          </a>
        </Button>
        <ModeToggle />
      </div>
    </header>
  )
}
