// 1. Create a function `createUser` that accepts `name` and `age` and returns a new object with those properties.
function createUser(name,age){
    let obj={}
    obj.name=name
    obj.age=age
    return obj
}
// 2. Add a method named `sayHello` inside the object created above. When called it should alert `Welcome {user}`. Replace `{user}` with the name of the user.

function createUser(name,age){
    let obj={}
    obj.name=name
    obj.age=age
obj.sayHello= function(){
    alert(`Welcome {user}`)
}

    return obj
}

// 3. Use the data (name, age) of two different person to create the object using `createUser`. Store the returned value in `personOne` and `personTwo`.
function createUser(name,age){
    let person={}
    person.name=name
    person.age=age

    return person
}

let person1=createUser('ajay',25)
let person2=createUser('jay',28)

// 4. Change the code inside `createUser` in such a way that the methods `sayHello` doesn't have to be in all object. Use the prototypal nature. (Hint Object.create())
let userMethod={
    sayHello(user){
        alert(`Welcome {user}`)
    }

}

function createUser(name,age){
    let person=Object.create(userMethod)
    person.name=name
    person.age=age

    return person
}

let person1=createUser('ajay',25)
let person2=createUser('jay',28)

// 5. Convert the `createUser` function into Pseudoclassical pattern of object creation. Use `F.prototype` to store the methods. `F.prototype` means storing the methods in prototype property of the function.
function createUser(name,age){
    this.name=name
    this.age=age

    
}

createUser.prototype={
    sayHello(user){
        alert(`Welcome {user}`)
    }
}


let person1=createUser('ajay',25)
let person2=createUser('jay',28)



// 6. Use `new` to create two new objects with the data of two different person and re-assign the value of `personOne` and `personTwo`.
function createUser(name,age){
    this.name=name
    this.age=age

    
}

createUser.prototype={
    sayHello(user){
        alert(`Welcome {user}`)
    }
}


let person1=new createUser('ajay',25)
let person2=new createUser('jay',28)

// 7. Try calling `personOne.sayHello()` and `personTwo.sayHello()`. Check if you get the required output.
// personOne.sayHello();
// personTwo.sayHello();
// 8. Convert the `createUser` function into `User` class.

class user{
    constructor(name,age){
        this.name=name
        this.age=age
    }

    sayHello(){
        alert('hello worid')
    }
}

// 9. Check by creating two instance of the class using data of two different persons and re-assign the value of `personOne` and `personTwo`
let personOne=new user('ajay',25)
let personTwo=new user('jay',28)
// 10. Try calling `personOne.sayHello()` and `personTwo.sayHello()`. Check if you get the required output.
personOne.sayHello()
persontwo.sayHello()