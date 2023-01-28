const lodash=require('lodash')


let characters=['a','b','c','d']
let chunked=lodash.chunk(characters,2)
console.log(chunked)