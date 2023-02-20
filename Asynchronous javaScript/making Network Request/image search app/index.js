let div=document.querySelector('div')
let input=document.querySelector('input')


 function handleInput(event){
   if(event.keyCode===13 && event.target.value){
    div.innerHTML=''
    let xhr=new XMLHttpRequest()
    xhr.open('GET',`https://api.unsplash.com/search/photos/?client_id=kc621S9pvOcQYVwyp9JTLhuMZvsf6HfvVfURdxYdExw&query=${event.target.value}`)
    xhr.onload=function(){
        let userData=JSON.parse(xhr.response)
        console.log(userData.results)
        userData.results.forEach(info=>{
            let figure=document.createElement('figure')
            let img=document.createElement('img')
            img.src=info.urls.small
            figure.append(img)
            div.append(figure)
        })
    }
    xhr.onerror=function(){
        console.log('something went wrong....')
    }
    xhr.send()
    event.target.value=''
   }
 }


input.addEventListener('keyup',handleInput)