// Set the value of a question field based on previous answers, so it can be used as a flag in subsequent questions
$(function () {
    function getGridValue(year, month) {
        const grid = {
            2018: [82, 81, 80, 79, 78, 77, 76, 75, 74, 73, 72, 71],
            2019: [70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 60, 59],
            2020: [58, 57, 56, 55, 54, 53, 52, 51, 50, 49, 48, 47],
            2021: [46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35],
            2022: [34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23],
            2023: [22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11],
            2024: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 0]
        };
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
        const index = months.indexOf(month);
        return grid[year]?.[index];
    }

    const birthMonths = [
        "%[S3]Q291_A_1LBL%",
        "%[S3]Q291_A_2LBL%",
        "%[S3]Q291_A_3LBL%",
        "%[S3]Q291_A_4LBL%"
    ];
    const birthYears = [
        "%[S3]Q291_B_1LBL%",
        "%[S3]Q291_B_2LBL%",
        "%[S3]Q291_B_3LBL%",
        "%[S3]Q291_B_4LBL%"
    ];

    const ChildBirthDate = [];
    const ChildAge = [];
    const ChildQualify = [];

    for (let i = 0; i < 4; i++) {
        ChildBirthDate[i] = birthMonths[i] + " " + birthYears[i];
        ChildAge[i] = getGridValue(birthYears[i], birthMonths[i]);
        ChildQualify[i] = (ChildAge[i] >= 7 && ChildAge[i] <= 71) ? 1 : "";
    }

    console.log(ChildBirthDate, ChildAge, ChildQualify);

    for (let i = 0; i < 4; i++) {
        $("#Q307_" + (i + 1)).val(ChildBirthDate[i]);
        $("#Q307_" + (i + 5)).val(ChildAge[i]);
        $("#Q307_" + (i + 9)).val(ChildQualify[i]);
    }
});