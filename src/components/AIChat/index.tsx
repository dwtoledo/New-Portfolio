import { FormEvent, useContext, useEffect, useRef, useState } from 'react'
import { GitHubProfileContext } from '../../contexts/github-profile'
import ReactMarkdown, { Components } from 'react-markdown'
import { Bot, Loader2 } from 'lucide-react'
import botAvatar from '../../assets/images/bot-avatar.webp'
import genericAvatar from '../../assets/images/generic-avatar.webp'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '../ui/badge'

const myProfessionalBackground = `
Name: Douglas Wilian de Toledo
Address: Toronto, Ontario - Canada
E-mail: dwtoledo@outlook.com
GitHub: https://github.com/dwtoledo
LinkedIn: https://www.linkedin.com/in/dwtoledo

SUMMARY:
  • Experienced in developing, testing and implementing accessible and user-friendly interfaces for responsive web applications;
  • Skilled in Agile/Scrum methodologies, collaborating with cross-functional teams, and efficiently managing the development life cycle.
  • Enhanced adaptability, communication, resilience, and teamwork through seven years as a Manufacturing Engineer and four as an Entrepreneur, resulting in high-quality work and analytical process-driven thinking.

TECHNOLOGIES I HAVE WORKED WITH:
  • HTML, CSS, SCSS, JavaScript, TypeScript, Angular, AngularJS, RxJS, Figma, Microsoft Azure DevOps, Git, REST Client, Material Design, Bootstrap, and CI/CD (Continuous Integration & Deployment).

TECHNOLOGIES I HAVE NOT WORKED WITH, BUT I'M FAMILIAR WITH:
  • Python, Node.js, Express.js, React, React Hooks, Context API, Zod data validations, CSS modules, Styled-components, TailwindCSS, Radix Shadcn UI, TDD (Test-driven development) with Jest, and OOP (Object-oriented Programming).

WORK EXPERIENCE:
  • Front End Developer at InterPlayers (From: Feb, 2021 To: Feb, 2023):
    - Designed and developed interfaces with Figma, HTML, SCSS, JavaScript, TypeScript, Angular 8 in collaboration with the field support team, utilizing Microsoft Azure DevOps for code review, version control and streamlined deployment processes. This collaboration accelerated issue resolutions and boosted their productivity by 35%;
    - Facilitated the seamless distribution of 'vouchers' to pharmaceutical representatives and physicians using Angular 8, Material UI and efficient REST API client integration, which led to contracts with three major pharmaceuticals due to an excellent user experience even with high background data processing;
    - Customized a SaaS (Software as a Service) marketplace for different customers' visual identities using AngularJs with Bootstrap. This effort garnered team recognition while boosting customer satisfaction.

  • Manufacturing Engineer at Flex (From: Feb, 2014 To: Sep, 2020);
  • Manufacturing Engineering Intern at Motorola (From: Aug, 2011 To: Aug, 2013).

EDUCATION:
  • MBA., Business Management at FGV - Getúlio Vargas Foundation, Brazil (Sep, 2014 - Sep, 2018);
  • B.Eng., Electrical Engineering at PUC - Pontifical Catholic University, Brazil (Feb, 2009 - Dec, 2013).

LANGUAGES:
  • Fluent in English;
  • Portuguese as mother language.`

const questionExamples = [
  'What is Douglas most recent work experience?',
  'What are Douglas strengths?',
  'What soft skills does Douglas have?',
]

const customReactMarkdownComponent: Partial<Components> = {
  a: ({ node, children, ...props }) => {
    if (props.href?.includes('http')) {
      props.target = '_blank'
      props.rel = 'noopener noreferrer'
    }
    return (
      <a
        style={{
          color: '#003cff',
          fontWeight: 'bold',
          textDecoration: 'underline',
        }}
        {...props}
      >
        {children}
      </a>
    )
  },
}

interface MessageParam {
  role: string
  content: string
}

