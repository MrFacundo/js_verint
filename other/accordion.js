var accordion = true;
var randRows = false;
var randColumns = true;
var optionType = "checkbox";
var fixedColumnIndexes = [11, 12];
var exclusiveColumnIndexes = [12];

$('fieldset[id^="Q"]').hide();

function waitForFunction(name, callback, interval = 50, timeout = 3000) {
	const start = Date.now();
	(function check() {
		if (typeof window[name] === "function") {
			callback();
		} else if (Date.now() - start < timeout) {
			setTimeout(check, interval);
		} else {
			console.warn(`Function ${name} not found after ${timeout}ms`);
		}
	})();
}

function getSharedData() {
	const questionId = $('fieldset[id^="Q"]').attr('id')?.split('_')[0] || 'QUNKNOWN';
	const optionLabels = $('thead tr').first().find('th').slice(1).map(function () {
		return $(this).text().trim();
	}).get();
	const statements = $('td.topic-text').map(function () {
		return $(this).text().trim();
	}).get();
	return { questionId, optionLabels, statements };
}

function shuffle(array) {
	let currentIndex = array.length, randomIndex;
	while (currentIndex !== 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;
		[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
	}
	return array;
}

$(function () {
	const $fieldset = $('fieldset[id^="Q"]');
	const questionId = $fieldset.attr('id')?.split('_')[0] || 'QUNKNOWN';

	if (randRows && typeof window.runStep1 === "function") {
		const rowCount = $('table tbody tr').length;
		const rowOrder = shuffle(Array.from({ length: rowCount }, (_, i) => i + 1));
		runStep1(questionId, rowOrder);
	}

	const { optionLabels, statements } = getSharedData();

	if (accordion && typeof window.transformToAccordion === "function") {
		window.transformToAccordion(optionLabels, statements, questionId, optionType);
	}

	if (randColumns) {
		const sampleRow = $('.accordion-options').first().children('div');
		const totalCount = sampleRow.length;
		const allIndexes = Array.from({ length: totalCount }, (_, i) => i);
		const toShuffleIndexes = allIndexes.filter(i => !fixedColumnIndexes.includes(i));
		const shuffled = shuffle([...toShuffleIndexes]);

		const finalOrder = [];
		let s = 0;
		for (let i = 0; i < totalCount; i++) {
			if (fixedColumnIndexes.includes(i)) {
				finalOrder.push(i);
			} else {
				finalOrder.push(shuffled[s++]);
			}
		}

		if (typeof window.runStep2 === "function") {
			runStep2(questionId, finalOrder);
		}

		$('.accordion-options').each(function () {
			const $children = $(this).children('div').toArray();
			const reordered = finalOrder.map(i => $children[i]);
			$(this).empty().append(reordered);
		});
	}

	$('.accordion-options').each(function () {
		const $container = $(this);
		$container.find('input[type="checkbox"]').on('change', function () {
			const idx = $container.children('div').index($(this).parent());
			const isExclusive = exclusiveColumnIndexes.includes(idx);
			if (isExclusive && this.checked) {
				$container.find('input[type="checkbox"]').not(this).prop('checked', false);
			} else if (!isExclusive && this.checked) {
				exclusiveColumnIndexes.forEach(exclIdx => {
					$container.children('div').eq(exclIdx).find('input[type="checkbox"]').prop('checked', false);
				});
			}
		});
	});

	$fieldset.show();
});
