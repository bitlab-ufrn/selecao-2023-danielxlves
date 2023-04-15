const path = require('path')

const palavrasOfensivas = ['fdp', 'pqp', 'vsf', 'babaca', 'lixo', 'fracassado','pnc','troxa'] //adicione aqui mais palavras ofensivas
function verificarPalavra(palavra) {
  return palavrasOfensivas.includes(palavra.toLowerCase());
} //Função do Post

exports.Post  = (req, res) => {
    const texto = req.body.texto
    const palavras = texto.split(' ')
    for (const palavra of palavras) {
      if (verificarPalavra(palavra)) {
        return res.status(400).json({
          error: 'O texto contém palavras ofensivas.'
        });
      }
    }
    return res.json({ message: 'O texto não contém palavras ofensivas.' })
  }

exports.css = (req,res) => {
    res.set('Content-Type', 'text/css');
    res.sendFile(path.join(__dirname, '../', 'css', 'style.css'));  
}

exports.js = (req,res) => {
    res.set('Content-Type', 'text/javascript');
    res.sendFile(path.join(__dirname, '../', 'js', 'script.js')); 
}

exports.html = (req,res) => {
    res.sendFile(path.join(__dirname, '../', 'html', 'index.html'))  
}