/**
 * Limits the number of answers that can be selected per column in a matrix question and validates on form submission.
 *
 * @param {number} maxInputs - Maximum number of answers allowed per column.
 * @param {string} validationMessage - Message displayed when the maximum is exceeded.
 */
export function maxAnswersPerColumnAllowed(maxInputs, validationMessage) {
    const $firstFieldset = $('fieldset').first();
    const isDesktopLayout = $firstFieldset.find('table').length > 0;

    const getColumnCounts = () => {
        const selector = isDesktopLayout ? 'tbody tr' : 'ol';
        const inputSelector = isDesktopLayout ? 'td input[type="checkbox"]' : 'li input[type="checkbox"]';

        const $rows = $firstFieldset.find(selector);
        const numCols = $rows.first().find(inputSelector).length;
        const result = Array.from({ length: numCols }, () => []);

        $rows.each(function () {
            $(this).find(inputSelector).each(function (index) {
                result[index].push($(this).is(':checked') ? 1 : 0);
            });
        });

        return result;
    };

    const showValidation = (msg) => {
        $('.validation-message').remove();
        const alertHtml = `<div tabindex="0" class="alert alert-danger validation-message" role="alert">${msg}</div>`;
        $firstFieldset.append(alertHtml);
    };

    const checkMaxInputs = (event, msg, max) => {
        const columnCounts = getColumnCounts();
        const anyColumnInvalid = columnCounts.some(col =>
            col.filter(value => value === 1).length > max
        );

        if (anyColumnInvalid) {
            event.preventDefault();
            showValidation(msg);
            console.log("invalid");
        } else {
            console.log("valid");
        }
    };

    $('#BN').on('click', function (event) {
        checkMaxInputs(event, validationMessage, maxInputs);
    });
}
