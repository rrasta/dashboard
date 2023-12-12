import React from 'react'

import { Route, Routes } from 'react-router-dom'

import { Menu } from './components/menu/menu.component.tsx'
import { MainLayout } from './layout/main/main.layout.tsx'
import { IndexPage } from './pages/index/index.page.tsx'

export const DashboardPage: React.FC = () => {
  return (
    <MainLayout>
      <Menu />
      <Routes>
        <Route index element={<IndexPage />} />
      </Routes>
    </MainLayout>
  )
}
