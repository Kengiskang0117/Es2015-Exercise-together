// object destructuring 1
let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let { NumPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); 
console.log(yearNeptuneDiscovered); 

// #2
let planetFacts = {
    numPlanets: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
  };
  
  let {numPlanets, ...discoveryYears} = planetFacts;
  
  console.log(discoveryYears);
  


  //#3
  function getUserData({firstName, favoriteColor="green"}){
    return `Your name is ${firstName} and you like ${favoriteColor}`;
  }
  
  getUserData({firstName: "Alejandro", favoriteColor: "purple"})
  
  
  getUserData({firstName: "Melissa"})
 
  
  getUserData({})
  

  //Array Destructuring 1
  let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); 
console.log(second); 
console.log(third); 


//array Destructuring 2
let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
  ]
  
  console.log(raindrops); 
  console.log(whiskers); 
  console.log(aFewOfMyFavoriteThings)
  

//array Destructuring 3
let numbers = [10,20,30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]
console.log(numbers)


//Es5 refactoring
var obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  
  var a = obj.numbers.a;
  var b = obj.numbers.b;

  //Es2015 destructuring
  const obj = {
    numbers: {
        a: 1,
        b: 2
    }
  };
  const {a,b}= obj.numbers


  //Es5 array Swap
  var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;

//Es2015 on line array 
[arr[0], arr[1]] = [arr[1], arr[0]]

//RaceResult 
raceResults(['Ken', 'Annetty', 'David', 'Effan', 'Marlin'])
const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})

