import React, {createContext, useState} from "react";

interface FavouritePokemonContextProviderProps {
  favouritePokemon: number[],
  addNewFavourite: (id: number) => void,
  removeFavourite: (id: number) => void,
  checkIfFavourite: (id: number) => boolean,
  toggleFavourite: (id: number) => void,
  children: React.ReactNode
}

export const FavouritePokemonContext = createContext<Partial<FavouritePokemonContextProviderProps>>({});

const FavouritePokemonContextProvider = ({children}: Partial<FavouritePokemonContextProviderProps>) => {

  const [favouritePokemon, setFavouritePokemon] = useState<number[]> ([]);

  const addNewFavourite = (id: number) => setFavouritePokemon(prevState => prevState.concat(id))
  const removeFavourite = (id: number) => setFavouritePokemon(prevState => prevState.filter(pokemonId => id !== pokemonId))
  const checkIfFavourite = (id: number) => favouritePokemon.includes(id)
  const toggleFavourite = (id: number) => {
    if (checkIfFavourite(id))
      removeFavourite(id)
    else addNewFavourite(id);
  }

  return (
    <FavouritePokemonContext.Provider value={{
      favouritePokemon,
      addNewFavourite,
      removeFavourite,
      checkIfFavourite,
      toggleFavourite
    }}>
      {children}
    </FavouritePokemonContext.Provider>
  )
}

export default FavouritePokemonContextProvider;