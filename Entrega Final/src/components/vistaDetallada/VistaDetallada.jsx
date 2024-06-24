import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './VistaDetallada.css';

const VistaDetallada = () => {
  const { idAlojamiento } = useParams();
  const [alojamiento, setAlojamiento] = useState({});
  const [imagenes, setImagenes] = useState([]);
  const [tipoAlojamiento, setTipoAlojamiento] = useState(null);
  const [servicios, setServicios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(`Fetching data for alojamiento ID: ${idAlojamiento}`);

        const [
          alojamientoResponse,
          imagenesResponse,
          tipoAlojamientoResponse,
          serviciosResponse
        ] = await Promise.all([
          fetch(`http://localhost:3000/alojamiento/getAlojamiento/${idAlojamiento}`),
          fetch(`http://localhost:3000/imagen/getImagen/${idAlojamiento}`),
          fetch(`http://localhost:3000/tipoAlojamiento/getTipoAlojamiento/${idAlojamiento}`),
          fetch(`http://localhost:3000/alojamiento/getAlojamientoServicio/${idAlojamiento}`)
        ]);

        console.log('Responses received:', {
          alojamientoResponse,
          imagenesResponse,
          tipoAlojamientoResponse,
          serviciosResponse
        });

        if (!alojamientoResponse.ok || !imagenesResponse.ok || !tipoAlojamientoResponse.ok || !serviciosResponse.ok) {
          throw new Error('Error al obtener los datos');
        }

        const [
          alojamientoData,
          imagenesData,
          tipoAlojamientoData,
          serviciosData
        ] = await Promise.all([
          alojamientoResponse.json(),
          imagenesResponse.json(),
          tipoAlojamientoResponse.json(),
          serviciosResponse.json()
        ]);

        console.log('Data received:', {
          alojamientoData,
          imagenesData,
          tipoAlojamientoData,
          serviciosData
        });

        setAlojamiento(alojamientoData);
        setImagenes(imagenesData);
        setTipoAlojamiento(tipoAlojamientoData);
        setServicios(serviciosData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error al obtener los detalles del alojamiento');
        setLoading(false);
      }
    };

    fetchData();
  }, [idAlojamiento]);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="detalle-alojamiento">
      <div className='img-contain'>
        {imagenes.length > 0 && <img src={imagenes[0].RutaArchivo} alt={`Imagen de ${alojamiento.Titulo}`} />}
      </div>
      <div className='details-contain'>
        <h2>{alojamiento.Titulo}</h2>
        <span className='tipo-alojamiento'>{tipoAlojamiento ? tipoAlojamiento.Descripcion : 'Tipo de alojamiento no disponible'}</span>
        <div className='contain-details'>
          <div className='contain-detail'>
            <img src="../../../public/assets/iconos/bed.svg" alt="" />
            <span>habitaciones: {alojamiento.CantidadDormitorios}</span>
          </div>
          <div className='contain-detail'>
            <img src="../../../public/assets/iconos/area-de-aseo.svg" alt="" />
            <span>baños: {alojamiento.CantidadBanios}</span>
          </div>
        </div>
        <div className='contain-details'>
          <div className='contain-detail'>
            <span>Latitud: {alojamiento.Latitud}</span>
          </div>
          <div className='contain-detail'>
            <span>Longitud: {alojamiento.Longitud}</span>
          </div>
        </div>
      </div>
      <div className='description-contain'>
        <p>{alojamiento.Descripcion}</p>
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
        <span>Disponibilidad: {alojamiento.Estado}</span>
      </div>
      <div className='box-container'>
        <div className='container-servicios-info'>
          <div className='servicios-container'>
            <h3>¿Qué ofrece este lugar?</h3>
            <ul className='service-list'>
              {servicios.map((servicio, index) => (
                <li key={index} className='service-item'>{servicio.Nombre}</li>
              ))}
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
            <p className='precio-detail'>{alojamiento.PrecioPorDia} USD</p>
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

export default VistaDetallada;