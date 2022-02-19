function checklog() {
    //# Comprobar si está logueado

    //Verifico la existencia de sesión iniciada

    let sessionExists = localStorage.getItem('myfitusr')
    let recogPath = window.location.pathname

    if (sessionExists == null) {

        if ((recogPath === '/pages/admin.html') || (recogPath === '/pages/user.html') || (recogPath === '/pages/results.html')) {
            // Si la key no existe (null) y trato de entrar a la sección admin o usuarios me redirecciona a login
            location.replace("../pages/login.html")

        } else {
            // Si la key no existe (null) y me direcciono al index entonces mando el login
            location.replace("./pages/login.html")
        }

    } else {
        // Si existe la key entonces delimito al usuario a su correspondiente sección
        let b = localStorage.getItem('myfitusr')
        let c = localStorage.getItem('myfitpass')

        if ((b === "admin") && (c === "admin")) {

            if ((recogPath === '/pages/user.html') || (recogPath === '/pages/login.html') || (recogPath === '/pages/results.html') || (recogPath === '/index.html')) {
                // Si el usuario es admin y trata de ingresar a user lo devuelvo a su sección
                location.replace("../pages/admin.html")
            }

        } else if ((recogPath === '/pages/admin.html') || (recogPath === '/pages/login.html') || (recogPath === '/index.html')) {

            // Si es un usuario random y trata de ingresar al admin lo devuelvo a su sección
            location.href = "../pages/user.html"
        }
    }
}