import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MapPin, 
  Calendar, 
  Users, 
  CheckCircle2, 
  ChevronDown, 
  MessageCircle, 
  Clock, 
  ShieldCheck, 
  Car,
  Menu,
  X,
  ArrowRight
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="bg-navy p-1.5 rounded-lg">
              <Car className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-bold text-navy tracking-tight">GoDoor <span className="text-orange-accent">Trans</span></span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-sm font-medium text-slate-600 hover:text-navy transition-colors">Home</a>
            <a href="#services" className="text-sm font-medium text-slate-600 hover:text-navy transition-colors">Layanan</a>
            <a href="#pricing" className="text-sm font-medium text-slate-600 hover:text-navy transition-colors">Harga</a>
            <a href="#faq" className="text-sm font-medium text-slate-600 hover:text-navy transition-colors">FAQ</a>
            <button className="bg-navy text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-navy/90 transition-all shadow-lg shadow-navy/20">
              Pesan Sekarang
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 p-2">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              <a href="#home" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-600">Home</a>
              <a href="#services" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-600">Layanan</a>
              <a href="#pricing" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-600">Harga</a>
              <a href="#faq" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-600">FAQ</a>
              <div className="pt-4">
                <button className="w-full bg-navy text-white px-5 py-3 rounded-xl text-base font-semibold">
                  Pesan Sekarang
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const BookingWidget = () => {
  const [formData, setFormData] = useState({
    route: '',
    date: '',
    passengers: '1'
  });

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Halo GoDoor Trans, saya ingin pesan travel:\nRute: ${formData.route}\nTanggal: ${formData.date}\nJumlah Penumpang: ${formData.passengers}`;
    window.open(`https://wa.me/628123456789?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="glass-card p-6 rounded-2xl w-full max-w-md mx-auto lg:mx-0">
      <h3 className="text-lg font-bold text-navy mb-4 flex items-center gap-2">
        <Calendar className="w-5 h-5 text-orange-accent" />
        Pemesanan Cepat
      </h3>
      <form onSubmit={handleWhatsApp} className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Pilih Rute</label>
          <div className="relative">
            <select 
              required
              value={formData.route}
              onChange={(e) => setFormData({...formData, route: e.target.value})}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 appearance-none"
            >
              <option value="">-- Pilih Rute --</option>
              <option value="Bandung ke Jakarta">Bandung ↔ Jakarta</option>
              <option value="Bandung ke Soetta">Bandung ↔ Bandara Soetta</option>
              <option value="Jakarta ke Bandung">Jakarta ↔ Bandung</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Tanggal</label>
            <input 
              type="date" 
              required
              value={formData.date}
              onChange={(e) => setFormData({...formData, date: e.target.value})}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Penumpang</label>
            <div className="relative">
              <select 
                value={formData.passengers}
                onChange={(e) => setFormData({...formData, passengers: e.target.value})}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 appearance-none"
              >
                {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n} Orang</option>)}
              </select>
              <Users className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            </div>
          </div>
        </div>

        <button 
          type="submit"
          className="w-full bg-orange-accent text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-accent/30 hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
        >
          <MessageCircle className="w-5 h-5" />
          Pesan via WhatsApp
        </button>
        <p className="text-[10px] text-center text-slate-400 italic">Konfirmasi instan oleh admin kami</p>
      </form>
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
    <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-navy transition-colors">
      <Icon className="w-7 h-7 text-navy group-hover:text-white transition-colors" />
    </div>
    <h4 className="text-xl font-bold text-navy mb-3">{title}</h4>
    <p className="text-slate-500 leading-relaxed text-sm">{desc}</p>
  </div>
);

