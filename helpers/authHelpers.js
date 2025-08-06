const request = require('supertest');
//const app = require('../src/app.js');

function gerarCredenciaisAleatorias() {
  const random = Math.floor(Math.random() * 1000000);
  return {
    email: `usuario${random}@empresa.com`,
    username: `usuario${random}`,
    senha: 'Senha123',
    nome: 'Usuário Teste',
    dataNascimento: '1990-01-01',
    nomePai: 'João Teste',
    nomeMae: 'Maria Teste'
  };
}

const apiUrl = process.env.API_BASE_URL

async function cadastrarUsuario(dados) {
  const resposta = await request(apiUrl)
    .post('/cadastro')
    .send(dados);
  return resposta;
}

async function confirmarEmail(userId) {
  return await request(apiUrl)
    .post('/confirmar-email')
    .send({ userId });
}

async function fazerLogin(email, senha) {
  return await request(apiUrl)
    .post('/login')
    .send({ login: email, senha });
}

async function fazerLogout(token) {
  return await request(apiUrl)
    .post('/logout')
    .set('Authorization', `Bearer ${token}`);
}

async function historicoLogin(token) {
    return await request(apiUrl)
      .get('/historico-login')
      .set('Authorization', `Bearer ${token}`);
  }

async function recuperarSenha(email, novaSenha, dataNascimento, nomePai, nomeMae) {
  return await request(apiUrl)
    .post('/recuperar-senha')
    .send({ email, novaSenha, dataNascimento, nomePai, nomeMae });
}

module.exports = {
  gerarCredenciaisAleatorias,
  cadastrarUsuario,
  confirmarEmail,
  fazerLogin,
  fazerLogout,
  recuperarSenha,
  historicoLogin
};