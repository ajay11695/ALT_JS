// Create the execution context diagram (include call stack) of the code below. Also add the image for execution context in the img folder.

function outer() {
  return inner();
}

function inner() {
  return 'Hello User ' + superAdmin();
}

function superAdmin() {
  return `I am super admin`;
}

console.log(outer());

// Create a execution context diagram (using call stack). Test the code in the dev tools (source tab). Inspect the call stack in the sources panel. After doing that take a screenshot and add to the folder named img. Also add the image for execution context
function a() {
  return 'Hello ' + b();
}

function b() {
  return 'Wor' + c();
}
function c() {
  return 'ld';
}

function final() {
  return a();
}

console.log(final());


// What will be the output of the code below:
console.log('First');
function secondCall() {
  console.log('Second');
}
secondCall();
console.log('Third');


// What will be the output of the code below and why:
console.log('First');
function secondCall() {
  console.log('Second');
}
setTimeout(secondCall, 1000);
console.log('Third');


// Create a function incrementEverySecond that console logs Count is: 0 and keep incrementing the value by one every second.
function incrementEverySecond() {
  // Your code goes here
  let count=0
  setInterval(()=>{
    count++
    console.log(`count is : ${count}`)
  },1000)
}
// incrementEverySecond()

// Change the above function in such a way that after 5 seconds there should not be any console. Use clearInterval.
function incrementEverySecond1() {
  // Your code goes here
  let count=0
  let id=setInterval(()=>{
    count++
    console.log(`count is : ${count}`)
    if(count>=5){
      clearInterval(id)
    }
  },1000)
}
// incrementEverySecond1()

// Write a function called callItEveryXSecForYSce that will accept three arguments: a function, interval, and duration. callItEveryXSecForYSce will execute the given function every interval number of second, but then automatically stop after duration milliseconds.
function callItEveryXSecForYSce(cb, interval, duration) {
  let id =setInterval(cb,interval)
  setTimeout(()=>{
    clearInterval(id)
  },duration)
}

// TEST
function sayHi() {
  console.log('Hey');
}
callItEveryXSecForYSce(sayHi, 100, 1000); // should print "Hey" ten time every 100 ms


// What will be the stack trace for the following code when it breaks.
function one(z) {
  console.trace('Execution Trace');
  throw new Error();
  
}
function second(y) {
  one(y + 1);
}
function third(x) {
  second(x + 1);
  
}

third(3);
// index.js:96 Execution Trace
// one	@	index.js:96
// second	@	index.js:101
// third	@	index.js:104
// (anonymous)	@	index.js:108


// You can also print the stask trace of any error by using error.stack. What will be the stack trace of the error.
// function one(z) {
//   const error = new Error();
//   console.log(error.stack);
// }
// function second(y) {
//   one(y + 1);
// }
// function third(x) {
//   second(x + 1);
// }
// third(3);


// What will happen to the call stack and execution when the code will be executed.
function add() {
  add();
}
add();