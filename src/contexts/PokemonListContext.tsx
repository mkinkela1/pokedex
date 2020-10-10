import React, {createContext, useEffect, useState} from "react";
import axios from "axios";
import {LIMIT_POKEMON_FETCH} from "../constants/LimitPokemon";

interface PokemonData {

}

interface PokemonListContextProviderProps {
  pokemonList: PokemonData[],
  loadMorePokemon: () => void,
  children: React.ReactNode
}

export const PokemonListContext = createContext<Partial<PokemonListContextProviderProps>>({});

const PokemonListContextProvider = ({children}: Partial<PokemonListContextProviderProps>) => {

  // pokemonList because the word pokemons doesn't exist!!!!!!!
  const [pokemonList, setPokemonList] = useState([]);
  const [offset, setOffset] = useState(0);

  const loadMorePokemon = () => {
    axios(`https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT_POKEMON_FETCH}&offset=${offset}`)
      .then(r => {
        return r.data.results;
      })
      .then(r => {
        return Promise.all(
          // @ts-ignore
          r.map(({url}) => axios(url))
        )
      }).then(r => {
      const list = r.map(({data}: any) => data);
      // @ts-ignore
      setPokemonList(prevState => {
        console.log([...prevState, ...list])
        return [...prevState, ...list]
      });
      setOffset(prevState => prevState + LIMIT_POKEMON_FETCH);
    })
      .catch(e => console.log(e));
  }

  useEffect(() => {
    loadMorePokemon()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PokemonListContext.Provider value={{
      pokemonList,
      loadMorePokemon
    }}>
      {children}
    </PokemonListContext.Provider>
  );
}

export default PokemonListContextProvider;