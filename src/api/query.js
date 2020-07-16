import { gql } from 'apollo-boost'

export const GET_POKEMONS = gql`
  query Pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      name
      image
      types
    }
  }
`

export const GET_POKEMON_BY_ID = gql`
  query Pokemon($id: String!) {
    pokemon(id: $id) {
      id
      name
      image
      types
    }
  }
`
