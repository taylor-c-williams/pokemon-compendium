export default function PokeItem({
	pokemon,
	filteredPokemon,
	url_image,
	id,
	type_1,
}) {
	return (
		<section className="pokemonCard">
			<img src={url_image} alt={pokemon} />
			<h1> {pokemon} </h1>
			Pokedex Number: {id}
			Type: {type_1}
		</section>
	);
}
