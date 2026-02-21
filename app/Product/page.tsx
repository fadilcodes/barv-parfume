 import ProductCard from "@/components/card-product";
 import Navbar from "@/components/navbar";
 import Footer from "@/components/footer";




 export default function Product (){
    return (
    
    <>  
    <Navbar/>
    <div>
        <h1 className="flex items-center text-center justify-center pt-10 px-5 font-bold text-[25px] md:text-[40px] gap-2">
            Cari Parfume BARV Favorite Kamu
        </h1>
 
        <ProductCard/>
    </div>
    <Footer/>
    </>
    
    );
 }