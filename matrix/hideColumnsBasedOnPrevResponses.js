// Hides matrix columns based on previous responses.
$(function () {
    const responses = [
        "%[6a]Q427LBL_1%", "%[6a]Q427LBL_2%", "%[6a]Q427LBL_3%", "%[6a]Q427LBL_4%",
        "%[6a]Q427LBL_5%", "%[6a]Q427LBL_6%", "%[6a]Q427LBL_7%", "%[6a]Q427LBL_8%",
        "%[6a]Q427LBL_9%", "%[6a]Q427LBL_10%", "%[6a]Q427LBL_11%", "%[6a]Q427LBL_12%",
        "%[6a]Q427LBL_13%", "%[6a]Q427LBL_14%", "%[6a]Q427LBL_15%", "%[6a]Q427LBL_16%",
        "%[6a]Q427LBL_17%", "%[6a]Q427LBL_18%", "%[6a]Q427LBL_19%", "%[6a]Q427LBL_20%",
        "%[6a]Q427LBL_21%", "%[6a]Q427LBL_22%", "%[6a]Q427LBL_23%", "%[6a]Q427LBL_24%",
        "%[6a]Q427LBL_25%", "Ninguna"
    ];
    const valueToExclude = "";

    const indexes = responses.reduce((result, item, index) => {
        if (item === valueToExclude) {
            result.push(index);
        }
        return result;
    }, []);

    const $fieldset = $('fieldset');
    const $table = $fieldset.find('table');

    const hideTableColumns = (indexesToHide) => {
        $table.find('tr').each((_, row) => {
            $(row).children().each((colIndex, cell) => {
                if (indexesToHide.includes(colIndex - 1) && colIndex > 0) {
                    $(cell).hide();
                }
            });
        });
    };

    const hideListItems = (indexesToHide) => {
        $fieldset.find('ol').not('.choice-row').each((_, set) => {
            $(set).children('li.response.select-area').each((index, item) => {
                if (indexesToHide.includes(index)) {
                    $(item).hide();
                } else {
                    $(item).show();
                }
            });
        });
    };

    if ($fieldset.find('tbody').length) {
        hideTableColumns(indexes);
    } else {
        hideListItems(indexes);
    }

    const $colgroups = $table.find('colgroup');
    if ($colgroups.length > 1) {
        $colgroups.eq(1).removeAttr('style');
    }
});