// Randomizes blocks of list items and the items within each block, while keeping the headers in place. Leaves a fixed range of items in place.
$(function () {
    const $originalList = $('.response-set');

    function randomizeListBlocks($list, fixedRange) {
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

        const blocks = [];
        let currentBlock = [];
        let optionCount = 0;
        const fixedOptions = [];

        listItems.each(function () {
            const $item = $(this);
            if ($item.hasClass('choice-group')) {
                if (currentBlock.length > 0) blocks.push(currentBlock);
                currentBlock = [$item.clone()];
            } else if ($item.hasClass('response select-area')) {
                optionCount++;
                if (optionCount >= fixedRange[0] && optionCount <= fixedRange[1]) {
                    fixedOptions.push($item.clone());
                } else {
                    currentBlock.push($item.clone());
                }
            }
        });

        if (currentBlock.length > 0) blocks.push(currentBlock);

        const shuffledBlocks = shuffle(blocks.map(block => {
            const header = block.shift();
            return [header, ...shuffle(block)];
        }));

        const newListItems = shuffledBlocks.flat().concat(fixedOptions);

        $clonedList.empty().append(newListItems);
        $list.replaceWith($clonedList);
    }

    randomizeListBlocks($originalList, [20, 20]);
});