
// "use client";
// import Image from 'next/image'
// import { useEffect, useRef } from 'react'

// const OfferSection: React.FC = () => {
//     const zoomRef = useRef<HTMLDivElement>(null);

//     // Simple zoom-out effect on scroll (optional)
//     useEffect(() => {
//         const handleScroll = () => {
//             if (!zoomRef.current) return;
//             const scrollTop = window.scrollY;
//             // Zoom out max scale 1, min 0.95, based on scrollY (just example)
//             const scale = Math.max(0.95, 1 - scrollTop / 1000);
//             zoomRef.current.style.transform = `scale(${scale})`;
//         }
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     return (
//         <section className="relative overflow-hidden py-12" style={{ '--media-ratio': '3.9889' } as React.CSSProperties}>
//             <div className="w-full max-w-full px-0 mx-auto relative">
//                 <div className="relative overflow-hidden">
//                     <div
//                         ref={zoomRef}
//                         className="w-full h-full block relative overflow-hidden transition-transform duration-300 ease-out"
//                         style={{ transform: 'scale(1)' }}
//                     >
//                         <picture className="block w-full h-full relative overflow-hidden">
//                             <source
//                                 media="(max-width: 767px)"
//                                 srcSet="
//                   //www.hometown.in/cdn/shop/files/Frame_1171279522.png?v=1757672615&width=400 400w,
//                   //www.hometown.in/cdn/shop/files/Frame_1171279522.png?v=1757672615&width=600 600w,
//                   //www.hometown.in/cdn/shop/files/Frame_1171279522.png?v=1757672615&width=800 800w,
//                   //www.hometown.in/cdn/shop/files/Frame_1171279522.png?v=1757672615&width=1000 1000w
//                 "
//                                 sizes="(max-width: 767px) 100vw"
//                             />
//                             <Image
//                                 src="//www.hometown.in/cdn/shop/files/Frame_1171279446.png?v=1757397448&width=1440"
//                                 alt="HomeTown"
//                                 width={1440}
//                                 height={361}
//                                 sizes="100vw"
//                                 className="object-cover w-full h-auto"
//                                 priority
//                             />
//                         </picture>
//                     </div>
//                     {/* Overlay content wrapper */}
//                     <div className="absolute inset-0 flex items-center justify-start px-8 md:px-16 lg:px-24 pointer-events-none">
//                         <div className="max-w-xl text-left text-white z-10">
//                             {/* Empty content wrapper for now */}
//                             {/* Add your heading, text, buttons here */}
//                         </div>
//                     </div>

//                     {/* Background overlay with 0 opacity */}
//                     <div
//                         className="absolute inset-0 bg-black"
//                         style={{ opacity: 0 }}
//                         aria-hidden="true"
//                     />
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default OfferSection


// "use client";
// import Image from 'next/image'
// import { useEffect, useRef } from 'react'

// const OfferSection: React.FC = () => {
//     const zoomRef = useRef<HTMLDivElement>(null);

//     // Simple zoom-out effect on scroll (optional)
//     useEffect(() => {
//         const handleScroll = () => {
//             if (!zoomRef.current) return;
//             const scrollTop = window.scrollY;
//             // Zoom out max scale 1, min 0.95, based on scrollY (just example)
//             const scale = Math.max(0.95, 1 - scrollTop / 1000);
//             zoomRef.current.style.transform = `scale(${scale})`;
//         }
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     return (
//         <section className="relative overflow-hidden py-12" style={{ '--media-ratio': '3.9889' } as React.CSSProperties}>
//             <div className="w-full max-w-full px-0 mx-auto relative">
//                 <div className="relative overflow-hidden">
//                     <div
//                         ref={zoomRef}
//                         className="w-full h-full block relative overflow-hidden transition-transform duration-300 ease-out"
//                         style={{ transform: 'scale(1)' }}
//                     >
//                         <picture className="block w-full h-full relative overflow-hidden">
//                             <source
//                                 media="(max-width: 767px)"
//                                 srcSet="
//                   https://www.hometown.in/cdn/shop/files/Frame_1171279522.png?v=1757672615&width=400 400w,
//                   https://www.hometown.in/cdn/shop/files/Frame_1171279522.png?v=1757672615&width=600 600w,
//                   https://www.hometown.in/cdn/shop/files/Frame_1171279522.png?v=1757672615&width=800 800w,
//                   https://www.hometown.in/cdn/shop/files/Frame_1171279522.png?v=1757672615&width=1000 1000w
//                 "
//                                 sizes="(max-width: 767px) 100vw"
//                             />
//                             <Image
//                                 src="https://www.hometown.in/cdn/shop/files/Frame_1171279446.png?v=1757397448&width=1440"
//                                 alt="HomeTown"
//                                 width={1440}
//                                 height={361}
//                                 sizes="100vw"
//                                 className="object-cover w-full h-auto"
//                                 priority
//                             />
//                         </picture>
//                     </div>
//                     {/* Overlay content wrapper */}
//                     <div className="absolute inset-0 flex items-center justify-start px-8 md:px-16 lg:px-24 pointer-events-none">
//                         <div className="max-w-xl text-left text-white z-10">
//                             {/* Empty content wrapper for now */}
//                             {/* Add your heading, text, buttons here */}
//                         </div>
//                     </div>

//                     {/* Background overlay with 0 opacity */}
//                     <div
//                         className="absolute inset-0 bg-black"
//                         style={{ opacity: 0 }}
//                         aria-hidden="true"
//                     />
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default OfferSection


// 'use client';

// import Image from 'next/image';
// import { useEffect, useRef } from 'react';

// const OfferSection: React.FC = () => {
//   const zoomRef = useRef<HTMLDivElement>(null);

//   // Zoom-out effect on scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       if (!zoomRef.current) return;
//       const scrollTop = window.scrollY;
//       const scale = Math.max(0.95, 1 - scrollTop / 1000);
//       zoomRef.current.style.transform = `scale(${scale})`;
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <section className="relative overflow-hidden py-12">
//       <div className="relative w-full">
//         <div
//           ref={zoomRef}
//           className="transition-transform duration-300 ease-out"
//         >
//           <picture className="block w-full">
//             <source
//               media="(max-width: 767px)"
//               srcSet="
//                 https://www.hometown.in/cdn/shop/files/Frame_1171279522.png?v=1757672615&width=400 400w,
//                 https://www.hometown.in/cdn/shop/files/Frame_1171279522.png?v=1757672615&width=600 600w,
//                 https://www.hometown.in/cdn/shop/files/Frame_1171279522.png?v=1757672615&width=800 800w,
//                 https://www.hometown.in/cdn/shop/files/Frame_1171279522.png?v=1757672615&width=1000 1000w
//               "
//               sizes="(max-width: 767px) 100vw"
//             />
//             <Image
//               src="https://www.hometown.in/cdn/shop/files/Frame_1171279446.png?v=1757397448&width=1440"
//               alt="HomeTown"
//               width={1440}
//               height={361}
//               sizes="100vw"
//               className="object-cover w-full h-auto"
//               priority
//             />
//           </picture>
//         </div>

//         {/* Optional content overlay */}
//         <div className="absolute inset-0 flex items-center px-8 md:px-16 lg:px-24 pointer-events-none">
//           <div className="max-w-xl text-white z-10">
//             {/* Add content like heading, subheading, buttons here */}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OfferSection;


// 'use client';

// import Image from 'next/image';
// import { useEffect, useRef } from 'react';

// const OfferSection: React.FC = () => {
//   const zoomRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!zoomRef.current) return;
//       const scrollTop = window.scrollY;
//       const scale = Math.max(0.85, 1 - scrollTop / 500); // More noticeable
//       zoomRef.current.style.transform = `scale(${scale})`;
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <section className="relative overflow-hidden py-12">
//       <div className="relative w-full">
//         <div
//           ref={zoomRef}
//           className="transition-transform duration-500 ease-out"
//           style={{ transform: 'scale(1)' }}
//         >
//           <picture className="block w-full">
//             <source
//               media="(max-width: 767px)"
//               srcSet="
//                 https://www.hometown.in/cdn/shop/files/Frame_1171279522.png?v=1757672615&width=400 400w,
//                 https://www.hometown.in/cdn/shop/files/Frame_1171279522.png?v=1757672615&width=600 600w,
//                 https://www.hometown.in/cdn/shop/files/Frame_1171279522.png?v=1757672615&width=800 800w,
//                 https://www.hometown.in/cdn/shop/files/Frame_1171279522.png?v=1757672615&width=1000 1000w
//               "
//               sizes="(max-width: 767px) 100vw"
//             />
//             <Image
//               src="https://www.hometown.in/cdn/shop/files/Frame_1171279446.png?v=1757397448&width=1440"
//               alt="HomeTown"
//               width={1440}
//               height={361}
//               sizes="100vw"
//               className="object-cover w-full h-auto"
//               priority
//             />
//           </picture>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OfferSection;


// 'use client';

// import Image from 'next/image';
// import { useEffect, useRef } from 'react';

// const OfferSection: React.FC = () => {
//   const zoomRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const element = zoomRef.current;
//     if (!element) return;

//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       const scale = Math.max(0.85, 1 - scrollTop / 500);
//       element.style.transform = `scale(${scale})`;
//     };

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           window.addEventListener('scroll', handleScroll);
//         } else {
//           window.removeEventListener('scroll', handleScroll);
//         }
//       },
//       {
//         threshold: 0.1, // Adjust based on how early you want it to trigger
//       }
//     );

//     observer.observe(element);

//     return () => {
//       observer.disconnect();
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <section className="relative overflow-hidden py-12">
//       <div className="relative w-full">
//         <div
//           ref={zoomRef}
//           className="transition-transform duration-500 ease-out"
//           style={{ transform: 'scale(1)' }}
//         >
//           <picture className="block w-full">
//             <source
//               media="(max-width: 767px)"
//               srcSet="
//                 https://www.hometown.in/cdn/shop/files/Frame_1171279522.png?v=1757672615&width=400 400w,
//                 https://www.hometown.in/cdn/shop/files/Frame_1171279522.png?v=1757672615&width=600 600w,
//                 https://www.hometown.in/cdn/shop/files/Frame_1171279522.png?v=1757672615&width=800 800w,
//                 https://www.hometown.in/cdn/shop/files/Frame_1171279522.png?v=1757672615&width=1000 1000w
//               "
//               sizes="(max-width: 767px) 100vw"
//             />
//             <Image
//               src="https://www.hometown.in/cdn/shop/files/Frame_1171279446.png?v=1757397448&width=1440"
//               alt="HomeTown"
//               width={1440}
//               height={361}
//               sizes="100vw"
//               className="object-cover w-full h-auto"
//               priority
//             />
//           </picture>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OfferSection;


'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const OfferSection: React.FC = () => {
  const zoomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!zoomRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        zoomRef.current,
        { scale: 1 },
        {
          scale: 0.85,
          scrollTrigger: {
            trigger: zoomRef.current,
            start: 'top bottom', // when top of element hits bottom of viewport
            end: 'bottom top',   // when bottom of element hits top of viewport
            scrub: true,
          },
          ease: 'power2.out',
        }
      );
    }, zoomRef);

    return () => ctx.revert(); // Clean up animations on unmount
  }, []);

  return (
    <section className="relative overflow-hidden py-12">
      <div className="relative w-full">
        <div
          ref={zoomRef}
          className="will-change-transform"
          style={{ transform: 'scale(1)' }}
        >
          <picture className="block w-full">
            <source
              media="(max-width: 767px)"
              srcSet="
                https://www.hometown.in/cdn/shop/files/Frame_1171279522.png?v=1757672615&width=400 400w,
                https://www.hometown.in/cdn/shop/files/Frame_1171279522.png?v=1757672615&width=600 600w,
                https://www.hometown.in/cdn/shop/files/Frame_1171279522.png?v=1757672615&width=800 800w,
                https://www.hometown.in/cdn/shop/files/Frame_1171279522.png?v=1757672615&width=1000 1000w
              "
              sizes="(max-width: 767px) 100vw"
            />
            <Image
              src="https://www.hometown.in/cdn/shop/files/Frame_1171279446.png?v=1757397448&width=1440"
              alt="HomeTown"
              width={1440}
              height={361}
              sizes="100vw"
              className="object-cover w-full h-auto"
              priority
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
