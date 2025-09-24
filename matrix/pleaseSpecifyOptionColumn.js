// Show/hide a hidden field based on the selection of a radio button or checkbox in a specific column.
$(function () {
    const columnIndex = 7;
    const pleaseSpecifyId = "pleaseSpecifyQ";
    const validationMessage = "Vous avez sélectionné 'Autres', merci de préciser.";

    const $pleaseSpecifyField = $('#' + pleaseSpecifyId);
    const $pleaseSpecifyInput = $pleaseSpecifyField.find('input');
    const $firstFieldset = $('fieldset').first();

    const getColumnInputs = () => {
        let $tableInputs = $('tbody tr').find(`td:nth-child(${columnIndex + 1}) input[type="radio"], td:nth-child(${columnIndex + 1}) input[type="checkbox"]`);
        let $olInputs = $('ol').find(`li:nth-child(${columnIndex + 1}) input[type="radio"], li:nth-child(${columnIndex + 1}) input[type="checkbox"]`);
        return $tableInputs.add($olInputs);
    };

    const showHiddenField = () => {
        $pleaseSpecifyField.show();
    };

    const hideHiddenField = () => {
        $pleaseSpecifyField.hide();
        $pleaseSpecifyInput.val('');
    };

    const toggleHiddenField = () => {
        if (getColumnInputs().filter(':checked').length > 0) {
            showHiddenField();
        } else {
            hideHiddenField();
        }
    };

    const showValidation = (msg) => {
        $('.validation-message').remove();
        $firstFieldset.append(
            `<div tabindex="0" class="alert alert-danger validation-message" role="alert">${msg}</div>`
        );
    };

    const isValidInput = () => {
        return !($pleaseSpecifyField.is(':visible') && $pleaseSpecifyInput.val().trim() === '');
    };

    const initializeToggle = () => {
        $pleaseSpecifyInput.val('');
        $pleaseSpecifyField.hide();
        let $allInputs = $('tbody tr').find('td input[type="radio"], td input[type="checkbox"]')
            .add($('ol').find('input[type="radio"], input[type="checkbox"]'));
        $allInputs.on('change', toggleHiddenField);
    };

    initializeToggle();

    $("#BN").on('click', function (e) {
        if (!isValidInput()) {
            e.preventDefault();
            showValidation(validationMessage);
        }
    });
});