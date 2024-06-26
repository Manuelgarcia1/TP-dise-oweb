![GitHub contributors](https://img.shields.io/github/contributors/Manuelgarcia1/TP-dise-oweb?style=plastic&label=Colaboradores&labelColor=transparent&color=green)
![GitHub commit activity (main)](https://img.shields.io/github/commit-activity/t/Manuelgarcia1/TP-dise-oweb/main?style=plastic&label=main%20commits&color=yellow)
![GitHub repo size](https://img.shields.io/github/repo-size/Manuelgarcia1/TP-dise-oweb?style=plastic&label=tama%C3%B1o&color=%234d3636)


![Github](https://img.shields.io/badge/Github-%23181717?style=for-the-badge&logo=github&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)


# Especificaciones funcionales :clipboard:


## Introducción 🌟
Proyecto Final para la materia de Introducción al Desarrollo Web de la Tecnicatura en Desarrollo Web de la Universidad de Entre Ríos. El proyecto consiste en realizar una página web dinámica que consuma un servicio de API, el proyecto a realizar sera una plataforma digital dedicada a la oferta de alojamientos a particulares y turísticos (alquiler vacacional) mediante la cual los anfitriones pueden publicitar y contratar el arriendo de sus propiedades con sus huéspedes.


## Funcionalidades :gear:
#### En referencia a los Alojamientos:
- Registrar un nuevo alojamiento.
- Editar los datos de uno existente.
- Eliminar un alojamiento.
#### En relación a Imágenes:
- Registrar una nueva.
- Editar los datos de una existente.
- Eliminar una imágen.
#### En relación a Servicios:
- Registrar uno nuevo.
- Editar los datos de uno existente.
- Eliminar un servicio.
#### En relación a Alojamiento Servicios:
- Registrar una nueva.
- Editar los datos de una existente.
- Eliminar una relación alojamiento - servicios.
#### En relación al usuario admin:
- Iniciar sesión.
- Cerrar sesión.

# Especificaciones técnicas 🛠️

## Integrantes 👥
- [Manuel Alejandro García](https://github.com/Manuelgarcia1)
- [Joel Chasmann](https://github.com/ChasmannJoel)
- [IGNACIO JOSE ROCHA](https://github.com/ignacio-Jose-Rocha)
- [Yanina Unrein](https://github.com/Yanina-Unrein)

 
## Tecnologías y herramientas 🚀

Nuestro proyecto será desarrollado utilizando HTML, CSS, JavaScript y React, además, se consumira la API proporcionada por los profesores para que conecte con una base de datos utilizando MySQL Workbench. También, aprovecharemos herramientas esenciales como Github para la gestión del código. Para el diseño y la creación de interfaces de usuario, utilizaremos aplicaciones como Figma, que nos permitirán visualizar y compartir nuestras ideas de manera efectiva.
[Figma](https://www.figma.com/file/Ou9J8RxD93kXtFHnGAsD3b/Proyecto-Web?type=design&node-id=0%3A1&mode=design&t=gbqU1NRnPoEgd9ia-1)

## Metodología de trabajo 🔄

Para optimizar nuestra eficacia y aprovechar nuestras capacidades al máximo, nuestro equipo trabajará con ramas personales para trabajar de manera ordenada y luego se mergeará a la rama dev y al finalizar se pasara a producción a la rama main.

Esta estrategia fomentará el desarrollo de nuestras habilidades de comunicación y trabajo en equipo, al mismo tiempo que estimulará nuestras aptitudes de gestión.


## Instalación y configuración del proyecto ⚠️

Es importante que ambos servidores tanto el frontend como el backend se esten ejecuetando al mismo tiempo.
A continuacion les damos las instrucciones correspondientes.

### Login usuario admin credenciales
- email: ignac1997nacho@gmail.com
- password: 1234


### Frontend

El trabajo con React se encuentra situado en la carpeta SegundaEntrega.
Para levantar el servidor y poder visualizar la aplicacion es necesario que se situe en la carpeta SegundaEntrega mediante la terminal e ingresar el comando:

```npm install```

Seguido del comando:

```npm i```

Este comando instalara las depedencias necesarias.
Para correr el proyecto en local se utilizara el comando: 

```npm run dev```



### Backend
La api proporcionada por los profesores se encuentra dentro de la carpeta Backend.
Para levantar el servidor y poder visualizar la url del formulario realizado con la api en la aplicacion de react debera mediante la terminal en la carpeta Backend e ingresar el comando:

```npm install```


Seguido del comando:

```npm i```

Este comando instalara las depedencias necesarias.
Para correr el proyecto en local se utilizara el comando: 

```npm run dev```


Para la conexion con la base de datos: 
Crear un archivo .env en la carpeta Backend con las credenciales de su conexion en Workbench teniendo este modelo:
DB_HOST=localhost  
DB_USER=nombre_usuario  
DB_PASSWORD=contraseña_personal  
DB_NAME=idw  
DB_CONNECTION_LIMIT=10  
DB_QUEUE_LIMIT=0  

### AUTOMATIZACION 

Instalación de Cypress:

Primero, asegúrate de tener Node.js y npm instalados. Luego, instala Cypress en tu proyecto:

```npm install cypress --save-dev```  

Configuración de Cypress:

- Abre Cypress:  
- ```npx cypress open```  
- Esto abrirá la interfaz de Cypress donde debe elegir la opcion de e2e integration, seguir los pasos de confguracion recomendados. 
- Seleccionar la prueba en la carpeta cypress/integration el archivo 'addAlojamiento.spec.js'

