// Set the value of a question field based on previous answers, so it can be used as a flag in subsequent questions
$(function () {
	const fieldsetId = "Q348_WRAPPER";
	const fieldsetEl = document.getElementById(fieldsetId);
	if ("%[P7]Q302LBL_1%" || "%[P7]Q302LBL_3%" || "%[P7]Q302LBL_4%" || "%[P7]Q302LBL_5%" || "%[P7]Q302LBL_8%") {
		fieldsetEl.querySelector("input[type='text']").value = 1;
	} else {
		fieldsetEl.querySelector("input[type='text']").value = 0;
	}
});