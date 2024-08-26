module("Equality tests");

test("equal() test 1", function() {
	equal(42, 42);
});

test("equal() test 2", function() {
	equal(42, "42");
});

test("equal() test 3", function() {
	var obj = { name: "Jane", age: 21 };
	equal(obj, obj);
});

test("equal() test 4", function() {
	var obj1 = { name: "Jane", age: 21 };
	var obj2 = { name: "Jane", age: 21 };
	equal(obj1, obj2);
});

module("Inequality tests");

test("notEqual() test 1", function() {
	notEqual(42, 42);
});

test("notEqual() test 2", function() {
	notEqual(42, "42");
});

test("notEqual() test 3", function() {
	var obj = { name: "Jane", age: 21 };
	notEqual(obj, obj);
});

test("notEqual() test 4", function() {
	var obj1 = { name: "Jane", age: 21 };
	var obj2 = { name: "Jane", age: 21 };
	notEqual(obj1, obj2);
});
