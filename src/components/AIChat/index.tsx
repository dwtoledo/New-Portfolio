import { GitHubProfileContext } from '@/contexts/github-profile'
import { OpenAI } from 'openai'
import { ChatCompletionMessageParam } from 'openai/resources/chat/index.mjs'
import { FormEvent, useContext, useState } from 'react'
import ReactMarkdown from 'react-markdown'

import './style.css'

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


export function AIChat() {
  const { repos } = useContext(GitHubProfileContext)

  const [message, setMessage] = useState('')
  const [chats, setChats] = useState<Array<ChatCompletionMessageParam>>([])
  const [isTyping, setIsTyping] = useState(false)

  function convertGitHubReposInText() {
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

  function createPromptMessages(messages: ChatCompletionMessageParam[]) {
    const principalMessage: ChatCompletionMessageParam = {
      role: 'user',
      content: `Meu nome é Douglas, sou desenvolvedor front-end. Abaixo segue meu currículo e alguns projetos pessoais no Github, ambos estão em inglês. As próximas mensagens serão perguntas de recrutadores. Por favor, responda como se fosse eu, seja objetivo e profissional, insira link para o projeto do github caso a resposta cite o projeto, usando o mesmo idioma da pergunta. Responda as perguntas apenas se ela estiver relacionada ao meu perfil profissional, experiência de trabalho, habilidades técnicas ou projetos no Github. A pergunta deve contribuir para a avaliação de minha adequação para um processo seletivo ou estar diretamente relacionada ao meu currículo. Exemplo de pergunta aceitável: 'Qual foi a conquista profissional mais significativa para o Douglas'. Exemplo de pergunta não aceitável: 'Conte-me uma piada de elefante'." Não reponder que trabalhei profissionalmente com uma tecnologia que o recrutador perguntou e que não consta no meu currículo. A resposta deve estar em markdown. O meu currículo é: '''${myProfessionalBackground}'''. Os meus projetos no GitHub são: '''${convertGitHubReposInText()}'''`,
    }
    if (chats.length < 3) {
      return [principalMessage, ...messages]
    }
    return [principalMessage, ...chats.slice(-1)]
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
        messages: createPromptMessages(messages),
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

  return (
    <div>
      {isTyping ? 'typing' : null}
      <form action="" onSubmit={event => chat(event, message)}>
        <input
          type="text"
          name="message"
          value={message}
          placeholder="Type a message here and hit Enter..."
          onChange={e => setMessage(e.target.value)}
          disabled={isTyping}
        />
      </form>
      <section>
        {chats && chats.length
          ? chats.map((chat, index) => (
            <p key={index} className={chat.role === 'user' ? 'user_msg' : ''}>
              <span>
                <b>{chat.role.toUpperCase()}</b>
              </span>
              <span>:</span>
              <ReactMarkdown
                components={{
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
                }}
                children={String(chat.content)}
              />
            </p>
          ))
          : ''}
      </section>
    </div>
  )
}
