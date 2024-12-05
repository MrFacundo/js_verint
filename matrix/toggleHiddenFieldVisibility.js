// Toggle the visibility of a hidden field based on checkbox selection
$(function () {
    function calculateSelectedRadioCount() {
        return $('input[type=checkbox]:checked').filter(function () {
            return $(this).attr('id').startsWith('Q459_A_10');
        }).length;
    }

    function toggleHFVisibility() {
        const nb = calculateSelectedRadioCount();
        $('#HF').css('display', nb >= 1 ? 'block' : 'none');
        if (nb < 1) {
            $('input[type=text]').val('');
        }
    }

    $('input[type=checkbox]').change(toggleHFVisibility);
	// Answer required if hidden field is visible
    $('#BN').on('click', function (event) {
        if (calculateSelectedRadioCount() > 0 && $('input[type=text]').val() === '') {
            event.preventDefault();
            $('.validation-message').remove();
            const alertHtml = `<div tabindex="0" class="alert alert-danger validation-message" role="alert">Merci de répondre à la question pour poursuivre.</div>`;
            $('fieldset').append(alertHtml);
        }
    });
});