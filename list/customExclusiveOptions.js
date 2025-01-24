// Custom exclusive options
$(function () {
    var fieldset = $('fieldset');

    fieldset.find('input[type="checkbox"]').on('change', function () {
        var checkboxes = fieldset.find('li input[type="checkbox"]');
        var checkbox1 = checkboxes.eq(0);
        var checkbox2 = checkboxes.eq(1);
        var checkbox3 = checkboxes.eq(2);

        // If checkbox1 or checkbox2 is checked, uncheck checkbox3
        if ($(this).is(checkbox1) || $(this).is(checkbox2)) {
            if (checkbox1.is(':checked') || checkbox2.is(':checked')) {
                checkbox3.prop('checked', false);
            }
        }

        // If checkbox3 is checked, uncheck checkbox1 and checkbox2
        if ($(this).is(checkbox3)) {
            if (checkbox3.is(':checked')) {
                checkbox1.prop('checked', false);
                checkbox2.prop('checked', false);
            }
        }
    });
});