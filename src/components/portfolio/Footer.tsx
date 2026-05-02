import { Github, Linkedin, MessageCircle } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
      <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Robert Godwin. Crafted with care in Lagos.</p>
      <div className="flex items-center gap-3">
        <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="w-9 h-9 rounded-full glass flex items-center justify-center hover:text-primary transition-colors"><Github className="w-4 h-4" /></a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-full glass flex items-center justify-center hover:text-primary transition-colors"><Linkedin className="w-4 h-4" /></a>
        <a href="https://wa.me/2348169896382" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="w-9 h-9 rounded-full glass flex items-center justify-center hover:text-primary transition-colors"><MessageCircle className="w-4 h-4" /></a>
      </div>
    </div>
  </footer>
);

export default Footer;