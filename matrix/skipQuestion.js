// Allows a matrix question to be cskipped, validates if question is not skipped
$(function () {
	const skipQuestionSelector = "#Q306_1"
	const validationMessage = "Merci de répondre à la question pour poursuivre."
	const skipQuestionTextSelector = "#Q306_QUESTION_TEXT";
	
	$(skipQuestionTextSelector).hide();

	$(skipQuestionSelector).on("change", function () {
		if ($(this).is(":checked")) {
			$("table input[type=radio]").prop("checked", false).attr("aria-checked", "false");
		}
	});
	$("table input[type=radio]").on("change", function () {
		if ($(this).is(":checked")) {
			$(skipQuestionSelector).prop("checked", false).attr("aria-checked", "false");
		}
	});

	function showValidation(msg) {
		$('.validation-message').remove();
		$('fieldset').first().append(`<div tabindex="0" class="alert alert-danger validation-message" role="alert">${msg}</div>`);
	}

	function checkInputs(event, msg) {
		let $firstFieldset = $('fieldset').first();
		let rows = $firstFieldset.find('tbody tr');
		let allRowsValid = true;

		rows.each(function () {
			let rowValid = $(this).find('td input[type="radio"]').is(':checked');
			if (!rowValid) {
				allRowsValid = false;
				return false;
			}
		});

		if (allRowsValid) {
			console.log("valid");
			$('.validation-message').remove();
		} else {
			console.log("invalid");
			event.preventDefault();
			showValidation(msg);
		}
	}

	$('#BN').on('click', function (e) {
		const skip = $(skipQuestionSelector).is(":checked");
		if (skip) {
			$('.validation-message').remove();
			console.log("Question skipped")
		} else {
			checkInputs(e, validationMessage);
		}
	});
});