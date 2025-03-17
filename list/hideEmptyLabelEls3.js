$(function () {
	const $list = $('.response-set');
  
	// Hide empty response items
	$list.find('li.response').each(function () {
	  if ($(this).find('label').text().trim() === '') {
		$(this).hide();
	  }
	});
  
	// Hide choice-group elements if all following response elements are hidden
	$list.find('li.choice-group').each(function () {
	  let $choiceGroup = $(this);
	  let $nextResponses = $choiceGroup.nextUntil('.choice-group', 'li.response');
	  
	  if ($nextResponses.length > 0 && $nextResponses.filter(':visible').length === 0) {
		$choiceGroup.hide();
	  }
	});
  });
  