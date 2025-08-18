import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  { slug: 'ayurvedic-consultation', title: 'Ayurvedic Consultation', desc: 'Detailed assessment with Prakriti analysis and personalized plan.' },
  { slug: 'panchakarma-therapies', title: 'Panchakarma Therapies', desc: 'Detoxification and rejuvenation protocols tailored to your condition.' },
  { slug: 'diet-lifestyle', title: 'Diet & Lifestyle Planning', desc: 'Sustainable routines aligned with your dosha and lifestyle.' },
  { slug: 'herbal-medicines', title: 'Herbal Medicines', desc: 'Quality formulations guided by classical texts and modern research.' },
  { slug: 'stress-sleep-care', title: 'Stress & Sleep Care', desc: 'Mind-body therapies for better sleep, focus, and calm.' },
  { slug: 'skin-hair-wellness', title: 'Skin & Hair Wellness', desc: 'Non-invasive, natural treatments for long-term results.' },
  { slug: 'prakriti-assessment', title: 'Prakriti Assessment (Interactive)', desc: 'Gamified dosha quiz to discover your dominant constitution.' },
];

export default function Services() {
  return (
    <section className="section">
      <div className="mx-auto px-6 container-2xl">
        <h1 className="text-3xl font-semibold">Services</h1>
        <p className="mt-2 text-neutral-300">Explore the range of Ayurvedic services offered.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <Link key={s.slug} to={`/services/${s.slug}`} className="rounded-xl border border-neutral-800 p-6 bg-neutral-900/60 hover:bg-neutral-900 transition-colors">
              <h3 className="font-semibold text-lg text-neutral-100">{s.title}</h3>
              <p className="mt-2 text-neutral-300 text-sm">{s.desc}</p>
              <span className="mt-4 inline-block text-emerald-400 text-sm">View details →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export { services };

