import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import {Footer} from "@/components/Footer";
import {Header} from "@/components/Header";
import {Main} from "@/components/Main";
import ProductPage from "@/pages/products";

const inter = Inter({ subsets: ['latin'] })

 const Home = () => {
  return (
      <div className="flex flex-col min-h-screen bg-fuchsia-300">
          <Header />
          <Main>elo</Main>
          <Footer />
    </div>
  )
}

export default Home