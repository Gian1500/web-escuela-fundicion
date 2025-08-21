import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Escuela Primaria Fundición</h3>
            <p>Formando líderes del futuro con una educación de excelencia, innovadora y comprometida con los valores.</p>
            <div className="social-links">
              <a href="#" className="social-link">📘</a>
              <a href="#" className="social-link">📷</a>
              <a href="#" className="social-link">🐦</a>
              <a href="#" className="social-link">📺</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Enlaces Rápidos</h4>
            <ul className="footer-links">
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#nosotros">Nosotros</a></li>
              <li><a href="#metodologia">Metodología</a></li>
              <li><a href="#noticias">Noticias</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Admisiones</h4>
            <ul className="footer-links">
              <li><a href="#">Proceso de Admisión</a></li>
              <li><a href="#">Requisitos</a></li>
              <li><a href="#">Calendario Escolar</a></li>
              <li><a href="#">Becas y Ayuda</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contacto</h4>
            <p>📞 (011) 1234-5678</p>
            <p>📧 info@escuelafundicion.edu.ar</p>
            <p>📍 Uspallata, Mendoza, Argentina</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 Escuela Fundición. Todos los derechos reservados.</p>
          <div className="footer-bottom-links">
            <a href="#">Política de Privacidad</a>
            <a href="#">Términos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
