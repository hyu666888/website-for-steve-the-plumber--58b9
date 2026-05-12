import { useState, FormEvent } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '(555) 123-4567', href: 'tel:+15551234567' },
  { icon: Mail, label: 'Email', value: 'steve@stevesplumbing.com', href: 'mailto:steve@stevesplumbing.com' },
  { icon: MapPin, label: 'Service Area', value: 'Greater Metro Area', href: undefined },
];

const hours = [
  { day: 'Monday – Friday', time: '7:00 AM – 7:00 PM' },
  { day: 'Saturday', time: '8:00 AM – 5:00 PM' },
  { day: 'Sunday', time: 'Emergency Only' },
  { day: '24/7', time: 'Emergency Line Always Open' },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const body = `Name: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}%0AService: ${form.service}%0A%0A${form.message}`;
    window.location.href = `mailto:steve@stevesplumbing.com?subject=Service Request from ${encodeURIComponent(form.name)}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <>
      {/* Page hero */}
      <section
        className="py-20 text-white text-center"
        style={{ background: 'linear-gradient(135deg, #0f1f33, #1e3a5f)' }}
      >
        <div className="max-w-2xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-blue-200 text-xl">
            Ready to help — call, email, or fill out the form and we'll get back to you the same day.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact info column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Info cards */}
            <div className="bg-white rounded-2xl p-7 shadow-sm border border-slate-100">
              <h3 className="font-bold text-[#1e3a5f] text-lg mb-5">Get in Touch</h3>
              <div className="space-y-4">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="bg-orange-50 w-10 h-10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="text-orange-500" size={17} />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-medium uppercase tracking-wide">{label}</div>
                      {href ? (
                        <a href={href} className="text-[#1e3a5f] font-semibold hover:text-orange-500 transition-colors">
                          {value}
                        </a>
                      ) : (
                        <div className="text-[#1e3a5f] font-semibold">{value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-2xl p-7 shadow-sm border border-slate-100">
              <div className="flex items-center gap-2 font-bold text-[#1e3a5f] text-lg mb-5">
                <Clock size={18} className="text-orange-500" /> Business Hours
              </div>
              <div className="space-y-3">
                {hours.map(({ day, time }) => (
                  <div key={day} className="flex justify-between text-sm">
                    <span className="text-slate-600">{day}</span>
                    <span className="font-medium text-[#1e3a5f]">{time}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 bg-orange-50 border border-orange-200 rounded-xl p-4 text-sm text-orange-800 font-medium">
                Emergency? Call us any time — we're available 24/7.
              </div>
            </div>
          </div>

          {/* Form column */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mb-5">
                    <CheckCircle className="text-green-500" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1e3a5f] mb-2">Message Sent!</h3>
                  <p className="text-slate-500 max-w-sm">
                    Thanks for reaching out. We'll get back to you as soon as possible — usually within a few hours.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="font-bold text-[#1e3a5f] text-2xl mb-6">Send a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition"
                          placeholder="Jane Smith"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={form.phone}
                          onChange={handleChange}
                          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition"
                          placeholder="(555) 000-0000"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition"
                        placeholder="jane@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Service Needed</label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition bg-white"
                      >
                        <option value="">Select a service...</option>
                        <option>Emergency Plumbing</option>
                        <option>Drain Cleaning</option>
                        <option>Water Heater Services</option>
                        <option>Pipe Repair & Replacement</option>
                        <option>Bathroom Plumbing</option>
                        <option>Kitchen Plumbing</option>
                        <option>Leak Detection</option>
                        <option>Sump Pump Services</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Describe the Issue *</label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition resize-none"
                        placeholder="Tell us what's going on and we'll get back to you with a quote..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-bold text-lg transition-colors shadow-md shadow-orange-200"
                    >
                      Send Message
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
