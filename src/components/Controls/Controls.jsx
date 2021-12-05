import Filter from './Filter/Filter';
import Sort from './Sort/Sort';
import './controls.css';

export default function Controls({
	allTypes,
	selectedType,
	setSelectedType,
	sortOrder,
	setSortOrder,
}) {
	return (
		<div className="controls-body">
			<Filter
				allTypes={allTypes}
				selectedType={selectedType}
				setSelectedType={setSelectedType}
			/>
			<Sort sortOrder={sortOrder} setSortOrder={setSortOrder} />
		</div>
	);
}
