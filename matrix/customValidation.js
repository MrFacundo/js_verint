// Custom validation for matrix questions. It validates only visible rows in the table layout and visible ol elements in the div layout.
$(function () {
    function checkInputs(event) {
        const validationMessage = "Please answer this question before continuing.";
        let allValid = true;

        const tableRows = $('table tbody tr').not('[style="display: none;"]').not('.choice-row');
        if (tableRows.length > 0) {
            tableRows.each(function () {
                const $row = $(this);
                const hasCheckedInput = $row.find('td input:checked').length > 0;
                if (!hasCheckedInput) {
                    allValid = false;
                    return false;
                }
            });
        } else {
            const olElements = $('div.response-area ol').not('[style="display: none;"]').not('.choice-row');
            olElements.each(function () {
                const $ol = $(this);
                const hasCheckedInput = $ol.find('li input:checked').length > 0;
                console.log("checking ol", $ol, hasCheckedInput);
                if (!hasCheckedInput) {
                    allValid = false;
                    return false;
                }
            });
        }

        if (allValid) {
            console.log("valid");
            $('.validation-message').remove();
        } else {
            event.preventDefault();
            if ($('.validation-message').length === 0) {
                const alertHtml = `<div tabindex="0" class="alert alert-danger validation-message" role="alert" style="">${validationMessage}</div>`;
                $('fieldset').append(alertHtml);
            }
        }
    }

    $('#BN').on('click', function (event) {
        checkInputs(event);
    });
});