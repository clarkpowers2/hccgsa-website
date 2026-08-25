import { Link } from 'react-router-dom'
import SectionLabel from '../components/SectionLabel'
import StatCard from '../components/StatCard'

const HAVEN_URL = import.meta.env.VITE_HAVEN_URL || 'https://haven-mos.org'

const features = [
  ['Haven Guest Signal Engine™', 'Real-time analysis of emotion, urgency, churn risk, and recommended action.'],
  ['Haven Conflict Shield™', 'Identifies escalation risk and protects the guest relationship before a complaint becomes a crisis.'],
  ['Haven Recovery Engine™', 'Guides the right recovery action at the right moment, before checkout.'],
  ['Haven Smart Routing™', 'Routes every issue to the right department with clear ownership.'],
  ['Haven Auto Dispatch™', 'Turns routing decisions into coordinated staff action.'],
  ['Haven Property Pulse™', 'Real-time visibility into property health, open issues, and operational pressure.'],
  ['Haven Guardian™', 'Safety layer that intercepts non-compliant AI outputs before they reach staff.'],
  ['Haven Guest Link™', 'Frictionless QR and digital guest intake with no app or login required.'],
  ['Haven Team Signal™', 'Role-aware department messaging that keeps every team aligned.'],
  ['Haven Certified™', 'Five-tier framework measuring staff and property performance.'],
  ['Haven Proof Engine™', 'Validation and audit infrastructure that makes operational claims reproducible.'],
  ['Haven Shift Bridge™', 'Structured shift context so incoming staff knows the full story.'],
  ['Haven Pattern Watch™', 'Detects recurring property problems before they become reputation problems.'],
]

const plans = [
  { name: 'Haven Starter', price: '$249', items: ['Up to 50 rooms', 'All core features', 'Haven Guest Signal Engine™', 'Haven Shift Bridge™'] },
  { name: 'Haven Professional', price: '$499', items: ['Unlimited rooms', 'Everything in Starter', 'Haven Pattern Watch™', 'Priority support'] },
]

function pricingUrl(plan?: string) {
  return `${HAVEN_URL}/pricing${plan ? `?plan=${encodeURIComponent(plan)}` : ''}`
}

export default function Haven() {
  return <div>
    <section className="bg-haven-navy px-6 py-24 text-center text-white">
      <SectionLabel>Flagship product</SectionLabel>
      <h1 className="text-4xl font-bold md:text-5xl">Haven Memory OS</h1>
      <p className="mt-4 text-xl font-bold text-haven-gold">Guest Intelligence Operating System</p>
      <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/70">The platform built to eliminate Institutional Alzheimer’s in independent boutique hotels. Live at haven-mos.org.</p>
      <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
        <a href={pricingUrl()} className="bg-haven-gold px-8 py-3 font-bold text-haven-navy hover:bg-yellow-300">Start Free 60-Day Pilot →</a>
        <a href={HAVEN_URL} className="border border-haven-gold px-8 py-3 font-bold text-haven-gold hover:bg-haven-gold hover:text-haven-navy">See the Platform</a>
      </div>
    </section>
    <section className="px-6 py-20"><div className="mx-auto max-w-5xl"><h2 className="mb-10 text-center text-2xl font-bold text-haven-navy">What Haven does</h2><div className="grid gap-7 md:grid-cols-2">{features.map(([title, desc]) => <div key={title} className="border-l-4 border-haven-gold py-2 pl-5"><h3 className="font-bold text-haven-navy">{title}</h3><p className="mt-2 text-sm leading-7 text-slate-600">{desc}</p></div>)}</div></div></section>
    <section className="bg-haven-navy px-6 py-20 text-center text-white"><h2 className="mb-10 text-2xl font-bold">Validated results</h2><div className="mx-auto grid max-w-4xl grid-cols-2 gap-3 md:grid-cols-4"><StatCard number="97.5" label="Haven score" sub="out of 100" light /><StatCard number="64.0" label="Baseline score" sub="same conditions" light /><StatCard number="+33.5" label="Improvement" sub="over manual" light /><StatCard number="0" label="Safety failures" sub="60 runs" light /></div><p className="mx-auto mt-8 max-w-xl text-sm leading-7 text-white/60">Validated through Haven Proof Engine, a separate synthetic validation framework following documented methodology.</p></section>
    <section className="px-6 py-20"><div className="mx-auto max-w-4xl text-center"><h2 className="text-2xl font-bold text-haven-navy">Start with a 60-day pilot</h2><p className="mt-3 text-slate-600">No contract. No credit card. At Day 30 you see your own operational data. At Day 60 you decide.</p><div className="mt-10 grid gap-6 text-left md:grid-cols-2">{plans.map(plan => <div key={plan.name} className="border-2 border-haven-navy p-7"><div className="eyebrow">{plan.name}</div><div className="mt-2 text-4xl font-bold text-haven-navy">{plan.price}<span className="text-base font-normal text-slate-500">/month</span></div><div className="my-5 border-t border-slate-200" />{plan.items.map(item => <div key={item} className="mb-2 text-sm text-slate-700"><span className="mr-2 font-bold text-haven-gold">✓</span>{item}</div>)}<div className="mt-6 grid gap-3"><a href={pricingUrl()} className="block bg-haven-gold py-3 text-center font-bold text-haven-navy hover:bg-yellow-300">Start 60-Day Free Pilot →</a><a href={pricingUrl(plan.name.toLowerCase().replace(' ', '-'))} className="block bg-haven-navy py-3 text-center font-bold text-white hover:bg-haven-gold hover:text-haven-navy">Subscribe — {plan.price}/mo →</a></div></div>)}</div><Link to="/contact" className="mt-8 inline-block font-bold text-haven-navy underline decoration-haven-gold decoration-2 underline-offset-4">Talk to HCCGSA about your pilot</Link></div></section>
  </div>
}
