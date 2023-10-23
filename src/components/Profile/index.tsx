import { GitHubProfileContext } from '@/contexts/github-profile'
import { useContext } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card'

export function Profile() {
  const { profile } = useContext(GitHubProfileContext)

  return (
    <div className="container py-20 px-10 md:px-20">
      <div className="flex flex-col gap-8 md:flex-row items-center">
        <div className="flex flex-col items-start gap-2 md:w-[420px]">
          <span className="text-4xl font-semibold">
            Hey, I'm {profile.name || 'Douglas Toledo'}
          </span>
          <code className="bg-muted py-1 font-mono">
            {profile.bio ||
              'Software Engineer | Front End Web Developer | Industry and Entrepreneur Background'}
          </code>
        </div>
        <Tabs defaultValue="software" className="w-full md:flex-1">
          <TabsList>
            <TabsTrigger value="software">Software</TabsTrigger>
            <TabsTrigger value="industry">Industry</TabsTrigger>
            <TabsTrigger value="Entrepreneurship">Entrepreneurship</TabsTrigger>
          </TabsList>
          <TabsContent value="software">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">
                  Front End Web Developer
                </CardTitle>
                <CardDescription>
                  2 years of experience at{' '}
                  <a
                    href="https://www.interplayers.com.br/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <u>InterPlayers</u>
                  </a>
                  :
                </CardDescription>
              </CardHeader>
              <CardContent>
                <span>
                  Experienced developer with Agile and Scrum methodologies
                  expertise. Also, with MBA and engineering degrees, I help
                  companies drive measurable results and achieve digital
                  excellence through innovative solutions.
                  <br />
                  <br />
                  Technologies I've experience with:
                  <Badge className="ml-1">React</Badge>
                  <Badge className="ml-1">Angular 8+</Badge>
                  <Badge className="ml-1">AngularJS</Badge>
                  <Badge className="ml-1">Figma</Badge>
                </span>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="industry">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Product Enginner</CardTitle>
                <CardDescription>
                  almost 7 years of experience at{' '}
                  <a href="https://flex.com/" target="_blank" rel="noreferrer">
                    <u>Flex</u>
                  </a>
                  :
                </CardDescription>
              </CardHeader>
              <CardContent>
                <span>
                  Before I migrated to the Software Development area I worked in
                  one of the world's largest electronics manufacturers.
                  <br />
                  <br />
                  <div className="flex gap-1 items-center flex-wrap">
                    <span>Soft skills I use to this day:</span>
                    <Badge>Adaptability</Badge>
                    <Badge>Communication</Badge>
                    <Badge>Conflict Resolution</Badge>
                    <Badge>Emotional Intelligence</Badge>
                    <Badge>Leadership</Badge>
                    <Badge>Problem-Solving</Badge>
                    <Badge>Teamwork</Badge>
                    <Badge>Time Management</Badge>
                    <Badge>+ More</Badge>
                  </div>
                </span>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="Entrepreneurship">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Startup Entrepeneur</CardTitle>
                <CardDescription>
                  almost 4 years of experience at{' '}
                  <a
                    href="https://viisolutions.com.br/en/home/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <u>ViiSolutions</u>
                  </a>
                  :
                </CardDescription>
              </CardHeader>
              <CardContent>
                <span>
                  I've entrepreneurial experience developing products,
                  experiencing acceleration programs, mentoring, funding,
                  pitching, presenting projects to investors, and winning
                  awards.
                  <br />
                  <br />
                  <div className="flex gap-1 items-center flex-wrap">
                    <span>Soft skills I use to this day:</span>
                    <Badge>Customer Focus</Badge>
                    <Badge>Innovation</Badge>
                    <Badge>Networking</Badge>
                    <Badge>Project Management</Badge>
                    <Badge>Resilience</Badge>
                    <Badge>Risk Management</Badge>
                    <Badge>Values</Badge>
                    <Badge>Vision</Badge>
                    <Badge>+ More</Badge>
                  </div>
                </span>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
