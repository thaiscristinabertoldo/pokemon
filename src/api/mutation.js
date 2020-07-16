import { gql } from 'apollo-boost'

export const UPDATE_POKEMON = gql`
  mutation updatePokemon($pokemonId: String!, $pokemon: Pokemon) {
    updatePokemon(id: $pokemonId, pokemon: $pokemon) @client
  }
`
