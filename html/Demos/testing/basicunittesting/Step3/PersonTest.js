var tom   = new Person("Tom", "Smith",  29);
var dick  = new Person("Dick", "Jones", 29);
var harry = new Person("Harry", "Hole", 32);

try {
	assertEquals("Tom Smith should be 29",  tom.toString(), "Smith, Tom [29]");
	assertEquals("Dick Jones should be 29", dick.toString(), "Jones, Dick [29]");
	assertEquals("Harry Hole should be 32", harry.toString(), "Hole, Harry [32]");

	assert("Tom and Dick should be same age", tom.compareTo(dick) === 0);
//	assert("This is a deliberate failure", false);
	assert("Tom should be younger than Harry", tom.compareTo(harry) < 0);
	assert("Harry should be older than Tom", harry.compareTo(tom) > 0);
	
	console.log("Tests passed: " + passCount);
}
catch (e) {
	console.log("A test failed: " + e.message);
}