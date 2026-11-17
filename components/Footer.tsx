import Link from 'next/link'
import { contact } from '@/lib/contact'

const cols = {
  Shop: ['New arrivals', 'Bestsellers', 'Deals of the day', 'Gift cards'],
  Help: ['Track order', 'Returns & refunds', 'Shipping', 'FAQs'],
  Company: ['About us', 'Careers', 'Sell with us', 'Blog'],
}

export default function Footer() {
  return (
    <footer className="mt-24 bg-slate-950 text-slate-400">
      <div className="container-x grid gap-10 py-16 md:grid-cols-5">
        <div className="md:col-span-2">
          <p className="font-display text-2xl font-extrabold text-white">ShopNest</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed">A fast, beautiful storefront with catalogue, cart, payments, order tracking and a powerful admin panel.</p>
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm font-semibold text-white">Want this store for your brand?</p>
            <p className="mt-1 text-xs">Built by Naya Prayog Technologies · {contact.email} · {contact.phone}</p>
            <a href={contact.website} target="_blank" rel="noreferrer" className="btn-primary mt-4 py-2 text-xs">Visit nayaprayog.com</a>
          </div>
        </div>
        {Object.entries(cols).map(([title, links]) => (
          <div key={title}>
            <p className="text-sm font-semibold text-white">{title}</p>
            <ul className="mt-4 space-y-2.5 text-sm">{links.map((l) => <li key={l}><Link href="/" className="hover:text-white">{l}</Link></li>)}</ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs">© {new Date().getFullYear()} ShopNest · UI demo by Naya Prayog Technologies</div>
    </footer>
  )
}
