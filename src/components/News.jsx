import React, { useState, useEffect } from 'react'
import './News.css'

const News = () => {
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0)

  const news = [
    {
      id: 1,
      title: "Nuevo Programa de Robótica Avanzada",
      excerpt: "Implementamos un programa integral de robótica y programación para estudiantes de secundaria, preparándolos para el futuro tecnológico.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      date: "15 de Diciembre, 2026",
      category: "Tecnología",
      readTime: "3 min"
    },
    {
      id: 2,
      title: "Exitoso Modelo de Naciones Unidas",
      excerpt: "Nuestros estudiantes destacaron en el Modelo de Naciones Unidas regional, demostrando habilidades de debate y diplomacia internacional.",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      date: "10 de Diciembre, 2026",
      category: "Eventos",
      readTime: "4 min"
    },
    {
      id: 3,
      title: "Alianza con Universidad de Harvard",
      excerpt: "Firmamos un convenio de colaboración académica con la Universidad de Harvard para intercambios estudiantiles y programas conjuntos.",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      date: "5 de Diciembre, 2026",
      category: "Académico",
      readTime: "5 min"
    },
    {
      id: 4,
      title: "Proyecto de Sustentabilidad Escolar",
      excerpt: "Lanzamos nuestro programa de sustentabilidad con huertas orgánicas y energía renovable, educando en valores ambientales.",
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      date: "1 de Diciembre, 2026",
      category: "Sustentabilidad",
      readTime: "3 min"
    },
    {
      id: 5,
      title: "Campeones en Olimpiadas de Matemáticas",
      excerpt: "Nuestro equipo obtuvo el primer lugar en las Olimpiadas Nacionales de Matemáticas, demostrando excelencia académica.",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      date: "28 de Noviembre, 2026",
      category: "Logros",
      readTime: "4 min"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNewsIndex((prevIndex) => 
        prevIndex === news.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [news.length])

  const nextNews = () => {
    setCurrentNewsIndex((prevIndex) => 
      prevIndex === news.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevNews = () => {
    setCurrentNewsIndex((prevIndex) => 
      prevIndex === 0 ? news.length - 1 : prevIndex - 1
    )
  }

  const goToNews = (index) => {
    setCurrentNewsIndex(index)
  }

  return (
    <section id="noticias" className="news">
      <div className="news-container">
        <h2 className="section-title">Últimas Noticias</h2>
        <p className="section-subtitle">
          Mantente informado sobre los acontecimientos más importantes de nuestra institución
        </p>
        
        <div className="news-slider">
          <div className="news-slider-container">
            {news.map((item, index) => (
              <div 
                key={item.id}
                className={`news-card ${index === currentNewsIndex ? 'active' : ''}`}
              >
                <div className="news-image">
                  <img src={item.image} alt={item.title} />
                  <div className="news-category">{item.category}</div>
                </div>
                <div className="news-content">
                  <div className="news-meta">
                    <span className="news-date">{item.date}</span>
                    <span className="news-read-time">{item.readTime}</span>
                  </div>
                  <h3 className="news-title">{item.title}</h3>
                  <p className="news-excerpt">{item.excerpt}</p>
                  <button className="btn-secondary">Leer más</button>
                </div>
              </div>
            ))}
          </div>
          
          <button className="news-slider-btn prev" onClick={prevNews}>
            ‹
          </button>
          <button className="news-slider-btn next" onClick={nextNews}>
            ›
          </button>
          
          <div className="news-slider-dots">
            {news.map((_, index) => (
              <button
                key={index}
                className={`news-dot ${index === currentNewsIndex ? 'active' : ''}`}
                onClick={() => goToNews(index)}
              />
            ))}
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default News
