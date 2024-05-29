/* 
const RollNo="2022UCB6050"
let Name="Kartikeya"
let CGPA=10
console.log(RollNo[0])
console.log(typeof null)   //O/P=> object(Null is itself a atandalone value)
console.log(typeof NaN)

let a=""
let b=Boolean(a)
console.log(b) 
let a=5
let b=Number("5")
console.log(a+b)
console.log(`Hello my name is KSM, I am ${a+15} years old`)  


*/
//Maps
/*
const map= new Map()
map.set("IN","INDIA")
map.set("US","UNITED STATES OF AMERICA")
map.set("FR","FRANCE")
map.set("IN","INDIA")

for (let [key,value] of map){
    console.log(key)
}
*/

/*String

const c="Hello World      "
console.log(c)
console.log(c.length)
console.log(c.toLowerCase())
console.log(c.toUpperCase())
console.log(c.charAt(2))
console.log(c.indexOf("o"))
console.log(c.trim())
*/


/*Numbers

let num=1500.156456
console.log(num.toFixed(2))
console.log(num.toPrecision(5))
console.log(num.toExponential(2))
num=1500000
console.log(num.toLocaleString("en-US"))
console.log(num.toLocaleString("en-IN")) 
*/


/*Math
console.log(Math.abs(-4))
console.log(Math.round(4.6))
console.log(Math.ceil(4.6))
console.log(Math.floor(4.6))
console.log(Math.ceil(Math.PI))
console.log(Math.floor(Math.random()*10)+1)  //Random No Generator

//To generate a random number between a range (10 to 20)
const min=10
const max=20
console.log(Math.floor(min+(Math.random()*(max-min+1))))  //Random No Generator
*/

/* Date and Time

let myDate= new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString("en-US"))
console.log(myDate.toLocaleDateString("en-IN"))
console.log(myDate.toLocaleString("en-US"))
console.log(myDate.toLocaleString("en-IN"))
console.log(myDate.toLocaleTimeString("en-US"))
console.log(myDate.toLocaleTimeString("en-IN"))
console.log(myDate.getTime())  //To get the time taken from starting of time in JS(1 Jan 1970)

let myCreatedDate=new Date(2023, 0, 23)
console.log(myCreatedDate.toLocaleString())

let myTimpStamp=Date.now()
console.log(myTimpStamp)
*/

/*Arrays

const Arr=[1,2,3,4,5,6,7,8,9]
Arr.push(10)
Arr.push(11)
console.log(Arr)
Arr.pop()
console.log(Arr)
Arr.unshift(0)
console.log(Arr)
Arr.shift()
console.log(Arr)
console.log(Arr.indexOf(19))
console.log(Arr.slice(1,3)) //(star,end-1)
console.log(Arr.splice(3,3,10,20,30))  //(start, length, new elements)
console.log(Arr)
let Arr1=[1,2,3,4,5]
let Arr2=[6,7,8,9,10]
Arr1=Arr1+Arr2
console.log(typeof Arr1) 

Arr1=[1,2,3]
Arr2=[4,2,3]
arr4=Arr1.concat(Arr2)
console.log(arr4)
console.log(Arr1)
const arr3=[...arr1,...arr2]  //Spread opperator
console.log(arr3)  

*/




/*Objects */

//Objects Literals
/* 
//Object 1
const JSUser={
    name: "KSM",
    batch: "CSDA",
    yearOfPassing: "2026",
    email: "kartikeya.mishra.ug22@nsut.ac.in",
    isLogin: false,
    lastLogin: ["Monday","Sunday"]
}
console.log(JSUser.name)
console.log(JSUser["name"])
JSUser.name="Kartikeya"
console.log(JSUser["name"])
//Object.freeze(JSUser)
JSUser.name="KSM"
console.log(JSUser["name"])
//console.log(JSUser)

JSUser.greeting=function(){
    console.log(`Namaste JS Users ${this.name}`)
}

JSUser.greeting() */


