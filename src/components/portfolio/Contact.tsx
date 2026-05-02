import { Mail, MessageCircle, Phone, Copy, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
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
        <div className="relative glass rounded-3xl p-8 md:p-16 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero opacity-60 pointer-events-none" />
          <div className="relative">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">Contact</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight max-w-2xl mx-auto">
              Let's build something <span className="text-gradient">amazing</span> together
            </h2>
            <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
              Have a project in mind or just want to say hi? My inbox is always open.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <button onClick={copyEmail} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-medium hover:shadow-glow transition-all">
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {email}
              </button>
              <a href={`mailto:${email}`} className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass hover:border-primary transition-all">
                <Mail className="w-4 h-4" /> Send Email
              </a>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
              <a href="tel:+2348169896382" className="inline-flex items-center gap-2 hover:text-foreground">
                <Phone className="w-4 h-4 text-primary" /> +234 816 989 6382
              </a>
              <a href="https://wa.me/2348169896382" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-foreground">
                <MessageCircle className="w-4 h-4 text-primary" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;