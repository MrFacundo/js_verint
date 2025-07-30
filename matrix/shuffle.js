$(function () {
	let rand = [
		'%[RANDOMIZATION]Q447_1%',
		'%[RANDOMIZATION]Q447_2%',
		'%[RANDOMIZATION]Q447_3%',
		'%[RANDOMIZATION]Q447_4%',
		'%[RANDOMIZATION]Q447_5%',
		'%[RANDOMIZATION]Q447_6%',
		'%[RANDOMIZATION]Q447_7%',
		'%[RANDOMIZATION]Q447_8%',
		'%[RANDOMIZATION]Q447_9%',
		'%[RANDOMIZATION]Q447_10%',
		'%[RANDOMIZATION]Q447_11%',
		'%[RANDOMIZATION]Q447_12%',
		'%[RANDOMIZATION]Q447_13%',
		'%[RANDOMIZATION]Q447_14%',
		'%[RANDOMIZATION]Q447_15%',
		'%[RANDOMIZATION]Q447_16%',
		'%[RANDOMIZATION]Q447_17%',
		'%[RANDOMIZATION]Q447_18%',
		'%[RANDOMIZATION]Q447_19%',
		'%[RANDOMIZATION]Q447_20%',
	].filter(item => item.trim() !== ""); // Remove empty items

	console.log("Randomization array:", rand);

	let questionId = $('fieldset[id^="Q"]').attr('id').split('_')[0];
	console.log("Detected question ID:", questionId);

	let $tableBody = $("table tbody");
	let $responseLists = $(".response-area ol.response-set");

	if ($tableBody.length > 0) {
		let allRows = $tableBody.find('tr').get();
		let choiceRows = allRows.filter(row => $(row).hasClass('choice-row'));
		let randomizedRows = [];
		let count = 0;
		rand.forEach(optionNumber => {
			let rowId = `${questionId}T_${optionNumber}`;
			let $row = $(`#${rowId}`).closest("tr");
			if ($row.length > 0) {
				randomizedRows.push($row[0]);
				count++;
				if (count % 6 === 0 && choiceRows.length > 0) {
					randomizedRows.push(choiceRows.shift());
				}
			}
		});
		while (choiceRows.length > 0) {
			randomizedRows.push(choiceRows.shift());
		}
		$tableBody.empty().append(randomizedRows);
		$("tr").removeClass('even-row odd-row')
			.filter(':odd').addClass('odd-row')
			.end()
			.filter(':even').addClass('even-row');
	} else if ($responseLists.length > 0) {
		// Mobile version detected (ordered lists)
		console.log("Mobile version detected.");
		let lists = $responseLists.get();
		let randomizedLists = [];

		rand.forEach(optionNumber => {
			let listId = `${questionId}T_${optionNumber}`;
			let $list = $(`#${listId}`).closest("ol");
			if ($list.length > 0) {
				randomizedLists.push($list[0]);
			}
		});

		$(".response-area").empty().append(randomizedLists);

		// Reapply odd/even row styling
		$("ol").removeClass('even-row odd-row')
			.filter(':odd').addClass('odd-row')
			.end()
			.filter(':even').addClass('even-row');
	} else {
		console.warn("No valid table or ordered list found.");
	}
});