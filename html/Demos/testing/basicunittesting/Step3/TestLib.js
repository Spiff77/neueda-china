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
