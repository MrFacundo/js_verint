// Randomize rows within specified blocks in a table
$(function () {
    function shuffleGroupedRows(ranges) {
        var $tableBody = $('table tbody');
        var $rows = $tableBody.find('tr');
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
        });
    }

    shuffleGroupedRows([[1, 3], [7, 8]]);
});