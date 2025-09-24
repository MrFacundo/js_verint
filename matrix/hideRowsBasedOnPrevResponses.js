// Hides matrix rows based on previous responses.
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
    const valueToExclude = "Never";
    const repeatHeaderEveryNRows = 7;

    const indexes = items.reduce((result, item, index) => {
        if (item === valueToExclude) {
            result.push(index);
        }
        return result;
    }, []);

    const selector = 'fieldset';

    function hideTableRows(indexes, repeatHeaderEveryNRows) {
        let $tbody = $(selector + ' tbody');
        let $optionRows = $tbody.children('tr').not('.choice-row');
        let $choiceRows = $tbody.children('tr.choice-row');
    
        $optionRows.hide();
        $choiceRows.hide();
    
        let visibleCount = 0;
    
        $optionRows.each((index, row) => {
            if (!indexes.includes(index)) {
                $(row).show();
                visibleCount++;
    
                if (visibleCount === repeatHeaderEveryNRows) {
                    let choiceRow = $choiceRows.eq(0);
                    if (choiceRow.length) {
                        choiceRow.show();
                        $choiceRows = $choiceRows.not(choiceRow);
                    }
                    visibleCount = 0;
                }
            }
        });
    
        let lastVisibleRow = $tbody.children('tr:visible').last();
        console.log("lastVisibleRow", lastVisibleRow);
        if (lastVisibleRow.hasClass('choice-row')) {
            lastVisibleRow.hide();
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

    hideContent(indexes, repeatHeaderEveryNRows);
});

