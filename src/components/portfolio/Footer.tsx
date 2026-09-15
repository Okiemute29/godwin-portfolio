const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
      <p>© {new Date().getFullYear()} Robert Godwin. Crafted with care in Lagos.</p>
    </div>
  </footer>
);

export default Footer;
