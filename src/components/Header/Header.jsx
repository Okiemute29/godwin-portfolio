import { useState, useEffect } from 'react'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  // Scroll active link
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')

    function scrollActive() {
      const scrollDown = window.scrollY
      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 58
        const sectionId = current.getAttribute('id')
        const link = document.querySelector(
          '.nav__menu a[href*=' + sectionId + ']'
        )
        if (link) {
          link.classList.toggle(
            'active-link',
            scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight
          )
        }
      })
    }

    window.addEventListener('scroll', scrollActive)
    return () => window.removeEventListener('scroll', scrollActive)
  }, [])

  // Close menu on outside click
  useEffect(() => {
    if (!menuOpen) return
    const handleClick = (e) => {
      if (!e.target.closest('.nav__menu') && !e.target.closest('.nav__toggle')) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [menuOpen])

  return (
    <header className="header" id="header">
      <div className="blob-animate"></div>
      <nav className="nav container">
        <a href="#" className="nav__logo">RG</a>

        <div className={`nav__menu ${menuOpen ? 'show-menu' : ''}`}>
          <ul className="nav__list">
            <li>
              <a href="#about" className="nav__link" onClick={closeMenu}>About Me</a>
            </li>
            <li>
              <a href="#projects" className="nav__link" onClick={closeMenu}>Projects</a>
            </li>
            <li>
              <a href="#contact" className="nav__link" onClick={closeMenu}>Contact</a>
            </li>
          </ul>

          <button className="nav__close" onClick={closeMenu} aria-label="Close menu">
            <i className="ri-close-line"></i>
          </button>
        </div>

        <button
          className="nav__toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <i className="ri-menu-line"></i>
        </button>
      </nav>
    </header>
  )
}

export default Header
