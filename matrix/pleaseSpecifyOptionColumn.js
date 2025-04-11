/*
    Show/hide a hidden field based on the selection of a radio button or checkbox in a specific column.
*/

$(function () {
    function toggleHiddenFieldVisibilityByColumn(columnIndex, pleaseSpecifyId) {
        let $allInputEls = $('tbody tr').find('td input[type="radio"], td input[type="checkbox"]');
        let $columnInputEls = $('tbody tr').find(`td:nth-child(${columnIndex + 1}) input[type="radio"], td:nth-child(${columnIndex + 1}) input[type="checkbox"]`);
        let $allOlInputEls = $('ol').find('input[type="radio"], input[type="checkbox"]');
        let $olColumnInputEls = $('ol').find(`li:nth-child(${columnIndex + 1}) input[type="radio"], li:nth-child(${columnIndex + 1}) input[type="checkbox"]`);

        $allInputEls.add($allOlInputEls).on('change', function () {
            checkInputEls($columnInputEls.add($olColumnInputEls), pleaseSpecifyId);
        });

        function checkInputEls($inputEls) {
            if ($inputEls.filter(':checked').length > 0) {
                $('#' + pleaseSpecifyId).show();
            } else {
                $('#' + pleaseSpecifyId).hide();
                $('#' + pleaseSpecifyId).find('input').val('');
            }
        }
    }

    function validate(event,pleaseSpecifyId) {
        let pleaseSpecifyFieldIsVisible = $('#' + pleaseSpecifyId).is(':visible');
        let pleaseSpecifyFieldIsEmpty = $('#' + pleaseSpecifyId).find('input').val() === '';

        if (pleaseSpecifyFieldIsVisible && pleaseSpecifyFieldIsEmpty) {
            event.preventDefault();
            $('fieldset').first().find('.validation-message').show();
        }
    }

    toggleHiddenFieldVisibilityByColumn(7, "pleaseSpecifyQ");

    $('#BN').on('click', function (event) {
        validate(
            event,
            "pleaseSpecifyQ"
        );
    });
});