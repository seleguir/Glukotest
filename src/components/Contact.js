import React from 'react';

const Contact = () => {
  return (
    <footer style={{
      backgroundColor: '#f4f4f4',
      padding: '20px',
      textAlign: 'center',
      marginTop: '20px',
      borderTop: '1px solid #ccc'
    }}>
      <h2>Contacto</h2>
      <p>Dirección: Santiago del Estero 1945, Mar del Plata</p>
      <p>Teléfono: 0223 496-3071</p>
      <p>Email: glukotest@hotmail.com</p>

      <h2>Ubicación</h2>
      <iframe 
        title="Mapa de Ubicación" 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3143.941449520589!2d-57.55020362336442!3d-38.001826144810856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584dea063e02b1b%3A0x5e9b8d28847452e3!2sGlukotest!5e0!3m2!1ses!2sus!4v1727362087935!5m2!1ses!2sus"
        width="600" 
        height="450" 
        style={{ border: 0 }} 
        allowFullScreen="" 
        loading="lazy">
      </iframe>

      <form style={{ marginTop: '20px' }}>
        <input type="text" placeholder="Tu nombre" style={{ margin: '5px', padding: '10px' }} /><br />
        <input type="email" placeholder="Tu email" style={{ margin: '5px', padding: '10px' }} /><br />
        <textarea placeholder="Tu mensaje" rows="4" style={{ margin: '5px', padding: '10px' }} /><br />
        <button type="submit" style={{ padding: '10px 20px', marginTop: '10px' }}>Enviar</button>
      </form>
    </footer>
  );
};

export default Contact;