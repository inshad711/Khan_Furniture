// 'use client';

// import Image from 'next/image';
// import { useState } from 'react';
// import Slider from 'react-slick'; // You'll need to install react-slick and slick-carousel
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';



// const LowPriceGuaranteeSection = () => (
//     <a href="https://starfurniture.com/whystar" className="block no-underline">
//         <div className="bg-[#B1B2B5] bg-opacity-15 px-4 py-8">
//             <h2 className="text-4xl font-light text-center text-[#333333] mb-2">Low Price Guarantee</h2>
//             <p className="text-xl font-light text-center text-[#333333] tracking-wider">
//                 We will refund for the price difference if you find the same item for less elsewhere within 30 days of purchase.*
//             </p>
//         </div>
//     </a>
// );

// const PromoCards = () => (
//     <div className="grid grid-cols-3 gap-8 py-8">
//         <div className="text-center">
//             <h3 className="text-4xl font-light text-[#333333] mb-2">Custom Order</h3>
//             <a href="https://starfurniture.com/custom-order" className="underline text-xl uppercase text-[#666666] tracking-wider block">
//                 Learn more
//             </a>
//         </div>
//         <div className="text-center">
//             <h3 className="text-4xl font-light text-[#333333] mb-2">Design Services</h3>
//             <a href="https://starfurniture.com/interior-designer-landing-page" className="underline text-xl uppercase text-[#666666] tracking-wider block">
//                 Learn more
//             </a>
//         </div>
//         <div className="text-center">
//             <h3 className="text-4xl font-light text-[#333333] mb-2">Feizy Fine Rugs</h3>
//             <a href="https://starfurniture.com/decor-accents/rugs" className="underline text-xl uppercase text-[#666666] tracking-wider block">
//                 BROWSE NOW
//             </a>
//         </div>
//     </div>
// );

// const GuestRoomSection = () => (
//     <div className="relative">
//         <Image
//             src="https://images.getfastr.com/0a/ac/fe5f53a44b1d9d45d16582349c45.jpg"
//             alt="Modern bedroom with wooden furniture"
//             width={1689}
//             height={1126}
//             className="w-full h-auto"
//         />
//         <div className="absolute inset-0 bg-[#7e2d40] bg-opacity-50 flex items-center justify-end pr-8">
//             <div className="text-white text-center">
//                 <h2 className="text-4xl font-light mb-4">Create The Perfect Guest Room</h2>
//                 <div className="space-y-2">
//                     <a href="https://starfurniture.com/bedrooms/beds" className="underline block text-xl uppercase tracking-wider">SHOP Beds</a>
//                     <a href="https://starfurniture.com/bedrooms/dressers" className="underline block text-xl uppercase tracking-wider">SHOP Dressers</a>
//                     <a href="https://starfurniture.com/bedrooms/nightstands" className="underline block text-xl uppercase tracking-wider">SHOP Nightstands</a>
//                 </div>
//             </div>
//         </div>
//     </div>
// );

// const DiningSlider = () => {
//     const settings = {
//         dots: true,
//         infinite: false,
//         speed: 500,
//         slidesToShow: 4,
//         slidesToScroll: 1,
//     };

//     const slides = [
//         { img: 'https://images.getfastr.com/3b/6a/6a3a8dab4dc1bed1e08d8f5e0f42.jpg', title: 'Essence', link: 'https://starfurniture.com/catalogsearch/result/?q=Essence%20Dining' },
//         { img: 'https://images.getfastr.com/91/61/f39ee56c464d85f3ba64c6e482fa.jpg', title: 'Plank Road', link: 'https://starfurniture.com/catalogsearch/result/?q=Plank%20Road%20Dining' },
//         { img: 'https://images.getfastr.com/f6/05/79c07a494ad7b452430938bfa753.jpg', title: 'Weatherford', link: 'https://starfurniture.com/catalogsearch/result/?q=Weatherford%20Dining' },
//         { img: 'https://images.getfastr.com/33/58/05ec313e4df4954c14e0237edc61.jpg', title: 'Commonwealth', link: 'https://starfurniture.com/catalogsearch/result/?q=Commonwealth+Dining&rows=24&page=1' },
//     ];

