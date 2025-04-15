$(function () {
	function shuffleColumns(fixedIndices) {
		const $table = $("table[role='grid']");
		const $headerCells = $table.find("thead tr").children("th");
		const totalCols = $headerCells.length;

		const movableIndices = [];
		for (let i = 1; i < totalCols; i++) {
			if (!fixedIndices.includes(i)) {
				movableIndices.push(i);
			}
		}

		const shuffled = movableIndices
			.map(i => ({ index: i, id: $headerCells[i].id }))
			.sort(() => Math.random() - 0.5);

		const newOrder = [...Array(totalCols).keys()];

		movableIndices.forEach((originalIndex, i) => {
			newOrder[originalIndex] = shuffled[i].index;
		});

		const reorderRow = ($row, isHeader = false) => {
			const $cells = $row.children();
			const $newRow = $($row.clone());
			for (let i = 0; i < totalCols; i++) {
				const targetIndex = newOrder[i];
				$newRow[0].children[i].replaceWith($cells[targetIndex]);
			}
			$row.replaceWith($newRow);
		};

		reorderRow($table.find("thead tr"), true);
		$table.find("tbody tr").each(function () {
			reorderRow($(this));
		});
	}

	shuffleColumns([7, 8]);
});
