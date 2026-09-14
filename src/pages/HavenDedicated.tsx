import { Link } from 'react-router-dom'
import Seo from '../components/Seo'

const HAVEN_URL = 'https://haven-mos.org'

const features = [
  ['Haven Guest Signal Engine™', 'Captures and preserves guest needs, preferences, and concerns at intake'],
  ['Haven Recovery Engine™', 'Tracks unresolved service issues and ensures follow-through across shifts'],
  ['Haven Smart Routing™', 'Gets the right information to the right department without manual handoffs'],
  ['Haven Auto Dispatch™', 'Automates task assignment so nothing falls through the gaps'],
  ['Haven Team Signal™', 'Keeps departments informed and aligned in real time'],
  ['Haven Guest Link™', 'QR-based guest intake that starts the memory record before staff interaction'],
  ['Haven Proof Engine™', 'Documents service delivery and recovery for accountability and review'],
] as const

const plans = [
  { name: 'Starter', price: '$249', description: 'For independent hotels getting started' },
  { name: 'Professional', price: '$499', description: 'For properties that need the full platform' },
] as const

const audiences = [
  ['Independent boutique hotels', 'Finally compete on guest recognition without a chain behind you.'],
  ['Front desk and operations teams', 'Context travels with the guest, not with one staff member.'],
  ['Hotel owners and general managers', 'Accountability and service continuity without micromanagement.'],
] as const

export default function HavenDedicated() {
  return (
    <div>
      <Seo
        title="Haven Memory OS™ | The Guest Memory Platform"
        description="Haven Memory OS™ helps independent hotels remember their guests across every shift, staff change, and service interaction. Built by HCCGSA LLC."
      />

      <section className="bg-haven-navy px-6 py-24 text-center text-white md:py-28">
        <div className="mx-auto max-w-3xl">
          <span className="inline-block border border-haven-gold/40 bg-haven-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-haven-gold">
            Flagship product of HCCGSA LLC
          </span>
          <h1 className="mt-7 text-4xl font-bold leading-tight md:text-6xl">The hotel that never forgets.</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/75">
            Haven Memory OS™ preserves the guest relationship across every shift change, staff turnover,
            and service interaction — so your team always knows who is in the building and what they need.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <a href={HAVEN_URL} target="_blank" rel="noopener noreferrer"
              className="bg-haven-gold px-8 py-3 font-bold text-haven-navy transition hover:bg-yellow-300">
              Start 60-day free trial
            </a>
            <Link to="/contact"
              className="border border-haven-gold px-8 py-3 font-bold text-haven-gold transition hover:bg-haven-gold hover:text-haven-navy">
              Request a demo
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-haven-navy">Institutional Alzheimer&apos;s</h2>
          <div className="mt-8 border-l-4 border-haven-gold bg-slate-50 p-8">
            <p className="text-lg italic text-slate-700">
              &quot;A guest tells the front desk they are allergic to feather pillows. The staff member notes it.
              That staff member leaves. The note disappears. Six months later the same guest returns — and nobody
              remembers. This is Institutional Alzheimer&apos;s. The hotel exists. The memory doesn&apos;t.&quot;
            </p>
            <p className="mt-5 font-bold text-haven-navy">— Nathaniel Clarke, Founder, HCCGSA LLC</p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold text-haven-navy">What Haven Memory OS™ does</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map(([name, description]) => (
              <article key={name} className="border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-bold text-haven-navy">{name}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-haven-navy">Simple pricing. 60-day free trial on every plan.</h2>
          <div className="mt-12 grid gap-6 text-left md:grid-cols-2">
            {plans.map(plan => (
              <div key={plan.name} className="border-2 border-haven-navy p-8">
                <div className="text-xs font-bold uppercase tracking-widest text-haven-navy">{plan.name}</div>
                <div className="mt-2 text-4xl font-bold text-haven-navy">
                  {plan.price}<span className="text-base font-normal text-slate-500">/month</span>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600">{plan.description}</p>
                <div className="mt-6 border-t border-slate-200 pt-4 text-sm font-bold text-haven-gold">
                  60-Day Free Trial included
                </div>
              </div>
            ))}
          </div>
          <a href={HAVEN_URL} target="_blank" rel="noopener noreferrer"
            className="mt-10 inline-block bg-haven-gold px-8 py-3 font-bold text-haven-navy transition hover:bg-yellow-300">
            Start your free trial
          </a>
        </div>
      </section>

      <section className="bg-haven-navy px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold">Built for the teams who carry the guest relationship</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {audiences.map(([title, description]) => (
              <article key={title} className="border border-haven-gold/25 bg-white/5 p-6">
                <h3 className="text-lg font-bold text-haven-gold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold text-haven-navy">Ready to give your hotel a memory?</h2>
          <a href={HAVEN_URL} target="_blank" rel="noopener noreferrer"
            className="mt-8 inline-block bg-haven-gold px-8 py-3 font-bold text-haven-navy transition hover:bg-yellow-300">
            Visit haven-mos.org
          </a>
        </div>
      </section>
    </div>
  )
}
