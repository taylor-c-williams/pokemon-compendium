import { useState, useEffect } from 'react';
import {
	fetchPokemon,
	fetchTypes,
	fetchFilteredPokemon,
} from '../../services/utils';
import PokeList from '../../components/PokeList/PokeList';
import Filter from '../../components/Filter/Filter';
import Sort from '../../components/Sort/Sort';

export default function Compendium() {
	// Set State
	const [pokedex, setPokedex] = useState([]);
	const [loading, setLoading] = useState(true);
	const [allTypes, setAllTypes] = useState([]);
	const [selectedType, setSelectedType] = useState('');
	const [sortOrder, setSortOrder] = useState('asc');

	// Get Pokemon, Get Types
	useEffect(() => {
		async function getPokemon() {
			const pokemonList = await fetchPokemon();
			setPokedex(pokemonList);
			setLoading(false);
		}
		async function getAllTypes() {
			const types = await fetchTypes();
			setAllTypes(types);
		}
		getPokemon();
		getAllTypes();
	}, []);

	// Filter by Type & Set Sort Order
	useEffect(() => {
		async function getFilteredPokemon() {
			setLoading(true);
			if (!selectedType || selectedType === 'all') {
				const pokemonList = await fetchPokemon(sortOrder);
				setPokedex(pokemonList);
			} else {
				const filteredPokemon = await fetchFilteredPokemon(
					selectedType,
					sortOrder
				);
				setPokedex(filteredPokemon);
			}
			setLoading(false);
		}
		getFilteredPokemon();
	}, [selectedType, sortOrder]);

	console.log(sortOrder);

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
					/>
					<Sort sortOrder={sortOrder} setSortOrder={setSortOrder} />
					<PokeList pokedex={pokedex} selectedType={selectedType} />
				</section>
			)}
		</div>
	);
}
