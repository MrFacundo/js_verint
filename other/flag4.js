//Sets flags fields based on previous response, with a group priority criteria
$(function () {

    const Q1Response = [
        "%[1]Q1_A_2%",
        "%[1]Q1_A_5%",
        "%[1]Q1_A_8%",
        "%[1]Q1_A_11%",
        "%[1]Q1_A_14%",
        "%[1]Q1_A_17%",
        "%[1]Q1_A_20%",
        "%[1]Q1_A_23%",
        "%[1]Q1_A_26%",
        "%[1]Q1_A_29%",
        "%[1]Q1_A_32%",
        "%[1]Q1_A_35%",
        "%[1]Q1_A_38%",
        "%[1]Q1_A_41%",
        "%[1]Q1_A_44%",
        "%[1]Q1_A_47%",
    ];

    const labels = {
        1: "Frisches Obst/ Gemüse",
        2: "Gekühlte Lebensmittel (z. B. Fleisch, Fisch, Wurst, Käse, Milchprodukte, Fertiggerichte)\nTiefkühlkost",
        3: "Dauerhaft haltbare Lebensmittel (z. B. Konserven oder Trockenprodukte wie Mehl, Nudeln etc.)",
        4: "Wein & Sekt",
        5: "Bier",
        6: "Spirituosen",
        7: "Alkoholfreie Getränke (z.B. Softdrinks/ Wasser)",
        8: "Heißgetränke (z.B. Kaffee, Tee)",
        9: "Süßwaren & salzige Snacks",
        10: "Parfüm & Kosmetik",
        11: "Körperpflege (z.B. Gesicht/ Körper/ Haare/ Mundpflege/ Rasieren)",
        12: "Babyprodukte (z. B. Nahrung, Milch, Windeln)",
        13: "Tiernahrung & Tierpflege",
        14: "Haushaltsprodukte (z.B. Waschmittel, Reinigungsmittel, Toilettenpapier)",
        15: "Vitamine/ Nahrungsergänzungsmittel/ nicht verschreibungspflichtige Medikamente",
        16: "Sonstiges"
    };

    function selectElements(Q1Response) {
        const group1 = [1, 2, 3, 4];
        const group2 = [5, 6, 7, 8, 9, 10, 15];
        const group3 = [11, 12, 13];
        const group4 = [14, 16];

        const getOnes = group => group.filter(i => Q1Response[i - 1] === "1");

        const result = [];
        const candidates = [
            getOnes(group1),
            getOnes(group2),
            getOnes(group3),
            getOnes(group4)
        ];

        for (const group of candidates) {
            while (group.length && result.length < 3) {
                const i = Math.floor(Math.random() * group.length);
                result.push(group.splice(i, 1)[0]);
            }
            if (result.length >= 3) break;
        }

        return result.map(i => labels[i]);
    }

    const selectedLabels = selectElements(Q1Response);
    console.log("Q1Response", Q1Response);
    console.log("selectedLabels", selectedLabels);

    selectedLabels.forEach((el, index) => {
        const inputEl = document.getElementById(`Q98_${index + 1}`);
        if (inputEl) inputEl.value = el;
    });
});