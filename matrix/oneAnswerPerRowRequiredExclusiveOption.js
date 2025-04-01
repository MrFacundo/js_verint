// Validation: At least one answer per row is required
$(function () {
    function checkInputs(event, validationMessage) {
        let $firstFieldset = $('fieldset').first();
        let rows = $firstFieldset.find('tbody tr');
        let allRowsValid = true;

        rows.each(function () {
            let rowValid = $(this).find('td input[type="radio"]').is(':checked');
            if (!rowValid) {
                allRowsValid = false;
                return false;
            }
        });

        if (allRowsValid) {
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