let input=document.querySelector('input')
let userImg=document.querySelector('.user_img')
let username=document.querySelector('.userName')
let userId=document.querySelector('.user_id')
let followerDiv=document.querySelector('.follower_div')
let followingDiv=document.querySelector('.following_div')
// let follower=document.querySelectorAll('.follower_img img')
// let following=document.querySelectorAll('.following_img img')
let button=document.querySelector('button')
let footerImg=document.querySelector('.footer_img img')

// function displayFollower(username){
//     let xhr=new XMLHttpRequest()
//     xhr.open('GET',`https://api.github.com/users/${username}/followers`)
//     xhr.onload=function(){
//         let followerData=JSON.parse(xhr.response)
//         follower[0].src=followerData[0].avatar_url
//         follower[1].src=followerData[1].avatar_url
//         follower[2].src=followerData[2].avatar_url
//         follower[3].src=followerData[3].avatar_url
//         follower[4].src=followerData[4].avatar_url
//     }
//     xhr.onerror=function(){
//         console.log('something went wrong.....')
//     }
//     xhr.send()
// }
// function displayFollowing(username){
//     let xhr=new XMLHttpRequest()
//     xhr.open('GET',`https://api.github.com/users/${username}/following`)
//     xhr.onload=function(){
//         let followingData=JSON.parse(xhr.response)
//         following[0].src=followingData[0].avatar_url
//         following[1].src=followingData[1].avatar_url
//         following[2].src=followingData[2].avatar_url
//         following[3].src=followingData[3].avatar_url
//         following[4].src=followingData[4].avatar_url
//     }
//     xhr.onerror=function(){
//         console.log('something went wrong.....')
//     }
//     xhr.send()
// }

// function handleInput(event){
//     // console.log(event.target.value)
//     // console.log(event.keyCode)
// if(event.keyCode===13 && input.value){
//     let xhr=new XMLHttpRequest()
//     xhr.open('GET',`https://api.github.com/users/${input.value}`)
// xhr.onload=function(){
//     let userData=JSON.parse(xhr.response)
//     console.log(userData)
//     userImg.src=userData.avatar_url
//     username.innerText=userData.name
//     userId.innerText=userData.login

//    displayFollower(userData.login)
//    displayFollowing(userData.login)
// }

// xhr.onerror=function(){
//     console.log('something went wrong.....')
// }
// xhr.send()
// input.value=''
// }

// }

function fetchData(url,successful){
    let xhr=new XMLHttpRequest()
    xhr.open('GET',url)
    xhr.onload=function(){
        successful(JSON.parse(xhr.response))
    }
    xhr.onerror=function(){
        console.log('something went wrong....')
    }
    xhr.send()
}

function displayFollow(url,RootEle){
    RootEle.innerHtml=''
     fetchData(url,function(followList){
        let topFive=followList.slice(0,5)
        topFive.forEach(ele=>{
            let figure=document.createElement('figure')
            let img=document.createElement('img')
            img.src=ele.avatar_url
            figure.append(img)
            RootEle.append(figure)
        })
     })
}

function displayUI(userData){
    userImg.src=userData.avatar_url
    username.innerText=userData.name
    userId.innerText='@'+userData.login
    displayFollow(`http://api.github.com/users/${userData.login}/followers`,followerDiv)
    displayFollow(`http://api.github.com/users/${userData.login}/following`,followingDiv)
}

function handleInput(event){
    if(event.keyCode===13 && input.value){
        let url='https://api.github.com/users/'
        let username=input.value
        fetchData(url+username,displayUI)
       input.value=''
    }

}

input.addEventListener('keyup',handleInput)


function handleChange(){
    let xhr=new XMLHttpRequest()
    xhr.open('GET','https://api.thecatapi.com/v1/images/search?limit=1&size=full')
    xhr.onload=function(){
        let data=JSON.parse(xhr.response)
        console.log(xhr.response)
        footerImg.src=data[0].url
     
    }
    xhr.onerror=function(){
        console.log('something went wrong.....')
    }
    xhr.send()
  
}


button.addEventListener('click',handleChange)