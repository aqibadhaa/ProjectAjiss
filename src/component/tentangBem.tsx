import gambar1 from '../component/images/gerakDesa.png';
import Gambar2 from '../component/images/Sosialisasi.png';
import Gambar3 from '../component/images/sosiallisasi3.png';


export function tentangBem() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-b from-[#83695340] via-[#83695333] to-[#83695347]">
            {/* Decorative background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 w-72 h-72 bg-amber-600 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
            </div>



            <div className="container mx-auto px-4 sm:px-6 lg:px-5 lg:ml-30 lg:mx-8 py-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 lg:-gap-10 items-center">
                    {/* Left Content */}
                    <div className="space-y-8 text-left lg:text-left lg:mx-5">

                        <h1 className="text-5xl sm:text-start sm:text-6xl lg:text-7xl lg:-mx-2 text-amber-950 leading-tight">
                            Dinamis
                            <span className="block text-transparent bg-clip-text bg-linear-to-r from-[#8e5a45] to-[#8b623e] py-1">
                                Integratif
                            </span>
                            Harmonis
                        </h1>

                        <p className="text-lg sm:text-xl text-[#543a13] max-w-xl mx-1 lg:mx-0 lg:px-1 text-justify" style={{ fontFamily: 'Nunito, sans-serif' }}>
                            BEM FT bukan hanya sekadar organisasi kemahasiswaan biasa. Kami adalah wadah bagi para mahasiswa untuk mengembangkan potensi diri, memperluas jaringan, dan berkontribusi nyata bagi masyarakat. Dengan berbagai program kerja yang inovatif dan berorientasi pada pemberdayaan, BEM FT berkomitmen untuk menciptakan perubahan positif yang berdampak luas. Bergabunglah bersama kami dan jadilah bagian dari perjalanan transformasi ini!
                        </p>



                        {/* Stats */}
                        <div className="grid grid-cols-3 -gap-1 pt-4 max-w-xl mx-auto lg:mx-0 lg:ml-5">
                            <div className="text-center lg:text-justify">
                                <div className="text-3xl sm:text-4xl text-amber-800">
                                    32
                                </div>
                                <div className="text-sm text-amber-700">
                                    Staff
                                </div>
                                <div className="text-xs text-amber-700">
                                    Keanggotaan
                                </div>
                            </div>
                            <div className="text-center lg:text-left">
                                <div className="text-3xl sm:text-4xl text-amber-800">
                                    10+
                                </div>
                                <div className="text-sm text-amber-700 lg:ml-2">
                                    Divisi
                                </div>
                            </div>
                            <div className="text-center lg:text-left lg:mx-auto">
                                <div className="text-3xl sm:text-4xl text-amber-900">
                                    35
                                </div>
                                <div className="text-sm text-amber-700">
                                    Program Kerja
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative mt-21 lg:mt-5 h-125 lg:h-150  lg:mr-18 lg:-ml-11 lg:mx-auto">
                        {/* Gambar 1 - Belakang kiri */}
                        <div className="absolute -top-10 left-20 w-70 lg:w-87.5 rounded-xl bg-white p-5 overflow-hidden shadow-2xl z-30 hover:z-50 hover:scale-105 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] transition-all duration-800 ease-out cursor-pointer border-t-2 border-b-2">
                            <img
                                src={gambar1}
                                alt=""
                                className="w-full h-87.5 lg:h-112.5 object-cover rounded-2xl border-t-2 border-b-2"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-amber-900/30 to-transparent"></div>
                        </div>

                        {/* Gambar 2 - Tengah */}
                        <div className="absolute top-5 left-30 lg:left-45 w-70 lg:w-87.5 bg-white rounded-xl shadow-2xl p-5 z-20 hover:z-50 hover:scale-105 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] transition-all duration-500 ease-out cursor-pointer border-t-2 border-b-2">
                            <img
                                src={Gambar2}
                                alt=""
                                className="w-full h-75 lg:h-112.5 object-cover rounded-2xl border-t-2 border-b-2"
                            />
                        </div>

                        {/* Gambar 3 - Depan kanan */}
                        <div className="absolute top-20 left-40 lg:left-65 w-70 lg:w-87.5 bg-white p-5 rounded-xl shadow-2xl overflow-hidden border-b-2 border-t-2  z-10 hover:z-50 hover:scale-105 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] transition-all duration-500 ease-out cursor-pointer">
                            <img
                                src={Gambar3}
                                alt=""
                                className="w-full h-87.5 lg:h-112.5 object-cover border-b-2 rounded-2xl border-t-2"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-emerald-900/30 to-transparent"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default tentangBem;