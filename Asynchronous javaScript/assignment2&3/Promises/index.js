/*Assignment: Promises
(Discuss this block)*/

// Write a basic implementation of Promise.all that accepts an array of promises and return another array with the data coming from all the promises. Make sure if any of the Promise gets rejected throw error. Only when all the promises are fulfilled resolve the promise.

function promiseAll(promises) {
  return new Promise((resolve,reject)=>{
      let final=[]
      promises.forEach((promise,index)=>{
        promise.then((data)=>{
            final.push(data)
            if(promises.length=== index+1){
                resolve(final)
            }
        })
        .catch((error)=>reject(error))
      })

  })
}

// Test:
let times = [1, 2, 3, 4];
let timesPromise = times.map(
  (second) =>
    new Promise((res) => {
      setTimeout(() => res(Math.random()), second * 1000);
    })
);

promiseAll(timesPromise).then(console.log);


// Convert the code below to use promises to do the following.

// setTimeout(() => saySomething('10 seconds passed'), 10 * 1000);
function promiseTimeout(ms){
    return new Promise((res,rej)=>{
        setTimeout(()=>res('promise resolved!'),ms)
    })
}

promiseTimeout(10*1000).then(res=>console.log('10 second pased'))

// Make the code below log 1 and 2 rather than 2 and 1 using promises. You can only change one line of the code.

Promise.resolve().then((value)=>console.log(2));
console.log(1);

// Convert the data given below into a promise. Resolve it Immediately. Use .then to use the value and log it.
const user = {
  name: 'Arya Stark',
  house: 'Stark',
  nickname: 'No One',
};

Promise.resolve(user).then(console.log)

// Create a function named loadImage that can be used as follow. Use the following event listeners load and error to load the image. You can also create the image element using 'new Image()'. Resolve the promise when the image is loaded and reject it if something goes wrong.

function loadImage(url) {
  return new Promise((resolve,reject)=>{
      let img=new Image()
      img.addEventListener('load',()=>resolve(img))
      img.addEventListener('error',()=>reject(img))
      img.src=url
  })
}
loadImage('https://images.unsplash.com/photo-1614157510257-968fb5129989')
  .then((img) => {
    document.body.append(img);
    console.log(`w: ${img.width} | h: ${img.height}`);
  })
  .catch((err) => console.error(err));


// Create a function named getFirstName that returns a promise. When the promise is resolved it will return a value of {name: "Arya"}.

 function getFirstName(){
    return Promise.resolve({name:"Arya"})
}

// Create a function named getLastName that returns a promise. When the promise is resolved it will return a value of {name: "Stark"}.

function getLastName(){
    return Promise.resolve({name:"Stark"})
}

// Create another function named getFullName which returns a promise. And when the promise is resolved it will return the full name that you will get by resolving the promises from the above two functions.

function getFullName(){
    return Promise.all([getFirstName(),getLastName()])
    .then((res)=>{
      let fullname= res.map(n=>n.name).join(' ')
      console.log(fullname)
    })
}

getFullName()