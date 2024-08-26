var tom   = new Person("Tom", "Smith",  29);
var dick  = new Person("Dick", "Jones", 29);
var harry = new Person("Harry", "Hole", 32);

try {
	assertEquals("Tom Smith should be 29",  "Smith, Tom [29]",  tom.toString());
	assertEquals("Dick Jones should be 29", "Jones, Dick [29]", dick.toString());
	assertEquals("Harry Hole should be 32", "Hole, Harry [32]", harry.toString());

	assertEquals("Tom and Dick should be same age",   0, tom.compareTo(dick));
//	assertEquals("This is a deliberate failure",     99, tom.compareTo(dick));
	assertEquals("Tom should be younger than Harry", -3, tom.compareTo(harry));
	assertEquals("Harry should be older than Tom",    3, harry.compareTo(tom));
	
	console.log("Tests passed: " + passCount);
}
catch (e) {
	console.log("A test failed: " + e.message);
}