import { values } from 'lodash';

const selectAllPokemon = ({pokemon}) => Object.keys(pokemon).map(id => pokemon[id]);

export default selectAllPokemon;
