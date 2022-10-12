/*Write a higher-order function loop that provides something like a for loop statement. It takes a start value, a test function, an update function, and a body function.
Use the start value as the initial value for the loop
Passing the current value in test function can be used to determine when to stop the loop
When test is true/truthy execute the body function with the current value
After each iteration update the current value using update function passing the current value
You can use normal for loop for this function */

function loop(start,test_fn,update_fn,body_fn) {
  // Your code goes here
   for(let i=start;test_fn(i);i=update_fn(i)){
    body_fn(i)
   }

}

loop(
  3,
  (n) => n > 0,
  (n) => n - 1,
  console.log
);
// → 3
// → 2
// → 1

/*The function reduce takes an array and reduces the elements to a single value. For example it can sum all the numbers, multiply them, or any operation that you can put into a function.
Here's how it works. The function has an "accumulator value" which starts as the initialValue and accumulates the output of each loop. The array is iterated over, passing the accumulator and the next array element as arguments to the callback. The callback's return value becomes the new accumulator value. The next loop executes with this new accumulator value. In the example above, the accumulator begins at 0. add(0,4) is called. The accumulator's value is now 4. Then add(4, 1) to make it 5. Finally add(5, 3) brings it to 8, which is returned.*/

function reduce(array, callback, initialValue) {
  let acc=initialValue
  for(let i=0;i<array.length;i++){
    let cv=array[i]
    acc=callback(acc,cv)
  }

  return acc
  
}

// Test
var nums = [4, 1, 3];
var add = function (a, b) {
  return a + b;
};
reduce(nums, add, 0); //-> 8

/*Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs.*/
function intersection(...arrays) {
 let first=arrays[0]
 for(let i=0;i<arrays.length;i++){
  let second=arrays[i]
  first=first.filter(a=>second.includes(a))
 }

 return first

}

// Test
console.log(
  intersection(
    [5, 10, 15, 20],
    [15, 88, 1, 5, 7],
    [1, 10, 15, 5, 20]
  )
); // should log: [5, 15]

/*Construct a function union that compares input arrays and returns a new array that contains all elements. If there are duplicate elements, only add it once to the new array. Preserve the order of the elements starting from the first element of the first input array.*/
function union(...arrays) {

  let first=arrays[0]
  for(let i=0;i<arrays.length;i++){
   let second=arrays[i]
   first=first.filter(a=>!second.includes(a)).concat(second)
  }
 
  return first

}

// Test
console.log(
  union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5])
);
// should log: [5, 10, 15, 88, 1, 7, 100]