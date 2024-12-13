$(function () {

    // Set the value of the button with id BN to "Start"
    $("#BN").val("Start");

    // Initialize an array to store image sources
    var arrayI = [];

    // Loop through elements with ids T6 to T33 and store their image sources in arrayI
    for (var i = 6; i <= 33; i++) {
        var imgSrc = $("#T" + i + ">img").attr('src');
        arrayI.push(imgSrc);
        console.log("Pushed img src from #T" + i + " to arrayI:", imgSrc);
    }

    // Loop through elements with ids qid_1 to qid_30 and set their values from arrayI
    for (var j = 1; j <= 30; j++) {
        $("#" + qid + "_" + j).val(arrayI[j]);
        console.log("Set value of #" + qid + "_" + j + " to:", arrayI[j]);
    }

    $("#BN").click();
});