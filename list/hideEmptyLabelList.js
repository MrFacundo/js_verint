/* Hides all li elements that contain empty label elements*/
export function hideEmptyLabelList() {
	const $list = $('.response-set');
	$list.find('li.response').each(function () {
		if ($(this).find('label').text().trim() === '') {
			$(this).hide();
		}
	});
}