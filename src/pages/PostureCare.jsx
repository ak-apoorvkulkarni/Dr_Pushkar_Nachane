import React from 'react';

const AREAS = [
  { key: 'neck', name: 'Neck/Shoulders' },
  { key: 'lower-back', name: 'Lower Back' },
  { key: 'knees', name: 'Knees' },
];

const PLANS = {
  'neck': [
    'Neck side stretch — 30s each side',
    'Shoulder rolls — 10x each direction',
    'Chin tucks — 10 slow reps',
  ],
  'lower-back': [
    'Cat–cow — 10 slow reps',
    'Knee-to-chest — 30s each side',
    'Pelvic tilts — 10 slow reps',
  ],
  'knees': [
    'Quad stretch — 30s each side',
    'Hamstring stretch — 30s each side',
    'Ankle pumps — 20 reps',
  ],
};

export default function PostureCare() {
  const [area, setArea] = React.useState('neck');
  const [seconds, setSeconds] = React.useState(300);
  const [running, setRunning] = React.useState(false);

  React.useEffect(() => {
    if (!running) return;
    const id = setInterval(() => setSeconds((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(id);
  }, [running]);

  const reset = () => { setSeconds(300); setRunning(false); };

  const minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
  const secs = (seconds % 60).toString().padStart(2, '0');

  return (
    <section className="section">
      <div className="mx-auto px-6 container-2xl">
        <h1 className="text-3xl font-semibold">Posture & Joint Care Mini‑plan</h1>
        <p className="mt-2 text-neutral-300">Pick the area and follow the 3 guided stretches; use the 5‑minute timer.</p>

        <div className="mt-6 grid lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-4 rounded-xl border border-neutral-800 bg-neutral-900 p-6">
            <h2 className="font-medium">Choose area</h2>
            <div className="mt-3 grid gap-2">
              {AREAS.map((a) => (
                <button key={a.key} onClick={() => setArea(a.key)} className={`text-left px-4 py-2 rounded-md border ${area===a.key?'border-emerald-500 text-emerald-300':'border-neutral-700 text-neutral-300'} bg-neutral-800`}>{a.name}</button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 rounded-xl border border-neutral-800 bg-neutral-900 p-6">
            <h2 className="font-medium">Stretches</h2>
            <ol className="mt-3 text-sm text-neutral-300 space-y-2 list-decimal list-inside">
              {PLANS[area].map((x) => (<li key={x}>{x}</li>))}
            </ol>
            <div className="mt-6 flex items-center gap-3">
              <div className="text-2xl font-semibold tabular-nums">{minutes}:{secs}</div>
              <button onClick={() => setRunning((r) => !r)} className="px-4 py-2 rounded-md bg-emerald-500 text-neutral-900">{running ? 'Pause' : 'Start'}</button>
              <button onClick={reset} className="px-4 py-2 rounded-md border border-neutral-700">Reset</button>
            </div>
            <div className="mt-4 text-sm text-neutral-400">Oil guide: warm sesame (Vata), coconut/bhringraj (Pitta), mustard/mahanarayan (Kapha). Apply gently to area before stretches; avoid overpressure.</div>
          </div>
        </div>
      </div>
    </section>
  );
}


