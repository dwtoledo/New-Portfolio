import { Terminal } from 'lucide-react'

export function Footer() {
  return (
    <footer className="container py-5 px-10 flex gap-2 items-center justify-center">
      <Terminal size={16} className="text-primary" strokeWidth="3" />
      <code>
        {new Date().getFullYear()}, Developed by Douglas Toledo using{' '}
        <strong>React</strong>
      </code>
    </footer>
  )
}
