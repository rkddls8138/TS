class Person {
    private name:string;
    public age: number;
    protected address: string;
    readonly log: string;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}