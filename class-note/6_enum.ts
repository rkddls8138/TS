// enum Shoes {
//     Nike = 10,
//     aaas,
//     Adidas = 14,
//     Sth,
//     asdad
// }

// const myShoes = Shoes.Nike
// console.log(myShoes)

// enum Shoes {
//     Nike = '나이키',
//     Adidas = "아디다스",
//     asd = 10
// }

// const myShoes = Shoes.Nike
// console.log(myShoes)

// enum Shoes {
//     Nike = '나이키',
//     Adidas = "아디다스",
//     asd
// }

// const myShoes = Shoes.Nike
// console.log(myShoes)

enum Shoes {
    Nike = '나이키',
    Adidas = "아디다스",
    asd = 10
}

const myShoes = Shoes.Nike
console.log(myShoes)

// example
enum Answer {
    Yes = 'Y',
    No = 'N'
}

const askQuestion = (answer: Answer) => {
    if (answer === Answer.Yes) {
        console.log('정답')
    } else if (answer === Answer.No) {
        console.log('오답')
    }
}
// askQuestion('yes')
// askQuestion('예스')
// askQuestion('y')
askQuestion(Answer.Yes)