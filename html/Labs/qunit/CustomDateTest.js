runTests("CustomDate tests", "resultArea", {

	"setup": function() {
		this.birthday = new CustomDate(2, 7, 1997);	
	},
	
	"test date getters return correct values": function() {
        assertEquals(2, this.birthday.getDay());
        assertEquals(7, this.birthday.getMonth());
        assertEquals(1997, this.birthday.getYear());
	},
	
	"test date setters set correct values": function() {
		this.birthday.setDay(19);
		this.birthday.setMonth(1);
		this.birthday.setYear(1965);
		
		assertEquals(19,   this.birthday.getDay());
        assertEquals(1,    this.birthday.getMonth());
        assertEquals(1965, this.birthday.getYear());
	},

	"test equals() same date returns true": function() {
		var anotherDate = new CustomDate(2, 7, 1997);
		assert("Result should be false", this.birthday.equals(anotherDate));
	},

	"test equals() different date returns false": function() {
		var anotherDate = new CustomDate(3, 12, 1964);
		assert("Result should be false", !this.birthday.equals(anotherDate));
	},
	
	"test date setters detect incorrect values": function() {
		try {
			this.birthday.setDay(0);
			fail("MUT should have thrown an exception, but didn't");
		} 
		catch (e) {
			assertEquals("Bad day: 0", e.message);
		}
		
		try {
			this.birthday.setDay(32);
			fail("MUT should have thrown an exception, but didn't");
		} 
		catch (e) {
			assertEquals("Bad day: 32", e.message);
		}
		
		try {
			this.birthday.setMonth(0);
			fail("MUT should have thrown an exception, but didn't");
		} 
		catch (e) {
			assertEquals("Bad month: 0", e.message);
		}
		
		try {
			this.birthday.setMonth(13);
			fail("MUT should have thrown an exception, but didn't");
		} 
		catch (e) {
			assertEquals("Bad month: 13", e.message);
		}
	},
	
	"test equals() non-date returns false": function() {
		assert("Result should be false", !this.birthday.equals(null));
	},
	
	"test offsetByDays() with zero offset returns same date": function() {
		var result = this.birthday.offsetByDays(0);	
		assert("Dates should be equal", result.equals(this.birthday));
	},
	
	"test offsetByDays() add one returns next day": function() {
		var result = this.birthday.offsetByDays(1);	
		assert("Result should be next day", result.equals(new CustomDate(3, 7, 1997)));
	},
	
	"test offsetByDays() subtract one returns previous day": function() {
		var result = this.birthday.offsetByDays(-1);	
		assert("Result should be previous day", result.equals(new CustomDate(1, 7, 1997)));
	},
	
	"test offsetByDays() add 30 days returns next month": function() {
		var result = this.birthday.offsetByDays(30);	
		assert("Result should be next month", result.equals(new CustomDate(1, 8, 1997)));
	},

	"test offsetByDays() subtract 30 days returns previous month": function() {
		var result = this.birthday.offsetByDays(-30);	
		assert("Result should be previous month", result.equals(new CustomDate(3, 6, 1997)));
	},
	
	"test offsetByDays() add 1 day to New Year's Eve returns New Year's Day": function() {
		var nye = new CustomDate(31, 12, 2013);
		var result = nye.offsetByDays(1);	
		assert("Result should be New Year's Day", result.equals(new CustomDate(1, 1, 2014)));
	},
	
	"test offsetByDays() subtract 1 day from New Year's Day returns New Year's Eve": function() {
		var nyd = new CustomDate(1, 1, 2014);
		var result = nyd.offsetByDays(-1);	
		assert("Result should be New Year's Eve", result.equals(new CustomDate(31, 12, 2013)));
	}

});
