//OKCOOKIE = BOTON ACEPTAR
var okCookies = document.getElementById('okCookies');
//NOTIFICATIONCOOKIE = DIV DE LA NOTIFICACIÓN
var notificationCookies = document.getElementById('notificationCookies');

//SI EXISTE EL BOTÓN, SE AÑADE LISTENER DE CLICK PARA LLAMAR A SETCOOKIE
if (okCookies) {
    okCookies.addEventListener('click', function () {
        setCookie('aceptarCookies', '1', 8760);
        notificationCookies.style.display = "none";
    });
}

//COMPRUEBA SI EXISTE Y SI HA SIDO ACEPTADA, MUESTRA O NO EL MENSAJE
function checkCookie() {
    if (getCookie('aceptarCookies') != "1") {
        if (notificationCookies) {
            notificationCookies.style.display = "block";
        }
    } else {
        if (notificationCookies) {
            notificationCookies.style.display = "none";
        }
    }
}

//SETEA LA COOKIE
function setCookie(cname, cvalue, exhours) {
    var d = new Date();
    d.setTime(d.getTime() + (exhours * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

//OBTIENE LA COOKIE
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

//PRIMERA FUNCIÓN QUE SE EJECUTA
checkCookie();