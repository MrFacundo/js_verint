// Get three random options, always including "Action", and set them as value of input fields
$(function () {
    const options = [
        "%[2]Q565LBL_1%",
        "%[2]Q565LBL_2%",
        "%[2]Q565LBL_3%",
        "%[2]Q565LBL_4%",
        "%[2]Q565LBL_5%",
        "%[2]Q565LBL_6%",
        "%[2]Q565LBL_7%",
        "%[2]Q565LBL_8%",
        "%[2]Q565LBL_9%",
        "%[2]Q565LBL_10%",
        "%[2]Q565LBL_11%",
        "%[2]Q565LBL_12%",
        "%[2]Q565LBL_13%",
        "%[2]Q565LBL_14%"
    ];

        const filtered = options.filter(item => item !== "");
        console.log("filtered", filtered);
        const randomItems = filtered.sort(() => Math.random() - 0.5).slice(0, 2);
        const insertIndex = Math.floor(Math.random() * 3);
        randomItems.splice(insertIndex, 0, "Action");
        console.log(randomItems);

        for (let i = 0; i < randomItems.length; i++) {
            $("#Q571_" + (i + 1)).val(randomItems[i]);
        }
});