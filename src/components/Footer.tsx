import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Heart, Instagram } from "lucide-react";

const Footer = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Education", path: "/education" },
    { name: "Projects", path: "/projects" },
    { name: "Extracurricular", path: "/extracurricular" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    { icon: Mail, href: "mailto:alibadeaditya@gmail.com", label: "Email" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/aditya-alibade-6918a8286", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/AdityaAlibade", label: "GitHub" },
    { icon: Instagram, href: "https://www.instagram.com/aditya_alibade", label: "Instagram" },
  ];

  return (
    <footer className="glass border-t border-primary/10 mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Alibade Aditya</h3>
            <p className="text-muted-foreground text-sm">
              Computer Engineering Student | Game Developer | Android Developer | AI Enthusiast | Web & App Innovator
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-primary/10 hover:glow-primary transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary/10 pt-8 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            © 2025 Alibade Aditya | Built with <Heart className="w-4 h-4 text-primary" /> using
            React, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
