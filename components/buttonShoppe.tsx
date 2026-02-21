import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

interface ButtonShoppeProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
}

export default function ButtonShoppe ({ className = "", ...props }: ButtonShoppeProps) {
    return (
        <button 
            className={`px-2 py-2 md:px-8 md:py-4 bg-amber-500 hover:bg-amber-600 rounded-sm text-white font-bold text-[12px] md:text-[15px] cursor-pointer ${className}`}
            {...props}
        >
        <FontAwesomeIcon icon={faBagShopping} className="pr-2"/>
        Beli Sekarang
        </button>
    )
}