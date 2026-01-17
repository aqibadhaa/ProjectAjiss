import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';


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
                        yPercent: 1
                    },
                    {
                        yPercent: 14,
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
                        yPercent: 18
                    },
                    {
                        yPercent: 8,
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
                    className="w-full bg-[#fbfbe8] flex items-start justify-center overflow-hidden pt-15 lg:pt-18 pb-0 border-t-4 border-white"
                >
                    {/* VISI Section */}
                    <div className="flex items-start">
                        <h1
                            ref={textRef}
                            className="text-[2.3rem] lg:text-8xl font-bold text-gray-800 h-full"
                            style={{ letterSpacing: -8, fontFamily: "'Vollkorn', serif", writingMode: 'vertical-rl', textOrientation: 'upright' }}
                        >
                            VISI
                        </h1>
                        <div className='max-w-md px-10 lg:px-10 py-5 text-justify'>
                            <p className='text-black text-xl' style={{ fontFamily: 'Nunito, sans-serif' }}>
                                Menyediakan informasi kegiatan dan program kerja BEM secara terbuka, menjadi sarana penyaluran aspirasi mahasiswa, serta memperkuat komunikasi antara BEM dan civitas akademika.
                            </p>
                        </div>
                    </div>

                    {/* MISI Section */}
                    <div className="flex items-start mt-10 lg:mt-18">
                        <h1
                            ref={textRef2}
                            className="text-[2.2rem] lg:text-[5.5rem] font-bold text-gray-800"
                            style={{ letterSpacing: -8, fontFamily: "'Vollkorn', serif", writingMode: 'vertical-rl', textOrientation: 'upright' }}
                        >
                            MISI
                        </h1>
                        <div className='max-w-md px-10 lg:px-10 py-5 text-justify'>
                            <p className='text-black text-xl' style={{ fontFamily: 'Nunito, sans-serif' }}>
                                Menyediakan informasi kegiatan dan program kerja BEM secara terbuka, menjadi sarana penyaluran aspirasi mahasiswa, serta memperkuat komunikasi antara BEM dan civitas akademika.
                            </p>
                        </div>
                    </div>
                </div>

                <div id='Informasi' className='w-full min-h-screen bg-[#d5ebeb] flex items-center justify-center p-8 2xl:-mt-5 rounded-t-[4rem] shadow-2xl overflow-hidden'>
                    <div className='max-w-7xl w-full bg-transparent backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden B'>
                        <div className='flex items-center min-h-[400px] pl-12 lg:pl-20'>
                            <h1 className='text-7xl font-bold text-gray-900' style={{ fontFamily: "'Vollkorn', serif" }}>
                                INFORMASI TERKINI
                            </h1>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}