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
                    className="w-full bg-[#fbfbe8] flex items-start justify-center overflow-hidden pt-15 lg:pt-18 pb-0 border-t-4 border-white xl:pb-18 2xl:pb-20"
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



            </div>
        </div>
    );
}