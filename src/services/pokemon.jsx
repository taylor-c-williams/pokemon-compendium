export const fetchPokemon = async () => {
	const res = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex`);
	const pokemonData = await res.json();
	return pokemonData.results;
};

export const fetchTypes = async () => {
	const res = await fetch(
		'https://pokedex-alchemy.herokuapp.com/api/pokedex/types'
	);
	const rawTypes = await res.json();
	const allTypes = rawTypes.map((type) => type.type);
	return allTypes;
};

export const fetchFilteredPokemon = async (selectedType) => {
	const res = await fetch(
		`https://pokedex-alchemy.herokuapp.com/api/pokedex?type=${selectedType}`
	);
	const filteredPokemon = await res.json();
	return filteredPokemon.results;
};
