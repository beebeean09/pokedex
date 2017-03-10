import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import { Link } from 'react-router';


class PokemonDetail extends React.Component {

  componentDidMount(){
    this.props.requestSinglePokemon(this.props.params.id);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.params.id !== this.props.params.id) {
      newProps.requestSinglePokemon(newProps.params.id);
    }
  }

  getItems (){
    return this.props.pokemon.items;
  }

  render() {
    if (this.props.pokemon.id) {
      const getItems = () => {
        return this.props.pokemon.items;
      };

      const items = this.props.pokemon.items.map((item, idx) => {
        return (
          <ul key={idx}>
            <Link to={`/pokemon/${this.props.pokemon.id}/items/${item.id}`} key={idx}>{item.name}</Link>;
          </ul>
        );
      });
      // debugger;

      return (
        <section className="pokedex">
          <ul>
            <h1>{this.props.pokemon.name}</h1>
            <h1>{this.props.pokemon.attack}</h1>
            <h1>{this.props.pokemon.defense}</h1>
            {items}

          </ul>
          <ul>
          </ul>
          {this.props.children}
        </section>
      );
    } else {
      return (<div></div>);
    }

  }
    // const pokemon = this.props.pokemon.items;
    // const pokemonDetailItems = pokemon.map(item => <PokemonDetailItem key={item.id} pokemon={item}/>);
}

export default PokemonDetail;
