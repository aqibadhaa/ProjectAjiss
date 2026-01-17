import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import Ketua from '../component/images/Ketuafix.png';
import Wakil from '../component/images/wakilKetua.png';
import Sekre from '../component/images/SekrejosJIs.png';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function PengurusInti() {
    const textRef = useRef(null);
    const containerRef = useRef(null);
    const textRef2 = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            // Animasi untuk tampilan MOBILE (max-width: 768px)
            mm.add("(max-width: 768px)", () => {
                gsap.fromTo(
                    textRef.current,
                    {
                        xPercent: 12
                    },
                    {
                        xPercent: 18,
                        scrollTrigger: {
                            trigger: textRef.current,
                            start: 'top top+=900px',  // early start animation
                            end: 'bottom top',
                            scrub: 3,
                            pin: false,
                            markers: false
                        }
                    }
                );

                gsap.fromTo(
                    textRef2.current,
                    {
                        xPercent: -178  // mulai dari kanan dikit
                    },
                    {
                        xPercent: -187,  // gerak ke kiri dikit
                        scrollTrigger: {
                            trigger: textRef2.current,
                            start: 'top top+=900px',
                            end: 'bottom top',
                            scrub: 3,
                            pin: false,
                            markers: false
                        }
                    }
                );
            });

            // Animasi untuk TABLET (769px - 1024px)
            mm.add("(min-width: 769px) and (max-width: 1024px)", () => {
                gsap.fromTo(
                    textRef.current,
                    {
                        xPercent: 90
                    },
                    {
                        xPercent: 100,
                        scrollTrigger: {
                            trigger: textRef.current,
                            start: 'top top-=400px',
                            end: 'bottom top',
                            scrub: 1,
                            pin: false,
                            markers: false
                        }
                    }
                );

                gsap.fromTo(
                    textRef2.current,
                    {
                        xPercent: -150
                    },
                    {
                        xPercent: -130,
                        scrollTrigger: {
                            trigger: textRef2.current,
                            start: 'top top-=400px',
                            end: 'bottom top',
                            scrub: 1,
                            pin: false,
                            markers: false
                        }
                    }
                );
            });

            // Animasi untuk DESKTOP (min-width: 1025px)
            mm.add("(min-width: 1025px)", () => {
                gsap.fromTo(
                    textRef.current,
                    {
                        xPercent: 12
                    },
                    {
                        xPercent: 22,
                        scrollTrigger: {
                            trigger: textRef.current,
                            start: 'top top+=800px',
                            end: 'bottom top',
                            scrub: 1,
                            pin: false,
                            markers: false
                        }
                    }
                );

                gsap.fromTo(
                    textRef2.current,
                    {
                        xPercent: -169
                    },
                    {
                        xPercent: -184.5,
                        scrollTrigger: {
                            trigger: textRef2.current,
                            start: 'top top+=800px',
                            end: 'bottom top',
                            scrub: 1,
                            pin: false,
                            markers: false
                        }
                    }
                );
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <div id="smooth-wrapper">
            <div id="smooth-content">
                <div
                    ref={containerRef}
                    className="w-full bg-[#fbfbe8] flex items-start justify-center overflow-hidden pt-15 lg:pt-18 pb-0"
                >

                    <h1
                        ref={textRef}
                        className="text-[2.3rem] lg:text-8xl font-bold text-gray-800"
                        style={{ fontFamily: "'Vollkorn', serif" }}
                    >
                        PENGURUS INTI
                    </h1>

                    <h1
                        ref={textRef2}
                        className="text-[2.2rem] lg:text-[5.5rem] font-bold text-gray-800 mt-10 lg:mt-18"
                        style={{ fontFamily: "'Vollkorn', serif" }}
                    >
                        BEM FT
                    </h1>
                </div>

                <div className='w-full bg-[#fbfbe8] flex items-start justify-center overflow-hidden pt-0'>
                    <div className='max-w-4xl px-10 lg:px-22 py-5 text-justify'>
                        <p className='text-black text-xl' style={{ fontFamily: 'Nunito, sans-serif' }}>Pengurus inti BEM merupakan struktur utama yang menjadi pusat koordinasi dan pengambilan keputusan dalam organisasi kemahasiswaan. Mereka berperan mengarahkan jalannya roda organisasi, menyelaraskan seluruh bidang dengan visi dan misi BEM, serta memastikan setiap program kerja berjalan secara efektif dan bertanggung jawab. Pengurus inti juga menjadi representasi kepemimpinan mahasiswa dalam menjembatani aspirasi mahasiswa dengan pihak internal maupun eksternal kampus.

                        </p>
                    </div>
                </div>

                <div className='w-full bg-[#e2e2b7] flex items-start justify-center overflow-hidden -pt-100 -pb-1 relative border-b-4 border-white'>
                    <div className='absolute inset-0 flex flex-col'>
                        <div className='h-1/2 bg-[#fbfbe8] flex items-end justify-start relative z-0 pl-1 lg:pl-10'>
                            <h1
                                className='text-5xl md:text-7xl lg:text-8xl xl:text-[9rem] 2xl:text-[11rem] font-bold text-[#e2e2b1] leading-none mb-2 md:-mb-5 lg:-mb-7 pl-3 md:pl-12 lg:pl-5 tracking-[0.2rem] lg:tracking-[0.5rem]'
                                style={{
                                    fontFamily: "'Nova Square', sans-serif",

                                }}
                            >
                                KETUA
                            </h1>

                            <h1
                                className='text-5xl md:text-7xl lg:text-8xl xl:text-[9rem] 2xl:text-[11rem]
                                 font-bold text-[#e2e2b7] lg:text-[#fbfbe8] leading-none mb-2 lg:-mb-64 pl-12 lg:pl-15 xl:pl-17 lg:ml-46 [word-spacing:-1rem] lg:[word-spacing:-3rem]'
                                style={{
                                    fontFamily: "'Nova Square', sans-serif",
                                    letterSpacing: '0.1rem',

                                }}
                            >
                                BEM FT
                            </h1>
                        </div>
                        <div className='h-1/2 bg-[#e2e2b7]'></div>
                    </div>
                    <div className='max-w-4xl px-22 py-5 text-justify relative z-10 mt-2 lg:-mt-10 flex items-end'>

                        <img src={Ketua} alt="Foto Ketua" className='w-5/5 lg:w-2/3 mx-auto mb-1 lg:-mb-5 pr-1 lg:pr-0 lg:ml-25 scale-110 lg:scale-100' />

                        <div className='absolute bottom-7 left-1 lg:-left-11 text-right'>
                            <h2 className='text-[0.8rem] lg:text-[1.9em] font-bold text-gray-800' style={{ fontFamily: "'Vollkorn', serif" }}>
                                Muhammad Tsaqib Adha
                            </h2>
                            <p className='text-xs lg:text-xl text-gray-700 -mt-1' style={{ fontFamily: "'Saira', sans-serif" }}>
                                Informatika 2025
                            </p>
                        </div>
                    </div>
                </div>

                <div className='w-full bg-[#e2e2b7] flex items-start justify-center overflow-hidden -pt-100 -pb-1 relative'>
                    <div className='absolute inset-0 flex flex-col'>
                        <div className='h-1/2 bg-[#e2e2b1] flex items-end justify-start relative z-0 pl-1 lg:pl-6'>
                            <h1
                                className='text-5xl md:text-5xl lg:text-5xl xl:text-[6rem] 2xl:text-[7.5rem] font-bold leading-none mb-2 md:-mb-5 lg:-mb-15 xl:-mb-12 2xl:-mb-15 pl-3 md:pl-12 lg:pl-5 md:ml-5 lg:ml-6 xl:ml-65 2xl:ml-68 tracking-[0.2rem] lg:tracking-[0.5rem]'
                                style={{
                                    fontFamily: "'Nova Square', sans-serif",
                                    background: 'linear-gradient(to bottom, #fbfbe8 0%, #fbfbe8 50%, #e2e2b1 50%, #e2e2b1 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text'
                                }}
                            >
                                WAKIL
                            </h1>

                            <h1
                                className='text-5xl md:text-7xl lg:text-5xl xl:text-[6rem] 2xl:text-[7.5rem]
                                 font-bold leading-none mb-2 lg:-mb-20 xl:-mb-12 2xl:-mb-15 pl-12 lg:pl-15 xl:pl-17 lg:ml-3 [word-spacing:-1rem] lg:[word-spacing:-3rem]'
                                style={{
                                    fontFamily: "'Nova Square', sans-serif",
                                    letterSpacing: '0.1rem',
                                    background: 'linear-gradient(to bottom, #fbfbe8 0%, #fbfbe8 50%, #e2e2b1 50%, #e2e2b1 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text'

                                }}
                            >
                                SEKRE
                            </h1>
                        </div>
                        <div className='h-1/2 bg-[#fbfbe8]'></div>
                    </div>

                    <div className='max-w-6xl px-22 py-5 text-justify relative z-10 mt-2 lg:-mt-1 flex items-start'>

                        <img src={Wakil} alt="Foto Wakil" className='w-5/5 lg:w-3/6 mb-1 lg:-mb-7 pr-1 lg:pr-0 lg:-ml-60 xl:-ml-53 2xl:-ml-73 lg:mt-10 scale-110 lg:scale-100 mr-auto' />

                        <div className='absolute lg:bottom-3 left-1 lg:left-15 xl:left-80 2xl:left-60 text-left'>
                            <h2 className='text-[0.8rem] lg:text-[1.4rem] xl:text-[1.4rem] 2xl:text-[1.5rem] font-bold text-gray-800' style={{ fontFamily: "'Vollkorn', serif" }}>
                                Ahmad Habibi Pramuditama
                            </h2>
                            <p className='text-xs lg:text-xl xl:text-[1.2rem] 2xl:text-xl text-gray-700 -mt-1' style={{ fontFamily: "'Saira', sans-serif" }}>
                                Informatika 2025
                            </p>
                        </div>

                        <img src={Sekre} alt="Foto Sekretaris" className='w-3/5 lg:w-3/6 mb-1 lg:-mb-7 pr-1 lg:pr-0 lg:-ml-60 xl:ml-111 2xl:ml-150 lg:mt-10 scale-110 lg:scale-100 mr-auto' />

                        <div className='absolute lg:bottom-3 left-1 lg:left-15 xl:left-172 2xl:left-185 text-right'>
                            <h2 className='text-[0.8rem] lg:text-[1.4rem] xl:text-[1.4rem] 2xl:text-[1.5rem] font-bold text-gray-800' style={{ fontFamily: "'Vollkorn', serif" }}>
                                Fariska Sheryn Andana
                            </h2>
                            <p className='text-xs lg:text-xl xl:text-[1.2rem] 2xl:text-xl text-gray-700 -mt-1' style={{ fontFamily: "'Saira', sans-serif" }}>
                                Informatika 2025
                            </p>
                        </div>
                    </div>


                </div>


            </div>
        </div>
    );
}