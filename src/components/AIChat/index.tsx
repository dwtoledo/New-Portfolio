import { GitHubProfileContext } from '@/contexts/github-profile'
import { myProfessionalBackground, getMyGitHubProjects } from '@/lib/openai'
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

export function AIChat() {
  const { repos } = useContext(GitHubProfileContext)

  const [message, setMessage] = useState('')
  const [chats, setChats] = useState<Array<ChatCompletionMessageParam>>([])
  const [isTyping, setIsTyping] = useState(false)

  function createPromptMessages(messages: ChatCompletionMessageParam[]) {
    const principalMessage: ChatCompletionMessageParam = {
      role: 'user',
      content: `Meu nome é Douglas, sou desenvolvedor front-end. Abaixo segue meu currículo e alguns projetos pessoais no Github, ambos estão em inglês. As próximas mensagens serão perguntas de recrutadores. Por favor, responda como se fosse eu, seja objetivo e profissional, insira link para o projeto do github caso a resposta cite o projeto, usando o mesmo idioma da pergunta.
            Responda as perguntas apenas se ela estiver relacionada ao meu perfil profissional, experiência de trabalho, habilidades técnicas ou projetos no Github. A pergunta deve contribuir para a avaliação de minha adequação para um processo seletivo ou estar diretamente relacionada ao meu currículo. Exemplo de pergunta aceitável: 'Qual foi a conquista profissional mais significativa para o Douglas'. Exemplo de pergunta não aceitável: 'Conte-me uma piada de elefante'."
            Não reponder que trabalhei profissionalmente com uma tecnologia que o recrutador perguntou e que não consta no meu currículo.
            A resposta deve estar em markdown.
            O meu currículo é: '''${myProfessionalBackground}'''
            Os meus projetos no GitHub são: '''${getMyGitHubProjects(repos)}'''
            `,
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
