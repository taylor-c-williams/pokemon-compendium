export default function PokeItem({ pokemon, url_image, id }) {
	console.log(pokemon);
	return (
		<div className="pokeList">
			<section className="pokemonCard">
				<img src={url_image} alt={pokemon} />
				<h1> {pokemon} </h1>
				Pokedex Number: {id}
			</section>
		</div>
	);
}
