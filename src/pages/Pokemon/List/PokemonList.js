import React, { memo, useCallback, useState, useEffect } from 'react'

import { useHistory } from 'react-router-dom'

import { useQuery } from '@apollo/react-hooks'

import { useDebounce } from 'use-lodash-debounce'

import { Title } from '../../../components/Title/Title'
import { Container } from '../../../components/Container'
import { Card } from '../../../components/Card/Card'
import { Loading } from '../../../components/Loading'
import { Input } from '../../../components/Input'
import { Notfound } from '../../../components/Notfound/Notfound'

import { GET_POKEMONS } from '../../../api/query'

const first = 99

const PokemonList = memo(() => {
  const history = useHistory()

  const [filter, setFilter] = useState()
  const [pokemonList, setPokemonList] = useState()

  const debouncedFilter = useDebounce(filter, 500)

  const { data: { pokemons } = [], loading } = useQuery(GET_POKEMONS, {
    variables: { first },
  })

  useEffect(() => {
    if (pokemons) {
      setPokemonList(pokemons)
    }
  }, [pokemons])

  useEffect(() => {
    if (pokemons && filter) {
      const pokemonFilter = pokemons.filter((pokemon) => {
        return pokemon.name.toLowerCase().includes(filter.toLowerCase())
      })
      setPokemonList(pokemonFilter)
    } else if (pokemons) {
      setPokemonList(pokemons)
    }
  }, [debouncedFilter, filter, pokemons])

  const handleEdit = useCallback(
    (id) => {
      history.push(`/pokemon/${id}`)
    },
    [history]
  )

  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <Container>
          <Title title="Lista de Pokémons" />

          <Container flexDirection="row" justifyContent="center">
            <Input onChange={(e) => setFilter(e.target.value)} placeholder="Pesquise o pokémon" />
          </Container>

          {pokemonList && pokemonList.length > 0 ? (
            <Container flexDirection="row" justifyContent="space-around" margin="30px 0 0 0">
              {pokemonList.map((pokemon) => {
                return <Card key={pokemon.id} pokemon={pokemon} onEdit={handleEdit} />
              })}
            </Container>
          ) : (
            <Notfound message="Nenhum pokémon encontrado!" />
          )}
        </Container>
      )}
    </>
  )
})

export default PokemonList
