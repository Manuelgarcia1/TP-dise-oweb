import React, { useState } from 'react';
import './contacto.css';

const FormularioContacto = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [website, setWebsite] = useState('');
    const [asunto, setAsunto] = useState('');
    const [mensaje, setMensaje] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      alert('Su mensaje fue enviado, nos comunicaremos a la brevedad');
    };
  
    return (
      <div className="contact_form">
        <div className="formulario">
          <h2 className="title-contacto">Contacto</h2>
          <h3 className="subtitle-contacto">Escríbenos y en breve los pondremos en contacto contigo</h3>
          <form onSubmit={handleSubmit}>
            <p className="label-contain">
              <label htmlFor="nombre" className="colocar_nombre">Nombre
                <span className="obligatorio">*</span>
              </label>
              <input
                className="input-form-contacto"
                type="text"
                name="introducir_nombre"
                id="nombre"
                required
                placeholder="Escribe tu nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </p>
            <p className="label-contain">
              <label htmlFor="email" className="colocar_email">Email
                <span className="obligatorio">*</span>
              </label>
              <input
                className="input-form-contacto"
                type="email"
                name="introducir_email"
                id="email"
                required
                placeholder="Escribe tu Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </p>
            <p className="label-contain">
              <label htmlFor="telefono" className="colocar_telefono">Teléfono
              </label>
              <input
                className="input-form-contacto"
                type="tel"
                name="introducir_telefono"
                id="telefono"
                placeholder="Escribe tu teléfono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
            </p>
            <p className="label-contain">
              <label htmlFor="website" className="colocar_website">Sitio web
              </label>
              <input
                className="input-form-contacto"
                type="url"
                name="introducir_website"
                id="website"
                placeholder="Escribe la URL de tu web"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </p>
            <p className="label-contain">
              <label htmlFor="asunto" className="colocar_asunto">Asunto
                <span className="obligatorio">*</span>
              </label>
              <input
                className="input-form-contacto"
                type="text"
                name="introducir_asunto"
                id="asunto"
                required
                placeholder="Escribe un asunto"
                value={asunto}
                onChange={(e) => setAsunto(e.target.value)}
              />
            </p>
            <p className="label-contain">
              <label htmlFor="mensaje" className="colocar_mensaje">Mensaje
                <span className="obligatorio">*</span>
              </label>
              <textarea
                name="introducir_mensaje"
                className="texto_mensaje"
                id="mensaje"
                required
                placeholder="Deja aquí tu comentario..."
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
              ></textarea>
            </p>
            <button className="btn-form-contacto" type="submit" name="enviar_formulario" id="enviar">Enviar</button>
            <p className="aviso">
              <span className="obligatorio">*</span>los campos son obligatorios.
            </p>
          </form>
        </div>
      </div>
    );
};
  

export default ContactoComponent;