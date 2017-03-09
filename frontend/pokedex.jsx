import React from 'react';
import  ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import pokemonDetailReducer from './reducers/pokemon_detail_reducer';
import {fetchPokemon} from './util/api_util';
import {receivePokemon} from './actions/pokemon_actions';

document.addEventListener('DOMContentLoaded', () => {
  window.pokemonDetailReducer = pokemonDetailReducer;
  window.receivePokemon = receivePokemon;
  window.fetchPokemon = fetchPokemon;
  const store = configureStore();
  window.store = store;
  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, rootEl);
});
