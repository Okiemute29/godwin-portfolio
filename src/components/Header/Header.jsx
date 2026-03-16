import { useEffect } from 'react'

function Header() {
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')

    function scrollActive() {
      const scrollDown = window.scrollY

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 58
        const sectionId = current.getAttribute('id')
        const sectionsClass = document.querySelector(
          '.nav__menu a[href*=' + sectionId + ']'
        )

        if (sectionsClass) {
          if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
          } else {
            sectionsClass.classList.remove('active-link')
          }
        }
      })
    }

    window.addEventListener('scroll', scrollActive)
    return () => window.removeEventListener('scroll', scrollActive)
  }, [])

  return (
    <header className="header" id="header">
      <div className="blob-animate"></div>
      <nav className="nav container">
        <a href="#" className="nav__logo">
          RG
        </a>

        <div className="nav__menu">
          <ul className="nav__list">
            <li>
              <a href="#about" className="nav__link">
                About Me
              </a>
            </li>
            <li>
              <a href="#projects" className="nav__link">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="nav__link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
