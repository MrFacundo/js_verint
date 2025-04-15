// Shuffle columns of a table (desktop layout), excluding the last column
$(function () {
	function shuffleColumns() {
		const table = $('table');
		const rows = table.find('tr');
		const columns = rows.first().find('th').slice(1, -1);
		const columnIndices = [...Array(columns.length).keys()];

		for (let i = columnIndices.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[columnIndices[i], columnIndices[j]] = [columnIndices[j], columnIndices[i]];
		}

		rows.each(function () {
			const cells = $(this).children();
			const firstCell = cells.first();
			const lastCell = cells.last();
			const middleCells = cells.slice(1, -1);

			const shuffledCells = columnIndices.map(index => middleCells.eq(index));
			$(this).empty().append(firstCell).append(shuffledCells).append(lastCell);
		});
	}

	shuffleColumns();
}); 