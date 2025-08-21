import React, { useState, useEffect } from 'react'
import './About.css'

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const images = [
    {
      url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      alt: 'Estudiantes en el laboratorio',
      title: 'Laboratorio de Ciencias'
    },
    {
      url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      alt: 'Aula de tecnología',
      title: 'Aulas Digitalizadas'
    },
    {
      url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      alt: 'Estudiantes trabajando en equipo',
      title: 'Trabajo Colaborativo'
    },
    {
      url: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      alt: 'Biblioteca del colegio',
      title: 'Centro de Recursos'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      )
    }, 4000)

    return () => clearInterval(interval)
  }, [images.length])

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const goToImage = (index) => {
    setCurrentImageIndex(index)
  }

  return (
    <section id="nosotros" className="about">
      <div className="about-container">
        <div className="about-content">
          <h2 className="section-title">¿Quiénes somos?</h2>
          <p className="about-description">
            Las grandes mentes no piensan solas. Viven en un ambiente creativo de alta tensión intelectual, 
            donde pueden nutrirse de una rica diversidad. Comparten sus días investigando y descubriendo 
            en el verdadero laboratorio multidisciplinario y tecnológico que es nuestro colegio.
          </p>
          
          <div className="about-stats">
            <div className="stat-item">
              <h3>25+</h3>
              <p>Años de experiencia</p>
            </div>
            <div className="stat-item">
              <h3>98%</h3>
              <p>Graduados</p>
            </div>
            <div className="stat-item">
              <h3>100+</h3>
              <p>Estudiantes activos</p>
            </div>
          </div>
        </div>
        
        <div className="about-image">
          <div className="image-slider">
            <div className="slider-container">
              {images.map((image, index) => (
                <div 
                  key={index}
                  className={`slider-image ${index === currentImageIndex ? 'active' : ''}`}
                  style={{ backgroundImage: `url(${image.url})` }}
                >
                  <div className="image-overlay">
                    <h3>{image.title}</h3>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="slider-btn prev" onClick={prevImage}>
              ‹
            </button>
            <button className="slider-btn next" onClick={nextImage}>
              ›
            </button>
            
            <div className="slider-dots">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => goToImage(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
