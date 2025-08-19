import React from 'react';

export default function HydrationPlanner() {
  const [weight, setWeight] = React.useState(70); // kg
  const [climate, setClimate] = React.useState('moderate');
  const [activity, setActivity] = React.useState('light');
  const [tempPref, setTempPref] = React.useState('warm');

  const liters = calcLiters(weight, climate, activity);
  const schedule = makeSchedule(liters);

  return (
    <section className="section">
      <div className="mx-auto px-6 container-2xl">
        <h1 className="text-3xl font-semibold">Hydration & Sips Planner</h1>
        <p className="mt-2 text-neutral-300">Plan pacifying sips across the day based on weight, climate, and activity.</p>

        <div className="mt-6 grid lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-5 rounded-xl border border-neutral-800 bg-neutral-900 p-6">
            <h2 className="font-medium">Inputs</h2>
            <div className="mt-3 grid gap-3 text-sm">
              <label className="grid grid-cols-2 items-center gap-2">
                <span>Weight (kg)</span>
                <input type="number" min="30" max="150" value={weight} onChange={(e)=>setWeight(+e.target.value||70)} className="px-3 py-2 rounded-md bg-neutral-800 border border-neutral-700 text-neutral-100" />
              </label>
              <label className="grid grid-cols-2 items-center gap-2">
                <span>Climate</span>
                <select value={climate} onChange={(e)=>setClimate(e.target.value)} className="px-3 py-2 rounded-md bg-neutral-800 border border-neutral-700 text-neutral-100">
                  <option value="cool">Cool</option>
                  <option value="moderate">Moderate</option>
                  <option value="hot">Hot/Humid</option>
                </select>
              </label>
              <label className="grid grid-cols-2 items-center gap-2">
                <span>Activity</span>
                <select value={activity} onChange={(e)=>setActivity(e.target.value)} className="px-3 py-2 rounded-md bg-neutral-800 border border-neutral-700 text-neutral-100">
                  <option value="light">Light</option>
                  <option value="moderate">Moderate</option>
                  <option value="intense">Intense</option>
                </select>
              </label>
              <label className="grid grid-cols-2 items-center gap-2">
                <span>Water temp</span>
                <select value={tempPref} onChange={(e)=>setTempPref(e.target.value)} className="px-3 py-2 rounded-md bg-neutral-800 border border-neutral-700 text-neutral-100">
                  <option value="warm">Warm</option>
                  <option value="room">Room</option>
                </select>
              </label>
            </div>
          </div>

          <div className="lg:col-span-7 rounded-xl border border-neutral-800 bg-neutral-900 p-6">
            <h2 className="font-medium">Plan</h2>
            <div className="mt-2 text-neutral-300 text-sm">Target: <span className="text-neutral-100 font-medium">{liters.toFixed(1)} L/day</span> — favor {tempPref === 'warm' ? 'warm' : 'room temperature'} sips; avoid large chugs.</div>
            <ul className="mt-4 grid md:grid-cols-2 gap-3 text-sm">
              {schedule.map((s) => (
                <li key={s.time} className="rounded-md border border-neutral-800 bg-neutral-800/60 px-4 py-3">
                  <div className="text-neutral-200">{s.time}</div>
                  <div className="text-neutral-300">{s.note}</div>
                </li>
              ))}
            </ul>
            <div className="mt-4 text-xs text-neutral-500">Adjust with exercise/sweat; add pinch of rock salt after intense sessions.</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function calcLiters(weight, climate, activity) {
  let base = Math.max(1.8, weight * 0.03); // 30 ml/kg
  if (climate === 'hot') base += 0.4; else if (climate === 'cool') base -= 0.2;
  if (activity === 'moderate') base += 0.3; else if (activity === 'intense') base += 0.6;
  return Math.min(4.0, Math.max(1.8, base));
}

function makeSchedule(liters) {
  const cups = Math.round((liters * 1000) / 200); // 200ml sips
  const slots = [
    { time: 'Upon waking', note: '1–2 warm cups; optional lemon/honey' },
    { time: 'Mid‑morning', note: '1 cup; avoid with fruit' },
    { time: 'Pre‑lunch', note: '1 cup 20 min before' },
    { time: 'Mid‑afternoon', note: '1 cup; herbal tea ok' },
    { time: 'Pre‑dinner', note: '1 cup 20 min before' },
    { time: 'Evening', note: '1 cup; sip slowly' },
  ];
  // scale notes by target
  const extra = Math.max(0, cups - 6);
  for (let i = 0; i < extra; i++) slots[i % slots.length].note = slots[i % slots.length].note.replace('1 cup', '1–2 cups');
  return slots;
}


