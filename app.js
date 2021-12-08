const dateOfBirth = document.getElementById("dateOfBirth");
const luckyNumber = document.getElementById("luckyNumber");
const submit = document.getElementById("submit");
const luckyMessage = document.querySelector(".luckMessageDisplay");

submit.addEventListener("click", submitButtonHandler);

function submitButtonHandler() {
	console.log("submit button clicked");
	if (luckyNumber.value < 0 || luckyNumber.value == "") {
		luckyMessage.style.color = "red";
		luckyMessage.innerText = "Please enter a positive number";
	} else {
		var sumOfDOB = calculateDateOfBirth();

		if (sumOfDOB % luckyNumber.value === 0) {
			luckyMessage.style.color = "green";
			luckyMessage.innerText = "😉Congratulations! You are a lucky person!😎";
		} else {
			luckyMessage.style.color = "red";
			luckyMessage.innerText = "🥲Sorry! You are not a lucky person!😔";
		}
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
