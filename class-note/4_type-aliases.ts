// interface Person {
//     name: string,
//     age: number
// }

// interface PersonChild extends Person {
//     leng: string
// }

type Person = {
    name: string,
    age: number
}

// type PersonChild extends Person = {
//     leng: string
// }

let seho: Person = {
    name: '세호',
    age: 30
}

type MyString = string;
let str: MyString = 'hello';

type Todo = { id: string, title: string, done: boolean }
const getTodo = (todo: Todo) => {
    
}