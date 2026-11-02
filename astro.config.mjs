import { defineConfig } from 'astro/config';

// Used by the root production preview; semesters have their own build configs.
export default defineConfig({
    site: 'https://taipinc.github.io',
    base: '/remixing-the-camera/',
});
