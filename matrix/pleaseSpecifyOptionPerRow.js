// Show/hide a hidden field based on the selection of a radio button or checkbox in a specific row.
$(function () {
    const pleaseSpecifyRow = 13;
    const pleaseSpecifyId = "pleaseSpecifyQ";
    const validationMessage = "Vous avez sélectionné ‘Autres’, merci de préciser.";

    function toggleHiddenFieldVisibility(row, pleaseSpecifyId) {
        let $allInputEls = $('tbody tr').find('td input[type="radio"], td input[type="checkbox"]');
        let $rowInputEls = $('tbody tr').eq(row - 1).find('td input[type="radio"], td input[type="checkbox"]');
        let $allOlInputEls = $('ol').find('input[type="radio"], input[type="checkbox"]');
        let $olInputEls = $('ol').eq(row - 1).find('input[type="radio"], input[type="checkbox"]');

        $allInputEls.add($allOlInputEls).on('change', function () {
            checkInputEls($rowInputEls.add($olInputEls), pleaseSpecifyId);
        });

        function checkInputEls($inputEls) {
            if ($inputEls.filter(':checked').length > 0) {
                $('#' + pleaseSpecifyId).show();
            } else {
                $('#' + pleaseSpecifyId).hide();
                $('#' + pleaseSpecifyId).find('input').val = '';
            }
        }
    }

    function showValidation(msg) {
        $('.validation-message').remove();
        $('fieldset').first().append(`<div tabindex="0" class="alert alert-danger validation-message" role="alert">${msg}</div>`);
    }

    function validate(event, pleaseSpecifyId, msg) {
        let pleaseSpecifyFieldIsVisible = $('#' + pleaseSpecifyId).is(':visible');
        let pleaseSpecifyFieldIsEmpty = $('#' + pleaseSpecifyId).find('input').val() === '';

        if (pleaseSpecifyFieldIsVisible && pleaseSpecifyFieldIsEmpty) {
            event.preventDefault();
            showValidation(msg);
        }
    }

    toggleHiddenFieldVisibility(pleaseSpecifyRow, pleaseSpecifyId);

    $('#BN').on('click', function (event) {
        validate(
            event,
            pleaseSpecifyId,
            validationMessage
        );
    });
});