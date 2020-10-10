import React from 'react';
import {BrowserRouter} from "react-router-dom";

import './App.scss';
import Routes from "./Routes";
import MenuContextProvider from "./contexts/MenuContext";

function App() {
  return (
    <MenuContextProvider>
      <BrowserRouter forceRefresh>
        <Routes />
      </BrowserRouter>
    </MenuContextProvider>
  );
}

export default App;
