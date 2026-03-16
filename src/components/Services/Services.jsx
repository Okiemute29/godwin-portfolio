import { useState, useEffect } from 'react'
import ScrollReveal from 'scrollreveal'
import { services } from '../../data/index'

function Services() {
  const [openIndex, setOpenIndex] = useState(null)

  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '60px',
      duration: 2000,
      delay: 300,
      reset: true,
    })

    sr.reveal('.services .section__title')
    sr.reveal('.services__card', { interval: 150, delay: 500 })
  }, [])

  const toggleCard = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="services section">
      <h2 className="section__title">
        What I <span>Offer</span>
      </h2>

      <div className="services__container container grid">
        {services.map((service, index) => {
          const isOpen = openIndex === index
          return (
            <div
              key={index}
              className={`services__card ${isOpen ? 'services__open' : 'services__close'}`}
            >
              <div className={service.blobClass}></div>

              <div className="services__data">
                <h2 className="services__title">{service.title}</h2>
                <p className="services__description">{service.description}</p>
              </div>

              <div className="services__info">
                <h3 className="services__subtitle">{service.subtitle}</h3>
                <ul className="services__skills">
                  {service.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="services__skill">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className="services__button"
                onClick={() => toggleCard(index)}
                aria-label={`Toggle ${service.title}`}
              >
                <i className="ri-arrow-down-s-line"></i>
              </button>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Services
