const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
    .react() // ✅ Enables JSX support for React
    .sass('resources/sass/app.scss', 'public/css')
    .sourceMaps();

// Optional: Versioning for cache-busting in production
if (mix.inProduction()) {
    mix.version();
}
