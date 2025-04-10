$(function () {
    const responses = [
        "%[1]Q309_1%",
        "%[3]Q241_2%",
        "%[3]Q241_1%"
    ];
    const items = [
        "Sauce tomate en format bocal en verre, quelle que soit la marque",
        "Sauce Italienne aux viandes rôties en format 3x95g / 2x190g ou 3x190g de la marque Zapetti",
        "Sauce Tomate cuisinée Zapetti en format 3x95g ou 2x190g de la marque Zapetti",
    ];
    let filteredItems = [];

    responses.forEach((response, index) => {
        if (response === "1") filteredItems.push(items[index]);
    });

    let resultString = "";
    resultString = filteredItems.map(item => `<p>${item}</p>`).join("");

    const spanEl = $("#txt1");
    spanEl.html(resultString);
});