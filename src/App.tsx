import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Routes from "./Routes";

function App() {
  return (
    <BrowserRouter forceRefresh>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
