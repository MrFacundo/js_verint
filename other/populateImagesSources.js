/**
 * Extract image sources from text-block elements and populate question inputs
 * @param {string} questionId - The ID of the question to populate
 */
export function populateImagesSources(questionId) {
    const imageSources = [];

    $('p.text-block img').each(function() {
        imageSources.push($(this).attr('src'));
    });

    for (let i = 0; i < imageSources.length; i++) {
        $('#' + questionId + '_' + (i + 1)).val(imageSources[i]);
    }

    $('#BN').click();
}