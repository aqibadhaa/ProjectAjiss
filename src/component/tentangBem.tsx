import gambar1 from '../component/images/gerakDesa.png';
import Gambar2 from '../component/images/Sosialisasi.png';
import Gambar3 from '../component/images/sosiallisasi3.png';


export function tentangBem() {
    return (
        <section id='Motto' className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-b from-[#a9c9e2c0] via-[#a9c9e1c9] to-[#a9c9d9b9]">
            {/* Decorative background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 w-72 h-72 bg-amber-600 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
            </div>



            <div className="container mx-auto px-4 sm:px-6 lg:px-5 lg:ml-30 lg:mx-8 pt-10 lg:pt-15 pb-22 lg:pb-15 py-10 lg:py-28 relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 lg:-gap-10 items-center">
                    {/* Left Content */}
                    <div className="space-y-8 text-left lg:text-left lg:mx-5">

                        <h1 className="text-5xl sm:text-start sm:text-6xl lg:text-7xl lg:-mx-2 text-[#302512] leading-tight">
                            Dinamis
                            <span className="block text-transparent bg-clip-text bg-linear-to-r from-[#022f4f] to-[#022f4d] py-1">
                                Integratif
                            </span>
                            Harmonis
                        </h1>

                        <p className="text-lg sm:text-xl text-[#302512] max-w-xl mx-1 lg:mx-0 lg:px-1 text-justify" style={{ fontFamily: 'Nunito, sans-serif' }}>
                            BEM FT bukan hanya sekadar organisasi kemahasiswaan biasa. Kami adalah wadah bagi para mahasiswa untuk mengembangkan potensi diri, memperluas jaringan, dan berkontribusi nyata bagi masyarakat. Dengan berbagai program kerja yang inovatif dan berorientasi pada pemberdayaan, BEM FT berkomitmen untuk menciptakan perubahan positif yang berdampak luas. Bergabunglah bersama kami dan jadilah bagian dari perjalanan transformasi ini!
                        </p>



                        {/* Stats */}
                        <div className="grid grid-cols-3 -gap-1 pt:2 lg:pt-4 max-w-xl mx-auto lg:mx-0 lg:ml-5">
                            <div className="text-center lg:text-justify">
                                <div className="text-3xl sm:text-4xl text-[#022f4d]">
                                    32
                                </div>
                                <div className="text-sm text-[#0e5089]">
                                    Staff Keanggotaan
                                </div>

                            </div>
                            <div className="text-center lg:text-left">
                                <div className="text-3xl sm:text-4xl text-[#022f4d]">
                                    10+
                                </div>
                                <div className="text-sm text-[#0e5089] lg:ml-2">
                                    Divisi
                                </div>
                            </div>
                            <div className="text-center lg:text-left lg:mx-auto">
                                <div className="text-3xl sm:text-4xl text-[#022f4d]">
                                    35
                                </div>
                                <div className="text-sm text-[#0e5089]">
                                    Program Kerja
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative mt-21 lg:mt-20 h-125 lg:h-150  lg:mr-18 lg:-ml-11 lg:mx-auto">
                        {/* Gambar 1 - Belakang kiri */}
                        <div className="absolute -top-22 lg:-top-10 left-5 lg:left-20 w-85 lg:w-87.5 rounded-xl bg-white p-5 overflow-hidden shadow-2xl z-30 hover:z-50 hover:scale-105 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] transition-all duration-800 ease-out cursor-pointer border-t-2 border-b-2 relative">
                            {/* Overlay cyan di background putih card */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1a559080] to-transparent rounded-xl -z-10"></div>

                            {/* Gambar tanpa overlay */}
                            <img
                                src={gambar1}
                                alt=""
                                className="w-full h-59 lg:h-112.5 object-cover rounded-2xl border-t-2 border-b-2 relative z-10"
                            />
                        </div>

                        {/* Gambar 2 - Tengah */}
                        <div className="absolute top-22 lg:top-5 left-5 lg:left-45 w-85 lg:w-87.5 bg-white rounded-xl shadow-2xl p-5 z-20 hover:z-50 hover:scale-105 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] transition-all duration-500 ease-out cursor-pointer border-t-2 border-b-2">
                            <img
                                src={Gambar2}
                                alt=""
                                className="w-full h-59 lg:h-112.5 object-cover rounded-2xl border-t-2 border-b-2"
                            />
                        </div>

                        {/* Gambar 3 - Depan kanan */}
                        <div className="absolute top-70 lg:top-20 left-5 lg:left-67 w-85 lg:w-87.5 bg-white p-5 rounded-xl shadow-2xl overflow-hidden border-b-2 border-t-2  z-10 hover:z-50 hover:scale-105 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] transition-all duration-500 ease-out cursor-pointer">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#cae4da] to-transparent rounded-xl -z-10"></div>
                            <img
                                src={Gambar3}
                                alt=""
                                className="w-full h-59 lg:h-112.5 object-cover border-b-2 rounded-2xl border-t-2"
                            />

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default tentangBem;