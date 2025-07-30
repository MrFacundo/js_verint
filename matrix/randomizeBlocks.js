$(function () {
    const wrapperSelector = 'fieldset';
    const mobileWrapperSelector = 'fieldset';

    function randomizeTableRows(ranges) {
        let $tbody = $(wrapperSelector + ' tbody');
        let $rows = $tbody.children('tr');
        let rowsArray = $rows.toArray();

        ranges.forEach(range => {
            let [start, end] = range;
            let group = rowsArray.slice(start - 1, end);
            let shuffled = group.sort(() => Math.random() - 0.5);
            rowsArray.splice(start - 1, group.length, ...shuffled);
        });

        $tbody.append($(rowsArray));
    }

    function randomizeListItems(ranges) {
        let $fieldset = $(mobileWrapperSelector);
        let $lists = $fieldset.find('ol');
        let listsArray = $lists.toArray();

        ranges.forEach(range => {
            let [start, end] = range;
            let group = listsArray.slice(start - 1, end);
            let shuffled = group.sort(() => Math.random() - 0.5);
            listsArray.splice(start - 1, group.length, ...shuffled);
        });

        $fieldset.append($(listsArray));
    }

    function randomizeContent(ranges) {
        if ($(wrapperSelector + ' tbody').length) {
            randomizeTableRows(ranges);
        } else {
            randomizeListItems(ranges);
        }
    }

    // Example usage:
    randomizeContent([[1, 26], [27, 47]]);
});