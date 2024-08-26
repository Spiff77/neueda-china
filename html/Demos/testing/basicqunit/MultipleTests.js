test("Test 1", function() {
	ok(42 == "42", "This test definitely succeeds");
});

test("Test 2", function() {
	ok(42 == "42");
});

test("Test 3", function() {
	ok(42 == "wibble", "This test definitely fails");
});

test("Test 4", function() {
	ok(42 == "wobble");
});