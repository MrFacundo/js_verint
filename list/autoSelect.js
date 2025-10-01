/**
 * Automatically selects the option if there is only one available.
 * Does nothing if the page was reached using the back button.
 */
export function autoSelect() {
    if (localStorage.getItem('buttonq3') === 'BB')
        return;
    const liElements = $('div.response-area li');

    if (liElements.length === 1) {
        const $singleLi = liElements.first();
        const $input = $singleLi.find('input');
        $input.prop('checked', true).click();
        $('#BN').click();
    }
}
