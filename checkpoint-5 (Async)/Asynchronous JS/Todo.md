Explain the topics below in your own words. You can use diagrams, examples to explain


1.What does asynchronous means? Explain with multiple code examples.

Ans.  asynchronous means somthings that is not serialized or we can say that is not happenning in order.the piece of code that is not excuted line by line ius called asynchronous
for exp=

setTimeout=(()=>console.log('ram'),1000)

2.Give an example of code that can block the main thread for 10 seconds. Also check if we can convert the code in such a way that rather than going to the main thread it goes to callback queue. (HINT: wrap the code into setTimeout/promise)

ans.
 console.log('ram')
  setTimeout(()=>console.log('dheeraj').10*1000)

3.Explain the asynchronous architecture of JavaScript. Also write the job of each components.

ans.
 asynchronous archiotecture 0f javaScript comes into picture only when we have something asynchronous code in our programming 1. setTimeout 2. Promise 
promise() there are two things if comes into the code then asynchronous code take place . all code inside setTimeout is put inside callback queue and all code inside promise is put in microtask queue.
first event loop is check that call stack is empty or not if call stack is empty then first event loop go microtask queue which is fiunction  are execute after callback queue function execute 

4.What problem does promises solves? Explain by writing two examples.

ans.
promise can helps us which is to be done in future not in present ,it make sure that either it has happened or it has not happened ,it keeps track of both things 

for exp-
new Promise((resolve.reject)=>{
    setTimeout(()=>resolve('hello'),1000)
})

Promise.resolve(2)

5.JavaScript is single-threaded. Explain the statement.

ans.
it is true that it is single threaded language because at a time only one line  of code is executed that is why it is know as single threaded language