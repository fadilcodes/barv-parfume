"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Form from "@/components/form-contact";
import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import KeteranganContact from "@/components/keterangan-contact";




export default function Contact () {


    return (
        <>
        <div className="flex flex-col min-h-screen">
        <Navbar/>
            <div className="py-5 w-[80%] flex flex-wrap items-center justify-center mx-auto my-auto">
                <KeteranganContact/>
                <Form/>
            </div>
        <Footer/>
        </div>
        </>

    );
}