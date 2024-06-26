import { useState, useEffect } from 'react';
import './Card2.css';
import { Link } from 'react-router-dom';

const Promociones = () => {
  const [cargando, setCargando] = useState(true);
  const [alojamientos, setAlojamientos] = useState([]);
  const [imagenes, setImagenes] = useState([]);
  const [tiposAlojamiento, setTiposAlojamiento] = useState([]);
  const [servicios, setServicios] = useState([]);
  const [alojamientosServicios, setAlojamientosServicios] = useState([]);
  const [tipoSeleccionado, setTipoSeleccionado] = useState('');
  const [disponibilidadSeleccionada, setDisponibilidadSeleccionada] = useState('');
  const [precioMaximo, setPrecioMaximo] = useState(Infinity);
  const [buscarPorPrecio, setBuscarPorPrecio] = useState(false);
  const [banosSeleccionados, setBanosSeleccionados] = useState('');
  const [cuartosSeleccionados, setCuartosSeleccionados] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          alojamientosResponse,
          tiposAlojamientoResponse,
          imagenesResponse,
          serviciosResponse,
          alojamientosServiciosResponse
        ] = await Promise.all([
          fetch('http://localhost:3000/alojamiento/getAlojamientos'),
          fetch('http://localhost:3000/tiposAlojamiento/getTiposAlojamiento'),
          fetch('http://localhost:3000/imagen/getAllImagenes'),
          fetch('http://localhost:3000/servicio/getAllServicios'),
          fetch('http://localhost:3000/alojamientosServicios/getAllAlojamientoServicios')
          
        ]);
              const [
          alojamientosData,
          tiposAlojamientoData,
          imagenesData,
          serviciosData,
          alojamientosServiciosData
        ] = await Promise.all([
          alojamientosResponse.json(),
          tiposAlojamientoResponse.json(),
          imagenesResponse.json(),
          serviciosResponse.json(),
          alojamientosServiciosResponse.json()
        ]);
        console.log('Datos de alojamientosServicios:', alojamientosServiciosData);

        setAlojamientos(alojamientosData);
        setTiposAlojamiento(tiposAlojamientoData);
        setImagenes(imagenesData);
        setServicios(serviciosData);
        setAlojamientosServicios(alojamientosServiciosData);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      } 
    };
  
    fetchData();
  }, []);

  const banosUnicos = [...new Set(alojamientos.map(alojamiento => alojamiento.CantidadBanios))];
  const cuartosUnicos = [...new Set(alojamientos.map(alojamiento => alojamiento.CantidadDormitorios))];

  const alojamientosFiltrados = alojamientos.filter(alojamiento =>
    (tipoSeleccionado ? String(alojamiento.idTipoAlojamiento) === String(tipoSeleccionado) : true) &&
    (disponibilidadSeleccionada ? alojamiento.Estado === disponibilidadSeleccionada : true) &&
    (!buscarPorPrecio || alojamiento.PrecioPorDia <= precioMaximo) &&
    (banosSeleccionados ? alojamiento.CantidadBanios === Number(banosSeleccionados) : true) &&
    (cuartosSeleccionados ? alojamiento.CantidadDormitorios === Number(cuartosSeleccionados) : true)
  );

  return (
    <div className="cards-promocion">
      <div className="texto">
        <div>
          <h2>Ofertas especiales</h2>
          <h3>Mejores ofertas del mes</h3>
          <p>Experimente fantásticos beneficios y obtenga mejores tarifas <br /> al realizar una reserva directa en nuestro sitio web oficial</p>
        </div>
        <div>
          <button className="button-card">Ver todo</button>
        </div>
      </div>

      <div className="buscadores">
        <select value={tipoSeleccionado} onChange={e => setTipoSeleccionado(e.target.value)}>
          <option value="">Todos los tipos</option>
          {tiposAlojamiento.map(tipo => (
            <option key={tipo.idTipoAlojamiento} value={tipo.idTipoAlojamiento}>{tipo.Descripcion}</option>
          ))}
        </select>
        <select value={disponibilidadSeleccionada} onChange={e => setDisponibilidadSeleccionada(e.target.value)}>
          <option value="">Todas las disponibilidades</option>
          <option value="Disponible">Disponible</option>
          <option value="Reservado">Reservado</option>
        </select>
        <div>
          <input type="range" min="0" max="1000" value={precioMaximo} onChange={e => setPrecioMaximo(Number(e.target.value))} />
          <button onClick={() => setBuscarPorPrecio(true)}>Buscar por precio</button>
          <p>Seleccionaste un precio máximo de: {precioMaximo === Infinity ? 'Todos los precios' : `$${precioMaximo}`}</p>
        </div>
        <div>
          <select value={banosSeleccionados} onChange={e => setBanosSeleccionados(e.target.value)}>
            <option value="">Todos los baños</option>
            {banosUnicos.map((banos, index) => (
              <option key={index} value={banos}>{banos}</option>
            ))}
          </select>
        </div>
        <div>
          <select value={cuartosSeleccionados} onChange={e => setCuartosSeleccionados(e.target.value)}>
            <option value="">Todos los cuartos</option>
            {cuartosUnicos.map((cuartos, index) => (
              <option key={index} value={cuartos}>{cuartos}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="cards" id="cards-alojamientos">
        {alojamientosFiltrados.map((alojamiento, index) => {
          const alojamientoImagenes = imagenes.filter(imagen => imagen.idAlojamiento === alojamiento.idAlojamiento);
          const tipoAlojamiento = tiposAlojamiento.find(tipo => tipo.idTipoAlojamiento === alojamiento.idTipoAlojamiento);
          const alojamientoServicios = alojamientosServicios
            .filter(alojamientoServicio => alojamientoServicio.idAlojamiento === alojamiento.idAlojamiento)
            .map(alojamientoServicio => {
              const servicio = servicios.find(servicio => servicio.idServicio === alojamientoServicio.idServicio);
              return servicio ? servicio.Nombre : 'Servicio no disponible';
            });

          return (
            <div className="card1" key={index}>
              {alojamientoImagenes.map((imagen, imgIndex) => (
                <img key={imgIndex} src={imagen.RutaArchivo} alt={`Imagen de ${alojamiento.Titulo}`} />
              ))}
              <div className='container-description'>
                <h2>{alojamiento.Titulo}</h2>
                <p className='tipo-alojamiento'>{tipoAlojamiento ? tipoAlojamiento.Descripcion : 'Tipo de alojamiento no disponible'}</p>
              </div>    
              <div className='container-description container-description-row'>
                <p>Dormitorios: {alojamiento.CantidadDormitorios}</p>
                <p>Baños: {alojamiento.CantidadBanios}</p> 
              </div>         
              <div className='container-description'>
                <p>{alojamiento.Descripcion}</p>
                <p>Estado: <span className='disponibilidad'>{alojamiento.Estado}</span></p>      
              </div>                  
              <div className='container-description'>
                <p>Servicios</p>
                <ul className="grid-servicios">
                  {alojamientoServicios.map((servicio, srvIndex) => (
                    <li key={srvIndex}>{servicio.replace(/^\./, ' ')}</li>
                  ))}
                </ul>
              </div>
              <div className="card-precio">
                <span className="precio">{alojamiento.PrecioPorDia}</span>
                <span className="texto-precio">/noche</span>
              </div>
            </div>
          );
        })}
      </div>
      </div>
  );
};

export default Promociones;
