// Set the value of a question field based on previous answers, so it can be used as a flag in subsequent questions
$(function () {
    const fieldsetId = "Q350_WRAPPER";
    const fieldsetEl = document.getElementById(fieldsetId);
    const values = [
        "%[L6]Q319_1%", "%[L6]Q319_2%", "%[L6]Q319_3%", "%[L6]Q319_4%", "%[L6]Q319_5%",
        "%[L6]Q319_6%", "%[L6]Q319_7%", 
        "%[L9]Q323_1%", "%[L9]Q323_2%", "%[L9]Q323_3%", "%[L9]Q323_4%", "%[L9]Q323_5%",
        "%[L9]Q323_6%", "%[L9]Q323_7%"
    ];
    const wasSelected = values.some(value => value == 1);
    fieldsetEl.querySelector("input[type='text']").value = wasSelected ? 1 : 0;

    $('#BN').trigger('click');
}); 