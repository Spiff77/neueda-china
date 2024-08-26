test("throws() test 1", function() {

	throws(
		function() {
			throw new Error("Oh-oh");
		},
		Error,
		"Raised error"
	);
});

test("throws() test 2", function() {

	throws(
		function() {
			throw new Error("oops here's an exception");
		},
		/oops/,
		"Oops it raised error"
	);
});

test("throws() test 3", function() {

	throws(
		function() {
			throw new BankError("Can't withdraw that much mate", 100000);
		},
		BankError,
		"Banks says no"
	);
});

