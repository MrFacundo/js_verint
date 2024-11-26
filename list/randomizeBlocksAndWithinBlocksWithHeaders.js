$(function () {
    const $originalList = $('.response-set');

    /**
     * Randomizes blocks of list items and the items within each block, while keeping the headers in place. 
     * Leaves a fixed range of items in place.
     * 
     * @param {jQuery} $list - The jQuery object representing the list to be randomized.
     * @param {Array} fixedRange - An array with two elements representing the start and end indices of the fixed range.
     * @param {boolean} shuffleBlocks - A boolean indicating whether to shuffle the blocks themselves.
     */
    function randomizeListBlocks($list, fixedRange, shuffleBlocks) {
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

        const shuffledBlocks = blocks.map(block => {
            const header = block.shift();
            return [header, ...shuffle(block)];
        });

        if (shuffleBlocks) {
            shuffle(shuffledBlocks);
        }

        const newListItems = shuffledBlocks.flat().concat(fixedOptions);

        $clonedList.empty().append(newListItems);
        $list.replaceWith($clonedList);
    }

    randomizeListBlocks($originalList, [23, 23], true);
});