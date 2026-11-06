import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {TablaProvider } from './context/TablaContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TablaProvider>
      <App />
    </TablaProvider>
  </StrictMode>,
)
