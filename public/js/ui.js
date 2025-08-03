import { apiLogin, apiCadastro, apiGetHistorico, apiRecuperarSenha, apiTrocarSenha } from './api.js';
import { saveToken, isAuthenticated, logout } from './auth.js';

function showToast(message, isError = false) {
    M.toast({ html: message, classes: isError ? 'red darken-2' : 'green darken-1' });
}

export function updateNav() {
    const navLinks = document.querySelector('#nav-mobile');
    navLinks.innerHTML = isAuthenticated() ? `
        <li><a href="#/perfil">Perfil</a></li>
        <li><a href="#/logout">Sair</a></li>` : `
        <li><a href="#/login">Login</a></li>
        <li><a href="#/cadastro">Cadastro</a></li>`;
}

export function renderLogin(container) {
    container.innerHTML = `<div class="row"><div class="col s12 m8 l6 offset-m2 offset-l3"><div class="card"><div class="card-content"><span class="card-title">Login</span><form id="login-form"><div class="input-field"><i class="material-icons prefix">account_circle</i><input id="login" type="text" required><label for="login">Email ou Username</label></div><div class="input-field"><i class="material-icons prefix">lock</i><input id="senha" type="password" required><label for="senha">Senha</label></div><button class="btn waves-effect waves-light blue darken-2" type="submit">Entrar</button></form><div class="card-action"><a href="#/recuperar-senha">Esqueceu a senha?</a></div></div></div></div></div>`;
    document.getElementById('login-form').addEventListener('submit', async e => {
        e.preventDefault();
        try {
            const data = await apiLogin({ login: e.target.login.value, senha: e.target.senha.value });
            saveToken(data.token);
            showToast(data.mensagem);
            window.location.hash = '/perfil';
        } catch (error) { showToast(error.mensagem, true); }
    });
}

export function renderCadastro(container) {
    container.innerHTML = `<div class="row"><div class="col s12 m8 l6 offset-m2 offset-l3"><div class="card"><div class="card-content"><span class="card-title">Cadastro</span><form id="cadastro-form"><div class="input-field"><input id="email" type="email" required><label for="email">Email</label></div><div class="input-field"><input id="username" type="text" required><label for="username">Username</label></div><div class="input-field"><input id="senha" type="password" required><label for="senha">Senha</label><span class="helper-text">Mínimo 6 caracteres, pelo menos 1 letra e 1 número</span></div><div class="input-field"><input id="nome" type="text" required><label for="nome">Nome Completo</label></div><div class="input-field"><input id="dataNascimento" type="text" class="datepicker" required><label for="dataNascimento">Data de Nascimento</label></div><div class="input-field"><input id="nomePai" type="text" required><label for="nomePai">Nome do Pai</label></div><div class="input-field"><input id="nomeMae" type="text" required><label for="nomeMae">Nome da Mãe</label></div><button class="btn waves-effect waves-light blue darken-2" type="submit">Cadastrar</button></form></div></div></div></div>`;
    M.Datepicker.init(document.querySelector('.datepicker'), { format: 'yyyy-mm-dd', autoClose: true });
    document.getElementById('cadastro-form').addEventListener('submit', async e => {
        e.preventDefault();
        const userData = { email: e.target.email.value, username: e.target.username.value, senha: e.target.senha.value, nome: e.target.nome.value, dataNascimento: e.target.dataNascimento.value, nomePai: e.target.nomePai.value, nomeMae: e.target.nomeMae.value };
        try {
            const data = await apiCadastro(userData);
            showToast(data.mensagem);
            window.location.hash = '/login';
        } catch (error) { 
            if (error.detalhes && error.detalhes.length > 0) {
                const detalhes = error.detalhes.map(d => {
                    if (d.path && d.path[0] === 'senha') {
                        return 'Senha deve ter pelo menos 6 caracteres, incluindo letras e números';
                    }
                    return d.message;
                }).join(', ');
                showToast(detalhes, true);
            } else {
                showToast(error.mensagem, true);
            }
        }
    });
}

