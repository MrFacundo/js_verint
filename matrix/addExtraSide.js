$(function () {
    const txtLabels = [
        "Some brands of baby wipes cost more because they are better",
        "All brands of baby wipes are about the same",
        "I buy average quality baby wipes to save money",
        "I use baby wipes because they are convenient",
        "I am willing to pay a little more since inexpensive baby wipes are not good quality",
        "I have no preferred baby wipe brand"
        ];
        
    const qid = $("input[type=text]").eq(0).attr("id").split("_")[0];

    txtLabels.forEach((label, i) => {
        const index = i + 1;
        $(`#${qid}T_${index}`).attr("align", "right");
        $(`#${qid}_B_${index}`).remove();
        $(`#${qid}C_B_${index}`).removeAttr("class").html(label);
    });
});