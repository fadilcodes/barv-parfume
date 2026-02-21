export default function Footer () {
return (
<form className="flex flex-col md:px-5 py-10 gap-5 w-full md:w-[50%]">
                    <div className="flex flex-col">
                        <label className="pb-1 text-[15px] text-gray-500"> Nama Lengkap </label>
                        <input type="text" placeholder="Masukan Nama"
                        className="w-full rounded py-2 px-3 bg-gray-100 text-[12px] placeholder-gray-300"/>
                    </div>

                    <div className="flex flex-col">
                        <label className="pb-1 text-[15px] text-gray-500"> Email </label>
                        <input type="text" placeholder="Masukan Alamat Email"
                        className="w-full rounded py-2 px-3 bg-gray-100 text-[12px] placeholder-gray-300"/>
                    </div>

                    <div className="flex flex-col">
                        <label className="pb-1 text-[15px] text-gray-500"> Pesan </label>
                        <textarea placeholder="Isi Pesan" rows={5}
                        className="w-full rounded py-3 px-3 bg-gray-100 text-[12px] placeholder-gray-300"/>
                    </div>

                    <button className="bg-orange-400 py-3 rounded text-white font-bold hover:bg-orange-500 cursor-pointer transition-transform duration-400 ease-in-out">Kirim Pesan</button>
                </form>
)}