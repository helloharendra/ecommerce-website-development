'use client'

import { useState } from 'react'
import { categories, products } from '@/lib/data'
import ProductCard from './ProductCard'

const sorts = { Featured: () => 0, 'Price: low to high': (a: { price: number }, b: { price: number }) => a.price - b.price, 'Top rated': (a: { rating: number }, b: { rating: number }) => b.rating - a.rating }

export default function ProductGrid() {
  const [cat, setCat] = useState('All')
  const [sort, setSort] = useState<keyof typeof sorts>('Featured')
  const list = products.filter((p) => cat === 'All' || p.category === cat).sort(sorts[sort] as never)

  return (
    <>
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4">
          {['All', ...categories.map((c) => c.name)].map((c) => (
            <button key={c} onClick={() => setCat(c)} className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition ${cat === c ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>{c}</button>
          ))}
        </div>
        <select value={sort} onChange={(e) => setSort(e.target.value as keyof typeof sorts)} className="input w-auto rounded-full py-2">
          {Object.keys(sorts).map((s) => <option key={s}>{s}</option>)}
        </select>
      </div>
      <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
        {list.map((p) => <ProductCard key={p.id} p={p} />)}
      </div>
    </>
  )
}
