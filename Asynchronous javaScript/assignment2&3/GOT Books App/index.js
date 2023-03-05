let rootEle=document.querySelector('.books')
let booksUI=document.querySelector('.booksUI')
let characterList=document.querySelector('.characterList')
let button=document.querySelector('button')
let main=document.querySelector('main')
let Flist=document.querySelector('.Flist')


let url='https://www.anapioficeandfire.com/api/books'

function handleError(error){
    main.innerHTML=error
    main.style.textAlign='center'
    main.style.fontSize='30px'
    main.style.color='red'
}

function createSpinner(spinnerBox,spinner=false){
    if(spinner){
        spinnerBox.innerHTML=`<div class="flex"><div class="donut"></div></div>`
    }
}

 function characterUI(characters){
    createSpinner(Flist,true)
    Promise.all(characters.map((character)=>{
       return fetch(character).then((res)=>res.json())
    }))
    .then((characterData)=>{
        Flist.innerHTML=''
        characterData.forEach((char)=>{
            let p=document.createElement('p')
            p.className='characterName'
         p.innerText=`${char.name}: (${char.aliases.join('')})`
         Flist.append(p)
        })
    })
    
 }

function createUI(allbooks){
    rootEle.innerHTML=''
      allbooks.forEach((book)=>{
        let bookBox=document.createElement('div')
        bookBox.className='bookBox'
        let h2=document.createElement('h2')
        h2.innerText=book.name
        let p=document.createElement('p')
        p.innerText=book.authors[0]
        let a=document.createElement('a')
        a.innerText=`Show Characters (${book.characters.length})`
        a.addEventListener('click',()=>{
            booksUI.style.display='none'
            characterList.style.display='block'
             
            characterUI(book.characters)
            // book.characters.forEach((characterUrl)=>{
            //     fetch(characterUrl).then((res)=>res.json())
            //     .then((characterData)=>characterUI(characterData))
            // })
        })

        bookBox.append(h2,p,a)
        rootEle.append(bookBox)
      })
}

function init(){
    createSpinner(rootEle,true)
    fetch(url).then((response)=>{
        console.log(response)
        if(response.ok){
           return response.json()
        }else{
            throw new Error('something went wrong ❌!')
        }
    }).then((books)=>{
        console.log(books)
        createUI(books)
    }).catch((error)=>handleError(error))
}

init()

button.addEventListener('click',()=>{
    booksUI.style.display='block'
    characterList.style.display='none'
})