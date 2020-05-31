<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Retaged') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>

<body>
    <!-- Begin Cookies Message -->
    <div class="cookies has-text-centered" id="notificationCookies">
        <h1>Cookies</h1>
        <p>Solicitamos su permiso para obtener datos estadísticos de su navegación en esta web, en cumplimiento del Real
            Decreto-ley 13/2012. Si continúa navegando consideramos que acepta el uso de cookies. (<small><a href="/politica-de-cookies" target="_blank">Más información</a></small>)</p>
        <br /><strong><button class="boton-imagen" id="okCookies">Aceptar</button></strong>
    </div>
    <!-- End Cookies Message-->
    <div id="index"></div>
</body>

</html>