import React from 'react'
import './Features.css'

const Features = () => {
  const features = [
    {
      icon: "🎯",
      title: "Modelo Pedagógico",
      description: "Metodología innovadora basada en el método de casos y trabajo por proyectos"
    },
    {
      icon: "🧠",
      title: "Creativismo Cognitivo",
      description: "Desarrollo del pensamiento creativo y habilidades cognitivas avanzadas"
    },
    {
      icon: "💻",
      title: "Aulas Digitalizadas",
      description: "Tecnología de vanguardia para una educación del siglo XXI"
    },
    {
      icon: "🔍",
      title: "Pensamiento Visible",
      description: "Metodología que hace visible el proceso de aprendizaje"
    },
    {
      icon: "🌍",
      title: "Educación Bilingüe",
      description: "Preparación integral para un mundo globalizado"
    },
    {
      icon: "🤖",
      title: "Robótica y Programación",
      description: "Desarrollo de habilidades tecnológicas y de innovación"
    }
  ]

  return (
    <section id="metodologia" className="features">
      <div className="features-container">
        <h2 className="section-title">Nuestra Metodología</h2>
        <p className="section-subtitle">
          Un proceso de aprendizaje basado en métodos probados y tecnología de vanguardia
        </p>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Features
