import Link from "next/link";
import { Logo } from "./Logo";
import { CookieSettingsLink } from "./CookieConsent";
import { business } from "@/data/business";

export function Footer() {
  return (
    <footer className="bg-navy pt-16 pb-8 text-slate-300">
      <div className="container-site">
        <div className="mb-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Logo variant="light" size="md" />
            <p className="mt-4 mb-5 text-sm leading-7 text-slate-400">
              Vehicle recovery, towing and roadside support for drivers across the region,
              24 hours a day, every day of the year.
            </p>
            <div className="flex gap-3">
              <a href={business.whatsapp} target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 border-b border-red/40 pb-2 text-lg font-bold text-white">Contact Us</h4>
            <div className="space-y-1">
              <div className="contact-info-item">
                <i className="fa-solid fa-phone mt-0.5 shrink-0 text-red"></i>
                <a href={business.tel} className="transition hover:text-white">{business.phoneDisplay}</a>
              </div>
              <div className="contact-info-item">
                <i className="fa-solid fa-envelope mt-0.5 shrink-0 text-red"></i>
                <a href={`mailto:${business.email}`} className="break-all text-sm transition hover:text-white">
                  {business.email}
                </a>
              </div>
              <div className="contact-info-item">
                <i className="fa-solid fa-location-dot mt-0.5 shrink-0 text-red"></i>
                <span>{business.addressFull}</span>
              </div>
              <div className="contact-info-item">
                <i className="fa-solid fa-clock mt-0.5 shrink-0 text-red"></i>
                <span>Available for urgent roadside enquiries</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-5 border-b border-red/40 pb-2 text-lg font-bold text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="footer-link"><i className="fa-solid fa-chevron-right text-xs text-red"></i>Home</Link></li>
              <li><Link href="/services" className="footer-link"><i className="fa-solid fa-chevron-right text-xs text-red"></i>Services</Link></li>
              <li><Link href="/about" className="footer-link"><i className="fa-solid fa-chevron-right text-xs text-red"></i>About Us</Link></li>
              <li><Link href="/areas" className="footer-link"><i className="fa-solid fa-chevron-right text-xs text-red"></i>Areas Covered</Link></li>
              <li><Link href="/contact" className="footer-link"><i className="fa-solid fa-chevron-right text-xs text-red"></i>Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-5 border-b border-red/40 pb-2 text-lg font-bold text-white">Our Services</h4>
            <ul className="space-y-3">
              <li><Link href="/services/vehicle-breakdown-recovery" className="footer-link"><i className="fa-solid fa-chevron-right text-xs text-red"></i>24/7 Vehicle Breakdown Recovery</Link></li>
              <li><Link href="/services/roadside-assistance" className="footer-link"><i className="fa-solid fa-chevron-right text-xs text-red"></i>Roadside Assistance</Link></li>
              <li><Link href="/services/jumpstart-services" className="footer-link"><i className="fa-solid fa-chevron-right text-xs text-red"></i>Jumpstart Services</Link></li>
              <li><Link href="/services/winch-out" className="footer-link"><i className="fa-solid fa-chevron-right text-xs text-red"></i>Winch Out</Link></li>
              <li><Link href="/services/accident-emergency-assistance" className="footer-link"><i className="fa-solid fa-chevron-right text-xs text-red"></i>Accident Emergency Assistance</Link></li>
              <li><Link href="/services/changing-spare-tyre" className="footer-link"><i className="fa-solid fa-chevron-right text-xs text-red"></i>Changing Spare Tyre</Link></li>
              <li><Link href="/services/refueling" className="footer-link"><i className="fa-solid fa-chevron-right text-xs text-red"></i>Refueling</Link></li>
              <li><Link href="/services/vehicle-transporting" className="footer-link"><i className="fa-solid fa-chevron-right text-xs text-red"></i>Vehicle Transporting</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row">
          <p>{`© ${new Date().getFullYear()} ${business.name} — Roadside Recovery & Towing Services. All rights reserved.`}</p>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            <Link href="/privacy-policy" className="transition hover:text-red">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="transition hover:text-red">Terms &amp; Conditions</Link>
            <Link href="/cookie-policy" className="transition hover:text-red">Cookie Policy</Link>
            <CookieSettingsLink className="transition hover:text-red" />
          </div>
        </div>
      </div>
    </footer>
  );
}
