import React from 'react'
import Router from './router/Router.tsx'
import { Container } from '@mui/material'

const App: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Router />
    </Container>
  )
}

export default App
