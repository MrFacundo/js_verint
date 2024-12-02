/* Hides all li elements that contain empty label elements or specific false values */
$(function () {
    // Array of values to check
    const valuesToCheck = [
        "%[3.1]Q448LBL_1%", 
        "%[3.1]Q448LBL_2%", 
        "%[3.1]Q448LBL_3%", 
        "%[3.1]Q448LBL_4%", 
        "%[3.1]Q448LBL_5%",
        "%[3.1]Q448LBL_6%",
        "%[3.1]Q448LBL_7%",
        "%[3.1]Q448LBL_8%",
        "%[3.1]Q448LBL_9%",
        "%[3.1]Q448LBL_10%",
        "%[3.1]Q448LBL_11%",
        "%[3.1]Q448LBL_12%",
        "%[3.1]Q448LBL_13%",
        "%[3.1]Q448LBL_14%" 
    ];

    const $list = $('.response-set');
    $list.find('li').each(function (index) {
        const $choiceTextLabel = $(this).find('label.choice-text');
        if ($choiceTextLabel.text().trim() === '' || valuesToCheck[index] === '') {
            $(this).hide();
        }
    });
});