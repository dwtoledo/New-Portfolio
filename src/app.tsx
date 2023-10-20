import { ThemeProvider } from './components/theme-provider'
import { Header } from './components/Header'
import './index.css'
import { Separator } from './components/ui/separator'

export function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Header />
      <Separator />
    </ThemeProvider>
  )
}
