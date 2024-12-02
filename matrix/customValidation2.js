// Custom validation for matrix questions. It validates only visible rows in the table layout and visible ol elements in the div layout.
$(function () {
    function checkInputs(event, options) {
        const validationMessage = options.validationMessage || "Please answer this question before continuing.";
        const requiredCheckedInputs = options.requiredCheckedInputs || 0;
        let allValid = true;

        // Check for table layout
        const tableRows = $('table tbody tr').not('[style="display: none;"]');
        if (tableRows.length > 0) {
            let totalCheckedInputs = 0;
            tableRows.each(function () {
                const $row = $(this);
                totalCheckedInputs += $row.find('td input:checked').length;
            });
            console.log("totalCheckedInputs, requiredCheckedInputs", totalCheckedInputs, requiredCheckedInputs);
            if (totalCheckedInputs < requiredCheckedInputs) {
                allValid = false;
            }
        } else {
            // Check for div with ol layout
            const olElements = $('div.response-area ol').not('[style="display: none;"]');
            olElements.each(function () {
                const $ol = $(this);
                let totalCheckedInputs = 0;
                totalCheckedInputs += $ol.find('li input:checked').length;
                console.log("totalCheckedInputs, requiredCheckedInputs", totalCheckedInputs, requiredCheckedInputs);
                if (totalCheckedInputs < requiredCheckedInputs) {
                    allValid = false;
                    return false;
                }
            });
        }

        if (allValid) {
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
        checkInputs(event, { requiredCheckedInputs: 3, validationMessage: "Please check at least 3 inputs before continuing." });
    });
});