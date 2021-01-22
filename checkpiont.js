//mon checkpoint---------------------------------------------
//---------1--------------//

var b = Math.min(1, 2, 3, 4, 5)
var a = Math.max(1, 2,3, 4, 5 )
console.log("[" ,b,",", a,"]")

var b = Math.min(2334454,5)
var a = Math.max(2334454,5 )
console.log("[" ,b,",", a,"]")

var b = Math.max(1)
var a = Math.max(1)
console.log("[",b,",",a,"]")

//-----------2-----------//

var a =4
var b = 8
console.log (a===b)

var a= 2
var b = 2
console.log (a===b)

var a =2
var b = '2'
console.log (a===b)
 
//---------------3----------------//
var one = [1, 2, "a", "b"];
    var a = one.filter(Number.isFinite);

var two = [1, "a", "b", 0, 15];
    var b = two.filter(Number.isFinite);

    var three = [1, 2, "aasf", "1", "123", 123];
    var c = three.filter(Number.isFinite);

    function num(value) {
        if (typeof (value) === 'number') {
            return value;
        }
    }
console.log(a)
console.log(b)
console.log(c)

//-----------4------------------//

const getAbsSum = function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
     sum += Math.abs(arr[i]);
    }
    console.log(sum);
   };
   getAbsSum([2, -1, 4, 8, 10]) 
   
   getAbsSum([-3, -4, -10, -2, -3]) 
   
   getAbsSum([2, 4, 6, 8, 10]) 
   
   getAbsSum([-1]) 

//----------5-----------------//

const a = [true, false, false, true, false];
const count1 = a.filter(Boolean).length;
console.log(count1);

const b = [false, false, false, false];
const count2 = b.filter(Boolean).length;
console.log(count2);

const c = [];
const count3 = c.filter(Boolean).length;
console.log(count3);

//-----------------6--------------------//

var liste1 = { cyan: 23, magenta:12, yellow:10}
var liste2= {cyan2:432, magenta2:543, yellow2:777}
var liste3 = {cyan3:700, magenta3:700, yellow3:0}
function myFunction(liste) {
  var a =Object.values(liste)
  return (Math.min(...a));             
}
console.log(myFunction(liste1))
console.log(myFunction(liste2))
console.log(myFunction(liste3))

//-------------7-----------//

var obj = 
({
  D: 1,
  B: 2,
  C: 3
}) 
console.log(Object.entries(obj));
var obje = 
({
  likes: 2,
  dislikes: 3,
  followers: 10
})
console.log(Object.entries(obje));

//----------------8-----------//

let initialValue = 0
let sum = ([
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve",  age: 32, budget: 40000 },
  { name: "Martin",  age: 16, budget: 2700 }
]).reduce(
    (accumulator, currentValue) => accumulator + currentValue.budget
    , initialValue
)
console.log(sum)
let sim = ([
  { name: "John",  age: 21, budget: 29000 },
  { name: "Steve",  age: 32, budget: 32000 },
  { name: "Martin",  age: 16, budget: 1600 }
])
.reduce(
    (accumulator, currentValue) => accumulator + currentValue.budget
    , initialValue
)
console.log(sim)

//----------------9----------------//
after({
    "Joel" : 32,
    "Fred" : 44,
    "Reginald" : 65,
    "Susan" : 33,
    "Julian" : 13
  }, 1)
  after({
    "Baby" : 2,
    "Child" : 8,
    "Teenager" : 15,
    "Adult" : 25,
    "Elderly" : 71
  }, 19)
  after({
    "Genie" : 1000,
    "Joe" : 40
  }, 5)
  function after (years, n) {
    for (var i in years) {
      years[i]=years[i]+Math.abs(n);
    }
  console.log(years)
  }
//-----------------10--------------//
function greet(name, country){
  console.log("Hi ! i'm "+ name + " and I'm from "+ country + ".");
};
greet("Randy", "Germany");
greet("Karla", "France");
greet("Wendy", "Japan");
greet("Norman", "England");
greet("Sam", "Argentina");