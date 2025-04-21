// Shuffle columns of a table (desktop layout), excluding the last column and the column with the id passed as a parameter
$(function () {
    function shuffleColumns(excludeColumnId) {
        const table = $('table');
        const rows = table.find('tr');
        const columns = rows.first().find('th').slice(1, -1);
        const columnIndices = [...Array(columns.length).keys()];

        const excludeIndex = columns.toArray().findIndex(th => $(th).attr('id') === excludeColumnId);
        const shuffleIndices = columnIndices.filter(index => index !== excludeIndex);

        // Shuffle the indices for the columns that are not excluded
        for (let i = shuffleIndices.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffleIndices[i], shuffleIndices[j]] = [shuffleIndices[j], shuffleIndices[i]];
        }

        rows.each(function () {
            const cells = $(this).children();
            const firstCell = cells.first();
            const lastCell = cells.last();
            const middleCells = cells.slice(1, -1);

            const shuffledCells = [];
            let shuffleIndex = 0;

            for (let i = 0; i < columnIndices.length; i++) {
                if (i === excludeIndex) {
                    shuffledCells.push(middleCells.eq(i));
                } else {
                    shuffledCells.push(middleCells.eq(shuffleIndices[shuffleIndex]));
                    shuffleIndex++;
                }
            }

            $(this).empty().append(firstCell).append(shuffledCells).append(lastCell);
        });
    }

    shuffleColumns('Q282_A_C7');
});