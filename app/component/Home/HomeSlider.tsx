// // components/Slideshow.tsx

// 'use client';

// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/effect-fade';

// const slides = [
//     {
//         href: '/collections/deal-of-the-day',
//         imageDesktop: '/images/banner1.jpg',
//         imageMobile: '/images/banner1-mobile.jpg',
//         alt: 'Deal of the Day',
//     },
//     {
//         href: '/collections/furniture',
//         imageDesktop: '/images/banner2.jpg',
//         imageMobile: '/images/banner2-mobile.jpg',
//         alt: 'Furniture Collection',
//     },
// ];

// const HomeSlider: React.FC = () => {
//     return (
//         <section className="min-h-screen">
//             <section
//                 role="region"
//                 aria-roledescription="Carousel"
//                 aria-label="Slideshow about our brand"
//                 className="relative w-full"
//             >
//                 <Swiper
//                     modules={[Navigation, Pagination, Autoplay, EffectFade]}
//                     spaceBetween={0}
//                     slidesPerView={1}
//                     loop
//                     autoplay={{ delay: 7000 }}
//                     pagination={{ clickable: true }}
//                     navigation
//                     effect="fade"
//                     className="w-full"
//                 >
//                     {slides.map((slide, index) => (
//                         <SwiperSlide key={index}>
//                             <a href={slide.href} className="block">
//                                 <picture className="block w-full">
//                                     <source
//                                         media="(max-width: 767px)"
//                                         srcSet={slide.imageMobile}
//                                     />
//                                     <img
//                                         src={slide.imageDesktop}
//                                         alt={slide.alt}
//                                         className="w-full object-cover"
//                                         loading="lazy"
//                                     />
//                                 </picture>
//                             </a>
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>

//                 {/* Custom navigation buttons (optional, since Swiper includes built-in ones) */}
//             </section>
//         </section>

//     );
// };

// export default HomeSlider;


// 'use client';

// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import Image from 'next/image';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// interface Slide {
//     imageUrl: string;
//     mobileImageUrl?: string;
//     link: string;
//     alt: string;
// }

// const slides: Slide[] = [
//     {
//         imageUrl: 'https://www.hometown.in/cdn/shop/files/BFR_Discount_Desktop_Marble_Top_2.png?v=1759330679',
//         link: '/collections/furniture',
//         alt: 'Furniture Collection',
//     },
//     {
//         imageUrl: 'https://www.hometown.in/cdn/shop/files/Web_Banner.jpg?v=1756544452',
//         link: '/collections/deal-of-the-day',
//         alt: 'Deal of the Day',
//     },
// ];

// const HomeSlider: React.FC = () => {
//     return (
//         <div className="w-full">
//             <Swiper
//                 modules={[Autoplay, Pagination, Navigation]}
//                 spaceBetween={0}
//                 slidesPerView={1}
//                 loop={true}
//                 autoplay={{ delay: 7000, disableOnInteraction: false }}
//                 pagination={{ clickable: true }}
//                 navigation={true}
//                 className="relative"
//             >
//                 {slides.map((slide, idx) => (
//                     <SwiperSlide key={idx}>
//                         <a href={slide.link}>
//                             <div className="relative w-full h-[calc(100vw/2.3)] md:h-[600px]">
//                                 <Image
//                                     src={slide.imageUrl}
//                                     alt={slide.alt}
//                                     fill
//                                     sizes="100vw"
//                                     className="object-cover"
//                                     priority={idx === 0}
//                                 />
//                             </div>
//                         </a>
//                     </SwiperSlide>
//                 ))}
//             </Swiper>
//         </div>
//     );
// };

// export default HomeSlider;


// 'use client';

// import React, { useRef, useCallback } from 'react';
// import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import Image from 'next/image';
// import { ChevronLeft, ChevronRight } from 'lucide-react'; // Using Lucide React for modern icons

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// // ----------------------------------------------------------------------
// // 1. Types & Data
// // ----------------------------------------------------------------------

// interface Slide {
//     imageUrl: string;
//     mobileImageUrl?: string;
//     link: string;
//     alt: string;
// }

