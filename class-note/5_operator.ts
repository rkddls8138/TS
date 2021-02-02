// const logMessage = (value: any) => {
//     console.log(value)
// }

// logMessage('hello')
// logMessage(100)

var seho: string | number | boolean

const logMessage = (value: string | number) => {
    if(typeof value === 'number') {
        value.toLocaleString()
    } else if (typeof value === 'string'){
        value.toString()
    }
    throw new TypeError('value must be string or numner')
}

logMessage('hello')
logMessage(100)

interface Developer {
    name: string,
    skill: string
}
interface Person {
    name: string,
    age: number
}

// const askSomeone = (someone: Developer | Person) => {
//     someone.name
//     // someone.skill
//     // someone.age
// }
// askSomeone({ name: 'Developr', skill: '웹 개발' })
// askSomeone({ name: '캡틴', age: 100 })

// const askSomeone = (someone: Developer & Person) => {
//     // someone.name
//     // someone.age
// }
// askSomeone({ name: 'Developr', skill: '웹 개발', age: 100 })
// // askSomeone({ name: '캡틴', skill: '디자인', age: 100 })