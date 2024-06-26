import './Card3.css'
import React from 'react';
import imagen1 from '/public/assets/img/imagen-1.png';
import imagen2 from '/public/assets/img/imagen-2.png';
import imagen3 from '/public/assets/img/imagen-3.png';
import imagen4 from '/public/assets/img/imagen-4.png';

import imagenGrande from '/public/assets/img/imagen-grande.png';

const imagenesPequenas = [
    { src: imagen1, alt: "Imagen 1", texto: "Conoce todo lo que tenemos para brindarte" },
    { src: imagen2, alt: "Imagen 2", texto: "Conoce todo lo que tenemos para brindarte" },
    { src: imagen3, alt: "Imagen 3", texto: "Conoce todo lo que tenemos para brindarte" },
    { src: imagen4, alt: "Imagen 4", texto: "Conoce todo lo que tenemos para brindarte" },
];


const Card3 = () => {
    return (
        <>
        <div className='Card3Contenedor'> 
            <div className="contenedor-opciones">
                    <div className="imagen-grande">
                        <img className="imagen-grande-img" src={imagenGrande} alt="Imagen grande" />
                        <div className="centrado-grande"><p>Conoce todo lo que tenemos para brindarte</p>
                        </div>
                    </div>
                <div className="contenedor-imagenes-pequenas">
                        {imagenesPequenas.map((imagen, index) => (
                            <div key={index} className='contenedor-imagen-pequeña-individual'>
                                <img className="imagen-pequeña" src={imagen.src} alt={imagen.alt} />
                                <div className="centrado"><p>{imagen.texto}</p></div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
              
    </>
    );
};

export default Card3;