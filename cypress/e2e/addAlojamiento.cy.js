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

      const titles = [
        "Alojamiento en la playa",
        "Cabaña en la montaña",
        "Apartamento céntrico",
        "Villa con piscina",
        "Casa rural",
        "Estudio moderno",
        "Bungalow acogedor"
    ];
    
    const descriptions = [
        "Perfecto para familias",
        "Ideal para una escapada romántica",
        "Cerca de todas las atracciones",
        "Con todas las comodidades",
        "Un lugar para relajarse",
        "Ambiente tranquilo y sereno",
        "Con vistas impresionantes"
    ];

    function getRandomElement(array) {
      return array[Math.floor(Math.random() * array.length)];
  }

        // Generar datos aleatorios
        const randomTitle = getRandomElement(titles);
        const randomDescription = getRandomElement(descriptions);
        const randomPrice = Math.floor(Math.random() * 1000) + 50;
        const randomLat = '10';
        const randomLng = '10';
        const randomBedrooms = Math.floor(Math.random() * 5) + 1;
        const randomBathrooms = Math.floor(Math.random() * 3) + 1;
  
      // Esperar a que la página cargue completamente
      cy.wait(2000);

      cy.get('#boton-nav2').click();
      cy.get('#descripcionAlojamiento').type(randomDescription);
      cy.get('#boton-enviar').click();

      cy.wait(2000);
      for (let i = 0; i < 8; i++) {
        cy.get('#boton-nav1').click();

    
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
  
        // Enviar el formulario
        cy.get('#boton-agregar').click();
    }
    });
  });
  
  