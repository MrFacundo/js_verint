// Add source attribute to images
arrayImg = [
	0,
	'<img src="%[IMG SRC]Q399_10%" style="max-width: 100%; width: auto; height: auto;">',
];

$(function () {
	$('#img1').html(arrayImg[1]);

	// Remove sticky class from sumbit buttons
	$(".container-fluid .row.row.sticky").removeClass("sticky");

}); 