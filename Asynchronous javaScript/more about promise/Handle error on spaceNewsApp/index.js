let newsBox=document.querySelector('.newsBox')
let select=document.querySelector('select')
let errorMessage=document.querySelector('.error')
let donut=document.querySelector('.donut')
let main=document.querySelector('main')

function handleError(message='Something went wrong x!'){
    main.style.display='none'
    errorMessage.innerHTML=message
  errorMessage.style.marginTop='100px'
}

function handleSpinner(status=false){
  if(status){
      newsBox.innerHTML=`<div class="flex-loader"><div class="donut"></div></div>`
  }
}

function createSearch(dataName){
  dataName.forEach(name=>{
    let option=document.createElement('option')
    option.innerText=name
    option.value=name
    select.append(option)
  })
}

function displayUI(data){
    newsBox.innerHTML=''
  data.forEach(info => {
    let img=document.createElement('img')
    let h2=document.createElement('small')
    let p=document.createElement('p')
    let button=document.createElement('a')
    let article=document.createElement('article')
    let figure=document.createElement('figure')
    article.className='articleBox'
    article.classList.add("flex")
    figure.className='flex-30'
    let news=document.createElement('div')
    news.className='flex-48'
    img.src=info.imageUrl
    img.alt=info.title
    h2.innerText=info.newsSite
    p.innerText=info.summary
    button.href=info.url
    button.innerText="Read More"
let buttonDiv = document.createElement("div")
  buttonDiv.className='buttonDiv'
  buttonDiv.append(button)
    figure.append(img)
    news.append(h2,p,buttonDiv)
    article.append(figure,news)
    newsBox.append(article)
  });
}

function init(){
  handleSpinner(true)
  fetch("https://api.spaceflightnewsapi.net/v3/articles?_limit=30")
.then((response)=>{
  console.log(response)
  if(!response.ok){
    throw new Error(`Response is not ok ❌!`)
  }
 return response.json()
})
.then((newsInfo)=>{
  let newsName=Array.from(new Set(newsInfo.map((name)=>{return name.newsSite})))
  createSearch(newsName)
  displayUI(newsInfo)
})
.catch((error)=>{
  handleError(error)
})
.finally(()=>handleSpinner())
}



select.addEventListener('input',(event)=>{
    console.log(event.target.value)
    fetch("https://api.spaceflightnewsapi.net/v3/articles?_limit=30")
.then((response)=>{
 return response.json()
})
.then((newsAllInfo)=>{
    // console.log(newsAllInfo)
    if(event.target.value=='Select a news source'){
        displayUI(newsAllInfo)
    }else{
        let newsNameInfo=newsAllInfo.filter(news=>{
           return news.newsSite==event.target.value
        })
        console.log(newsNameInfo)
        displayUI(newsNameInfo)
    }
}) 
})

if(navigator.onLine){
  init()
}else{
  handleError('Check your internet connection ❌!')
}
