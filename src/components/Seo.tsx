import { useEffect } from 'react'

export default function Seo({ title, description }: { title: string; description: string }) {
  useEffect(() => {
    const previousTitle = document.title
    const metaEl = document.querySelector('meta[name="description"]')
    const previousDescription = metaEl?.getAttribute('content') ?? ''
    document.title = title
    if (metaEl) metaEl.setAttribute('content', description)
    return () => {
      document.title = previousTitle
      if (metaEl) metaEl.setAttribute('content', previousDescription)
    }
  }, [title, description])
  return null
}
