//JavaScript
// Recebendo a data e hora do sistema
var agora = new Date();
var ano = agora.getFullYear();

/* 
     FUNÇÃO: atualizaAnoRodape()
     ============================================
     Criada para atualizar o ano no rodapé do 
     nosso site. */

function atualizaAnoRodape() {
  // Manipulador do DOM
  var anoRodape = document.querySelector('span.ano');

  // Recebe o ano atual do sistema
  anoRodape.innerText = ano;
}

// --------------------------
//  FIM DO CÓDIGO JAVASCRIPT
// --------------------------
