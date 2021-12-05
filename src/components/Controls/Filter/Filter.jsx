export default function Filter({ allTypes, selectedType, setSelectedType }) {
	return (
		<div className="filter-body">
			{/* Type Selector */}
			<select
				aria-label="typeFilter"
				value={selectedType}
				onChange={(e) => setSelectedType(e.target.value)}
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
