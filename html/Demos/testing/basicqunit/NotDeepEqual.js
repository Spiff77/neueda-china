test("notDeepEqual() test 1", function() {
	notDeepEqual(42, 42);
});

test("notDeepEqual() test 2", function() {
	notDeepEqual(42, "42");
});

test("notDeepEqual() test 3", function() {
	var obj = { name: "Jane", age: 21 };
	notDeepEqual(obj, obj);
});

test("notDeepEqual() test 4", function() {
	var obj1 = { name: "Jane", age: 21 };
	var obj2 = { name: "Jane", age: 21 };
	notDeepEqual(obj1, obj2);
});
