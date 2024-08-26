passCount = 0;

function assertEquals(message, expected, actual) {
	if (expected != actual) {
		throw new Error(message);
	}
	passCount++;
	return true;
}
