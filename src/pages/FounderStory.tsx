import { Link } from 'react-router-dom'
import Seo from '../components/Seo'

const products = [
  ['Haven Guest Signal Engine™', 'Captures guest preferences, behaviors, and signals across every touchpoint — so the hotel always knows who is arriving and what they need.'],
  ['Haven Recovery Engine™', 'Turns service failures into loyalty moments. Detects issues in real time and routes recovery actions before a guest has to complain.'],
  ['Haven Smart Routing™', 'Routes guest requests, signals, and tasks to the right department automatically — no manual triage required.'],
  ['Haven Auto Dispatch™', 'Autonomous agent dispatch that acts on guest signals without waiting for a staff member to notice.'],
  ['Haven Guest Link™', 'A frictionless QR-based guest intake system that begins building the memory relationship from the moment of arrival.'],
  ['Haven Proof Engine™', 'Validates performance and generates evidence of service quality — so hotels can measure what their memory infrastructure is actually doing.'],
] as const

const statuses = [
  ['IHG One Rewards', 'Royal Ambassador', 'Invite-only. IHG selects the member — it cannot be purchased or applied for.'],
  ['Kimpton Hotels', 'Inner Circle', 'Invite-only. Kimpton notices and invites — no application process exists.'],
  ['Marriott Bonvoy', 'Ambassador Elite', 'Highest publicly available tier. Requires $20,000+ spend and 100+ nights annually.'],
  ['Hilton Honors', 'Diamond', 'Top tier. Requires 30+ stays or 60+ nights annually.'],
  ['World of Hyatt', 'Discoverist', 'Earned through qualifying nights and activity.'],
  ['Accor Live Limitless', 'Limitless Platinum', "Top tier across Accor's global portfolio."],
  ['Choice Privileges', 'Platinum', 'Highest tier in the Choice Hotels loyalty program.'],
] as const

const initiatives = [
  ['Haven Memory OS™', 'Preserves guest-service context across every shift and staff change'],
  ['Guest Intelligence OS', 'Supports consistent, informed hospitality decisions'],
  ['Sauti Listener', 'Creates a structured channel for staff voice and feedback'],
  ['Decorum Protocol', 'Promotes respectful service and conflict resolution'],
  ['Curriculum One', 'Personal AI tutor from pre-K through PhD'],
  ['Housing Transparency Platform (HTAP)', 'Addresses information and accountability gaps in housing systems'],
  ['ForgeTruth', 'Assists evidence organization and source-linked analysis for human review. Does not provide legal advice or guarantee outcomes.'],
  ['SnapFix', 'DIY augmented reality app — point your phone at anything broken and see how to fix it yourself'],
] as const

const hero = [
  ['H', 'Hospitable'],
  ['E', 'Empathy'],
  ['R', 'Respect'],
  ['O', 'Ownership'],
] as const

