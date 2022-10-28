// # More about class

// - Create a class named `Square` which accepts one parameter `side` and will set two property `width` and `height` to the value of `side`.
class Square{
    constructor(side){
        this.width=side
        this.height=side
    }
}

// - Add a method name `description` that will alert a message saying `The square is ${width} x ${height}`
class Square{
    constructor(side){
        this.width=side
        this.height=side
    }

    description(){
        alert(`the square is ${this.width} x ${this.height}`)
    }
}

// - Create a method inside the class named `calcArea` that will return the area of the square.
class Square{
    constructor(side){
        this.width=side
        this.height=side
    }

    description(){
        alert(`the square is ${this.width} x ${this.height}`)
    }
     
    calcArea(){
        area=this.width*this.height
        return area
    }
}
// - Create a `area` getter method using which we can get the area of the square.
class Square{
    constructor(side){
        this.width=side
        this.height=side
    }

    description(){
        alert(`the square is ${this.width} x ${this.height}`)
    }
     
    get Area(){
        area=this.width*this.height
        return area
    }
}
// - Create a `area` setter method that will accept the area of the square. Based on the value of area it will set the value of `width` and `height`. If the passed value is not the area of the square alert say `Not a valid input`
class Square{
    constructor(side){
        this.width=side
        this.height=side
    }

    description(){
        alert(`the square is ${this.width} x ${this.height}`)
    }
     
    get Area(){
        area=this.width*this.height
        return area
    }

    set Area(value){
        let side=Math.sqrt(value)
        this.width=side
        this.height=side
    }
}
// - Create a static method named `isEqual` which accepts two `square` object with `width` and `height` property. If the area of both square is same it will return `true` or `false`.
class Square{
    constructor(side){
        this.width=side
        this.height=side
    }

    description(){
        alert(`the square is ${this.width} x ${this.height}`)
    }
     
    get Area(){
        area=this.width*this.height
        return area
    }

    set Area(value){
        let side=Math.sqrt(value)
        this.width=side
        this.height=side
    }

    static isEqual(a,b){
        return a.width*a.height==b.width*b.height
    }
}
// - Create another property named `numberOfTimes` that will hold the value of number of times the area property is accessed from the object. The values will initialize to `0`. The area property can't be accessed more than 4 times. If it crosses 4 times alert message `Upper Limit Reached`
class Square{
    constructor(side){
        this.width=side
        this.height=side
        this.numberOfTime=0
    }

    description(){
        alert(`the square is ${this.width} x ${this.height}`)
    }
     
    get Area(){
       this.numberOfTime++
       if(this.numberOfTime>=4){
        alert('Upper Limit Reached')
       }
    }

    set Area(value){
        let side=Math.sqrt(value)
        this.width=side
        this.height=side
    }

    static isEqual(a,b){
        return a.width*a.height==b.width*b.height
    }
}
// - Create two instance of the `Square` class
let sq1=new Square(12);
let sq2=new Square(24);
// - Check the `area` getter method on both square. Check the `area` property on one square more than 4 times.
sq1.area;
// - Check the `isEqual` method and pass the two instance you created above.
Square.isEqual(sq1,sq2);




// ## User Class

// - Create a `User` class that accepts `firstName` and `lastName` property
class User{
    constructor(firstName,lastName){
        this.firstName=firstName
        this.lastName=lastName
    }
}
// - Create a getter method named `fullName` that will return the full name of the person.
class User{
    constructor(firstName,lastName){
        this.firstName=firstName
        this.lastName=lastName
    }

    get fullName(){
        return this.firstName+this.lastName
    }
}
// - Create a `fullName` setter method that will accept full name parameter of the person. It will update the `firstName` and `lastName` based on the input. Say if the user passed `Arya Stark` it will update the `firstName` to `Arya` and `lastName` to `Stark`. It will also change one condition if the length of the name passed is less than 5 characters it will alert a message saying `Full name should be more than 5 characters`
class User{
    constructor(firstName,lastName){
        this.firstName=firstName
        this.lastName=lastName
    }

    get fullName(){
        return this.firstName+this.lastName
    }

    set fullName(name){
        if(name.length<5){
            alert(`Full name should be more than 5 characters`)
        }else{
            let firstName=name.spilit(' ')[0]
            let lastName=name.spilit(' ')[1]
            this.firstName=firstName
            this.lastName=lastName

            return `${this.firstName} ${thgis.lastName}`
        }
    }
}
// - Create a method named `nameContains` which will accept string and will return `true` or `false` based on if the name of the user contains the text that passed by user.
class User{
    constructor(firstName,lastName){
        this.firstName=firstName
        this.lastName=lastName
    }

    get fullName(){
        return this.firstName+this.lastName
    }

    set fullName(name){
        if(name.length<5){
            alert(`Full name should be more than 5 characters`)
        }else{
            let firstName=name.spilit(' ')[0]
            let lastName=name.spilit(' ')[1]
            this.firstName=firstName
            this.lastName=lastName

            return `${this.firstName} ${thgis.lastName}`
        }
    }

    nameContains (str){
        return `${this.firstName} ${this.lastName}`.includes(str)
    }
}
// - Create two instance of the `User` class
let user1= new User('ajay','Rajpoot');
let user2= new User('ajay','Rajpoot');
// - Check by using the `fullName` setter method with name bigger than 5 characters.
user1.fullName='asvindra';
// - Check by using the `fullName` setter method with name less than 5 characters.
user1.fullName='rajpoot';
// - Check the `fullName` using getter
user1.fullName;
// - Check the `nameContains` method
user1.nameContains('asv');