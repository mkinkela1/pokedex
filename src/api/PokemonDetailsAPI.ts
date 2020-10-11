import axios from 'axios';

export default {
  index: async (pokemonId: number) => axios(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
}