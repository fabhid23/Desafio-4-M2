import { renderLogin, renderCadastro, renderRecuperarSenha, renderPerfil, updateNav } from './ui.js';
import { isAuthenticated, logout } from './auth.js';

const routes = {
    '/login': renderLogin,
    '/cadastro': renderCadastro,
    '/recuperar-senha': renderRecuperarSenha,
    '/perfil': renderPerfil,
    '/logout': () => {
        logout();
        window.location.hash = '/login';
    }
};

export function handleRouteChange() {
    const path = window.location.hash.slice(1) || '/login';
    const mainContent = document.querySelector('main');
    
    if (path === '/perfil' && !isAuthenticated()) {
        window.location.hash = '/login';
        return;
    }
    
    if (path === '/login' && isAuthenticated()) {
        window.location.hash = '/perfil';
        return;
    }

    const renderFunction = routes[path] || renderLogin;
    mainContent.innerHTML = '';
    renderFunction(mainContent);
    updateNav();
}