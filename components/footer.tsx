import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";


export default function Footer () {
    return (
    <>

        <div className="w-full bg-white border-t border-gray-300 mt-10" >
            <div className="flex flex-col items-center justify-center py-5">
            <div>
            <h1 className="text-1xl font-bold text-center">BARV Parfume</h1>
            </div>

            <div className="flex flex-wrap gap-5 pt-4">
                <Link target="blank" href="https://www.instagram.com/baruperfume.id/">
                 <FontAwesomeIcon icon={faInstagram} className="text-orange-400 text-3xl"/>
                 </Link>

                <Link target="blank" href="https://shopee.co.id/barv_shopping?categoryId=100630&entryPoint=ShopByPDP&itemId=41328029064&upstream=search">
                 <FontAwesomeIcon icon={faBagShopping} className="text-orange-400 text-3xl"/> 
                </Link>

                 <Link target="blank" href="https://wa.me/6281293293759">
                 <FontAwesomeIcon icon={faWhatsapp} className="text-orange-400 text-3xl"/>
                 </Link>
            </div>


            <p className="text-[10px] text-center px-5 pt-3">
                Definisikan ulang gaya parfummu dengan Barv. 
              Koleksi unisex kami merangkum setiap spektrum emosi, 
              dari keberanian hingga ketenangan. Sebuah aroma, beragam cerita, 
              untuk jiwa yang autentik.
            </p>

            </div>

            <div className="flex w-full bg-orange-300 text-gray-700 items-center justify-center text-[10px] py-3 italic">
                Copyright© 2026 | all Right Reserved | BARV Parfume
            </div>

        </div>
        </>

    );
}