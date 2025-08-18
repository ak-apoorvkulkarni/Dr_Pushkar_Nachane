import React from 'react';
import profileImg from '../images/profile.png';

export default function About() {
  return (
    <section className="section">
      <div className="mx-auto px-6 container-2xl">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-1">
            <div className="rounded-xl overflow-hidden soft-shadow-dark border border-neutral-800">
              <img
                className="w-full h-[360px] object-cover"
                src={profileImg}
                alt="Dr. Pushkar Nachane portrait"
              />
            </div>
          </div>
          <div className="md:col-span-2">
            <h1 className="text-3xl font-semibold">About Dr. Pushkar Nachane</h1>
            <p className="mt-3 text-neutral-300">
              Ayurvedic physician focused on holistic, evidence-informed care. Emphasis on root-cause analysis,
              sustainable lifestyle changes, and personalized formulations.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-6">
              <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-5">
                <h2 className="font-semibold">Education</h2>
                <ul className="mt-2 text-neutral-300 text-sm space-y-1 list-disc list-inside">
                  <li>BAMS — Y.M.T. College, Navi Mumbai</li>
                  <li>MD (Ayurveda) — D.Y. Patil College</li>
                </ul>
              </div>
              <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-5">
                <h2 className="font-semibold">Experience</h2>
                <ul className="mt-2 text-neutral-300 text-sm space-y-1 list-disc list-inside">
                  <li>Clinical practice with focus on digestive, metabolic, skin & stress-related conditions</li>
                  <li>Diet and lifestyle coaching rooted in classical texts</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-neutral-800 bg-neutral-900 p-5">
              <h2 className="font-semibold">Approach</h2>
              <p className="mt-2 text-neutral-300 text-sm">
                Thorough case history, Prakriti assessment, and individualized plan blending diet, lifestyle, therapies, and herbs.
              </p>
              <a href="/#contact" className="mt-3 inline-block bg-emerald-500 text-neutral-900 px-4 py-2 rounded-md hover:bg-emerald-400">Book Appointment</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


