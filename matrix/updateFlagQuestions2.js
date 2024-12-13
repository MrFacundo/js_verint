// Set flag questions based on the input values of the matrix
$(function () {
    function checkInputs(event) {
        let $firstFieldset = $('fieldset').first();
        let result = [];

        if ($firstFieldset.find('table').length > 0) {
            // Desktop layout
            let rows = $firstFieldset.find('tbody tr');
            let numCols = rows.first().find('td input[type="checkbox"]').length;
            result = Array.from({ length: numCols }, () => []);

            // Map the input values to a 2D array
            rows.each(function () {
                $(this).find('td input[type="checkbox"]').each(function (index) {
                    result[index].push($(this).is(':checked') ? 1 : 0);
                });
            });
        } else {
            // Mobile layout
            let olElements = $firstFieldset.find('ol');
            let numCols = olElements.first().find('li input[type="checkbox"]').length;
            result = Array.from({ length: numCols }, () => []);

            // Map the input values to a 2D array
            olElements.each(function () {
                $(this).find('li input[type="checkbox"]').each(function (index) {
                    result[index].push($(this).is(':checked') ? 1 : 0);
                });
            });
        }

        // Get a flag value for each column
        let result2 = Array(result.length).fill(0);
        
        result.forEach((col, index) => {
            if (col[15] === 1 || col[16] === 1 || col[17] === 1) {
                result2[index] = 1;
            }
        });
        // Add an extra element to result2
        result2.push(result2.every(value => value === 1) ? 1 : 0);

        console.log("Columns input values:");
        console.log(result);
        console.log("Flag values per column:");
        console.log(result2);

        // Fill the inputs in the second fieldset
        let $secondFieldset = $('fieldset').eq(1);
        $secondFieldset.find('input[type="text"]')[0].value = result2[result2.length - 1];
    }

    $('#BN').on('click', function (event) {
        checkInputs(event);
    });
});