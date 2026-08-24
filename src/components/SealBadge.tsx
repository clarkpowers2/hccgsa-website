export default function SealBadge({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizes = { sm: 'h-10 w-10', md: 'h-20 w-20', lg: 'h-28 w-28' }
  return <img src="/hccgsa_seal.png" alt="HCCGSA LLC seal" className={`${sizes[size]} rounded-full object-cover ring-1 ring-haven-gold/40`} />
}