// const slides: Slide[] = [
//     {
//         imageUrl: 'https://www.hometown.in/cdn/shop/files/BFR_Discount_Desktop_Marble_Top_2.png?v=1759330679',
//         link: '/collections/furniture',
//         alt: 'Furniture Collection Discount',
//     },
//     {
//         imageUrl: 'https://www.hometown.in/cdn/shop/files/Web_Banner.jpg?v=1756544452',
//         link: '/collections/deal-of-the-day',
//         alt: 'Deal of the Day Banner',
//     },
// ];

// // ----------------------------------------------------------------------
// // 2. Custom Navigation Buttons Component
// // ----------------------------------------------------------------------

// const SwiperNavButtons: React.FC = () => {
//     const swiper = useSwiper();

//     return (
//         <div className="flex justify-between w-full absolute top-1/2 left-0 transform -translate-y-1/2 z-10 pointer-events-none px-4 md:px-8">
//             {/* Previous Button */}
//             <button
//                 type="button"
//                 className="pointer-events-auto w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/70 text-black shadow-lg transition-all duration-300 hover:bg-white focus:outline-none"
//                 aria-label="Previous Slide"
//                 onClick={() => swiper.slidePrev()}
//             >
//                 <ChevronLeft className="w-6 h-6" />
//             </button>

//             {/* Next Button */}
//             <button
//                 type="button"
//                 className="pointer-events-auto w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/70 text-black shadow-lg transition-all duration-300 hover:bg-white focus:outline-none"
//                 aria-label="Next Slide"
//                 onClick={() => swiper.slideNext()}
//             >
//                 <ChevronRight className="w-6 h-6" />
//             </button>
//         </div>
//     );
// };

// // ----------------------------------------------------------------------
// // 3. Main Slider Component
// // ----------------------------------------------------------------------

// const HomeSlider: React.FC = () => {
//     // Refs for custom navigation to connect the buttons to Swiper
//     const prevRef = useRef<HTMLButtonElement>(null);
//     const nextRef = useRef<HTMLButtonElement>(null);

//     return (
//         <div className="w-full relative">
//             <style jsx global>{`
//                 /* Custom styles for the pagination dots (dots at the bottom) */
//                 .custom-pagination .swiper-pagination-bullet {
//                     width: 10px;
//                     height: 10px;
//                     background-color: white; /* Default background */
//                     opacity: 0.7;
//                     transition: all 0.3s ease;
//                 }
//                 .custom-pagination .swiper-pagination-bullet-active {
//                     opacity: 1;
//                     background-color: #0d9488; /* Teal-500 for active dot */
//                     width: 30px; /* Make active dot longer */
//                     border-radius: 5px;
//                 }
//                 .custom-pagination {
//                     position: absolute;
//                     bottom: 20px !important;
//                     left: 50% !important;
//                     transform: translateX(-50%);
//                     display: flex;
//                     justify-content: center;
//                     z-index: 10;
//                 }
//             `}</style>

//             <Swiper
//                 modules={[Autoplay, Pagination, Navigation]}
//                 spaceBetween={0}
//                 slidesPerView={1}
//                 loop={true}
//                 autoplay={{ delay: 7000, disableOnInteraction: false }}
//                 // Use the custom class name for pagination
//                 pagination={{ clickable: true, el: '.custom-pagination', bulletClass: 'swiper-pagination-bullet' }}
//                 // Navigation must be explicitly enabled for the SwiperNavButtons to work as a nested component
//                 navigation={false}
//                 className="relative"
//             >
//                 {slides.map((slide, idx) => (
//                     <SwiperSlide key={idx}>
//                         <a href={slide.link}>
//                             <div className="relative w-full h-[calc(100vw/2.3)] max-h-[600px]">
//                                 <Image
//                                     src={slide.imageUrl}
//                                     alt={slide.alt}
//                                     fill
//                                     sizes="100vw"
//                                     className="object-cover"
//                                     priority={idx === 0}
//                                 />
//                             </div>
//                         </a>
//                     </SwiperSlide>
//                 ))}

//                 {/* Adding the custom navigation component (Prev/Next Arrows) */}
//                 <SwiperNavButtons />

//                 {/* Adding the custom pagination container */}
//                 <div className="custom-pagination" />

//             </Swiper>
//         </div>
//     );
// };

// export default HomeSlider;

// "use client";

// import React, { useState, useEffect, useRef } from 'react';

