// Checks that at least one checkbox is checked in each visible column (table or mobile)
$(function () {
    function checkInputs(event, validationMessage) {
        let $firstFieldset = $('fieldset').first();
        let visibleColIndexes = [];
        let result = [];

        if ($firstFieldset.find('table').length > 0) {
            let $table = $firstFieldset.find('table');
            let $theadThs = $table.find('thead th');

            $theadThs.each(function (i) {
                if (i === 0) return;
                if ($(this).css('display') !== 'none' && $(this).is(':visible')) {
                    visibleColIndexes.push(i);
                }
            });

            let rows = $table.find('tbody tr');
            result = Array.from({ length: visibleColIndexes.length }, () => []);

            rows.each(function (rowIdx) {
                let $tds = $(this).find('td');
                visibleColIndexes.forEach(function (colIdx, arrIdx) {
                    let $input = $tds.eq(colIdx).find('input[type="checkbox"]');
                    let checked = $input.is(':checked') ? 1 : 0;
                    result[arrIdx].push(checked);
                });
            });

        } else {
            let olElements = $firstFieldset.find('ol');
            let firstOl = olElements.first();

            firstOl.find('li').each(function (i) {
                if ($(this).css('display') !== 'none' && $(this).is(':visible')) {
                    visibleColIndexes.push(i);
                }
            });

            result = Array.from({ length: visibleColIndexes.length }, () => []);

            olElements.each(function (rowIdx) {
                let $lis = $(this).find('li');
                visibleColIndexes.forEach(function (colIdx, arrIdx) {
                    let $input = $lis.eq(colIdx).find('input[type="checkbox"]');
                    let checked = $input.is(':checked') ? 1 : 0;
                    result[arrIdx].push(checked);
                });
            });
        }
        console.log("Result: ", result);

        let allColumnsValid = result.every(col => col.some(value => value === 1));
        console.log("All columns valid: ", allColumnsValid);
        if (!allColumnsValid) {
            event.preventDefault();
            $('.validation-message').remove();
            const alertHtml = `<div tabindex="0" class="alert alert-danger validation-message" role="alert" style="">${validationMessage}</div>`;
            $('fieldset').append(alertHtml);
        }
    }

    $('#BN').on('click', function (event) {
        checkInputs(event, "Debe responder a todas las afirmaciones antes de enviar la encuesta.");
    });
});