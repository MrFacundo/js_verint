$(function() {
    /**
     * Randomizes the order of list groups within a given list, while keeping certain fixed labels in place.
     * 
     * @param {jQuery} $list - The jQuery object representing the list to be randomized.
     * @param {Array} fixedLabels - An array of labels that should remain in their original positions.
     */
    function randomizeListGroups($list, fixedLabels) {
        const $clonedList = $list.clone();
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
        
        function shouldStayFixed($item) {
            if ($item.hasClass('choice-group')) return true;
            let shouldFix = false;
            $item.find('label').each(function() {
                if (fixedLabels.includes($(this).text())) {
                    shouldFix = true;
                    return false;
                }
            });
            return shouldFix;
        }
        
        const blocks = [];
        let currentBlock = [];
        
        listItems.each(function() {
            const $item = $(this);
            
            if ($item.hasClass('choice-group')) {
                if (currentBlock.length > 0) {
                    blocks.push(currentBlock);
                }
                currentBlock = [$item.clone()];
            } else {
                if (shouldStayFixed($item)) {
                    if (currentBlock.length > 0) {
                        blocks.push(currentBlock);
                    }
                    blocks.push([$item.clone()]);
                    currentBlock = [];
                } else {
                    currentBlock.push($item.clone());
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
    
    randomizeListGroups($('.response-set').first(), ["Other physical store", "Other online store"]);
});