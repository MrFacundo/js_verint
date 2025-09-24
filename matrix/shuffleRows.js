// Shuffle rows in a table, keeping header rows in place after every N visible rows.
$(function () {
    const headerInsertAfter = 7;

    function shuffleRows(headerInsertAfter) {
        var $tableBody = $('table tbody');
        var $rows = $tableBody.find('tr');
        var $headerRows = $rows.filter('.choice-row');
        var $nonHeaderRows = $rows.not('.choice-row');

        var shuffledRows = $nonHeaderRows.toArray();
        for (var i = shuffledRows.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = shuffledRows[i];
            shuffledRows[i] = shuffledRows[j];
            shuffledRows[j] = temp;
        }

        $tableBody.empty();
        var visibleCount = 0;

        $(shuffledRows).each(function (index, row) {
            if ($(row).css('display') !== 'none') {
                $(row).removeClass('even-row odd-row');
                $(row).addClass(visibleCount % 2 === 0 ? 'odd-row' : 'even-row');
                $tableBody.append(row);
                visibleCount++;
                if (visibleCount === headerInsertAfter) {
                    $headerRows.each(function () {
                        $tableBody.append(this);
                    });
                }
            } else {
                $tableBody.append(row);
            }
        });

        if (visibleCount <= headerInsertAfter) {
            $headerRows.each(function () {
                $tableBody.append(this);
            });
        }
    }

    shuffleRows(headerInsertAfter);
});