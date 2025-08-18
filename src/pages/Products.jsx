import React from 'react';

const products = [
  { name: 'Chyawanprash', desc: 'Classical rejuvenative formulation supporting immunity and vitality.' },
  { name: 'Shatavari Kalpa', desc: 'Herbal nutritive support, traditionally used for women’s wellness.' },
  { name: 'Ashwagandha Capsules', desc: 'Adaptogenic support for stress management and restful sleep.' },
  { name: 'Triphala Powder', desc: 'Gentle digestive and detox support, suitable for regular use.' },
];

export default function Products() {
  return (
    <section className="section">
      <div className="mx-auto px-6 container-2xl">
        <h1 className="text-3xl font-semibold">Products</h1>
        <p className="mt-2 text-neutral-300 max-w-3xl">
          These Ayurvedic formulations are recommended after consultation. Not for direct online sale.
        </p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.name} className="rounded-xl border border-neutral-800 p-6 bg-neutral-900/60 backdrop-blur">
              <div className="h-36 w-full rounded-md bg-neutral-800 border border-neutral-700 flex items-center justify-center text-neutral-400">
                Image
              </div>
              <h3 className="mt-4 font-semibold text-lg text-neutral-100">{p.name}</h3>
              <p className="mt-2 text-neutral-300 text-sm">{p.desc}</p>
              <div className="mt-4 text-xs text-neutral-400">Use only as advised by physician</div>
              <a href="/#contact" className="mt-4 inline-block bg-emerald-500 text-neutral-900 px-4 py-2 rounded-md hover:bg-emerald-400">Consult to Purchase</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


