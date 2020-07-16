import React, { Suspense } from 'react'

import { BrowserRouter } from 'react-router-dom'

import { ApolloProvider } from '@apollo/react-hooks'

import { Loading } from './components/Loading'
import { PageLayout } from './components/PageLayout/PageLayout'

import apolloClient from './api/apollo'
import Pokemon from './pages/Pokemon'

import './App.css'

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <BrowserRouter>
        <PageLayout>
          <Suspense fallback={<Loading />}>
            <Pokemon />
          </Suspense>
        </PageLayout>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
