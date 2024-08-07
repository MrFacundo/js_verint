$(function() {
    const $originalList = $('.response-set');

    function randomizeListBlocks($list, ranges) {
        const $clonedList = $list.clone();
        const listItems = $clonedList.children('li');

        function shuffle(array) {
            let currentIndex = array.length, randomIndex;
            while (currentIndex !== 0) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;
                [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
            }
            return array;
        }

        ranges.forEach(([start, end]) => {
            const rangeItems = [];
            for (let i = start; i <= end; i++) {
                rangeItems.push(listItems.eq(i - 1).clone());
            }
            const shuffledItems = shuffle(rangeItems);
            for (let i = start; i <= end; i++) {
                listItems.eq(i - 1).replaceWith(shuffledItems[i - start]);
            }
        });

        console.log("Original list elements:", $list.children().toArray());
        console.log("New list elements after shuffling:", $clonedList.children().toArray());
        $list.replaceWith($clonedList);
    }

    randomizeListBlocks($originalList, [[2, 5], [6, 21]]);
});


