// One checked checkbox per visible row is required. Validates on form submission.
$(function () {
    const validationMessage = "Please answer this question before continuing.";
    
    const $fieldset = $('fieldset');

    const getVisibleRows = () => {
        return $('table tbody tr').not('[style="display: none;"]').not('.choice-row');
    };

    const getVisibleOlElements = () => {
        return $('div.response-area ol').not('[style="display: none;"]').not('.choice-row');
    };

    const hasCheckedInput = ($element, selector) => {
        return $element.find(selector + ' input:checked').length > 0;
    };

    const showValidation = (msg) => {
        if ($('.validation-message').length === 0) {
            const alertHtml = `<div tabindex="0" class="alert alert-danger validation-message" role="alert">${msg}</div>`;
            $fieldset.append(alertHtml);
        }
    };

    const isValidInput = () => {
        const $visibleRows = getVisibleRows();
        
        if ($visibleRows.length > 0) {
            return $visibleRows.toArray().every(row => 
                hasCheckedInput($(row), 'td')
            );
        }
        
        const $visibleOls = getVisibleOlElements();
        return $visibleOls.toArray().every(ol => 
            hasCheckedInput($(ol), 'li')
        );
    };

    const checkInputs = (event, msg) => {
        $('.validation-message').remove();
        
        if (!isValidInput()) {
            event.preventDefault();
            showValidation(msg);
        } else {
            console.log("valid");
        }
    };

    $('#BN').on('click', function(event) {
        checkInputs(event, validationMessage);
    });
});