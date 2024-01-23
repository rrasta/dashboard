import React from 'react'

import { Example } from './components/example/example.component.tsx'
import { TopBar } from '../../../../components/top-bar/top-bar.component.tsx'

export const IndexPage: React.FC = () => {
  return (
    <div>
      <TopBar title="Home page" />
      <h1>index page</h1>
      <Example />
    </div>
  )
}
