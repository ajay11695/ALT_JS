let newsBox=document.querySelector('.newsBox')
let select=document.querySelector('select')


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

fetch("https://api.spaceflightnewsapi.net/v3/articles?_limit=30")
.then((response)=>response.json())
.then((newsInfo)=>displayUI(newsInfo)) 

select.addEventListener('input',(event)=>{
    console.log(event.target.value)
    fetch("https://api.spaceflightnewsapi.net/v3/articles?_limit=30")
.then((response)=>response.json())
.then((newsAllInfo)=>{
    console.log(newsAllInfo)
    if(event.target.value=='Select a news source'){
        displayUI(newsAllInfo)
    }else{
        let newsNameInfo=newsAllInfo.filter(a=>{
            // console.log(a.newsSite)
           return a.newsSite==event.target.value
        })
        displayUI(newsNameInfo)
    }
}) 
})