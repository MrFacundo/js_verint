$(function () {
    const $originalList = $('.response-set');

    function randomizeListBlocks($list, ranges) {
        const $clonedList = $list.clone();
        const listItems = $clonedList.children('li');
        const listLength = listItems.length;

        function shuffle(array) {
            let currentIndex = array.length, randomIndex;
            while (currentIndex !== 0) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;
                [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
            }
            return array;
        }

        const blocks = ranges.map(([start, end]) => {
            const rangeItems = [];
            for (let i = start; i <= end; i++) {
                rangeItems.push(listItems.eq(i - 1).clone());
            }
            return shuffle(rangeItems);
        });

        const shuffledBlocks = shuffle(blocks);

        const newListItems = [];
        shuffledBlocks.forEach(block => {
            newListItems.push(...block);
        });

        const lastRangeEnd = ranges[ranges.length - 1][1];
        for (let i = lastRangeEnd; i < listLength; i++) {
            newListItems.push(listItems.eq(i).clone());
        }

        $clonedList.empty();
        newListItems.forEach(item => {
            $clonedList.append(item);
        });

        console.log("Original list elements:", $list.children().toArray());
        console.log("New list elements after shuffling:", $clonedList.children().toArray());
        $list.replaceWith($clonedList);
    }

    randomizeListBlocks($originalList, [[1, 4], [5, 9], [10, 14]]);
});