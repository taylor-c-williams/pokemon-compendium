import PropTypes from 'prop-types';

export default function PokeItem({ pokemon }) {
	const { name, pic, id } = pokemon;
	console.log(pokemon);
	return (
		<div className="pokeList">
			<section className="pokemonCard">
				<img src={pic} alt={`${name}`} />
				<h1> {name} </h1>
				Pokedex Number: {id}
			</section>
		</div>
	);
}

PokeItem.propTypes = {
	pokemon: PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		abilityOne: PropTypes.string.isRequired,
		abilityTwo: PropTypes.string.isRequired,
		typeOne: PropTypes.string.isRequired,
		typeTwo: PropTypes.string.isRequired,
		pic: PropTypes.string.isRequired,
		generation: PropTypes.string.isRequired,
	}).isRequired,
};
