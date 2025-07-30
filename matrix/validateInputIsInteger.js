// On BN click, validates .k-formatted-value input is "1" or "2", else shows error
$(function () {
    $('#BN').on('click', function (event) {
        const val = $('.k-formatted-value').val();
        if (val !== "1" && val !== "2") {
            event.preventDefault();
            $('.validation-message').remove();
            const alertHtml = `<div tabindex="0" class="alert alert-danger validation-message" role="alert">Merci de répondre à la question pour poursuivre.</div>`;
            $('fieldset').append(alertHtml);
        }
    });
});