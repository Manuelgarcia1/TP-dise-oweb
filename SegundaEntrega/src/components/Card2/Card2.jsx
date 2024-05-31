import './Card2.css';
import img1 from '../../assets/img/Rectangle13.png';

const Promociones = () => {
    const ofertas = [
        {
            imgSrc: img1,
            title: 'Cuarto',
            subtitle: 'Luna de miel',
            description: 'Disfrute de una inolvidable cena romántica para dos',
            price: '$699 /noche'
        },
        {
            imgSrc: img1,
            title: 'Cuarto',
            subtitle: 'Luna de miel',
            description: 'Disfrute de una inolvidable cena romántica para dos',
            price: '$699 /noche'
        },
        {
            imgSrc: img1,
            title: 'Cuarto',
            subtitle: 'Luna de miel',
            description: 'Disfrute de una inolvidable cena romántica para dos',
            price: '$699 /noche'
        }
    ];

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
            <div className="cards">
                {ofertas.map((oferta, index) => (
                    <div className="card1" key={index}>
                        <img src={oferta.imgSrc} alt="hotel" />
                        <h2>{oferta.title}</h2>
                        <h3>{oferta.subtitle}</h3>
                        <h4>{oferta.description}</h4>
                        <div className="card-precio">
                            <span className="precio">{oferta.price.split(' ')[0]}</span>
                            <span className="texto-precio">{oferta.price.split(' ')[1]}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Promociones;