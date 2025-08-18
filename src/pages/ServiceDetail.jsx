import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { services } from './Services.jsx';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return (
      <section className="section">
        <div className="mx-auto px-6 container-2xl">
          <p className="text-neutral-300">Service not found.</p>
          <Link to="/services" className="text-emerald-400">Back to services</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="mx-auto px-6 container-2xl">
        <h1 className="text-3xl font-semibold">{service.title}</h1>
        <p className="mt-3 text-neutral-300 max-w-3xl">{service.desc}</p>
        <div className="mt-6 grid md:grid-cols-12 gap-6 items-start">
          <div className="md:col-span-7 lg:col-span-8 space-y-4">
            <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-5">
              <h2 className="font-semibold">What to expect</h2>
              <p className="mt-2 text-neutral-300 text-sm">Initial evaluation, history, and personalized plan with follow-ups. Duration varies by case.</p>
            </div>
            <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-5">
              <h2 className="font-semibold">Benefits</h2>
              <ul className="mt-2 text-neutral-300 text-sm list-disc list-inside space-y-1">
                <li>Evidence-informed Ayurveda tailored to your constitution</li>
                <li>Root-cause oriented approach</li>
                <li>Diet and lifestyle recommendations</li>
              </ul>
            </div>
          </div>
          <aside className="md:col-span-5 lg:col-span-4 space-y-4 md:sticky md:top-24">
            <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-5">
              <h3 className="font-semibold">Book this service</h3>
              <p className="mt-2 text-neutral-300 text-sm">Contact for appointments and availability.</p>
              <a href="#contact" className="mt-3 inline-block bg-emerald-500 text-neutral-900 px-4 py-2 rounded-md hover:bg-emerald-400">Book now</a>
            </div>
            <Link to="/services" className="block text-center rounded-md border border-neutral-800 px-4 py-2 hover:border-emerald-500 hover:text-emerald-400">Back to services</Link>
          </aside>
        </div>
      </div>
    </section>
  );
}

