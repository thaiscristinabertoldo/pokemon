import React, { memo, lazy, Suspense } from 'react'

import { Switch, Route, Redirect } from 'react-router-dom'

import { Loading } from '../../components/Loading'

const PokemonList = lazy(() => import('./List'))
const PokemonForm = lazy(() => import('./Form'))

const Pokemon = memo(() => {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path="/pokemon/:id" exact component={PokemonForm} />
        <Route path="/pokemon" exact component={PokemonList} />
        <Redirect to="/pokemon" />
      </Switch>
    </Suspense>
  )
})

export default Pokemon
