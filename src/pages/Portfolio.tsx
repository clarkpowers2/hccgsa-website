import { Link } from 'react-router-dom'

type Platform = {
  name: string
  tag: string
  description: string
  audience: string
  href?: string
}

const sectors: { name: string; platforms: Platform[] }[] = [
  {
    name: 'Hospitality Technology',
    platforms: [{
      name: 'Haven Memory OS™', tag: 'Hospitality Tech',
      description: 'The first Guest Intelligence Operating System for independent hotels. Haven Memory OS™ gives boutique and independent properties the guest memory infrastructure that only global chains have ever had — so every guest feels known, every stay builds on the last, and nothing important is ever forgotten.',
      audience: 'Independent boutique hotels, small to mid-size properties without brand loyalty infrastructure.', href: '/haven',
    }],
  },
  {
    name: 'Civic Technology',
    platforms: [
      { name: 'FairKey / HTAP™', tag: 'Civic Tech', description: 'Housing Transparency Access Platform. FairKey gives tenants, advocates, and community organizations access to clear, structured housing data — making the rental market more transparent, accountable, and fair for people who have historically had the least power in it.', audience: 'Tenants, housing advocates, community organizations, and civic institutions.' },
      { name: 'ForgeTruth™', tag: 'Civic Tech · Verification', description: 'An AI-powered multi-agent claim verification and evidence intelligence platform. ForgeTruth cross-references sources, surfaces supporting and contradicting evidence, and delivers structured verification reports — built for a world where misinformation moves faster than facts.', audience: 'Journalists, researchers, property managers, legal teams, and institutions that need verified, evidence-backed information.' },
    ],
  },
  {
    name: 'Financial Technology',
    platforms: [
      { name: 'Crypto2BankVerify™', tag: 'Fintech', description: 'A verification and compliance bridge for cryptocurrency-to-bank transactions. Crypto2BankVerify™ helps individuals and businesses confirm, document, and validate digital asset conversions — adding a layer of trust and traceability to a space that urgently needs it.', audience: 'Individuals, small businesses, and financial institutions navigating crypto-to-fiat compliance.' },
      { name: 'Vigilant Revenue Protector™', tag: 'Fintech · Revenue Protection', description: 'A revenue protection and monitoring platform that detects anomalies, flags risk patterns, and alerts operators before revenue loss becomes a crisis. Built for businesses that cannot afford to discover a problem after it has already cost them money.', audience: 'Small and mid-size business operators, hospitality finance teams, and revenue managers.' },
    ],
  },
  {
    name: 'Consumer Health',
    platforms: [{
      name: 'FreshSave Pro™', tag: 'Consumer Health · Food Safety',
      description: "A food freshness tracking and waste reduction platform for households and food service operations. FreshSave Pro helps users know exactly what they have, what's expiring, and what to use first — reducing food waste, saving money, and supporting healthier eating habits.",
      audience: 'Households, families, and food service operations focused on reducing waste and food costs.',
    }],
  },
  {
    name: 'Augmented Reality',
    platforms: [{
      name: 'SnapFix™', tag: 'AR · Consumer Tech',
      description: 'A DIY augmented reality app that shows you how to fix things yourself. Point your phone at anything broken — a leaking pipe, a damaged wall, a faulty appliance — and SnapFix overlays step-by-step repair guidance directly onto what you see. Professional-quality fixes, no professional required.',
      audience: 'Homeowners, renters, hotel maintenance teams, and anyone who wants to fix things themselves without calling a contractor.',
    }],
  },
  {
    name: 'Augmented Reality',
    platforms: [{
      name: 'SnapFix™', tag: 'AR · Consumer Tech',
      description: 'A DIY augmented reality app — point your phone at anything broken and see step-by-step how to fix it yourself. Professional-quality fixes, no professional required.',
      audience: 'Homeowners, renters, and anyone who wants to fix things themselves without calling a contractor.',
    }],
  },
  {
    name: 'Education Technology',
    platforms: [{
      name: 'Curriculum One™', tag: 'Education Tech',
      description: 'A comprehensive tutoring and structured learning platform serving students at every stage of education — from Pre-K through PhD-level study. Curriculum One delivers personalized learning paths across all major subjects and disciplines, making high-quality educational support accessible to learners wherever they are in their journey.',
      audience: 'Students, learners, and families from early childhood through doctoral education.',
    }],
  },
]

function PlatformCard({ platform }: { platform: Platform }) {
  const content = <><span className="inline-block w-fit border border-haven-gold/20 bg-haven-gold/10 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-haven-gold">{platform.tag}</span><h3 className="text-xl font-bold text-white">{platform.name}</h3><p className="text-sm leading-7 text-white/80">{platform.description}</p><p className="mt-auto border-t border-white/10 pt-3 text-xs italic leading-6 text-white/50"><strong className="not-italic font-normal text-white/70">Built for:</strong> {platform.audience}</p>{platform.href && <span className="text-sm font-bold tracking-wide text-haven-gold">Learn more →</span>}</>
  return platform.href ? <Link to={platform.href} className="group flex flex-col gap-3 border border-haven-gold/25 border-t-4 border-t-haven-gold bg-white/5 p-7 transition hover:bg-white/10">{content}</Link> : <article className="flex flex-col gap-3 border border-haven-gold/25 border-t-4 border-t-haven-gold bg-white/5 p-7 transition hover:bg-white/10">{content}</article>
}

export default function Portfolio() {
  return <div className="bg-haven-navy text-white">
    <section className="mx-auto max-w-6xl px-6 pb-16 pt-20 md:pt-28"><div className="eyebrow mb-4">HCCGSA LLC · Platform Portfolio</div><h1 className="text-4xl font-bold leading-tight md:text-6xl">Platforms Built to Solve Real Problems</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">Every platform in this portfolio addresses a specific, underserved need — across hospitality, housing, food safety, finance, education, and civic life. Each one is built, owned, and operated under HCCGSA LLC.</p></section>
    <div className="mx-auto max-w-6xl border-t border-haven-gold/25" />
    <section className="mx-auto max-w-6xl px-6 py-16">{sectors.map(sector => <div key={sector.name} className="mb-14 last:mb-0"><h2 className="mb-6 border-b border-haven-gold/25 pb-3 text-xs font-bold uppercase tracking-[0.2em] text-haven-gold">{sector.name}</h2><div className="grid gap-5 md:grid-cols-2">{sector.platforms.map(platform => <PlatformCard key={platform.name} platform={platform} />)}</div></div>)}</section>
  </div>
}
