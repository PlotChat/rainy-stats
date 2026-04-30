import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/global.css'
import './assets/variables.css'
import App from './App.tsx'
import { WidgetsProvider } from './context/Widgets/WidgetsProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WidgetsProvider>
      <App />
    </WidgetsProvider>
  </StrictMode>,
)
