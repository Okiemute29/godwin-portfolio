import { useEffect, useRef } from 'react'
import { animate, stagger } from 'animejs'
import ScrollReveal from 'scrollreveal'
import { personalInfo, socialLinks } from '../../data/index'

function Home() {
  const prof1Ref = useRef(null)
  const prof2Ref = useRef(null)

  // Custom cursor
  useEffect(() => {
    const cursor = document.getElementById('cursor')
    if (!cursor) return

    const moveCursor = (e) => {
      cursor.style.left = e.clientX - 25 + 'px'
      cursor.style.top = e.clientY - 25 + 'px'
    }
    const hideCursor = () => cursor.classList.add('hide-cursor')
    const showCursor = () => cursor.classList.remove('hide-cursor')

    window.addEventListener('mousemove', moveCursor)
    const links = document.querySelectorAll('a, button')
    links.forEach((link) => {
      link.addEventListener('mouseenter', hideCursor)
      link.addEventListener('mouseleave', showCursor)
    })

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      links.forEach((link) => {
        link.removeEventListener('mouseenter', hideCursor)
        link.removeEventListener('mouseleave', showCursor)
      })
    }
  }, [])

  // Anime.js character animation
  useEffect(() => {
    if (!prof1Ref.current || !prof2Ref.current) return

    const chars1 = prof1Ref.current.querySelectorAll('span')
    const chars2 = prof2Ref.current.querySelectorAll('span')

    animate(chars1, {
      y: [{ to: ['100%', '0%'] }, { to: '-100%', delay: 4000, ease: 'in(3)' }],
      duration: 900,
      ease: 'out(3)',
      delay: stagger(80),
      loop: true,
    })

    animate(chars2, {
      y: [{ to: ['100%', '0%'] }, { to: '-100%', delay: 4000, ease: 'in(3)' }],
      duration: 900,
      ease: 'out(3)',
      delay: stagger(80),
      loop: true,
    })
  }, [])

  // ScrollReveal
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '60px',
      duration: 2000,
      delay: 300,
      reset: true,
    })

    sr.reveal('.home__image')
    sr.reveal('.home__data', { origin: 'bottom', delay: 900 })
    sr.reveal('.home__info', { origin: 'bottom', delay: 1200 })
    sr.reveal('.home__social', { delay: 1200 })
    sr.reveal('.home__cv', { delay: 1200 })
  }, [])

  return (
    <section className="home section section-top section-two" id="home">
      <div className="home__shadow"></div>
      <div className="home__container container grid">
        <div className="home__data">
          <h3 className="home__greeting">Hello, I'm</h3>
          <h1 className="home__name">
            {personalInfo.firstName} <br />
            {personalInfo.lastName}
          </h1>
        </div>

        <div className="home__image">
          <div className="blob-animate"></div>
          <img
            src={personalInfo.heroImage}
            alt="Profile Picture"
            className="home__profile"
          />
        </div>

        <div className="home__info">
          <h3 className="home__split">{personalInfo.tagline}</h3>
          <h2 className="home__profession-1" ref={prof1Ref}>
            {'Frontend'.split('').map((char, i) => (
              <span key={i} style={{ display: 'inline-block' }}>{char}</span>
            ))}
          </h2>
          <h2 className="home__profession-2" ref={prof2Ref}>
            {'Web Developer'.split('').map((char, i) => (
              <span key={i} style={{ display: 'inline-block' }}>
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </h2>
        </div>

        <div className="home__social">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="home__social-link"
              aria-label={link.label}
            >
              <i className={link.icon}></i>
            </a>
          ))}
        </div>

        <a
          href={personalInfo.resumePath}
          download
          target="_blank"
          rel="noopener noreferrer"
          className="home__cv"
        >
          Resume <i className="ri-file-list-2-line"></i>
        </a>
      </div>
    </section>
  )
}

export default Home
