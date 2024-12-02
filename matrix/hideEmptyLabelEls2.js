/* Hides all tr (for desktop layout) or li (for mobile layout) elements that contain empty label elements or specific false values */
$(function () {
    // Array of values to check
    const valuesToCheck = [
        "%[Q8_c]Q158_ALBL_4%", "%[Q8_c]Q158_ALBL_8%", "%[Q8_c]Q158_ALBL_12%",
        "%[Q8_c]Q158_ALBL_16%", "%[Q8_c]Q158_ALBL_20%", "%[Q8_c]Q158_ALBL_24%",
        "%[Q8_c]Q158_ALBL_28%", "%[Q8_c]Q158_ALBL_32%", "%[Q8_c]Q158_ALBL_36%",
        "%[Q8_c]Q158_ALBL_40%", "%[Q8_c]Q158_ALBL_44%", "%[Q8_c]Q158_ALBL_48%"
    ];

    $('fieldset').each(function () {
        const $fieldset = $(this);
        const $table = $fieldset.find('table');
        const $responseArea = $fieldset.find('div.response-area');

        if ($table.length) {
            // Desktop layout
            const $rows = $table.find('tbody tr');
            $rows.each(function (index) {
                const $firstTd = $(this).find('td').first();
                if ($firstTd.text().trim() === '' || valuesToCheck[index] == '') {
                    $(this).hide();
                }
            });

            // Add classes to visible rows
            let visibleIndex = 0;
            $rows.filter(':visible').each(function () {
                $(this).removeClass('odd-row even-row');
                if (visibleIndex % 2 === 0) {
                    $(this).addClass('odd-row');
                } else {
                    $(this).addClass('even-row');
                }
                visibleIndex++;
            });
        } else if ($responseArea.length) {
            // Mobile layout
            const $lists = $responseArea.find('ol');
            $lists.each(function (index) {
                const $firstLi = $(this).find('li').first();
                if ($firstLi.text().trim() === '' || valuesToCheck[index] == '') {
                    $(this).hide();
                }
            });

            // Add classes to visible lists
            let visibleIndex = 0;
            $lists.filter(':visible').each(function () {
                $(this).removeClass('odd-row even-row');
                if (visibleIndex % 2 === 0) {
                    $(this).addClass('odd-row');
                } else {
                    $(this).addClass('even-row');
                }
                visibleIndex++;
            });
        }
    });
});