// Validation: At least one answer per column is required
$(function () {
    function checkInputs(event, validationMessage) {
        let $firstFieldset = $('fieldset').first();
        let result = [];

        if ($firstFieldset.find('table').length > 0) {
            // Desktop layout
            let rows = $firstFieldset.find('tbody tr');
            let numCols = rows.first().find('td input[type="checkbox"]').length;
            result = Array.from({ length: numCols }, () => []);

            // Map the input values to a 2D array
            rows.each(function () {
                $(this).find('td input[type="checkbox"]').each(function (index) {
                    result[index].push($(this).is(':checked') ? 1 : 0);
                });
            });
        } else {
            // Mobile layout
            let olElements = $firstFieldset.find('ol');
            let numCols = olElements.first().find('li input[type="checkbox"]').length;
            result = Array.from({ length: numCols }, () => []);

            // Map the input values to a 2D array
            olElements.each(function () {
                $(this).find('li input[type="checkbox"]').each(function (index) {
                    result[index].push($(this).is(':checked') ? 1 : 0);
                });
            });
        }

        let allColumnsValid = result.every(col => col.some(value => value === 1));
        
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