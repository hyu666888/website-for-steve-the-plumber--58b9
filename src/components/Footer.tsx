import { Link } from 'react-router-dom';
import { Wrench, Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0f1f33] text-slate-300">
      <div className="max-w-6xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2 text-white font-bold text-xl mb-4">
            <Wrench className="text-orange-400" size={20} />
            Steve's <span className="text-orange-400 ml-1">Plumbing</span>
          </div>
          <p className="text-sm leading-relaxed text-slate-400">
            Licensed and insured plumbing services you can trust. Serving the greater metro area for over 20 years.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <div className="flex flex-col gap-2 text-sm">
            {[['/', 'Home'], ['/services', 'Services'], ['/about', 'About Us'], ['/contact', 'Contact']].map(([to, label]) => (
              <Link key={to} to={to} className="hover:text-orange-400 transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Contact Us</h3>
          <div className="flex flex-col gap-3 text-sm">
            <a href="tel:+15551234567" className="flex items-center gap-2 hover:text-orange-400 transition-colors">
              <Phone size={14} className="shrink-0" /> (555) 123-4567
            </a>
            <a href="mailto:steve@stevesplumbing.com" className="flex items-center gap-2 hover:text-orange-400 transition-colors">
              <Mail size={14} className="shrink-0" /> steve@stevesplumbing.com
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={14} className="shrink-0" /> Greater Metro Area
            </span>
            <span className="flex items-center gap-2 text-orange-400 font-medium">
              <Clock size={14} className="shrink-0" /> 24/7 Emergency Service
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Steve's Plumbing. All rights reserved. Licensed & Insured.
      </div>
    </footer>
  );
}
