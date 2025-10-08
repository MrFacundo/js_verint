/**
 * Allows a matrix question to be skipped, validates on submit if question is not skipped
 * @param {string} skipSelector - The selector for the skip checkbox
 * @param {string} validationMessage - The validation message to display
 * @param {string} hiddenFieldId - The ID of the hidden field (optional)
 */
export function skipQuestionMatrix(skipSelector, validationMessage, hiddenFieldId) {
	const questionPrefix = skipSelector.match(/#(Q\d+)/)[1];
	const skipTextSelector = "#" + questionPrefix + "_QUESTION_TEXT";
	const submitSelector = "#BN";

	const $skip = $(skipSelector);
	const $skipText = $(skipTextSelector);
	const $firstFieldset = $('fieldset').first();
	const $submit = $(submitSelector);
	const $hiddenField = hiddenFieldId ? $('#' + hiddenFieldId) : null;
    const $hiddenInput = $hiddenField ? $hiddenField.find('input') : null;

	$skipText.hide();

	const clearRadios = () => {
		const selector = $('table').length > 0
			? 'table input[type="radio"]'
			: 'fieldset:first ol input[type="radio"]';
		$(selector).prop("checked", false).attr("aria-checked", "false");
	};

	const showValidation = (msg) => {
		$('.validation-message').remove();
		$firstFieldset.append(
			`<div tabindex="0" class="alert alert-danger validation-message" role="alert">${msg}</div>`
		);
	};

	const isValidInput = () => {
		if ($skip.is(":checked")) return true;

		const selector = $('table').length > 0
			? 'tbody tr'
			: 'ol';

		return $firstFieldset.find(selector).toArray().every(item =>
			$(item).find('input[type="radio"]').is(':checked')
		);
	};

	$skip.on("change click", function () {
		if ($(this).is(":checked")) {
			clearRadios();
			if ($hiddenField && $hiddenInput) {
				$hiddenField.hide();
				$hiddenInput.val('');
			}
		}
	});

	$firstFieldset.on("change", 'input[type="radio"]', function () {
		if ($(this).is(":checked")) {
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