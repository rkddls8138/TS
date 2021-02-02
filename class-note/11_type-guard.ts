interface Developer {
    name: string;
    skill: string;
}

// interface Person {
//     name: string;
//     age: number;
// }

function introduce(): Developer | Person {

    return { name: 'Tony', age: 33, skill: 'Iron Making' }
}
var tony = introduce();
console.log(tony.name);

if ((tony as Developer).skill) {
    var skill = 
    (tony as Developer)
}

// 타입 가드 정의
function isDeveloper(target: Developer | Person): target is Developer {
    return (target as Developer).skill != undefined;
}

if (isDeveloper(tony)) {
    console.log(tony.skill);
} else {
    console.log(tony.age);
}