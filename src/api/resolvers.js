import { GET_POKEMONS } from './query'

export const resolvers = {
  Mutation: {
    updatePokemon: (_, { id, pokemon }, { cache }) => {
      const queryResult = cache.readQuery({
        query: GET_POKEMONS,
        variables: { first: 99 },
      })

      if (queryResult) {
        const { pokemons } = queryResult
        const data = {
          pokemons: pokemons.map((p) => (p.id !== id ? p : pokemon)),
        }
        cache.writeQuery({ query: GET_POKEMONS, data })
        return data.pokemons
      }
      return []
    },
  },
}
