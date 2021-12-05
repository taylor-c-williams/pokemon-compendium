export default function PokeItem({
	pokemon,
	url_image,
	id,
	type_1,
	generation_id,
	hp,
	attack,
	defense,
	speed,
}) {
	return (
		<section className="pokemonCard">
			<img src={url_image} alt={pokemon} />
			<h1> {pokemon} </h1>
			Pokedex Number: {id}
			Type: {type_1}
			HP: {hp}
			ATK: {attack}
			DEF: {defense}
			SPD: {speed}
		</section>
	);
}
