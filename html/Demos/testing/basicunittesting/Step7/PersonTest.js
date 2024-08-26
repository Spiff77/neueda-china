runTests("Person tests", "resultArea", {

	"setup": function() {
		this.tom   = new Person("Tom", "Smith",  29);
		this.dick  = new Person("Dick", "Jones", 29);
		this.harry = new Person("Harry", "Hole", 32);
	},
	
	"test invalid Person object detected": function () {
		try {
			var badObject = {};
			this.tom.compareTo(badObject);
			fail("MUT should have thrown an exception, but didn't");
		} 
		catch (e) {
			assertEquals(e.message, "Invalid person", e.message);
		}
	},

	"test toString() returns correct format": function () {
		assertEquals("Tom Smith should be 29", "Smith, Tom [29]", this.tom.toString());
	},

	"test compareTo() for equal ages returns 0": function () {
		assert("Tom and Dick should be same age", this.tom.compareTo(this.dick) === 0);
	},

	"test deliberate failure": function () {
		assert("This is a deliberate failure", false);
	},

	"test compareTo() for younger first person returns negative": function () {
		assert("Tom should be younger than Harry", this.tom.compareTo(this.harry) < 0);
	},

	"test compareTo() for older first person returns positive": function () {
		assert("Harry should be older than Tom", this.harry.compareTo(this.tom) > 0);
	}
});
