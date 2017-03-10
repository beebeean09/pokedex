import { values } from 'lodash';

export const selectAllPokemon = ({pokemon}) => Object.keys(pokemon).map(id => pokemon[id]);

export const selectPokemonItem = (state, itemId) => {
  let array = [];
  state.pokemonDetail.items.forEach ( obj => {
    if (obj.id === itemId) {
      array.push(obj);
  }});
  return array;
};

// pokemonDetail.items.forEach ((obj) => { if (obj.id === itemId){return obj ;}}
