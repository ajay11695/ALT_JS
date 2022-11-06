class Person{
    constructor(name,age,gender){
        this.name=name;
        this.age=age;
        this.gender=gender;
    }
    eat(){
        console.log(`I am  ${this.name} I can eat `)
    }
    sleep(){
        console.log(`I am  ${this.name} I can sleep `)
    }
    walk(){
        console.log(`I am  ${this.name} I can walk `)
    }

}
class Player extends Person{
    constructor(sportsName,name,age,gender){
        super(name,age,gender)
        this.sportsName=sportsName;
    }
    play(){
        console.log(`I am  ${this.name} I can play `)
    }  
}

class Teacher extends Person{
    constructor(instituteName,name,age,gender){
        super(name,age,gender)
        this.instituteName=instituteName;
    }
   teach(){
        console.log(`I am  ${this.name} I can teach `)
    }  
}
class Artist extends Person{
    constructor(kind,name,age,gender){
        super(name,age,gender);
        this.kind=kind;
    }
   createArt(){
        console.log(`I am  ${this.name} I can create art `)
    }  
}

class Cricketer extends Player{
    constructor(sportsName,teamName,name,age,gender){
        super(sportsName,name,age,gender)
        this.teamName=teamName;
    }
   playCricket(){
        console.log(`I am  ${this.name} I can teach `)
    }  
}

let person=new Person('Asvindra',23,'m');
let player=new Player('fooball','Asvindra',23,'m');
let teacher=new Teacher('SBM','RAJESH',23,'m');
let artist=new Artist('hrror','jacks',24,'F');
let cricketer=new Cricketer('cricket','India','Dhoni',29,'m');