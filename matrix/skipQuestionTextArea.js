// Checks if textarea is filled when not skipped, clears textarea when skipped
$(function () {
	const skipSelector = "#Q569_1";
	const skipTextSelector = "#Q569_QUESTION_TEXT";
	const validationMessage = "Merci de répondre à la question pour poursuivre.";
	const submitSelector = "#BN";
	const hiddenFieldId = "";
	const textareaSelector = "#Q568";

	const $skip = $(skipSelector);
	const $skipText = $(skipTextSelector);
	const $firstFieldset = $('fieldset').first();
	const $submit = $(submitSelector);
	const $hiddenField = $('#' + hiddenFieldId);
	const $hiddenInput = $hiddenField.find('input');
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
			if (hiddenFieldId) {
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
			console.log("invalid");
		} else {
			console.log($skip.is(":checked") ? "Question skipped" : "valid");
		}
	});
});