// const slides = [
//     {
//         id: 1,
//         href: '/collections/furniture',
//         desktopSrc:
//             'https://www.hometown.in/cdn/shop/files/BFR_Discount_Desktop_Marble_Top_2.png?v=1759330679',
//         mobileSrc:
//             'https://www.hometown.in/cdn/shop/files/BFR_Discount_Desktop_Marble_Top_2.png?v=1759330679',
//         alt: 'HomeTown Furniture',
//     },
//     {
//         id: 2,
//         href: '/collections/deal-of-the-day',
//         desktopSrc:
//             'https://www.hometown.in/cdn/shop/files/Web_Banner.jpg?v=1756544452',
//         mobileSrc:
//             'https://www.hometown.in/cdn/shop/files/SD_mobile_2.png?v=1756544444',
//         alt: 'HomeTown Deal of the Day',
//     },
//     {
//         id: 3,
//         href: '/collections/furniture',
//         desktopSrc:
//             'https://www.hometown.in/cdn/shop/files/BFR_Discount_Desktop_Marble_Top_2.png?v=1759330679',
//         mobileSrc:
//             'https://www.hometown.in/cdn/shop/files/BFR_Discount_Desktop_Marble_Top_2.png?v=1759330679',
//         alt: 'HomeTown Furniture',
//     },
//     {
//         id: 4,
//         href: '/collections/deal-of-the-day',
//         desktopSrc:
//             'https://www.hometown.in/cdn/shop/files/Web_Banner.jpg?v=1756544452',
//         mobileSrc:
//             'https://www.hometown.in/cdn/shop/files/SD_mobile_2.png?v=1756544444',
//         alt: 'HomeTown Deal of the Day',
//     },
// ];

// const Slider = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
//     const delay = 6000;

//     const resetTimeout = () => {
//         if (timeoutRef.current) {
//             clearTimeout(timeoutRef.current);
//         }
//     };

//     useEffect(() => {
//         resetTimeout();
//         timeoutRef.current = setTimeout(() => {
//             setCurrentIndex((prevIndex) =>
//                 prevIndex === slides.length - 1 ? 0 : prevIndex + 1
//             );
//         }, delay);

//         return () => {
//             resetTimeout();
//         };
//     }, [currentIndex]);

//     const goToSlide = (index: number) => {
//         setCurrentIndex(index);
//     };

//     const goPrev = () => {
//         setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
//     };

//     const goNext = () => {
//         setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
//     };

//     return (
//         <div className="relative w-full mx-auto select-none">
//             <div className="overflow-hidden  relative">
//                 <a href={slides[currentIndex].href} tabIndex={-1}>
//                     <picture>
//                         <source
//                             media="(max-width: 767px)"
//                             srcSet={`${slides[currentIndex].mobileSrc} 400w, ${slides[currentIndex].mobileSrc} 600w, ${slides[currentIndex].mobileSrc} 800w, ${slides[currentIndex].mobileSrc} 1000w`}
//                         />
//                         <img
//                             src={slides[currentIndex].desktopSrc}
//                             alt={slides[currentIndex].alt}
//                             className="w-full h-auto object-cover"
//                             loading="eager"
//                             fetchPriority="high"
//                         />
//                     </picture>
//                 </a>

//                 {/* Controls: Prev button, Dots, Next button */}
//                 <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-6 bg-opacity-30 rounded-full px-4 py-2">
//                     {/* Prev Button */}
//                     <button
//                         onClick={goPrev}
//                         aria-label="Previous slide"
//                         className="text-white cursor-pointer hover:text-gray-300 focus:outline-none"
//                     >
//                         <svg
//                             className="w-6 h-6 stroke-current"
//                             fill="none"
//                             strokeWidth={1.5}
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             viewBox="0 0 24 24"
//                         >
//                             <path d="M15 18l-6-6 6-6" />
//                         </svg>
//                     </button>

//                     {/* Pagination Dots */}
//                     <div className="flex space-x-3">
//                         {slides.map((slide, index) => (
//                             <button
//                                 key={slide.id}
//                                 onClick={() => goToSlide(index)}
//                                 aria-label={`Go to slide ${index + 1}`}
//                                 className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${index === currentIndex ? 'bg-white' : 'bg-gray-400'
//                                     }`}
//                             />
//                         ))}
//                     </div>

