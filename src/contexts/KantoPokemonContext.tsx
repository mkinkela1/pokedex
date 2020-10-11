import React, {createContext, useEffect, useState} from "react";
import axios from "axios";

interface PokemonData {
  name?: string,
  sprites?: {
    other: {
      'official-artwork': {
        front_default: string
      }
    }
  }
}

interface KantoPokemonContextProviderProps {
  kantoPokemonList: PokemonData[],
  children: React.ReactNode
}

export const KantoPokemonContext = createContext<Partial<KantoPokemonContextProviderProps>>({});

const KantoPokemonContextProvider = ({children}: Partial<KantoPokemonContextProviderProps>) => {

  const [kantoPokemonList, setKantoPokemonList] = useState<PokemonData[]>([]);

  useEffect(() => {
    axios(`https://pokeapi.co/api/v2/pokemon/?limit=151`)
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
      setKantoPokemonList(list);
    })
      .catch(e => console.log(e));
  }, []);

  return (
    <KantoPokemonContext.Provider value={{
      kantoPokemonList
    }}>
      {children}
    </KantoPokemonContext.Provider>
  );
}

export default KantoPokemonContextProvider;