export const fetchPokemon = async () => {
	const res = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex/`);
	const pokemonData = await res.json();
	return pokemonData.results;
};
