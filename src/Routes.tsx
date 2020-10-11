import React, { FunctionComponent } from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { Main as MainLayout } from './layouts';

import {PokemonList as PokemonListView, SinglePokemonData as SinglePokemonDataView} from './pages';
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
      <Redirect to="/pokemon/404" />
    </Switch>
  );
};

export default Routes;