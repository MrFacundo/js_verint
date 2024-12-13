// Check if any of the specified checkboxes are checked and update the value of the text input accordingly.
$(function () {
    function checkInputs(event) {
        let $firstFieldset = $('fieldset').first();
        let elementsThatNeedToBeChecked = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        let isAnyChecked = elementsThatNeedToBeChecked.some(function (index) {
            return $firstFieldset.find('li').eq(index - 1).find('input[type="checkbox"]').is(':checked');
        });

        let $secondFieldset = $('fieldset').eq(1);

        if (isAnyChecked) {
            console.log('At least one of the specified checkboxes is checked.');
            $secondFieldset.find('input[type="text"]')[0].value = 1;
        } else {
            console.log('None of the specified checkboxes are checked.');
            $secondFieldset.find('input[type="text"]')[0].value = 0;
        }
    }

    $('#BN').on('click', function (event) {
        checkInputs(event);
    });
});