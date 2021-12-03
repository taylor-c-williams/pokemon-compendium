import PokeItem from '../PokeItem/PokeItem';
import PokemonList from './PokemonList';

export default function PokeList({ pokedex }) {
	// const filteredPokemon = pokedex.filter(
	// 	(pokemon) => pokemon.type_1 === selectedType
	// );
	// console.log(filteredPokemon);

	return (
		<div>
			{pokedex.map((pokemon) => (
				<PokeItem {...pokemon} key={pokemon._id} />
			))}
			;
		</div>
	);
}
