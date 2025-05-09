// Set the value of a question field based on previous answers, so it can be used as a flag in subsequent questions
$(function () {
    const flags = {
        Q205_1: ["%[13]Q177_A_1%", "%[13]Q177_A_10%"],
        Q205_2: ["%[13]Q177_A_2%", "%[13]Q177_A_11%"],
        Q205_3: ["%[13]Q177_A_3%", "%[13]Q177_A_12%"],
        Q205_4: ["%[13]Q177_A_4%", "%[13]Q177_A_13%"]
    };
    let anyFlagTrue = false;
    Object.entries(flags).forEach(([field, values]) => {
        const isTrue = values.some(value => value == 1) ? 1 : 0;
        $(`#${field}`).val(isTrue);
        console.log(`Updated ${field} with value: ${isTrue}`);
        anyFlagTrue = anyFlagTrue || isTrue;
    });
    $('#Q205_5').val(anyFlagTrue ? 1 : 0);
    $('#BN').trigger('click');
});