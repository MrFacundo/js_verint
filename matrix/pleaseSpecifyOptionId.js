/**
 * Show/hide a hidden field based on the checked state of a specific input
 * @param {string} triggerInputId - The ID of the input that triggers the hidden field
 * @param {string} hiddenFieldId - The ID of the hidden field to show/hide
 * @param {string} validationMessage - The validation message to display
 */
export function pleaseSpecifyOptionId(triggerInputId, hiddenFieldId, validationMessage) {
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
}