//                     {/* Next Button */}
//                     <button
//                         onClick={goNext}
//                         aria-label="Next slide"
//                         className="text-white cursor-pointer hover:text-gray-300 focus:outline-none"
//                     >
//                         <svg
//                             className="w-6 h-6 stroke-current"
//                             fill="none"
//                             strokeWidth={1.5}
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             viewBox="0 0 24 24"
//                         >
//                             <path d="M9 18l6-6-6-6" />
//                         </svg>
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Slider;


"use client";

import React, { useState, useEffect, useRef } from 'react';

const slides = [
    {
        id: 1,
        href: '/collections/furniture',
        desktopSrc:
            'https://www.hometown.in/cdn/shop/files/BFR_Discount_Desktop_Marble_Top_2.png?v=1759330679',
        mobileSrc:
            'https://www.hometown.in/cdn/shop/files/BFR_Discount_Desktop_Marble_Top_2.png?v=1759330679',
        alt: 'HomeTown Furniture',
    },
    {
        id: 2,
        href: '/collections/deal-of-the-day',
        desktopSrc:
            'https://www.hometown.in/cdn/shop/files/Web_Banner.jpg?v=1756544452',
        mobileSrc:
            'https://www.hometown.in/cdn/shop/files/SD_mobile_2.png?v=1756544444',
        alt: 'HomeTown Deal of the Day',
    },
    {
        id: 3,
        href: '/collections/furniture',
        desktopSrc:
            'https://www.hometown.in/cdn/shop/files/BFR_Discount_Desktop_Marble_Top_2.png?v=1759330679',
        mobileSrc:
            'https://www.hometown.in/cdn/shop/files/BFR_Discount_Desktop_Marble_Top_2.png?v=1759330679',
        alt: 'HomeTown Furniture',
    },
    {
        id: 4,
        href: '/collections/deal-of-the-day',
        desktopSrc:
            'https://www.hometown.in/cdn/shop/files/Web_Banner.jpg?v=1756544452',
        mobileSrc:
            'https://www.hometown.in/cdn/shop/files/SD_mobile_2.png?v=1756544444',
        alt: 'HomeTown Deal of the Day',
    },
];

const HomeSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const delay = 6000;

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === slides.length - 1 ? 0 : prevIndex + 1
            );
        }, delay);

        return () => {
            resetTimeout();
        };
    }, [currentIndex]);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    const goPrev = () => {
        setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
    };

    const goNext = () => {
        setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
    };

    return (
        <div className="relative w-full mx-auto select-none">
            <div className="overflow-hidden  relative">
                <a href={slides[currentIndex].href} tabIndex={-1}>
                    <picture>
                        <source
                            media="(max-width: 767px)"
                            srcSet={`${slides[currentIndex].mobileSrc} 400w, ${slides[currentIndex].mobileSrc} 600w, ${slides[currentIndex].mobileSrc} 800w, ${slides[currentIndex].mobileSrc} 1000w`}
                        />
                        <img
                            src={slides[currentIndex].desktopSrc}
                            alt={slides[currentIndex].alt}
                            className="w-full h-auto object-cover"
                            loading="eager"
                            fetchPriority="high"
                        />
                    </picture>
                </a>

                {/* Controls: Prev button, Dots, Next button */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-6 bg-opacity-30 rounded-full px-4 py-2">
                    {/* Prev Button */}
                    <button
                        onClick={goPrev}
                        aria-label="Previous slide"
                        className="text-white cursor-pointer hover:text-gray-300 focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6 stroke-current"
                            fill="none"
                            strokeWidth={1.5}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                        >
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </button>

                    {/* Pagination Dots */}
                    <div className="flex space-x-3">
                        {slides.map((slide, index) => (
                            <button
                                key={slide.id}
                                onClick={() => goToSlide(index)}
                                aria-label={`Go to slide ${index + 1}`}
                                // UPDATED: Changed active dot from w-3 to w-8 to increase width
                                className={`h-3 rounded-full cursor-pointer transition-all ${index === currentIndex ? 'bg-white w-8' : 'bg-gray-400 w-3'
                                    }`}
                            />
                        ))}
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={goNext}
                        aria-label="Next slide"
                        className="text-white cursor-pointer hover:text-gray-300 focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6 stroke-current"
                            fill="none"
                            strokeWidth={1.5}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                        >
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomeSlider;