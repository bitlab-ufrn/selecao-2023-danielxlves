function verificarTexto() {
const texto = document.getElementById('texto').value 

  //consultando a api se há palavras ofensivas

  axios.post('http://localhost:8080/verificar-texto', { texto }) 
    .then(response => { 
      const resultado = document.getElementById('resultado'); 
      if (response && response.data) { 
        resultado.innerHTML = `<p class="success">${response.data.message}</p>`;
      } else {
        resultado.innerHTML = `<p class="error">Resposta inválida do servidor.</p>`
      }
    })
    .catch(error => { 
      const resultado = document.getElementById('resultado');
      if (error && error.response && error.response.data && error.response.data.error) { 
        resultado.innerHTML = `<p class="error">${error.response.data.error}</p>`
      } else {
        resultado.innerHTML = `<p class="error">Erro na requisição.</p>`
      }
    });
}