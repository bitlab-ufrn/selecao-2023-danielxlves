function verificarTexto() {
  const texto = document.getElementById('texto').value //Captura texto do input
  axios.post('http://localhost:5500/verificar-texto', { texto }) // Asa a api axios para enviar um post diretamente pelo localhost do server
    .then(response => { //Caso nao tenha o erro esperado é por quê não há palavras ofensivas.
      const resultado = document.getElementById('resultado'); 
      if (response && response.data) { //Verificar se há retorno correto do servidor
        resultado.innerHTML = `<p class="success">${response.data.message}</p>`;
      } else {
        resultado.innerHTML = `<p class="error">Resposta inválida do servidor.</p>`;
      }
    })
    .catch(error => { // Ocorrendo o erro esperado é por quê há palavras ofensivas
      const resultado = document.getElementById('resultado');
      if (error && error.response && error.response.data && error.response.data.error) { 
        resultado.innerHTML = `<p class="error">${error.response.data.error}</p>`; //Error esperado
      } else {
        resultado.innerHTML = `<p class="error">Erro na requisição.</p>`; //Error de requisicao
      }
    });
}