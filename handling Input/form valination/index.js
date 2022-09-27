let form=document.querySelector('.form')

let usernameerror=''

form.addEventListener('submit',function(event){
    event.preventDefault();
//   console.log(event.target.elements.username)

  let usernameele=event.target.elements.username;
 let parentele=usernameele.parentElement;

  if(usernameele.value===''){
    usernameerror="can't not empty"
    parentele.classList.add('error')
  }else if(usernameele.value.length<5){
    usernameerror="can't be less than five character"
    parentele.classList.add('error')
  }else if(!containNumber(usernameele.value)){
    usernameerror='must contain at least one number'
    parentele.classList.add('error')
  }else{
    usernameerror=' '
    parentele.classList.add('success')
    parentele.classList.remove('error')
  }

  usernameele.nextElementSibling.innerText=usernameerror
})

function containNumber(str){
    return str.split('').some(e=>Number(e))
}