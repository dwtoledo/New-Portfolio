import { Terminal } from 'lucide-react'

export function Footer() {
  return (
    <footer className="container py-5 px-10 flex gap-2 items-center justify-center">
      <Terminal size={16} className="text-primary" strokeWidth="3" />
      <span>Developed by Douglas Toledo, {new Date().getFullYear()}</span>
    </footer>
  )
}
