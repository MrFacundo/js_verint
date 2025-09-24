// Show/hide a hidden field based on the checked state of a specific input
$(function () {
    const triggerInputId = "Q242_A_13_1";
    const hiddenFieldId = "pleaseSpecifyQ";
    const validationMessage = "Vous avez sélectionné 'Autres', merci de préciser.";

    const $triggerInput = $('#' + triggerInputId);
    const $hiddenField = $('#' + hiddenFieldId);
    const $hiddenInput = $hiddenField.find('input');
    const $firstFieldset = $('fieldset').first();
    const showHiddenField = () => {
        $hiddenField.show();
    };

    const hideHiddenField = () => {
        $hiddenField.hide();
        $hiddenInput.val('');
    };

    const toggleHiddenField = () => {
        if ($triggerInput.is(':checked')) {
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
        return !($hiddenField.is(':visible') && $hiddenInput.val().trim() === '');
    };
    const initializeToggle = () => {
        $triggerInput.prop("checked", false).attr("aria-checked", "false");
        $hiddenInput.val('');
        const $container = $('table').length > 0
            ? $triggerInput.closest('tr')
            : $triggerInput.closest('ol');

        $container.find('input[type="radio"], input[type="checkbox"]')
            .on('change', toggleHiddenField);
    };

    initializeToggle();

    $("#BN").on('click', function (e) {
        if (!isValidInput()) {
            e.preventDefault();
            showValidation(validationMessage);
        }
    });
});