test("notStrictEqual() test 1", function() {
	notStrictEqual(42, 42);
});

test("notStrictEqual() test 2", function() {
	notStrictEqual(42, "42");
});

test("notStrictEqual() test 3", function() {
	var obj = { name: "Jane", age: 21 };
	notStrictEqual(obj, obj);
});

test("notStrictEqual() test 4", function() {
	var obj1 = { name: "Jane", age: 21 };
	var obj2 = { name: "Jane", age: 21 };
	notStrictEqual(obj1, obj2);
});
