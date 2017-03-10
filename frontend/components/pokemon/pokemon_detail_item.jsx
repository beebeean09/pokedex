import React from 'react';
import { Link } from 'react-router';

const PokemonDetailItem = ({pokemonDetail}) => {

  return (
    <ul>
      <Link to={`/pokemon/${pokemonDetail.id}/${pokemonDetail.items[0].id}`}><li>{pokemonDetail.items[0].name}</li></Link>
    </ul>
  );
};

export default PokemonDetailItem;
