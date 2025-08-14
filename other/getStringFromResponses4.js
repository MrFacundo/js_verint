// Get a string from the responses array and set it as the text of an element with class "txt1".
$(function () {
    const responses = [
        "%[8]Q175LBL_1%",
        "%[8]Q175LBL_2%",
        "%[8]Q175LBL_3%",
        "%[8]Q175LBL_4%",
        "%[8]Q175LBL_5%",
        "%[8]Q175LBL_6%",
        "%[8]Q175LBL_7%",
        "%[8]Q175LBL_8%",
        "%[8]Q175LBL_9%",
        "%[8]Q175LBL_10%"
    ];

    const spanEl = $(".txt1");
    spanEl.text(responses[0]);
});