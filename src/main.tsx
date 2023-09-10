import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from '@/app.tsx'
import '@/index.css'

import '@fontsource/aldrich'

import '@fontsource/orbitron/400.css'
import '@fontsource/orbitron/500.css'
import '@fontsource/orbitron/600.css'
import '@fontsource/orbitron/700.css'
import '@fontsource/orbitron/800.css'
import '@fontsource/orbitron/900.css'

import '@fontsource/rajdhani/300.css'
import '@fontsource/rajdhani/400.css'
import '@fontsource/rajdhani/500.css'
import '@fontsource/rajdhani/600.css'
import '@fontsource/rajdhani/700.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
