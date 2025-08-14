// Add source attribute to images
const items = [
    { name: "Müllermilch al gusto Fragola", ean: "42470380", imgSrc: '<img src="%[IMG SRC]Q214_1%" height="400" >' },
    { name: "Müllermilch al gusto Cioccolato", ean: "42486060", imgSrc: '<img src="%[IMG SRC]Q214_2%" height="400" >' },
    { name: "Müllermilch al gusto Vaniglia", ean: "42486077", imgSrc: '<img src="%[IMG SRC]Q214_3%" height="400" >' },
    { name: "Müllermilch High Protein al gusto Cioccolato", ean: "42486039", imgSrc: '<img src="%[IMG SRC]Q214_4%" height="400" >' },
    { name: "Müllermilch High Protein al gusto Cookies", ean: "42486046", imgSrc: '<img src="%[IMG SRC]Q214_5%" height="400" >' },
    { name: "Müllermilch High Protein al gusto Lampone", ean: "42486053", imgSrc: '<img src="%[IMG SRC]Q214_6%" height="400" >' }
];

$(function () {
    const eanToMatch = "%[00]Q78_7%";
    const matchedItem = items.find(item => item.ean == eanToMatch);
    if (matchedItem) {
        $("#img1").html(matchedItem.imgSrc);
        $("#txt1").text(matchedItem.name);
    }
}); 