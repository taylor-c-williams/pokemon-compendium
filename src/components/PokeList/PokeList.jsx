import PokeItem from '../PokeItem/PokeItem';

export default function PokeList({ pokedex }) {
	return (
		<div className="pokeList">
			{pokedex.map(({ pokemon, url_image, id }) => {
				return (
					<PokeItem
						pokemon={pokemon}
						url_image={url_image}
						id={id}
						key={pokemon.id}
					/>
				);
			})}
		</div>
	);
}
