import './card-j.css'
import React from 'react';
import imagen1 from '/public/assets/img/imagen-1.png';
import imagen2 from '/public/assets/img/imagen-2.png';
import imagen3 from '/public/assets/img/imagen-3.png';
import imagen4 from '/public/assets/img/imagen-4.png';
import imagenGrande from '/public/assets/img/imagen-grande.png';

const CardJ = () => {
    return (
        <>
        <section className="cards-option">
            <div className="contenedor-opciones">
                <div className="imagen-grande">
                    <img className="imagen-grande-img" src={imagenGrande} alt="Imagen grande" />
                    <div className="centrado-grande"><p>Conoce todo lo que tenemos para brindarte</p></div>
                </div>
                <div className="contenedor-imagenes-pequenas">
                    <div className='contenedor-imagen-pequeña-individual'>
                        <img className="imagen-pequeña" src={imagen1} alt="Imagen 4" />
                        <div className="centrado"><p>Conoce todo lo que tenemos para brindarte</p></div>  
                    </div>
                    <div className='contenedor-imagen-pequeña-individual'>
                        <img className="imagen-pequeña" src={imagen2} alt="Imagen 2" />
                        <div className="centrado"><p>Conoce todo lo que tenemos para brindarte</p></div>
                    </div>
                    <div className='contenedor-imagen-pequeña-individual'>
                        <img className="imagen-pequeña" src={imagen3} alt="Imagen 3" />
                        <div className="centrado"><p>Conoce todo lo que tenemos para brindarte</p></div>
                    </div>
                    <div className='contenedor-imagen-pequeña-individual'>
                        <img className="imagen-pequeña" src={imagen4} alt="Imagen 4" />
                        <div className="centrado"><p>Conoce todo lo que tenemos para brindarte</p></div>
                    </div>
                </div>
            </div>
        </section>
    </>
    );
};

export default CardJ;