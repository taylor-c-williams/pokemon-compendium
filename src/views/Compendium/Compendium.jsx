import { useState, useEffect } from 'react';
import {
	fetchPokemon,
	fetchTypes,
	fetchFilteredPokemon,
} from '../../services/pokemon';
import PokeList from '../../components/PokeList/PokeList';
import Filter from '../../components/Filter/Filter';

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

	// async function getSelectedType() {
	// 	setLoading(true);
	// 	if (selectedType) {
	// 		const filteredPokemon = await fetchFilteredPokemon(selectedType);
	// 		setPokedex(filteredPokemon);
	// 	}
	// 	setLoading(false);
	// }

	// const filteredPokemon = pokedex.filter(
	// 	(pokemon) => pokemon.type_1 === selectedType
	// );

	// Life cycles
	useEffect(() => {
		getPokemon();
		getAllTypes();
	}, []);

	// useEffect(() => {
	// 	getSelectedType();
	// }, [selectedType]);

	useEffect(() => {
		getFilteredPokemon();
	}, [selectedType]);

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
					<PokeList pokedex={pokedex} selectedType={selectedType} />
				</section>
			)}
		</div>
	);
}
