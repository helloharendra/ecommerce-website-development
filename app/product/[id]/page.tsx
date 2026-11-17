import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ChevronRight, RotateCcw, ShieldCheck, Star, Truck } from 'lucide-react'
import AddToCart from '@/components/AddToCart'
import ProductCard from '@/components/ProductCard'
import { getProduct, products } from '@/lib/data'
import { inr } from '@/lib/utils'

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }))
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const p = getProduct(params.id)
  if (!p) notFound()
  const related = products.filter((x) => x.category === p.category && x.id !== p.id).slice(0, 4)
  const off = Math.round(((p.mrp - p.price) / p.mrp) * 100)

  return (
    <div className="container-x py-10">
      <nav className="flex items-center gap-1 text-sm text-slate-400">
        <Link href="/" className="hover:text-slate-700">Home</Link><ChevronRight className="h-4 w-4" />
        <Link href="/#shop" className="hover:text-slate-700">{p.category}</Link><ChevronRight className="h-4 w-4" />
        <span className="text-slate-700">{p.name}</span>
      </nav>

      <div className="mt-8 grid gap-12 lg:grid-cols-2">
        <div className="grid gap-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={p.image.replace('w=800', 'w=1400')} alt={p.name} className="aspect-square w-full rounded-[2rem] bg-slate-100 object-cover" />
          <div className="grid grid-cols-4 gap-3">
            {[0, 1, 2, 3].map((i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={i} src={p.image} alt="" className={`aspect-square rounded-2xl object-cover ${i === 0 ? 'ring-2 ring-brand-500 ring-offset-2' : 'opacity-70'}`} />
            ))}
          </div>
        </div>

        <div className="animate-fade-up">
          <p className="eyebrow">{p.category}</p>
          <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-slate-900">{p.name}</h1>
          <div className="mt-4 flex items-center gap-2 text-sm">
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-600 px-2.5 py-0.5 font-semibold text-white">{p.rating} <Star className="h-3.5 w-3.5 fill-white" /></span>
            <span className="text-slate-500">{p.reviews.toLocaleString('en-IN')} ratings & reviews</span>
          </div>
          <div className="mt-6 flex items-baseline gap-3">
            <span className="text-4xl font-extrabold text-slate-900">{inr(p.price)}</span>
            <span className="text-lg text-slate-400 line-through">{inr(p.mrp)}</span>
            <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-sm font-bold text-emerald-700">{off}% off</span>
          </div>
          <p className="mt-1 text-xs text-slate-400">Inclusive of all taxes</p>
          <p className="mt-6 leading-relaxed text-slate-600">{p.description}</p>

          <AddToCart p={p} />

          <div className="mt-8 grid gap-3 rounded-3xl bg-slate-50 p-5 text-sm sm:grid-cols-3">
            {[[Truck, 'Free delivery by tomorrow'], [RotateCcw, '7-day easy returns'], [ShieldCheck, '1 year warranty']].map(([Icon, t]) => {
              const I = Icon as typeof Truck
              return <div key={t as string} className="flex items-center gap-2 text-slate-600"><I className="h-5 w-5 text-brand-600" />{t as string}</div>
            })}
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-24">
          <h2 className="mb-8 font-display text-2xl font-extrabold text-slate-900">You may also like</h2>
          <div className="grid grid-cols-2 gap-5 md:grid-cols-4">{related.map((r) => <ProductCard key={r.id} p={r} />)}</div>
        </section>
      )}
    </div>
  )
}
