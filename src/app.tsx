import { ThemeProvider } from './components/theme-provider'
import { ModeToggle } from './components/mode-toggle'
import './index.css'

export function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <h1>Hello New Portfolio</h1>
      <ModeToggle />
    </ThemeProvider>
  )
}
