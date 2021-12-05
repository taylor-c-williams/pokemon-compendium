import { screen, render } from '@testing-library/react';
import Filter from './Filter';

it('should properly render the Filter component', () => {
	const allTypes = ['normal', 'bug', 'water', 'electric', 'ghost'];
	render(<Filter allTypes={allTypes} />);
	const typeFilter = screen.getAllByLabelText('typeFilter');
	expect(typeFilter).toMatchSnapshot();
});
