export const fetchPokemon = async (sortOrder) => {
	const res = await fetch(
		`https://pokedex-alchemy.herokuapp.com/api/pokedex?perPage=150&sort=id&direction=${sortOrder}`
	);
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

export const fetchFilteredPokemon = async (selectedType, sortOrder) => {
	const res = await fetch(
		`https://pokedex-alchemy.herokuapp.com/api/pokedex?type=${selectedType}&perPage=150&sort=id&direction=${sortOrder}`
	);
	const filteredPokemon = await res.json();
	return filteredPokemon.results;
};
