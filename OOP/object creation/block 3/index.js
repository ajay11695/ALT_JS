// ## Create in all 4 formats

// - [ ] Using function to create object
// - [ ] Using Object.create (prototypal pattern)
// - [ ] Using Pseudoclassical Way
// - [ ] Using Class

// ## Requirements

// Create User (class/function) with the following properties.

// - [ ] properties (data):
//   - [ ] name
//   - [ ] id
//   - [ ] noOfProjects
// - [ ] methods:
//   - [ ] getProjects -> return number of project
//   - [ ] changeName -> accepts one parameter (newName)returns old user name
//   - [ ] incrementProject -> returns updated number of projects
//   - [ ] decrementProject -> returns updated number of projects

//  Using function to create object or Factory Pattern

// function createUser(name,id,noOfProjects){
//     let obj={}
//     obj.name=name
//     obj.id=id
//     obj.noOfProjects=noOfProjects
//     obj.getProjects=function(project){
//         this.noOfProjects=project
//         return this.noOfProjects
//     }
//     obj.changeName=function(newName){
//         this.name=newName
//         return this.name
//     }
//     obj.incrementProjects=function(value){
//         this.noOfProjects+=value
//         return this.noOfProjects
//     }
//     obj.decrementProjects=function(value){
//         this.noOfProjects-=value
//         return this.noOfProjects
//     }
//     return obj

// }

//Using Object.create (prototypal pattern)


//   let userMethod={
//     getProjects:function(project){
//         this.noOfProjects=project
//         return this.noOfProjects
//     },
//     changeName:function(newName){
//         this.name=newName
//         return this.name
//     },
//     incrementProjects:function(value){
//         this.noOfProjects+=value
//         return this.noOfProjects
//     },
//     decrementProjects:function(value){
//         this.noOfProjects-=value
//         return this.noOfProjects
//   }
// }

//   function createUser(name,id,noOfProjects){
//     let obj=Object.create(userMethod)
//     obj.name=name
//         obj.id=id
//         obj.noOfProjects=noOfProjects

//         return obj
//   }



// Using Pseudoclassical Way

function createUser(name,id,noOfProjects){
        
       this.name=name
           this.id=id
           this.noOfProjects=noOfProjects
    
            
      }

      createUser.prototype={
        getProjects:function(project){
                    this.noOfProjects=project
                    return this.noOfProjects
                },
                changeName:function(newName){
                    this.name=newName
                    return this.name
                },
                incrementProjects:function(value){
                    this.noOfProjects+=value
                    return this.noOfProjects
                },
                decrementProjects:function(value){
                    this.noOfProjects-=value
                    return this.noOfProjects
              }
      }

      let userOne=new createUser('ajay',2,50)

// Using Class

class user{
    constructor(name,id,noOfProjects){
        this.name=name
        this.id=id
        this.noOfProjects=noOfProjects
 
    }
           getProjects(project){
                this.noOfProjects=project
                return this.noOfProjects
            }
            changeName(newName){
                this.name=newName
                return this.name
            }
            incrementProjects(value){
                this.noOfProjects+=value
                return this.noOfProjects
            }
        decrementProjects(value){
                this.noOfProjects=this.noOfProjects-value
                return this.noOfProjects
            }
}


// to create the individual user;

let user1=new user('asvindra',1,40);
let user2= new user('arti',2,50);


//Test for user1
console.group(user1.name);
console.log('name:',user1.name);
console.log('id:',user1.id);
console.log('nOfProjects:',user1.noOfProjects);
console.log('changed Name:',user1.changeName('Asvindra Rajpoot'));
console.log('increment no of Projects:',user1.incrementProjects(1));
console.log('decrement no of Projects:',user1.decrementProjects(1));
console.groupEnd();

//Test for user1
console.group(user2.name);
console.log('name:',user2.name);
console.log('id:',user2.id);
console.log('nOfProjects:',user2.noOfProjects);
console.log('changed Name:',user2.changeName('Arti Rajpoot'));
console.log('increment no of Project:',user2.incrementProjects(1));
console.log('decrement no of Project:',user2.decrementProjects(1));
console.groupEnd();