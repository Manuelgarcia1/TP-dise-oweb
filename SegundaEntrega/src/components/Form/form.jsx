import { useState, useEffect } from 'react';
import './form.css';

export const AddAlojamiento = () => {
  const [descripcion, setDescripcion] = useState('');
  const [tiposAlojamiento, setTiposAlojamiento] = useState([]);
  const [alojamientoEditando, setAlojamientoEditando] = useState(null);
  const [descripcionEditando, setDescripcionEditando] = useState('');


  const enviar = async (e) => {
    e.preventDefault();
    const newAlojamiento = {
      Descripcion: descripcion
    };
    try {
      const response = await fetch('http://localhost:3000/tiposAlojamiento/createTipoAlojamiento', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newAlojamiento)
      });
      if (response.ok) {
        alert('alojamiento agregado');
         } else {
        alert('error al agregar el alojamiento');
      }
    } catch (error) {
      alert('error al establecer el servicio.');
    }
  };

  const obtenerTiposAlojamiento = async () => {
    try {
      const response = await fetch('http://localhost:3000/tiposAlojamiento/getTiposAlojamiento');
      if (response.ok) {
        const data = await response.json();
        setTiposAlojamiento(data);
      } else {
        alert('error al obtener los tipos de alojamiento');
      }
    } catch (error) {
      alert('error al establecer el servicio.');
    }
  };

  const eliminarAlojamiento = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/tiposAlojamiento/deleteTipoAlojamiento/${id}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        alert('Alojamiento eliminado');
        obtenerTiposAlojamiento(); // Actualizar la lista después de eliminar
      } else {
        alert('Error al eliminar el alojamiento');
      }
    } catch (error) {
      alert('Error al establecer el servicio.');
    }
  };

  useEffect(() => {
    obtenerTiposAlojamiento();
  }, []);

  const iniciarEdicion = (tipo) => {
    setAlojamientoEditando(tipo.idTipoAlojamiento);
    setDescripcionEditando(tipo.Descripcion);
  };
  const confirmarEdicion = async () => {
    const alojamientoActualizado = {
      Descripcion: descripcionEditando
    };
    try {
      const response = await fetch(`http://localhost:3000/tiposAlojamiento/putTipoAlojamiento/${alojamientoEditando}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(alojamientoActualizado)
      });
      if (response.ok) {
        alert('Alojamiento actualizado');
        obtenerTiposAlojamiento();
      } else {
        alert('Error al actualizar el alojamiento');
      }
    } catch (error) {
      alert('Error al establecer el servicio.');
    }
    setAlojamientoEditando(null);
  };
  return (
    <div className="contenedorAddAlojamientos">
      <h2>agregar alojamiento</h2>
      <p>ingresa los datos del alojamiento</p>
      <form onSubmit={enviar}>
        <div>
          <label htmlFor="descripcion">Descripcion: </label>
          <input 
            type="text"
            id="descripcion"
            value={descripcion}
            onChange={e => setDescripcion(e.target.value)}
          />
        </div>
        <button type="submit">enviar</button>
      </form>
      <h2>Lista de Tipos de Alojamiento</h2>
      <ul>
      {tiposAlojamiento.map((tipo, index) => {
        return (
          <li key={index} className="datos-negros">
            {alojamientoEditando === tipo.idTipoAlojamiento ? (
              <>
                <input 
                  type="text"
                  value={descripcionEditando}
                  onChange={e => setDescripcionEditando(e.target.value)}
                />
                <button onClick={confirmarEdicion}>Confirmar</button>
              </>
            ) : (
              <>
                {tipo.idTipoAlojamiento}, {tipo.Descripcion}
                <button onClick={() => iniciarEdicion(tipo)}>Editar</button>
                <button onClick={() => eliminarAlojamiento(tipo.idTipoAlojamiento)}>Eliminar</button>
              </>
            )}
          </li>
        );
      })}
</ul>
    </div>
  );
};