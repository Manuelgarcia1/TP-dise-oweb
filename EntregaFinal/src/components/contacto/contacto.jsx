import { useState } from 'react';
import './contacto.css';

const FormularioContacto = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [asunto, setAsunto] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const formData = {
      nombre,
      email,
      telefono,
      asunto,
      mensaje,
    };
    alert(`Datos del formulario:\n${JSON.stringify(formData, null, 2)}`);
  };
  return (
    <div className="contact_form">
      <h2 className="title-contacto">Contacto</h2>
      <h3 className="subtitle-contacto">Escríbenos y en breve los pondremos en contacto contigo</h3>
      <div className="formulario">      
        <form onSubmit={handleSubmit}>                                    
          <div className="label-contain">
            <label htmlFor="nombre" className="label_input">Nombre
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
          </div>                            
          <div className="label-contain">
            <label htmlFor="email" className="label_input">Email
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
          </div>                        
          <div className="label-contain">
            <label htmlFor="telefono" className="label_input">Teléfono
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
          </div>                                                                
          <p className="label-contain">
            <label htmlFor="asunto" className="label_input">Asunto
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
          <div className="label-contain">
            <label htmlFor="mensaje" className="label_input">Mensaje
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
          </div>  
          <div className="label-contain btn-contain">                                                    
            <button className="btn-enviar" type="submit" name="enviar_formulario" id="enviar">Enviar</button>
          </div>
          <div className="label-contain btn-contain">
            <p className="aviso">
              <span className="obligatorio">*</span>los campos son obligatorios.
            </p>   
          </div>                                              
        </form>
      </div>  
    </div>
  );
};

export default FormularioContacto;