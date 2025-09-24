// At least one answer per column is required, except for the last column. Validates on form submission.
$(function () {
    function checkInputs(event, validationMessage) {
        let $firstFieldset = $('fieldset').first();
        let result = [];

        if ($firstFieldset.find('table').length > 0) {
            let rows = $firstFieldset.find('tbody tr');
            let numCols = rows.first().find('td input[type="checkbox"]').length;
            result = Array.from({ length: numCols }, () => []);
            rows.each(function () {
                $(this).find('td input[type="checkbox"]').each(function (index) {
                    result[index].push($(this).is(':checked') ? 1 : 0);
                });
            });
        } else {
            let olElements = $firstFieldset.find('ol');
            let numCols = olElements.first().find('li input[type="checkbox"]').length;
            result = Array.from({ length: numCols }, () => []);
            olElements.each(function () {
                $(this).find('li input[type="checkbox"]').each(function (index) {
                    result[index].push($(this).is(':checked') ? 1 : 0);
                });
            });
        }

        let allColumnsValid = result.slice(0, -1).every(col => col.some(value => value === 1));
        
        if (allColumnsValid) {
            console.log("valid");
        } else {
            console.log("invalid");
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