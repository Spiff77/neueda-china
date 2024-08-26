var tom   = new Person("Tom", "Smith",  29);
var dick  = new Person("Dick", "Jones", 29);
var harry = new Person("Harry", "Hole", 32);

console.log("-----------------------------------------------------");
console.log("Testing the toString() function...");
console.log("Tom: "   + tom.toString());
console.log("Dick: "  + dick.toString());
console.log("Harry: " + harry.toString());

console.log("-----------------------------------------------------");
console.log("Testing the compareTo() function...");
console.log("Comparing Tom and Dick",  tom.compareTo(dick));
console.log("Comparing Tom and Harry", tom.compareTo(harry));
console.log("Comparing Harry and Tom", harry.compareTo(tom));
