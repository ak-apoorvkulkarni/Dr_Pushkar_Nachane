import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const QUESTIONS = [
  {
    q: 'Your natural body frame is...',
    options: [
      { label: 'Lean, finds it hard to gain weight', w: { v: 2, p: 0, k: 0 } },
      { label: 'Medium, athletic build', w: { v: 0, p: 2, k: 0 } },
      { label: 'Sturdy, gains easily', w: { v: 0, p: 0, k: 2 } },
    ],
  },
  {
    q: 'Skin and temperature feel...',
    options: [
      { label: 'Dry, cool hands/feet', w: { v: 2, p: 0, k: 0 } },
      { label: 'Warm, often flushed/oily', w: { v: 0, p: 2, k: 0 } },
      { label: 'Soft, cool, moist', w: { v: 0, p: 0, k: 2 } },
    ],
  },
  {
    q: 'Appetite is...',
    options: [
      { label: 'Irregular; forgets to eat', w: { v: 2, p: 0, k: 0 } },
      { label: 'Strong; gets irritable if late', w: { v: 0, p: 2, k: 0 } },
      { label: 'Slow; prefers light meals', w: { v: 0, p: 0, k: 2 } },
    ],
  },
  {
    q: 'Favorite climate',
    options: [
      { label: 'Warm & humid', w: { v: 2, p: 0, k: 0 } },
      { label: 'Cool & dry', w: { v: 0, p: 2, k: 0 } },
      { label: 'Warm & dry', w: { v: 0, p: 0, k: 2 } },
    ],
  },
  {
    q: 'Sleep pattern',
    options: [
      { label: 'Light; wakes easily', w: { v: 2, p: 0, k: 0 } },
      { label: 'Moderate; 6–8 hours', w: { v: 0, p: 2, k: 0 } },
      { label: 'Deep; 8–9 hours', w: { v: 0, p: 0, k: 2 } },
    ],
  },
  {
    q: 'Energy style',
    options: [
      { label: 'Bursts; tires quickly', w: { v: 2, p: 0, k: 0 } },
      { label: 'High; goal-driven', w: { v: 0, p: 2, k: 0 } },
      { label: 'Steady; endurance', w: { v: 0, p: 0, k: 2 } },
    ],
  },
  {
    q: 'Speech and pace',
    options: [
      { label: 'Fast, animated', w: { v: 2, p: 0, k: 0 } },
      { label: 'Clear, direct', w: { v: 0, p: 2, k: 0 } },
      { label: 'Slow, calm', w: { v: 0, p: 0, k: 2 } },
    ],
  },
  {
    q: 'Under stress you tend to feel...',
    options: [
      { label: 'Anxious/overthinking', w: { v: 2, p: 0, k: 0 } },
      { label: 'Irritable/critical', w: { v: 0, p: 2, k: 0 } },
      { label: 'Withdrawn/low', w: { v: 0, p: 0, k: 2 } },
    ],
  },
  {
    q: 'Digestion & bowels are usually...',
    options: [
      { label: 'Irregular; gas/constipation', w: { v: 2, p: 0, k: 0 } },
      { label: 'Strong; loose if spicy', w: { v: 0, p: 2, k: 0 } },
      { label: 'Slow; heaviness', w: { v: 0, p: 0, k: 2 } },
    ],
  },
];

