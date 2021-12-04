import { useState, useEffect } from 'react';
import {
	fetchPokemon,
	fetchTypes,
	fetchFilteredPokemon,
	fetchSortOrder,
} from '../../services/pokemon';
import PokeList from '../../components/PokeList/PokeList';
import Filter from '../../components/Filter/Filter';

export default function Compendium() {
	// Set State
	const [pokedex, setPokedex] = useState([]);
	const [loading, setLoading] = useState(true);
	const [allTypes, setAllTypes] = useState([]);
	const [selectedType, setSelectedType] = useState('');
	const [sortOrder, setSortOrder] = useState('asc');

	// Declare on mount Fetch Util Functions
	async function getPokemon() {
		const pokemonList = await fetchPokemon();
		setPokedex(pokemonList);
		setLoading(false);
	}

	async function getAllTypes() {
		const types = await fetchTypes();
		setAllTypes(types);
	}

	// Life cycles - On Mount
	useEffect(() => {
		getPokemon();
		getAllTypes();
	}, []);

	// Type Change
	useEffect(() => {
		async function getFilteredPokemon() {
			setLoading(true);
			if (!selectedType || selectedType === 'all') {
				const pokemonList = await fetchPokemon();
				setPokedex(pokemonList);
			} else {
				const filteredPokemon = await fetchFilteredPokemon(selectedType);
				setPokedex(filteredPokemon);
			}
			setLoading(false);
		}
		getFilteredPokemon();
	}, [selectedType]);

	// Sort Order
	useEffect(() => {
		fetchSortOrder();
	}, [sortOrder]);

	return (
		<div>
			hyi
			{loading ? (
				<section className="loading">
					<h2> Loading ... </h2>
				</section>
			) : (
				<section className="components">
					<Filter
						allTypes={allTypes}
						selectedType={selectedType}
						handleChange={setSelectedType}
						handleSort={setSortOrder}
					/>
					<PokeList pokedex={pokedex} selectedType={selectedType} />
				</section>
			)}
		</div>
	);
}
