import React from 'react';

export default function Filter({
	allTypes,
	selectedType,
	sortOrder,
	handleChange,
	handleSort,
}) {
	return (
		<div>
			{/* Type Selector */}
			<select
				value={selectedType}
				onChange={(e) => handleChange(e.target.value)}
			>
				<option key="all" value="all">
					All
				</option>
				{allTypes.map((type) => {
					return (
						<option key={type} value={type}>
							{type}
						</option>
					);
				})}
			</select>

			{/* Sort Order */}
			<select value={sortOrder} onChange={(e) => handleSort(e.target.value)}>
				<option value="asc">Ascending</option>
				<option value="desc">Descending</option>
			</select>
		</div>
	);
}
