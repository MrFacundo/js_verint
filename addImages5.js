// Show three images from the group matching the EAN and concatenate all names in the group
const items = [
    { name: "Müllermilch al gusto Fragola", ean: "42470380", imgSrc: '<img src="%[IMG SRC]Q214_1%" height="400" >', range: "1" },
    { name: "Müllermilch al gusto Cioccolato", ean: "42486060", imgSrc: '<img src="%[IMG SRC]Q214_2%" height="400" >', range: "1" },
    { name: "Müllermilch al gusto Vaniglia", ean: "42486077", imgSrc: '<img src="%[IMG SRC]Q214_3%" height="400" >', range: "1" },
    { name: "Müllermilch High Protein al gusto Cioccolato", ean: "42486039", imgSrc: '<img src="%[IMG SRC]Q214_4%" height="400" >', range: "2" },
    { name: "Müllermilch High Protein al gusto Cookies", ean: "42486046", imgSrc: '<img src="%[IMG SRC]Q214_5%" height="400" >', range: "2" },
    { name: "Müllermilch High Protein al gusto Lampone", ean: "42486053", imgSrc: '<img src="%[IMG SRC]Q214_6%" height="400" >', range: "2" }
];

$(function () {
    const range = "%[00]Q78_6%";
    const matchedGroup = items.filter(item => item.range === range);
    $("#img1").html(matchedGroup[0].imgSrc);
    $("#img2").html(matchedGroup[1].imgSrc);
    $("#img3").html(matchedGroup[2].imgSrc);
    const allNames = matchedGroup.map(item => item.name).join(" | ");
    $("#txt1").text(allNames);
});