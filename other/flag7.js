// Set the value of a question field based on previous answers, so it can be used as
$(function () {
    function computeSeverity(q13, q14) {
        if (q13 === 5 || q14 === 6) return null
        const key = `${q13}_${q14}`
        const severityMap = {
            "1_1": 1, "1_2": 1, "1_3": 1,
            "2_1": 2, "2_2": 2, "3_1": 2, "3_2": 2,
            "2_3": 3, "2_4": 3, "2_5": 3,
            "3_3": 3, "4_1": 3, "4_2": 3,
            "1_4": 3, "1_5": 3,
            "3_4": 4, "3_5": 4,
            "4_3": 4, "4_4": 4, "4_5": 4
        }
        return severityMap[key] || null
    }

    const q13arr = [
        "%[20]Q318%", "%[24]Q322%", "%[28]Q326%", "%[32]Q330%", "%[36]Q334%", "%[40]Q338%"
    ]
    const q14arr = [
        "%[21]Q319%", "%[25]Q323%", "%[29]Q327%", "%[33]Q331%", "%[37]Q335%", "%[41]Q339%"
    ]

    console.log("q13arr", q13arr);
    console.log("q14arr", q14arr);

    for (let i = 0; i < 6; i++) {
        const q13 = parseInt(q13arr[i], 10)
        const q14 = parseInt(q14arr[i], 10)
        const severity = computeSeverity(q13, q14)
        if (severity !== null) {
            $(`#Q311_${i + 1}`).val(severity)
        }
        console.log(`Q311_${i + 1} set to`, severity);
    }
});