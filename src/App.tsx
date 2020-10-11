import React from 'react';
import {BrowserRouter} from "react-router-dom";

import './App.scss';
import Routes from "./Routes";
import MenuContextProvider from "./contexts/MenuContext";
import PokemonListContextProvider from "./contexts/PokemonListContext";
import FavouritePokemonContextProvider from "./contexts/FavouritePokemonContext";

function App() {
  return (
    <MenuContextProvider>
      <PokemonListContextProvider>
        <FavouritePokemonContextProvider>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </FavouritePokemonContextProvider>
      </PokemonListContextProvider>
    </MenuContextProvider>
  );
}

export default App;
