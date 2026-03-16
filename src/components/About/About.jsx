import { useEffect } from 'react'
import ScrollReveal from 'scrollreveal'
import { personalInfo } from '../../data/index'

function About() {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '60px',
      duration: 2000,
      delay: 300,
      reset: true,
    })

    sr.reveal('.about__data', { origin: 'left' })
    sr.reveal('.about__image', { origin: 'right', delay: 500 })
  }, [])

  return (
    <section className="about section" id="about">
      <div className="about__shadow"></div>

      <div className="about__container container grid">
        <div className="about__data">
          <h2 className="section__title">
            <span>Creativity</span>
            <br />
            Is My Passion
          </h2>
          <p className="about__description">
            I'm a <b>Frontend Developer</b> with a proven track record at Big
            Gorilla Apps and Carburrant Technology Inc, excelling in{' '}
            <b>JavaScript, ReactJS,</b> and collaborative problem-solving.
            Expert in enhancing user experiences through innovative UI/UX design
            and API integration.
          </p>

          <a
            href={personalInfo.resumePath}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            Resume <i className="ri-file-list-2-line"></i>
          </a>
        </div>

        <div className="about__image">
          <div className="blob-animate"></div>
          <div className="blob-animate"></div>
          <img
            src={personalInfo.aboutImage}
            alt="Profile Picture"
            className="about__profile"
          />
        </div>
      </div>
    </section>
  )
}

export default About
