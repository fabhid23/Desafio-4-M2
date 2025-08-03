# Desafio4-M2: Frontend e Proxy 

Esta aplicação é uma **Single Page Application (SPA)** que consome a **API de Autenticação Empresarial**. Ela utiliza um servidor Node.js/Express que atua como um **proxy** para se comunicar com a API principal. 

## 🚀 Como Executar 

1. **Instale as dependências:** `npm install` 
2. **Verifique o ficheiro `.env`**: Confirme se `API_BASE_URL` aponta para a sua API (padrão: `http://localhost:3004`). 
3. **Inicie a API:** `npm run start-api` 
4. **Inicie o servidor frontend:** `npm start` (em outro terminal) 
5. **Acesse a aplicação:** [http://localhost:3000](http://localhost:3000) 

## 📋 Estrutura do Projeto

- **Frontend (SPA)**: Interface de usuário construída com JavaScript puro e Materialize CSS
- **Servidor Proxy**: Encaminha requisições do frontend para a API
- **API de Autenticação**: Fornece endpoints para autenticação, cadastro e gerenciamento de usuários