import { useState, useEffect, useRef, useLayoutEffect, type SetStateAction } from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import img1 from './component/images/IMG_6031.png';
import img2 from './component/images//gambar2.png';
import img3 from './component/images/gambar3.png';
import img4 from './component/images/gambar4.png';
import PengurusInti from './component/pengurusINTI';
import FotoBersama from './component/images/foto bersama.png';
import TentangBemSection from './component/tentangBem';

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

const CarouselSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const skyRef = useRef(null);
  const containerRef = useRef(null);
  const smoothWrapperRef = useRef(null);
  const smoothContentRef = useRef(null);

  // Placeholder images - ganti dengan images asli
  const slides = [
    {
      title: "Kemahasiswaan Informatika",
      subtitle: "@2025/2026 Informatika",
      Image: img1
    },
    {
      title: "Inspection Parade",
      subtitle: "Orasi Mahasiswa",
      Image: img2
    },
    {
      title: "Program Akademik",
      subtitle: "Python Inspection Session",
      Image: img3
    },
    {
      title: "Perlombaan Internal",
      subtitle: "BEM CUP 2025",
      Image: img4
    }
  ];

  // ScrollSmoother init sebelum ScrollTrigger
  useLayoutEffect(() => {
    let smoother = ScrollSmoother.create({
      wrapper: smoothWrapperRef.current,
      content: smoothContentRef.current,
      smooth: 1.2,
      effects: true,
      smoothTouch: 0.1,
    });

    return () => {
      smoother.kill();
    };
  }, []);

  // Auto slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // GSAP Sliding Animation
  useGSAP(() => {
    gsap.fromTo(
      skyRef.current,
      { xPercent: -100 },
      {
        xPercent: 0,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=3000",
          scrub: 0.5,
          pin: true,
          anticipatePin: 1,
        }
      }
    );
  }, []);

  const goToSlide = (index: SetStateAction<number>) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <>
      {/* WRAPPER UNTUK SMOOTH SCROLL */}
      <div id="smooth-wrapper" ref={smoothWrapperRef}>
        <div id="smooth-content" ref={smoothContentRef}>

          <div ref={containerRef} className="relative overflow-hidden min-h-screen">
            {/* Sky Blue Overlay yang akan slide dari kiri */}
            <div
              ref={skyRef}
              className="absolute top-0 left-0 w-full h-full z-10 flex items-center justify-center"
              style={{ backgroundColor: "#3a5e70" }}
            >
              <div className="w-full max-w-6xl px-6 mt-12">
                {/* Card Container */}
                <div className="bg-gradient-to-br from-purple-200/30 to-blue-200/30 rounded-[2rem] p-2 shadow-xl backdrop-blur-sm border-2 border-gray-400/40">
                  <div
                    className="bg-white rounded-[1.8rem] p-4 shadow-lg min-h-[500px] border-2 border-gray-400/60"
                    style={{
                      backgroundImage: `
                      linear-gradient(to right, rgb(209 213 219 / 0.4) 1px, transparent 1px),
                      linear-gradient(to bottom, rgb(209 213 219 / 0.4) 1px, transparent 1px)`,
                      backgroundSize: '21px 21px'
                    }}
                  >
                    {/* Content goes here */}
                    <div className="h-full flex flex-row items-center justify-center text-center gap-4">
                      <div className='h-full w-full border-0 border-gray-600 rounded-2xl overflow-hidden flex flex-row gap-4 p-8'>
                        {/* Kontainer Persegi */}
                        <div className='w-80 h-120 border-2 border-gray-500 rounded-lg overflow-hidden'>
                          <img
                            src={FotoBersama}
                            alt="Foto Bersama"
                            className='w-full h-full object-cover'
                          />
                        </div>

                        {/* Kontainer Persegi Panjang */}
                        <div className='flex-1 h-auto rounded-lg overflow-hidden relative group hover:rounded-[4rem] transition-all duration-700 hover:scale-101'>
                          <img
                            src={FotoBersama}
                            alt="Foto Bersama"
                            className='w-full h-full object-cover brightness-35 group-hover:brightness-100 transition-all duration-300'
                          />

                          {/* Tulisan yang muncul saat tidak hover, hilang saat hover */}
                          <div className='absolute inset-0 flex flex-col items-center justify-end group-hover:opacity-0 transition-opacity duration-500 p-3 text-left'>
                            <h1 className='text-white text-2xl font-bold self-start pl-2' style={{ fontFamily: 'Saira, sans-serif' }}>Badan Eksekutif Mahasiswa Fakultas Teknik</h1>
                            <p className='text-white text-xl py-2 pl-2' style={{ fontFamily: 'Nunito, sans-serif' }}>Merupakan organisasi intra kampus yang menjalankan fungsi tridharma Perguruan Tinggi, pengawalan politik, dan pengembangan kemampuan dalam minat bakat mahasiswa di tingkat Fakultas Teknik</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Carousel Section - di bawah sky overlay */}
            <div className="relative w-full h-screen">
              {/* Carousel Container */}
              <div className="relative w-full h-full">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-700 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                      }`}
                  >
                    <div
                      className="w-full h-full flex items-center justify-center bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${slide.Image})`,
                        filter: 'brightness(0.75)'
                      }}
                    >
                      <div className="text-center text-white z-10 rounded-2xl -mb-10">
                        <h1 className="slide-title text-5xl md:text-[5.2rem] font-bold mb-4 tracking-wide [text-shadow:_0_48px_64px_rgb(0_0_0_/_600%),_0_48px_64px_rgb(0_0_0_/_700%)] px-4 py-2">
                          {slide.title}
                        </h1>
                        <p className="text-xl md:text-2xl opacity-90 [text-shadow:_0_2px_8px_rgb(0_0_0_/_80%),_0_4px_16px_rgb(0_0_0_/_60%)]">{slide.subtitle}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 mt-87 md:mt-0 z-9 bg-white/20 hover:bg-white/30 text-white p-3 rounded-2xl backdrop-blur-xs transition-all"
              >
                <svg className="w-4 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 mt-87 md:mt-0 z-9 bg-white/20 hover:bg-white/30 text-white p-3 rounded-2xl backdrop-blur-xs transition-all"
              >
                <svg className="w-4 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Dot Indicators */}
              <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-9 flex gap-3">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`transition-all duration-300 rounded-full ${index === currentSlide
                      ? 'w-8 h-3 bg-white'
                      : 'w-3 h-3 bg-white/50 hover:bg-white/70'
                      }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Wave Shape at Bottom */}

            </div>
          </div>

          {/* Section Selanjutnya */}
          <section>
            <TentangBemSection />
          </section>

          <section>
            <PengurusInti></PengurusInti>
          </section>


        </div>
      </div>
    </>
  );
};

export default CarouselSection;