import { Link } from 'react-router-dom'

export default function ProductCard({ name, category, description, href = '/portfolio', external, accentColor, status }: { name: string; category: string; description: string; href?: string; external?: boolean; accentColor?: string; status?: string }) {
  const content = (
    <>
      <div className="mb-2 flex items-center justify-between gap-2">
        <div className="eyebrow text-[10px]">{category}</div>
        {status && <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{status}</span>}
      </div>
      <h3 className="text-lg font-bold text-haven-navy transition-colors group-hover:text-haven-gold">{name}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
      <span className="mt-4 inline-block text-xs font-bold uppercase tracking-widest text-haven-gold">Explore →</span>
    </>
  )
  const style = accentColor ? { borderTopColor: accentColor, borderTopWidth: '3px' } : undefined
  const cls = 'group border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-haven-gold hover:shadow-xl'
  return external
    ? <a href={href} target="_blank" rel="noopener noreferrer" className={cls} style={style}>{content}</a>
    : <Link to={href} className={cls} style={style}>{content}</Link>
}
