// Clears the values of the inputs with a specific ID prefix when the document is ready.
$(function () {
    const inputIdPrefix = "Q571";

    function clearInputValues() {
        for (let index = 1; index <= 3; index++) {
            const inputEl = document.getElementById(`${inputIdPrefix}${index}`);
            if (inputEl) inputEl.value = "";
        }
    }

    clearInputValues();
});