//     return (
//         <div className="py-8">
//             <Slider {...settings}>
//                 {slides.map((slide, index) => (
//                     <a key={index} href={slide.link} className="block">
//                         <div className="relative">
//                             <Image src={slide.img} alt={slide.title} width={300} height={500} className="w-full h-auto" />
//                             <div className="absolute bottom-0 left-0 right-0 bg-[#7e2d40] p-4">
//                                 <h3 className="text-4xl font-light text-white mb-2">{slide.title}</h3>
//                             </div>
//                         </div>
//                     </a>
//                 ))}
//             </Slider>
//         </div>
//     );
// };

// const FooterSlider = () => {
//     const settings = {
//         dots: true,
//         infinite: false,
//         speed: 500,
//         slidesToShow: 5,
//         slidesToScroll: 1,
//     };

//     const slides = [
//         { img: 'https://starfurniture.com/media/.renditions/wysiwyg/Category-Images/2023-FooterGraphics-Finals_SF_23-Footer_Delivery.png', title: 'DELIVERY', desc: 'All you need to know about your delivery.', link: '/delivery' },
//         { img: 'https://starfurniture.com/media/.renditions/wysiwyg/Category-Images/2023-FooterGraphics-Finals_SF_23-Footer_Careers.png', title: 'CAREERS', desc: 'Your future starts here. View current openings.', link: '/careers' },
//         { img: 'https://starfurniture.com/media/.renditions/wysiwyg/Category-Images/2023-FooterGraphics-Finals_SF_23-Footer_Finacing.png', title: 'FINANCING', desc: 'Interest-free financing options to suit your needs.', link: '/financing-offers' },
//         { img: 'https://starfurniture.com/media/.renditions/wysiwyg/Category-Images/2023-FooterGraphics-Finals_SF_23-Footer_RoomPlanner.png', title: 'ROOM PLANNER', desc: 'Plan your room with ease. Start designing today!', link: 'https://starfurniture.roomplanner.com/' },
//         { img: 'https://starfurniture.com/media/.renditions/wysiwyg/Category-Images/2023-FooterGraphics-Finals_SF_23-Footer_Design.png', title: 'THE TRADE', desc: 'Learn more about our Trade Program.', link: '/tothetrade' },
//     ];

//     return (
//         <div className="py-8">
//             <Slider {...settings}>
//                 {slides.map((slide, index) => (
//                     <div key={index} className="px-4 text-center">
//                         <a href={slide.link}>
//                             <Image src={slide.img} alt={slide.title} width={185} height={123} className="mx-auto mb-2" />
//                             <h3 className="text-xl font-semibold text-black mb-2">{slide.title}</h3>
//                             <p className="text-sm text-black leading-relaxed">{slide.desc}</p>
//                         </a>
//                     </div>
//                 ))}
//             </Slider>
//         </div>
//     );
// };

// const FinancingSection = () => (
//     <div className="bg-[#7e2d40] py-8 px-4">
//         <div className="max-w-4xl mx-auto">
//             <h2 className="text-4xl font-light text-white mb-4 text-left">Don't Pay Anything for 6 Months!*</h2>
//             <div className="text-xl text-white mb-4 text-left">
//                 <p>No Down Payment.</p>
//                 <p>No Monthly Payments.</p>
//                 <p>No Finance Charges.</p>
//             </div>
//             <a href="https://starfurniture.com/financing-offers" className="underline text-lg uppercase text-white tracking-wider block">
//                 Get pre-approved &gt;
//             </a>
//         </div>
//     </div>
// );

// const ARTSAwardSection = () => (
//     <a href="https://starfurniture.com/whystar" className="block">
//         <div className="bg-[#B1B2B5] bg-opacity-15 px-4 py-8">
//             <p className="text-xl font-light text-center text-[#333333] tracking-wider">
//                 Star Furniture is a finalist for the 36th ARTS Awards — the only Houston furniture store honored!
//             </p>
//         </div>
//     </a>
// );

// export default function HomePage() {
//     return (
//         <main className="w-full bg-white">


