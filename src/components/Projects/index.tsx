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

  function capitalizeGitHubTopics(topic: string) {
    return topic.charAt(0).toUpperCase() + topic.slice(1)
  }

  return (
    <div className="container py-20 px-6 md:px-20">
      {repos.length ? (
        <h2 className="text-2xl font-semibold mb-8">
          Spotlight on these{' '}
          <strong className="text-primary">
            {repos.length} GitHub projects
          </strong>
          :
        </h2>
      ) : (
        <div>
          <p className="text-2xl font-semibold mb-8">
            Look's like{' '}
            <strong className="text-primary">I'm unable to connect</strong> with
            my GitHub 😭
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
                <Card
                  key={repo.id}
                  className="flex flex-col justify-between sm:p-6"
                >
                  <CardHeader>
                    <CardTitle>
                      <strong className="text-primary">
                        Project {index + 1 + ': '}
                      </strong>
                      {repo.name.replaceAll('-', ' ')}
                    </CardTitle>

                    {repo.topics ? (
                      <div className="flex gap-1 items-center flex-wrap py-4">
                        <Badge
                          className="text-sm text-primary"
                          variant="outline"
                        >
                          Project & Technology tags:
                        </Badge>
                        {repo.topics.map((topic: string) => (
                          <Badge
                            key={topic}
                            variant="secondary"
                            className="text-sm"
                          >
                            {capitalizeGitHubTopics(topic)}
                          </Badge>
                        ))}
                      </div>
                    ) : null}

                    <CardDescription>
                      <strong>Description: </strong>
                      {repo.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-hidden rounded-lg border border-border">
                      <img
                        src={`https://raw.githubusercontent.com/dwtoledo/${repo.name}/${repo.default_branch}/social-banner.webp`}
                        alt={
                          repo.name.replaceAll('-', ' ') + ' project screenshot'
                        }
                        className="h-auto w-auto object-cover transition-all hover:scale-105"
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-2 sm:flex-row">
                    <Button
                      className="flex gap-2 py-2 px-4 w-full sm:w-auto"
                      asChild
                    >
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full sm:w-auto"
                      >
                        <Github className="h-[1rem] w-[1rem]" />
                        <span>Go to Github</span>
                      </a>
                    </Button>

                    {repo.homepage ? (
                      <Button
                        className="flex gap-2 py-2 px-4 w-full sm:w-auto"
                        asChild
                      >
                        <a
                          href={repo.homepage}
                          target="_blank"
                          rel="noreferrer"
                          className="w-full sm:w-auto"
                        >
                          <Globe className="h-[1rem] w-[1rem]" />
                          <span>Go to Website</span>
                        </a>
                      </Button>
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
