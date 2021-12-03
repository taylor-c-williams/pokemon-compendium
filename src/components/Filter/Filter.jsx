import React from 'react';

export default function Filter({ allTypes, selectedType, handleChange }) {
	return (
		<div>
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
		</div>
	);
}
