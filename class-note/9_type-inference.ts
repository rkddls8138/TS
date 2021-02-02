// 타입 추론 기본 1
var a = 1;

// 문자 + 숫자 = 문자 
function getB(b = 10){
    var c = 'hi';
    return b + c; // retrun = 1010
}

10 + '10' // 1010

// 타입 추론 기본 2
// interface Dropdown<T>{
//     value: T;
//     title: string;
// }
// var shoppingItem: Dropdown<string> = {
//     value: 'abc',
//     title: 'hello'
// }

// 타입 추론 기본 3
interface Dropdown<T>{
    value: T;
    title: string;
}
interface DetailedDropdown<K> extends Dropdown<K>{
    description: string;
    tag: K;
}
var detailedItem: DetailedDropdown<string> = {
    title: 'abc',
    description: 'ab',
    value: 'a',
    tag: 'a'
}

// Best Common Type <-- 해당코드를 어떤 타입인지 먹여나가는 알고리즘
var arr = [1,2,true, false,'a'];