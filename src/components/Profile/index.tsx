import { GitHubProfileContext } from '@/contexts/github-profile'
import { useContext } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
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
    <main className="container py-8 px-10 md:px-20">
      <div className="flex flex-col gap-8 md:flex-row items-center">
        <div className="flex flex-col items-start gap-2 md:w-[420px]">
          <span className="text-4xl font-semibold">
            Hey, I'm {profile.name}
          </span>
          <code className="bg-muted py-1 font-mono">{profile.bio}</code>
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
                <CardDescription>2 years of experience:</CardDescription>
              </CardHeader>
              <CardContent>
                <span>React, Angular, and AngularJs</span>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="industry">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Product Enginner</CardTitle>
                <CardDescription>for almost 7 years:</CardDescription>
              </CardHeader>
              <CardContent>
                <span>Description</span>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="Entrepreneurship">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Startup Entrepeneur</CardTitle>
                <CardDescription>for almost 4 years:</CardDescription>
              </CardHeader>
              <CardContent>
                <span>Description</span>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}
