import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoImg from './images/logoo.png';

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <nav
            style={{ fontFamily: 'Saira, sans-serif' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white shadow-md border-b-2 border-gray-600/60'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-8xl mx-auto px-6 lg:px-13 md:py-2.5 py-4 lg:py-2">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-4">
                        <div className={`transition-colors duration-300 ${isScrolled ? 'text-blue-600' : 'text-white'}`}>
                            <img
                                src={logoImg}
                                alt="Logo BEM"
                                className="w-8 h-8 md:w-12 md:h-12 object-contain"
                            />
                        </div>
                        <span
                            className={`transition-colors duration-300 ${isScrolled ? 'text-gray-900' : 'text-white'}`}
                        >
                            BEM Fakultas Teknik
                        </span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-10">
                        {['Beranda', 'Tentang', 'Visi & Misi', 'Program', 'Kontak'].map((item, index) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(['hero', 'about', 'vision', 'programs', 'contact'][index])}
                                className={`transition-colors duration-300 hover:text-blue-600 ${isScrolled ? 'text-gray-700' : 'text-white'
                                    }`}
                            >
                                {item}
                            </button>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className={`md:hidden transition-colors duration-300 ${isScrolled ? 'text-gray-900' : 'text-white'
                            }`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden mt-4 pb-4">
                        <div className="flex flex-col gap-4">
                            {['Beranda', 'Tentang', 'Visi & Misi', 'Program', 'Kontak'].map((item, index) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(['hero', 'about', 'vision', 'programs', 'contact'][index])}
                                    className={`text-left transition-colors duration-300 hover:text-blue-600 ${isScrolled ? 'text-gray-700' : 'text-white'
                                        }`}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}