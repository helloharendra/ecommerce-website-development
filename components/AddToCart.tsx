'use client'

import { useState } from 'react'
import { Heart, Minus, Plus, Zap } from 'lucide-react'
import { useCart } from '@/lib/cart'
import { useContact } from './ContactModal'
import type { Product } from '@/lib/data'

export default function AddToCart({ p }: { p: Product }) {
  const { add } = useCart()
  const { openContact } = useContact()
  const [qty, setQty] = useState(1)
  const [pin, setPin] = useState('')

  return (
    <div className="mt-8 space-y-5">
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center rounded-full ring-1 ring-slate-200">
          <button onClick={() => setQty(Math.max(1, qty - 1))} className="p-3 text-slate-600"><Minus className="h-4 w-4" /></button>
          <span className="w-8 text-center font-semibold">{qty}</span>
          <button onClick={() => setQty(qty + 1)} className="p-3 text-slate-600"><Plus className="h-4 w-4" /></button>
        </div>
        <button onClick={() => add({ id: p.id, name: p.name, price: p.price, image: p.image }, qty)} className="btn-primary flex-1 py-3.5">Add to cart</button>
        <button onClick={() => openContact('Buy Now & One-click Checkout')} className="btn-dark flex-1 py-3.5"><Zap className="h-4 w-4" /> Buy now</button>
        <button onClick={() => openContact('Wishlist')} aria-label="Wishlist" className="grid h-12 w-12 place-items-center rounded-full ring-1 ring-slate-200 hover:text-rose-500"><Heart className="h-5 w-5" /></button>
      </div>
      <div className="flex gap-2">
        <input value={pin} onChange={(e) => setPin(e.target.value.replace(/\D/g, '').slice(0, 6))} placeholder="Enter pincode to check delivery" className="input rounded-full" />
        <button className="btn-ghost">Check</button>
      </div>
      {pin.length === 6 && <p className="text-sm text-emerald-600">✓ Delivery to {pin} by tomorrow, 9 PM</p>}
    </div>
  )
}