//             {/* Embed or recreate the main Fastr SVG banner - for simplicity, using a placeholder div with key elements */}
//             <div className="relative w-full pb-[295%]">
//                 <div className="absolute inset-0 flex flex-col items-center justify-center">
//                     <LowPriceGuaranteeSection />
//                     {/* Add images for custom order, design, rugs here */}
//                     <div className="grid grid-cols-3 gap-8 w-full max-w-6xl">
//                         {/* Placeholder images */}
//                         <Image src="https://images.getfastr.com/e0/fa/7a8b3ded4ac88a01f54f1f3a5c3c.jpg" alt="Design office" width={410} height={385} className="w-full h-auto" />
//                         <Image src="https://images.getfastr.com/76/ab/31b09a684bc49e25e70476ff146f.jpg" alt="Fabric samples" width={410} height={385} className="w-full h-auto" />
//                         <Image src="https://images.getfastr.com/29/5e/12cce9a645f4942da22870d9f1ae.jpg" alt="Rugs" width={410} height={385} className="w-full h-auto" />
//                     </div>
//                     <PromoCards />
//                 </div>
//             </div>

//             <GuestRoomSection />

//             <DiningSlider />

//             <div className="py-8">
//                 <h2 className="text-4xl font-light text-center text-[#333333] mb-4">Mix & Match</h2>
//                 <p className="text-xl font-light text-center text-[#333333] tracking-wider mb-8">Endless combinations for every occasion.</p>
//                 <div className="grid grid-cols-3 gap-8 text-center">
//                     <a href="https://starfurniture.com/dining-rooms/dining-tables" className="underline text-xl uppercase text-[#666666] tracking-wider">SHOP TABLES</a>
//                     <a href="https://starfurniture.com/dining-rooms/dining-chairs" className="underline text-xl uppercase text-[#666666] tracking-wider">SHOP CHAIRS</a>
//                     <a href="https://starfurniture.com/dining-rooms/sideboard-buffet-server" className="underline text-xl uppercase text-[#666666] tracking-wider">SHOP SIDEBOARDS</a>
//                 </div>
//             </div>

//             {/* Company is Coming Banner */}
//             <div className="bg-[#7e2d40] py-4">
//                 <h2 className="text-4xl font-light text-white text-center">Company is Coming - are you ready?</h2>
//             </div>

//             {/* Sectionals Section */}
//             <div className="py-8">
//                 <h2 className="text-4xl font-light text-center text-[#333333] mb-4">The Best Seat After Supper</h2>
//                 <p className="text-xl font-light text-center text-[#333333] tracking-wider mb-8">When the plates are cleared, keep the conversation going in style.</p>
//                 <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto">
//                     <a href="https://starfurniture.com/catalogsearch/result/?q=CONFETTI&rows=24&page=1">
//                         <Image src="https://images.getfastr.com/31/c5/32d4419142098babe0debdccff44.jpg" alt="White sectional" width={628} height={550} className="w-full h-auto" />
//                     </a>
//                     <a href="https://starfurniture.com/dash-leather-3-piece-power-reclining-sectional-vg-703387.html">
//                         <Image src="https://images.getfastr.com/23/9c/ac94bb64418c98080a15e2f115a9.jpg" alt="Mother and daughter on sofa" width={628} height={550} className="w-full h-auto" />
//                     </a>
//                 </div>
//                 <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto mt-8 text-center">
//                     <a href="https://starfurniture.com/living-rooms/sectionals?sofa_type=303" className="underline text-xl uppercase text-[#666666] tracking-wider">SHOP RECLINING SECTIONALS</a>
//                     <a href="https://starfurniture.com/living-rooms/sectionals?sofa_type=303" className="underline text-xl uppercase text-[#666666] tracking-wider">SHOP STATIONARY SECTIONALS</a>
//                 </div>
//             </div>

//             <Image src="https://images.getfastr.com/af/40/0a1d8d7646b780a6ebec3121eae2.jpg" alt="Modern living room" width={1920} height={625} className="w-full h-auto" />
//             <a href="https://starfurniture.com/oakley-5-piece-sectional-gp-u596.html" className="block w-full h-4 bg-transparent" /> {/* Overlay link */}

//             <FinancingSection />

