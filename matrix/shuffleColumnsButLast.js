// Shuffle columns of a table (desktop layout), with columns at fixed position
$(function () {
    function shuffleColumns(rangeToLeaveInPlace) {
        const rows = $('table').find('tr');
        const totalColumns = rows.first().children().length;
        const [start, end] = rangeToLeaveInPlace.map(index => index);
        const columnIndicesToShuffle = [];

        for (let i = 1; i < totalColumns; i++) {
            if (i < start || i > end) {
                columnIndicesToShuffle.push(i);
            }
        }

        for (let i = columnIndicesToShuffle.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [columnIndicesToShuffle[i], columnIndicesToShuffle[j]] = [columnIndicesToShuffle[j], columnIndicesToShuffle[i]];
        }

        rows.each(function () {
            const cells = $(this).children();
            const shuffledCells = [cells.eq(0)];

            columnIndicesToShuffle.forEach(index => {
                shuffledCells.push(cells.eq(index));
            });

            for (let i = start; i <= end; i++) {
                shuffledCells.splice(i, 0, cells.eq(i));
            }

            $(this).empty().append(shuffledCells);
        });
    }

    shuffleColumns([7, 8]);
});