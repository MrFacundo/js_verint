//Hides matrix columns based on previous responses.
$(function () {
    const items = [
        "%[0.1_1]Q384_A_99%",
        "%[0.1_1]Q384_A_100%",
        "%[0.1_1]Q384_A_101%",
        "%[0.1_1]Q384_A_102%",
        "%[0.1_1]Q384_A_103%",
        "%[0.1_1]Q384_A_104%",
        "%[0.1_1]Q384_A_105%",
        "%[0.1_1]Q384_A_106%",
        "%[0.1_1]Q384_A_107%",
        "%[0.1_1]Q384_A_108%",
        "%[0.1_1]Q384_A_109%",
        "%[0.1_1]Q384_A_110%",
        "%[0.1_1]Q384_A_111%"
    ];

    const indexes = items.reduce((result, item, index) => {
        if (item === "1") {
            result.push(index);
        }
        return result;
    }, []);
    console.log("items", items);
    console.log("indexes", indexes);

    const selector = 'fieldset';

    function hideTableColumns(indexes) {
        let $table = $(selector + ' table');
        $table.find('tr').each((_, row) => {
            $(row).children().each((colIndex, cell) => {
                if (indexes.includes(colIndex - 1) && colIndex > 0) {
                    $(cell).hide();
                }
            });
        });
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

    function hideContent(indexes) {
        if ($(selector + ' tbody').length) {
            hideTableColumns(indexes);
        } else {
            hideListItems(indexes);
        }
    }

    hideContent(indexes);
    let $table = $(selector + ' table');
    let $colgroups = $table.find('colgroup');
    if ($colgroups.length > 1) {
        $colgroups.eq(1).removeAttr('style');
    }
});
