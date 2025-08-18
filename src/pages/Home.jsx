import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ id, children, className }) => (
  <section id={id} className={`section ${className || ''}`}>
    <div className="mx-auto px-6 container-2xl">
      {children}
    </div>
  </section>
);

export default function Home() {
  return (
    <>
      <Section id="home" className="gradient-green-dark">
        <div className="grid md:grid-cols-2 items-center gap-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Holistic Ayurvedic Healing for Modern Lifestyles
            </h1>
            <p className="mt-4 text-neutral-300 text-lg">
              BAMS (Y.M.T. College, Navi Mumbai), MD (Ayurveda, D.Y. Patil College). Dedicated to personalized Ayurvedic care through evidence-based, time-tested therapies.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#contact" className="bg-emerald-500 text-neutral-900 px-5 py-3 rounded-md hover:bg-emerald-400 transition-colors">Book Now</a>
              <a href="#services" className="px-5 py-3 rounded-md border border-neutral-800 hover:border-emerald-500 hover:text-emerald-400 transition-colors">View Services</a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }} viewport={{ once: true }}>
            <div className="relative soft-shadow-dark rounded-xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop" alt="Ayurvedic herbs and wellness" className="w-full h-[380px] object-cover" />
            </div>
          </motion.div>
        </div>
      </Section>

      <Section id="about">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <img src="https://images.unsplash.com/photo-1542736667-069246bdbc74?q=80&w=1200&auto=format&fit=crop" alt="Doctor consulting patient" className="rounded-xl soft-shadow-dark w-full h-[360px] object-cover" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-semibold">About Dr. Pushkar Nachane</h2>
            <p className="mt-4 text-neutral-300">
              An Ayurvedic physician with comprehensive training and clinical experience. Dr. Nachane focuses on root-cause analysis and holistic wellbeing through customized treatment plans, dietary guidance and lifestyle correction.
            </p>
            <ul className="mt-4 space-y-2 text-neutral-200">
              <li>• BAMS — Y.M.T. College, Navi Mumbai</li>
              <li>• MD (Ayurveda) — D.Y. Patil College</li>
              <li>• Areas: Digestive health, metabolic balance, skin & hair care, stress management</li>
            </ul>
          </motion.div>
        </div>
      </Section>

      <Section id="services" className="bg-transparent">
        <h2 className="text-3xl font-semibold text-center">Services</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Ayurvedic Consultation', desc: 'Detailed assessment with Prakriti analysis and personalized treatment plan.' },
            { title: 'Panchakarma Therapies', desc: 'Detoxification and rejuvenation protocols tailored to your condition.' },
            { title: 'Diet & Lifestyle Planning', desc: 'Sustainable routines aligned with your dosha and daily schedule.' },
            { title: 'Herbal Medicines', desc: 'Safe, quality formulations guided by classical texts and modern science.' },
            { title: 'Stress & Sleep Care', desc: 'Mind-body therapies for better sleep, focus, and calm.' },
            { title: 'Skin & Hair Wellness', desc: 'Non-invasive, natural treatments for long-term results.' },
          ].map((s, i) => (
            <motion.div
              key={s.title}
              className="rounded-xl border border-neutral-800 p-6 bg-neutral-900/60 backdrop-blur transition-all hover:bg-neutral-900 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-600/10 soft-shadow-dark"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-lg text-neutral-100">{s.title}</h3>
              <p className="mt-2 text-neutral-300 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="expertise" className="bg-transparent">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-semibold">Clinical Expertise</h2>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              {['Gastritis & IBS', 'PCOS & Hormonal Balance', 'Weight Management', 'Joint & Spine Care', 'Psoriasis & Eczema', 'Hair Fall & Dandruff', 'Anxiety & Insomnia', 'Seasonal Allergies'].map((item) => (
                <li key={item} className="px-4 py-2 bg-neutral-900 rounded-lg border border-neutral-800">{item}</li>
              ))}
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <img className="rounded-xl soft-shadow-dark w-full h-[360px] object-cover" src="https://images.unsplash.com/photo-1505577058444-a3dab90d4253?q=80&w=1200&auto=format&fit=crop" alt="Ayurvedic therapy setup" />
          </motion.div>
        </div>
      </Section>

      <Section id="testimonials" className="bg-transparent">
        <h2 className="text-3xl font-semibold text-center">Patient Stories</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <motion.blockquote
              key={i}
              className="rounded-xl bg-neutral-900 border border-neutral-800 p-6 soft-shadow-dark"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              viewport={{ once: true }}
            >
              <p className="text-neutral-200">“I felt heard and supported throughout my treatment. Symptoms improved within weeks.”</p>
              <footer className="mt-3 text-sm text-neutral-400">— Patient {i}</footer>
            </motion.blockquote>
          ))}
        </div>
      </Section>

      <Section id="contact" className="bg-transparent">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-semibold">Get in touch</h2>
            <p className="mt-3 text-neutral-300">For appointments and queries, please fill the form or reach out directly.</p>
            <ul className="mt-4 text-neutral-200 space-y-2 text-sm">
              <li>📍 Clinic: Chinchwad, Pune, Maharashtra</li>
              <li>📞 +91-XXXXXXXXXX</li>
              <li>✉️ contact@drpushkarnachane.com</li>
            </ul>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                className="inline-flex items-center justify-center bg-emerald-500 text-neutral-900 px-5 py-3 rounded-md hover:bg-emerald-400"
                href="https://www.google.com/maps/dir/?api=1&destination=Chinchwad%2C%20Pune%2C%20Maharashtra"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions
              </a>
              <a
                className="inline-flex items-center justify-center border border-neutral-800 px-5 py-3 rounded-md hover:border-emerald-500 hover:text-emerald-400"
                href="https://www.google.com/maps/search/?api=1&query=Chinchwad%2C%20Pune%2C%20Maharashtra"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Maps
              </a>
            </div>

            <form className="mt-6 rounded-xl border border-neutral-800 bg-neutral-900 p-6 soft-shadow-dark">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input className="bg-neutral-800 border border-neutral-700 text-neutral-100 placeholder-neutral-400 rounded-md p-3 w-full" placeholder="Full name" />
                <input className="bg-neutral-800 border border-neutral-700 text-neutral-100 placeholder-neutral-400 rounded-md p-3 w-full" placeholder="Phone" />
              </div>
              <input className="bg-neutral-800 border border-neutral-700 text-neutral-100 placeholder-neutral-400 rounded-md p-3 w-full mt-4" placeholder="Email" />
              <textarea className="bg-neutral-800 border border-neutral-700 text-neutral-100 placeholder-neutral-400 rounded-md p-3 w-full mt-4 h-28" placeholder="Message"></textarea>
              <button type="button" className="mt-4 bg-emerald-500 text-neutral-900 px-5 py-3 rounded-md hover:bg-emerald-400">Submit</button>
            </form>
          </div>

          <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-2 soft-shadow-dark">
            <iframe
              title="Map - Chinchwad Pune"
              className="w-full h-[420px] rounded-md"
              src="https://www.google.com/maps?q=Chinchwad,+Pune,+Maharashtra&output=embed"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </Section>
    </>
  );
}

