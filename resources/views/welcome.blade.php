<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="noindex, nofollow">

    <title>NVR Sole'o</title>

    <!-- CSS -->
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">

    <!-- FontAwesome CDN -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Montserrat+Subrayada:wght@400;700&family=Montserrat:wght@400;700&display=swap" rel="stylesheet">
</head>
<body>
    <div id="root"></div> <!-- ✅ Ensure this matches your React mount point -->

    <!-- React App -->
    <script src="{{ mix('js/app.js') }}" defer></script> <!-- ✅ Added 'defer' to prevent early execution -->
</body>
</html>
