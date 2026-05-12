import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Wrench } from 'lucide-react';

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="bg-[#1e3a5f] text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl" onClick={() => setOpen(false)}>
            <Wrench className="text-orange-400" size={22} />
            <span>Steve's <span className="text-orange-400">Plumbing</span></span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {links.map(l => (
              <Link
                key={l.to}
                to={l.to}
                className={`font-medium transition-colors hover:text-orange-400 ${
                  pathname === l.to ? 'text-orange-400' : 'text-slate-200'
                }`}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="tel:+15551234567"
              className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
            >
              <Phone size={15} />
              (555) 123-4567
            </a>
          </div>

          <button
            className="md:hidden p-2 rounded-md hover:bg-white/10 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-[#162d4a] border-t border-white/10 px-4 py-4 flex flex-col gap-1">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`py-3 px-2 font-medium rounded-lg transition-colors hover:text-orange-400 hover:bg-white/5 ${
                pathname === l.to ? 'text-orange-400' : 'text-slate-200'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:+15551234567"
            className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded-lg font-semibold transition-colors mt-2"
          >
            <Phone size={16} />
            (555) 123-4567
          </a>
        </div>
      )}
    </nav>
  );
}
