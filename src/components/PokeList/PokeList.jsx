import PokeItem from '../PokeItem/PokeItem';

export default function PokeList({ pokedex, selectedType }) {
	function findByType(pokedex, type) {
		for (let pokemon of pokedex) {
			if (pokemon.type_1 === type) {
				return pokemon;
			}
		}
	}

	return (
		<div className="pokeList">
			{pokedex.map((pokemon) => {
				if (!selectedType) {
					return <PokeItem {...pokemon} />;
				} else {
					const filtered = findByType(pokedex, selectedType);
					return <PokeItem {...filtered} />;
				}
			})}
		</div>
	);
}
