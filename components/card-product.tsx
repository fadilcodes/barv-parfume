'use client'

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import ButtonShoppe from "./buttonShoppe";

interface Product {
    id: number;
    nama: string;
    price: number;
    oldprice: number;
    image: string;
    link: string;
}

export default function Card() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            console.log("Koneksi Supabase dimulai...");
            setLoading(true);
            
            try {
                const { data, error, status } = await supabase
                    .from('products')
                    .select('*');

                if (error) {
                    // Kalau muncul error '401' atau '403', berarti RLS bermasalah
                    console.error("Error dari Supabase:", error.message, "Status:", status);
                } else {
                    console.log("Data mentah dari Supabase:", data);
                    setProducts(data || []);
                }
            } catch (err) {
                console.error("Gagal konek sama sekali:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) return <div className="text-center py-10">Loading Product...</div>;

    return (
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5 py-10">
            {products.map((product) => ( // Ganti ke singular 'product' biar enak bacanya
                <div key={product.id} className="flex flex-col items-center justify-center border border-gray-200 w-[40%] md:w-[20%] rounded-lg overflow-hidden shadow-sm">
                    <div className="w-full">
                        <img src={product.image} alt={product.nama} className="w-full p-2 rounded-lg object-cover"/>
                    </div>
                    <div className="flex flex-col items-center justify-center pb-3 px-2 w-full">
                        {/* 1. GANTI .name JADI .nama */}
                        <h1 className="text-[18px] md:text-[24px] font-bold py-2 text-amber-500 text-center">
                            {product.nama} 
                        </h1>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-2 pb-3">
                            <h2 className="text-[16px] md:text-[22px] font-semibold">
                                Rp {product.price?.toLocaleString('id-ID')}
                            </h2>
                            <p className="text-[12px] md:text-[16px] text-gray-400 line-through">
                                Rp {product.oldprice?.toLocaleString('id-ID')}
                            </p>
                        </div>
                        <Link className="w-[90%]" href={product.link || "#"} target="_blank">
                            <ButtonShoppe className="w-full text-[10px] md:text-[12px]"/>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}