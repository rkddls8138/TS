function sum(a: number, b: number){
    return a + b;
}

function add(a, b): number {
    return a + b;
}

// 함수의 옵셔널 파라미터
function log(a: string, b?: string) {
    
}

log("hello world");
log("hello ts", "abc");