import React from 'react';
import {BrowserRouter} from "react-router-dom";

import './App.scss';
import Routes from "./Routes";
import MenuContextProvider from "./contexts/MenuContext";
import PokemonListContextProvider from "./contexts/PokemonListContext";

function App() {
  return (
    <MenuContextProvider>
      <PokemonListContextProvider>
        <BrowserRouter forceRefresh>
          <Routes />
        </BrowserRouter>
      </PokemonListContextProvider>
    </MenuContextProvider>
  );
}

export default App;
