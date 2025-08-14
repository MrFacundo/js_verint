// Allows to have exclusive options per column in a matrix question.
$(function () {
    var exclusiveRows = [13]; // Array of exclusive row indices
    console.log("exclusiveRows: ", exclusiveRows);
    $('fieldset input[type="checkbox"]').on("change", function () {
        var $this = $(this);
        var $firstFieldset = $('fieldset').first();

        if ($firstFieldset.find('table').length > 0) {
            // Desktop layout
            var columnIndex = $this.closest("td").index();
            var rowIndex = $this.closest("tr").index() + 1;
            console.log("columnIndex: ", columnIndex);
            console.log("rowIndex: ", rowIndex);
            if (exclusiveRows.includes(rowIndex)) {
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
            } else {
                exclusiveRows.forEach(function (exclusiveRowIndex) {
                    console.log("Unchecking exclusive row: ", exclusiveRowIndex);
                    var $row = $this.closest("table").find("tr").eq(exclusiveRowIndex);
                    if ($row.length > 0) {
                        $row.find("td").eq(columnIndex).find('input[type="checkbox"]').prop("checked", false);
                    }
                });
            }
        } else {
            // Mobile layout
            var olIndex = $this.closest("ol").index() + 1;
            var liIndex = $this.closest("li").index();
            console.log("olIndex: ", olIndex);
            console.log("liIndex: ", liIndex);
            if (exclusiveRows.includes(olIndex)) {
                console.log("olIndex is in exclusiveRows");
                $firstFieldset.find('ol').each(function (index) {
                    if (index !== olIndex - 1) {
                        $(this).find('li').eq(liIndex).find('input[type="checkbox"]').prop("checked", false);
                        console.log("Unchecked liIndex: ", liIndex, " in olIndex: ", index);
                    }
                });
            } else {
                console.log("olIndex is not in exclusiveRows");
                exclusiveRows.forEach(function (exclusiveRowIndex) {
                    console.log("Unchecking exclusive row: ", exclusiveRowIndex);
                    var $ol = $firstFieldset.find('ol').eq(exclusiveRowIndex - 1);
                    if ($ol.length > 0) {
                        $ol.find('li').eq(liIndex).find('input[type="checkbox"]').prop("checked", false);
                        console.log("Unchecked liIndex: ", liIndex, " in olIndex: ", exclusiveRowIndex);
                    }
                });
            }
        }
    });
});