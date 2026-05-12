import { Link } from 'react-router-dom';
import { Droplets, Wrench, Zap, Shield, Home, Search, Phone, CheckCircle } from 'lucide-react';

const services = [
  {
    icon: Droplets,
    title: 'Emergency Plumbing',
    desc: 'Burst pipes, major leaks, flooding — we respond fast, day or night. Our emergency team is on call 24/7 to minimize damage to your home.',
    bullets: ['Burst & frozen pipes', 'Sewage backups', 'Major leaks', 'Flood response'],
  },
  {
    icon: Wrench,
    title: 'Drain Cleaning',
    desc: 'Slow or completely blocked drains? We use professional-grade equipment to clear clogs and keep your drainage flowing properly.',
    bullets: ['Kitchen drain clogs', 'Bathroom drain clearing', 'Main line cleaning', 'Hydro-jetting'],
  },
  {
    icon: Zap,
    title: 'Water Heater Services',
    desc: 'Whether you need a new water heater installed or your existing unit repaired, we handle all brands and models.',
    bullets: ['Tank & tankless installation', 'Repair & tune-ups', 'Annual maintenance', 'Energy-efficient upgrades'],
  },
  {
    icon: Shield,
    title: 'Pipe Repair & Replacement',
    desc: 'From minor pipe repairs to full repipe jobs, we restore your plumbing system to perfect working order.',
    bullets: ['Leak detection & repair', 'Copper & PVC piping', 'Full repipe services', 'Underground pipe repair'],
  },
  {
    icon: Home,
    title: 'Bathroom Plumbing',
    desc: 'Toilet, shower, tub, or sink — we handle all bathroom plumbing installations, repairs, and upgrades.',
    bullets: ['Toilet installation & repair', 'Shower & tub services', 'Faucet replacement', 'Bathroom remodels'],
  },
  {
    icon: Droplets,
    title: 'Kitchen Plumbing',
    desc: 'From garbage disposal installation to full kitchen plumbing upgrades, we keep the heart of your home running.',
    bullets: ['Garbage disposal', 'Kitchen faucet repair', 'Dishwasher hookup', 'Sink installation'],
  },
  {
    icon: Search,
    title: 'Leak Detection',
    desc: 'Using advanced equipment, we locate hidden leaks behind walls, under slabs, and underground before they cause major damage.',
    bullets: ['Electronic leak detection', 'Slab leak location', 'Underground detection', 'Video inspection'],
  },
  {
    icon: Wrench,
    title: 'Sump Pump Services',
    desc: 'Protect your basement from flooding with a properly installed and maintained sump pump system.',
    bullets: ['New pump installation', 'Pump replacement', 'Battery backup systems', 'Annual maintenance'],
  },
];

export default function Services() {
  return (
    <>
      {/* Page hero */}
      <section
        className="py-20 text-white text-center"
        style={{ background: 'linear-gradient(135deg, #0f1f33, #1e3a5f)' }}
      >
        <div className="max-w-2xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-blue-200 text-xl">
            From dripping faucets to full repipes — we handle it all with expertise and care.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map(({ icon: Icon, title, desc, bullets }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md hover:border-orange-200 transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-orange-50 w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                    <Icon className="text-orange-500" size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1e3a5f]">{title}</h3>
                    <p className="text-slate-500 text-sm mt-1 leading-relaxed">{desc}</p>
                  </div>
                </div>
                <ul className="grid grid-cols-2 gap-2 mt-4">
                  {bullets.map(b => (
                    <li key={b} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle size={14} className="text-orange-500 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 text-white text-center"
        style={{ background: 'linear-gradient(135deg, #1e3a5f, #0f1f33)' }}
      >
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-3">Ready to Get Started?</h2>
          <p className="text-blue-200 mb-8">Call us now or send a message and we'll get back to you quickly.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+15551234567"
              className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors"
            >
              <Phone size={20} /> (555) 123-4567
            </a>
            <Link
              to="/contact"
              className="flex items-center justify-center bg-white/10 hover:bg-white/20 border border-white/25 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
