passCount = 0;

function assert(message, expression) {
	if (!expression) {
		throw new Error(message);
	}
	passCount++;
	return true;
}

function assertEquals(message, expected, actual) {
	return assert(message, expected === actual);
}

function displayMessage(message, targetElementID, isok) {

	var targetElement = document.getElementById(targetElementID);

	if (targetElement) {

		var pElem = document.createElement("p");
		pElem.style.color = isok ? "green" : "red";
		pElem.innerHTML += message;

		targetElement.appendChild(pElem);
	}
}
