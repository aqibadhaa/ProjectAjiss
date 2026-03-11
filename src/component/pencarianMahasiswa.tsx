import { useState } from "react";

interface Mahasiswa {
    id: number;
    npm: string;
    nama_mahasiswa: string;
    kelas: string;
    jurusan: string;
}

const PencarianMahasiswa = () => {
    const [query, setQuery] = useState<string>("");
    const [filter, setFilter] = useState<string>("nama");
    const [hasil, setHasil] = useState<Mahasiswa[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [sudahCari, setSudahCari] = useState<boolean>(false);

    const cariMahasiswa = async () => {
        if (!query.trim()) return;
        setLoading(true);
        setSudahCari(true);
        try {
            const res = await fetch(
                `https://pencarian-mahasiswa-backend-hono-heidisql-production.up.railway.app/mahasiswa?filter=${filter}&query=${encodeURIComponent(query)}`
            );
            const data = await res.json();
            setHasil(data);
        } catch (error) {
            console.error("Error fetching:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="PencarianMahasiswa" className="py-16 px-4 bg-[#e7e5cc]">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-10">
                    Pencarian Mahasiswa
                </h2>

                {/* Search Bar */}
                <div className="flex flex-col md:flex-row gap-3 mb-6">
                    <input
                        type="text"
                        placeholder="Masukkan pencarian..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && cariMahasiswa()}
                        className="flex-1 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
                    />
                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
                    >
                        <option value="nama">Nama</option>
                        <option value="npm">NPM</option>
                        <option value="kelas">Kelas</option>
                    </select>
                    <button
                        onClick={cariMahasiswa}
                        className="bg-[#9d9c8b] text-white px-6 py-3 rounded-xl hover:bg-[#8d8c80] transition "
                    >
                        Cari
                    </button>
                </div>

                {/* Loading */}
                {loading && (
                    <div className="flex justify-center py-10">
                        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
                    </div>
                )}

                {/* Hasil */}
                {!loading && sudahCari && (
                    <>
                        <p className="text-gray-500 mb-4">{hasil.length} mahasiswa ditemukan</p>
                        {hasil.length === 0 ? (
                            <p className="text-center text-gray-400">Tidak ada data ditemukan</p>
                        ) : (
                            <div className="grid grid-cols-1 gap-4">
                                {hasil.map((mhs) => (
                                    <div
                                        key={mhs.id}
                                        className="bg-gray-50 rounded-2xl shadow-sm p-5 hover:shadow-md transition"
                                    >
                                        <p className="text-lg font-semibold">{mhs.nama_mahasiswa}</p>
                                        <p className="text-sm text-gray-500">NPM: {mhs.npm}</p>
                                        <p className="text-sm text-gray-500">Kelas: {mhs.kelas}</p>
                                        <p className="text-sm text-gray-500">Jurusan: {mhs.jurusan}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </>
                )}
            </div>
        </section>
    );
};

export default PencarianMahasiswa;