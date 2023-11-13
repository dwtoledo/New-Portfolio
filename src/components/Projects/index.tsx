import { GitHubProfileContext } from '@/contexts/github-profile'
import { useContext } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { Github, Globe } from 'lucide-react'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'

export function Projects() {
  const { repos } = useContext(GitHubProfileContext)
  return (
    <div className="container py-20 px-10">
      {repos.length ? (
        <p className="text-2xl font-semibold mb-8">
          Check out these{' '}
          <b className="text-primary">{repos.length} projects</b> in my GitHub:
        </p>
      ) : (
        <div>
          <p className="text-2xl font-semibold mb-8">
            Look's like <b className="text-primary">I'm unable to connect</b>{' '}
            with my GitHub 😭
          </p>
          <a
            href="https://github.com/dwtoledo"
            target="_blank"
            rel="noreferrer"
          >
            <Button className="flex gap-2 items-center w-fit">
              <Github className="h-[1.2rem] w-[1.2rem]" />
              <span>Access my projects on my GitHub</span>
            </Button>
          </a>
        </div>
      )}

      <div className="flex flex-col gap-6 lg:grid grid-cols-2">
        {repos.length
          ? repos.map((repo, index) => {
              return (
                <Card key={repo.id} className="flex flex-col justify-between">
                  <CardHeader>
                    <CardTitle>
                      <strong className="text-primary">
                        {index + 1 + '# '}
                      </strong>
                      {repo.name.replaceAll('-', ' ')}
                    </CardTitle>
                    {repo.topics ? (
                      <div className="flex gap-1 items-center flex-wrap py-4">
                        {repo.topics.map((topic: string) => (
                          <Badge key={topic} variant="outline">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    ) : null}

                    <CardDescription>{repo.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-hidden rounded-lg border border-border">
                      <a href={repo.html_url} target="_blank" rel="noreferrer">
                        <img
                          src={`https://raw.githubusercontent.com/dwtoledo/${repo.name}/${repo.default_branch}/social-banner.webp`}
                          alt="Project Banner from GitHub"
                          className="h-auto w-auto object-cover transition-all hover:scale-105"
                        />
                      </a>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-2 sm:flex-row">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full sm:w-auto"
                    >
                      <Button className="flex gap-2 py-2 px-4 w-full sm:w-auto">
                        <Github />
                        <span>GitHub</span>
                      </Button>
                    </a>

                    {repo.homepage ? (
                      <a
                        href={repo.homepage}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full sm:w-auto"
                      >
                        <Button className="flex gap-2 py-2 px-4 w-full sm:w-auto">
                          <Globe />
                          <span>Try a Live Demo</span>
                        </Button>
                      </a>
                    ) : null}
                  </CardFooter>
                </Card>
              )
            })
          : null}
      </div>
    </div>
  )
}