const PricingTable = () => {
  const routes = [
    { from: 'Bandung', to: 'Jakarta', type: 'Reguler / Private', price: '400.000' },
    { from: 'Bandung', to: 'Bandara Soetta', type: 'Drop-off / Pickup', price: '450.000' },
    { from: 'Jakarta', to: 'Bandung', type: 'Door to Door', price: '400.000' },
  ];

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Rute Perjalanan</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Layanan</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Harga Mulai</th>
              <th className="px-6 py-4"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {routes.map((route, i) => (
              <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                <td className="px-6 py-6">
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-navy">{route.from}</span>
                    <ArrowRight className="w-4 h-4 text-slate-300" />
                    <span className="font-bold text-navy">{route.to}</span>
                  </div>
                </td>
                <td className="px-6 py-6 text-sm text-slate-600">{route.type}</td>
                <td className="px-6 py-6">
                  <span className="text-lg font-black text-navy">Rp{route.price}</span>
                </td>
                <td className="px-6 py-6 text-right">
                  <button className="text-orange-accent font-bold text-sm hover:underline">Detail</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-navy transition-colors"
      >
        <span className="font-bold text-slate-800">{question}</span>
        <ChevronDown className={cn("w-5 h-5 text-slate-400 transition-transform", isOpen && "rotate-180")} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-slate-500 text-sm leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-navy/5 to-transparent" />
          <img 
            src="https://picsum.photos/seed/travel-car/1920/1080?blur=2" 
            alt="Background" 
            className="w-full h-full object-cover opacity-10"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 bg-navy/10 text-navy text-xs font-bold rounded-full mb-6 uppercase tracking-widest">
                Premium Door-to-Door Service
              </span>
              <h1 className="text-5xl lg:text-7xl font-black text-navy leading-[1.1] mb-6">
                Travel Bandung – Jakarta <span className="text-orange-accent">Tanpa Ribet.</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                Capek nyetir sendiri atau ribet harus ke pool travel? GoDoor Trans jemput kamu langsung di depan rumah. Hemat tenaga, sampai tujuan dengan segar.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm font-bold text-navy">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  Jemput di Depan Pintu
                </div>
                <div className="flex items-center gap-2 text-sm font-bold text-navy">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  Harga Transparan
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <BookingWidget />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-black text-navy mb-4">Kenapa Memilih GoDoor Trans?</h2>
            <p className="text-slate-500">Kami memberikan standar pelayanan tertinggi untuk setiap perjalanan Anda.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={MapPin}
              title="Door-to-Door"
              desc="Jemput di rumah, antar sampai tujuan. Tidak perlu repot ke pool atau terminal."
            />
            <FeatureCard 
              icon={ShieldCheck}
              title="Harga Transparan"
              desc="Mulai 400k tanpa biaya tersembunyi. Semua sudah termasuk tol dan parkir."
            />
            <FeatureCard 
              icon={Users}
              title="Driver Profesional"
              desc="Sopir berpengalaman, ramah, dan hapal rute tercepat untuk Anda."
            />
            <FeatureCard 
              icon={Clock}
              title="Armada Prima"
              desc="Unit terbaru (Innova Zenix/Hiace), AC dingin, kabin wangi, dan servis rutin."
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-black text-navy mb-4">Daftar Rute & Harga</h2>
              <p className="text-slate-500">Pilih rute yang sesuai dengan kebutuhan perjalanan Anda.</p>
            </div>
            <div className="bg-white px-6 py-3 rounded-2xl border border-slate-200 shadow-sm">
              <span className="text-xs font-bold text-slate-400 uppercase block mb-1">Promo Hari Ini</span>
              <span className="text-navy font-bold">Diskon 10% untuk Booking PP!</span>
            </div>
          </div>

          <PricingTable />
        </div>
      </section>

      {/* Fleet Gallery */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-black text-navy mb-4">Armada Kami</h2>
            <p className="text-slate-500">Kendaraan bersih dan nyaman untuk perjalanan jarak jauh.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-3xl aspect-video bg-slate-100">
              <img 
                src="https://picsum.photos/seed/car-zenix/800/450" 
                alt="Toyota Innova Zenix" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent flex flex-col justify-end p-8">
                <h5 className="text-white text-xl font-bold">Toyota Innova Zenix</h5>
                <p className="text-white/70 text-sm">Kapasitas 6 Penumpang • Captain Seat • AC Dual Zone</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-3xl aspect-video bg-slate-100">
              <img 
                src="https://picsum.photos/seed/car-hiace/800/450" 
                alt="Toyota Hiace Premio" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent flex flex-col justify-end p-8">
                <h5 className="text-white text-xl font-bold">Toyota Hiace Premio</h5>
                <p className="text-white/70 text-sm">Kapasitas 11 Penumpang • Kabin Luas • Reclining Seat</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-black text-navy mb-4">Tanya Jawab (FAQ)</h2>
            <p className="text-slate-500">Informasi lengkap seputar layanan GoDoor Trans.</p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
            <FAQItem 
              question="Apakah harga sudah termasuk biaya tol?"
              answer="Ya, semua harga yang tertera sudah termasuk biaya tol, bensin, dan jasa driver. Tidak ada biaya tambahan di tengah jalan."
            />
            <FAQItem 
              question="Berapa kapasitas bagasi yang diperbolehkan?"
              answer="Setiap penumpang diperbolehkan membawa 1 koper ukuran medium dan 1 tas ransel. Jika membawa barang berlebih, mohon informasikan admin saat booking."
            />
            <FAQItem 
              question="Bagaimana jika jadwal keberangkatan berubah?"
              answer="Perubahan jadwal bisa dilakukan maksimal 6 jam sebelum keberangkatan tanpa biaya tambahan, selama armada masih tersedia."
            />
            <FAQItem 
              question="Apakah melayani pengiriman paket?"
              answer="Ya, kami melayani pengiriman paket kilat door-to-door dengan tarif mulai dari Rp150.000 per paket."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-white p-1.5 rounded-lg">
                  <Car className="text-navy w-6 h-6" />
                </div>
                <span className="text-2xl font-bold tracking-tight">GoDoor <span className="text-orange-accent">Trans</span></span>
              </div>
              <p className="text-white/60 max-w-sm leading-relaxed mb-8">
                Layanan travel door-to-door profesional yang menghubungkan Bandung, Jakarta, dan Bandara Soekarno-Hatta dengan kenyamanan maksimal.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-accent transition-colors cursor-pointer">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-accent transition-colors cursor-pointer">
                  <MessageCircle className="w-5 h-5" />
                </div>
              </div>
            </div>
            
            <div>
              <h6 className="font-bold mb-6 text-orange-accent uppercase tracking-widest text-xs">Navigasi</h6>
              <ul className="space-y-4 text-white/60 text-sm">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Layanan</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Harga</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h6 className="font-bold mb-6 text-orange-accent uppercase tracking-widest text-xs">Kontak</h6>
              <ul className="space-y-4 text-white/60 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-orange-accent shrink-0" />
                  Jl. Pasteur No. 123, Bandung, Jawa Barat
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-orange-accent shrink-0" />
                  +62 812 3456 789
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-xs">
            <p>© 2026 GoDoor Trans. All rights reserved.</p>
            <div className="flex gap-6">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/628123456789" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 group"
      >
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 font-bold text-sm">Chat Admin</span>
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
}
