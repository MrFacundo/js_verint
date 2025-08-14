// Only one checkbox can be checked per row.
$(function () {
    $('fieldset input[type="checkbox"]').on("change", function () {
        var $this = $(this);
        var $firstFieldset = $('fieldset').first();

        if ($firstFieldset.find('table').length > 0) {
            var $row = $this.closest("tr");
            if ($this.is(":checked")) {
                $row.find('input[type="checkbox"]').not($this).prop("checked", false);
            }
        } else {
            var $li = $this.closest("li");
            if ($this.is(":checked")) {
                $li.find('input[type="checkbox"]').not($this).prop("checked", false);
            }
        }
    });
}
);