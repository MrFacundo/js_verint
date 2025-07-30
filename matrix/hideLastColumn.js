// Hides the last column of the table
$(function () {
    var table = $('table');
    table.find('tr').each(function () {
        $(this).find('th:last-child, td:last-child').hide();
    });
});