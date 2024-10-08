

/*
let firstName = "Thomas"
let age = 39
let student = true;

let studentString = student ? "Student" : "Employee"
let adultString = age >= 18  ? "Adult" : "You are not an adult"

console.log(studentString, adultString)
/*
if(student){ // instead of student === false
    console.log("You are a student");
}


/*
console.log("Hello " + firstName + ", you have ${age} year old") // Old way
console.log(`Hello ${firstName}, you have ${age} year old`) // Modern way



/*

Declare some variables to represent the car you drive, 
or if you do not have a car – a car you would like to drive!
 Firstly declare two variables called make and model, 
 then declare a variable to be the engineSize, 
 and declare a variable to be the gear your car is in.
 Now initialise those variables with appropriate values. 
 Put in some code so that the program will print out the values of these variables,
  things like; 
The make is xThe gear is yThe engine size is z 

You will need to use the string concatenator (+). 

let make = "Tesla"
let model = "Y"
let engineSize = 2
let gear = "auto"
let isStarted = false

let carStatus = isStarted ? "Started" : "Off"

console.log(make + " (Model " + model + "), is " + carStatus )

console.log("Hey I have a " + make + " (Model " + model + "), the gear is " + gear + " and the size is " +engineSize +"");

let hobbies = ['music', 'reading', 'hiking', 'movies', 'eating']
hobbies.push('swimming')
console.log(hobbies)

console.log(hobbies.splice(1, 3))
console.log(hobbies)

console.log(`this is all the hobbies i like: ${hobbies.join(', ')}`)

// Create an array with the name of your team members.
// Print it
// Add Leon to your team.
// Print it again to check

// Now using splice, in a team2 variable. Splice the first array so you
//  add in the second group the 2 last persons
//  
// ex:
//   original
//    team = ['a','b','c','d']
//
//   then
//    team will have values: ['a', 'b']
//    team2 will have values: ['c, d']

let team = ['a','b','c','d']

team.splice(0,1)
team.splice(0,1)
team.splice(0,1)

//console.log(team)
*/
let age = 39;

//  0         1        2         3           4
let hobbies = ["music", "reading", "hiking", "movies", "eating"];

// standard for loop
for (let i = 0; i < hobbies.length; i++) {
  // console.log(hobbies[i])
  // OR console.log(`The hobby with index ${i} is ${hobbies[i]}`)
}

// for in loop (play with index)
for (let c in hobbies) {
  //  console.log(`The hobby with index ${c} is ${hobbies[c]}`)
}

// for each loop (play with content)
/*for(let c of hobbies){
    i++;
    if(c === 'hiking'){
        console.log('Hiking found')
        continue;
    }

    console.log('Continuing the loop ('+(i)+')')
}
console.log('Exiting program')

leapYears = [];
for(let year = 1900; year <= 2000; year ++){
    if(year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        leapYears.push(year);
        if(leapYears.length === 5){
            break;
        }

    }
}*/

function convertToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

let album = {
  title: "Album title",
  year: 2020,
  artist: { name: "Leon" },
};

let album2 = { ...album, nbOfTracks: 12, year: 2022 };
album.title = "Something else";






class Car{

     constructor(initSpeed, speed){
        this.initSpeed = initSpeed
        this.speed = (speed !== undefined) ? speed : 0
        console.log("Hey am a car")
     }
}

class RaceCar extends Car{

    constructor(initSpeed, sponsors, speed){
        super(initSpeed, speed)
        this.sponsors = sponsors
        console.log("Hey am a race car")
     }
}

//let raceCar = new RaceCar(100,['redbull (make you fly)'])


function displayDouble(value){
   return console.log(value * 2)
}

const displayDoubleMoreModern = (value) => console.log(value * 2)

//displayDoubleMoreModern(200)
let arr = [1,2,3,4,5,6]
//arr.forEach((v, i,arr) => 
  //  console.log(`The index of ${v} is ${i} and the double is ${v * 2}`))
 let filteredArray = arr.filter(v => {
    return v % 2 === 0 
 })
 let filteredArray2 = arr.filter(v => v % 2 === 0)
//console.log(filteredArray)

['0=2', '1=4', '2=6', '///more here']
let doubleValues = arr.map((value, index) => {
    console.log('starting calulation for ' + value)
    return `${index}=${value * 2}`
})
//console.log(doubleValues)

const filterAndDouble = arr
                        .filter(v => v % 2 === 0)
                        .map((value, index) => 
                            `${index}=${value * 2}`
                        )
console.log(filterAndDouble)

instructors = [{name: 'Leon', age: 17}, {name: 'Wei Meng', age: 24}]

//const totalAge = instructors.reduce((acc, instructor) => instructor.age + acc, 0)
const instructorsNames = instructors.reduce((acc, instructor) => 
    [...acc, instructor.name], 
[])
console.log(instructorsNames)

const total = arr.reduce((acc, v) => {
   // console.log('acc', acc, 'value', v)
   return v + acc
}, 0)
// console.log(total)
