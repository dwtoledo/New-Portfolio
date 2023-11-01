import { useContext } from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ModeToggle } from '../mode-toggle'

import { GitHubProfileContext } from '@/contexts/github-profile'
import avatarImg from '../../assets/images/avatar.webp'

export function Header() {
  console.log(import.meta.env.VITE_LINKEDIN_URL)
  const { profile } = useContext(GitHubProfileContext)

  return (
    <header className="bg-background border-b py-4 sm:sticky top-0 z-10">
      <div className="container flex flex-col items-center gap-y-2 sm:flex-row justify-between">
        <div className="flex gap-x-2 items-center">
          <Avatar>
            <AvatarImage src={profile.avatar_url || avatarImg} />
            <AvatarFallback>{profile.name || 'Douglas Toledo'}</AvatarFallback>
          </Avatar>
          <span className="text-xl font-extrabold">
            {profile.name || 'Douglas Toledo'}
          </span>
        </div>

        <div className="flex gap-x-2">
          <a
            href="mailto:dwtoledo@outlook.com"
            target="_blank"
            rel="noreferrer"
          >
            <Button className="flex gap-2 items-center">
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
          <a
            href={`https://github.com/${
              profile.login ? profile.login : 'dwtoledo'
            }`}
            target="_blank"
            rel="noreferrer"
          >
            <Button>
              <Github className="h-[1.2rem] w-[1.2rem]" />
            </Button>
          </a>
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
