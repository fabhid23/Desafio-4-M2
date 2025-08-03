require('dotenv').config(); 
const express = require('express'); 
const cors = require('cors'); 
const axios = require('axios'); 
const path = require('path'); 

const app = express(); 
const PORT = process.env.PORT || 3000; 
const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:3004'; 

app.use(cors()); 
app.use(express.json()); 
app.use(express.static(path.join(__dirname, 'public'))); 

app.all('/api/*', async (req, res) => { 
  const method = req.method; 
  const url = `${API_BASE_URL}${req.path.replace('/api', '')}`; 
  const data = req.body; 
  const headers = { 'Content-Type': 'application/json' }; 
  if (req.headers.authorization) { 
    headers['Authorization'] = req.headers.authorization; 
  } 

  try { 
    const response = await axios({ method, url, data, headers }); 
    res.status(response.status).json(response.data); 
  } catch (error) { 
    if (error.response) { 
      res.status(error.response.status).json(error.response.data); 
    } else { 
      res.status(500).json({ mensagem: 'Erro interno no servidor proxy.' }); 
    } 
  } 
}); 

app.get('*', (req, res) => { 
  res.sendFile(path.join(__dirname, 'public', 'index.html')); 
}); 

app.listen(PORT, () => { 
  console.log(`Servidor frontend rodando na porta ${PORT}`); 
  console.log(`Proxy para a API em ${API_BASE_URL}`); 
});