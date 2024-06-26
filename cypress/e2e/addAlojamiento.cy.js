
function login() {
  cy.visit('http://localhost:5173/seguridad');
  
  // Espera a que la página esté completamente cargada
  cy.wait(5000); // Puedes ajustar el tiempo de espera según sea necesario
  
  // Espera a que el campo de usuario esté disponible
  cy.get('#email').should('be.visible').type('ignac1997nacho@gmail.com');
  
  // Espera a que el campo de contraseña esté disponible y complétalo
  cy.get('#password').should('be.visible').type('1234');
  
  // Envía el formulario
  cy.get('button[type="submit"]').click();
}



describe('Agregar Alojamiento', () => {
  it('Debería completar el formulario de alojamiento correctamente', () => {
    // Iniciar sesión
    login();

    // Navegar a la página de agregar alojamiento
    cy.visit('http://localhost:5173/addAlojamiento');

    const images = [
      "https://images-ext-1.discordapp.net/external/z4yvvcnTjjrc8rPV8B17X3rOU-GRwU6mzNIBXP_qSEs/%3Fim_w%3D1200/https/a0.muscache.com/im/pictures/9474fa0e-3bc4-4cb9-85df-d2d1abbc2d9b.jpg?format=webp&width=589&height=442",
      "https://images-ext-1.discordapp.net/external/PdebC05YqR6X0_onWxFYkvy-DO_4sBrEYUFHwRa5na8/%3Fim_w%3D1200/https/a0.muscache.com/im/pictures/miso/Hosting-46448185/original/b593c6ee-8090-424d-be99-52e9ba44f6a5.jpeg?format=webp&width=591&height=442",
      "https://images-ext-1.discordapp.net/external/gbtU0HiDfm0tBDoUad3428TGxEiRTh-3kcO8oP5h_qg/%3Fim_w%3D1200/https/a0.muscache.com/im/pictures/miso/Hosting-639859140466159074/original/c58e6ecc-6090-4251-9bbe-433c4da640c7.jpeg?format=webp&width=589&height=442",
      "https://images-ext-1.discordapp.net/external/krTHekKefaMTfN5HWUopOO-Ewc8JqelQYH6owpfdxFE/%3Fim_w%3D1200/https/a0.muscache.com/im/pictures/miso/Hosting-702792087671080802/original/6dd298c0-4fa2-46d0-a038-c564650840e9.jpeg?format=webp&width=661&height=442",
      "https://images-ext-1.discordapp.net/external/oVdTuVLw4vJ7VtFdHPi2oilqkZ6XoEnxUVqhDcrZEoc/%3Fim_w%3D1200/https/a0.muscache.com/im/pictures/miso/Hosting-53001224/original/a4b085ff-9dfd-4059-9b40-8c36d042d4bf.jpeg?format=webp&width=589&height=442",
      "https://images-ext-1.discordapp.net/external/0Yl5U1g5EbGJAmXfpyUrdLl1OfQGyHo3QOzGTSp-_P8/%3Fim_w%3D1200/https/a0.muscache.com/im/pictures/5ceb2bae-bb0a-4a62-b0a2-cc4c7d8c96d7.jpg?format=webp&width=664&height=442",
      "https://images-ext-1.discordapp.net/external/hZZZOThqptpEcvzSNXz_jL2mu4ft1jgfSbZ7BLyZbsg/%3Fim_w%3D1200/https/a0.muscache.com/im/pictures/2adf6ef9-e131-431b-a34e-9566e768f509.jpg?format=webp&width=663&height=442",
      "https://images-ext-1.discordapp.net/external/hZZZOThqptpEcvzSNXz_jL2mu4ft1jgfSbZ7BLyZbsg/%3Fim_w%3D1200/https/a0.muscache.com/im/pictures/2adf6ef9-e131-431b-a34e-9566e768f509.jpg?format=webp&width=663&height=442"
    ];
    const titles = [
      "Alojamiento en la playa",
      "Cabaña en la montaña",
      "Apartamento céntrico",
      "Villa con piscina",
      "Casa rural",
      "Estudio moderno",
      "Estudio moderno",
      "Bungalow acogedor"
    ];
  
    const descriptions = [
      "Perfecto para familias",
      "Ideal para una escapada romántica",
      "Cerca de todas las atracciones",
      "Con todas las comodidades",
      "Un lugar para relajarse",
      "Un lugar para relajarse",
      "Ambiente tranquilo y sereno",
      "Con vistas impresionantes"
    ];


      function getRandomElement2(array) {
          return array[Math.floor(Math.random() * array.length)];}
      const randomDescription = getRandomElement2 (descriptions);

        // Esperar a que la página cargue completamente
        cy.wait(2000);

        cy.get('#boton-nav2').click();
        cy.get('#descripcionAlojamiento').type(randomDescription);
        cy.get('#boton-enviar').click();

        cy.wait(2000);


    for (let i = 0; i < 8; i++) {
      cy.get('#boton-nav1').click();

      function getRandomElement(array) {
        return array[Math.floor(Math.random() * array.length)];}
          // Generar datos aleatorios
          const randomTitle = getRandomElement(titles);
          const randomPrice = Math.floor(Math.random() * 1000) + 50;
          const randomLat = '10';
          const randomLng = '10';
          const randomBedrooms = Math.floor(Math.random() * 5) + 1;
          const randomBathrooms = Math.floor(Math.random() * 3) + 1;
  
        // Llenar el formulario
        cy.get('#titulo').clear().type(randomTitle);
        cy.get('#precioPorDia').clear().type(randomPrice.toString());
        cy.get('#descripcion').clear().type(randomDescription);
        cy.get('#latitud').clear().type(randomLat);
        cy.get('#longitud').clear().type(randomLng);
        cy.get('#cantidadDormitorios').clear().type(randomBedrooms.toString());
        cy.get('#cantidadBanios').clear().type(randomBathrooms.toString());
        cy.get('#estado').clear().type('disponible');
        cy.get('#tipoAlojamiento').select(1);

        cy.get('#boton-agregar').click();
        
        function getRandomElement2(array) {
          return array[Math.floor(Math.random() * array.length)];}
    
          const randomImg = getRandomElement2(images);
          cy.get('#boton-nav3').click();
          cy.get('#imagen').clear().type(randomImg);
        
        // //logica seleccion id
          cy.get('#idAlojamiento').select(1)
        // Enviar el formulario
          cy.get('#agregar-imagen').click();   
    }

  
    
  });
});
  
  