// Set the value of a question field based on previous answers, so it can be used as a flag in subsequent questions
$(function () {
    const fieldsetId = "Q482_WRAPPER";
    const fieldsetEl = document.getElementById(fieldsetId);
    const values = [
        "%[16]Q468LBL_1%", "%[16]Q468LBL_2%", "%[16]Q468LBL_3%", "%[16]Q468LBL_4%", "%[16]Q468LBL_5%",
        "%[16]Q468LBL_6%", "%[16]Q468LBL_7%", "%[16]Q468LBL_8%", "%[16]Q468LBL_9%", "%[16]Q468LBL_10%" 
    ];
    const wasNotSelected = values.every(value => value == 0);
    fieldsetEl.querySelector("input[type='text']").value = wasNotSelected ? 1 : 0;

    $('#BN').click();
}); 
