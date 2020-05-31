var okCookies = document.getElementById('okCookies');
var notificationCookies = document.getElementById('notificationCookies');

if (okCookies) {
    okCookies.addEventListener('click', function () {
        setCookie('aceptarCookies', '1', 8760);
        notificationCookies.style.display = "none";
    });
}

function clickCookie() {
    setCookie('aceptarCookies', '1', 8760);
    notificationCookies.style.display = "none";
}



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

function setCookie(cname, cvalue, exhours) {
    var d = new Date();
    d.setTime(d.getTime() + (exhours * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

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

checkCookie();