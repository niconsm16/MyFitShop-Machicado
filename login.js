
let signin = document.getElementById('login')

signin.submit = () => userType()



function userType(event) {

    event.preventDefault()

    let form = event.target

    let username = document.getElementById('user')
    let pass = document.getElementById('password')

    if ((username === 'admin') && (pass === 'admin')) {

        window.location = '/admin.html';
    } else {

        window.location = '/user.html';
    }
}


console.log("Events")