import Image from "next/image";
import ButtonShoppe from "./buttonShoppe";
import Button from "./button";
import Link from "next/link";

export default function Hero() {
  return (

    <>
    <div className="flex py-10 md:py-2 items-center justify-center bg-linear-to-r from-amber-50 to-amber-200 ">

      <div className="flex px-10 md:w-[60%] justify-center">
          <div>
            <h1 className="text-3xl md:text-5xl leading-tight">
                Siap Menemani Hari Mu dengan <span className="text-orange-300">Wangi Segar</span> dan <span className="text-orange-300">Tahan Lama</span>
            </h1>

            <p className="py-5 text-[12px] md:text-[15px]">Definisikan ulang gaya parfummu dengan Barv. 
              Koleksi unisex kami merangkum setiap spektrum emosi, 
              dari keberanian hingga ketenangan. Sebuah aroma, beragam cerita, 
              untuk jiwa yang autentik.</p>

            <div className="flex gap-3 md:gap-5 pt-3">
             <Link target="blank" href="https://shopee.co.id/barv_shopping">
              <ButtonShoppe/>
              </Link>
              <Link href="/Product">
                <Button />
            </Link>
            </div>

          </div>
      </div>
      
      <div className="md:w-[40%] hidden md:flex">
      <Image 
        src="/hero-image.png"
        alt="Banner"
        width={500}
        height={500}
      />
      </div>
  
    </div>
    </>
  );

}