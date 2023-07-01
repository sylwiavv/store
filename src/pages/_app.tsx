import '../styles/global.css'
import type { AppProps } from 'next/app'
import SEO from "../../next-seo.config"
import {DefaultSeo} from "next-seo"
import {Layout} from "@/components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  // tu dodamy layout
   return <Layout>
     <DefaultSeo {...SEO} />
     <p className="text-3xl font-bold underline text-orange-600"></p><Component {...pageProps} />
   </Layout>
}