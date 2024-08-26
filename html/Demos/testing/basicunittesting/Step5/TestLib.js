passCount = 0;

function runTests(description, targetElementID, tests) {

	passCount = 0;
	var testCount = 0;
	var successCount = 0;

	for (var t in tests) {

		testCount++;

		try {
			tests[t]();
			displayMessage(t, targetElementID, true);
			successCount++;
		} catch (e) {
			displayMessage("Failure: " + t + ": [" + e.message + "]", targetElementID, false);
		}
	}
	displayMessage("<b>" + testCount + " test(s), " + (testCount - successCount) + " failure(s)</b>", targetElementID, successCount == testCount);
}

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