//             <FooterSlider />

//             <ARTSAwardSection />


//         </main>
//     );
// }


'use client';

import Image from 'next/image';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// const LowPriceGuaranteeSection = () => (
//     <a href="https://starfurniture.com/whystar" className="block no-underline">
//         <div className="bg-[#B1B2B5] bg-opacity-15 px-4 py-8">
//             <h2 className="text-4xl font-light text-center text-[#333333] mb-2">Low Price Guarantee</h2>
//             <p className="text-xl font-light text-center text-[#333333] tracking-wider">
//                 We will refund for the price difference if you find the same item for less elsewhere within 30 days of purchase.*
//             </p>
//         </div>
//     </a>
// );

const PromoCards = () => (
    <div className="grid grid-cols-3 gap-8 py-8">
        <div className="text-center">
            <h3 className="text-4xl font-light text-[#333333] mb-2">Custom Order</h3>
            <a href="https://starfurniture.com/custom-order" className="underline text-xl uppercase text-[#666666] tracking-wider block">
                Learn more
            </a>
        </div>
        <div className="text-center">
            <h3 className="text-4xl font-light text-[#333333] mb-2">Design Services</h3>
            <a href="https://starfurniture.com/interior-designer-landing-page" className="underline text-xl uppercase text-[#666666] tracking-wider block">
                Learn more
            </a>
        </div>
        <div className="text-center">
            <h3 className="text-4xl font-light text-[#333333] mb-2">Feizy Fine Rugs</h3>
            <a href="https://starfurniture.com/decor-accents/rugs" className="underline text-xl uppercase text-[#666666] tracking-wider block">
                BROWSE NOW
            </a>
        </div>
    </div>
);



const DiningSlider = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    };

    const slides = [
        { img: 'https://images.getfastr.com/3b/6a/6a3a8dab4dc1bed1e08d8f5e0f42.jpg', title: 'Essence', link: 'https://starfurniture.com/catalogsearch/result/?q=Essence%20Dining' },
        { img: 'https://images.getfastr.com/91/61/f39ee56c464d85f3ba64c6e482fa.jpg', title: 'Plank Road', link: 'https://starfurniture.com/catalogsearch/result/?q=Plank%20Road%20Dining' },
        { img: 'https://images.getfastr.com/f6/05/79c07a494ad7b452430938bfa753.jpg', title: 'Weatherford', link: 'https://starfurniture.com/catalogsearch/result/?q=Weatherford%20Dining' },
        { img: 'https://images.getfastr.com/33/58/05ec313e4df4954c14e0237edc61.jpg', title: 'Commonwealth', link: 'https://starfurniture.com/catalogsearch/result/?q=Commonwealth+Dining&rows=24&page=1' },
    ];

    return (
        <div className="py-8">
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <a key={index} href={slide.link} className="block">
                        <div className="relative">
                            <Image src={slide.img} alt={slide.title} width={300} height={500} className="w-full h-auto" />
                            <div className="absolute bottom-0 left-0 right-0 bg-[#7e2d40] p-4">
                                <h3 className="text-4xl font-light text-white mb-2">{slide.title}</h3>
                            </div>
                        </div>
                    </a>
                ))}
            </Slider>
        </div>
    );
};

