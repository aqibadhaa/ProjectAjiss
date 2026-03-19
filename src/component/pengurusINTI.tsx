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
                        xPercent: 10
                    },
                    {
                        xPercent: 15,
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
                        xPercent: 20  // mulai dari kanan dikit
                    },
                    {
                        xPercent: 14.5,  // gerak ke kiri dikit
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
                        xPercent: 49
                    },
                    {
                        xPercent: 56
                        ,
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
                        xPercent: 138
                    },
                    {
                        xPercent: 128,
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
                    className="w-full bg-[#fbfbe8] flex flex-col items-start justify-center overflow-hidden pt-15 lg:pt-18 pb-0"
                >

                    <h1
                        ref={textRef}
                        className="w-full lg:w-auto text-[2.1rem] lg:text-8xl xl:text-[5rem] 2xl:text-8xl font-bold text-gray-800"
                        style={{ fontFamily: "'Vollkorn', serif" }}
                    >
                        PENGURUS INTI
                    </h1>

                    <h1
                        ref={textRef2}
                        className="w-full lg:w-auto text-[2.0rem] lg:text-[4.5rem] xl:text-[4.625rem] 2xl:text-[5.5rem] font-bold text-gray-800 -mt-3 lg:-mt-5"
                        style={{ fontFamily: "'Vollkorn', serif" }}
                    >
                        BEM FT
                    </h1>
                </div>

                <div className='w-full bg-[#fbfbe8] flex items-start justify-center overflow-hidden pt-0'>
                    <div className='max-w-4xl px-10 lg:px-22 py-5 text-justify'>
                        <p className='text-black text-lg lg:text-xl' style={{ fontFamily: 'Nunito, sans-serif' }}>Pengurus inti BEM merupakan struktur utama yang menjadi pusat koordinasi dan pengambilan keputusan dalam organisasi kemahasiswaan. Mereka berperan mengarahkan jalannya roda organisasi, menyelaraskan seluruh bidang dengan visi dan misi BEM, serta memastikan setiap program kerja berjalan secara efektif dan bertanggung jawab. Pengurus inti juga menjadi representasi kepemimpinan mahasiswa dalam menjembatani aspirasi mahasiswa dengan pihak internal maupun eksternal kampus.

                        </p>
                    </div>
                </div>

                <div className='w-full bg-[#e2e2b7] flex items-start justify-center overflow-hidden -pt-100 -pb-1 relative border-b-4 border-white'>
                    <div className='absolute inset-0 flex flex-col'>
                        <div className='h-1/2 bg-[#fbfbe8] flex items-end justify-start relative z-0 pl-1 lg:pl-10'>
                            {/* KETUA */}
                            <h1
                                className='text-[clamp(2.5rem,11vw,4.5rem)] md:text-7xl lg:text-8xl xl:text-[9rem] 2xl:text-[10rem] font-bold text-[#e2e2b1] leading-none -mb-1 md:-mb-5 lg:-mb-7 pl-4 md:pl-12 lg:pl-5 xl:pl-8 2xl:pl-18 tracking-[0.08rem] md:tracking-[0.2rem] lg:tracking-[0.5rem]'
                                style={{
                                    fontFamily: "'Nova Square', sans-serif",
                                }}
                            >
                                KETUA
                            </h1>

                            {/* BEM FT */}
                            <h1
                                className='text-[clamp(2.5rem,11vw,4.5rem)] md:text-7xl lg:text-8xl xl:text-[9rem] 2xl:text-[10rem] font-bold text-[#e2e2b7] lg:text-[#fbfbe8] leading-none -mb-1 md:-mb-2 lg:-mb-64 pl-16 md:pl-12 lg:pl-20 xl:pl-54 2xl:pl-56 whitespace-nowrap'
                                style={{
                                    fontFamily: "'Nova Square', sans-serif",
                                    letterSpacing: '0.05rem',
                                    wordSpacing: window.innerWidth >= 1280 ? '-2.95rem' : '-0.5rem',
                                }}
                            >
                                BEM FT
                            </h1>
                        </div>
                        <div className='h-1/2 bg-[#e2e2b7]'></div>
                    </div>

                    <div className='max-w-4xl px-4 md:px-22 py-5 text-justify relative z-10 mt-10 md:mt-2 lg:-mt-10 flex items-end'>
                        <img
                            src={Ketua}
                            alt="Foto Ketua"
                            className='w-[70%] md:w-4/5 lg:w-2/3 mx-auto -mb-8 lg:-mb-5 pr-1 lg:pr-0 lg:ml-25 scale-100 lg:scale-100 mt-0 lg:mt-0'
                        />

                        <div className='absolute bottom-1 lg:bottom-5 left-3 lg:-left-11 text-right'>
                            <h2
                                className='text-[0.78rem] lg:text-[1.9em] font-bold text-gray-800 leading-tight'
                                style={{ fontFamily: "'Vollkorn', serif" }}
                            >
                                Muhammad Tsaqib Adha
                            </h2>
                            <p
                                className='text-[0.68rem] lg:text-xl text-gray-700 -mt-1'
                                style={{ fontFamily: "'Saira', sans-serif" }}
                            >
                                Informatika 2025
                            </p>
                        </div>
                    </div>
                </div>

                <div className='w-full bg-[#e2e2b7] flex items-start justify-center overflow-hidden -pt-100 -pb-1 relative'>
                    <div className='absolute inset-0 flex flex-col'>
                        <div className='h-1/2 bg-[#e2e2b1] flex items-end justify-start relative z-0 -pl-12 lg:pl-5'>
                            <h1
                                className='text-[2rem] md:text-5xl lg:text-5xl xl:text-[6rem] 2xl:text-[7.5rem] font-bold leading-none -mb-[17.871px] md:-mb-5 lg:-mb-15 xl:-mb-12 2xl:-mb-15 -pl-12 md:pl-12 lg:pl-5 ml-17 md:ml-5 lg:ml-6 xl:ml-65 2xl:ml-68 tracking-[0.2rem] lg:tracking-[0.5rem]'
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
                                className='text-[2rem] md:text-7xl lg:text-5xl xl:text-[6rem] 2xl:text-[7.5rem]
                                 font-bold leading-none -mb-[17.871px] lg:-mb-20 xl:-mb-12 2xl:-mb-15 pl-12 lg:pl-15 xl:pl-17 -ml-10 lg:ml-3 [word-spacing:-1rem] lg:[word-spacing:-3rem]'
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

                        <img src={Wakil} alt="Foto Wakil" className='w-[55%] lg:w-3/6 -mb-3.25 lg:-mb-7 pr-1 lg:pr-0 -ml-20 lg:-ml-60 xl:-ml-53 2xl:-ml-73 mt-6 lg:mt-10 scale-109 lg:scale-100 mr-auto' />

                        <div className='absolute lg:bottom-3 left-[11px] lg:left-15 xl:left-80 2xl:left-60 text-left'>
                            <h2 className='text-[0.7rem] lg:text-[1.4rem] xl:text-[1.4rem] 2xl:text-[1.5rem] font-bold text-gray-800' style={{ fontFamily: "'Vollkorn', serif" }}>
                                Ahmad Habibi Pramuditama
                            </h2>
                            <p className='text-[0.50rem] lg:text-xl xl:text-[1.2rem] 2xl:text-xl text-gray-700 -mt-1' style={{ fontFamily: "'Saira', sans-serif" }}>
                                Informatika 2025
                            </p>
                        </div>

                        <img src={Sekre} alt="Foto Sekretaris" className='w-[58%] lg:w-3/6 -mb-6 lg:-mb-7 pr-1 lg:pr-0 ml-36 lg:-ml-60 xl:ml-111 2xl:ml-150 mt-6 lg:mt-10 scale-110 lg:scale-100 mr-auto' />

                        <div className='absolute lg:bottom-3 left-68 lg:left-15 xl:left-172 2xl:left-185 text-right'>
                            <h2 className='text-[0.7rem] lg:text-[1.4rem] xl:text-[1.4rem] 2xl:text-[1.5rem] font-bold text-gray-800' style={{ fontFamily: "'Vollkorn', serif" }}>
                                Felicia Sheryn Andana
                            </h2>
                            <p className='text-[0.50rem] lg:text-xl xl:text-[1.2rem] 2xl:text-xl text-gray-700 -mt-1' style={{ fontFamily: "'Saira', sans-serif" }}>
                                Informatika 2025
                            </p>
                        </div>
                    </div>


                </div>


            </div>
        </div>
    );
}