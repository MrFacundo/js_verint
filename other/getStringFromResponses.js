$(function () {
    const responses = [
        "%[13a]Q346_A_1LBL%",
        "%[13a]Q346_A_2LBL%",
        "%[13a]Q346_A_5LBL%",
        "%[13a]Q346_A_4LBL%",
        "%[13a]Q346_A_6LBL%",
    ];

    const items = [
        "red meat",
        "poultry",
        "poultry",
        "sausage, bacon, chorizo and other processed meat",
        "deli meat",
    ];

    let filteredItems = [];

    responses.forEach((response, index) => {
        if (response === "Eat less of" && !filteredItems.includes(items[index])) {
            filteredItems.push(items[index]);
        }
    });

    let resultString = "";
    if (filteredItems.length === 1) {
        resultString = filteredItems[0];
    } else if (filteredItems.length > 1) {
        const lastItem = filteredItems.pop();
        resultString = filteredItems.join(", ") + " and " + lastItem;
    }

    const spanEl = $("#txt1");
    spanEl.text(resultString);
});