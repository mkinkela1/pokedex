import React, {createContext, useEffect, useState} from "react";
import axios from 'axios';

interface PokemonData {

}

interface FavouritePokemonContextProviderProps {
  favouritePokemon: number[],
  addNewFavourite: (id: number) => void,
  removeFavourite: (id: number) => void,
  checkIfFavourite: (id: number) => boolean,
  toggleFavourite: (id: number) => void,
  favouritePokemonData: PokemonData[]
  children: React.ReactNode
}

export const FavouritePokemonContext = createContext<Partial<FavouritePokemonContextProviderProps>>({});

const FavouritePokemonContextProvider = ({children}: Partial<FavouritePokemonContextProviderProps>) => {

  const [favouritePokemon, setFavouritePokemon] = useState<number[]> ([]);
  const [favouritePokemonData, setFavouritePokemonData] = useState<PokemonData[]> ([]);

  const addNewFavourite = (id: number) => setFavouritePokemon(prevState => prevState.concat(id))
  const removeFavourite = (id: number) => setFavouritePokemon(prevState => prevState.filter(pokemonId => id !== pokemonId))
  const checkIfFavourite = (id: number) => favouritePokemon.includes(id)
  const toggleFavourite = (id: number) => {
    if (checkIfFavourite(id))
      removeFavourite(id)
    else addNewFavourite(id);
  }

  useEffect(() => {
    Promise.all(
      favouritePokemon.map((id: number) => axios(`https://pokeapi.co/api/v2/pokemon/${id}`))
    )
      .then((r: any) => setFavouritePokemonData(r.map((pokemon: any) => pokemon.data)))
  }, [favouritePokemon]);

  return (
    <FavouritePokemonContext.Provider value={{
      favouritePokemon,
      addNewFavourite,
      removeFavourite,
      checkIfFavourite,
      toggleFavourite,
      favouritePokemonData
    }}>
      {children}
    </FavouritePokemonContext.Provider>
  )
}

export default FavouritePokemonContextProvider;