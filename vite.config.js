import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/sass/app.scss',
                'resources/js/app.js',
            ],
            refresh: true,
        }),
    ],
    server: {
        host: '0.0.0.0', // Permite que Vite sea accesible desde otras máquinas o contenedores
        watch: {
            usePolling: true, // Utiliza polling para sistemas de archivos montados
        },
    },
});
