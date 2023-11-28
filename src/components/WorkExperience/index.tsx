import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card'
import { Badge } from '../ui/badge'

import InicioTratamentoBanner from '../../assets/images/inicio-tratamento.webp'
import B2BMarketplaceBanner from '../../assets/images/b2b-marketplace.webp'
import DrugstorePortalBanner from '../../assets/images/drugstore-portal.webp'

import { Button } from '../ui/button'
import { Globe } from 'lucide-react'

export function WorkExperience() {
  return (
    <div className="bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-primary via-primary-foreground to-primary">
      <div className="container py-20 px-10">
        <p className="text-2xl font-semibold mb-8 text-accent">
          <strong>Professional projects</strong> I have contributed:
        </p>

        <div className="flex flex-col gap-6 lg:grid grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>
                <strong className="text-primary">1# </strong>
                IRC
              </CardTitle>
              <div className="flex flex-wrap gap-2 py-4 items-center">
                <Badge className="text-sm text-primary" variant="outline">
                  Company: InterPlayers
                </Badge>
                <Badge className="text-sm text-primary" variant="outline">
                  Date: Feb - Oct, 2021
                </Badge>
                <Badge className="text-sm text-primary" variant="outline">
                  Technologies:
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
                  OOP
                </Badge>
                <Badge className="text-sm" variant="secondary">
                  Object Oriented Programming
                </Badge>
              </div>
              <CardDescription>
                Worked with the field support team to speed up issue resolutions
                by designing and developing interfaces with Figma, HTML, SCSS,
                JavaScript, TypeScript, and Angular 8. Used Microsoft Azure
                DevOps for code review, version control, and streamlined
                deployments.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-6 flex-col sm:flex-row">
                <div className="overflow-hidden rounded-lg border border-border">
                  <img
                    src={DrugstorePortalBanner}
                    alt="Página de login da aplicação Início de Tratamento, o login é realizado pelo e-mail, senha e após solução do Captcha. Também há uma opção de resetar a senha."
                    className="w-full h-[180px] object-cover transition-all hover:scale-105 sm:w-[180px]"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      This project...
                    </p>
                    <p className="text-lg font-bold">📈 boosted by 35%</p>
                    <p className="text-sm">the field support productivity!</p>
                  </div>

                  <Button
                    variant="secondary"
                    className="flex gap-2 py-2 px-4 sm:w-fit hover:cursor-not-allowed hover:bg-destructive"
                  >
                    <Globe />
                    InterPlayers Internal
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>
                <strong className="text-primary">2# </strong>
                Vouchers Distribution
              </CardTitle>
              <div className="flex flex-wrap gap-2 py-4 items-center">
                <Badge className="text-sm text-primary" variant="outline">
                  Company: InterPlayers
                </Badge>
                <Badge className="text-sm text-primary" variant="outline">
                  Date: Nov, 2021 - Aug, 2022
                </Badge>
                <Badge className="text-sm text-primary" variant="outline">
                  Technologies:
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
                  OOP
                </Badge>
                <Badge className="text-sm" variant="secondary">
                  Object Oriented Programming
                </Badge>
              </div>
              <CardDescription>
                Facilitated the distribution of 'vouchers' to pharmaceutical
                representatives and physicians with an excellent user experience
                developed using Angular 8, Material UI, and efficient REST API
                client integration, even with high background data processing .
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-6 flex-col sm:flex-row">
                <div className="overflow-hidden rounded-lg border border-border">
                  <img
                    src={InicioTratamentoBanner}
                    alt="Página de login da aplicação Início de Tratamento, o login é realizado pelo e-mail, senha e após solução do Captcha. Também há uma opção de resetar a senha."
                    className="w-full h-[180px] object-cover transition-all hover:scale-105 sm:w-[180px]"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      This project...
                    </p>
                    <p className="text-lg font-bold">🎉 led to contracts</p>
                    <p className="text-sm">
                      with three brazilian major pharmaceuticals!
                    </p>
                  </div>
                  <a
                    href="https://adm.iniciodetratamento.com.br"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <Button className="flex gap-2 py-2 px-4 sm:w-fit">
                      <Globe />
                      Website
                    </Button>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>
                <strong className="text-primary">3# </strong>
                B2B Marketplace
              </CardTitle>
              <div className="flex flex-wrap gap-2 py-4 items-center">
                <Badge className="text-sm text-primary" variant="outline">
                  Company: InterPlayers
                </Badge>
                <Badge className="text-sm text-primary" variant="outline">
                  Date: Sep, 2022 - Feb, 2023
                </Badge>
                <Badge className="text-sm text-primary" variant="outline">
                  Technologies:
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
              <CardDescription>
                Customized a marketplace using AngularJs and Bootstrap to bring
                flexibility to the application and to meet the visual identity
                needs of different customers .
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-6 flex-col sm:flex-row">
                <div className="overflow-hidden rounded-lg border border-border">
                  <img
                    src={B2BMarketplaceBanner}
                    alt="Página de login da aplicação Início de Tratamento, o login é realizado pelo e-mail, senha e após solução do Captcha. Também há uma opção de resetar a senha."
                    className="w-full h-[180px] object-cover transition-all hover:scale-105 sm:w-[180px]"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      This project...
                    </p>
                    <p className="text-lg font-bold">
                      🫂 garnered team recognition
                    </p>
                    <p className="text-sm">
                      while boosting customer satisfaction!
                    </p>
                  </div>
                  <a
                    href="https://www.pharmalinkonline.com.br/"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <Button className="flex gap-2 py-2 px-4 sm:w-fit">
                      <Globe />
                      Website
                    </Button>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
