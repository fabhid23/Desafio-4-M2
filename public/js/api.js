import { getToken } from './auth.js';

const PROXY_URL = '/api';

async function request(endpoint, method = 'GET', body = null) {
    const headers = { 'Content-Type': 'application/json' };
    const token = getToken();
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    const config = { method, headers };
    if (body) {
        config.body = JSON.stringify(body);
    }

    try {
        const response = await fetch(`${PROXY_URL}${endpoint}`, config);
        const data = await response.json();
        if (!response.ok) throw data;
        return data;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
}

export const apiLogin = (credentials) => request('/login', 'POST', credentials);
export const apiCadastro = (userData) => request('/cadastro', 'POST', userData);
export const apiRecuperarSenha = (data) => request('/recuperar-senha', 'POST', data);
export const apiGetHistorico = () => request('/historico-login', 'GET');
export const apiTrocarSenha = (passwords) => request('/trocar-senha', 'POST', passwords);
export const apiLogout = () => request('/logout', 'POST');