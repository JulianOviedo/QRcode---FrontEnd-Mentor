import { Outfit } from '@next/font/google'
import '@/styles/globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  weight: '400'
})

export default function App({ Component, pageProps }) {
  return (
    <main className={outfit.className}>
      <Component {...pageProps} />
    </main>
  )

}
