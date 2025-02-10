// cypress.config.js
module.exports = {
  e2e: {
    baseUrl: 'https://www.guiademoteis.com.br', // Coloque sua URL base aqui
    supportFile: false, // Ou deixe como true se estiver usando um arquivo de suporte
    viewportWidth: 1000, // Largura da tela para os testes
    viewportHeight: 660, // Altura da tela para os testes
    video: false, // Caso não queira gravar vídeos dos testes
  },
};
