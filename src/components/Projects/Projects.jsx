import { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import ScrollReveal from 'scrollreveal'
import { projects } from '../../data/index'
import 'swiper/css'
import 'swiper/css/pagination'

function Projects() {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '60px',
      duration: 2000,
      delay: 300,
      reset: true,
    })

    sr.reveal('.projects .section__title')
    sr.reveal('.projects__container', { delay: 500 })
  }, [])

  const count = projects.length

  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">
        I make Incredible <br />
        <span>Projects</span>
      </h2>

      <div className="projects__container container grid">
        <Swiper
          className="projects__swiper"
          modules={[Pagination, Autoplay]}
          loop={count > 1}
          pagination={{ clickable: true }}
          autoplay={count > 1 ? { delay: 3000, disableOnInteraction: false } : false}
          spaceBetween={24}
          grabCursor={true}
          speed={600}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: Math.min(2, count) },
            1150: { slidesPerView: Math.min(3, count) },
          }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.num}>
              <article className="projects__card">
                <div className="blob"></div>

                <div className="projects__number">
                  <h1>{project.num}</h1>
                  <h3>{project.type}</h3>
                </div>

                <div className="projects__data">
                  <h1 className="projects__title">{project.title}</h1>
                  <p className="projects__subtitle">Technologies used</p>
                  <p className="projects__description">{project.tech}</p>
                </div>

                <div className="projects__image">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="projects__img"
                  />
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projects__button"
                  >
                    <i className="ri-arrow-right-up-long-line"></i>
                  </a>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Projects
