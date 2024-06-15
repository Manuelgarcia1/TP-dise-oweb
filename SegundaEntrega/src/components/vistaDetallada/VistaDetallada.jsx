import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const DetalleAlojamiento = () => {
  const { id } = useParams(); // Obtén el parámetro de la URL
  const [alojamiento, setAlojamiento] = useState(null);

  useEffect(() => {
    const fetchAlojamiento = async () => {
      try {
        const response = await fetch(`http://localhost:3000/alojamiento/${id}`);
        if (response.ok) {
          const data = await response.json();
          setAlojamiento(data);
        } else {
          throw new Error('Error al cargar los datos del alojamiento');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchAlojamiento();
  }, [id]);

  if (!alojamiento) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="detalle-alojamiento">
      <h2>{alojamiento.Titulo}</h2>
      <p>{alojamiento.Descripcion}</p>
      <p>Precio por día: {alojamiento.PrecioPorDia}</p>
      <p>Estado: {alojamiento.Estado}</p>
      <p>Dormitorios: {alojamiento.CantidadDormitorios}</p>
      <p>Baños: {alojamiento.CantidadBanios}</p>
      {/* Aquí puedes mostrar más detalles según sea necesario */}
    </div>
  );
};

export default DetalleAlojamiento;