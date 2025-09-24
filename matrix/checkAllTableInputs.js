// Checks all input labels in a table. Used for advancing through the questionnaire while testing
$(function () {
    $("fieldset").find('table tr').each(function() {
        $(this).find('td:nth-child(2) input[type="radio"]').prop('checked', true);
    });
});