export function AIChat() {
  const [message, setMessage] = useState('')
  const [chats, setChats] = useState<Array<MessageParam>>([])
  const [isTyping, setIsTyping] = useState(false)
  const [submitForm, setSubmitForm] = useState(false)
  const { repos } = useContext(GitHubProfileContext)
  const chatWrapper = useRef<HTMLUListElement>(null)
  const formRef = useRef<HTMLFormElement | null>(null)

  useEffect(() => {
    observeChatMessages()
  }, [])

  useEffect(() => {
    if (formRef.current && submitForm && message) {
      formRef.current.requestSubmit()
      setSubmitForm(false)
    }
  }, [submitForm, message])

  function observeChatMessages() {
    const observer = new MutationObserver(mutationList =>
      mutationList
        .filter(mutation => mutation.type === 'childList')
        .forEach(mutation => {
          mutation.addedNodes.forEach(() => {
            if (chatWrapper.current) {
              const { current } = chatWrapper
              if (current.children.length > 0) {
                const lastChild = current.children[
                  current.children.length - 1
                ] as HTMLElement
                lastChild.scrollIntoView({
                  behavior: 'smooth',
                  block: 'nearest',
                })
              }
            }
          })
        }),
    )

    if (chatWrapper.current)
      observer.observe(chatWrapper.current, { childList: true, subtree: true })
  }

  function convertReposInText() {
    if (!repos.length) return 'Error on load my GitHub projects'
    let convertion: Array<any> = []
    repos.forEach((repo, index) => {
      convertion.push(
        `Project #${index + 1} --- Project Name: ${
          repo.name
        } --- Project Description: ${
          repo.description
        } --- Project tags: ${repo.topics.join(', ')} --- Project link: ${
          repo.html_url
        }`,
      )
    })
    return convertion.join('; ')
  }

  async function chat(event: FormEvent, message: string) {
    event.preventDefault()

    if (!message) return
    let messages = chats
    messages.push({ role: 'user', content: message })

    setIsTyping(true)
    setChats(messages)
    setMessage('')

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 90000)

    try {
      const response = await fetch(
        'https://api.openai.com/v1/chat/completions',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_OPEN_AI_API_KEY}`,
          },
          signal: controller.signal,
          body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            temperature: 0,
            messages: createMessagesRequest(messages),
          }),
        },
      )

      if (!response.ok) {
        throw new Error(
          `AI Assistant error: ${response.status} - ${response.statusText}`,
        )
      }

      const responseData = await response.json()
      messages.push(responseData.choices[0].message)
      setChats(messages)
      setIsTyping(false)
    } catch (error) {
      messages.push({
        content:
          '⚠️ Unfortunately, I was unable to come up with a response in time. Please try again later.',
        role: 'assistant',
      })
      setChats(messages)
      setIsTyping(false)
    } finally {
      clearTimeout(timeoutId)
    }
  }

  function createMessagesRequest(messages: Array<MessageParam>) {
    const principalMessage: MessageParam = {
      role: 'user',
      content: `Meu nome é Douglas, tenho 32 anos, sou desenvolvedor front-end e estou desempregado em busca de uma recolocação no mercado de trabalho. Abaixo segue meu currículo e alguns projetos pessoais no Github, ambos estão em inglês. As próximas mensagens serão perguntas de recrutadores. Por favor, responda como se fosse eu, seja objetivo e profissional, insira link para o projeto do github caso a resposta cite algum projeto, usando o mesmo idioma da pergunta. Responda as perguntas apenas se ela estiver relacionada ao meu perfil profissional, experiência de trabalho, habilidades técnicas ou projetos no Github. A pergunta deve contribuir para a avaliação de minha adequação para um processo seletivo ou estar diretamente relacionada ao meu currículo. Não reponder que trabalhei profissionalmente com uma tecnologia que o recrutador perguntou e que não consta no meu currículo. A resposta deve estar em markdown. O meu currículo é: '''${myProfessionalBackground}'''. Os meus projetos no GitHub são: '''${convertReposInText()}'''`,
    }
    if (chats.length < 3) {
      return [principalMessage, ...messages]
    }
    return [principalMessage, ...chats.slice(-1)]
  }

  function getInputFormButton() {
    if (isTyping) {
      return (
        <Button type="submit" disabled={isTyping} className="w-36 flex gap-2">
          <Loader2 className="h-4 w-4 animate-spin" />
          <span>AI Thinking... </span>
        </Button>
      )
    } else {
      return (
        <Button
          type="submit"
          disabled={isTyping}
          className="w-36 flex gap-2 items-center"
        >
          <Bot className="h-4 w-4" />
          <span>Ask me!</span>
        </Button>
      )
    }
  }

  function createChatMessage(chat: MessageParam, index: number) {
    switch (chat.role) {
      case 'user':
        return (
          <li
            key={index}
            className="self-end w-full py-4 border-b last:border-b-0 last:pb-0"
          >
            <div className="flex justify-end items-start gap-4 ">
              <div className="flex flex-col items-end">
                <span className="font-extrabold text-primary">You:</span>
                <ReactMarkdown
                  className="leading-relaxed"
                  components={customReactMarkdownComponent}
                  children={chat.content}
                />
              </div>
              <Avatar className="h-6 w-6">
                <AvatarImage src={genericAvatar} />
                <AvatarFallback>User</AvatarFallback>
              </Avatar>
            </div>
          </li>
        )
      case 'assistant':
        return (
          <li
            key={index}
            className="self-start w-full py-4 border-b last:border-b-0 last:pb-0"
          >
            <div className="flex justify-start items-start gap-4">
              <Avatar className="h-6 w-6">
                <AvatarImage src={botAvatar} />
                <AvatarFallback>AI Assistant</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="font-extrabold text-primary">
                  AI Assistant:
                </span>
                <ReactMarkdown
                  className="leading-relaxed"
                  components={customReactMarkdownComponent}
                  children={chat.content}
                />
              </div>
            </div>
          </li>
        )
      default:
        return ''
    }
  }

  function submitFormWithExample(example: string) {
    if (!isTyping) {
      setMessage(example)
      setSubmitForm(true)
    }
  }

  return (
    <Card className="border-0">
      <CardHeader>
        <CardTitle>Chat with our AI Assistant!</CardTitle>
        <CardDescription>
          Ask about my profile, experience, and projects!
          <br /> Please confirm the AI responses with a Douglas interview.
        </CardDescription>
      </CardHeader>
      <CardContent className="max-h-80 overflow-y-scroll">
        <div className="flex flex-col gap-3">
          {questionExamples.map(example => {
            return (
              <Badge
                key={example}
                variant="secondary"
                className="self-start text-sm"
                style={{ cursor: isTyping ? 'not-allowed' : 'pointer' }}
                onClick={() => submitFormWithExample(example)}
              >
                {example}
              </Badge>
            )
          })}
        </div>

        <ul className="flex flex-col" ref={chatWrapper}>
          {chats?.length
            ? chats.map((chat, index) => createChatMessage(chat, index))
            : null}
        </ul>
      </CardContent>
      <CardFooter>
        <form
          ref={formRef}
          onSubmit={event => chat(event, message)}
          className="flex gap-2 w-full mt-4"
        >
          <Input
            type="text"
            className="flex-1"
            placeholder="Type your question..."
            value={message}
            onChange={event => setMessage(event.target.value)}
            disabled={isTyping}
            required
          />
          {getInputFormButton()}
        </form>
      </CardFooter>
    </Card>
  )
}
