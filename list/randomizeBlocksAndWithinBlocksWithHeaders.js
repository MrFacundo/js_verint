 // Randomizes blocks of list items and the items within each block, while keeping the headers in place.
$(function () {
    const fixedRanges = [[14, 15], [25]];
    const shuffleBlocks = true;
    
    const $list = $('.response-set');

    const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    const isFixed = (num) => {
        return fixedRanges.some(range => 
            range.length === 1 ? num === range[0] : num >= range[0] && num <= range[1]
        );
    };

    const randomizeListBlocks = () => {
        const items = $list.children('li').toArray();
        const blocks = [];
        const fixed = {};
        let currentBlock = [];
        let count = 0;

        items.forEach(item => {
            const $item = $(item);
            if ($item.hasClass('choice-group')) {
                if (currentBlock.length > 0) blocks.push(currentBlock);
                currentBlock = [$item];
            } else if ($item.hasClass('response select-area')) {
                count++;
                if (isFixed(count)) {
                    const groupIndex = fixedRanges.findIndex(range => 
                        range.length === 1 ? count === range[0] : count >= range[0] && count <= range[1]
                    );
                    if (!fixed[groupIndex]) fixed[groupIndex] = [];
                    fixed[groupIndex].push({ item: $item, pos: count - 1 });
                } else {
                    currentBlock.push($item);
                }
            }
        });

        if (currentBlock.length > 0) blocks.push(currentBlock);

        const shuffled = blocks.map(block => {
            const [header, ...rest] = block;
            return [header, ...shuffle([...rest])];
        }).flat();

        if (shuffleBlocks) {
            Object.values(fixed).forEach(group => {
                if (group.length > 1) shuffle(group.map(g => g.item));
            });
        }

        Object.values(fixed).flat().forEach(({ item, pos }) => {
            shuffled.splice(pos, 0, item);
        });

        $list.empty().append(shuffled);
    };

    randomizeListBlocks();
});