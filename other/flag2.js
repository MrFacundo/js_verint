$(function () {
    const fieldsetEl = document.getElementsByTagName("fieldset")[0];
    const values = [
        "%[3]Q272_A_1%",
        "%[3]Q272_A_2%",
        "%[3]Q272_A_3%",
        "%[3]Q272_A_4%",
        "%[3]Q272_A_5%",
        "%[3]Q272_A_6%",
        "%[3]Q272_A_7%",
    ];
    console.log("values", values);

    const resultArray = values.map(value => (value != 7 && value != 8 ? 1 : 0));
    console.log("Result Array:", resultArray);

    resultArray.forEach((result, index) => {
        const inputEl = document.getElementById(`Q365_${index + 1}`);
        if (inputEl) inputEl.value = result;
    });
});