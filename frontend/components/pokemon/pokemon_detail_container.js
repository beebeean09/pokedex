import { connect } from 'react-redux';
import { requestAllPokemon, requestSinglePokemon } from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = ({pokemonDetail}) => ({
  pokemon: pokemonDetail
});

const mapDispatchToProps = (dispatch, pokemon) => ({
  requestSinglePokemon: () => (dispatch(requestSinglePokemon(pokemon.params.id)))
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);
