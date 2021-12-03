import PropTypes from 'prop-types';
import PokeItem from '../PokeItem/PokeItem';

export default function PokeList({ pokedex }) {
	return (
		<div className="pokeList">
			{pokedex.map((pokemon) => {
				return <PokeItem {...pokemon} key={pokemon.id} />;
			})}
		</div>
	);
}

PokeList.propTypes = {
	pokedex: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
			abilityOne: PropTypes.string.isRequired,
			abilityTwo: PropTypes.string.isRequired,
			typeOne: PropTypes.string.isRequired,
			typeTwo: PropTypes.string.isRequired,
			pic: PropTypes.string.isRequired,
			generation: PropTypes.string.isRequired,
		})
	).isRequired,
};
