/*Write the function in index.js file and also write the test in index.test.js file for the following functions. While writing test make sure you write at-least 3 positive and 3 negative test.

Positive Test verifies expected behavior with valid data.
Negative Test verifies expected behavior with invalid data.
Edge Case is a subset of positive tests, which checks the extreme edges of valid values.*/

// Write a function named getFullName that accepts two input firstName and lastName and return the fullName

function getFullName(firstName,lastName){
    return  `${firstName} ${lastName}`
}

// Write a function named isPalindrome that accepts one input returns true or false based on wether the value passed is palindrome or not.

function isPalindrome(str){
    let revStr=(str.split('').reverse()).join('')
   
     return str===revStr
}

// Create 2 functions that calculate properties of a circle, using the definitions here.
 const PI=3.14;

/*Create a function called getCircumfrence:
Pass the radius of a circle to the function and it returns the circumference based on the radius, and output The circumference is NN.*/

function getCircumfrence(radius){
    return `This is ${2*PI*radius}`
}

/*Create a function called getArea:
Pass the radius to the function and it returns the area based on the radius, and output The area is NN.*/

function getArea(radius){
    return  `This is ${PI*(radius**2)}`
}

module.exports={
    getFullName,
    isPalindrome,
    getCircumfrence,
    getArea
}