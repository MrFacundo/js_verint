// Custom validation for list questions. It validates only visible li elements and checks if at least one of them is checked.
$(function () {
    function checkInputs(event) {

        const validationMessage = "Please answer this question before continuing.";
        let atLeastOneChecked = false;

        const liElements = $('div.response-area li').not('[style="display: none;"]');
        liElements.each(function () {
            const $li = $(this);
            const hasCheckedInput = $li.find('input:checked').length > 0;
            if (hasCheckedInput) {
                atLeastOneChecked = true;
                return false; // Break the loop
            }
        });

        if (atLeastOneChecked) {
            console.log("valid");
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