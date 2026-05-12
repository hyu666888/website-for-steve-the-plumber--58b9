import { Link } from 'react-router-dom';
import {
  Phone, CheckCircle, Star, Droplets, Zap, Shield,
  Clock, ThumbsUp, Wrench, ChevronRight,
} from 'lucide-react';

const snapServices = [
  { icon: Droplets, title: 'Emergency Plumbing', desc: 'Available 24/7 for burst pipes, major leaks, and plumbing emergencies.' },
  { icon: Wrench, title: 'Drain Cleaning', desc: 'Professional equipment to clear clogs and keep your pipes flowing.' },
  { icon: Zap, title: 'Water Heater Services', desc: 'Installation, repair, and maintenance for all types of water heaters.' },
  { icon: Shield, title: 'Pipe Repair', desc: 'Expert repair and replacement of damaged or aging pipes.' },
];

const reasons = [
  'Licensed & fully insured',
  '20+ years of experience',
  'Upfront, transparent pricing',
  'Same-day service available',
  '100% satisfaction guaranteed',
  '5-star rated by 500+ customers',
];

const testimonials = [
  {
    name: 'Jennifer M.',
    text: "Steve's team came out within an hour on a Sunday morning for a burst pipe emergency. Professional, fast, and fair pricing. Can't recommend enough!",
  },
  {
    name: 'Robert K.',
    text: "I've used Steve's Plumbing three times over the years. Always on time, always honest, always does great work. My go-to plumber.",
  },
  {
    name: 'Maria T.',
    text: "Had a stubborn clog that two other plumbers couldn't fix. Steve's crew diagnosed it in minutes and had us back to normal the same afternoon.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[580px] flex items-center"
        style={{ background: 'linear-gradient(135deg, #0f1f33 0%, #1e3a5f 55%, #2d5a8e 100%)' }}
      >
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle at 25px 25px, white 2px, transparent 0)',
            backgroundSize: '50px 50px',
          }}
        />
        <div className="relative max-w-6xl mx-auto px-4 py-24 text-white">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-300 border border-orange-500/30 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <Clock size={13} /> 24/7 Emergency Service Available
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-5">
              Plumbing You Can{' '}
              <span className="text-orange-400">Trust</span>
            </h1>
            <p className="text-xl text-blue-100 mb-9 leading-relaxed">
              Licensed, insured, and ready to help. Steve's Plumbing has served the greater metro area for over 20 years — from leaky faucets to full pipe replacements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+15551234567"
                className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg shadow-orange-900/30"
              >
                <Phone size={20} /> Call (555) 123-4567
              </a>
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/25 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors"
              >
                Get a Free Quote <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-orange-500 text-white py-4">
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-center gap-6 md:gap-12 text-sm font-semibold">
          {['Licensed & Insured', '20+ Years Experience', '500+ 5-Star Reviews', 'Same-Day Service'].map(t => (
            <div key={t} className="flex items-center gap-2">
              <CheckCircle size={15} /> {t}
            </div>
          ))}
        </div>
      </section>

      {/* Services snapshot */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1e3a5f] mb-3">Our Services</h2>
            <p className="text-slate-500 text-lg">Professional plumbing solutions for every situation</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {snapServices.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md hover:border-orange-200 transition-all"
              >
                <div className="bg-orange-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="text-orange-500" size={22} />
                </div>
                <h3 className="font-bold text-[#1e3a5f] mb-2">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-[#1e3a5f] hover:bg-[#162d4a] text-white px-8 py-3.5 rounded-xl font-semibold transition-colors"
            >
              View All Services <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-4xl font-bold text-[#1e3a5f] mb-4">
              Why Homeowners Choose Steve's
            </h2>
            <p className="text-slate-500 mb-8 leading-relaxed text-lg">
              We treat your home like our own — showing up on time, keeping things clean, explaining what we're doing, and charging a fair price. Every time.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {reasons.map(r => (
                <div key={r} className="flex items-center gap-3 text-slate-700">
                  <CheckCircle className="text-orange-500 shrink-0" size={17} />
                  <span className="text-sm font-medium">{r}</span>
                </div>
              ))}
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 bg-orange-500 hover:bg-orange-600 text-white px-7 py-3.5 rounded-xl font-semibold transition-colors"
            >
              Learn About Steve <ChevronRight size={16} />
            </Link>
          </div>

          <div className="relative">
            <div
              className="rounded-2xl h-80 md:h-96 flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #1e3a5f, #2d6a9f)' }}
            >
              <div className="text-center text-white">
                <ThumbsUp size={60} className="mx-auto mb-4 text-orange-400" />
                <div className="text-4xl font-bold">20+</div>
                <div className="text-blue-200 text-lg mt-1">Years of Trusted Service</div>
              </div>
            </div>
            <div className="absolute -bottom-5 -right-3 md:-right-5 bg-orange-500 text-white rounded-2xl p-5 shadow-xl">
              <div className="flex items-center gap-0.5 mb-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={15} fill="white" strokeWidth={0} />)}
              </div>
              <div className="font-bold">500+ Reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1e3a5f] mb-3">What Customers Say</h2>
            <p className="text-slate-500">Don't just take our word for it</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(({ name, text }) => (
              <div key={name} className="bg-white rounded-2xl p-7 shadow-sm border border-slate-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} className="text-orange-400" fill="#fb923c" strokeWidth={0} />
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-5">"{text}"</p>
                <div className="font-semibold text-[#1e3a5f] text-sm">{name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section
        className="py-20 text-white text-center"
        style={{ background: 'linear-gradient(135deg, #1e3a5f, #0f1f33)' }}
      >
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Have a Plumbing Problem?</h2>
          <p className="text-blue-200 mb-9 text-lg">We're ready 24/7. Call now and we'll be there fast.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+15551234567"
              className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors"
            >
              <Phone size={20} /> (555) 123-4567
            </a>
            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/25 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors"
            >
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
