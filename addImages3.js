// Add source attribute to images
arrayImg = [
    '<img src="%[IMAGES]Q399_2%" style="max-width: 200px; width: auto; height: auto;">',
	'<img src="%[IMAGES]Q399_3%" style="max-width: 200px; width: auto; height: auto;">',
	'<img src="%[IMAGES]Q399_4%" style="max-width: 200px; width: auto; height: auto;">',
    '<img src="%[IMAGES]Q399_5%" style="max-width: 200px; width: auto; height: auto;">',
    '<img src="%[IMAGES]Q399_6%" style="max-width: 200px; width: auto; height: auto;">',
    '<img src="%[IMAGES]Q399_7%" style="max-width: 200px; width: auto; height: auto;">',
    '<img src="%[IMAGES]Q399_8%" style="max-width: 200px; width: auto; height: auto;">',
    '<img src="%[IMAGES]Q399_9%" style="max-width: 200px; width: auto; height: auto;">',
    '<img src="%[IMAGES]Q399_10%" style="max-width: 200px; width: auto; height: auto;">',
    '<img src="%[IMAGES]Q399_11%" style="max-width: 200px; width: auto; height: auto;">',
    '<img src="%[IMAGES]Q399_12%" style="max-width: 200px; width: auto; height: auto;">',
];
$(function () {
    $('[id^=img]').each(function () {
        let id = $(this).attr('id');
        let index = parseInt(id.replace('img', ''), 10) - 1;
        if (index >= 0 && index < arrayImg.length) {
            $(this).html(arrayImg[index]);
        }
    });
});