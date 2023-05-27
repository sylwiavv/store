import '../styles/global.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <div><p className="text-3xl font-bold underline text-orange-600"></p><Component {...pageProps} /></div>
}