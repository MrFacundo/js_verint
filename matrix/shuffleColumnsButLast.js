// Shuffle columns of a table if it exists, otherwise shuffle li elements inside ol
$(function () {
	const table = $('table');
	if (table.length) {
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
	} else {
		$('ol').each(function () {
			const items = $(this).children('li').not(':first').not(':last');
			const firstItem = $(this).children('li:first');
			const lastItem = $(this).children('li:last');
			const itemIndices = [...Array(items.length).keys()];

			for (let i = itemIndices.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				[itemIndices[i], itemIndices[j]] = [itemIndices[j], itemIndices[i]];
			}

			const shuffledItems = itemIndices.map(index => items.eq(index));
			$(this).empty().append(firstItem).append(shuffledItems).append(lastItem);
		});
	}
});