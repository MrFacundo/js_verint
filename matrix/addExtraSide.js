$(function () {
    const qid = $("input[type=text]").eq(0).attr("id").split("_")[0];
    const txtLabels = [
        "Normalerweise entscheide ich mich im Geschäft für den Kauf des Produkts.",
        "Es ist ein optionales Lebensmittel - es ist keine große Sache, wenn es im Kühlschrank fehlt.",
        "Ich probiere gerne verschiedene/neue Marken aus.",
        "Die Produkte in dieser Kategorie sind sich sehr ähnlich.",
        "Ich suche nicht nach Informationen, bevor ich solche Produkte kaufe.",
        "Ich bleibe lieber bei den klassischen Geschmacksrichtungen.",
        "Ich achte nicht auf Etiketten und Zertifikate.",
        "Der Kauf dieses Produkts ist nie der Hauptgrund für den Einkauf."
    ];

    txtLabels.forEach((label, i) => {
        const index = i + 1;
        $(`#${qid}T_${index}`).attr("align", "right");
        $(`#${qid}_B_${index}`).remove();
        $(`#${qid}C_B_${index}`).removeAttr("class").html(label);
    });
});