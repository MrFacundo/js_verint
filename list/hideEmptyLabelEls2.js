/* Hides all li elements that contain empty label elements or specific false values */
$(function () {
    // Array of values to check
    const valuesToCheck = [
        "%[Q8_c]Q158_ALBL_4%", "%[Q8_c]Q158_ALBL_8%", "%[Q8_c]Q158_ALBL_12%",
        "%[Q8_c]Q158_ALBL_16%", "%[Q8_c]Q158_ALBL_20%", "%[Q8_c]Q158_ALBL_24%",
        "%[Q8_c]Q158_ALBL_28%", "%[Q8_c]Q158_ALBL_32%", "%[Q8_c]Q158_ALBL_36%",
        "%[Q8_c]Q158_ALBL_40%", "%[Q8_c]Q158_ALBL_44%", "%[Q8_c]Q158_ALBL_48%"
    ];

    const $list = $('.response-set');
    $list.find('li').each(function (index) {
        const $choiceTextLabel = $(this).find('label.choice-text');
        if ($choiceTextLabel.text().trim() === '' || valuesToCheck[index] === '') {
            $(this).hide();
        }
    });
});