export default function FounderStory() {
  return (
    <div className="bg-haven-navy text-white">
      <Seo
        title="Nathaniel Clarke | Founder, Systems Architect & Hospitality Advocate"
        description="Meet Nathaniel Clarke — known as ArchitekNAdvocacy — founder of HCCGSA LLC and the Hotel Advocacy Network, building hospitality systems centered on continuity, dignity, and accountability."
      />

      {/* 1. Hero */}
      <section className="mx-auto max-w-4xl px-6 pb-16 pt-20 text-center md:pt-28">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/60">Founder · Systems Architect · Hospitality Advocate</p>
        <p className="mt-2 text-sm font-bold text-haven-gold">ArchitekNAdvocacy</p>
        <h1 className="mt-6 text-3xl font-bold leading-tight md:text-5xl">Building hospitality systems that remember people.</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/75">I build technology and advocacy programs around a straightforward belief: people should not have to repeat their story, fight to be heard, or lose access to respectful service because a system failed to carry context forward.</p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link to="/" className="bg-haven-gold px-8 py-3 font-bold text-haven-navy transition hover:bg-yellow-300">Explore HCCGSA</Link>
          <Link to="/about" className="border border-haven-gold px-8 py-3 font-bold text-haven-gold transition hover:bg-haven-gold hover:text-haven-navy">Hotel Advocacy Network</Link>
        </div>

        {/* Original hero content preserved below */}
        <div className="mx-auto mt-14 max-w-3xl border-t border-haven-gold/25 pt-12">
          <div className="eyebrow mb-5">Founder story &amp; origin</div>
          <h2 className="text-3xl font-bold leading-tight md:text-5xl">The Problem No One Had Named</h2>
          <figure className="mx-auto mt-9 max-w-xs md:max-w-sm">
            <img src="/nathaniel-clarke.png" alt="Nathaniel Clarke, founder of HCCGSA LLC, receiving the &quot;Saving the Youth&quot; honor at the Recreation Center Awards" className="w-full rounded-lg border border-haven-gold/25 shadow-lg" width={1148} height={1370} />
            <figcaption className="mt-3 text-sm italic leading-6 text-white/55">Nathaniel Clarke received the &quot;Saving the Youth&quot; honor at the Recreation Center Awards.</figcaption>
          </figure>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-white/75">Every major hotel brand in the world has a loyalty program. Independent hotels have none of that infrastructure — and every time a guest checks in, the hotel starts from zero. Nathaniel Clarke called this <strong className="text-white">Institutional Alzheimer&apos;s</strong>. Then he built the solution.</p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl border-t border-haven-gold/25" />

      {/* 2. Mission */}
      <section className="mx-auto max-w-3xl space-y-5 px-6 py-16">
        <h2 className="text-3xl font-bold text-haven-gold">Mission</h2>
        <p className="leading-8 text-white/80">Nathaniel Clarke, known as ArchitekNAdvocacy, is a systems architect, entrepreneur, and community advocate focused on improving hospitality for both guests and the people who serve them. He founded HCCGSA LLC — Hotel Chamber of Commerce, Guest Services Advocacy LLC — and the Hotel Advocacy Network to bring technology, service, and accountability into the same conversation. His work is grounded in dignity, fair treatment, practical support, and the belief that every person deserves to be heard.</p>
      </section>

      {/* 3. Why I Build */}
      <section className="bg-white/5">
        <div className="mx-auto max-w-3xl space-y-5 px-6 py-16">
          <h2 className="text-3xl font-bold text-haven-gold">Why I Build</h2>
          <p className="leading-8 text-white/80">A guest concern can be forgotten between shifts. An employee may be asked to solve a problem without the information or authority to do it well. A person can ask for help and encounter a system that records the transaction but loses the human story. Nathaniel builds for those failures of continuity — tools that preserve service history, improve handoffs, clarify accountability, and make it easier for teams to follow through.</p>
          <p className="leading-8 text-white/80">Haven Memory OS™ is designed to help hospitality teams retain the context behind guest needs, preferences, unresolved concerns, and service-recovery efforts — because a guest should not have to start over every time the shift changes.</p>
        </div>
      </section>

      {/* 4. Institutional Alzheimer's callout */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <div className="border border-haven-gold/25 bg-haven-gold/10 p-7">
          <h2 className="text-2xl font-bold text-haven-gold">Institutional Alzheimer&apos;s</h2>
          <p className="mt-4 text-lg leading-8 text-white/85">When an organization loses the information, context, and follow-through needed to care for the people it serves.</p>
          <p className="mt-5 text-sm italic leading-6 text-white/55">Nathaniel uses this as a metaphor — not a medical or clinical claim — for the failure of organizations to retain the knowledge needed to serve people well.</p>
        </div>
      </section>

      {/* Original: Where the Insight Came From */}
      <section className="mx-auto max-w-3xl space-y-5 px-6 py-16">
        <h2 className="text-3xl font-bold text-haven-gold">Where the Insight Came From</h2>
        <p className="leading-8 text-white/80">Nathaniel Clarke didn&apos;t read about the problem in a report. He lived it — across every major hotel brand in the world, at the highest tier each program offers.</p>
        <p className="leading-8 text-white/80">At that level, recognition is not a perk. It is a standard. Staff know your name before you arrive. Your preferences are waiting for you. The experience is continuous across every property, every city, every stay. <strong className="text-white">That continuity is the product.</strong></p>
        <p className="leading-8 text-white/80">Independent boutique hotels — often the most beautiful, most personal properties in the world — cannot replicate that. Not because their staff don&apos;t care. Because the infrastructure to remember doesn&apos;t exist for them. Every new guest, every new stay, every new interaction begins from nothing.</p>
        <p className="leading-8 text-white/80">Nathaniel named this gap <strong className="text-white">Institutional Alzheimer&apos;s</strong> — the condition of a hotel that forgets every guest the moment they leave. He began developing the concept in late 2024. Haven Memory OS™ is the answer.</p>
      </section>

      {/* Original: Haven Memory OS feature section */}
      <section className="bg-white/5">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="text-3xl font-bold text-haven-gold">Haven Memory OS™ — The First Guest Intelligence OS</h2>
          <p className="mt-5 leading-8 text-white/80">Haven Memory OS™ is not a CRM. It is not a property management add-on. It is the first operating system built specifically around <strong className="text-white">guest memory</strong> — giving independent hotels the intelligence infrastructure that only the largest brands have ever had.</p>
          <div className="mt-8 grid gap-4">
            {products.map(([name, description]) => (
              <article key={name} className="border-l-4 border-haven-gold bg-white/5 p-6">
                <h3 className="text-xl font-bold">{name}</h3>
                <p className="mt-2 text-sm leading-7 text-white/70">{description}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 leading-8 text-white/80">Haven Memory OS™ is live at <a className="text-haven-gold hover:underline" href="https://haven-mos.org" target="_blank" rel="noopener noreferrer">haven-mos.org</a> with a 60-day free trial for qualifying independent hotels.</p>
        </div>
      </section>

      {/* 5. Initiatives */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold text-haven-gold">Initiatives</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {initiatives.map(([name, description]) => (
              <article key={name} className="border border-haven-gold/25 bg-white/5 p-6">
                <h3 className="text-lg font-bold text-white">{name}</h3>
                <p className="mt-2 text-sm leading-7 text-white/65">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Background */}
      <section className="bg-white/5">
        <div className="mx-auto max-w-3xl space-y-5 px-6 py-16">
          <h2 className="text-3xl font-bold text-haven-gold">Background</h2>
          <p className="leading-8 text-white/80">Nathaniel studied hospitality at Slippery Rock University before an injury interrupted his studies. He later completed hotel operations training with a score of 96 out of 100. His loyalty-program experience spans Marriott Platinum, Hilton Diamond, Hyatt Discoverist, Choice Hotels Platinum, and prior participation in IHG Royal Ambassador and Kimpton Inner Circle — programs that shaped his understanding of guest recognition, service recovery, and the gap between brand promises and real service delivery.</p>
        </div>
      </section>

      {/* Original: Global Elite Loyalty Credentials */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-3xl font-bold text-haven-gold">Global Elite Loyalty Credentials</h2>
        <p className="mt-5 leading-8 text-white/80">The foundation of Haven Memory OS™ is not theory. It is firsthand mastery of how the world&apos;s best hotel programs deliver recognition at the highest level.</p>
        <p className="mt-5 text-sm italic leading-7 text-white/55">Nathaniel Clarke formerly held elite status across every major global hotel loyalty program — at the invitation-only and top-tier levels. These statuses are earned through qualifying activity and lapse when that activity stops; they are listed here as the experiential foundation from which the Institutional Alzheimer&apos;s concept and Haven Memory OS™ were developed.</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {statuses.map(([brand, status, note]) => (
            <article key={brand} className="border border-haven-gold/25 bg-white/5 p-5">
              <div className="eyebrow text-[10px]">{brand}</div>
              <h3 className="mt-2 text-lg font-bold">{status}</h3>
              <p className="mt-2 text-xs italic leading-5 text-white/50">{note}</p>
            </article>
          ))}
        </div>
        <p className="mt-6 text-xs italic leading-6 text-white/45">Elite statuses are activity-based and lapse when qualifying activity ceases. The statuses above reflect the firsthand hospitality experience that informed the development of Haven Memory OS™ and the Institutional Alzheimer&apos;s framework.</p>
      </section>

      {/* 7. Advocacy and Community */}
      <section className="bg-white/5">
        <div className="mx-auto max-w-3xl space-y-5 px-6 py-16">
          <h2 className="text-3xl font-bold text-haven-gold">Advocacy and Community</h2>
          <p className="leading-8 text-white/80">Nathaniel&apos;s advocacy is shaped by firsthand experience navigating housing instability and complex legal and administrative processes. He represented himself in a federal civil-rights case — an experience that reinforced the importance of documentation, clear information, and systems that do not leave people unheard. Those experiences also informed the Housing Transparency Platform.</p>
          <p className="leading-8 text-white/80">Community service includes volunteering at the Martin Luther King Center in Philadelphia — mentoring, tutoring, and health education — and playground and community volunteer work. He has also supported young people informally as a &quot;big brother&quot; through personal community relationships, outside any formal organization.</p>
        </div>
      </section>

      {/* Original: About the Founder */}
      <section className="bg-haven-gold/10">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="text-3xl font-bold text-haven-gold">About the Founder</h2>
          <div className="mt-7 border border-haven-gold/25 bg-haven-gold/10 p-7 leading-8 text-white/85">
            <p>Nathaniel Clarke is the Founder and CEO of HCCGSA LLC — Hotel Chamber of Commerce, Guest Services Advocacy LLC — incorporated in Philadelphia and operating from New York.</p>
            <p className="mt-4">HCCGSA LLC operates under the methodology brand <strong className="text-white">ARCHITEK N ADVOCACY™</strong> and runs a multi-product portfolio spanning hospitality technology, civic technology, fintech, and consumer health.</p>
            <p className="mt-4">The work begins from a simple conviction: the best independent hotels in the world deserve the same intelligence infrastructure as the largest chains. Haven Memory OS™ exists to close that gap — one hotel, one guest, one remembered moment at a time.</p>
            <span className="mt-5 block font-bold text-haven-gold">— Nathaniel Clarke · ARCHITEK N ADVOCACY™</span>
          </div>
        </div>
      </section>

      {/* 8. Vision — HERO framework */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-haven-gold">Vision</h2>
          <p className="mt-5 text-left leading-8 text-white/80">Nathaniel&apos;s long-term vision is a hospitality industry where guests feel welcome, employees feel valued, and concerns receive fair attention. Through HCCGSA LLC and the advocacy initiative Hotel Advocacy Network, he is working toward systems that strengthen independent hotels while supporting both guests and staff.</p>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {hero.map(([letter, word]) => (
              <div key={letter} className="border border-haven-gold/25 bg-white/5 p-6">
                <div className="text-4xl font-bold text-haven-gold">{letter}</div>
                <div className="mt-2 text-sm font-bold text-white">{word}</div>
              </div>
            ))}
          </div>
          <p className="mt-10 text-left leading-8 text-white/80">Hospitality, in this view, is not simply service delivery. It is the willingness to listen, preserve context, treat people fairly, and take responsibility when something falls short.</p>
        </div>
      </section>

    </div>
  )
}
