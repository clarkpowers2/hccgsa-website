import { Link } from 'react-router-dom'
export default function ProductCard({ name, category, description, href = '/portfolio', external }: { name: string; category: string; description: string; href?: string; external?: boolean }) {
  const content = <><div className="eyebrow mb-2 text-[10px]">{category}</div><h3 className="text-lg font-bold text-haven-navy transition-colors group-hover:text-haven-gold">{name}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{description}</p><span className="mt-4 inline-block text-xs font-bold uppercase tracking-widest text-haven-gold">Explore →</span></>
  return external ? <a href={href} target="_blank" rel="noopener noreferrer" className="group border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-haven-gold hover:shadow-xl">{content}</a> : <Link to={href} className="group border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-haven-gold hover:shadow-xl">{content}</Link>
}
