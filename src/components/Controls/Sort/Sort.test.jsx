import { screen, render } from '@testing-library/react';
import Sort from './Sort';

it('renders the Sort component accurately', () => {
	render(<Sort />);
	const allSorts = screen.getAllByLabelText('sort');
	expect(allSorts).toMatchSnapshot();
});
