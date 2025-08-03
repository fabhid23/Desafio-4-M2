import { handleRouteChange } from './router.js';

document.addEventListener('DOMContentLoaded', () => {
    handleRouteChange();
    window.addEventListener('hashchange', handleRouteChange);
});