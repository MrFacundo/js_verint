// Only one checkbox can be checked per column.
$(function () {
    $('fieldset input[type="checkbox"]').on("change", function () {
        var $this = $(this);
        var $firstFieldset = $('fieldset').first();

        if ($firstFieldset.find('table').length > 0) {
            // Desktop layout
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
        } else {
            // Mobile layout
            var liIndex = $this.closest("li").index();
            if ($this.is(":checked")) {
                $firstFieldset.find('ol').each(function () {
                    $(this)
                        .find('li')
                        .eq(liIndex)
                        .find('input[type="checkbox"]')
                        .not($this)
                        .prop("checked", false);
                });
            }
        }
    });
});