
// "use client";
// import { useState, useRef, useEffect } from 'react';

// interface Slide {
//     id: number;
//     title: string;
//     imageSrc: string;
//     alt: string;
//     link: string;
// }

// const slides: Slide[] = [
//     {
//         id: 1,
//         title: 'Figurines',
//         imageSrc: '/images/figurines.jpg', // Replace with your actual image paths
//         alt: 'Gold Buddha statue with a lit candle',
//         link: '/collections/figurines',
//     },
//     {
//         id: 2,
//         title: 'Vases',
//         imageSrc: '/images/vases.jpg',
//         alt: 'Two black textured vases with white flowers',
//         link: '/collections/vases',
//     },
//     {
//         id: 3,
//         title: 'Candle Holders',
//         imageSrc: '/images/candle-holders.jpg',
//         alt: 'Gold lanterns with candles on a decorative table',
//         link: '/collections/candle-holders',
//     },
//     {
//         id: 4,
//         title: 'Garden',
//         imageSrc: '/images/garden.jpg',
//         alt: 'Decorative statue of a seated figure with water feature',
//         link: '/collections/garden',
//     },
//     {
//         id: 5,
//         title: 'Clocks',
//         imageSrc: '/images/clocks.jpg',
//         alt: 'Decorative wall clock on a beige wall',
//         link: '/collections/clocks',
//     },
// ];

// const Features = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const totalSlides = slides.length;

//     const nextSlide = () => {
//         setCurrentIndex((prev) => (prev + 1) % totalSlides);
//     };

//     const prevSlide = () => {
//         setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
//     };

//     // Optional: auto-slide every 5 seconds
//     useEffect(() => {
//         const timer = setInterval(() => {
//             nextSlide();
//         }, 5000);
//         return () => clearInterval(timer);
//     }, []);

//     return (
//         <section className="relative max-w-6xl mx-auto px-4 py-12">
//             <h2 className="text-3xl font-semibold mb-8">Home Decor</h2>

//             <div className="relative overflow-hidden">
//                 {/* Slider container */}
//                 <div
//                     className="flex transition-transform duration-500 ease-in-out"
//                     style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)`, width: `${(100 / 3) * totalSlides * 3}%` }}
//                 >
//                     {slides.map(({ id, title, imageSrc, alt, link }) => (
//                         <a
//                             href={link}
//                             key={id}
//                             className="flex-shrink-0 w-1/3 px-2 cursor-pointer group"
//                             aria-label={`Slide: ${title}`}
//                         >
//                             <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
//                                 <img
//                                     src={imageSrc}
//                                     alt={alt}
//                                     className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-300"
//                                     loading="lazy"
//                                 />
//                                 <div className="p-4 text-center">
//                                     <h3 className="text-lg font-medium text-gray-900 flex items-center justify-center gap-2">
//                                         {title}
//                                         <svg
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors"
//                                             fill="none"
//                                             viewBox="0 0 20 20"
//                                             stroke="currentColor"
//                                             strokeWidth={1.5}
//                                         >
//                                             <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l10-10M15 5v8.125M6.875 5H15" />
//                                         </svg>
//                                     </h3>
//                                 </div>
//                             </div>
//                         </a>
//                     ))}
//                 </div>

//                 {/* Prev button */}
//                 <button
//                     onClick={prevSlide}
//                     aria-label="Previous Slide"
//                     className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full shadow p-2 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
//                     disabled={currentIndex === 0}
//                 >
//                     <svg
//                         className="w-6 h-6 text-gray-700"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth={2}
//                         viewBox="0 0 24 24"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                     >
//                         <polyline points="15 18 9 12 15 6" />
//                     </svg>
//                 </button>

//                 {/* Next button */}
//                 <button
//                     onClick={nextSlide}
//                     aria-label="Next Slide"
//                     className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-full shadow p-2 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
//                     disabled={currentIndex === totalSlides - 3}
//                 >
//                     <svg
//                         className="w-6 h-6 text-gray-700"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth={2}
//                         viewBox="0 0 24 24"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                     >
//                         <polyline points="9 18 15 12 9 6" />
//                     </svg>
//                 </button>
//             </div>
//         </section>
//     );
// };

// export default Features;


// components/CollectionSlider.tsx


"use client";
import Image from "next/image";
import React, { useState } from "react";

