// Checks that at least one checkbox is checked in each visible column (table or mobile). Validates on form submission.
$(function () {
    const validationMessage = "Debe responder a todas las afirmaciones antes de enviar la encuesta.";

    const $firstFieldset = $('fieldset').first();
    const isDesktopLayout = $firstFieldset.find('table').length > 0;

    const getVisibleColumnIndexes = () => {
        const $headers = isDesktopLayout
            ? $firstFieldset.find('thead th')
            : $firstFieldset.find('ol').first().find('li');

        return $headers.toArray()
            .map((el, i) => ({ element: $(el), index: i }))
            .filter(({ element, index }) =>
                index > 0 && element.css('display') !== 'none' && element.is(':visible')
            )
            .map(({ index }) => index);
    };

    const getColumnData = (visibleIndexes) => {
        const $rows = isDesktopLayout
            ? $firstFieldset.find('tbody tr')
            : $firstFieldset.find('ol');
        const cellSelector = isDesktopLayout ? 'td' : 'li';

        const result = Array.from({ length: visibleIndexes.length }, () => []);

        $rows.each(function () {
            const $cells = $(this).find(cellSelector);
            visibleIndexes.forEach((colIdx, arrIdx) => {
                const checked = $cells.eq(colIdx).find('input[type="checkbox"]').is(':checked') ? 1 : 0;
                result[arrIdx].push(checked);
            });
        });

        return result;
    };

    const showValidation = (msg) => {
        $('.validation-message').remove();
        const alertHtml = `<div tabindex="0" class="alert alert-danger validation-message" role="alert">${msg}</div>`;
        $firstFieldset.append(alertHtml);
    };

    const checkInputs = (event, msg) => {
        const visibleIndexes = getVisibleColumnIndexes();
        const columnData = getColumnData(visibleIndexes);
        const allColumnsValid = columnData.every(col => col.some(value => value === 1));

        if (!allColumnsValid) {
            event.preventDefault();
            showValidation(msg);
        }
    };

    $('#BN').on('click', function (event) {
        checkInputs(event, validationMessage);
    });
});