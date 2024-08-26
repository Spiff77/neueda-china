// Constructor, with validation.
var CustomDate = function (day, month, year) {
	this.setDay(day);
	this.setMonth(month);
	this.setYear(year);
};


// Additional methods for CustomDate object.
CustomDate.prototype = {

	// day getter and setter.
	getDay: function() {
		return this._day;
	},
	
	setDay: function(day) {
		if (day < 1 || day > 31) {
			throw new Error("Bad day: " + day);
		}
		this._day = day;
	},
	
	// month getter and setter.
	getMonth: function() {
		return this._month;
	},
	
	setMonth: function(month) {
		if (month < 1 || month > 12) {
			throw new Error("Bad month: " + month);
		}
		this._month = month;
	},

	// year getter and setter.
	getYear: function() {
		return this._year;
	},
	
	setYear: function(year) {
		this._year = year;
	},

	// Test if this CustomDate is the same date as another CustomDate.
	equals: function(other) {
		if (!other || this._day !== other._day || this._month !== other._month || this._year !== other._year)
			return false;
		else
			return true;
    }, 

	// Return a new CustomDate, offset by the specified number of days from this CustomDate.
    offsetByDays: function(days) {

		var deltaYears = this.intDivide(days, 365);
		days = days % 365;
		var deltaMonths = this.intDivide(days, 31);
		days = days % 31;
		
		var day = this._day + days;
		if (day > 31) {
			day -= 31;
			deltaMonths++;
		}
		else if (day < 1) {
			day += 31;
			deltaMonths--;
		}
		
		var month = this._month + deltaMonths;
		if (month > 12) {
			month -= 12;
			deltaYears++;
		}
		else if (month < 1) {
			month += 12;
			deltaYears--;
		}
		
		return new CustomDate(day, month, this._year + deltaYears);
    }, 

	// Helper function, to do integer division (i.e. truncates towards 0).
	intDivide: function(numerator, denominator) {
		if (numerator > 0) 
			return Math.floor(numerator / denominator);
		else 
			return Math.ceil(numerator / denominator); 
	},
	
	// Return a textual representation of this CustomDate.
    toString: function() {
        return this.day.toFixed(2) + "/" + 
		       this.month.toFixed(2) + "/" +
			   this.year.toFixed(4);
    }
};
