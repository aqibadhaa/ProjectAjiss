import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import Ketua from '../component/images/Ketuafix.png';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function PengurusInti() {
    const textRef = useRef(null);
    const containerRef = useRef(null);
    const textRef2 = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
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

        return () => ctx.revert();
    }, []);

    return (
        <div id="smooth-wrapper">
            <div id="smooth-content">
                <div
                    ref={containerRef}
                    className="w-full bg-[#fbfbe8] flex items-start justify-center overflow-hidden pt-18 pb-0"
                >

                    <h1
                        ref={textRef}
                        className="text-8xl font-bold text-gray-800"
                        style={{ fontFamily: "'Vollkorn', serif" }}
                    >
                        PENGURUS INTI
                    </h1>

                    <h1
                        ref={textRef2}
                        className="text-[5.5rem] font-bold text-gray-800 mt-18"
                        style={{ fontFamily: "'Vollkorn', serif" }}
                    >
                        BEM FT
                    </h1>
                </div>

                <div className='w-full bg-[#fbfbe8] flex items-start justify-center overflow-hidden pt-0'>
                    <div className='max-w-4xl px-22 py-5 text-justify'>
                        <p className='text-black text-xl' style={{ fontFamily: 'Nunito, sans-serif' }}>Pengurus inti BEM merupakan struktur utama yang menjadi pusat koordinasi dan pengambilan keputusan dalam organisasi kemahasiswaan. Mereka berperan mengarahkan jalannya roda organisasi, menyelaraskan seluruh bidang dengan visi dan misi BEM, serta memastikan setiap program kerja berjalan secara efektif dan bertanggung jawab. <br />Pengurus inti juga menjadi representasi kepemimpinan mahasiswa dalam menjembatani aspirasi mahasiswa dengan pihak internal maupun eksternal kampus.

                        </p>
                    </div>
                </div>

                <div className='w-full bg-[#e2e2b7] flex items-start justify-center overflow-hidden -pt-100 -pb-1 relative'>
                    <div className='absolute inset-0 flex flex-col'>
                        <div className='h-1/2 bg-[#fbfbe8] flex items-end justify-start relative z-0 pl-10'>
                            <h1 className='text-[11rem] font-bold text-[#e2e2b1] leading-none -mb-7 pl-21' style={{ fontFamily: "'Nova Square', sans-serif", letterSpacing: '0.9rem' }}>
                                KETUA
                            </h1>
                            <h1 className='text-[11rem] font-bold text-[#e2e2b1] leading-none -mb-7 pl-14' style={{ fontFamily: "'Nova Square', sans-serif", letterSpacing: '0.1rem', wordSpacing: '-2rem' }}>
                                BEM FT
                            </h1>
                        </div>
                        <div className='h-1/2 bg-[#e2e2b7]'></div>
                    </div>
                    <div className='max-w-4xl px-22 py-5 text-justify relative z-10 -mt-10 flex items-end'>
                        <img src={Ketua} alt="Foto Ketua" className='w-2/3 mx-auto -mb-5' />
                        <div className='absolute bottom-5 -left-5 text-right'>
                            <h2 className='text-[1.9em] font-bold text-gray-800' style={{ fontFamily: "'Vollkorn', serif" }}>
                                Muhammad Tsaqib Adha
                            </h2>
                            <p className='text-xl text-gray-700 -mt-1' style={{ fontFamily: "'Saira', sans-serif" }}>
                                Informatika 2025
                            </p>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
}