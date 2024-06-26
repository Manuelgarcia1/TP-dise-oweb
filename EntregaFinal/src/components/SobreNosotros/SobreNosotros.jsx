import React from 'react';
import Paisaje from '/public/assets/img/paisaje.jpg';
import './sobreNosotros.css'

const SobreNosotros = () => {
    return (
        <div>
            <div>
            <h1 className="titulo-sn">¿Quienes somos?</h1>
                <div className="contenedor-sn">
                    <div className="texto-sn">
                        <section className="seccion-sn">
                            <h4>Nuestra Misión</h4>
                            <p>En Dream Voyages, nuestra misión es inspirar a los viajeros a explorar el mundo de manera auténtica, responsable y emocionante. Nos esforzamos por superar las expectativas de nuestros clientes, ofreciendo destinos increíbles, actividades emocionantes y servicios personalizados.</p>
                        </section>
                        <section className="seccion-sn">
                            <h4>Nuestro Compromiso</h4>
                            <ul className="ul-sn">
                                <li className="ul-sn">Calidad: Trabajamos con los mejores proveedores y destinos para garantizar la máxima calidad en cada experiencia de viaje.</li>
                                <li className="ul-sn">Responsabilidad Ambiental: Nos comprometemos a proteger el medio ambiente y las comunidades locales en cada destino que visitamos.</li>
                                <li className="ul-sn">Innovación: Estamos constantemente buscando nuevas formas de mejorar y enriquecer la experiencia de viaje de nuestros clientes.</li>
                                <li className="ul-sn">Atención Personalizada: Cada viaje es único, y nos dedicamos a ofrecer atención personalizada y asesoramiento experto en cada paso del camino.</li>
                            </ul>
                        </section>
                        <section className="seccion-sn">
                            <h4>Nuestro Equipo</h4>
                            <p>En Dream Voyages, contamos con un equipo de profesionales apasionados por los viajes y dedicados a hacer realidad los sueños de nuestros clientes. Nuestros agentes de viajes están capacitados para brindar asesoramiento experto, recomendaciones personalizadas y un servicio excepcional en cada viaje.</p>
                        </section>
                    </div>
                    <div className="imagen-sn-contenedor">
                        <img className="imagen-sn" src={Paisaje} alt="Imagen Grande" />
                    </div>
                </div>
            </div>            
        </div>
    );
};

export default SobreNosotros;