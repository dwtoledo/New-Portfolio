import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { Globe } from 'lucide-react'

import VouchersDistributionBanner from '../../assets/images/treatment-initiation.webp'
import B2BMarketplaceBanner from '../../assets/images/b2b-marketplace.webp'
import IRCBanner from '../../assets/images/drugstore-portal.webp'

export function WorkExperience() {
  return (
    <div className="bg-primary">
      <div className="container py-20 px-6 md:px-20">
        <h2 className="text-2xl font-semibold mb-8 text-accent">
          <strong>Professional projects</strong> I have contributed:
        </h2>

        <div className="flex flex-col gap-6 lg:grid grid-cols-2">
          <Card className="sm:p-6">
            <CardHeader>
              <CardTitle>
                Project 1:
                <strong className="text-primary"> IRC</strong>
              </CardTitle>
              <CardDescription>
                Worked with the field support team to speed up issue resolutions
                by designing and developing interfaces with Figma, HTML, SCSS,
                JavaScript, TypeScript, and Angular 8. Used Microsoft Azure
                DevOps for code review, version control, and streamlined
                deployments.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 items-center pb-6">
                <Badge className="text-sm" variant="outline">
                  Company: InterPlayers
                </Badge>
                <Badge className="text-sm" variant="outline">
                  From: February, 2021 To: October, 2021
                </Badge>
                <Badge className="text-sm" variant="outline">
                  Technologies I used:
                </Badge>
                <Badge className="text-sm" variant="secondary">
                  Figma
                </Badge>
                <Badge className="text-sm" variant="secondary">
                  HTML
                </Badge>
                <Badge className="text-sm" variant="secondary">
                  CSS
                </Badge>
                <Badge className="text-sm" variant="secondary">
                  SCSS
                </Badge>
                <Badge className="text-sm" variant="secondary">
                  JavaScript
                </Badge>
                <Badge className="text-sm" variant="secondary">
                  TypeScript
                </Badge>
                <Badge className="text-sm" variant="secondary">
                  Angular 8+
                </Badge>
                <Badge className="text-sm" variant="secondary">
                  Material Design
                </Badge>
                <Badge className="text-sm" variant="secondary">
                  REST API Client
                </Badge>
                <Badge className="text-sm" variant="secondary">
                  Microsoft Azure DevOps
                </Badge>
                <Badge className="text-sm" variant="secondary">
                  Object Oriented Programming
                </Badge>
              </div>
              <div className="flex gap-6 flex-col sm:flex-row">
                <div className="flex-1 overflow-hidden rounded-lg border border-border">
                  <img
                    src={IRCBanner}
                    alt="IRC login form website screenshot"
                    className="w-full h-[180px] object-cover transition-all hover:scale-105"
                  />
                </div>
                <div className="flex-1 flex flex-col gap-4">
                  <div>
                    <p className="text-lg">
                      <strong>📈 This project boosted by 35%</strong> the field
                      support productivity!
                    </p>
                  </div>

                  <Button
                    variant="secondary"
                    className="flex gap-2 items-center py-2 px-4 sm:w-fit hover:cursor-not-allowed hover:bg-destructive"
                    aria-label="IRC website not available"
                  >
                    <Globe />
                    Website not available
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="sm:p-6">
            <CardHeader>
              <CardTitle>
                Project 2:
                <strong className="text-primary"> Vouchers Distribution</strong>
              </CardTitle>
              <CardDescription>
                Facilitated the distribution of 'vouchers' to pharmaceutical
                representatives and physicians with an excellent user experience
                developed using Angular 8, Material UI, and efficient REST API
                client integration, even with high background data processing .
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 items-center pb-6">
                <Badge className="text-sm" variant="outline">
                  Company: InterPlayers
                </Badge>
                <Badge className="text-sm" variant="outline">
                  From: November, 2021 To: August, 2022
                </Badge>
                <Badge className="text-sm" variant="outline">
                  Technologies I used:
                </Badge>
                <Badge className="text-sm" variant="secondary">
                  HTML
                </Badge>
                <Badge className="text-sm" variant="secondary">
                  CSS
                </Badge>
                <Badge className="text-sm" variant="secondary">
                  SCSS
                </Badge>
                <Badge className="text-sm" variant="secondary">
                  JavaScript
                </Badge>
                <Badge className="text-sm" variant="secondary">
                  TypeScript
                </Badge>
                <Badge className="text-sm" variant="secondary">
                  Angular 8+
                </Badge>
                <Badge className="text-sm" variant="secondary">
                  Material Design
                </Badge>
                <Badge className="text-sm" variant="secondary">
                  REST API Client
                </Badge>
                <Badge className="text-sm" variant="secondary">
                  Microsoft Azure DevOps
                </Badge>
                <Badge className="text-sm" variant="secondary">
                  Object Oriented Programming
                </Badge>
              </div>
              <div className="flex gap-6 flex-col sm:flex-row">
                <div className="flex-1 overflow-hidden rounded-lg border border-border">
                  <img
                    src={VouchersDistributionBanner}
                    alt="Vouchers Distribution login website screenshot"
                    className="w-full h-[180px] object-cover transition-all hover:scale-105 "
                  />
                </div>
                <div className="flex-1 flex flex-col gap-4">
                  <div>
                    <p className="text-lg">
                      <strong>🎉 This project led to contracts</strong> with
                      three brazilian major pharmaceuticals!
                    </p>
                  </div>

                  <Button className="py-2 px-4 sm:w-fit" asChild>
                    <a
                      href="https://adm.iniciodetratamento.com.br"
                      target="_blank"
                      rel="noreferrer"
                      className="flex gap-2 items-center"
                      aria-label="Go to Vouchers Distribution website"
                    >
                      <Globe />
                      <span>Go to Website</span>
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="sm:p-6">
            <CardHeader>
              <CardTitle>
                Project 3:
                <strong className="text-primary text-bold">
                  {' '}
                  B2B Marketplace
                </strong>
              </CardTitle>
              <CardDescription>
                Customized a marketplace using AngularJs and Bootstrap to bring
                flexibility to the application and to meet the visual identity
                needs of different customers.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 items-center pb-6">
                <Badge className="text-sm" variant="outline">
                  Company: InterPlayers
                </Badge>
                <Badge className="text-sm" variant="outline">
                  From: September, 2022 To: February, 2023
                </Badge>
                <Badge className="text-sm" variant="outline">
                  Technologies I used:
                </Badge>
                <Badge className="text-sm" variant="secondary">
                  HTML
                </Badge>
                <Badge className="text-sm" variant="secondary">
                  CSS
                </Badge>
                <Badge className="text-sm" variant="secondary">
                  Bootstrap
                </Badge>
                <Badge className="text-sm" variant="secondary">
                  JavaScript
                </Badge>
                <Badge className="text-sm" variant="secondary">
                  AngularJs
                </Badge>
                <Badge className="text-sm" variant="secondary">
                  REST API Client
                </Badge>
                <Badge className="text-sm" variant="secondary">
                  Microsoft Azure DevOps
                </Badge>
                <Badge className="text-sm" variant="secondary">
                  SaaS
                </Badge>
                <Badge className="text-sm" variant="secondary">
                  Software as a Service
                </Badge>
              </div>
              <div className="flex gap-6 flex-col sm:flex-row">
                <div className="flex-1 overflow-hidden rounded-lg border border-border">
                  <img
                    src={B2BMarketplaceBanner}
                    alt="B2B Marketplace website screenshot"
                    className="w-full h-[180px] object-cover transition-all hover:scale-105"
                  />
                </div>
                <div className="flex-1 flex flex-col gap-4">
                  <div>
                    <p className="text-lg">
                      <strong>🫂 This project garnered team recognition</strong>{' '}
                      while boosting customer satisfaction!
                    </p>
                  </div>
                  <Button className="py-2 px-4 sm:w-fit" asChild>
                    <a
                      href="https://www.pharmalinkonline.com.br/"
                      target="_blank"
                      rel="noreferrer"
                      className="flex gap-2 items-start"
                      aria-label="Go to B2B Marketplace website"
                    >
                      <Globe />
                      Go to Website
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
