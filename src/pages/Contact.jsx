import React from 'react';

export default function Contact() {
  return (
    <section className="section">
      <div className="mx-auto px-6 container-2xl">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h1 className="text-3xl font-semibold">Get in touch</h1>
            <p className="mt-3 text-neutral-300">For appointments and queries, please fill the form or reach out directly.</p>
            <ul className="mt-4 text-neutral-200 space-y-2 text-sm">
              <li>📍 Clinic: Chinchwad, Pune, Maharashtra</li>
              <li>📞 <a className="text-emerald-400 hover:text-emerald-300" href="tel:+917972213903">+91 79722 13903</a></li>
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
      </div>
    </section>
  );
}


