// Hides blocks based on previous response.
$(function () {
    const $originalList = $('.response-set');
    const listItems = $originalList.children('li');

    function hideListItems(ranges) {
        ranges.forEach(([condition, start, end]) => {
            if (condition) {
                for (let i = start; i <= end; i++) {
                    listItems.eq(i - 1).hide();
                }
            }
        });
    }

    const condition1 = "%[4]Q424LBL%" == "Never";
    const condition2 = "%[4]Q426LBL%" == "Never";

    hideListItems([
        [condition1, 1, 4],
        [condition2, 5, 9]
    ]);
});