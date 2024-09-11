// Save the state of the checkboxes in a table to local storage
function saveCheckedInputs() {
	var tableState = [];
	var tableWrapperId = '#Q567_WRAPPER';

	$(tableWrapperId + ' table tbody tr').each(function () {
		var rowState = [];
		$(this).find('td input[type="checkbox"]').each(function () {
			rowState.push(this.checked);
		});
		tableState.push(rowState);
	});
	console.log(tableState);
	localStorage.setItem('tableState', JSON.stringify(tableState));
}

// Restore the state of the checkboxes in a table from local storage
$(function () {
    var tableState = JSON.parse(localStorage.getItem('tableState')) || [];

    $('#Q581_WRAPPER table tbody tr').each(function (rowIndex) {
        var rowState = tableState[rowIndex] || [];
        $(this).find('td input[type="checkbox"]').each(function (colIndex) {
            $(this).prop('checked', false);
            if (!rowState[colIndex]) {
                $(this).prop('disabled', true);
            }
        });
    });
});
