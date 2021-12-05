import { screen, render } from '@testing-library/react';
import PokeItem from './PokeItem';

it('accurately renders one pokemon object', () => {
	render(
		<PokeItem
			pokemon="bulbasaur"
			id="1"
			type_1="grass"
			attack="49"
			defense="49"
			hp="45"
			speed="45"
			url_image="http=//assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
		/>
	);
	const bulbasaur = screen.getByText('bulbasaur');
	expect(bulbasaur).toMatchSnapshot();
});
