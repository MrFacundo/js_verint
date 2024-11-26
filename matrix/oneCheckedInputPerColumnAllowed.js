// Only one checkbox can be checked per column.
$(function () {
	$('fieldset input[type="checkbox"]').on("change", function () {
		var $this = $(this);
		var columnIndex = $this.closest("td").index();
		if ($this.is(":checked")) {
			$this
				.closest("table")
				.find("tr")
				.each(function () {
					$(this)
						.find("td")
						.eq(columnIndex)
						.find('input[type="checkbox"]')
						.not($this)
						.prop("checked", false);
				});
		}
	});
});
