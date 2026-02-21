"use client";

import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative flex justify-between border-b border-gray-300 items-center px-10 py-5">
        <div>
            <Image 
              src="/logo-barv.png" 
              alt="Logo BARV" 
              width={100} 
              height={50} 
            />
        </div>

        {/* Menu Mobile */}
        <div className={`absolute left-0 top-full z-50 flex-col gap-5 bg-gray-100 w-full items-center p-5 md:hidden ${isOpen ? "flex" : "hidden"}`}>
            <Link href="/">Home</Link>
            <hr className="border w-[80%] border-gray-200" />
            <Link href="/Product">Product</Link>
             <hr className="border w-[80%] border-gray-200" />
            <Link href="/Contact">Contact Us</Link>
        </div>

        {/* Humbuger Menu */}
        <div className="md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            <FontAwesomeIcon icon={faBars} />
        </div>

        {/* Menu Desktop */}
        <div className="hidden md:flex gap-6">
            <Link href="/">Home</Link>
            <Link href="/Product">Product</Link>
            <Link href="/Contact">Contact Us</Link>
        </div>
    </nav>

  );
}
