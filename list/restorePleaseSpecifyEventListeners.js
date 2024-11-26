// Restore event listeners for the "Please specify" checkbox inputs
$(function() {
    function handleSpecifyInputs() {
        $('.specify input[type="checkbox"]').on('change', function() {
            const $specifyInput = $(this).closest('.specify').find('.specify-text');
            if (this.checked) {
                $specifyInput.show();
            } else {
                $specifyInput.hide();
            }
        });
    }

    handleSpecifyInputs();
});