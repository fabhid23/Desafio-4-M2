# 🚀 Desafio4-M2: Sistema de Autenticação Empresarial Completo

[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.18+-blue.svg)](https://expressjs.com/)
[![JWT](https://img.shields.io/badge/JWT-Authentication-orange.svg)](https://jwt.io/)
[![Swagger](https://img.shields.io/badge/Swagger-Documentation-green.svg)](https://swagger.io/)
[![Cypress](https://img.shields.io/badge/Cypress-E2E%20Testing-blue.svg)](https://cypress.io/)

## 📋 Objetivo

Sistema completo de autenticação empresarial composto por **API REST robusta** e **interface web moderna**, desenvolvido para **estudos de teste de software e aprendizado**.

⚠️ **NÃO destinado para produção** - Armazenamento em memória (sem banco de dados).

---

## 🏗️ Arquitetura do Sistema

O projeto é composto por três componentes principais:

### 🔧 **API REST** (Backend)
- **Porta:** 3004
- **Tecnologias:** Node.js, Express, JWT, bcryptjs
- **Funcionalidades:** Autenticação, cadastro, recuperação de senha
- **Documentação:** Swagger UI em `/docs`

### 🌐 **Interface Web** (Frontend)
- **Porta:** 3000
- **Tecnologias:** JavaScript puro, Materialize CSS
- **Funcionalidades:** SPA com rotas para login, cadastro, recuperação
- **Proxy:** Servidor Node.js que encaminha requisições para a API

### 🧪 **Testes E2E** (Cypress)
- **Cobertura:** Testes de interface completa
- **Relatórios:** Mochawesome com screenshots
- **Funcionalidades:** Login, cadastro, recuperação de senha

---

## 🛠️ Stack Utilizada

### Backend (API)
- **Node.js** 18+
- **Express.js** - Framework web
- **JWT** - Autenticação stateless
- **bcryptjs** - Hash de senhas
- **Joi** - Validação de dados
- **Swagger UI** - Documentação da API
- **dayjs** - Manipulação de datas
- **uuid** - Geração de IDs únicos

### Frontend (Interface Web)
- **JavaScript puro** - Lógica da aplicação
- **Materialize CSS** - Framework de UI
- **Express** - Servidor proxy
- **Axios** - Cliente HTTP

### Testes
- **Mocha** - Testes automatizados da API
- **Chai** - Asserções para testes
- **Supertest** - Testes de endpoints HTTP
- **Cypress** - Testes E2E da interface
- **Mochawesome** - Relatórios de testes

---

## 🏗️ Estrutura de Diretórios

```
/
├── /src                    # API Backend
│   ├── /controllers
│   │   ├── authController.js      # Autenticação (login, logout, troca senha)
│   │   └── userController.js      # Usuários (cadastro, confirmação, recuperação)
│   ├── /middlewares
│   │   └── authMiddleware.js      # Autenticação JWT
│   ├── /models
│   │   ├── userModel.js           # Usuários em memória
│   │   └── tokenBlacklist.js      # Blacklist de tokens
│   ├── app.js                     # Configuração do Express
│   ├── server.js                  # Ponto de entrada do servidor
│   └── routes.js                  # Rotas da API
├── /public                        # Interface Web (Frontend)
│   ├── /js
│   │   ├── app.js               # Ponto de entrada da aplicação
│   │   ├── router.js            # Roteamento SPA
│   │   ├── ui.js                # Componentes de interface
│   │   ├── api.js               # Cliente HTTP
│   │   └── auth.js              # Gerenciamento de autenticação
│   ├── index.html               # Página principal
│   └── style.css                # Estilos customizados
├── /cypress                     # Testes E2E
│   ├── /e2e
│   │   ├── login.cy.js          # Testes de login
│   │   └── cadastroUsuario.cy.js # Testes de cadastro
│   └── /support
│       └── /commands
│       │     └── common.js      # Comandos customizados Cypress
│       ├── commands.js          # Arquivo principal de comandos Cypress
│       └── e2e.js               # Carrega comandos customizados
├── cypress.config.js            # Configuração Cypress
├── /test                        # Testes da API
│   ├── authPositivo.test.js     # Testes positivos de login
│   └── authNegativo.test.js     # Testes negativos de login
├── /swagger
│   └── swagger.json             # Documentação OpenAPI
├── /helpers
│   └── authHelpers.js           # Função utilitária para cadastro
├── server.js                    # Servidor proxy frontend
├── package-lock.json            # Controle de versões das dependências
└── package.json                 # Dependências e scripts
```

---

## 🚀 Como Executar o Sistema Completo

### 1. **Instalação**
```bash
git clone <seu-repositorio>
cd Desafio4-M2
npm install
```

### 2. **Configuração**
Verifique o arquivo `.env` (crie se não existir):
```env
API_BASE_URL=http://localhost:3004
PORT=3000
```

### 3. **Execução**
```bash
# Terminal 1: Iniciar a API Backend
npm run start-api

# Terminal 2: Iniciar o Frontend (em outro terminal)
npm start
```

### 4. **Acesso**
- **Interface Web:** [http://localhost:3000](http://localhost:3000)
- **Documentação API:** [http://localhost:3004/docs](http://localhost:3004/docs)

---

## 📚 Comandos Úteis

```bash
# Desenvolvimento
npm start              # Inicia o servidor frontend
npm run start-api      # Inicia a API backend
npm run dev            # Inicia o servidor em desenvolvimento (nodemon)

# Testes
npm test               # Executa os testes da API
npm run test:report    # Executa os testes e gera relatório HTML
npx cypress open       # Abre o Cypress para testes E2E
npx cypress run        # Executa os testes Cypress em modo headless
```

> **Nota:** O relatório HTML dos testes será gerado na pasta `mochawesome-report` após rodar `npm run test:report`. Para visualizar, abra o arquivo `mochawesome-report/mochawesome.html` no seu navegador.

---

## 🌐 Interface Web (Frontend)

### **Funcionalidades Implementadas**

#### 🔐 **Autenticação**
- ✅ **Login responsivo** com email/senha ou username/senha
- ✅ **Validação em tempo real** dos campos
- ✅ **Mensagens de erro** claras e informativas
- ✅ **Redirecionamento automático** após login bem-sucedido
- ✅ **Logout seguro** com limpeza de dados locais

#### 👤 **Cadastro de Usuário**
- ✅ **Formulário completo** com validação de todos os campos
- ✅ **Validação de força de senha** (mínimo 6 caracteres, letras + números)
- ✅ **Confirmação de email** (simulada)
- ✅ **Feedback visual** durante o processo de cadastro

#### 🔄 **Recuperação de Senha**
- ✅ **Formulário de recuperação** com validação de dados pessoais
- ✅ **Validação de data de nascimento** e nomes dos pais
- ✅ **Redefinição segura** de senha

#### 🎨 **Interface e UX**
- ✅ **Design responsivo** com Materialize CSS
- ✅ **Navegação SPA** sem recarregamento de página
- ✅ **Toasts informativos** para feedback do usuário
- ✅ **Loading states** durante operações
- ✅ **Validação client-side** antes do envio

### **Rotas da Interface**
- `/` ou `/#/login` - Tela de login
- `/#/cadastro` - Tela de cadastro de usuário
- `/#/recuperar-senha` - Tela de recuperação de senha
- `/#/perfil` - Painel do usuário (após login)

---

## 🧪 Testes E2E com Cypress

### **Cobertura de Testes**

#### **Testes de Login** (`login.cy.js`)
- ✅ **Login com dados válidos** - Verifica acesso ao painel do usuário
- ✅ **Login com dados inválidos** - Verifica bloqueio de acesso
- ✅ **Bloqueio após 3 tentativas** - Testa sistema de segurança
- ✅ **Recuperação de senha** - Testa fluxo completo de recuperação

#### **Testes de Cadastro** (`cadastroUsuario.cy.js`)
- ✅ **Acesso à tela de cadastro** - Verifica navegação
- ✅ **Cadastro de usuário** - Testa processo completo de cadastro

### **Comandos Customizados Cypress**
- `cy.cadastraUsuarioRandom()` - Cadastra usuário com dados únicos
- `cy.verificarMensagensNoToast()` - Verifica mensagens de feedback
- `cy.preencheUsuario()` - Preenche formulário de login
- `cy.recuperarSenha()` - Executa fluxo de recuperação

### **Configuração Cypress**
- **Base URL:** `http://localhost:3000`
- **Reporter:** Mochawesome com screenshots
- **Vídeos:** Desabilitados para otimização
- **Screenshots:** Automáticos em cada teste

### **Execução dos Testes E2E**
```bash
# Abrir Cypress em modo interativo
npx cypress open

# Executar testes em modo headless
npx cypress run

# Executar teste específico
npx cypress run --spec "cypress/e2e/login.cy.js"
```

---

## 🔧 API Backend

### **Funcionalidades Implementadas**

#### 🔑 **Autenticação**
- ✅ Login com email/senha ou username/senha
- ✅ Login inválido com contagem de tentativas
- ✅ Bloqueio automático após 3 tentativas inválidas (5 minutos)
- ✅ Desbloqueio automático e manual (admin)
- ✅ Logout seguro com blacklist de tokens
- ✅ JWT com expiração de 10 minutos

#### 👤 **Cadastro e Usuários**
- ✅ Cadastro de usuário com validação completa
- ✅ Confirmação de email (simulada)
- ✅ Validação de força de senha (mínimo 6 caracteres, letras + números)
- ✅ Validação de campos obrigatórios

#### 🔒 **Segurança Avançada**
- ✅ Middleware de autenticação JWT
- ✅ Blacklist de tokens para logout seguro
- ✅ Detecção de login por novo dispositivo
- ✅ Histórico de login com data/hora
- ✅ Primeiro login com mensagem diferenciada

#### 🔄 **Recuperação e Troca**
- ✅ Recuperação de senha (email, data nascimento, nome pai/mãe)
- ✅ Troca de senha (requer senha atual)

---

## 📚 Endpoints da API

### Autenticação
| Método | Endpoint        | Descrição         | Autenticação |
|--------|-----------------|-------------------|--------------|
| POST   | `/login`        | Login de usuário  |      ❌      |
| POST   | `/logout`       | Logout do usuário |      ✅      |
| POST   | `/trocar-senha` | Troca de senha    |      ✅      |

### Cadastro e Recuperação
| Método | Endpoint               | Descrição                  | Autenticação |
|--------|------------------------|----------------------------|--------------|
| POST   | `/cadastro`            | Cadastra novo usuário      |     ❌       |
| POST   | `/confirmar-email`     | Confirma email do cadastro |     ❌       |
| POST   | `/recuperar-senha`     | Recupera senha             |     ❌       |
| POST   | `/desbloquear-usuario` | Desbloqueio manual (admin) |     ❌       |

### Informações
| Método | Endpoint           | Descrição            | Autenticação |
|--------|--------------------|----------------------|--------------|
| GET    | `/historico-login` | Histórico de login   |     ✅       |
| GET    | `/docs`            | Documentação Swagger |     ❌       |

---

## 👤 Usuário Fixo para Testes

Um usuário já está disponível para testes em todos os endpoints protegidos:

```json
{
  "email": "usuario@empresa.com",
  "username": "usuario1",
  "senha": "Senha123",
  "nome": "Usuário Teste",
  "dataNascimento": "1990-01-01",
  "nomePai": "João Teste",
  "nomeMae": "Maria Teste",
  "emailConfirmado": true
}
```

---

## 🧪 Dados de Teste

### Exemplo de usuário para cadastro:
```json
{
  "email": "usuario@empresa.com",
  "username": "usuario1",
  "senha": "Senha123",
  "nome": "Usuário Teste",
  "dataNascimento": "1990-01-01",
  "nomePai": "João Teste",
  "nomeMae": "Maria Teste"
}
```

### Fluxo de teste recomendado:
1. **Cadastrar usuário:** POST `/cadastro`
2. **Confirmar email:** POST `/confirmar-email` com `userId`
3. **Fazer login:** POST `/login` (receberá token JWT)
4. **Usar token:** Adicionar header `Authorization: Bearer <token>`

---

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## ⚠️ Aviso

Este projeto foi desenvolvido **exclusivamente para fins educacionais e de estudo**. Não é recomendado para uso em produção sem as devidas adaptações de segurança e infraestrutura. 

---

## 👥 Grupo 6 - M2.0

- [ieda-ia](https://github.com/ieda-ia)
- [fabhid23](https://github.com/fabhid23)
- [welitaluisa](https://github.com/welitaluisa)
- [JonathasAnalista](https://github.com/JonathasAnalista)
- [JonatanAlbuquerque0607](https://github.com/JonatanAlbuquerque0607)