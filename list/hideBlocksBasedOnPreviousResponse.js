// Hides blocks based on previous response.
$(function () {
    const $originalList = $('.response-set');
    const listItems = $originalList.children('li');
    const condition1 = "%[4]Q424LBL%" == "Never";
    const condition2 = "%[4]Q426LBL%" == "Never";
    const ranges = [
        { condition: condition1, start: 1, end: 4 },
        { condition: condition2, start: 5, end: 9 }
    ];

    function hideListItems(ranges) {
        ranges.forEach(function(range) {
            if (range.condition) {
                for (let i = range.start; i <= range.end; i++) {
                    listItems.eq(i - 1).hide();
                }
            }
        });
    }

    hideListItems(ranges);
});