/* Checks all unput labels in a table*/
$(function () {
    $('#Q85_WRAPPER').find('table tr').each(function() {
        $(this).find('td:nth-child(2) input[type="radio"]').prop('checked', true);
    });
});