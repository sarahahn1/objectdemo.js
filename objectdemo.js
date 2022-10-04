let person = {
    firstName: "Egha", 
    lastName: "Kusuma",
    heightFeet: 6,
    age: 18, 
    favorites: {
        movie1: "Spiderman",
        movie2 : "Batman",
    },
    favFoods: ['rice', 'pizza', 'noodles']
}
console.log(person.firstName)

let {lastName : last_name} = person
console.log(last_name)

let {firstName, lastName} = person

let fullName = firstName + " " + lastName
console.log(fullName)

//console.log(person.favorites.movie1)
//console.log(person.favFoods[0])

console.log(person['favorites'], ['movie1'])
// another way for first console but with bracket.
console.log(person['favFoods'][0])
//another way with bracket

//------CLASS----------
// let dog1 = {
//     name: '',
//     color: '',
//     age: 7,
// }
class Dog {
    constructor(name, color, age ) {
        this.name = name
        this.color = color
        this.age = age

}
greeting() {
    console.log(`Hi, my name is ${this.name}, and i'm ${this.age}`)
}
}

let dog1 = new Dog ('freida', 'brown', 7)

//console.log(dog1)

//dog1.greeting()

class Puppy extends Dog {
    constructor(name, color, age, trainingLevel) {
        super(name, color, age)
        this.trainingLevel = trainingLevel
    }
    levelUp(num) {
       return this.trainingLevel +=num //this.trainingLevel = this.trainingLevel + num
    }
}
let puppy1 = new Puppy ('a', 'green', 4, 6)
//console.log(puppy1.greeting())

puppy1.greeting()

console.log(puppy1.levelUp(3))

let food = {
    name: "pizza",
    price: 10,
    introduction: () => {
        console.log(`hi, I love pizza`)
    }
}

food.introduction()