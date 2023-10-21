import { useContext } from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ModeToggle } from '../mode-toggle'

import { GitHubProfileContext } from '@/contexts/github-profile'

export function Header() {
  const { profile } = useContext(GitHubProfileContext)

  return (
    <header className="container flex flex-col py-4 items-center gap-y-2 sm:flex-row justify-between">
      <div className="flex gap-x-2 items-center">
        <Avatar>
          <AvatarImage src={profile.avatar_url} />
          <AvatarFallback>{profile.name || 'Douglas Toledo'}</AvatarFallback>
        </Avatar>
        <span className="text-xl font-extrabold">
          {profile.name || 'Douglas Toledo'}
        </span>
      </div>

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
            href={`https://github.com/${
              profile.login ? profile.login : 'dwtoledo'
            }`}
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
