import { useState, useEffect } from 'react';
import {
	fetchPokemon,
	fetchTypes,
	fetchFilteredPokemon,
} from '../../services/utils';
import PokeList from '../../components/PokeList/PokeList';
import Controls from '../../components/Controls/Controls';
import './compendium.css';

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

	return (
		<div className="compendium-body">
			{/* <h1>Pokemon Compendium</h1> */}
			<section className="header">
				<h1>Pokemon Compendium</h1>
			</section>
			{loading ? (
				<section className="loading">
					<h2> Loading ... </h2>
				</section>
			) : (
				<section className="components">
					<Controls
						allTypes={allTypes}
						selectedType={selectedType}
						setSelectedType={setSelectedType}
						sortOrder={sortOrder}
						setSortOrder={setSortOrder}
					/>

					<PokeList pokedex={pokedex} selectedType={selectedType} />
				</section>
			)}
		</div>
	);
}
