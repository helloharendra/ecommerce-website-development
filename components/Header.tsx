'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Heart, Menu, Search, ShoppingBag, User, X } from 'lucide-react'
import { useCart } from '@/lib/cart'
import { useContact } from './ContactModal'
import { categories } from '@/lib/data'

export default function Header() {
  const { count, setOpen } = useCart()
  const { openContact } = useContact()
  const [mobile, setMobile] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/85 backdrop-blur-xl">
      <div className="container-x flex h-16 items-center gap-6">
        <button onClick={() => setMobile(!mobile)} className="lg:hidden" aria-label="Menu">{mobile ? <X /> : <Menu />}</button>
        <Link href="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-indigo-600 font-display text-lg font-extrabold text-white shadow-lg shadow-brand-500/30">S</span>
          <span className="font-display text-xl font-extrabold tracking-tight text-slate-900">ShopNest</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 lg:flex">
          {categories.slice(0, 4).map((c) => <Link key={c.name} href={`/#shop`} className="hover:text-brand-600">{c.name}</Link>)}
          <Link href="/#deals" className="font-semibold text-rose-600">Deals</Link>
        </nav>
        <div className="relative ml-auto hidden max-w-xs flex-1 md:block">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input placeholder="Search products…" className="input rounded-full border-transparent bg-slate-100 py-2.5 pl-10 focus:bg-white" />
        </div>
        <div className="ml-auto flex items-center gap-1 md:ml-0">
          <button onClick={() => openContact('Customer Accounts & Login')} className="rounded-full p-2.5 text-slate-600 hover:bg-slate-100" aria-label="Account"><User className="h-5 w-5" /></button>
          <button onClick={() => openContact('Wishlist')} className="hidden rounded-full p-2.5 text-slate-600 hover:bg-slate-100 sm:block" aria-label="Wishlist"><Heart className="h-5 w-5" /></button>
          <button onClick={() => setOpen(true)} className="relative rounded-full p-2.5 text-slate-600 hover:bg-slate-100" aria-label="Cart">
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && <span className="absolute -right-0.5 -top-0.5 grid h-5 min-w-5 place-items-center rounded-full bg-brand-600 px-1 text-[10px] font-bold text-white">{count}</span>}
          </button>
        </div>
      </div>
      {mobile && (
        <nav className="container-x grid gap-1 border-t border-slate-100 py-3 lg:hidden">
          {categories.map((c) => <Link key={c.name} onClick={() => setMobile(false)} href="/#shop" className="rounded-lg px-3 py-2 text-sm font-medium hover:bg-slate-50">{c.emoji} {c.name}</Link>)}
        </nav>
      )}
    </header>
  )
}
