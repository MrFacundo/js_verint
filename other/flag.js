// Set the value of a question field based on previous answers, so it can be used as a flag in subsequent questions
$(function () {
    const answers = [
        "%[1_1]Q388_A_99%",
        "%[1_1]Q388_A_100%",
        "%[1_1]Q388_A_101%",
        "%[1_1]Q388_A_102%",
        "%[1_1]Q388_A_103%",
        "%[1_1]Q388_A_104%",
        "%[1_1]Q388_A_105%",
        "%[1_1]Q388_A_106%",
        "%[1_1]Q388_A_107%",
        "%[1_1]Q388_A_108%",
        "%[1_1]Q388_A_109%",
        "%[1_1]Q388_A_110%",
        "%[1_1]Q388_A_111%" 
    ];
    const anyUnselected = answers.some(a => a === "0");
    const anySelected = answers.some(a => a === "1");
    $('#Q391_1').val(anyUnselected ? "1" : "");
    $('#Q391_2').val(anySelected ? "1" : "");
    $('#BN').click();
});

