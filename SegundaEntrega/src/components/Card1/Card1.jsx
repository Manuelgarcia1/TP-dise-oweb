import calendarioImg from '../../assets/img/calendario.svg'
import adultoImg from '../../assets/img/adulto.svg';
import chicoImg from '../../assets/img/chico.svg';
import './Card1.css'

const ReservaEstadia = () => {
  return (
    <section>
      <div className="contenedor-datos">
        <div className="datos-mensaje">
          <h2>Reserva tu estadía</h2>
          <h3>Tenemos los mejores descuentos para vos</h3>
        </div>
        <div className="datos-seleccion">
          <div className="datos-calendario">
            <img src={calendarioImg} alt="calendario" />
            <h2>Elija fecha</h2>
          </div>
          <div className="datos-persona">
            <img src={adultoImg} alt="adulto" />
            <h2>Adultos</h2>
            <img src={chicoImg} alt="niño" />
            <h2>Niños</h2>
          </div>
          <div className="datos-button">
            <button>Reservar</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservaEstadia;