import { Inter } from 'next/font/google'
import {Footer} from "@/components/Footer";
import {Header} from "@/components/Header";
import {Main} from "@/components/Main";
import {Rating} from "@/components/Rating";

 const Home = () => {
  return (
      <div className="flex flex-col min-h-screen bg-fuchsia-300">
          <Header />
          <Main>elo</Main>
          <Rating />
          <Footer />
    </div>
  )
}

export default Home