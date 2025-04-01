// Shuffle rows in the table
$(function () {
    function shuffleRows() {
        var $tableBody = $('table tbody');
        var $rows = $tableBody.find('tr');

        var shuffledRows = $rows.toArray();
        for (var i = shuffledRows.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = shuffledRows[i];
            shuffledRows[i] = shuffledRows[j];
            shuffledRows[j] = temp;
        }

        $tableBody.empty();
        $(shuffledRows).each(function (index, row) {
            if ($(row).css('display') !== 'none') {
                $(row).removeClass('even-row odd-row');
                $(row).addClass($tableBody.children(':visible').length % 2 === 0 ? 'odd-row' : 'even-row');
            }
            $tableBody.append(row);
        });
    }

    shuffleRows();
});