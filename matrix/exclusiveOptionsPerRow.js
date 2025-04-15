$(function () {
    var exclusiveSuffix = "_8";
    $('fieldset input[type="checkbox"]').on("change", function () {
        var $this = $(this);
        var $firstFieldset = $('fieldset').first();

        if ($firstFieldset.find('table').length > 0) {
            var $row = $this.closest("tr");
            var $inputsInRow = $row.find('input[type="checkbox"]');

            if ($this.attr("id").endsWith(exclusiveSuffix)) {
                $inputsInRow.not($this).prop("checked", false);
            } else {
                $inputsInRow.each(function () {
                    if ($(this).attr("id").endsWith(exclusiveSuffix)) {
                        $(this).prop("checked", false);
                    }
                });
            }
        } else {
            var $listItem = $this.closest("li");
            var $inputsInList = $listItem.closest("ol").find('input[type="checkbox"]');

            if ($this.attr("id").endsWith(exclusiveSuffix)) {
                $inputsInList.not($this).prop("checked", false);
            } else {
                $inputsInList.each(function () {
                    if ($(this).attr("id").endsWith(exclusiveSuffix)) {
                        $(this).prop("checked", false);
                    }
                });
            }
        }
    });
});