import { useState, useEffect } from 'react';
import './Card2.css';

const Promociones = () => {
  const [alojamientos, setAlojamientos] = useState([]);
  const [imagenes, setImagenes] = useState([]);
  const [tiposAlojamiento, setTiposAlojamiento] = useState([]);
  const [tipoSeleccionado, setTipoSeleccionado] = useState('');
  const [disponibilidadSeleccionada, setDisponibilidadSeleccionada] = useState('');
  const [precioMaximo, setPrecioMaximo] = useState(Infinity);
  const [buscarPorPrecio, setBuscarPorPrecio] = useState(false);
  const [banosSeleccionados, setBanosSeleccionados] = useState(''); 
  const [cuartosSeleccionados, setCuartosSeleccionados] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [alojamientosResponse, tiposAlojamientoResponse, imagenesResponse] = await Promise.all([
          fetch('http://localhost:3000/alojamiento/getAlojamientos'),
          fetch('http://localhost:3000/tiposAlojamiento/getTiposAlojamiento'),
          fetch('http://localhost:3000/imagen/getAllImagenes')
        ]);

        const [alojamientosData, tiposAlojamientoData, imagenesData] = await Promise.all([
          alojamientosResponse.json(),
          tiposAlojamientoResponse.json(),
          imagenesResponse.json()
        ]);

        setAlojamientos(alojamientosData);
        setTiposAlojamiento(tiposAlojamientoData);
        setImagenes(imagenesData);
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
      
      <div className="cards">
        {alojamientosFiltrados.map((alojamiento, index) => {
          const alojamientoImagenes = imagenes.filter(imagen => imagen.idAlojamiento === alojamiento.idAlojamiento);
          const tipoAlojamiento = tiposAlojamiento.find(tipo => tipo.idTipoAlojamiento === alojamiento.idTipoAlojamiento);

          return (
            <div className="card1" key={index}>
              {alojamientoImagenes.map((imagen, imgIndex) => (
                <img key={imgIndex} src={imagen.RutaArchivo} alt={`Imagen de ${alojamiento.Titulo}`} />
              ))}
              <h2>{alojamiento.Titulo}</h2>
              <h3>{alojamiento.Descripcion}</h3>
              <h4>{alojamiento.PrecioPorDia}</h4>
              <h4>estado: {alojamiento.Estado}</h4>
              <h4>dormitorios: {alojamiento.CantidadDormitorios}</h4>
              <h4>baños: {alojamiento.CantidadBanios}</h4>
              <h4>tipo de alojamiento: {tipoAlojamiento ? tipoAlojamiento.Descripcion : 'Tipo de alojamiento no disponible'}</h4>
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