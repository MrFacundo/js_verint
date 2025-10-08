 /**
 * Creates fixed blocks of list items, which are left in place, while shuffling the rest.
 * The items in the ranges can also be shuffled internally if desired.
 * 
 * @param {Array} ranges - Array of ranges to fix, eg. [[1, 3],[8]] will leave items 1 to 3 and item 8 in place and shuffle the rest
 * @param {boolean} shuffleRanges - Whether to shuffle items within ranges
 */
export function shuffleRanges(ranges, shuffleRanges) {
    const $list = $('.response-set');

    const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    const items = $list.children('li').toArray();
    const rangeGroups = {};
    const nonRangeItems = [];
    let count = 0;

    items.forEach((item, index) => {
        const $item = $(item);
        if ($item.hasClass('response select-area')) {
            count++;
            const rangeIndex = ranges.findIndex(range => 
                range.length === 1 ? count === range[0] : count >= range[0] && count <= range[1]
            );
            
            if (rangeIndex !== -1) {
                if (!rangeGroups[rangeIndex]) rangeGroups[rangeIndex] = [];
                rangeGroups[rangeIndex].push({ item: $item, originalIndex: index });
            } else {
                nonRangeItems.push({ item: $item, originalIndex: index });
            }
        }
    });

    const result = [...items];

    if (shuffleRanges) {
        Object.values(rangeGroups).forEach(group => {
            const shuffledItems = shuffle(group.map(g => g.item));
            group.forEach((g, index) => {
                result[g.originalIndex] = shuffledItems[index];
            });
        });
    }

    const shuffledNonRange = shuffle(nonRangeItems.map(item => item.item));
    nonRangeItems.forEach((item, index) => {
        result[item.originalIndex] = shuffledNonRange[index];
    });

    $list.empty().append(result);
}