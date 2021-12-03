import { useState, useEffect } from 'react';
import {
	fetchPokemon,
	fetchTypes,
	fetchFilteredPokemon,
} from '../../services/pokemon';
import PokeList from '../../components/PokeList/PokeList';
import PokemonList from '../../components/PokeList/PokemonList';

export default function Compendium() {
	// Set State
	const [pokedex, setPokedex] = useState([]);
	const [loading, setLoading] = useState(true);
	const [allTypes, setAllTypes] = useState([]);
	const [selectedType, setSelectedType] = useState('normal');

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
		if (!selectedType) return;

		async function getFilteredPokemon() {
			setLoading(true);
			if (selectedType === 'all') {
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
