// On form submit, validates the input is either "1" or "2", else shows an alert message.
$(function () {
    const inputSelector = '.k-formatted-value';
    const message = 'Merci de répondre à la question pour poursuivre.';
    const acceptedValues = ["1", "2"];

    $('#BN').on('click', function (event) {
        const val = $(inputSelector).val();
        if (!acceptedValues.includes(val)) {
            event.preventDefault();
            $('.validation-message').remove();
            const alertHtml = `<div tabindex="0" class="alert alert-danger validation-message" role="alert">${message}</div>`;
            $('fieldset').append(alertHtml);
        }
    });
});