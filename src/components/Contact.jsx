import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <section id="contacto" className="contact">
      <div className="contact-container">
        <h2 className="section-title">Contacto e Información</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <h3>📍 Ubicación Principal</h3>
              <p>Av. Educación 1234</p>
              <p>Ciudad de Buenos Aires, Argentina</p>
              <p>📞 (011) 1234-5678</p>
              <p>📧 info@colegioexcelencia.edu.ar</p>
            </div>
            
            <div className="contact-item">
              <h3>🕒 Horarios de Atención</h3>
              <p>Lunes a Viernes: 8:00 - 18:00</p>
              <p>Sábados: 9:00 - 13:00</p>
            </div>
            
          </div>
          
          <div className="contact-form">
            <h3>Envíanos un mensaje</h3>
            <form className="form">
              <div className="form-group">
                <input type="text" placeholder="Nombre completo" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email" required />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Teléfono" />
              </div>
              <div className="form-group">
                <textarea placeholder="Mensaje" rows="4" required></textarea>
              </div>
              <button type="submit" className="btn-primary">Enviar Mensaje</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
