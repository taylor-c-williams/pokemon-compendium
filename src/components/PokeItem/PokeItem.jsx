import './pokeitem.css';

export default function PokeItem({
	pokemon,
	url_image,
	id,
	type_1,
	hp,
	attack,
	defense,
	speed,
}) {
	return (
		<section className="pokeitem-body">
			<img src={url_image} alt={pokemon} />
			<h2> {pokemon} </h2>
			<h3>Pokedex No. {id}</h3>
			{type_1}-type
			<p />
			<section className="stats">
				<span>HP: {hp}</span>
				<span>ATK: {attack}</span>
				<span>DEF: {defense}</span>
				<span>SPD: {speed}</span>
			</section>
		</section>
	);
}
