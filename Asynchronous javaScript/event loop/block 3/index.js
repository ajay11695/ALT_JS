// Create the execution context diagram that includes call stack, event loop, callback queue. Also write the output of the each code snippet.

1.

function sayHello() {
  console.log('Hey You Called Me');
}
setTimeout(sayHello, 1000);

console.log('Hey You!');
//'Hey You'   0ms
//'Hey You Called Me'    1000ms

2.

function sayHello() {
  console.log('Hey You Called Me');
}

setTimeout(sayHello, 0);

console.log('Hey You!');
// 0ms - 'Hey Ypou'
// 0ms - 'Hey You Called You!'

3.

function main() {
  console.log('A');
  setTimeout(function display() {
    console.log('B');
  }, 0);
  console.log('C');
}
main();
// 0ms 'A'
// 0ms 'C'
// 0ms 'B'


4.

function runWhileLoopForNSeconds(sec) {
  let start = Date.now(),
    now = start;
  while (now - start < sec * 1000) {
    now = Date.now();
  }
}
function main() {
  console.log('A');
  setTimeout(function exec() {
    console.log('B');
  }, 0);
  runWhileLoopForNSeconds(3);
  console.log('C');
}
// 0ms "A"
//3000ms "C"
//3000ms 'B'

// Look at the output of the code below to understand how code is executing
function runWhileLoopForNSeconds(sec) {
  let start = Date.now(),
    now = start;
  while (now - start < sec * 1000) {
    now = Date.now();
  }
}
function main() {
  var current = Date.now();
  console.log('A', Date.now() - current);
  setTimeout(function exec() {
    console.log('B', Date.now() - current);
  }, 1000);
  runWhileLoopForNSeconds(3);
  console.log('C', Date.now() - current);
}

main();
//  "A" 0
// "C" 3000
// 'B' 3000