const FooterSlider = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
    };

    const slides = [
        { img: 'https://starfurniture.com/media/.renditions/wysiwyg/Category-Images/2023-FooterGraphics-Finals_SF_23-Footer_Delivery.png', title: 'DELIVERY', desc: 'All you need to know about your delivery.', link: '/delivery' },
        { img: 'https://starfurniture.com/media/.renditions/wysiwyg/Category-Images/2023-FooterGraphics-Finals_SF_23-Footer_Careers.png', title: 'CAREERS', desc: 'Your future starts here. View current openings.', link: '/careers' },
        { img: 'https://starfurniture.com/media/.renditions/wysiwyg/Category-Images/2023-FooterGraphics-Finals_SF_23-Footer_Finacing.png', title: 'FINANCING', desc: 'Interest-free financing options to suit your needs.', link: '/financing-offers' },
        { img: 'https://starfurniture.com/media/.renditions/wysiwyg/Category-Images/2023-FooterGraphics-Finals_SF_23-Footer_RoomPlanner.png', title: 'ROOM PLANNER', desc: 'Plan your room with ease. Start designing today!', link: 'https://starfurniture.roomplanner.com/' },
        { img: 'https://starfurniture.com/media/.renditions/wysiwyg/Category-Images/2023-FooterGraphics-Finals_SF_23-Footer_Design.png', title: 'THE TRADE', desc: 'Learn more about our Trade Program.', link: '/tothetrade' },
    ];

    return (
        <div className="py-8">
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index} className="px-4 text-center">
                        <a href={slide.link}>
                            <Image src={slide.img} alt={slide.title} width={185} height={123} className="mx-auto mb-2" />
                            <h3 className="text-xl font-semibold text-black mb-2">{slide.title}</h3>
                            <p className="text-sm text-black leading-relaxed">{slide.desc}</p>
                        </a>
                    </div>
                ))}
            </Slider>
        </div>
    );
};



const ARTSAwardSection = () => (
    <a href="https://starfurniture.com/whystar" className="block">
        <div className="bg-[#B1B2B5] bg-opacity-15 px-4 py-8">
            <p className="text-xl font-light text-center text-[#333333] tracking-wider">
                Star Furniture is a finalist for the 36th ARTS Awards — the only Houston furniture store honored!
            </p>
        </div>
    </a>
);

export default function HomePage() {
    return (
        <main className="w-full bg-white">

            <div className="w-full flex flex-col items-center justify-center py-12 px-4">

                <h2 className='text-4xl'>Product</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mt-8">
                    <Image src="https://images.getfastr.com/e0/fa/7a8b3ded4ac88a01f54f1f3a5c3c.jpg" alt="Design office" width={410} height={385} className="w-full h-auto" />
                    <Image src="https://images.getfastr.com/76/ab/31b09a684bc49e25e70476ff146f.jpg" alt="Fabric samples" width={410} height={385} className="w-full h-auto" />
                    <Image src="https://images.getfastr.com/29/5e/12cce9a645f4942da22870d9f1ae.jpg" alt="Rugs" width={410} height={385} className="w-full h-auto" />
                </div>

                <PromoCards />
            </div>

            {/* <GuestRoomSection /> */}

            <DiningSlider />





            <div className="py-8">
                <h2 className="text-4xl font-light text-center text-[#333333] mb-4">The Best Seat After Supper</h2>
                <p className="text-xl font-light text-center text-[#333333] tracking-wider mb-8">When the plates are cleared, keep the conversation going in style.</p>
                <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto">
                    <a href="https://starfurniture.com/catalogsearch/result/?q=CONFETTI&rows=24&page=1">
                        <Image src="https://images.getfastr.com/31/c5/32d4419142098babe0debdccff44.jpg" alt="White sectional" width={628} height={550} className="w-full h-auto" />
                    </a>
                    <a href="https://starfurniture.com/dash-leather-3-piece-power-reclining-sectional-vg-703387.html">
                        <Image src="https://images.getfastr.com/23/9c/ac94bb64418c98080a15e2f115a9.jpg" alt="Mother and daughter on sofa" width={628} height={550} className="w-full h-auto" />
                    </a>
                </div>
                <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto mt-8 text-center">
                    <a href="https://starfurniture.com/living-rooms/sectionals?sofa_type=303" className="underline text-xl uppercase text-[#666666] tracking-wider">SHOP RECLINING SECTIONALS</a>
                    <a href="https://starfurniture.com/living-rooms/sectionals?sofa_type=303" className="underline text-xl uppercase text-[#666666] tracking-wider">SHOP STATIONARY SECTIONALS</a>
                </div>
            </div>

            <Image src="https://images.getfastr.com/af/40/0a1d8d7646b780a6ebec3121eae2.jpg" alt="Modern living room" width={1920} height={625} className="w-full h-auto" />
            <a href="https://starfurniture.com/oakley-5-piece-sectional-gp-u596.html" className="block w-full h-4 bg-transparent" />

            {/* <FinancingSection /> */}

            <FooterSlider />

            <ARTSAwardSection />
        </main>
    );
}
