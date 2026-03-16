import { useEffect } from 'react'
import ScrollReveal from 'scrollreveal'
import { testimonials } from '../../data/index'

// Duplicate the array for infinite scroll illusion
const duplicatedTestimonials = [...testimonials, ...testimonials]

function TestimonialCard({ testimonial }) {
  return (
    <article className="testimonials__card">
      <div className="blob"></div>
      <div className="testimonials__data">
        <img
          src={testimonial.img}
          alt={testimonial.name}
          className="testimonials__img"
        />
        <h2 className="testimonials__name">{testimonial.name}</h2>
        <div className="testimonial__rating">
          <div className="testimonial__stars">
            <i className="ri-star-line"></i>
            <i className="ri-star-line"></i>
            <i className="ri-star-line"></i>
            <i className="ri-star-line"></i>
            <i className="ri-star-line"></i>
          </div>
          <h3 className="testimonials__number">{testimonial.rating}</h3>
        </div>
        <p>{testimonial.text}</p>
      </div>
    </article>
  )
}

function Testimonials() {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '60px',
      duration: 2500,
      delay: 400,
      reset: true,
    })

    sr.reveal('.testimonials .section__title')
    sr.reveal('.testimonials__container', { delay: 500 })
  }, [])

  return (
    <section className="testimonials section">
      <h2 className="section__title">
        <span>What They Say</span>
        <br />
        About Me
      </h2>

      <div className="testimonials__container container grid">
        {/* Row 1 - forward scroll */}
        <div className="testimonial__content">
          {duplicatedTestimonials.map((t, i) => (
            <TestimonialCard key={`row1-${i}`} testimonial={t} />
          ))}
        </div>

        {/* Row 2 - reverse scroll */}
        <div className="testimonial__content testimonials__reverse">
          {duplicatedTestimonials.map((t, i) => (
            <TestimonialCard key={`row2-${i}`} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
