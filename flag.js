// Set the value of a question field based on previous answers, so it can be used as a flag in subsequent questions
$(function () {
    const fieldsetId = "Q350_WRAPPER";
    const fieldsetEl = document.getElementById(fieldsetId);
    const values = [
		"%[L6]Q319_8%", "%[L6]Q319_9%", "%[L6]Q319_10%", "%[L6]Q319_11%", "%[L6]Q319_12%",
		"%[L6]Q319_13%", "%[L6]Q319_14%", "%[L6]Q319_15%", "%[L6]Q319_16%", "%[L6]Q319_17%",
		"%[L6]Q319_18%", "%[L6]Q319_19%", "%[L6]Q319_20%", "%[L6]Q319_21%",
        "%[L9]Q323_8%", "%[L9]Q323_9%", "%[L9]Q323_10%", "%[L9]Q323_11%", "%[L9]Q323_12%",
        "%[L9]Q323_13%", "%[L9]Q323_14%", "%[L9]Q323_15%", "%[L9]Q323_16%", "%[L9]Q323_17%",
        "%[L9]Q323_18%", "%[L9]Q323_19%", "%[L9]Q323_20%", "%[L9]Q323_21%"
    ];
    const wasSelected = values.some(value => value == 1);
    fieldsetEl.querySelector("input[type='text']").value = wasSelected ? 0 : 1;
});