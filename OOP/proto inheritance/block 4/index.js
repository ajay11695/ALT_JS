// # Inheritance

// Convert the below requirements into inheritance using:

// - Pseudoclassical Pattern
// - Class Pattern

// #### Animal

// Properties:

// - `location`
// - `numberOfLegs`

// Methods

// - `eat()` - log a message saying `I live in ${location} and I can eat`

// - `changeLocation(newLocation)` - accepts location and updates the location of the animal

// - `summary()` - returns `I live in ${location} and I have ${numberOfLegs}`

// #### Dog

// It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

// Properties:

// - `name`
// - `color`

// Methods:

// - `bark()` - alerts a message saying `I am ${name} and I can bark 🐶`
// - `changeName(newName)` - accepts the name property and updates the name of the dog
// - `changeColor(newColor)` - accepts the new color and updates the color of the dog
// - `summary()` - returns `I am ${name} and I am of ${color} color. I can also bark`

// #### Cat

// It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

// Properties:

// - `name`
// - `colorOfEyes`

// Methods:

// - `meow()` - alerts a message saying `I am ${name} and I can do mewo meow 😹`

// - `changeName(newName)` - accepts the name property and updates the name of the dog

// - `changeColorOfEyes(newColor)` - accepts the new color and updates the color of the dog

// - `summary()` - returns `I am ${name} and the color of my eyes are ${colorOfEyes}. I can also do meow meow`



 createAnimal.prototype={
    eat:function(){
        return (`I live in ${this.location} and I can eat`)
        
    },
    changeLocation:function(location){
        this.location=location
        return this.location
    },
    summary:function(){
        return `I live in ${this.location} and I have ${this.numberOfLegs}`
    }
}

function createAnimal(location,numberOfLegs){
    
    this.location=location
    this.numberOfLegs=numberOfLegs

}

// ****dog***
createAnimalDog.prototype={
   bark:function(){
    return `I am ${this.name} and I can bark 🐶`
   },
   changeName:function(name){
    this.name=name
    return this.name
  },
  changeColor:function(color){
    this.color=color
    return this.color
  },
  summary:function(){
    return `I am ${this.name} and I am of ${this.color} color. I can also bark`
  }
}


function createAnimalDog(name,color,location ,numberOfLegs){
createAnimal.call(this,location,numberOfLegs)
    
    this.name=name
    this.color=color

}

Object.setPrototypeOf(createAnimalDog.prototype,createAnimal.prototype)


// *****cat****
createAnimalCat.prototype={
    meow:function(){
     return `I am ${this.name} and I can do mewo meow 😹`
    },
    changeName:function(name){
     this.name=name
     return this.name
   },
   changeColorOfEyes:function(color){
     this.color=color
     return this.color
   },
   summary:function(){
     return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`
   }
}

  function createAnimalCat(name,color,location ,numberOfLegs){
    createAnimal.apply(this,[location,numberOfLegs])
    
    this.name=name
    this.colorOfEyes=color
    
}

Object.setPrototypeOf(createAnimalCat.prototype,createAnimal.prototype)

let animal=new createAnimal('delhi',4)
let dog= new createAnimalDog('tommy','black','kanpur',4)
let cat= new createAnimalCat('pusy','white','delhi',4)


console.group(animal)
console.log(animal.location)
console.log(animal.numberOfLegs)
console.log(animal.eat())
console.log(animal.changeLocation('rath'))
console.log(animal.summary())
console.groupEnd()

console.group(dog.name)
console.log(dog.name)
console.log(dog.location)
console.log(dog.numberOfLegs)
console.log(dog.eat())
console.log(dog.bark())
console.log(dog.changeLocation('jhansi'))
console.log(dog.changeName('kalu'))
console.log(dog.changeColor('red'))
console.log(dog.summary())
console.groupEnd()


console.group(cat.name)
console.log(cat.name)
console.log(cat.colorOfEyes)
console.log(cat.location)
console.log(cat.numberOfLegs)
console.log(cat.eat())
console.log(cat.meow())
console.log(cat.changeLocation('rath'))
console.log(cat.changeName('kalu'))
console.log(cat.changeColorOfEyes('red'))
console.log(cat.summary())
console.groupEnd()