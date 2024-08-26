class Person {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    toString(): string {
        return `${this.name} (${this.age}) `;
    }
}

var me = new Person("Nick", 21);
console.log(me.toString());

