var Person = (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.toString = function () {
        return this.name + " (" + this.age + ") ";
    };
    return Person;
})();
var me = new Person("Nick", 21);
console.log(me.toString());
//# sourceMappingURL=person.js.map