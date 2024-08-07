$(function () {
    function shuffleList(selector) {
        var ul = $(selector);
        var liArr = ul.children('li').get();
        var indices = JSON.parse(localStorage.getItem('shuffledIndices'));

        console.log("Retrieved indices from localStorage:", indices);

        if (!indices) {
            indices = liArr.map((_, index) => index);
            indices.sort(function() {
                return Math.random() - 0.5;
            });

            console.log("Generated new indices:", indices);
            localStorage.setItem('shuffledIndices', JSON.stringify(indices));
        }

        var shuffledArr = indices.map(index => liArr[index]);

        ul.empty();
        $.each(shuffledArr, function(idx, item) {
            ul.append(item);
        });

        console.log("Shuffled list:", shuffledArr);
    }

    shuffleList('.response-set');
});


// with last elements fixed:
$(function () {
    function shuffleList(selector) {
        var ul = $(selector);
        var liArr = ul.children('li').get();
        var indices = JSON.parse(localStorage.getItem('shuffledIndices'));

        console.log("Retrieved indices from localStorage:", indices);

        if (!indices) {
            var totalIndices = liArr.map((_, index) => index);
            var lastTwoIndices = totalIndices.slice(-2);
            var firstPartIndices = totalIndices.slice(0, -2);

            firstPartIndices.sort(function() {
                return Math.random() - 0.5;
            });

            indices = firstPartIndices.concat(lastTwoIndices);

            console.log("Generated new indices:", indices);
            localStorage.setItem('shuffledIndices', JSON.stringify(indices));
        }

        var shuffledArr = indices.map(index => liArr[index]);

        ul.empty();
        $.each(shuffledArr, function(idx, item) {
            ul.append(item);
        });

        console.log("Shuffled list:", shuffledArr);
    }

    shuffleList('.response-set');
});