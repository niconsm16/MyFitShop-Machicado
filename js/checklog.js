// Chequear el usuario y la ruta a la que se quiere acceder
function checklog() {
    //# Comprobar si está logueado

    //Verifico la existencia de sesión iniciada

    let sessionExists = localStorage.getItem('myfitusr')
    let recogPath = window.location.pathname

    if (sessionExists == null) {

        if ((recogPath === "/pages/admin.html") || (recogPath === "/MyFitShop-Machicado/pages/admin.html") || (recogPath === "/MyFitShop-Machicado/pages/user.html") || (recogPath === "/pages/user.html") || (recogPath === "/MyFitShop-Machicado/pages/results.html") || (recogPath === "/pages/results.html") || (recogPath === "/pages/all.html") || (recogPath === "/MyFitShop-Machicado/pages/all.html")) {
            // Preparo el toastify para avisar del error
            sessionStorage.setItem('wrongAccess', true)
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
        // Si soy Admin...
        if ((b === "admin") && (c === "admin")) {

            if ((recogPath === "/pages/user.html") || (recogPath === "/pages/login.html") || (recogPath === "/pages/results.html") || (recogPath === "/index.html") || (recogPath === "/MyFitShop-Machicado/pages/user.html") || (recogPath === "/MyFitShop-Machicado/pages/login.html") || (recogPath === "/MyFitShop-Machicado/pages/results.html") || (recogPath === "/MyFitShop-Machicado/index.html") || (recogPath === "/pages/all.html") || (recogPath === "/MyFitShop-Machicado/pages/all.html")) {
                // Preparo el toastify para avisar del error
                sessionStorage.setItem('wrongAccess', true)
                // Si el usuario es admin y trata de ingresar a user lo devuelvo a su sección
                location.replace("../pages/admin.html")
            }

        } else if ((recogPath === "/pages/admin.html") || (recogPath === "/pages/login.html") || (recogPath === "/index.html") || (recogPath === "/MyFitShop-Machicado/pages/admin.html") || (recogPath === "/MyFitShop-Machicado/pages/login.html") || (recogPath === "/MyFitShop-Machicado/index.html")) {
            // Preparo el toastify para avisar del error
            sessionStorage.setItem('wrongAccess', true)
            // Si es un usuario random y trata de ingresar al admin lo devuelvo a su sección
            location.href = "../pages/user.html"
        }
    }
}

// Cuadro de error
function checklogWrongPup() {
    Toastify({
        text: "No tienes acceso a ese sitio",
        duration: 2000,
        close: false,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        className: "wrongToastify asap",
        onClick: function () { } // Callback after click
    }).showToast();
}

// Error de ruta
function toastError() {
    // Reviso si el Session Storage tiene almacenado algo que identifique que viene de una mala ruta
    if (sessionStorage.getItem('wrongAccess')) {
        // Activo el popup y luego vacío el Session Storage 
        checklogWrongPup()
        sessionStorage.clear()
    }
}