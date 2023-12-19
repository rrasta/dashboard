import React from 'react'

import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import './index.css'
import {
  MainLayout,
  MenuContainer
} from './pages/dashboard/layout/main/main.layout.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <div style={{ display: 'flex' }}>
        <MenuContainer>
          <p>menu</p>
        </MenuContainer>
        <MainLayout>{
          <p>main</p>
        }</MainLayout>
      </div>
    </BrowserRouter>
  </React.StrictMode>
)
