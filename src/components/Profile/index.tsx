import { GitHubProfileContext } from '@/contexts/github-profile'
import { useContext } from 'react'
import { ExternalLink } from 'lucide-react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function Profile() {
  const { profile } = useContext(GitHubProfileContext)

  const technicalSkills = [
    'HTML',
    'CSS',
    'SCSS',
    'JavaScript',
    'TypeScript',
    'Angular',
    'AngularJS',
    'RxJS',
    'Material Design',
    'Figma',
    'Microsoft Azure DevOps',
    'REST Client',
    'Bootstrap',
    'Object Oriented Programming',
    'Git',
  ]

  const agileScrumSkills = [
    'Agile',
    'Scrum',
    'Enhance Processes',
    'Continuous Improvement',
    'Iterative Development',
    'Rapid Adaptation',
    '+ More',
  ]

  const softSkills = [
    'Adaptability',
    'Communication',
    'Resilience',
    'Teamwork',
    'Analytical Thinking',
    'Process Optimization',
    'Quality Assurance',
    'Project Management',
    '+ More',
  ]

  return (
    <div className="container py-20 px-6 md:px-20">
      <div className="flex flex-col gap-8 md:flex-row items-center">
        <div className="flex flex-col items-start gap-2 md:w-[420px]">
          <h2 className="text-2xl font-semibold text-primary">About me:</h2>
          <span className="text-4xl font-bold">
            {profile.name || 'Douglas Toledo'}
          </span>
          <code className="bg-muted py-1 font-mono">
            Headline:{' '}
            {profile.bio ||
              'Front End Developer | Web Developer | Angular & React with TypeScript'}
          </code>
        </div>
        <Tabs defaultValue="development" className="w-full md:flex-1">
          <TabsList>
            <TabsTrigger value="development">
              Agile/Scrum development:
            </TabsTrigger>
            <TabsTrigger value="soft-skills">Soft-skills:</TabsTrigger>
          </TabsList>
          <TabsContent value="development">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Front End Developer</CardTitle>
                <CardDescription>
                  <a
                    href="https://www.interplayers.com.br/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Worked 2 years at InterPlayers, go to company website"
                    className="underline text-primary flex gap-1"
                  >
                    Worked 2 years at InterPlayers
                    <ExternalLink className="h-[1rem] w-[1rem]" />
                  </a>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div>
                  <ul>
                    <li>
                      - Experienced in developing, testing and implementing
                      accessible and user-friendly interfaces for responsive web
                      applications;
                    </li>
                    <li>
                      - Worked two years with Angular in an Agile and Scrum
                      environment, collaborating with cross-functional teams,
                      and effectively managing the development life cycle using
                      Microsoft Azure DevOps.
                    </li>
                  </ul>
                  <div className="flex gap-2 flex-wrap mt-4">
                    <Badge variant="outline" className="text-sm">
                      Improved skills during this experience include:
                    </Badge>
                    {technicalSkills.map(skill => {
                      return (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="text-sm"
                        >
                          {skill}
                        </Badge>
                      )
                    })}
                    {agileScrumSkills.map(skill => {
                      return (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="text-sm"
                        >
                          {skill}
                        </Badge>
                      )
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="soft-skills">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">
                  Manufacturing Enginner and Startup Entrepreneur
                </CardTitle>
                <CardDescription>
                  <a
                    href="https://flex.com/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="7 years of experience at Flex, go to company website"
                    className="underline text-primary flex gap-1"
                  >
                    Worked 7 years at Flex
                    <ExternalLink className="h-[1rem] w-[1rem]" />
                  </a>
                  <a
                    href="https://viisolutions.com.br/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="4 years of experience at ViiSolutions, go to startup website"
                    className="underline text-primary flex gap-1"
                  >
                    Worked 4 years at ViiSolutions
                    <ExternalLink className="h-[1rem] w-[1rem]" />
                  </a>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div>
                  <ul>
                    <li>
                      - Soft-skills and teamwork have been improved after
                      working many years in the manufacturing industry and a
                      startup, resulting in high-quality work and analytical,
                      process-driven thinking.
                    </li>
                  </ul>
                  <div className="flex gap-2 flex-wrap mt-4">
                    <Badge variant="outline" className="text-sm">
                      Improved skills during these experiences include:
                    </Badge>
                    {softSkills.map(skill => {
                      return (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="text-sm"
                        >
                          {skill}
                        </Badge>
                      )
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
