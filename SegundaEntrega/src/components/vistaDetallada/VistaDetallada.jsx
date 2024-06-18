import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './VistaDetallada.css';

const DetalleAlojamiento = () => {
 
  return (
    <div className="detalle-alojamiento">
      <div className='img-contain'>
        <img src="../../assets/img/header.jpg" alt="" />
      </div>
      <div className='details-contain'>
        <h2>Titulo</h2>
        <span className='tipo-alojamiento'>Tipo de alojamiento</span>
        <div className='contain-details'>     
          <div className='contain-detail'>
            <img src="../../../public/assets/iconos/bed.svg" alt="" />
            <span>habitaciones: </span>
          </div>
          <div className='contain-detail'>
            <img src="../../../public/assets/iconos/area-de-aseo.svg" alt="" />
            <span>baños: </span>
          </div>
        </div>
        <div className='contain-details'>     
          <div className='contain-detail'>
            <span>Latitud: </span>
          </div>
          <div className='contain-detail'>
            <span>Longitud: </span>
          </div>
        </div>
      </div>   
      <div className='description-contain'>
        <p>Descripcion</p>
      </div>
      <div className='description-contain tex-contain'>
        <img src="../../../public/assets/iconos/diamond.svg" alt="" />
        <div className='text-contain'>
          <p>Esta sí es una oportunidad única.</p>
          <p>Este alojamiento suele estar reservado.</p>
        </div>
      </div>
      <div className='disponibilidad-container'>
        <img src="../../../public/assets/iconos/disponibilidad.svg" alt="" />
        <span>Disponibilidad</span>
      </div>      
      <div className='box-container'>
        <div className='container-servicios-info'>
          <div className='servicios-container'>
            <h3>¿Qué ofrece este lugar?</h3>
            <ul className='service-list'>
              <li className='service-item'>hola</li>
              <li className='service-item'>hola</li>
            </ul>
          </div>
          <div className='info-container'>
            <h2>Qué tenés que saber</h2>
            <div className='normas-container'>
              <h3>Normas de la casa</h3>
              <span>Check-in: de 15:00 a 02:00</span>
              <span>Check-out antes de las 10:00</span>
            </div>
            <div className='politica-container'>
              <h3>Política de cancelación</h3>
              <span>Cancelación gratuita durante 48 horas.</span>
              <span>Consultá la política de cancelación completa del anfitrión, que se aplica incluso si cancelás por contagio o algún otro problema causado por el COVID-19.</span>
            </div>
          </div>
        </div>
        <div className='precio-container'>
          <div className='precio-detail-container'>
            <p className='precio-detail'>$ Precio USD</p>
            <p>noche</p>   
          </div>
          <div className='buton-container'>
            <button className='btn-reservar'>Reservar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetalleAlojamiento;