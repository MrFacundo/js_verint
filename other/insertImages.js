/**
 * Insert image tags into specified elements with given styles
 * @param {Array} imageSources - Array of image source strings
 * @param {string} idPrefix - Prefix for the jQuery ID selector
 * @param {Object} styles - Object containing CSS style properties
 */
export function insertImages(imageSources, idPrefix, styles) {
    const styleString = Object.keys(styles)
        .map(function(key) {
            return key + ': ' + styles[key];
        })
        .join('; ');
    
    for (let i = 0; i < imageSources.length; i++) {
        const imgTag = '<img src="' + imageSources[i] + '" style="' + styleString + ';">';
        $('#' + idPrefix + (i + 1)).html(imgTag);
    }
}