import { Github, Linkedin, Mail, MessageCircle, Phone, Copy, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import Reveal from "@/components/portfolio/Reveal";

const ContactCTA = () => {
  const [copied, setCopied] = useState(false);
  const email = "godwinrobert2906@gmail.com";

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    toast.success("Email copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container">
        <Reveal className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">Contact</p>
          <h2 className="font-display text-display-sm font-semibold leading-tight">
            Building something ambitious?
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">
            I'm open to frontend engineering roles and interesting products where I can solve
            real problems and keep growing as an engineer.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {email}
            </button>
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-sm border border-border hover:border-primary/60 transition-colors"
            >
              <Mail className="w-4 h-4" /> Send Email
            </a>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <a href="tel:+2348169896382" className="inline-flex items-center gap-2 hover:text-foreground transition-colors">
              <Phone className="w-4 h-4 text-primary" /> +234 816 989 6382
            </a>
            <a
              href="https://wa.me/2348169896382"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-primary" /> WhatsApp
            </a>
            <a
              href="https://www.linkedin.com/in/godwin-robert-9b1a0b20b/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Linkedin className="w-4 h-4 text-primary" /> LinkedIn
            </a>
            <a
              href="https://github.com/Okiemute29"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Github className="w-4 h-4 text-primary" /> GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ContactCTA;
