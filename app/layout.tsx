import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { ContactProvider, DemoBar } from '@/components/ContactModal'
import { CartProvider } from '@/lib/cart'
import CartDrawer from '@/components/CartDrawer'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const sans = Inter({ subsets: ['latin'], variable: '--font-sans' })
const display = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-display', weight: ['600', '700', '800'] })

export const metadata: Metadata = {
  title: 'ShopNest – E-commerce Website Demo | Naya Prayog Technologies',
  description: 'Premium e-commerce website UI demo with catalogue, product pages, cart and checkout. Contact Naya Prayog Technologies for the complete project.',
}

const APP = 'ShopNest'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body className="font-sans">
        <ContactProvider appName={APP}>
          <CartProvider>
            <DemoBar appName={APP} />
            <Header />
            <main>{children}</main>
            <Footer />
            <CartDrawer />
          </CartProvider>
        </ContactProvider>
      </body>
    </html>
  )
}
