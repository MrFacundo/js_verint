/**
 * Hides matrix options based on previous responses.
 */
$(function () {
	const items = [
		"%[207]Q216_A_1LBL%", "%[207]Q216_A_2LBL%", "%[207]Q216_A_3LBL%", "%[207]Q216_A_4LBL%", "%[207]Q216_A_5LBL%", 
		"%[207]Q216_A_6LBL%", "%[207]Q216_A_7LBL%", "%[207]Q216_A_8LBL%", "%[207]Q216_A_9LBL%", "%[207]Q216_A_10LBL%", 
		"%[207]Q216_A_11LBL%", "%[207]Q216_A_12LBL%", "%[207]Q216_A_13LBL%", "%[207]Q216_A_14LBL%", "%[207]Q216_A_15LBL%", 
		"%[207]Q216_A_16LBL%", "%[207]Q216_A_17LBL%", "%[207]Q216_A_18LBL%", "%[207]Q216_A_19LBL%", "%[207]Q216_A_20LBL%", 
		"%[207]Q216_A_21LBL%", "%[207]Q216_A_22LBL%", "%[207]Q216_A_23LBL%", "%[207]Q216_A_24LBL%", "%[207]Q216_A_25LBL%", 
		"%[207]Q216_A_26LBL%", "%[207]Q216_A_27LBL%", "%[207]Q216_A_28LBL%", "%[207]Q216_A_29LBL%", "%[207]Q216_A_30LBL%", 
		"%[207]Q216_A_31LBL%", "%[207]Q216_A_32LBL%", "%[207]Q216_A_33LBL%", "%[207]Q216_A_34LBL%", "%[207]Q216_A_35LBL%", 
		"%[207]Q216_A_36LBL%", "%[207]Q216_A_37LBL%", "%[207]Q216_A_38LBL%", "%[207]Q216_A_39LBL%", "%[207]Q216_A_40LBL%", 
		"%[207]Q216_A_41LBL%", "%[207]Q216_A_42LBL%", "%[207]Q216_A_43LBL%"
	];
	
	const indexes = items.reduce((result, item, index) => {
		if (item === "I do not purchase this item") {
			result.push(index);
		}
		return result;
	}, []);

	console.log(indexes);

    const selector = 'fieldset';

    function hideTableRows(indexes) {
        let $tbody = $(selector + ' tbody');
        let $rows = $tbody.children('tr').not('.choice-row');
        console.log($rows);
        
        $rows.each((index, row) => {
            if (indexes.includes(index)) {
                $(row).hide();
            } else {
                $(row).show();
            }
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
            hideTableRows(indexes);
        } else {
            hideListItems(indexes);
        }
    }

    hideContent(indexes);
});
