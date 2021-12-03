import { useState, useEffect } from 'react';
import { fetchPokemon, fetchTypes } from '../../services/pokemon';
import PokeList from '../../components/PokeList/PokeList';

export default function Compendium() {
	// Set State
	const [pokedex, setPokedex] = useState([]);
	const [loading, setLoading] = useState(true);
	const [allTypes, setAllTypes] = useState([]);
	const [selectedType, setSelectedType] = useState('');

	// Declare Fetch Util Functions
	async function getPokemon() {
		const pokemonList = await fetchPokemon();
		setPokedex(pokemonList);
		setLoading(false);
	}

	async function getAllTypes() {
		const types = await fetchTypes();
		setAllTypes(types);
	}

	console.log(allTypes);

	// async function getSelectedType(){
	// 	setLoading(true);
	// 	const filteredPokemon = selectedType
	// }

	// Life cycles
	useEffect(() => {
		getPokemon();
		getAllTypes();
	}, []);

	return (
		<div>
			hyi
			{loading ? (
				<section className="loading">
					<h2> Loading ... </h2>
				</section>
			) : (
				<PokeList pokedex={pokedex} selectedType={selectedType} />
			)}
		</div>
	);
}
