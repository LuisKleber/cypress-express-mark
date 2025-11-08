const { defineConfig } = require('cypress')

module.exports = defineConfig({
  video: true, 

  // 2. Configuração do Reporter para gerar o "Log"
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/support/logs', // <--- Direciona para sua pasta de logs
    overwrite: true,
    html: false, // Se você quiser o arquivo HTML
    json: true,  // Gera o JSON do resultado
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})