import PokeItem from '../PokeItem/PokeItem';

export default function PokeList({ pokedex, selectedType }) {
	const filteredPokemon = pokedex.filter(
		(pokemon) => pokemon.type_1 === selectedType
	);
	console.log(filteredPokemon);

	return (
		<div>
			{pokedex.map((pokemon) => (
				<PokeItem {...pokemon} />
			))}
			;
		</div>
	);
}
