$(function () {
    function reorderListItems(ids) {
        const $list = $("fieldset ol");
        const $itemsToMove = [];
        const $remainingItems = [];

        ids.forEach(id => {
            const $item = $list.find(`#${id}`);
            if ($item.length) {
                $itemsToMove.push($item.detach());
            }
        });

        $list.children().each(function () {
            $remainingItems.push($(this).detach());
        });

        for (let i = $remainingItems.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [$remainingItems[i], $remainingItems[j]] = [$remainingItems[j], $remainingItems[i]];
        }

        $remainingItems.forEach($item => {
            $list.append($item);
        });

        $itemsToMove.forEach($item => {
            $list.append($item);
        });
    }

    reorderListItems(["Q319C2", "Q319C7", "Q319C13", "Q319C21", "Q319C22", "Q319C23"]);
});