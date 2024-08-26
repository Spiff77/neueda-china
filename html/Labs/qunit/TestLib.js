passCount = 0;

function runTests(description, targetElementID, tests) {

	passCount = 0;
	var testCount = 0;
	var successCount = 0;

	var doSetup = typeof tests.setup == "function";
	var doTeardown = typeof tests.teardown == "function";

	for (var t in tests) {

		if (t.indexOf("test") != 0)
			continue;
			
		if (doSetup)
			tests.setup();
	
		testCount++;

		try {
			tests[t]();
			displayMessage(t, targetElementID, true);
			successCount++;
		
			if (doTeardown) 
				tests.teardown();

		} 
		catch (e) {
			displayMessage("Failure: " + t + ": [" + e.message + "]", targetElementID, false);
		}
	}
	displayMessage("<b>" + testCount + " test(s), " + (testCount - successCount) + " failure(s)</b>", targetElementID, successCount == testCount);
}

function fail(message) {
	throw new Error(message);
}

function assert(message, expression) {
	if (!expression) {
		throw new Error(message);
	}
	passCount++;
	return true;
}

function assertEquals(expected, actual) {
	if (expected !== actual) {
		throw new Error("Expected: " + expected + ", actual: " + actual);
	}
	passCount++;
	return true;
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
