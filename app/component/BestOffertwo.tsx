// // components/HotDeals.tsx
// import Link from 'next/link';
// import Image from 'next/image';

// type DealItem = {
//     title: string;
//     price: string;
//     link: string;
//     image: string;
// };

// const deals: DealItem[] = [
//     {
//         title: 'HOME APPLIANCES',
//         price: '$799',
//         link: '/product-category/appliances/',
//         image: 'https://yourcdn.com/images/home-appliances.jpg',
//     },
//     {
//         title: 'BOOKSHELVES & CABINETS',
//         price: '$499',
//         link: '/product-category/home-office/bookshelves-and-cabinets/',
//         image: 'https://yourcdn.com/images/bookshelves.jpg',
//     },
//     {
//         title: 'MATTRESSES',
//         price: '$999',
//         link: '/product-category/mattresses/',
//         image: 'https://yourcdn.com/images/mattresses.jpg',
//     },
// ];

// export default function BestOffertwo() {
//     return (
//         <section className="py-10 bg-gray-50">
//             <div className="container mx-auto px-4">
//                 {/* Header */}
//                 <div className="flex justify-between items-center mb-6">
//                     <h4 className="text-xl font-bold">Hot Deals</h4>
//                     <Link
//                         href="/promos"
//                         className="text-blue-600 flex items-center gap-2 hover:underline"
//                     >
//                         View Promotions <i className="far fa-plus" />
//                     </Link>
//                 </div>

//                 {/* Cards */}
//                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {deals.map((deal, index) => (
//                         <div
//                             key={index}
//                             className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between"
//                         >
//                             <div className="mb-4">
//                                 <Image
//                                     src={deal.image}
//                                     alt={deal.title}
//                                     width={600}
//                                     height={400}
//                                     className="rounded-lg object-cover w-full h-48"
//                                 />
//                             </div>

//                             <div className="mb-4">
//                                 <h4 className="text-lg font-bold">{deal.title}</h4>
//                                 <p className="text-gray-500">Starting from</p>
//                                 <p className="text-xl font-semibold text-blue-600">{deal.price}</p>
//                             </div>

//                             <Link
//                                 href={deal.link}
//                                 className="inline-flex items-center justify-center text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition"
//                             >
//                                 Shop Now <i className="far fa-plus ml-2" />
//                             </Link>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }


"use client";

import Image from "next/image";
import Link from "next/link";

const BestOffertwo = () => {
    const deals = [
        {
            id: 1,
            title: "HOME APPLIANCES",
            subtitle: "Starting from",
            price: "$799",
            link: "/product-category/appliances/",
            image: "/images/appliances.jpg",
        },
        {
            id: 2,
            title: "BOOKSHELVES & CABINETS",
            subtitle: "Starting from",
            price: "$499",
            link: "/product-category/home-office/bookshelves-and-cabinets/",
            image: "/images/bookshelves.jpg",
        },
        {
            id: 3,
            title: "MATTRESSES",
            subtitle: "Starting from",
            price: "$999",
            link: "/product-category/mattresses/",
            image: "/images/mattress.jpg",
        },
    ];

    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                {/* Header */}
                <div className="flex flex-wrap items-center justify-between mb-10">
                    <h4 className="text-2xl font-bold text-gray-800">Hot Deals</h4>
                    <Link
                        href="/promos/"
                        className="flex items-center gap-1 text-primary hover:underline text-sm font-medium"
                    >
                        <span>View Promotions</span>
                        <i className="far fa-plus text-xs"></i>
                    </Link>
                </div>

                {/* Deals Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {deals.map((deal) => (
                        <div
                            key={deal.id}
                            className="relative group rounded-2xl overflow-hidden shadow hover:shadow-lg transition-shadow duration-300"
                        >
                            <Image
                                src={deal.image}
                                alt={deal.title}
                                width={500}
                                height={400}
                                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                            />

                            {/* Content Overlay */}
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 flex flex-col justify-end p-6">
                                <h4 className="text-white text-xl font-bold mb-1">{deal.title}</h4>
                                <p className="text-gray-200 text-sm">{deal.subtitle}</p>
                                <p className="text-white text-2xl font-semibold mb-4">{deal.price}</p>
                                <Link
                                    href={deal.link}
                                    className="inline-flex items-center gap-2 bg-white text-gray-900 px-5 py-2 rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-all"
                                >
                                    Shop Now <i className="far fa-plus text-xs"></i>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BestOffertwo;
