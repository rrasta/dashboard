import React from 'react'

import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { DashboardPage } from './pages/dashboard/dashboard.page.tsx'
import '@fontsource/poppins'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <DashboardPage />
    </BrowserRouter>
  </React.StrictMode>
)
