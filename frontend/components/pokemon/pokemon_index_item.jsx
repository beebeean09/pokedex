import React from 'react';
import { Link } from 'react-router';

const PokemonIndexItem = ({pokemon}) => {

  return (
    <ul>
      <Link to={`/pokemon/${pokemon.id}`}><li>{pokemon.name}</li></Link>
      <img src={pokemon.image_url} />
    </ul>
  );
};

export default PokemonIndexItem;
