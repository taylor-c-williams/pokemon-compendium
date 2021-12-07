import { screen, render } from '@testing-library/react';
import PokeList from './PokeList';

it('accurately renders the PokeList component', () => {
	const pokemen = [
		{
			pokemon: 'bulbasaur',
			id: '1',
			type_1: 'grass',
			attack: '49',
			defense: '49',
			hp: '45',
			speed: '45',
			url_image:
				'http=//assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
		},
		{
			pokemon: 'ivysaur',
			id: '2',
			type_1: 'grass',
			attack: '62',
			defense: '63',
			hp: '60',
			speed: '60',
			url_image:
				'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png',
		},
	];
	render(<PokeList pokedex={pokemen} />);
	const pokedex = screen.getAllByLabelText('pokemons!');
	expect(pokedex).toMatchSnapshot();
});
