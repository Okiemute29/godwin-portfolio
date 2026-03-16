import { useState, useEffect } from 'react'
import ScrollReveal from 'scrollreveal'
import { personalInfo, socialLinks } from '../../data/index'

function Contact() {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '60px',
      duration: 2500,
      delay: 400,
      reset: true,
    })

    sr.reveal('.contact .section__title')
    sr.reveal('.contact__data', { delay: 500 })
    sr.reveal('.contact__content', { delay: 600 })
  }, [])

  const handleCopyEmail = () => {
    navigator.clipboard
      .writeText(personalInfo.email)
      .then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      })
      .catch(() => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea')
        textArea.value = personalInfo.email
        document.body.appendChild(textArea)
        textArea.select()
        document.execCommand('copy')
        document.body.removeChild(textArea)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      })
  }

  return (
    <section className="contact section" id="contact">
      <div className="contact__container container grid">
        <div className="contact__data">
          <h2 className="section__title">Contact Me</h2>
          <p className="contact__description">Tell me about your next project.</p>

          <button className="contact__button button" onClick={handleCopyEmail}>
            {copied ? (
              <>
                Email Copied <i className="ri-check-line"></i>
              </>
            ) : (
              <>
                Copy Email <i className="ri-file-copy-line"></i>
              </>
            )}
          </button>
        </div>

        <div className="contact__content grid">
          <div className="contact__info grid">
            <div>
              <h3 className="contact__title">Email</h3>
              <address className="contact__address">{personalInfo.email}</address>
            </div>

            <div>
              <h3 className="contact__title">Location</h3>
              <address className="contact__address">{personalInfo.location}</address>
            </div>
          </div>

          <div className="contact__social">
            <h3 className="contact__title">Social Media</h3>
            <div className="contact__links">
              {socialLinks
                .filter((link) => link.label !== 'WhatsApp')
                .map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__link"
                  >
                    {link.label}
                    <i className="ri-arrow-right-up-long-line"></i>
                  </a>
                ))}
            </div>
          </div>

          <div className="contact__write">
            <h3 className="contact__title">Write Me &amp; We'll Talk</h3>
            <div className="contact__links">
              <a
                href="https://wa.me/2348169896382"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__link"
              >
                WhatsApp
                <i className="ri-arrow-right-up-long-line"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
