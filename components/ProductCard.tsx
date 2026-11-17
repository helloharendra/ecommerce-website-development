'use client'

import Link from 'next/link'
import { Heart, Plus, Star } from 'lucide-react'
import { useCart } from '@/lib/cart'
import { inr } from '@/lib/utils'
import type { Product } from '@/lib/data'

export default function ProductCard({ p }: { p: Product }) {
  const { add } = useCart()
  const off = Math.round(((p.mrp - p.price) / p.mrp) * 100)
  return (
    <div className="group relative">
      <Link href={`/product/${p.id}`} className="block overflow-hidden rounded-3xl bg-slate-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={p.image} alt={p.name} loading="lazy" className="aspect-square w-full object-cover transition duration-700 group-hover:scale-105" />
      </Link>
      {p.badge && <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-bold text-slate-900 shadow">{p.badge}</span>}
      <button aria-label="Wishlist" className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-slate-500 shadow backdrop-blur transition hover:text-rose-500"><Heart className="h-4 w-4" /></button>
      <button
        onClick={() => add({ id: p.id, name: p.name, price: p.price, image: p.image })}
        className="absolute bottom-[92px] right-3 flex translate-y-2 items-center gap-1 rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white opacity-0 shadow-xl transition group-hover:translate-y-0 group-hover:opacity-100"
      >
        <Plus className="h-3.5 w-3.5" /> Add to cart
      </button>
      <div className="mt-4 space-y-1">
        <p className="text-xs font-medium text-slate-400">{p.category}</p>
        <Link href={`/product/${p.id}`} className="line-clamp-1 font-semibold text-slate-900 hover:text-brand-600">{p.name}</Link>
        <div className="flex items-center gap-1 text-xs text-slate-500"><Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" /><b className="text-slate-700">{p.rating}</b> ({p.reviews.toLocaleString('en-IN')})</div>
        <div className="flex items-baseline gap-2">
          <span className="text-lg font-bold text-slate-900">{inr(p.price)}</span>
          <span className="text-sm text-slate-400 line-through">{inr(p.mrp)}</span>
          <span className="text-xs font-bold text-emerald-600">{off}% off</span>
        </div>
      </div>
    </div>
  )
}
