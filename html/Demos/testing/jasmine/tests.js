/// <reference path="Scripts/jasmine.js" />

describe("A basic suite example", function () {

    it("compares true with true", function () {
        expect(true).toBe(true);
    });

    it("compares 2+2 with the result 4", function () {
        expect(2 + 2).toBe(4);
    });

    it("detects failed outcomes", function () {
        expect("Classy football team").toBe("Cardiffnill");
    });
});


describe("Given a suite of Matchers:", function () {

    it("toBe() compares with ===", function () {
        var a = 42;
        var b = a;

        expect(a).toBe(b);
        expect(a).not.toBe("42");
    });

    it("toEqual() works for literals and variables", function () {
        var a = 42;
        expect(a).toEqual(42);
    });

    it("toEqual() works for objects", function () {
        var country1 = {
            name: "Scotland",
            population: 4500000
        };
        var country2 = {
            name: "Scotland",
            population: 4500000
        };
        expect(country1).toEqual(country2);
    });

    it("toMatch() uses a regular expressions", function () {
        var message = "incy wincy spider";

        expect(message).toMatch(/wincy/);
        expect(message).toMatch("wincy");
        expect(message).not.toMatch(/frog/);
    });

    it("toBeDefined() sees if a property is defined", function () {
        var bonnyweeladdie = {
            name: "Wilfried Bony"
        };

        expect(bonnyweeladdie.name).toBeDefined();
        expect(bonnyweeladdie.transferDate).not.toBeDefined();
    });

    it("toBeUndefined() sees if a property is undefined", function () {
        var bonnyweeladdie = {
            name: "Bafetimbi Gomis"
        };

        expect(bonnyweeladdie.transferDate).toBeUndefined();
        expect(bonnyweeladdie.name).not.toBeUndefined();
    });

    it("toBeNull() compares against null", function () {
        var a = null;
        var b = 42;

        expect(null).toBeNull();
        expect(a).toBeNull();
        expect(b).not.toBeNull();
    });

    it("toBeTruthy() tests for truth", function () {
        var a, b = 42;

        expect(b).toBeTruthy();
        expect(a).not.toBeTruthy();
    });

    it("toBeFalsy() tests for falsehood", function () {
        var a, b = 42;

        expect(a).toBeFalsy();
        expect(b).not.toBeFalsy();
    });

    it("toContain() finds an item in an Array", function () {
        var greatPlayers = ["andre", "gylfi", "bafe"];

        expect(greatPlayers).toContain("gylfi");
        expect(greatPlayers).not.toContain("rooney");
    });

    it("toBeLessThan() tests mathematical <", function () {
        var a = 1.5, b = 3.5;

        expect(a).toBeLessThan(b);
        expect(b).not.toBeLessThan(a);
    });

    it("toBeGreaterThan() tests mathematical >", function () {
        var a = 1.5, b = 3.5;

        expect(b).toBeGreaterThan(a);
        expect(a).not.toBeGreaterThan(b);
    });

    it("toBeCloseTo() tests for mathematical proximity", function () {
        var a = 10.12345, b = 10.12348;

        expect(a).toBeCloseTo(b);
        expect(a).toBeCloseTo(b, 4);
        expect(a).not.toBeCloseTo(b, 5);
    });

    it("toThrow() tests if a function throws an exception", function () {
        var goodFunc = function () {
            return 2 + 2;
        };
        var badFunc = function () {
            return a + 1;
        };

        expect(goodFunc).not.toThrow();
        expect(badFunc).toThrow();
    });
});


describe("Setup and teardown:", function () {

    var acc1;

    beforeEach(function() {
        acc1 = {
            name: 'Tom',
            balance: 0,
            deposit: function (amount) {
                this.balance += amount;
            },
            withdraw: function (amount) {
                this.balance -= amount;
            },
        };
    });

    afterEach(function () {
        // Can add teardown code here, if needed.
    });

    it("accounts have 0 balance initially", function () {
        expect(acc1.balance).toBe(0);
    });

    it("deposits increase balance", function () {
        acc1.deposit(100);
        expect(acc1.balance).toBe(100);
    });

    it("withdrawals decrease balance", function () {
        acc1.withdraw(25);
        expect(acc1.balance).toBe(-25);
    });

});