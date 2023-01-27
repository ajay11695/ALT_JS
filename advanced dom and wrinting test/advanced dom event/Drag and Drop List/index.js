/*Create a drag and drop todo

Create a drag and drop list
You can add new item to the list
You should be able to drag and drop the items in the list
Follow this article (https://web.dev/drag-and-drop/) while creating this drag and drop list*/

let btn=document.querySelector('span')
let input=document.querySelector('input')
let ul=document.querySelector('ul')
// let lists=document.querySelectorAll('.draggable')





function addNewItem(){
    let add=input.value
    if(add!=''){
        input.value=''
        var li=document.createElement('li')
        li.setAttribute('draggable','true')
        li.classList.add('draggable')
        li.innerText=add
        ul.append(li)
    }

    dragAndDrop(lists)


}

btn.addEventListener('click',addNewItem)



