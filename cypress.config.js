const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implementa los eventos de node aquí
    },
    specPattern: 'cypress/e2e/**/*.cy.js', // Ruta para los archivos de prueba e2e
  },
});
