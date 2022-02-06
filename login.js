
//# Night Theme

let boton = document.getElementById('button')

boton.onclick = () => nightTh()

function nightTh() {

    let bodynt = document.getElementsByTagName("body")
    let logo = document.getElementById('logo')
    let signin = document.getElementById('signin')
    let signup = document.getElementById('signup')
    let rememberme = document.querySelector('#remember2')
    let regHere = document.querySelector('#regHere')
    let forgetPass = document.querySelector('#forgetPass')

    if (boton.value === '0') {

        //Version Nocturna

        bodynt[0].className = 'bg-zinc-900'

        logo.src = 'https://raw.githubusercontent.com/niconsm16/Myfit-Machicado/master/src/images/myfitlogo3.webp'

        signin.className = signin.className.replace(/(?:^|\s)text-gray-900(?!\S)/g, ' text-gray-100 ')
        signup.className = signup.className.replace(/(?:^|\s)text-gray-600(?!\S)/g, ' text-gray-300 ')
        rememberme.className = rememberme.className.replace(/(?:^|\s)text-gray-900(?!\S)/g, ' text-gray-400 ')

        regHere.className = regHere.className.replace(/(?:^|\s)text-green-600(?!\S)/g, ' text-verde ')
        forgetPass.className = forgetPass.className.replace(/(?:^|\s)text-green-600(?!\S)/g, ' text-verde ')

        let lunita = document.createElement('div')
        lunita.className = 'lunita'

        document.body.append(lunita)

        boton.innerHTML = 'Volvé a la vista clásica'
        boton.value = '1'

    } else {

        //Version de Dia

        bodynt[0].className = ''

        logo.src = "https://raw.githubusercontent.com/niconsm16/Myfit-Machicado/master/src/images/myfitlogo.webp"

        signin.className = signin.className.replace(/(?:^|\s)text-gray-100(?!\S)/g, ' text-gray-900 ')
        signup.className = signup.className.replace(/(?:^|\s)text-gray-300(?!\S)/g, ' text-gray-600 ')
        rememberme.className = rememberme.className.replace(/(?:^|\s)text-gray-400(?!\S)/g, ' text-gray-900 ')

        regHere.className = regHere.className.replace(/(?:^|\s)text-verde(?!\S)/g, ' text-green-600 ')
        forgetPass.className = forgetPass.className.replace(/(?:^|\s)text-verde(?!\S)/g, ' text-green-600 ')

        let lunita2 = document.getElementsByClassName('lunita')
        lunita2[0].remove()

        boton.innerHTML = 'Probá la versión nocturna'
        boton.value = '0'
    }
}

//# Login

let b = document.getElementById('username')
let c = document.getElementById('password')

let a = document.getElementById('submit')

a.onclick = () => userType()



function userType() {

    if ((b.value == '=admin') && (c.value == 'admin')) {

        window.location = 'https://www.youtube.com/';

    } else {

        window.location = '/pages/user.html';

    }
}