//Object 2

/* const tinder={}
tinder.userID="123abc"
tinder.name="KSM"
tinder.isLoggedIn=false


const User={
    userID: "KSM16",
    name: {
        firstName: "Kartikeya",
        middleName: "Shankar",
        lastName: "Mishra"
    }

}

console.log(User.name.firstName)
console.log(User["name"]['firstName'])

const obj3=Object.assign({} ,tinder, User)   //Concatinate 2 objects  [But takes the second value for common keys (like userID=KSM16 not abc123)]
const obj4={...tinder,...User}  //COncatinate using spread method [BEST]
console.log(obj3)
console.log(obj4)


console.log(Object.keys(tinder))
console.log(Object.values(tinder))
console.log(Object.entries(tinder))
console.log(tinder.hasOwnProperty("isLoggedIn"))
console.log(tinder.hasOwnProperty("isLogged"))

*/


//Object 3  Deconstruction [TypeDeff]
/* 
const course={
    course: "JavaScript",
    price: 0,
    courseInstructor: "Chai aur Code"
}
//const {courseInstructor}=course
//console.log(courseInstructor)
const {courseInstructor: instructor}=course
console.log(instructor)
*/


//Function
/* 
function sum(a=0,b=0){
    return a+b
}

console.log(sum())
console.log(sum(5,2))

function greet(){
    console.log("Namaste")
}
greet()

function calculateTotal(...price){
    return price
}
console.log(calculateTotal(100,200,300))
 */

//Passing an object in a function
/* 
const user={
    userName: 'KSM',
    age: 20
}

function handlObject(obj){
    console.log(`Namaste ${obj.userName} your age is ${obj.age}`);
}

handlObject(user) */

//Scopes

/*
let a=10 //Supports scope, Cannot be redefined, Can be reassign, Supports Hoisting[Cannot be used before declaring]
var b=10 // Does not support scope, Can be redefined, Can be reassign
const c=10 //Supports scope, Cannot be redefined, Cannot be reassign, Supports Hoisting[Cannot be used before declaring]

var a=10
console.log(a)
var a=100
console.log(a)
*/

//Arrow Functions
/* 
const user={
    userName: "KSM",
    price: 999,
    welcome: function(){
        console.log(`Welcome ${this.userName} to our website`)
        //console.log(this)
    }
}

user.welcome()
console.log(this)

 */
/*
function chai(){
    let userName="KSM"
    console.log(this.userName)
}
chai()

function addTwo= (num1, num2)=>{
    return num1+num2
}
function addThree= (num1, num2, num3)=>(return num1+num2+num3)



*/

//Immediately Invoked Function (IIF) [To prevent our function from polluton of Global scope]
/* 
(function chai(name){
    console.log("Hello")
})("KSM");

 */

//ControlFlow
/* 
if(true){
    console.log("Namaste");
}

//Falsy values => [0,-0, 0n, false, "",'', null, undefined, NaN]
//Truthy values => U-Falsy Values
 */

//Loops

/* for (let i=1;i<=20;i++){
    console.log("\n")
    console.log(`${i}'s table`)
    for (let j=1;j<=10;j++){
        console.log(`${i} X ${j} = ${i*j}`)
    }
} 
let i=1
while (i<=10){
    console.log(i)
    i++
}

let arr=["KSM","VSM","Hello","Namaste"]
for (let i in arr){
    console.log(i)
}
for (let i of arr){
    console.log(i)
}

const obj={
    js: "JavaScript",
    cpp: "C++",
    py: "Python"
}

for (i in obj){
    console.log(obj[i])
}
*/
//Call back function using forEach
/* 
const arr=[10,20,30,40,50]

arr.forEach( function (values){
    console.log(values)
})
arr.forEach( (values,index, arr1)=>{
    console.log(values,index,arr1)
})
 */

//Call back function using filters
//Call back function using maps
//Call back function using reduce