// Add source attribute to images
arrayImg = [
    '<img src="%[IMG SRC]Q214_1%" style="width: auto; height: 80px;">',
    '<img src="%[IMG SRC]Q214_2%" style="width: auto; height: 80px;">',
    '<img src="%[IMG SRC]Q214_3%" style="width: auto; height: 80px;">',
    '<img src="%[IMG SRC]Q214_4%" style="width: auto; height: 80px;">',
    '<img src="%[IMG SRC]Q214_5%" style="width: auto; height: 80px;">',
    '<img src="%[IMG SRC]Q214_6%" style="width: auto; height: 80px;">',
    '<img src="%[IMG SRC]Q214_7%" style="width: auto; height: 80px;">',
    '<img src="%[IMG SRC]Q214_8%" style="width: auto; height: 80px;">',
    '<img src="%[IMG SRC]Q214_9%" style="width: auto; height: 80px;">',
    '<img src="%[IMG SRC]Q214_10%" style="width: auto; height: 80px;">',
    '<img src="%[IMG SRC]Q214_11%" style="width: auto; height: 80px;">',
    '<img src="%[IMG SRC]Q214_12%" style="width: auto; height: 80px;">',
    '<img src="%[IMG SRC]Q214_13%" style="width: auto; height: 80px;">',
    '<img src="%[IMG SRC]Q214_14%" style="width: auto; height: 80px;">',
    '<img src="%[IMG SRC]Q214_15%" style="width: auto; height: 80px;">',
    '<img src="%[IMG SRC]Q214_16%" style="width: auto; height: 80px;">',
    '<img src="%[IMG SRC]Q214_17%" style="width: auto; height: 80px;">',
    '<img src="%[IMG SRC]Q214_18%" style="width: auto; height: 80px;">',
    '<img src="%[IMG SRC]Q214_19%" style="width: auto; height: 80px;">',
    '<img src="%[IMG SRC]Q214_20%" style="width: auto; height: 80px;">',
    '<img src="%[IMG SRC]Q214_21%" style="width: auto; height: 80px;">',
    '<img src="%[IMG SRC]Q214_22%" style="width: auto; height: 80px;">',
    '<img src="%[IMG SRC]Q214_23%" style="width: auto; height: 80px;">',
    '<img src="%[IMG SRC]Q214_24%" style="width: auto; height: 80px;">',
    '<img src="%[IMG SRC]Q214_25%" style="width: auto; height: 80px;">',
];

$(function () {
    for (let i = 0; i < arrayImg.length; i++) {
        $(`#img${i + 1}`).html(arrayImg[i]);
    }
});