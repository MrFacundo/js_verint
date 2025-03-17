// Shuffle columns of a table (desktop layout)
$(function () {
    function shuffleColumns() {
        const table = $('table');
        const rows = table.find('tr');
        const columns = rows.first().find('th').slice(1);
        const columnIndices = [...Array(columns.length).keys()];

        for (let i = columnIndices.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [columnIndices[i], columnIndices[j]] = [columnIndices[j], columnIndices[i]];
        }

        rows.each(function () {
            const cells = $(this).children().slice(1);
            const shuffledCells = columnIndices.map(index => cells.eq(index));
            $(this).append(shuffledCells);
        });
    }

    shuffleColumns();
});