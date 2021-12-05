export default function Sort({ sortOrder, setSortOrder }) {
	return (
		<div>
			<select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
				<option value="asc">Ascending</option>
				<option value="desc">Descending</option>
			</select>
		</div>
	);
}