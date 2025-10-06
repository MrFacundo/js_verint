/**
 * Checks if textarea is filled when not skipped, clears textarea when skipped
 * @param {string} skipSelector - The selector for the skip checkbox
 * @param {string} validationMessage - The validation message to display
 * @param {string} textareaSelector - The selector for the textarea
 * @param {string} hiddenFieldId - The ID of the hidden field (optional)
 */
export function skipQuestionTextArea(skipSelector, validationMessage, textareaSelector, hiddenFieldId) {
    const questionPrefix = skipSelector.match(/#(Q\d+)/)[1];
    const skipTextSelector = "#" + questionPrefix + "_QUESTION_TEXT";
    const submitSelector = "#BN";

    const $skip = $(skipSelector);
    const $skipText = $(skipTextSelector);
    const $firstFieldset = $('fieldset').first();
    const $submit = $(submitSelector);
    const $hiddenField = hiddenFieldId ? $('#' + hiddenFieldId) : null;
    const $hiddenInput = $hiddenField ? $hiddenField.find('input') : null;
    const $textarea = $(textareaSelector);

    $skipText.hide();

    const clearTextarea = () => {
        $textarea.val('');
    };

    const showValidation = (msg) => {
        $('.validation-message').remove();
        $firstFieldset.append(
            `<div tabindex="0" class="alert alert-danger validation-message" role="alert">${msg}</div>`
        );
    };

    const isValidInput = () => {
        if ($skip.is(":checked")) return true;
        return $textarea.val().trim().length > 0;
    };

    $skip.on("change click", function () {
        if ($(this).is(":checked")) {
            clearTextarea();
            if ($hiddenField && $hiddenInput) {
                $hiddenField.hide();
                $hiddenInput.val('');
            }
        }
    });

    $textarea.on("input", function () {
        if ($(this).val().trim().length > 0) {
            $skip.prop("checked", false).attr("aria-checked", "false");
        }
    });

    $submit.on('click', function (e) {
        $('.validation-message').remove();

        if (!isValidInput()) {
            e.preventDefault();
            showValidation(validationMessage);
        }
    });
}