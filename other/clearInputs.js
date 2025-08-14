// Clears the values of the inputs with IDs Q981, Q982, Q983, etc.
$(function () {
    function clearInputValues() {
        for (let index = 1; index <= 3; index++) {
            const inputEl = document.getElementById(`Q98${index}`);
            if (inputEl) inputEl.value = "";
        }
    }

    clearInputValues();
});