import React from 'react'

import { Route, Routes } from 'react-router-dom'

import { Menu } from './components/menu/menu.component.tsx'
import { ContentStyled } from './dashboard.style.tsx'
import { MainLayout } from './layout/main/main.layout.tsx'
import { IndexPage } from './pages/index/index.page.tsx'

export const DashboardPage: React.FC = () => {
  return (
    <MainLayout>
      <Menu />
      <ContentStyled>
        <Routes>
          <Route index element={<IndexPage />} />
        </Routes>
      </ContentStyled>
    </MainLayout>
  )
}
