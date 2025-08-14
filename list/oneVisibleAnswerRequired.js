// One checked checkbox per visible li is required
$(function () {
    const validationMessage = "Please answer this question before continuing.";

    function checkInputs(event, message) {
        let atLeastOneChecked = false;
        const $liElements = $('div.response-area li').not('[style="display: none;"]');

        $liElements.each(function () {
            const $li = $(this);
            const hasCheckedInput = $li.find('input:checked').length > 0;
            if (hasCheckedInput) {
                atLeastOneChecked = true;
                return false;
            }
        });

        if (atLeastOneChecked) {
            console.log("valid");
        } else {
            event.preventDefault();
            if ($('.validation-message').length === 0) {
                const alertHtml = `<div tabindex="0" class="alert alert-danger validation-message" role="alert" style="">${message}</div>`;
                $('fieldset').append(alertHtml);
            }
        }
    }

    $('#BN').on('click', function (event) {
        checkInputs(event, validationMessage);
    });
});