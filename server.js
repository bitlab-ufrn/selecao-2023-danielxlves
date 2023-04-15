// Importando as bibliotecas necessárias
const express = require('express'); // Biblioteca para criar servidor web
const bodyParser = require('body-parser'); // Biblioteca para processar corpo de requisições HTTP
const cors = require('cors'); // Biblioteca para permitir requisições de outras origens
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Lista de palavras ofensivas (pode ser substituída por uma lista mais completa)
const palavrasOfensivas = ['fdp', 'pqp', 'vsf', 'babaca', 'lixo', 'fracassado'];

// Função para verificar se uma palavra é ofensiva
function verificarPalavra(palavra) {
  return palavrasOfensivas.includes(palavra.toLowerCase()); // Verifica se a palavra está na lista, ignorando maiúsculas e minúsculas
}

// Habilita o CORS (permitindo que o servidor seja acessado por outras origens)
app.use(cors());

// Habilita o Body Parser (para poder processar corpo de requisições HTTP)
app.use(bodyParser.json());

// Define uma rota POST para receber o texto a ser verificado
app.post('/verificar-texto', (req, res) => {
  const texto = req.body.texto; // Obtém o texto do corpo da requisição
  const palavras = texto.split(' '); // Divide o texto em palavras
  
  for (const palavra of palavras) { // Percorre todas as palavras
    if (verificarPalavra(palavra)) { // Se a palavra é ofensiva?
      return res.status(400).json({ // Retorna um erro 400 Bad Request com uma mensagem de erro
        error: 'O texto contém palavras ofensivas.'
      });
    }
  }
  
  // Se nenhuma palavra for ofensiva, retorna uma mensagem de sucesso
  return res.json({ message: 'O texto não contém palavras ofensivas.' });
});

// Inicia o servidor web na porta especificada
const port = 5500;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}.
              http://localhost:5500
  `);
});