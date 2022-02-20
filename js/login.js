//# Login

// Mensaje de alerta si se trató de ingresar a otra página
toastError()

// Si se trata de acceder al login desde un usuario ya logueado redirecciona a su respectiva página

if ((localStorage.getItem('myfitusr')) !== null) {
    checklog()
}

// Obtengo datos del formulario

let form = document.getElementById('userLogin')

form.onsubmit = userType.bind(form)

function userType(e) {
    //Prevengo acción por default del formulario
    e.preventDefault()

    // Guardo el user y admin

    let b = document.getElementById('username')
    let c = document.getElementById('password')

    // Comprobación de usuario

    if ((b.value === "admin") && (c.value === "admin")) {
        // Una forma de redirección .replace()
        location.replace("../pages/admin.html")
    } else {
        // Otra forma de redirección href =
        location.href = "../pages/user.html"
    }
    // Almaceno en memoria al user para mantener sesión abierta hasta que él cliquee en logout, navegador cerrado mantiene valores
    localStorage.setItem('myfitusr', b.value)
    localStorage.setItem('myfitpass', c.value)
}





