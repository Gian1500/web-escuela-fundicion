import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section id="inicio" className="hero">
      <div className="hero-background">

        <div
          className="hero-image-bg"
          style={{
            backgroundImage: `url('/public/images/inicio.jpg')`
          }}
        >
        </div>
      </div>
      
      {/* Overlay para mejorar la legibilidad del texto */}
      <div className="hero-overlay"></div>
      
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Una nueva forma de <span className="highlight">Educación</span>
          </h1>
          <p className="hero-subtitle">
            Formamos personas con valores, que lideran equipos, negocian, resuelven, 
            se expresan y construyen redes sólidas para el futuro.
          </p>
          <div className="hero-actions">
            <button className="btn-primary btn-large">Inscripciones Abiertas 2026</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
