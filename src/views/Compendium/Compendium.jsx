import { useState, useEffect } from 'react';
import { fetchPokemon } from '../../services/pokemon';
import PokeList from '../../components/PokeList/PokeList';

export default function Compendium() {
	const [pokedex, setPokedex] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getPokemon = async () => {
			const pokemonList = await fetchPokemon();
			setPokedex(pokemonList);
			setLoading(false);
		};
		getPokemon();
	}, []);
	return (
		<div>
			hyi
			<PokeList pokedex={pokedex} />
		</div>
	);
}
