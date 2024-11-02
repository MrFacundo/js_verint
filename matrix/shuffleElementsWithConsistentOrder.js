$(function () {
    // Seeded random number generator
    function seededRandom(seed) {
        let x = Math.sin(seed++) * 10000;
        return x - Math.floor(x);
    }

    // Fisher-Yates shuffle with a seeded random number generator
    function shuffle(array, seed) {
        let m = array.length, t, i;

        while (m) {
            i = Math.floor(seededRandom(seed) * m--);

            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }

        return array;
    }

    function randomizeTableRows() {
        let $fieldset = $('fieldset');
        let $tbody = $fieldset.find('tbody');
        let $rows = $tbody.children('tr');
        let rowsArray = $rows.toArray();

        let shuffledRows = shuffle(rowsArray, 42); // Use a fixed seed

        $tbody.append($(shuffledRows));
    }

    function randomizeListItems() {
        let $fieldset = $('fieldset');
        let $lists = $fieldset.find('ol');
        let listsArray = $lists.toArray();

        let shuffledLists = shuffle(listsArray, 42); // Use a fixed seed

        $fieldset.append($(shuffledLists));
    }

    function randomizeContent() {
        if ($('fieldset tbody').length) {
            randomizeTableRows();
        } else if ($('fieldset ol').length) {
            randomizeListItems();
        }
    }

    // Call the function to randomize the content
    randomizeContent();
});