export function renderRecuperarSenha(container) {
    container.innerHTML = `<div class="row"><div class="col s12 m8 l6 offset-m2 offset-l3"><div class="card"><div class="card-content"><span class="card-title">Recuperar Senha</span><form id="recuperar-form"><div class="input-field"><input id="email" type="email" required><label for="email">Seu Email</label></div><div class="input-field"><input id="dataNascimento" type="text" class="datepicker" required><label for="dataNascimento">Data de Nascimento</label></div><div class="input-field"><input id="nomePai" type="text" required><label for="nomePai">Nome do Pai</label></div><div class="input-field"><input id="nomeMae" type="text" required><label for="nomeMae">Nome da Mãe</label></div><div class="input-field"><input id="novaSenha" type="password" required><label for="novaSenha">Nova Senha</label><span class="helper-text">Mínimo 6 caracteres, pelo menos 1 letra e 1 número</span></div><button class="btn waves-effect waves-light" type="submit">Redefinir Senha</button></form></div></div></div></div>`;
    M.Datepicker.init(document.querySelector('.datepicker'), { format: 'yyyy-mm-dd', autoClose: true });
    document.getElementById('recuperar-form').addEventListener('submit', async e => {
        e.preventDefault();
        const data = { email: e.target.email.value, dataNascimento: e.target.dataNascimento.value, nomePai: e.target.nomePai.value, nomeMae: e.target.nomeMae.value, novaSenha: e.target.novaSenha.value };
        try {
            const result = await apiRecuperarSenha(data);
            showToast(result.mensagem);
            window.location.hash = '/login';
        } catch (error) { 
            if (error.detalhes && error.detalhes.length > 0) {
                const detalhes = error.detalhes.map(d => {
                    if (d.path && d.path[0] === 'novaSenha') {
                        return 'Nova senha deve ter pelo menos 6 caracteres, incluindo letras e números';
                    }
                    return d.message;
                }).join(', ');
                showToast(detalhes, true);
            } else {
                showToast(error.mensagem, true);
            }
        }
    });
}

export async function renderPerfil(container) {
    container.innerHTML = `<div class="row"><div class="col s12"><h4>Painel do Usuário</h4></div></div><div class="row"><div class="col s12 m7"><div class="card"><div class="card-content"><span class="card-title">Histórico de Login</span><table class="striped"><thead><tr><th>Data e Hora</th><th>Dispositivo</th></tr></thead><tbody id="historico-body"><tr><td colspan="2">Carregando...</td></tr></tbody></table></div></div></div><div class="col s12 m5"><div class="card"><div class="card-content"><span class="card-title">Trocar Senha</span><form id="trocar-senha-form"><div class="input-field"><input id="senhaAtual" type="password" required><label for="senhaAtual">Senha Atual</label></div><div class="input-field"><input id="novaSenha" type="password" required><label for="novaSenha">Nova Senha</label><span class="helper-text">Mínimo 6 caracteres, pelo menos 1 letra e 1 número</span></div><button class="btn waves-effect waves-light" type="submit">Trocar</button></form></div></div></div></div>`;
    try {
        const data = await apiGetHistorico();
        const historicoBody = document.getElementById('historico-body');
        historicoBody.innerHTML = data.historico?.length ? data.historico.map(e => `<tr><td>${new Date(e.data).toLocaleString('pt-BR')}</td><td>${e.dispositivo || 'N/A'}</td></tr>`).join('') : '<tr><td colspan="2">Nenhum histórico.</td></tr>';
    } catch (error) {
        showToast(error.mensagem, true);
        if (error.mensagem.includes('expirado') || error.mensagem.includes('inválido')) {
            logout(); window.location.hash = '/login';
        }
    }
    document.getElementById('trocar-senha-form').addEventListener('submit', async e => {
        e.preventDefault();
        try {
            const result = await apiTrocarSenha({ senhaAtual: e.target.senhaAtual.value, novaSenha: e.target.novaSenha.value });
            showToast(result.mensagem);
            e.target.reset();
        } catch (error) { 
            if (error.detalhes && error.detalhes.length > 0) {
                const detalhes = error.detalhes.map(d => {
                    if (d.path && d.path[0] === 'novaSenha') {
                        return 'Nova senha deve ter pelo menos 6 caracteres, incluindo letras e números';
                    }
                    return d.message;
                }).join(', ');
                showToast(detalhes, true);
            } else {
                showToast(error.mensagem, true);
            }
        }
    });
}