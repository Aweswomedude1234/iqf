import { Link } from 'wouter';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-accent" data-testid="text-org-name">
              IQ Foundation
            </h3>
            <p className="text-muted mb-6" data-testid="text-org-description">
              Empowering young minds through innovative education and hands-on learning experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted hover:text-accent transition-colors" data-testid="link-facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted hover:text-accent transition-colors" data-testid="link-twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted hover:text-accent transition-colors" data-testid="link-instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted hover:text-accent transition-colors" data-testid="link-linkedin">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted hover:text-accent transition-colors" data-testid="link-youtube">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4" data-testid="text-quick-links-title">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about">
                  <span className="text-muted hover:text-accent transition-colors" data-testid="link-footer-about">
                    About Us
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/events">
                  <span className="text-muted hover:text-accent transition-colors" data-testid="link-footer-events">
                    Events
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/missions">
                  <span className="text-muted hover:text-accent transition-colors" data-testid="link-footer-missions">
                    Our Missions
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/team">
                  <span className="text-muted hover:text-accent transition-colors" data-testid="link-footer-team">
                    Our Team
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="font-semibold mb-4" data-testid="text-get-involved-title">Get Involved</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/join-us">
                  <span className="text-muted hover:text-accent transition-colors" data-testid="link-footer-join-us">
                    Join Us
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/join-us">
                  <span className="text-muted hover:text-accent transition-colors" data-testid="link-footer-volunteer">
                    Volunteer
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/join-us">
                  <span className="text-muted hover:text-accent transition-colors" data-testid="link-footer-sponsor">
                    Sponsor
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/join-us">
                  <span className="text-muted hover:text-accent transition-colors" data-testid="link-footer-partner">
                    Partner
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4" data-testid="text-contact-title">Contact</h4>
            <div className="space-y-2 text-muted">
              <div className="flex items-center" data-testid="contact-email">
                <Mail className="h-4 w-4 mr-2" />
                <span>info@iqfoundation.org</span>
              </div>
              <div className="flex items-center" data-testid="contact-phone">
                <Phone className="h-4 w-4 mr-2" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center" data-testid="contact-address">
                <MapPin className="h-4 w-4 mr-2" />
                <span>123 Education St, Learning City</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-muted" data-testid="text-copyright">
            &copy; 2024 IQ Foundation. All rights reserved. Empowering minds, building futures.
          </p>
        </div>
      </div>
    </footer>
  );
}
