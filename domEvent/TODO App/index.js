let rootEle = document.querySelector('.todo_list')
let input = document.querySelector('input')
let buttonBox = document.querySelector('.button_box')
let right = document.querySelector('#rr')
let bdiv = document.querySelector('.bdiv')


let allTodos = JSON.parse(localStorage.getItem('todos')) || []
let btn='all'

function deleteTodo(id) {
    allTodos = allTodos.filter((todo) => todo.id != id)

    allTodos.map((elm, i) => elm.id = i)
    localStorage.setItem('todos', JSON.stringify(allTodos))

    if (btn === 'all') {
        displayUI(allTodos)
    }

    if (btn === 'active') {
        let d = filterBtn(allTodos, false)
        displayUI(d)
    }

    if (btn === 'completed') {
        let d = filterBtn(allTodos, true)
        displayUI(d)
    }
}

function handleToggle(e) {
    let id = e.target.dataset.id
    allTodos[id].isDone = !allTodos[id].isDone
    localStorage.setItem('todos', JSON.stringify(allTodos))
    btn='all '
    displayUI()
}

function handleBlur(e, para, id) {
    e.target.parentElement.replaceChild(para, e.target)
    para.innerText = e.target.value
    allTodos = allTodos.filter((elm, i) => {
        if (elm.id === id) {
            elm.name = e.target.value
            elm.id = i
            return elm
        }
        elm.id = i
        return elm
    })

    localStorage.setItem('todos', JSON.stringify(allTodos))

    displayUI(allTodos)
}
//  handle double

function handleDouble(e, id) {
    let val = e.target.innerText
    let input = document.createElement('input')
    let p = e.target
    e.target.parentElement.replaceChild(input, p)
    input.value = val

    // input.addEventListener('blur', (e) => handleBlur(e, p, id))
    input.addEventListener('keyup', (e) => {
        if (e.keyCode === 13 & e.target.value != '') {
            e.target.parentElement.replaceChild(p, e.target)
            p.innerText = e.target.value
            allTodos = allTodos.filter((elm, i) => {
                if (elm.id === id) {
                    elm.name = e.target.value
                    elm.id = i
                    return elm
                }
                elm.id = i
                return elm
            })
            localStorage.setItem('todos', JSON.stringify(allTodos))
            displayUI(allTodos)
        }
    })
}


// display UI
function displayUI(alldata = allTodos) {
    rootEle.innerHTML = ''
    alldata.forEach((todo, i) => {
        let input = document.createElement('input')
        input.type = 'checkbox'
        input.checked = todo.isDone
        input.setAttribute('data-id', i)
        input.addEventListener('change', handleToggle)

        let p = document.createElement('p')
        p.innerText = todo.name
        p.addEventListener('dblclick', (e) => handleDouble(e, todo.id))
        todo.isDone ? p.classList.add('overline') : p.classList.remove('overline');

        let span = document.createElement('span')
        span.innerText = '❌'
        span.setAttribute('data-id', i)
        span.addEventListener('click', () => deleteTodo(todo.id))

        let hr = document.createElement('hr')

        let li = document.createElement('li')
        li.className = 'flex'
        li.append(input, p, span)
        rootEle.append(li, hr)
        // displayButtonUI()

    })

    right.style.display = 'inline'
    alldata.length > 0 ? displayButtonUI() : buttonBox.style.display = 'none'
}

// handle input
function handleInput(event) {

    if (event.keyCode === 13 & event.target.value != '') {
        let todo = {
            name: event.target.value,
            isDone: false,
        }

        if (allTodos.length === 0) {
            todo.id = 0
        } else {
            allTodos.forEach((t, i) => {
                todo.id = ++i
            })
        }

        allTodos.push(todo)

        localStorage.setItem('todos', JSON.stringify(allTodos))
        displayUI(allTodos)
        buttonBox.style.display = 'flex'

        event.target.value = ''
    }
}

input.addEventListener('keyup', handleInput)

function filterBtn(data, bool) {
    if (bool) {
        return data.filter((todo) => todo.isDone)
    } else {
        return data.filter((todo) => !todo.isDone)
    }
}
// display button UI
function displayButtonUI() {
    buttonBox.innerHTML = ''

    let item = document.createElement('a')
    let countItem = filterBtn(allTodos, false)
    item.innerText = `${countItem.length} item left`
    let all = document.createElement('a')
    all.addEventListener('click', () => {
        btn = 'all'
        displayUI(allTodos)
    })
    all.innerText = 'All'
    let active = document.createElement('a')
    active.innerText = 'Active'
    active.addEventListener('click', () => {
        let activeTodo = filterBtn(allTodos, false)
        btn = 'active'
        displayUI(activeTodo)
    })
    let completed = document.createElement('a')
    completed.innerText = 'Completed'
    completed.addEventListener('click', () => {
        let completedTodo = filterBtn(allTodos, true)
        btn = 'completed'
        displayUI(completedTodo)
    })
    let clear = document.createElement('a')
    clear.innerText = 'Clear Completed'
    clear.className = 'clear_completed'
    clear.addEventListener('click', () => {
        allTodos = filterBtn(allTodos, false)
        allTodos.map((elm, i) => elm.id = i)
        localStorage.setItem('todos', JSON.stringify(allTodos))
        displayUI(allTodos)
    })

    function handleClear() {
        let show = allTodos.some((todo) => todo.isDone == true)
        if (show) {
            clear.style.display = 'block'
        }
    }
    handleClear()

    function updateBtn(){
        all.classList.remove('selected')
        active.classList.remove('selected')
        completed.classList.remove('selected')
        if(btn=='all'){
            all.classList.add('selected')
        }else if(btn=='active'){
            active.classList.add('selected')
        }else if(btn=='completed'){
            completed.classList.add('selected')
        }
    }
    updateBtn()

    buttonBox.append(item, all, active, completed, clear)
}

right.addEventListener('click', () => {
    if (allTodos.every((todo) => todo.isDone == true)) {
        allTodos.forEach((todo) => todo.isDone = false)

    } else {
        allTodos.forEach((todo) => todo.isDone = true)
    }

    displayUI()
})