interface Slide {
    id: number;
    title: string;
    image: string;
    alt: string;
    href: string;
}

// const slides: Slide[] = [
//     {
//         id: 1,
//         title: "Figurines",
//         image: "/images/figurines.jpg",
//         alt: "Gold Buddha statue",
//         href: "/collections/figurines",
//     },
//     {
//         id: 2,
//         title: "Vases",
//         image: "/images/vases.jpg",
//         alt: "Two black textured vases",
//         href: "/collections/vases",
//     },
//     {
//         id: 3,
//         title: "Candle Holders",
//         image: "/images/candle-holders.jpg",
//         alt: "Gold lanterns with candles",
//         href: "/collections/candle-holders",
//     },
//     {
//         id: 4,
//         title: "Garden",
//         image: "/images/garden.jpg",
//         alt: "Decorative statue",
//         href: "/collections/garden",
//     },
//     {
//         id: 5,
//         title: "Clocks",
//         image: "/images/clocks.jpg",
//         alt: "Decorative wall clock",
//         href: "/collections/clocks",
//     },
// ];

const slides: Slide[] = [
    {
        id: 1,
        title: "Figurines",
        image: "https://www.hometown.in/cdn/shop/files/Figurines.jpg?v=1756186507&width=624",
        alt: "Gold Buddha statue with a lit candle on a wooden surface, with a blurred background of a plant and striped fabric.",
        href: "/collections/figurines",
    },
    {
        id: 2,
        title: "Vases",
        image: "https://www.hometown.in/cdn/shop/files/Vases.jpg?v=1756186545&width=624",
        alt: "Two black textured vases with gold accents on a surface, one containing white flowers.",
        href: "/collections/vases",
    },
    {
        id: 3,
        title: "Candle Holders",
        image: "https://www.hometown.in/cdn/shop/files/Candel_Holder.jpg?v=1756186598&width=624",
        alt: "Gold lanterns with candles on a decorative table with plants and flowers.",
        href: "/collections/candle-holders",
    },
    {
        id: 4,
        title: "Garden",
        image: "https://www.hometown.in/cdn/shop/files/Garden.jpg?v=1756186714&width=624",
        alt: "Decorative statue of a seated figure with water feature on a light blue background",
        href: "/collections/garden",
    },
    {
        id: 5,
        title: "Clocks",
        image: "https://www.hometown.in/cdn/shop/files/Clocks.jpg?v=1756186758&width=624",
        alt: "Decorative wall clock on a beige wall above a white cabinet with books and a vase.",
        href: "/collections/clocks",
    },
];

const Features: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slidesToShow = 3;

    const prevSlide = () => {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) =>
            Math.min(prev + 1, slides.length - slidesToShow)
        );
    };

    return (
        <section className="py-20 bg-gray-50 templateContainer">
            <h2 className="text-3xl font-semibold mb-8">Home Decor</h2>

            <div className="relative">
                {/* Slides container */}
                <div className="flex  overflow-hidden">
                    {/* Slide items */}
                    <div
                        className="flex gap-x-5 transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`, width: `${(slides.length / slidesToShow) * 100}%` }}
                    >
                        {slides.map((slide) => (
                            <a
                                key={slide.id}
                                href={slide.href}
                                className="flex-shrink-0 w-1/3 cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                            >
                                <Image
                                    width={800}
                                    height={800}
                                    src={slide.image}
                                    alt={slide.alt}
                                    className="w-full h-80 object-cover"
                                    loading="lazy"
                                />
                                <div className="p-4 bg-white text-center">
                                    <h3 className="text-lg font-medium">{slide.title}</h3>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Prev button */}
                <button
                    onClick={prevSlide}
                    disabled={currentIndex === 0}
                    aria-label="Previous Slide"
                    className={`absolute top-1/2 left-0 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition disabled:opacity-40 disabled:cursor-not-allowed`}
                >
                    <svg
                        className="w-6 h-6 text-gray-700"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                {/* Next button */}
                <button
                    onClick={nextSlide}
                    disabled={currentIndex >= slides.length - slidesToShow}
                    aria-label="Next Slide"
                    className={`absolute top-1/2 right-0 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition disabled:opacity-40 disabled:cursor-not-allowed`}
                >
                    <svg
                        className="w-6 h-6 text-gray-700"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </section>
    );
};

export default Features;
