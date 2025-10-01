/**
 * Hides all empty options in a list question
 * 
 */
export function hideEmptyLabelList() {
	const $list = $('.response-set');
	$list.find('li.response').each(function () {
		if ($(this).find('label').text().trim() === '') {
			$(this).hide();
		}
	});
}