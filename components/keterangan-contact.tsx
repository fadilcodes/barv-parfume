import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";



export default function KeteranganContact () {
    return(

        <div className="flex flex-col justify-center gap-2 px-5 w-full md:w-[50%]">
                    <h1 className="justify-center text-center md:text-left text-2xl md:text-3xl"><span className="font-bold">Hubungi kami </span>jika ada pertanyaan atau pemesanan</h1>
                    <div className="hidden md:flex flex-col flex-wrap gap-5 pt-4 ">
                        <Link href="https://www.instagram.com/baruperfume.id/" className="flex gap-2 items-center">
                        <FontAwesomeIcon icon={faInstagram} className="text-3xl"/> @baruperfume.id
                        </Link>

                        <Link href="https://www.instagram.com/baruperfume.id/" className="flex gap-2 items-center">
                        <FontAwesomeIcon icon={faBagShopping} className="text-3xl"/>Baru Perfume
                        </Link>

                        <Link href="https://www.instagram.com/baruperfume.id/" className="flex gap-2 items-center">
                        <FontAwesomeIcon icon={faWhatsapp} className="text-3xl"/>081254678890
                        </Link>
                    </div>
                 </div>
    )

}