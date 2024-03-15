document.addEventListener("DOMContentLoaded", function () {
	//select elements
	const header1 = document.getElementById("Q366G1");
	const group1 = [
		document.getElementById("Q366C1"),
		document.getElementById("Q366C2"),
		document.getElementById("Q366C3"),
		document.getElementById("Q366C4"),
	];
	const header2 = document.getElementById("Q366G2");
	const group2 = [
		document.getElementById("Q366C5"),
		document.getElementById("Q366C6"),
		document.getElementById("Q366C7"),
		document.getElementById("Q366C8"),
		document.getElementById("Q366C9"),
		document.getElementById("Q366C10"),
		document.getElementById("Q366C11"),
	];
	const header3 = document.getElementById("Q366G3");
	const group3 = [
		document.getElementById("Q366C12"),
		document.getElementById("Q366C13"),
		document.getElementById("Q366C14"),
		document.getElementById("Q366C15"),
		document.getElementById("Q366C16"),
		document.getElementById("Q366C17"),
	];
	const header4 = document.getElementById("Q366G4");
	const group4 = [
		document.getElementById("Q366C18"),
		document.getElementById("Q366C19"),
	];
	const lastItem = document.getElementById("Q366C20");

	//shuffle elements
	function shuffleArray(arr) {
		for (let i = arr.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[arr[i], arr[j]] = [arr[j], arr[i]];
		}
		return arr;
	}

	shuffleArray(group1);
	shuffleArray(group2);
	shuffleArray(group3);
	shuffleArray(group4);

	//combine the elements in the required order
	const shuffledArray = [
		header1,
		...group1,
		header2,
		...group2,
		header3,
		...group3,
		header4,
		...group4,
		lastItem,
	];

	//render the shuffled elements
	const responseSet = document.querySelector(".response-set");
	responseSet.innerHTML = "";
	responseSet.append(...shuffledArray);
});
