runTests("Person tests", "resultArea", {

	"test toString() returns correct format": function () {
		var tom = new Person("Tom", "Smith",  29);
		assertEquals("Tom Smith should be 29", "Smith, Tom [29]", tom.toString());
	},

	"test compareTo() for equal ages returns 0": function () {
		var tom  = new Person("Tom", "Smith",  29);
		var dick = new Person("Dick", "Jones", 29);
		assert("Tom and Dick should be same age", tom.compareTo(dick) === 0);
	},

	"test deliberate failure": function () {
		assert("This is a deliberate failure", false);
	},

	"test compareTo() for younger first person returns negative": function () {
		var tom   = new Person("Tom", "Smith",  29);
		var harry = new Person("Harry", "Hole", 32);
		assert("Tom should be younger than Harry", tom.compareTo(harry) < 0);
	},

	"test compareTo() for older first person returns positive": function () {
		var harry = new Person("Harry", "Hole", 32);
		var tom   = new Person("Tom", "Smith",  29);
		assert("Harry should be older than Tom", harry.compareTo(tom) > 0);
	}
});
