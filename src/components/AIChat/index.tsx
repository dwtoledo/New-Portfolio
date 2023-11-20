import { FormEvent, useContext, useEffect, useRef, useState } from 'react'
import { GitHubProfileContext } from '../../contexts/github-profile'
import { OpenAI } from 'openai'
import { ChatCompletionMessageParam } from 'openai/resources/chat/index.mjs'
import ReactMarkdown, { Components } from 'react-markdown'
import { Loader2, Send } from 'lucide-react'
import genericAvatar from '../../assets/images/generic-avatar.svg'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"

const openai = new OpenAI({
  organization: import.meta.env.VITE_OPENAI_ORGANIZATION_ID,
  apiKey: import.meta.env.VITE_OPENAI_KEY,
  dangerouslyAllowBrowser: true,
})

const myProfessionalBackground = `
Name: Douglas Wilian de Toledo
Address: Toronto, Ontario - Canada
E-mail: dwtoledo@outlook.com
Portfolio: https://dwtoledo.github.io/portfolio
GitHub: https://github.com/dwtoledo
LinkedIn: https://www.linkedin.com/in/dwtoledo

SUMMARY:
  • Experienced in developing accessible and user-friendly interfaces for responsive web applications;
  • Skilled in Agile/Scrum methodologies, collaborating with cross-functional teams, and efficiently managing the development life cycle.
  • Enhanced adaptability, communication, resilience, and teamwork through seven years as a Manufacturing Engineer and four as an Entrepreneur, resulting in high-quality work and analytical process-driven thinking.

TECHNOLOGIES I HAVE WORKED WITH:
  • HTML, CSS, SCSS, JavaScript, TypeScript, Angular, AngularJS, Figma, Microsoft Azure DevOps, Git, REST Client, Material UI components, Bootstrap, and CI/CD (Continuous Integration & Deployment).

TECHNOLOGIES I HAVE NOT WORKED, BUT I'M FAMILIAR WITH:
  • Python, React, React Hooks, React Context API, Zod data validations, CSS modules, Styled-components, TailwindCSS, Radix and Shadcn UI components, TDD (Test-driven development) with Jest, and OOP (Object-oriented Programming).

WORK EXPERIENCE:
  • Front End Developer at InterPlayers (Feb, 2021 - Feb, 2023):
    - Designed interfaces with Figma and developed them with HTML, SCSS, JavaScript, TypeScript and Angular 8 in collaboration with the field support team to accelerate issue resolutions and boost their productivity by 35%;
    - Facilitated the seamless distribution of 'vouchers' to pharmaceutical representatives and physicians using Angular 8, which led to contracts with three major pharmaceutical companies due to an excellent user experience and efficient REST API integration due high data processing;
    - Customize a SaaS (Software as a Service) AngularJs marketplace for different customers' visual identities. This effort improved the user experience and garnered team recognition while boosting customer satisfaction.

  • Manufacturing Engineer at Flex (Feb, 2014 - Sep, 2020);
  • Manufacturing Engineering Intern at Motorola (Aug, 2011 - Aug, 2013).

EDUCATION:
  • MBA., Business Management at FGV - Getúlio Vargas Foundation, Brazil (Sep, 2014 - Sep, 2018);
  • B.Eng., Electrical Engineering at PUC - Pontifical Catholic University, Brazil (Feb, 2009 - Dec, 2013).

LANGUAGES:
  • English and Portuguese.`

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

