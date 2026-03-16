import Header from './components/Header/Header'
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Work from './components/Work/Work'
import Services from './components/Services/Services'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <div className="cursor" id="cursor"></div>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Projects />
        <Work />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
