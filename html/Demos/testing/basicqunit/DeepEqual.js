test("deepEqual() test 1", function() {
	deepEqual(42, 42);
});

test("deepEqual() test 2", function() {
	deepEqual(42, "42");
});

test("deepEqual() test 3", function() {
	var obj = { name: "Jane", age: 21 };
	deepEqual(obj, obj);
});

test("deepEqual() test 4", function() {
	var obj1 = { name: "Jane", age: 21 };
	var obj2 = { name: "Jane", age: 21 };
	deepEqual(obj1, obj2);
});
