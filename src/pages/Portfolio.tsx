import ProductCard from '../components/ProductCard'
import SectionLabel from '../components/SectionLabel'

type PortfolioItem = [name: string, description: string, href?: string, external?: boolean]
type PortfolioGroup = { cat: string; items: PortfolioItem[] }

const groups: PortfolioGroup[] = [
  { cat: 'Hospitality intelligence', items: [
    ['Haven Memory OS / Guest Intelligence OS', 'Flagship platform for boutique hotels.', 'https://haven-mos.org', true],
    ['Mind Reader', 'AI emotion, urgency, and churn analysis engine.'], ['Conflict Prevention Algorithm', 'Proactive issue detection before complaints.'], ['Memory Pulse', 'Real-time property health dashboard.'], ['Guardian', 'AI safety guardrail and compliance monitoring.'], ['QR Code Studio', 'Frictionless guest intake with no login.'], ['Department Messaging System', 'Role-isolated staff communications.'], ['Prophylactic Recovery Engine', 'Pre-checkout churn prevention and recovery.'], ['Haven Operations Simulator', 'Separate synthetic validation framework.'], ['Haven Certified Badge System', 'Five-tier property and staff certification.'],
  ]},
  { cat: 'Research and IP frameworks', items: [['Institutional Alzheimer’s', 'Named organizational condition and research framework.'], ['The Memory Gap', 'Framework for institutional knowledge loss.'], ['Autonomous Agent Dispatch', 'Multi-agent task routing and dispatch system.']] },
  { cat: 'Fintech and compliance', items: [['Crypto2BankVerify', 'B2B crypto-to-bank verification tooling.'], ['Vigilant Revenue Protector', 'Revenue reconciliation and financial monitoring.']] },
  { cat: 'Civic and social technology', items: [['HTAP / FairKey', 'Housing transparency and fair housing audit trails.'], ['FreshSave Pro', 'Food safety and inventory management SaaS.'], ['PremED Scanner', 'Medical pre-screening and documentation tool.']] },
  { cat: 'Communication and connectivity', items: [['EchoConnect', 'Multi-channel communication infrastructure.'], ['PulseLife Agent', 'AI health and wellness agent platform.'], ['ForgeTruth / ForgetTruth', 'Information verification and provenance tracking.']] },
]

export default function Portfolio() { return <div><section className="bg-haven-navy px-6 py-24 text-center text-white"><SectionLabel>One methodology. Many solutions.</SectionLabel><h1 className="text-4xl font-bold md:text-5xl">The full portfolio</h1><p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">Products spanning hospitality intelligence, fintech compliance, civic technology, food safety, and communication.</p></section><section className="px-6 py-20"><div className="mx-auto max-w-6xl">{groups.map(group => <div key={group.cat} className="mb-14"><div className="mb-5 bg-haven-navy px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] text-haven-gold">{group.cat}</div><div className="grid gap-5 md:grid-cols-2">{group.items.map(([name, description, href, external]) => <ProductCard key={name} name={name} category={group.cat} description={description} href={href || '/portfolio'} external={external} />)}</div></div>)}</div></section></div> }
