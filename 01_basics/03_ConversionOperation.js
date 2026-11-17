console.log("Hello World")

// let score = 33
// let score = "33abc"

// if score = null of too kya hoga 
// let score = null

// if score = undefined 
// let score = undefined

// if score = boolean \
let score = true

console.log(typeof score)
// both are same 
console.log(typeof (score))

let value = Number(score) // -> guranteed hai ki value number aaye gi 
console.log(typeof value)
console.log(value) // -> check kerte hai ki number ki kya value hai 


// basic conversion 
// "33" => 33
// "33abc" => NaN
// true => 1; false => 0


// let isLoggedIn = 1
// let isLoggedIn = "" // String is empty
let isLoggedIn = "Sittu" // String is not empty


let booleanIsLoggedIn =  Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// conversion 
// 1 => true ; 0 => false 
// "" => false
// "Sittu" => true

let Num = 33
let StringNumber = String(Num)
console.log(StringNumber)
console.log(typeof StringNumber)


// *****************************Operations************************
let values = 3;
let negValues = -values
console.log(negValues)

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
console.log(str3)

console.log("1" +  2);
console.log(1 +  "2");
console.log(1 + 2 +  "2");
// agar number first hai to value add hogi 
console.log("1" + 2 +  2);
// agar string first hai to value string hi hogi 
