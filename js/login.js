


//# Login

let form = document.getElementById('userLogin')

form.onsubmit = userType.bind(form)

function userType(e) {

    e.preventDefault()

    let b = document.getElementById('username')
    let c = document.getElementById('password')

    // Comprobación de usuario - Console Logs y Debuggers para ver que los datos se ingresan y registran correctamente

    if ((b.value === "admin") && (c.value === "admin")) {
        // Una forma de redirección .replace()
        location.replace("./pages/admin.html")
    } else {
        // Otra forma de redirección href =
        location.href = "./pages/user.html"
    }
}








