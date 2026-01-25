import { useEffect, useState } from "react";
import { supabase } from '../SUPABASEsetup'

// Define interface untuk tipe data
interface InformasiData {
    id: number;
    judul: string;
    konten: string;
    kategori: string;
    tanggal_posting: string;
    status: string;
    created_at: string;
    terbaru: string;
}

const InformasiSection = () => {
    const [informasi, setInformasi] = useState<InformasiData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    console.log('Component rendered!'); // Consoel log untuk debug apakah render atau tidak
    console.log('Loading:', loading); // 
    console.log('Informasi data:', informasi); // 

    // Fetch data dari Supabase
    useEffect(() => {
        console.log('useEffect triggered!'); // TAMBAHIN INI
        fetchInformasi();
    }, []);

    const fetchInformasi = async () => {
        try {
            setLoading(true);
            const { data, error } = await supabase
                .from('Informasi')
                .select('*')
                //.eq('status', 'published')
                .order('tanggal_posting', { ascending: false });

            if (error) throw error;

            setInformasi(data || []);
        } catch (error) {
            console.error('Error fetching informasi:', error);
        } finally {
            setLoading(false);
        }
    };

    // Format tanggal biar lebih enak dibaca
    const formatTanggal = (tanggal: string): string => {
        const date = new Date(tanggal);
        return date.toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    return (
        <section id="Informasi" className="py-16 px-4 bg-[#e7e5cc] rounded-tr-[5rem] xl:rounded-tr-[7rem] 2xl:rounded-tr-[7rem] rounded-tl-[5rem] xl:rounded-tl-[7rem] 2xl:rounded-tl-[7rem] -mt-20">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-6xl xl:text-7xl 2xl:text-7xl font-bold text-center mt-10 xl:mt-16 2xl:mt-16 mb-16 xl:mb-30 2xl:mb-30 " style={{ fontFamily: "'Vollkorn', serif" }}>
                    Informasi Terkini
                </h2>

                {informasi.length === 0 ? (
                    <p className="text-center text-gray-500">
                        Belum ada informasi tersedia
                    </p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">
                        {informasi.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white rounded-3xl shadow-md p-6 hover:shadow-lg transition"
                            >
                                {/* Kategori Badge */}
                                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full mb-3">
                                    {item.kategori}
                                </span>

                                {/* Judul */}
                                <h3 className="text-2xl font-semibold mb-2">
                                    {item.judul}
                                </h3>

                                {/* Konten (dipotong kalau terlalu panjang) */}
                                <p className="text-gray-600 mb-4 line-clamp-3">
                                    {item.konten}
                                </p>

                                {/* Tanggal */}
                                <p className="text-sm text-gray-400">
                                    {formatTanggal(item.tanggal_posting)}
                                    <span className="inline-block bg-transparent text-red-800 text-xs px-4 py-1 rounded-full mb-3 underline uppercase">
                                        {item.terbaru}
                                    </span>
                                </p>


                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default InformasiSection;