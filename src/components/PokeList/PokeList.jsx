import PokeItem from '../PokeItem/PokeItem';
import './pokelist.css';

export default function PokeList({ pokedex }) {
	return (
		<div aria-label="pokemons!" className="pokelist-body">
			{pokedex.map((pokemon) => (
				<PokeItem {...pokemon} key={pokemon._id} />
			))}
			;
		</div>
	);
}
