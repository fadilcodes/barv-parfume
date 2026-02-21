import Image from "next/image";
import Navbar from '@/components/navbar'; 
import Hero from '@/components/hero';
import Highlight from '@/components/highlight';
import Keterangan from '@/components/keterangan';
import Footer from '@/components/footer';



export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Highlight/>
    <Keterangan/>
    <Footer/>
    </>

  );
}
