/*1. Create a promise. Have it resolve with a value of Promise Resolved! in resolve after a delay of 1000ms, using setTimeout. Print the contents of the promise after it has been resolved by passing console.log to .then
// Your code */

let resolved = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise resolved!'), 1000)
})
resolved.then( console.log)

/*2. Create another promise. Now have it reject with a value of Rejected Promise! without using setTimeout. Print the contents of the promise after it has been rejected by passing console.log to .catch
// Your code */
let rejected = new Promise((resolve, reject) => {
    reject('Rejected promise!')
})
rejected.catch( console.log)

/*3. Create another promise. Now have it reject with a value of Rejected Promise! without using setTimeout. Print the contents of the promise after it has been rejected by passing console.log to .catch and also use .finally to log message Promise Settled!.
// Your code */
let rejected2 = new Promise((resolve, reject) => {
    reject('Rejected promise!')
})
rejected2.catch((value) => console.log(value)).finally(()=>console.log('promise settled!'))

/*4. What will be the output of the code below.*/

console.log('A');

// Asynchronous code finises in 0 seconds (Callback Queue)
setTimeout(() => console.log('B'), 0); // callback queue

// A promise that resolves right away (Microtask Queue)
Promise.resolve().then(() => console.log('C'));

console.log('D'); 
// output 
// A
// D
// C
// B

/*5. Write a function named wait that accepts time in ms returns a promise. The promise gets resolved after given time.
// Your code */
 function wait(time){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('resolved!'),time)
    })
 }
wait(8000).then(console.log)

/*6. Do the following:
Create a new promise
Resolve with 21
Use .then and return adding 10 to the value you will get as parameter
Use .then and return adding 100 to the value you will get as parameter
Use .then and check if the value you get is greater than 100 throw new error with any message
Catch the error using .catch */
// Your code

let newPromise=new Promise((resolve,reject)=>resolve(21))
newPromise.then((value)=>{
    console.log(value)
    return value+10 
}).then((value)=>
     value+100
).then((value)=>{
    console.log(value)
    if(value>100){
        throw  new Error('bad value');
    }
}).catch((error)=>{
    console.error(error)
})

/*7. Do the following:
Create a new promise
Resolve the promise with ['A']
Use .then and concat B into the parameter and return
Use .then and return and object like {0: 'A', 1: 'B'}
Use .then and log the value */
// Your code

new Promise((resolve,reject)=>resolve(['A']))
.then((value)=>{
    console.log(value)
    return value.concat('B')
}).then((value)=>{
    console.log(value)
    return value.reduce(((acc,cv,i)=>{
        acc[i]=cv
        return acc
    }),{})
}).then((value)=>console.log(value))

/*8. Do the following:
Create a new promise named first and resolve it with 1
Use .then on first and return 2 also check the value you get access to by logging
Chain .then on above and return 3 also check the value you get access to by logging
Chain .then on above and return 4 also check the value you get access to by logging
// Your code */

let first=new Promise((resolve,reject)=>resolve(1))
first.then((value)=>{
    console.log(value)
    return 2
}).then((value)=>{
    console.log(value)
    return 3
}).then((value)=>{
    console.log(value)
    return 4
})

/*9. Do the following:
Create a new promise named first and resolve it with 1
Use .then on first and return 2 also check the value you get access to by logging
Use .then on first and return 3 also check the value you get access to by logging
Use .then on first and return 4 also check the value you get access to by logging
// Your code */
let first1=new Promise((resolve,reject)=>resolve(1))
first1.then((value)=>{
    console.log(value)
    return 2
})
first1.then((value)=>{
    console.log(value)
    return 3
})
first1.then((value)=>{
    console.log(value)
    return 4
})

// Try to understand the difference between the problem 8 and 9. Write your observation. in exp 8 we are trying to chain the output from above then that is used as next input in next then but in 9th exp we are using then separately so we will get the same output each time.


/*10. Do the following

Create a promise and resolve it with John
Use .then and return another promise that resolves with Arya
Use .then log the value you get access to and return another promise that resolves after 2000ms with value Bran
Use .then to log the value */
// Your code

new Promise((resolve,reject)=>resolve('John'))
.then((value)=>{
    console.log(value)
    return Promise.resolve('Arya')
}).then((value)=>{
    console.log(value)
    return new Promise((resolve,)=>{
    setTimeout(()=>resolve('Bran'),2000)
    })
}).then((value)=>console.log(value))