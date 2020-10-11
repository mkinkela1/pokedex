import React, { FunctionComponent } from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { Main as MainLayout } from './layouts';

import {
  PokemonList as PokemonListView,
  SinglePokemonData as SinglePokemonDataView,
  MyPokemonList as MyPokemonListView,
  Quiz as QuizView
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
      <RouteWithLayout
        component={QuizView}
        exact
        layout={MainLayout}
        path="/who-is-that-pokemon"
      />
      <Redirect to="/pokemon/404" />
    </Switch>
  );
};

export default Routes;