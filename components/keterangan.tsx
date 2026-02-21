import Image from "next/image";
import Link from "next/link";
import Button from "./button";



export default function Keterangan () {
    return (
    <div className="flex flex-col items-center md:gap-10 md:flex-row px-10 py-5 md:w-[80%] md:mx-auto">
        <div className="w-[60%] md:w-full">
            <Image
            src="/content.png"
            alt="Keterangan"
            width={500}
            height={500}
            className="rounded-lg"
            />
        </div>

        <div className="flex flex-col items-center md:items-start justify-center ">
            <h1 className="flex font-bold text-2xl text-center pt-5">Lebih dari sekadar aroma</h1>
            <p className="text-[12px] text-center md:text-left pt-3 pb-5">Barv adalah bentuk ekspresi diri yang inklusif. 
                Diciptakan untuk siapa saja yang berani tampil beda. 
                Temukan rasa percaya diri dalam Assure, atau dekap 
                kehangatan dalam Haven. Karena setiap semprotan 
                Barv adalah bab baru dalam ceritamu.</p>
            <Link href="/Product">
                <Button />
            </Link>
        </div>
    </div>
    )
};