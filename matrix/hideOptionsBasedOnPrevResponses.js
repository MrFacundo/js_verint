/**
 * Hides matrix rows based on previous responses.
 */
$(function () {
    const items = [
        "%[12]Q283_A_1LBL%",
        "%[12]Q283_A_2LBL%",
        "%[12]Q283_A_3LBL%",
        "%[12]Q283_A_4LBL%",
        "%[12]Q283_A_5LBL%",
        "%[12]Q283_A_6LBL%",
        "%[12]Q283_A_7LBL%",
        "%[12]Q283_A_8LBL%",
        "%[12]Q283_A_9LBL%",
        "%[12]Q283_A_10LBL%",
        "%[12]Q283_A_11LBL%",
        "%[12]Q283_A_12LBL%",
        "%[12]Q283_A_13LBL%"
    ];

    const indexes = items.reduce((result, item, index) => {
        if (item === "Never") {
            result.push(index);
        }
        return result;
    }, []);
    console.log("items", items);
    console.log("indexes", indexes);

    const selector = 'fieldset';

    function hideTableRows(indexes, repeatHeaderEveryNRows) {
        let $tbody = $(selector + ' tbody');
        let $rows = $tbody.children('tr').not('.choice-row');
    
        $rows.each((index, row) => {
            if (indexes.includes(index)) {
                $(row).hide();
            } else {
                $(row).show();
            }
        });
    
        let $nonChoiceRows = $rows.not('.choice-row');
        let visibleNonChoiceRows = $nonChoiceRows.filter(':visible').length;
    
        if (visibleNonChoiceRows < repeatHeaderEveryNRows) {
            $rows.filter('.choice-row').hide();
        } else {
            $rows.filter('.choice-row').show();
        }
    }

    function hideListItems(indexes) {
        let $fieldset = $(selector);
        let $listItems = $fieldset.find('ol').not('.choice-row');

        $listItems.each((index, item) => {
            if (indexes.includes(index)) {
                $(item).hide();
            } else {
                $(item).show();
            }
        });
    }

    function hideContent(indexes, repeatHeaderEveryNRows) {
        if ($(selector + ' tbody').length) {
            hideTableRows(indexes, repeatHeaderEveryNRows);
        } else {
            hideListItems(indexes);
        }
    }

    hideContent(indexes, 7);
});
