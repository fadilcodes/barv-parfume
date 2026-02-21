import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem, faStar, faPersonHalfDress } from "@fortawesome/free-solid-svg-icons";


export default function highlight () {
    return (
        <>

        <div className="flex items-center justify-center font-bold pt-10 text-2xl">
            <h1>Kenapa BARV?</h1>
        </div>

        <div className="flex flex-wrap p-10 gap-10 items-center justify-center">

            <div className="flex flex-col items-center justify-center border border-amber-300 rounded-lg p-5 w-75 h-50">
                <FontAwesomeIcon icon={faGem} className="text-amber-500 text-5xl pb-3"/>
                <h1 className="font-bold text-[15px] md:text-1xl">
                    Premium Quality
                </h1>
                <p className="text-center text-[12px] p-2">
                    Menggunakan essential oil kualitas tinggi yang 
                    memberikan kesan mewah dan elegan di setiap semprotan.
                </p>
            </div>

            <div className="flex flex-col items-center justify-center border border-amber-300 rounded-lg p-5 w-75 h-50">
                <FontAwesomeIcon icon={faStar} className="text-amber-500 text-5xl pb-3"/>
                <h1 className="font-bold text-[15px] md:text-1xl">
                    Long-Lasting Performance
                </h1>
                <p className="text-center text-[12px] p-2">
                    Dirancang dengan formula khusus untuk ketahanan aroma yang awet 
                    sepanjang hari, menemani setiap aktivitasmu.
                </p>
            </div>

            <div className="flex flex-col items-center justify-center border border-amber-300 rounded-lg p-5 w-75 h-50">
                <FontAwesomeIcon icon={faPersonHalfDress} className="text-amber-500 text-5xl pb-3"/>
                <h1 className="font-bold text-[15px] md:text-1xl">
                    Inclusivity for All
                </h1>
                <p className="text-center text-[12px] p-2">
                    Aroma yang diracik secara universal. Tanpa batas gender, 
                    Barv adalah wujud ekspresi unik dari jati dirimu.
                </p>
            </div>


        </div>
        

        </>
    )
};