import { img } from './utils'

// Sample catalogue for the UI demo. The complete project loads products from the admin panel / database.
export type Product = {
  id: string
  name: string
  category: string
  price: number
  mrp: number
  rating: number
  reviews: number
  image: string
  badge?: string
  description: string
}

export const categories = [
  { name: 'Electronics', emoji: '🎧', tint: 'from-violet-100 to-indigo-50' },
  { name: 'Fashion', emoji: '🕶️', tint: 'from-rose-100 to-orange-50' },
  { name: 'Home & Living', emoji: '🪴', tint: 'from-emerald-100 to-teal-50' },
  { name: 'Beauty', emoji: '💄', tint: 'from-pink-100 to-fuchsia-50' },
  { name: 'Accessories', emoji: '⌚', tint: 'from-amber-100 to-yellow-50' },
  { name: 'Gadgets', emoji: '📷', tint: 'from-sky-100 to-cyan-50' },
]

export const products: Product[] = [
  { id: 'aurora-headphones', name: 'Aurora Wireless Headphones', category: 'Electronics', price: 4999, mrp: 7999, rating: 4.7, reviews: 1284, image: img('1505740420928-5e560c06d30e'), badge: 'Bestseller', description: 'Hybrid ANC, 40-hour battery and studio-tuned 40mm drivers with a featherlight memory-foam fit.' },
  { id: 'classic-chrono-watch', name: 'Classic Chrono Watch', category: 'Accessories', price: 3499, mrp: 5499, rating: 4.6, reviews: 642, image: img('1523275335684-37898b6baf30'), description: 'Minimal dial, sapphire-coated glass and a genuine leather strap. Water resistant to 50m.' },
  { id: 'retro-instant-camera', name: 'Retro Instant Camera', category: 'Gadgets', price: 6299, mrp: 7499, rating: 4.8, reviews: 418, image: img('1526170375885-4d8ecf77b99f'), badge: 'New', description: 'Point, shoot and print. Auto-exposure, selfie mirror and a built-in flash for perfect memories.' },
  { id: 'polar-sunglasses', name: 'Polar UV400 Sunglasses', category: 'Fashion', price: 1299, mrp: 2499, rating: 4.5, reviews: 2210, image: img('1572635196237-14b3f281503f'), badge: '48% off', description: 'Polarised lenses with full UV400 protection in a lightweight acetate frame.' },
  { id: 'noir-eau-de-parfum', name: 'Noir Eau de Parfum', category: 'Beauty', price: 2199, mrp: 2999, rating: 4.6, reviews: 873, image: img('1541643600914-78b084683601'), description: 'Warm notes of oud, amber and vanilla. Long-lasting 100ml bottle.' },
  { id: 'urban-backpack', name: 'Urban Commuter Backpack', category: 'Fashion', price: 2499, mrp: 3999, rating: 4.7, reviews: 1532, image: img('1553062407-98eeb64c6a62'), description: 'Water-repellent, padded 16" laptop sleeve and a hidden anti-theft pocket.' },
  { id: 'nova-smartphone', name: 'Nova 5G Smartphone', category: 'Electronics', price: 24999, mrp: 29999, rating: 4.4, reviews: 3104, image: img('1511707171634-5f897ff02aa9'), description: '6.7" AMOLED, 108MP camera and 5000mAh battery with 67W fast charging.' },
  { id: 'pulse-speaker', name: 'Pulse Bluetooth Speaker', category: 'Electronics', price: 3299, mrp: 4999, rating: 4.6, reviews: 958, image: img('1608043152269-423dbba4e7e1'), badge: 'Deal', description: '360° sound, IPX7 waterproof and 24 hours of playtime.' },
  { id: 'succulent-planter', name: 'Succulent in Ceramic Planter', category: 'Home & Living', price: 899, mrp: 1299, rating: 4.8, reviews: 512, image: img('1485955900006-10f4d324d411'), description: 'A no-fuss succulent in a hand-glazed mint ceramic pot.' },
  { id: 'arc-desk-lamp', name: 'Arc LED Desk Lamp', category: 'Home & Living', price: 1799, mrp: 2599, rating: 4.5, reviews: 344, image: img('1507473885765-e6ed057f782c'), description: 'Dimmable warm-to-cool light with a sleek metal arc arm.' },
  { id: 'ultrabook-14', name: 'Ultrabook 14 Pro', category: 'Gadgets', price: 64999, mrp: 74999, rating: 4.7, reviews: 1206, image: img('1496181133206-80ce9b88a853'), description: '14" 2.8K display, 16GB RAM, 1TB SSD and an all-day battery in a 1.2kg body.' },
  { id: 'stoneware-mug', name: 'Stoneware Coffee Mug', category: 'Home & Living', price: 999, mrp: 1499, rating: 4.6, reviews: 689, image: img('1514228742587-6b1558fcca3d'), description: 'A microwave-safe, handcrafted stoneware mug with a matte glaze.' },
]

export const getProduct = (id: string) => products.find((p) => p.id === id)
