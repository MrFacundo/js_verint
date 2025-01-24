/*
    Show/hide a hidden field based on the selection of a radio button or checkbox.
*/

$(function () {
    function toggleHiddenFieldVisibility(row, pleaseSpecifyId) {
		let $allInputEls = $('tbody tr').find('td input[type="radio"], td input[type="checkbox"]');
        let $rowInputEls = $('tbody tr').eq(row).find('td input[type="radio"], td input[type="checkbox"]');
		let $allOlInputEls = $('ol').find('input[type="radio"], input[type="checkbox"]');
        let $olInputEls = $('ol').eq(row).find('input[type="radio"], input[type="checkbox"]');

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

    function validate(event, validationMessage, pleaseSpecifyId) {
        let pleaseSpecifyFieldIsVisible = $('#' + pleaseSpecifyId).is(':visible');
        let pleaseSpecifyFieldIsEmpty = $('#' + pleaseSpecifyId).find('input').val() === '';

        if (pleaseSpecifyFieldIsVisible && pleaseSpecifyFieldIsEmpty) {
            event.preventDefault();
            $('.validation-message').remove();
            const alertHtml = `<div tabindex="0" class="alert alert-danger validation-message" role="alert">${validationMessage}</div>`;
            $('fieldset').first().append(alertHtml);
        }
    }

    toggleHiddenFieldVisibility(4, "please-specify-hidden-field");

    $('#BN').on('click', function (event) {
        validate(
            event,
            "Please answer this question before continuing.",
            "please-specify-hidden-field"
        );
    });
});