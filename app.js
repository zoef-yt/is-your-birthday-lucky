const dateOfBirth = document.getElementById("dateOfBirth");
const luckyNumber = document.getElementById("luckyNumber");
const submit = document.getElementById("submit");
const luckyMessage = document.querySelector(".luckMessageDisplay");

submit.addEventListener("click", submitButtonHandler);

function submitButtonHandler() {
	console.log("submit button clicked");
	var sumOfDOB = calculateDateOfBirth();
	if (sumOfDOB % luckyNumber.value === 0) {
		console.log("lucky");
		luckyMessage.innerText = "😉Congratulations! You are a lucky person!😎";
	} else {
		console.log("unlucky");
		luckyMessage.innerText = "🥲Sorry! You are not a lucky person!😔";
	}
}
function calculateDateOfBirth() {
	var dob = dateOfBirth.value;
	dob = dob.replaceAll("-", "");
	var sum = 0;
	for (i = 0; i < dob.length; i++) {
		sum += parseInt(dob[i]);
	}
	return sum;
}
