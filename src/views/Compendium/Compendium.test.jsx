import { screen, render } from '@testing-library/react';
import Compendium from './Compendium';

it('accurately renders the Compendium view', () => {
	render(<Compendium />);
	const loading = screen.getAllByText('Loading ...');
	expect(loading).toMatchSnapshot();
});
