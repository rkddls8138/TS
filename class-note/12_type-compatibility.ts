// 인터페이스
interface Developer {
    name: string;
    skill: string;
}

interface Person1 {
    name: string;
    // skill: string;
}

var developer: Developer;
var person1: Person;

// developer = person;
person1 = developer;

/** 
 *
 *  클래스
 * 
 * */
class Test {
    name: string;
    skill: string;
}

developer = new Test();

// 함수
var add1 = function (a: number): number {
    return a;
}

var sum1 = function (a: number, b: number): number {
    return a + b;
}

sum1 = add1;
// add = sum;



// 제네릭
interface Empty<T> {

}
var empty1: Empty<string>;
var empty2: Empty<number>;
empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
    data: T;
}
var notEmpty1: NotEmpty<string>;
var notEmpty2: NotEmpty<number>;
notEmpty1 = notEmpty2;
notEmpty2 = notEmpty1;