$(function () {
    function checkInputs(event) {
        let $firstFieldset = $('fieldset').first();
        let rows = $firstFieldset.find('tbody tr');
        let numCols = rows.first().find('td input[type="checkbox"]').length;
        let result = Array.from({ length: numCols }, () => []);

        // Map the input values to a 2D array
        rows.each(function () {
            $(this).find('td input[type="checkbox"]').each(function (index) {
                result[index].push($(this).is(':checked') ? 1 : 0);
            });
        });

        // Get a flag value for each column
        let result2 = Array(numCols).fill(0);

        result.forEach((col, index) => {
            if (col[4] === 1 || col[7] === 1 || col[8] === 1 || col[9] === 1) {
                result2[index] = 1;
            }
        });

        console.log("Columns input values:");
        console.log(result);
        console.log("Flag values per column:");
        console.log(result2);

        // Fill the inputs in the second fieldset
        let $secondFieldset = $('fieldset').eq(1);
        $secondFieldset.find('input[type="text"]').each(function (index) {
            if (index < result2.length) {
                $(this).val(result2[index]);
            }
        });
    }

    $('#BN').on('click', function (event) {
        checkInputs(event);
    });
});