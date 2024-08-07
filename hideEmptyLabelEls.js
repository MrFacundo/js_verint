/* Hides all li elements that contain empty label elements*/
$(function () {
  const $list = $('.response-set');
  $list.find('li').each(function () {
	if ($(this).find('label').text().trim() === '') {
	  $(this).hide();
	}
  });
});