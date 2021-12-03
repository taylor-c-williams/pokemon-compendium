export default function PokeItem({
	pokemon,
	url_image,
	id,
	_id,
	type_1,
	selectedType,
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
