var Person = function (givenName, familyName, age) {
	this.givenName = givenName;
	this.familyName = familyName;
	this.age = age;
};

Person.prototype = {

    compareTo: function(otherPerson) {
        return this.age - otherPerson.age;
    }, 

    toString: function() {
        return this.familyName + ", " + this.givenName + " [" + this.age + "]";
    }
};
