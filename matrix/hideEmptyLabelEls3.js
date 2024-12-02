$(function () {
    // Array of values to check
    const valuesToCheck = [
        "%[9.2]Q471_A_1LBL%",
        "%[9.2]Q471_A_2LBL%",
        "%[9.2]Q471_A_3LBL%",
        "%[9.2]Q471_A_4LBL%",
        "%[9.2]Q471_A_5LBL%",
        "%[9.2]Q471_A_6LBL%",
        "%[9.2]Q471_A_7LBL%",
        "%[9.2]Q471_A_8LBL%",
        "%[9.2]Q471_A_9LBL%",
    ];

    $('fieldset').each(function () {
        const $fieldset = $(this);
        const $table = $fieldset.find('table');
        const $responseArea = $fieldset.find('div.response-area');

        if ($table.length) {
            // Desktop layout
            const $headers = $table.find('thead th:gt(0)');
            console.log("Headers: ", $headers);
            $headers.each(function (index) {
                const $th = $(this);
                console.log("$th: ", $th);
                if ($th.text().trim() === '' || valuesToCheck[index] === '') {
                    console.log("Hiding column index: ", index);
                    console.log("Header text: ", $th.text().trim());
                    $table.find(`colgroup col:nth-child(${index + 2})`).hide();
                    $table.find(`thead th:nth-child(${index + 2})`).hide();
                    $table.find(`tbody tr td:nth-child(${index + 2})`).hide();
                }
            });
        } else if ($responseArea.length) {
            // Mobile layout
            const $lists = $responseArea.find('ol');
            $lists.each(function () {
                const $list = $(this);
                const $items = $list.find('li');
                $items.each(function (index) {
                    const $li = $(this);
                    if ($li.text().trim() === '') {
                        $li.hide();
                    }
                });
            });
        }
    });
});