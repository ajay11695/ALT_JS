let TodoList = document.querySelector('.todo_list')
let Input = document.querySelector('input')

let baseUrl = 'https://basic-todo-api.vercel.app/api/'

let obj = {}

function handleEdit(e, title, id) {
    let input = document.createElement('input')
    e.target.parentElement.replaceChild(input, e.target)
    input.value = title
    input.addEventListener('keyup', (e) => {
        if (e.keyCode == 13 && e.target.value) {
            let data = {
                todo: {
                    title: e.target.value
                }
            }
            requestData('PUT',data,`todo/${id}`)
        }
    })
}

function handleToggle(id, status) {
    let data = {
        todo: {
            isCompleted: !status
        }
    }
    requestData('PUT',data,`todo/${id}`)
}

function handleDelete(id) {
    fetch(baseUrl + `todo/${id}`, {
        method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(() => displayTODO())
}

function createTodoUI(allData) {
    TodoList.innerHTML = ''
    allData.forEach((data, index) => {
        let li = document.createElement('li')
        let input = document.createElement('input')
        input.className = 'checkbox'
        input.type = 'checkbox'
        input.checked = data.isCompleted
        input.addEventListener('click', () => handleToggle(data._id, data.isCompleted))
        let h2 = document.createElement('h2')
        h2.innerText = data.title
        h2.addEventListener('dblclick', (e) => (handleEdit(e, data.title, data._id)))
        let p = document.createElement('p')
        p.innerText = '❌'
        p.addEventListener('click', () => handleDelete(data._id))
        let hr = document.createElement('hr')
        hr.style.border = '1px dotted black'
        li.append(input, h2, p)
        TodoList.append(li, hr)
    });
}

function displayTODO() {
    fetch(baseUrl + 'todo').then(res => res.json()).then((alltodo) => {
        createTodoUI(alltodo.todos)
        console.log(alltodo.todos)
        return alltodo.todos
    })
}

function requestData(request,data,urladd){
    fetch(baseUrl + urladd, {
        method: request, // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    }).then(res => res.json()).then(() => displayTODO())
}

function addTODO(event) {
    let inputValue = event.target.value
    if (event.keyCode === 13 && inputValue) {
        obj.todo = {}
        obj.todo.title = inputValue
        obj.todo.isCompleted = false
        requestData("POST",obj,'todo')
        event.target.value = ''
    }
}

Input.addEventListener('keyup', addTODO)

displayTODO()