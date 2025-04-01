// Allows to have exclusive options per row in a matrix question.
$(function () {
    var exclusiveColumns = [8];
    $('fieldset input[type="checkbox"]').on("change", function () {
        var $this = $(this);
        var $firstFieldset = $('fieldset').first();

        if ($firstFieldset.find('table').length > 0) {
            var columnIndex = $this.closest("td").index();
            var rowIndex = $this.closest("tr").index();

            if (exclusiveColumns.includes(columnIndex)) {
                $this
                    .closest("tr")
                    .find('input[type="checkbox"]')
                    .not($this)
                    .prop("checked", false);
            } else {
                exclusiveColumns.forEach(function (exclusiveColumnIndex) {
                    $this
                        .closest("tr")
                        .find("td")
                        .eq(exclusiveColumnIndex)
                        .find('input[type="checkbox"]')
                        .prop("checked", false);
                });
            }
        } else {
            var olIndex = $this.closest("ol").index();
            var liIndex = $this.closest("li").index() + 1;

            if (exclusiveColumns.includes(liIndex)) {
                $this
                    .closest("li")
                    .find('input[type="checkbox"]')
                    .not($this)
                    .prop("checked", false);
            } else {
                exclusiveColumns.forEach(function (exclusiveColumnIndex) {
                    $this
                        .closest("ol")
                        .find("li")
                        .eq(exclusiveColumnIndex - 1)
                        .find('input[type="checkbox"]')
                        .prop("checked", false);
                });
            }
        }
    });
});