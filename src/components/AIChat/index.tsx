import { FormEvent, useEffect, useRef, useState } from 'react'
import ReactMarkdown, { Components } from 'react-markdown'
import { Bot, Loader2 } from 'lucide-react'
import botAvatar from '../../assets/images/bot-avatar.webp'
import genericAvatar from '../../assets/images/generic-avatar.webp'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

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

const questionExamples = [
  'What is your most recent work experience?',
  'What are your strengths?',
  'What hard skills do you have?',
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
        `${import.meta.env.VITE_BACKEND_URL}/chat/completions`,
        {
          method: 'POST',
          headers: {
            accept: 'application/json',
          },
          signal: controller.signal,
          body: JSON.stringify({
            role: 'user',
            content: message
          }),
        },
      )

      if (!response.ok) {
        throw new Error(
          `AI Assistant error: ${response.status} - ${response.statusText}`,
        )
      }

      messages.push(await response.json())
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

  function getInputFormButton() {
    if (isTyping) {
      return (
        <Button
          type="submit"
          disabled={isTyping}
          className="w-36 flex gap-2 bg-complementary hover:bg-complementary-foreground"
        >
          <Loader2 className="h-4 w-4 animate-spin" />
          <span>AI Thinking... </span>
        </Button>
      )
    } else {
      return (
        <Button
          type="submit"
          disabled={isTyping}
          className="w-36 flex gap-2 items-center bg-complementary hover:bg-complementary-foreground"
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
        <CardTitle className="flex items-center gap-2">
          <span>✨ Douglas AI Assistant</span>
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger>
                <Badge className="self-start bg-complementary hover:cursor-default hover:bg-complementary-foreground">
                  beta
                </Badge>
              </TooltipTrigger>
              <TooltipContent>
                <p className="w-[200px] text-popover-foreground">
                  This assistant is powered by an OpenAI model that has been fed
                  with my personal data. As it is still in the testing phase,
                  the AI responses may not always be completely accurate.
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CardTitle>
        <CardDescription>
          Find out things about me faster by asking my AI Assistant. Ask me
          about my profile, work, and project experiences.
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
