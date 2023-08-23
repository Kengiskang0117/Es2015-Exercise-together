//Same keys and values Es5 // 
function createInstructor (firstName, lastName){
    return {
        firstName: firstName,
        lastName: lastName
    }
}

// Same keys and values ES2015//
function createInstructor (firstName, lastName) {
    return {
        firstName,
        lastName
    }
}

//computed property Names
var favoriteNumber = 42;

var instructor = {
  firstName: "Frank"
}

instructor[favoriteNumber] = "That is my favorite!"

//computed property names ES2015
let favoriteNumber = 17;
var  instructor = {
    firstName: "Frank", 
    [favoriteNumber]: "That is my favorite in my life!!"
}

//object Methods
var instructor = {
    firstName: "Frank",
    sayHello: function (){
        return "KLK!!";
    },
    sayBye: function(){
        return this.firstName + "says Bye!!";
    }
}

//Object Methods ES2015
const instructor = {
    firstName: "Frank",
    sayHello:() => {
        return "KLK!!";
    },
    sayBye(){
        return this.firstName + "says Bye!!";
    }
}

// Create Animal function
const a = createAnimal("cat", "meow", "MEOOOW!!")
a.meow()

const d = createAnimal("wolf","bark","AUUUU!!!")
d.bark()

function createAnimal(species, verb, noise){
    return {
        species,
        [verb](){
            return noise;
        }
    }
}