export function AIChat() {
  const [message, setMessage] = useState('')
  const [chats, setChats] = useState<Array<ChatCompletionMessageParam>>([])
  const [isTyping, setIsTyping] = useState(false)
  const { repos, profile } = useContext(GitHubProfileContext)
  const chatWrapper = useRef<HTMLUListElement>(null)

  useEffect(() => {
    observeChatMessages()
  }, [])

  function observeChatMessages() {
    const observer = new MutationObserver(mutationList =>
      mutationList.filter(mutation => mutation.type === 'childList').forEach(mutation => {
        mutation.addedNodes.forEach(() => {
          if (chatWrapper.current) {
            const { current } = chatWrapper;
            if (current.children.length > 0) {
              const lastChild = current.children[current.children.length - 1] as HTMLElement;
              lastChild.scrollIntoView({ behavior: "smooth", block: "nearest" });
            }
          }
        });
      }));

    if (chatWrapper.current) observer.observe(chatWrapper.current, { childList: true, subtree: true });
  }

  function convertReposInText() {
    if (!repos.length) return 'Error on load my GitHub projects'
    let convertion: Array<any> = []
    repos.forEach((repo, index) => {
      convertion.push(
        `Project #${index + 1} --- Project Name: ${repo.name} --- Project Description: ${repo.description
        } --- Project tags: ${repo.topics.join(', ')} --- Project link: ${repo.html_url
        }`,
      )
    })
    return convertion.join('; ')
  }

  async function chat(event: FormEvent, message: string) {
    event.preventDefault()
    if (!message) return

    setIsTyping(true)

    let messages = chats
    messages.push({ role: 'user', content: message })

    setChats(messages)
    setMessage('')

    await openai.chat.completions
      .create({
        model: 'gpt-3.5-turbo',
        temperature: 0,
        messages: createMessagesRequest(messages),
      })
      .then(response => {
        messages.push(response.choices[0].message)
        setChats(messages)
        setIsTyping(false)
      })
      .catch(error => {
        console.log(error)
      })
  }

  function createMessagesRequest(messages: ChatCompletionMessageParam[]) {
    const principalMessage: ChatCompletionMessageParam = {
      role: 'user',
      content: `Meu nome é Douglas, sou desenvolvedor front-end. Abaixo segue meu currículo e alguns projetos pessoais no Github, ambos estão em inglês. As próximas mensagens serão perguntas de recrutadores. Por favor, responda como se fosse eu, seja objetivo e profissional, insira link para o projeto do github caso a resposta cite o projeto, usando o mesmo idioma da pergunta. Responda as perguntas apenas se ela estiver relacionada ao meu perfil profissional, experiência de trabalho, habilidades técnicas ou projetos no Github. A pergunta deve contribuir para a avaliação de minha adequação para um processo seletivo ou estar diretamente relacionada ao meu currículo. Não reponder que trabalhei profissionalmente com uma tecnologia que o recrutador perguntou e que não consta no meu currículo. A resposta deve estar em markdown. O meu currículo é: '''${myProfessionalBackground}'''. Os meus projetos no GitHub são: '''${convertReposInText()}'''`,
    }
    if (chats.length < 3) {
      return [principalMessage, ...messages]
    }
    return [principalMessage, ...chats.slice(-1)]
  }

  function getInputFormButton() {
    if (isTyping) {
      return (
        <Button type="submit" disabled={isTyping} className='w-32 flex gap-2'>
          <Loader2 className="h-4 w-4 animate-spin" />
          <span>Thinking... </span>
        </Button>)
    } else {
      return (
        <Button type="submit" disabled={isTyping} className='w-32 flex gap-2'>
          <Send className="h-4 w-4" />
          <span>Send</span>
        </Button>)
    }
  }

  function createChatMessage(chat: ChatCompletionMessageParam, index: number) {
    switch (chat.role) {
      case 'user':
        return (
          <li key={index} className='self-end'>
            <div className='flex items-start gap-4'>
              <div className='flex flex-col items-end'>
                <span className='font-extrabold text-primary'>You:</span>
                <ReactMarkdown className="leading-relaxed"
                  components={customReactMarkdownComponent}
                  children={chat.content}
                />
              </div>
              <Avatar className='h-10 w-10 border-2	border-border'>
                <AvatarImage src={genericAvatar} />
                <AvatarFallback>User</AvatarFallback>
              </Avatar>
            </div>
          </li>
        )
      case 'assistant':
        return (
          <li key={index}>
            <div className='flex items-start gap-4'>
              <Avatar className='h-10 w-10 border-2	border-border'>
                <AvatarImage src={profile.avatar_url} />
                <AvatarFallback>AI Assistant</AvatarFallback>
              </Avatar>
              <div className='flex flex-col'>
                <span className='font-extrabold text-primary'>
                  AI Assistant:
                </span>
                <ReactMarkdown className="leading-relaxed"
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

  return (
    <Card>
      <CardHeader>
        <CardTitle>Chat with our AI Assistant!</CardTitle>
        <CardDescription>
          Ask about my profile, experience, and projects!
          <br /> Please confirm the AI responses with a Douglas interview.
        </CardDescription>
      </CardHeader>
      <CardContent className='max-h-80 overflow-y-scroll'>
        <ul className='flex flex-col gap-4' ref={chatWrapper}>
          {chats?.length ? chats.map((chat, index) => createChatMessage(chat, index)) : null}
          <div className='mt-2'></div>
        </ul>
      </CardContent>
      <CardFooter>
        <form onSubmit={event => chat(event, message)} className='flex gap-2 w-full'>
          <Input
            type="text"
            className='flex-1'
            placeholder="Type your question..."
            value={message}
            onChange={event => setMessage(event.target.value)}
            disabled={isTyping}
          />
          {getInputFormButton()}
        </form>
      </CardFooter>
    </Card >
  )
}
