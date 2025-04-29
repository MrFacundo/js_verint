$(function () {
    // Randomizes blocks of list items and the items within each block, while keeping the headers in place.
    function randomizeListBlocks($list, fixedRange, shuffleBlocks) {
        const listItems = $list.children('li').toArray();
        const blocks = [];
        let currentBlock = [];
        let optionCount = 0;
        const fixedOptions = [];

        listItems.forEach(item => {
            const $item = $(item);
            if ($item.hasClass('choice-group')) {
                if (currentBlock.length > 0) blocks.push(currentBlock);
                currentBlock = [$item];
            } else if ($item.hasClass('response select-area')) {
                optionCount++;
                if (optionCount >= fixedRange[0] && optionCount <= fixedRange[1]) {
                    fixedOptions.push($item);
                } else {
                    currentBlock.push($item);
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

        $list.append(newListItems);
    }

    function shuffle(array) {
        let currentIndex = array.length, randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    const $originalList = $('.response-set');
    randomizeListBlocks($originalList, [25, 26], false);
});