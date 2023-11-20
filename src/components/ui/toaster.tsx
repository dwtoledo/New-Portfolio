import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from '@/components/ui/toast'
import { useToast } from '@/components/ui/use-toast'
import { AIAssistantContext } from '@/contexts/ai-assistant'
import { useContext } from 'react'

export function Toaster() {
  const { toasts } = useToast()
  const { isOpen, setIsOpen } = useContext(AIAssistantContext)

  return (
    <ToastProvider duration={300000}>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props} open={isOpen} onOpenChange={setIsOpen}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