function ResultBadge({ type, value }) {
  const map = {
    v: { label: 'Vata', color: 'bg-indigo-500' },
    p: { label: 'Pitta', color: 'bg-rose-500' },
    k: { label: 'Kapha', color: 'bg-emerald-500' },
  };
  const pct = Math.round(value);
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm"><span>{map[type].label}</span><span>{pct}%</span></div>
      <div className="h-2 w-full bg-neutral-800 rounded-full overflow-hidden">
        <div className={`${map[type].color} h-full`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

export default function PrakritiAssessment() {
  const [index, setIndex] = React.useState(0);
  const [scores, setScores] = React.useState({ v: 0, p: 0, k: 0 });
  const [finished, setFinished] = React.useState(false);

  const totalMax = QUESTIONS.length * 2; // each question awards 2 points
  const progress = Math.round((index / QUESTIONS.length) * 100);

  const onChoose = (w) => {
    const next = {
      v: scores.v + w.v,
      p: scores.p + w.p,
      k: scores.k + w.k,
    };
    if (index + 1 >= QUESTIONS.length) {
      setScores(next);
      setFinished(true);
    } else {
      setScores(next);
      setIndex(index + 1);
    }
  };

  const restart = () => {
    setIndex(0);
    setScores({ v: 0, p: 0, k: 0 });
    setFinished(false);
  };

  const vPct = (scores.v / totalMax) * 100;
  const pPct = (scores.p / totalMax) * 100;
  const kPct = (scores.k / totalMax) * 100;
  const top = Object.entries({ v: vPct, p: pPct, k: kPct }).sort((a, b) => b[1] - a[1])[0][0];

  return (
    <section className="section">
      <div className="mx-auto px-6 container-2xl">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-semibold">Prakriti Assessment</h1>
          {!finished && (
            <div className="w-40 h-2 bg-neutral-800 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500" style={{ width: `${progress}%` }} />
            </div>
          )}
        </div>

        <p className="mt-2 text-neutral-300">Answer a few fun prompts to discover your dominant dosha profile.</p>

        <div className="mt-8 grid lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-12 rounded-xl border border-neutral-800 bg-neutral-900 p-6 soft-shadow-dark">
            <h3 className="text-lg font-medium">How it works</h3>
            <ul className="mt-3 text-neutral-300 text-sm space-y-2 list-disc list-inside">
              <li>Each choice adds points to Vata, Pitta, or Kapha.</li>
              <li>At the end, you get a percentage mix and guidance.</li>
              <li>This is indicative only; consult for a clinical assessment.</li>
            </ul>
            <div className="mt-6 text-sm text-neutral-400">Have fun — your prakriti is your superpower.</div>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <AnimatePresence mode="popLayout">
              {!finished ? (
                <motion.div
                  key={`q-${index}`}
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-xl border border-neutral-800 bg-neutral-900 p-8 soft-shadow-dark"
                >
                  <div className="text-sm text-neutral-400">Question {index + 1} of {QUESTIONS.length}</div>
                  <h2 className="mt-2 text-2xl font-semibold">{QUESTIONS[index].q}</h2>
                  <div className="mt-5 grid gap-3">
                    {QUESTIONS[index].options.map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => onChoose(opt.w)}
                        className="text-left rounded-lg border border-neutral-700 hover:border-emerald-500 hover:text-emerald-300 bg-neutral-800 px-5 py-4 transition-colors"
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                  <div className="mt-4 text-xs text-neutral-500">Tap an option to continue →</div>
                </motion.div>
              ) : (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-xl border border-neutral-800 bg-neutral-900 p-8 soft-shadow-dark"
                >
                  <div className="text-sm text-neutral-400">Your dominant prakriti</div>
                  <h2 className="mt-1 text-2xl font-semibold">
                    {top === 'v' && 'Vata'}
                    {top === 'p' && 'Pitta'}
                    {top === 'k' && 'Kapha'}
                  </h2>
                  <div className="mt-4 grid gap-4">
                    <ResultBadge type="v" value={vPct} />
                    <ResultBadge type="p" value={pPct} />
                    <ResultBadge type="k" value={kPct} />
                  </div>
                  <div className="mt-4 text-sm text-neutral-300">
                    {top === 'v' && (
                      <p>You show light, mobile, creative traits. Anchor with warm meals, routine, and grounding practices.</p>
                    )}
                    {top === 'p' && (
                      <p>You show sharp, driven, transformative traits. Balance with cooling foods, breaks, and moderation.</p>
                    )}
                    {top === 'k' && (
                      <p>You show steady, nurturing, enduring traits. Energize with light meals, movement, and stimulation.</p>
                    )}
                  </div>
                  <div className="mt-6 flex gap-3">
                    <a href="/#contact" className="bg-emerald-500 text-neutral-900 px-4 py-2 rounded-md hover:bg-emerald-400">Book Ayurvedic Consultation</a>
                    <button onClick={restart} className="border border-neutral-700 px-4 py-2 rounded-md hover:border-emerald-500 hover:text-emerald-300">Retake</button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="lg:col-span-4 rounded-xl border border-neutral-800 bg-neutral-900 p-6 soft-shadow-dark">
            <h3 className="text-lg font-medium">Tips</h3>
            <ul className="mt-3 text-neutral-300 text-sm space-y-2 list-disc list-inside">
              <li>Answer instinctively; there are no wrong answers.</li>
              <li>Results indicate tendencies, not diagnoses.</li>
              <li>For a clinical analysis, book a consultation.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}


