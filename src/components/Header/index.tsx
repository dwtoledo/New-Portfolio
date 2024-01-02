import { useContext } from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { AnimationsToggle } from './components/animations-toggle'
import { ModeToggle } from './components/mode-toggle'

import { GitHubProfileContext } from '@/contexts/github-profile'
import avatarImg from '../../assets/images/avatar.webp'

export function Header() {
  const { profile } = useContext(GitHubProfileContext)

  return (
    <header className="bg-background border-b py-4 sm:sticky top-0 z-10">
      <div className="container flex flex-col items-center gap-y-2 sm:flex-row justify-between">
        <div className="flex gap-x-2 items-center">
          <Avatar>
            <AvatarImage
              src={profile.avatar_url || avatarImg}
              alt="Douglas Toledo's avatar"
            />
            <AvatarFallback>{profile.name || 'Douglas Toledo'}</AvatarFallback>
          </Avatar>
          <h1 className="text-xl font-extrabold">My portfolio</h1>
        </div>

        <div className="flex gap-x-2">
          <AnimationsToggle />

          <ModeToggle />

          <Button className="flex gap-2 items-center" asChild>
            <a
              href="mailto:dwtoledo@outlook.com"
              target="_blank"
              rel="noreferrer"
            >
              <Mail className="h-[1.2rem] w-[1.2rem]" />
              <span className="hidden md:inline">Send me an email</span>
            </a>
          </Button>

          <Button asChild>
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

          <Button asChild>
            <a
              href={'https://github.com/dwtoledo'}
              target="_blank"
              rel="noreferrer"
            >
              <Github
                className="h-[1.2rem] w-[1.2rem]"
                aria-label="Go to my Github profile"
              />
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
