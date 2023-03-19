// Convert the following code based on the expected output. You will get the output right now and the expected output. Right now the output of the code is in (Output right now) and the output we want is in (Expected output). Convert the code accordingly.

// 1.....

const gods = ['Apollo', 'Artemis', 'Ares', 'Zeus'];

/* console.log('First!');
gods.forEach(function (name) {
  console.log(name);
});
console.log('Last!'); */

// Output right now

// First!
// Apollo
// Artemis
// Ares
// Zeus
// Last!

console.log('First!')
setTimeout(()=>gods.forEach(function (name) {
    console.log(name);
  }),0)
  console.log('Last!');

// Expected output

// First!
// Last!
// Apollo
// Artemis
// Ares
// Zeus


/* 2......

function second() {
  console.log('This is second function!');
}
function first() {
  console.log('First!');
  second();
  console.log('Last!');
}
first();   */

// Output right now

// First!
// This is second function
// Last!

// Expected output

// First!
// Last!
// This is second function

function second() {
    console.log('This is second function!');
  }
  function first() {
    console.log('First!');
   setTimeout(() => {
     return second()
   }, 0); 
    console.log('Last!');
  }
  first();



/*  3.....

function getUserInfo(cb) {
  setTimeout(() => {
    cb({ name: 'Arya Stark!' });
  }, 2000);
}

getUserInfo((user) => console.log(user.name));
console.log('First');    */

// Output right now

// First!
// Arya Stark!

// Expected output

// Arya Stark!
// First!

function getUserInfo(cb) {
    setTimeout(() => {
      cb({ name: 'Arya Stark!' });
    }, 2000);
  }
  
//   getUserInfo((user) => console.log(user.name));
  
//   setTimeout(()=>console.log('First!'),3000)



// Below there are two code snippets. Do the following:
// Write the output of the code along with the reason
// Look at the code snippet 1, 2 and 3. Explain why the code in 1 throws error but 2 and 3 gives you an output.
// What's the difference between the approach of 1, 2 and 3
// Explain what's happening in all these three code snippet in your words.
//  
// 1....

function getUserInfo() {
  setTimeout(() => {
    return { name: 'Arya Stark!' };
  }, 000);
}

const user = getUserInfo();
// console.log(user.name); // output
// cannot read properties of undefined(reading 'name) because getUserInfo return after 2sec but here console.log is getting first


// 2.....

function getUserInfo(cb) {
  setTimeout(() => {
    cb({ name: 'Arya Stark!' });
  }, 2000);
}

getUserInfo((user) => console.log(user.name)); // output
// Arya Stark!


// 3....

function getUserInfo(cb) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res({ name: 'Arya Stark!' });
    }, 2000);
  });
}

getUserInfo().then((user) => console.log(user.name)); // output
// Arya Stark!