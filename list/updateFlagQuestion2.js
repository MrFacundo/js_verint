 // Updates text inputs based on checkbox selections in response sets.
$(function () {
    function checkInputs() {
        const $firstResponseSet = $('.response-set').first();
        const $secondResponseSet = $('.response-set').eq(1);

        const $firstGroup = $firstResponseSet.find('li.choice-group').first().nextUntil('li.choice-group');
        const $secondGroup = $firstResponseSet.find('li.choice-group').last().nextAll();

        const isFirstGroupChecked = $firstGroup.find('input[type="checkbox"]').is(':checked');
        const isSecondGroupChecked = $secondGroup.find('input[type="checkbox"]').is(':checked');

        const values = [0, 0, 0];
        if (isFirstGroupChecked && isSecondGroupChecked) {
            values[0] = 1;
        } else if (isFirstGroupChecked) {
            values[1] = 1;
        } else if (isSecondGroupChecked) {
            values[2] = 1;
        }

        $secondResponseSet.find('input[type="text"]').each((index, input) => {
            $(input).val(values[index]);
        });
    }

    $('.response-set').first().find('input[type="checkbox"]').on('change', checkInputs);
});