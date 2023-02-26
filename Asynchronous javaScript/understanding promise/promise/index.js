// `https://api.unsplash.com/search/photos/?client_id=kc621S9pvOcQYVwyp9JTLhuMZvsf6HfvVfURdxYdExw&query=${event.target.value}`

let input=document.querySelector('input')
let imageBox=document.querySelector('.image_box')

function displayId(searchData){
    imageBox.innerHTML=''
    searchData.results.forEach(info => {
        let figure=document.createElement('figure')
        let img=document.createElement('img')
        img.src=info.urls.thumb
        figure.append(img)
        imageBox.append(figure)
    });
}

function fetch(url){
    return new Promise((resolve,reject)=>{
        let xhr= new XMLHttpRequest()
        xhr.open('GET',url)
        xhr.onload=()=>{
            resolve(JSON.parse(xhr.response))
        }
        xhr.onerror=()=>{
            reject('something went wrong.....')
        }
        xhr.send()
    })
} 

input.addEventListener('keyup',(e)=>{
    if(e.keyCode==13 && e.target.value){
        let url=`https://api.unsplash.com/search/photos/?client_id=kc621S9pvOcQYVwyp9JTLhuMZvsf6HfvVfURdxYdExw&query=${e.target.value}`
    console.log(url)
    fetch(url).then((value)=>{displayId(value)}).catch((error)=>{
        alert('check your internet connection')
    })
    e.target.value=''
    }
})

