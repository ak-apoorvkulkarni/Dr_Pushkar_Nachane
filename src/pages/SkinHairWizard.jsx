import React from 'react';

const CONCERNS = [
  'Acne/Breakouts', 'Dryness/Flaking', 'Dullness', 'Pigmentation', 'Hair Fall', 'Dandruff', 'Frizz', 'Itchy Scalp'
];
const DOSHAS = ['Vata', 'Pitta', 'Kapha'];

function Tag({ label, selected, onToggle }) {
  return (
    <button onClick={onToggle} className={`px-3 py-1 rounded-full border ${selected ? 'border-emerald-500 text-emerald-300' : 'border-neutral-700 text-neutral-300'} bg-neutral-800 hover:border-emerald-500 transition-colors`}>{label}</button>
  );
}

export default function SkinHairWizard() {
  const [step, setStep] = React.useState(1);
  const [concerns, setConcerns] = React.useState([]);
  const [dosha, setDosha] = React.useState('Vata');

  const toggle = (c) => setConcerns((arr) => arr.includes(c) ? arr.filter(x => x !== c) : [...arr, c]);

  const guide = getGuide(dosha, concerns);

  return (
    <section className="section">
      <div className="mx-auto px-6 container-2xl">
        <h1 className="text-3xl font-semibold">Skin & Hair Routine Wizard</h1>
        <p className="mt-2 text-neutral-300">Choose your concerns and dosha to get a simple AM/PM routine.</p>

        {step === 1 && (
          <div className="mt-6 rounded-xl border border-neutral-800 bg-neutral-900 p-6">
            <h2 className="font-medium">Select concerns</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {CONCERNS.map((c) => (
                <Tag key={c} label={c} selected={concerns.includes(c)} onToggle={() => toggle(c)} />
              ))}
            </div>
            <div className="mt-4 flex justify-end">
              <button disabled={!concerns.length} onClick={() => setStep(2)} className="px-4 py-2 rounded-md bg-emerald-500 text-neutral-900 disabled:opacity-50">Next</button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="mt-6 rounded-xl border border-neutral-800 bg-neutral-900 p-6">
            <h2 className="font-medium">Select your dominant dosha</h2>
            <div className="mt-4 flex gap-3">
              {DOSHAS.map((d) => (
                <button key={d} onClick={() => setDosha(d)} className={`px-4 py-2 rounded-md border ${dosha === d ? 'border-emerald-500 text-emerald-300' : 'border-neutral-700 text-neutral-300'} bg-neutral-800`}>{d}</button>
              ))}
            </div>
            <div className="mt-4 flex justify-between">
              <button onClick={() => setStep(1)} className="px-4 py-2 rounded-md border border-neutral-700">Back</button>
              <button onClick={() => setStep(3)} className="px-4 py-2 rounded-md bg-emerald-500 text-neutral-900">See routine</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-6">
              <h3 className="font-semibold">Morning (AM)</h3>
              <ul className="mt-3 text-sm text-neutral-300 space-y-2 list-disc list-inside">
                {guide.am.map((x) => (<li key={x}>{x}</li>))}
              </ul>
            </div>
            <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-6">
              <h3 className="font-semibold">Evening (PM)</h3>
              <ul className="mt-3 text-sm text-neutral-300 space-y-2 list-disc list-inside">
                {guide.pm.map((x) => (<li key={x}>{x}</li>))}
              </ul>
            </div>
            <div className="md:col-span-2 rounded-xl border border-neutral-800 bg-neutral-900 p-6">
              <h3 className="font-semibold">Ingredients</h3>
              <div className="grid md:grid-cols-2 gap-4 mt-3 text-sm">
                <div>
                  <div className="text-neutral-200">Seek</div>
                  <ul className="text-neutral-300 list-disc list-inside space-y-1 mt-1">
                    {guide.seek.map((x) => (<li key={x}>{x}</li>))}
                  </ul>
                </div>
                <div>
                  <div className="text-neutral-200">Avoid</div>
                  <ul className="text-neutral-300 list-disc list-inside space-y-1 mt-1">
                    {guide.avoid.map((x) => (<li key={x}>{x}</li>))}
                  </ul>
                </div>
              </div>
              <div className="mt-4 text-xs text-neutral-500">Guidance is indicative; consult before changes if you have active conditions.</div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function getGuide(dosha, concerns) {
  const base = {
    Vata: {
      am: ['Gentle cleanse; lukewarm water', 'Hydrating toner; rose water', 'Light oil massage (sesame/almond)', 'SPF 30+'],
      pm: ['Oil cleanse; gentle milk cleanser', 'Nourishing serum; squalane or hya', 'Head massage 5 min with warm oil 2–3x/week'],
      seek: ['Sesame, almond, ghee', 'Aloe, rose, licorice', 'Oat, squalane, ceramides'],
      avoid: ['Over-exfoliation', 'Cold water rinses', 'Strong foaming surfactants'],
    },
    Pitta: {
      am: ['Cool rinse; soothing gel cleanser', 'Aloe/rose toner', 'Light moisturiser; SPF 50'],
      pm: ['Oil + gel double cleanse on heavy days', 'Cooling serum (niacinamide/centella)', 'Scalp massage with coconut/bhringraj oil 2x/week'],
      seek: ['Aloe, sandalwood, gotu kola', 'Niacinamide, panthenol', 'Coconut/bhringraj'],
      avoid: ['Hot water', 'Chili/very spicy topical actives', 'Excess sun'],
    },
    Kapha: {
      am: ['Invigorating cleanse; warm water', 'Herbal toner (neem/tulsi)', 'Light lotion; non-comedogenic', 'SPF 30+'],
      pm: ['Gel cleanse; clay mask 1–2x/week', 'Stimulating scalp massage with warm mustard/jojoba 3x/week'],
      seek: ['Tulsi, neem, tea tree (diluted)', 'Honey, clay (weekly)', 'Mustard/jojoba (scalp)'],
      avoid: ['Heavy occlusives daily', 'Leaving hair damp overnight'],
    },
  };

  // tailor by concerns
  if (concerns.includes('Acne/Breakouts')) {
    base.Pitta.seek.push('Azelaic acid (low %), green tea');
    base.Kapha.seek.push('Salicylic (low %), clay 1x/week');
  }
  if (concerns.includes('Dryness/Flaking')) {
    base.Vata.seek.push('Shea butter, glycerin');
    base.Vata.am.push('Humidify room; sip warm water');
  }
  if (concerns.includes('Hair Fall')) {
    base.Pitta.seek.push('Bhringraj, amla');
    base.Vata.seek.push('Ashwagandha (consult), head massage');
  }
  return base[dosha];
}


