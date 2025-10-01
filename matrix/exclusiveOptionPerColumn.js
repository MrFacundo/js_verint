/**
 * Ensures certain rows behave exclusively per column in a matrix question.
 * 
 * @param {number[]} exclusiveRows - Array of 1-indexed row numbers that should behave exclusively per column.
 */
export function exclusiveOptionPerColumn(exclusiveRows) {
    const $firstFieldset = $('fieldset').first();
    const isDesktopLayout = $firstFieldset.find('table').length > 0;

    const uncheckColumn = (columnIndex, excludeElement) => {
        if (isDesktopLayout) {
            $firstFieldset.find('tr').each(function () {
                $(this).find('td').eq(columnIndex)
                    .find('input[type="checkbox"]')
                    .not(excludeElement)
                    .prop('checked', false);
            });
        } else {
            $firstFieldset.find('ol').each(function () {
                $(this).find('li').eq(columnIndex)
                    .find('input[type="checkbox"]')
                    .not(excludeElement)
                    .prop('checked', false);
            });
        }
    };

    const uncheckExclusiveRows = (columnIndex) => {
        exclusiveRows.forEach(rowIndex => {
            const $target = isDesktopLayout
                ? $firstFieldset.find('tr').eq(rowIndex)
                : $firstFieldset.find('ol').eq(rowIndex - 1);

            if ($target.length > 0) {
                const selector = isDesktopLayout ? 'td' : 'li';
                $target.find(selector).eq(columnIndex)
                    .find('input[type="checkbox"]')
                    .prop('checked', false);
            }
        });
    };

    $('fieldset input[type="checkbox"]').on('change', function () {
        const $checkbox = $(this);
        const columnIndex = isDesktopLayout
            ? $checkbox.closest('td').index()
            : $checkbox.closest('li').index();
        const rowIndex = isDesktopLayout
            ? $checkbox.closest('tr').index() + 1
            : $checkbox.closest('ol').index() + 1;

        if (exclusiveRows.includes(rowIndex)) {
            uncheckColumn(columnIndex, $checkbox);
        } else {
            uncheckExclusiveRows(columnIndex);
        }
    });
}