$(function() {
    /**
     * Randomizes the order of list groups within a given list, while keeping certain fixed labels in place.
     * 
     * @param {jQuery} $list - The jQuery object representing the list to be randomized.
     * @param {Array} fixedIndices - An array of indices that should remain in their original positions.
     */
    function randomizeListGroups($list, fixedIndices) {
        const $clonedList = $list.clone(true);
        const listItems = $clonedList.children('li');
        
        function shuffle(array) {
            let currentIndex = array.length;
            while (currentIndex !== 0) {
                const randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;
                [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
            }
            return array;
        }
        
        function shouldStayFixed(index, $item) {
            if ($item.hasClass('choice-group')) return false;
            return fixedIndices.includes(index + 1); // +1 to match 1-based index
        }
        
        const blocks = [];
        let currentBlock = [];
        
        listItems.each(function(index) {
            const $item = $(this);
            
            if ($item.hasClass('choice-group')) {
                if (currentBlock.length > 0) {
                    blocks.push(currentBlock);
                }
                currentBlock = [$item.clone(true)];
            } else {
                if (shouldStayFixed(index, $item)) {
                    if (currentBlock.length > 0) {
                        blocks.push(currentBlock);
                    }
                    blocks.push([$item.clone(true)]);
                    currentBlock = [];
                } else {
                    currentBlock.push($item.clone(true));
                }
            }
        });
        
        if (currentBlock.length > 0) {
            blocks.push(currentBlock);
        }
        
        const processedBlocks = blocks.map(block => {
            if (block.length === 1) return block;
            
            const header = block[0];
            if (header.hasClass('choice-group')) {
                const items = block.slice(1);
                return [header, ...shuffle(items)];
            }
            return block;
        });
        
        const newListItems = processedBlocks.flat();
        $clonedList.empty().append(newListItems);
        $list.replaceWith($clonedList);
    }
    
    randomizeListGroups($('.response-set').first(), [9, 17, 18]);
});