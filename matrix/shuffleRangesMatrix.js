/**
 * Groups rows and shuffles the rows inside the groups.
 * Leaves non grouped rows in place.
 * "Repeat headings every.. rows" option can be considered and the selected rows must be entered as the second parameter
 * 
 * @param {Array} ranges - Array of ranges to shuffle, eg. [[1, 4], [6, 8]] will shuffle rows 1-4 and 6-8 separately
 * @param {number} [repeatHeadingsEvery] - Insert header row after every N visible rows
 */
export function shuffleRangesMatrix(ranges, repeatHeadingsEvery) {
    var $tableBody = $('table tbody');
    var $rows = $tableBody.find('tr').not('.choice-row');
    var $originalHeaderRow = $tableBody.find('tr').filter('.choice-row').first();
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
    var visibleRowCount = 0;
    $(rowsArray).each(function (index, row) {
        if ($(row).css('display') !== 'none') {
            $(row).removeClass('even-row odd-row');
            $(row).addClass($tableBody.children(':visible').length % 2 === 0 ? 'odd-row' : 'even-row');
            visibleRowCount++;
        }
        $tableBody.append(row);

        if (repeatHeadingsEvery && repeatHeadingsEvery > 0 && visibleRowCount % repeatHeadingsEvery === 0 && $(row).css('display') !== 'none') {
            $originalHeaderRow.clone().appendTo($tableBody);
        }
    });
}