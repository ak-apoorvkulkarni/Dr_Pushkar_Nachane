import React from 'react';
import { NavLink, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import ServiceDetail from './pages/ServiceDetail.jsx';
import Products from './pages/Products.jsx';
import About from './pages/About.jsx';
import PrakritiAssessment from './pages/PrakritiAssessment.jsx';

export default function App() {
  return (
    <div className="relative min-h-screen bg-neutral-950 text-neutral-100 animated-gradient-bg overflow-hidden">
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>

      <header className="sticky top-0 z-50 bg-neutral-950/70 backdrop-blur border-b border-neutral-800">
        <div className="mx-auto px-6 py-4 flex items-center justify-between container-2xl">
          <Link to="/" className="font-semibold text-lg">Dr. Pushkar Nachane</Link>
          <nav className="hidden md:flex gap-6 text-sm">
            <NavLink className={({isActive}) => `hover:text-emerald-400 ${isActive ? 'text-emerald-400' : ''}`} to="/">Home</NavLink>
            <NavLink className={({isActive}) => `hover:text-emerald-400 ${isActive ? 'text-emerald-400' : ''}`} to="/services">Services</NavLink>
            <NavLink className={({isActive}) => `hover:text-emerald-400 ${isActive ? 'text-emerald-400' : ''}`} to="/products">Products</NavLink>
            <NavLink className={({isActive}) => `hover:text-emerald-400 ${isActive ? 'text-emerald-400' : ''}`} to="/about">About</NavLink>
            <a className="hover:text-emerald-400" href="/#contact">Contact</a>
          </nav>
          <a href="/#contact" className="hidden md:inline-block bg-emerald-500 text-neutral-900 px-4 py-2 rounded-md hover:bg-emerald-400 transition-colors">Book Appointment</a>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/prakriti-assessment" element={<PrakritiAssessment />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <footer className="border-t border-neutral-800">
        <div className="mx-auto px-6 py-6 container-2xl grid gap-6 md:grid-cols-3">
          <div>
            <div className="font-semibold text-lg">Dr. Pushkar Nachane</div>
            <p className="mt-2 text-neutral-400 text-sm">Ayurvedic Physician — holistic, evidence-informed care.</p>
          </div>
          <div>
            <div className="font-semibold">Clinic Address</div>
            <p className="mt-2 text-neutral-400 text-sm">
              Shop No. 8 & 9, Harshal Heights, Pimpri - Chinchwad Link Road Link Road, Opposite Gawade Petrol Pump Chinchwad, Chinchwad, Maharashtra 411033, India
            </p>
            <a
              className="mt-3 inline-block text-emerald-400 hover:text-emerald-300 text-sm"
              href="https://www.google.com/maps/dir/?api=1&destination=Shop%20No.%208%20%26%209%2C%20Harshal%20Heights%2C%20Pimpri%20-%20Chinchwad%20Link%20Road%20Link%20Road%2C%20Opposite%20Gawade%20Petrol%20Pump%20Chinchwad%2C%20Chinchwad%2C%20Maharashtra%20411033%2C%20India"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Directions →
            </a>
          </div>
          <div>
            <div className="font-semibold">Contact</div>
            <p className="mt-2 text-neutral-400 text-sm">
              Phone: <a className="text-emerald-400 hover:text-emerald-300" href="tel:+917972213903">+91 79722 13903</a>
            </p>
          </div>
        </div>
        <div className="py-4 text-center text-sm text-neutral-500">
          © {new Date().getFullYear()} Dr. Pushkar Nachane. All rights reserved.
        </div>
      </footer>
    </div>
  );
}


