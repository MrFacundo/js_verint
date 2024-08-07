$(function () {
  const $list = $('.response-set');
  $list.find('li').each(function () {
	if ($(this).find('label').text().trim() === '') {
	  $(this).hide();
	}
  });
});