// Randomize rows within specified blocks in a table, keeping header rows in place after every N visible rows.
// If the repeat header option is not used, set headerInsertAfter to an empty string or 0.

$(function () {
    const rangesToShuffle = [[1, 4], [6, 8], [9, 13]];
    const headerInsertAfter = 7;

    function shuffleGroupedRows(ranges, repeatHeaderEvery) {
        var $tableBody = $('table tbody');
        var $rows = $tableBody.find('tr').not('.choice-row');
        var $headerRows = $tableBody.find('tr').filter('.choice-row');
        var rowsArray = $rows.toArray();

        ranges.forEach(function (range) {
            var start = range[0] - 1;
            var end = range[1] - 1;
            var group = rowsArray.slice(start, end + 1);

            for (var i = group.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = group[i];
                group[i] = group[j];
                group[j] = temp;
            }

            for (var k = 0; k < group.length; k++) {
                rowsArray[start + k] = group[k];
            }
        });

        $tableBody.empty();
        $(rowsArray).each(function (index, row) {
            if ($(row).css('display') !== 'none') {
                $(row).removeClass('even-row odd-row');
                $(row).addClass($tableBody.children(':visible').length % 2 === 0 ? 'odd-row' : 'even-row');
            }
            $tableBody.append(row);

            if (repeatHeaderEvery && Number(repeatHeaderEvery) > 0 && (index + 1) % repeatHeaderEvery === 0) {
                $headerRows.clone().appendTo($tableBody);
            }
        });
    }

    shuffleGroupedRows(rangesToShuffle, headerInsertAfter);
});