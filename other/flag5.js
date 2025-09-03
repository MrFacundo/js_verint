// Set the value of a question field based on previous answers, so it can be used as a flag in subsequent questions
$(function () {
    const flags = [
        { field: 'Q210_1', values: ["%[19]Q192_A_25%", "%[19]Q192_A_33%"] },
        { field: 'Q210_2', values: ["%[19]Q192_A_26%", "%[19]Q192_A_34%"] },
        { field: 'Q210_3', values: ["%[19]Q192_A_27%", "%[19]Q192_A_35%"] },
        { field: 'Q210_4', values: ["%[19]Q192_A_28%", "%[19]Q192_A_36%"] },
        { field: 'Q210_5', values: ["%[19]Q192_A_29%", "%[19]Q192_A_37%"] },
        { field: 'Q210_6', values: ["%[19]Q192_A_30%", "%[19]Q192_A_38%"] },
        { field: 'Q210_7', values: ["%[19]Q192_A_31%", "%[19]Q192_A_39%"] },
        { field: 'Q210_8', values: ["%[19]Q192_A_32%", "%[19]Q192_A_40%"] }
    ];
    console.log("flags", flags);
    let anyFlagTrue = false;
    flags.forEach(flag => {
        const isAnyTrue = flag.values.some(value => value == 1) ? 1 : 0;
        $(`#${flag.field}`).val(isAnyTrue);
        anyFlagTrue = anyFlagTrue || isAnyTrue;
    });
    $('#Q210_9').val(anyFlagTrue ? 1 : 0);
    //$('#BN').click();
});
