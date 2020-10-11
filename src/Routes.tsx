import React, { FunctionComponent } from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { Main as MainLayout } from './layouts';

import {
  PokemonList as PokemonListView,
  SinglePokemonData as SinglePokemonDataView,
  MyPokemonList as MyPokemonListView
} from './pages';
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
      <RouteWithLayout
        component={SinglePokemonDataView}
        exact
        layout={MainLayout}
        path="/pokemon/:id"
      />
      <RouteWithLayout
        component={MyPokemonListView}
        exact
        layout={MainLayout}
        path="/my-pokemon"
      />
      <Redirect to="/pokemon/404" />
    </Switch>
  );
};

export default Routes;