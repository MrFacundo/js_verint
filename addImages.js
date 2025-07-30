$(function () {
    // Initialize an array to store image sources
    var arrayI = [];

    // Loop through elements with ids Tn and store their image sources in arrayI
    for (var i = 1; i <= 13; i++) {
        var imgSrc = $("#T" + i + ">img").attr('src');
        arrayI.push(imgSrc);
        console.log("Pushed img src from #T" + i + " to arrayI:", imgSrc);
    }

    var qid = "Q214";

    // Loop through elements with ids qid_1 to qid_30 and set their values from arrayI
    for (var j = 1; j <= 13; j++) {
        $("#" + qid + "_" + j).val(arrayI[j]);
        console.log("Set value of #" + qid + "_" + j + " to:", arrayI[j]);
    }

    $("#BN").click();
});