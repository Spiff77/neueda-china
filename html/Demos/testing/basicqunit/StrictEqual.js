test("strictEqual() test 1", function() {
	strictEqual(42, 42);
});

test("strictEqual() test 2", function() {
	strictEqual(42, "42");
});

test("strictEqual() test 3", function() {
	var obj = { name: "Jane", age: 21 };
	strictEqual(obj, obj);
});

test("strictEqual() test 4", function() {
	var obj1 = { name: "Jane", age: 21 };
	var obj2 = { name: "Jane", age: 21 };
	strictEqual(obj1, obj2);
});
