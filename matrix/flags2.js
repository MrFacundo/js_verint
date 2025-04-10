$(function() {
    const radioInputs = $('table[aria-labelledby="Q744_QUESTION_TEXT"] tbody input[type="radio"]');
    const inputs = $('.response-set[aria-labelledby="Q758_QUESTION_TEXT"] input[type="text"]');

    radioInputs.change(function() {
        const checkedOptions = [];

        $('table[aria-labelledby="Q744_QUESTION_TEXT"] tbody tr').each(function() {
            const checkedInput = $(this).find('td:nth-child(2) input[type="radio"]:checked');
            if (checkedInput.length > 0) {
                const id = checkedInput.attr('id');
                const optionNumber = id.split('_')[2];
                if (/^(1|3|4|5|6|7)$/.test(optionNumber)) {
                    checkedOptions.push(optionNumber);
                }
            }
        });

        inputs.val('');

        if (checkedOptions.length >= 2) {
            checkedOptions.forEach(function(optionNumber) {
                const input = $(`#Q758_${optionNumber}`);
                if (input.length) {
                    input.val('1');
                }
            });
        }
    });
});