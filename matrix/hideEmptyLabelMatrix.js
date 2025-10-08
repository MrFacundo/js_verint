/**
 * Hides all empty options in a matrix question
 * 
 */export function hideEmptyLabelMatrix() {
  $('fieldset').each(function () {
    const $fieldset = $(this);
    const $table = $fieldset.find('table');
    const $responseArea = $fieldset.find('div.response-area');
    if ($table.length) {
      const $rows = $table.find('tbody tr');
      $rows.each(function () {
        const $firstTd = $(this).find('td').first();
        if ($firstTd.text().trim() === '') {
          $(this).hide();
        }
      });
    } else {
      const $lists = $responseArea.find('ol');
      $lists.each(function () {
        const $firstLi = $(this).find('li').first();
        if ($firstLi.text().trim() === '') {
          $(this).hide();
        }
      });
    }
  });
}