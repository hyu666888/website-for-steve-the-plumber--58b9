import { Link } from 'react-router-dom';
import { CheckCircle, Award, Users, Wrench, Phone } from 'lucide-react';

const stats = [
  { value: '20+', label: 'Years in Business' },
  { value: '2,500+', label: 'Jobs Completed' },
  { value: '500+', label: '5-Star Reviews' },
  { value: '24/7', label: 'Emergency Service' },
];

const values = [
  { icon: CheckCircle, title: 'Honest Pricing', desc: 'You get a clear quote before we start. No hidden fees, no surprises on the final invoice.' },
  { icon: Award, title: 'Quality Workmanship', desc: 'We stand behind every job we do. If something isn\'t right, we come back and make it right.' },
  { icon: Users, title: 'Respect for Your Home', desc: 'We wear boot covers, lay down drop cloths, and clean up completely when the job is done.' },
  { icon: Wrench, title: 'Expert Technicians', desc: 'Every plumber on our team is fully licensed, background-checked, and trained to the highest standard.' },
];

export default function About() {
  return (
    <>
      {/* Page hero */}
      <section
        className="py-20 text-white text-center"
        style={{ background: 'linear-gradient(135deg, #0f1f33, #1e3a5f)' }}
      >
        <div className="max-w-2xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">About Steve's Plumbing</h1>
          <p className="text-blue-200 text-xl">
            A family business built on integrity, craftsmanship, and genuine care for our customers.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-orange-500 text-white py-10">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <div className="text-4xl font-bold">{value}</div>
              <div className="text-orange-100 text-sm mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          {/* Placeholder graphic */}
          <div
            className="rounded-2xl h-80 md:h-[420px] flex flex-col items-center justify-center text-white"
            style={{ background: 'linear-gradient(135deg, #1e3a5f, #2d6a9f)' }}
          >
            <Wrench size={64} className="text-orange-400 mb-4" />
            <div className="text-2xl font-bold">Steve Johnson</div>
            <div className="text-blue-200 mt-1">Master Plumber, Owner</div>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-[#1e3a5f] mb-5">The Story Behind Steve's</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Steve Johnson started his career as an apprentice plumber straight out of high school. Over the next decade, he worked for two of the largest plumbing companies in the region, mastering everything from residential repairs to large commercial projects.
              </p>
              <p>
                In 2005, Steve launched his own business with one truck and a simple promise: treat every customer the way he'd want his own family treated. That promise turned into a reputation, and that reputation turned into the thriving company Steve's Plumbing is today.
              </p>
              <p>
                Today, Steve leads a team of licensed plumbers who share his values — honesty, quality, and respect. Whether it's a dripping faucet or a complete home repipe, every job gets the same dedication.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a
                href="tel:+15551234567"
                className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-7 py-3.5 rounded-xl font-semibold transition-colors"
              >
                <Phone size={16} /> Call Us Today
              </a>
              <Link
                to="/contact"
                className="flex items-center justify-center bg-[#1e3a5f] hover:bg-[#162d4a] text-white px-7 py-3.5 rounded-xl font-semibold transition-colors"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1e3a5f] mb-3">What We Stand For</h2>
            <p className="text-slate-500 text-lg">Our values aren't a slogan — they're how we operate every day</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex gap-5">
                <div className="bg-orange-50 w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                  <Icon className="text-orange-500" size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-[#1e3a5f] text-lg mb-2">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Licensing callout */}
      <section
        className="py-14 text-white text-center"
        style={{ background: 'linear-gradient(135deg, #1e3a5f, #0f1f33)' }}
      >
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-3">Licensed, Insured & Ready to Help</h2>
          <p className="text-blue-200 mb-8 text-lg">
            Steve's Plumbing holds all required state licenses and carries full liability insurance and workers' compensation — so you're fully protected on every job.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors"
          >
            Schedule Service
          </Link>
        </div>
      </section>
    </>
  );
}
