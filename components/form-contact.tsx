'use client'

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Form () {

const form = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState('');
    const [statusType, setStatusType] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('Mengirim Pesan...');
        setStatusType('loading');

        if (!form.current) return;

        emailjs.sendForm(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
            form.current,
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        )
        .then(() => {
            setStatus('Pesan terkirim!');
            setStatusType('success');
            form.current?.reset();
        })
        .catch((error) => {
            console.error(error);
            setStatus('Pesan Gagal Terkirim');
            setStatusType('error');
        });
    };

return (
<form ref={form} onSubmit={sendEmail} className="flex flex-col md:px-5 py-10 gap-5 w-full md:w-[50%]">
                    <div className="flex flex-col">
                        <label className="pb-1 text-[15px] text-gray-500"> Nama Lengkap </label>
                        <input type="text" name="name" placeholder="Masukan Nama"
                        className="w-full rounded py-2 px-3 bg-gray-100 text-[12px] placeholder-gray-300"/>
                    </div>

                    <div className="flex flex-col">
                        <label className="pb-1 text-[15px] text-gray-500"> Email </label>
                        <input type="text" name="email" placeholder="Masukan Alamat Email"
                        className="w-full rounded py-2 px-3 bg-gray-100 text-[12px] placeholder-gray-300"/>
                    </div>

                    <div className="flex flex-col">
                        <label className="pb-1 text-[15px] text-gray-500"> Pesan </label>
                        <textarea placeholder="Isi Pesan" name="message" rows={5}
                        className="w-full rounded py-3 px-3 bg-gray-100 text-[12px] placeholder-gray-300"/>
                    </div>

                    <button type="submit" className="bg-orange-400 py-3 rounded text-white font-bold hover:bg-orange-500 cursor-pointer transition-transform duration-400 ease-in-out">Kirim Pesan</button>
                    {status && (
                        <div className={`text-center mt-2 py-3 rounded-md text-sm font-bold transition-all duration-300 ${
                            statusType === 'loading' ? 'bg-blue-100 text-blue-600 animate-pulse' : 
                            statusType === 'success' ? 'bg-green-100 text-green-600' : 
                            statusType === 'error' ? 'bg-red-100 text-red-600' : ''
                        }`}>
                            {status}
                        </div>
                    )}
                </form>
)}