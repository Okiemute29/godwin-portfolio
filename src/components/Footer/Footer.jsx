function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer grid">
      <div className="blob-animate"></div>

      <div className="footer__copy">
        All Rights Reserved By <span>Robert Godwin</span>
      </div>

      <div className="footer__year">
        &copy; <span>{currentYear}</span>
      </div>
    </footer>
  )
}

export default Footer
