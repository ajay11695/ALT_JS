// Practice Form Validation
// Rules for form validation:

// Username can't be less than 4 characters

// Name can't be numbers

// Email must contain the symbol @
// Email must be at least 6 characters
// Phone numbers can only be a number
// Length of phone number can't be less than 7
// Password and confirm password must be same.
// Messages for error:

// __ can't be less than __ characters (replace __ with field name)
// You can't use number in the name field
// Not a valid email
// Phone number can only contain numbers
// Once the form is valid it should alert User Added Successfully!

let form = document.querySelector('.form')

let errorMessage = {}

function displayError(naame) {
  
    form.elements[naame].nextElementSibling.innerText = errorMessage[naame]
    form.elements[naame].parentElement.classList.add('error')
}

function displaySuccess(naame) {
    form.elements[naame].nextElementSibling.innerText = ""
    console.log(  form.elements[naame].nextElementSibling,'dis')
    errorMessage[naame] = ''

    form.elements[naame].parentElement.classList.remove("error")
    form.elements[naame].parentElement.classList.add("success")
}

function handleform(event) {
    event.preventDefault()

    let elements = event.target.elements
    const username = elements.username.value
    const name = elements.name.value
    const email = elements.email.value
    const phone = elements.phone.value;
    const password = elements.password.value
    const passwordCheck = elements['confirm-password'].value
    console.log({ username, name, email, phone, password, passwordCheck })


    // if(username ==='' && name==='' && email ==='' && phone ==='' && password ==='' && passwordCheck ===''){
    //     alert('Can`t Submit Empty form')
    // }

    // Username can't be less than 4 characters
    if (username === '') {
        errorMessage.username = "Username can't be Empty"
        displayError('username');
    } else if (username.length < 4) {
        errorMessage.username = "Username can't be less than 4 characters"
        displayError('username');
    } else {
        displaySuccess('username');
    }

    // Name can't be numbers
    // if (name === '') {
    //     errorMessage.name = "name can't be Empty"
    //     displayError('name');
    // } else 
    if (!isNaN(name)) {
      
        errorMessage.name = "can't be number"
        displayError('name');
    } else {
        displaySuccess('name');
    }
    // Email must contain the symbol @
    // Email must be at least 6 characters
    if (!email.includes('@')) {
        errorMessage.email = "Email must contain the symbol @"
        displayError('email');
    } else if (email.length < 6) {
        errorMessage.email = "Email must be at least 6 characters"
        displayError('email');
    } else {
        displaySuccess('email');
    }
    // Phone numbers can only be a number
    // Length of phone number can't be less than 7
    if (isNaN(phone)) {
        errorMessage.phone = "Phone numbers can only be a number"
        displayError('phone');
    } else if (phone.length < 7) {
        errorMessage.phone = "Length of phone number can't be less than 7"
        displayError('phone');
    } else {
        displaySuccess('phone');
    }
    // Password and confirm password must be same.
    if (password !== passwordCheck) {
        errorMessage.password = "Password and confirm password must be same"
        displayError('password');
        displayError('passwordCheck');

    } else {
        displaySuccess('password');
        displaySuccess('passwordCheck');
    }

}

form.addEventListener('submit', handleform)
