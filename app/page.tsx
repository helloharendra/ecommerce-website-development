import Link from 'next/link'
import { ArrowRight, BadgeCheck, RotateCcw, ShieldCheck, Truck } from 'lucide-react'
import ProductGrid from '@/components/ProductGrid'
import { categories, products } from '@/lib/data'
import { img } from '@/lib/utils'

const perks = [
  { icon: Truck, title: 'Free delivery', text: 'On orders above ₹999' },
  { icon: RotateCcw, title: 'Easy returns', text: '7-day no-questions returns' },
  { icon: ShieldCheck, title: 'Secure payments', text: 'UPI, cards, wallets & COD' },
  { icon: BadgeCheck, title: '100% genuine', text: 'Sourced from brands' },
]

export default function Home() {
  const hero = products[0]
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,theme(colors.brand.100),transparent_55%),radial-gradient(ellipse_at_bottom_right,theme(colors.indigo.100),transparent_50%)]" />
        <div className="container-x grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-brand-700 shadow-sm ring-1 ring-brand-100">✨ Winter sale is live: up to 60% off</span>
            <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-6xl">
              Everything you love,<br /><span className="bg-gradient-to-r from-brand-600 to-indigo-500 bg-clip-text text-transparent">delivered beautifully.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-slate-600">Discover thousands of handpicked products across electronics, fashion, home and beauty, with lightning-fast delivery.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#shop" className="btn-primary px-7 py-3.5">Shop now <ArrowRight className="h-4 w-4" /></Link>
              <Link href="#deals" className="btn-ghost px-7 py-3.5">Today&apos;s deals</Link>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-slate-500">
              <div><p className="text-2xl font-bold text-slate-900">2M+</p>happy customers</div>
              <div className="h-10 w-px bg-slate-200" />
              <div><p className="text-2xl font-bold text-slate-900">4.8★</p>app rating</div>
              <div className="h-10 w-px bg-slate-200" />
              <div><p className="text-2xl font-bold text-slate-900">24h</p>express delivery</div>
            </div>
          </div>
          <div className="relative animate-fade-up [animation-delay:150ms]">
            <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-br from-brand-400/30 to-indigo-400/30 blur-2xl" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img('1505740420928-5e560c06d30e', 1200)} alt={hero.name} className="aspect-[4/3] w-full rounded-[2.5rem] object-cover shadow-2xl" />
            <div className="absolute -bottom-6 left-6 rounded-2xl bg-white/90 p-4 shadow-xl ring-1 ring-slate-100 backdrop-blur">
              <p className="text-xs text-slate-500">Bestseller</p>
              <p className="font-semibold text-slate-900">{hero.name}</p>
              <p className="text-sm font-bold text-brand-600">₹4,999 <span className="font-normal text-slate-400 line-through">₹7,999</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="container-x">
        <div className="grid grid-cols-2 gap-4 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm lg:grid-cols-4">
          {perks.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex items-center gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-600"><Icon className="h-5 w-5" /></span>
              <div><p className="text-sm font-semibold text-slate-900">{title}</p><p className="text-xs text-slate-500">{text}</p></div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="container-x mt-20">
        <div className="flex items-end justify-between"><div><p className="eyebrow">Browse</p><h2 className="mt-2 font-display text-3xl font-extrabold text-slate-900">Shop by category</h2></div></div>
        <div className="mt-8 grid grid-cols-3 gap-4 md:grid-cols-6">
          {categories.map((c) => (
            <Link key={c.name} href="#shop" className={`group rounded-3xl bg-gradient-to-br ${c.tint} p-5 text-center transition hover:-translate-y-1 hover:shadow-lg`}>
              <span className="text-4xl transition group-hover:scale-110 inline-block">{c.emoji}</span>
              <p className="mt-3 text-sm font-semibold text-slate-800">{c.name}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Deal banner */}
      <section id="deals" className="container-x mt-20">
        <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 p-8 text-white sm:p-12">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-brand-600/40 blur-3xl" />
          <div className="absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-indigo-500/30 blur-3xl" />
          <div className="relative grid items-center gap-8 md:grid-cols-2">
            <div>
              <p className="eyebrow text-brand-300">Deal of the day</p>
              <h3 className="mt-3 font-display text-4xl font-extrabold">Ultrabook 14 Pro</h3>
              <p className="mt-3 text-slate-300">2.8K display · 16GB RAM · 1TB SSD. Extra ₹5,000 off with HDFC cards.</p>
              <div className="mt-6 flex gap-3">
                {[['08', 'hrs'], ['42', 'min'], ['19', 'sec']].map(([v, l]) => (
                  <div key={l} className="w-16 rounded-2xl bg-white/10 py-3 text-center ring-1 ring-white/15"><p className="text-2xl font-bold">{v}</p><p className="text-[10px] uppercase text-slate-400">{l}</p></div>
                ))}
              </div>
              <Link href="/product/ultrabook-14" className="btn mt-8 bg-white px-7 py-3.5 text-slate-900 hover:bg-brand-50">Grab the deal <ArrowRight className="h-4 w-4" /></Link>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img('1496181133206-80ce9b88a853', 1000)} alt="Ultrabook" className="rounded-3xl object-cover shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="shop" className="container-x mt-20 scroll-mt-24">
        <p className="eyebrow">Trending now</p>
        <h2 className="mb-8 mt-2 font-display text-3xl font-extrabold text-slate-900">Popular products</h2>
        <ProductGrid />
      </section>
    </>
  )
}
