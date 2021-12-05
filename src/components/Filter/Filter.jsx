import React from 'react';

export default function Filter({ allTypes, selectedType, handleChange }) {
	return (
		<div>
			{/* Type Selector */}
			<select
				aria-label="typeFilter"
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
