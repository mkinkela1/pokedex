import React, { FunctionComponent } from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { Main as MainLayout } from './layouts';

import { PokemonList as PokemonListView } from './pages';
import RouteWithLayout from './components';

const Routes: FunctionComponent = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/pokedex" />
      <RouteWithLayout
        component={PokemonListView}
        exact
        layout={MainLayout}
        path="/pokedex"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;