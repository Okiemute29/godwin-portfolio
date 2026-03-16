import { useState, useEffect } from 'react'
import ScrollReveal from 'scrollreveal'
import { experiences, educations } from '../../data/index'

function Work() {
  const [activeTab, setActiveTab] = useState('experience')

  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '60px',
      duration: 2500,
      delay: 400,
      reset: true,
    })

    sr.reveal('.work .section__title')
    sr.reveal('.work__tabs', { delay: 500 })
  }, [])

  return (
    <section className="work section">
      <h2 className="section__title">
        <span>My Work</span>
        <br />
        Experience
      </h2>

      <div className="work__container container grid">
        <div className="work__tabs">
          <button
            className={`work__button${activeTab === 'experience' ? ' work-active' : ''}`}
            onClick={() => setActiveTab('experience')}
          >
            Experience <i className="ri-briefcase-3-line"></i>
          </button>

          <button
            className={`work__button${activeTab === 'education' ? ' work-active' : ''}`}
            onClick={() => setActiveTab('education')}
          >
            Education <i className="ri-graduation-cap-line"></i>
          </button>
        </div>

        <div className="work__area">
          <div className="work__line"></div>

          <div className="work__content work-active" style={{ display: 'grid', rowGap: '4rem' }}>
            {activeTab === 'experience' &&
              experiences.map((exp, index) => (
                <div className="work__card" key={index}>
                  <div className="work__data">
                    <div>
                      <h1 className="work__title">{exp.title}</h1>
                      <h3 className="work__subtitle">{exp.company}</h3>
                    </div>
                    <h2 className="work__year">{exp.period}</h2>
                  </div>
                  <p className="work__description">{exp.description}</p>
                </div>
              ))}

            {activeTab === 'education' &&
              educations.map((edu, index) => (
                <div className="work__card" key={index}>
                  <div className="work__data">
                    <div>
                      <h1 className="work__title">{edu.degree}</h1>
                      <h3 className="work__subtitle">{edu.school}</h3>
                    </div>
                    <h2 className="work__year">{edu.period}</h2>
                  </div>
                  <p className="work__description">{edu.description}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work
