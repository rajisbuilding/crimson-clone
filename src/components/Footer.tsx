import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* CTA Banner */}
      <div className="border-b border-background/10">
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="font-sans text-lg text-background/80">
              Book a free consultation with one of our expert advisors.
            </p>
            <Button 
              className="rounded-full bg-primary text-primary-foreground hover:bg-crimson-dark px-8"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {/* Logo & Description */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
                <span className="text-primary-foreground font-serif font-bold text-lg">C</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-semibold text-background leading-tight">Crimson</span>
                <span className="text-[10px] text-background/60 tracking-wider uppercase">Education</span>
              </div>
            </div>
            <p className="text-background/60 text-sm mb-6 max-w-xs">
              The world's leading college admissions consulting company, helping students get into their dream universities.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Admissions */}
          <div>
            <h4 className="font-semibold text-background mb-4">Admissions</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/60 hover:text-background text-sm transition-colors">US College</a></li>
              <li><a href="#" className="text-background/60 hover:text-background text-sm transition-colors">UK University</a></li>
              <li><a href="#" className="text-background/60 hover:text-background text-sm transition-colors">Graduate School</a></li>
              <li><a href="#" className="text-background/60 hover:text-background text-sm transition-colors">MBA Programs</a></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-semibold text-background mb-4">About</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/60 hover:text-background text-sm transition-colors">Our Story</a></li>
              <li><a href="#" className="text-background/60 hover:text-background text-sm transition-colors">Our Team</a></li>
              <li><a href="#" className="text-background/60 hover:text-background text-sm transition-colors">Results</a></li>
              <li><a href="#" className="text-background/60 hover:text-background text-sm transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-background mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/60 hover:text-background text-sm transition-colors">Blog</a></li>
              <li><a href="#" className="text-background/60 hover:text-background text-sm transition-colors">Events</a></li>
              <li><a href="#" className="text-background/60 hover:text-background text-sm transition-colors">Guides</a></li>
              <li><a href="#" className="text-background/60 hover:text-background text-sm transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-background mb-4">Contact</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/60 hover:text-background text-sm transition-colors">Get Started</a></li>
              <li><a href="#" className="text-background/60 hover:text-background text-sm transition-colors">Locations</a></li>
              <li><a href="#" className="text-background/60 hover:text-background text-sm transition-colors">Support</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-background/40 text-sm">
              © 2024 Crimson Education. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6">
              <a href="#" className="text-background/40 hover:text-background text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-background/40 hover:text-background text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-background/40 hover:text-background text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
