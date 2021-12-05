import PokeItem from '../PokeItem/PokeItem';

export default function PokeList({ pokedex }) {
	return (
		<div>
			{pokedex.map((pokemon) => (
				<PokeItem {...pokemon} key={pokemon._id} />
			))}
			;
		</div>
	);
}
