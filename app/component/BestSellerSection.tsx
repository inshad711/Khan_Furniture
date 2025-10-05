// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';

// interface Product {
//     id: string;
//     title: string;
//     vendor: string;
//     price: number;
//     originalPrice: number;
//     discount: string;
//     imageMain: string;
//     imageHover: string;
//     url: string;
//     hasOptions: boolean;
// }

// const sofas: Product[] = [
//     {
//         id: '1',
//         title: 'Paddington Fabric Single Seater Sofa',
//         vendor: 'HomeTown',
//         price: 14900,
//         originalPrice: 36900,
//         discount: '59% Off',
//         imageMain: 'https://www.hometown.in/cdn/shop/files/1_17c113e1-5ddf-4d18-bc33-669dc9a2da33.jpg?v=1758798716&width=1100',
//         imageHover: 'https://www.hometown.in/cdn/shop/files/3_88b4fea2-1804-4021-adc9-2c2903b1cf02.jpg?v=1758798716&width=1397',
//         url: '/products/paddington-fabric-single-seater-sofa',
//         hasOptions: true,
//     },
//     {
//         id: '2',
//         title: 'Alexa Half Leather Single Seater Sofa in Light Grey Colour',
//         vendor: 'HomeTown',
//         price: 39900,
//         originalPrice: 99900,
//         discount: '60% Off',
//         imageMain: 'https://www.hometown.in/cdn/shop/files/1_e46493c9-34ca-435e-ac2d-e1dadfd3e377.jpg?v=1747207078&width=2000',
//         imageHover: 'https://www.hometown.in/cdn/shop/files/2_9cf91967-1447-47a9-a58e-a20fc096e102.jpg?v=1747207079&width=2000',
//         url: '/products/alexa-half-leather-single-seater-sofa-in-light-grey-colour',
//         hasOptions: false,
//     },
//     {
//         id: '3',
//         title: 'Garcia Fabric Three Seater Sofa',
//         vendor: 'HomeTown',
//         price: 31000,
//         originalPrice: 74900,
//         discount: '58% Off',
//         imageMain: 'https://www.hometown.in/cdn/shop/files/6000087515001_LS.jpg?v=1758776652&width=1600',
//         imageHover: 'https://www.hometown.in/cdn/shop/files/IMG_0524.jpg?v=1758776652&width=1600',
//         url: '/products/garcia-fabric-three-seater-sofa',
//         hasOptions: true,
//     },
//     {
//         id: '4',
//         title: 'Garcia Fabric Two Seater Sofa',
//         vendor: 'HomeTown',
//         price: 23900,
//         originalPrice: 56900,
//         discount: '57% Off',
//         imageMain: 'https://www.hometown.in/cdn/shop/files/6000087742001_LS.jpg?v=1758776316&width=1600',
//         imageHover: 'https://www.hometown.in/cdn/shop/files/IMG_0463.jpg?v=1758776316&width=1600',
//         url: '/products/garcia-fabric-two-seater-sofa',
//         hasOptions: true,
//     },
//     {
//         id: '5',
//         title: 'Garcia Fabric Single Seater Sofa',
//         vendor: 'HomeTown',
//         price: 14900,
//         originalPrice: 36900,
//         discount: '59% Off',
//         imageMain: 'https://www.hometown.in/cdn/shop/files/6000087506001_LS.jpg?v=1758775925&width=1600',
//         imageHover: 'https://www.hometown.in/cdn/shop/files/IMG_0438.jpg?v=1758775925&width=1600',
//         url: '/products/garcia-fabric-single-seater-sofa',
//         hasOptions: true,
//     },
//     {
//         id: '6',
//         title: 'Bradford Fabric Two Seater Sofa in Beige Colour',
//         vendor: 'HomeTown',
//         price: 29900,
//         originalPrice: 97900,
//         discount: '69% Off',
//         imageMain: 'https://www.hometown.in/cdn/shop/files/1_b62dff9a-51e3-4de0-befc-8d9b43c1e09d.jpg?v=1747205297&width=728',
//         imageHover: 'https://www.hometown.in/cdn/shop/files/2_c233a2a1-2ca0-4575-9fb8-811f27b38d6e.jpg?v=1747205297&width=1500',
//         url: '/products/bradford-fabric-two-seater-sofa-in-beige-colour',
//         hasOptions: false,
//     },
//     {
//         id: '7',
//         title: 'Riga Fabric 1 Seater Sofa in Beige Colour',
//         vendor: 'HomeTown',
//         price: 18900,
//         originalPrice: 75000,
//         discount: '74% Off',
//         imageMain: 'https://www.hometown.in/cdn/shop/files/Glasgow_1Set_HD.jpg?v=1758271360&width=2196',
//         imageHover: 'https://www.hometown.in/cdn/shop/files/Glasgow_10.jpg?v=1758271360&width=4442',
//         url: '/products/riga-fabric-1-seater-sofa-in-beige-colour',
//         hasOptions: false,
//     },
//     {
//         id: '8',
//         title: 'Manchester Fabric 3 Seater Sofa in Grey Colour',
//         vendor: 'HomeTown',
//         price: 26000,
//         originalPrice: 118000,
//         discount: '77% Off',
//         imageMain: 'https://www.hometown.in/cdn/shop/files/Baltimor_3Set_HD.jpg?v=1754761968&width=2828',
//         imageHover: 'https://www.hometown.in/cdn/shop/files/Baltimor_1.jpg?v=1754761968&width=4809',
//         url: '/products/manchester-fabric-3-seater-sofa-in-grey-colour',
//         hasOptions: false,
//     },
//     {
//         id: '9',
//         title: 'Manchester Fabric 2 Seater Sofa in Grey Colour',
//         vendor: 'HomeTown',
//         price: 19900,
//         originalPrice: 90000,
//         discount: '77% Off',
//         imageMain: 'https://www.hometown.in/cdn/shop/files/MANCHESTER_000.jpg?v=1754761968&width=1600',
//         imageHover: 'https://www.hometown.in/cdn/shop/files/Baltimor_5.jpg?v=1754761968&width=4477',
//         url: '/products/manchester-fabric-2-seater-sofa-in-grey-colour',
//         hasOptions: false,
//     },
//     {
//         id: '10',
//         title: 'Manchester Fabric 1 Seater Sofa in Grey Colour',
//         vendor: 'HomeTown',
//         price: 14900,
//         originalPrice: 61000,
//         discount: '75% Off',
//         imageMain: 'https://www.hometown.in/cdn/shop/files/Baltimor_1Set_HD.jpg?v=1754761968&width=2563',
//         imageHover: 'https://www.hometown.in/cdn/shop/files/Baltimor_9.jpg?v=1754761968&width=4287',
//         url: '/products/manchester-fabric-1-seater-sofa-in-grey-colour',
//         hasOptions: false,
//     },
// ];

// const recliners: Product[] = [
//     {
//         id: '11',
//         title: 'Bradford Fabric Two Seater Recliner in Beige Colour',
//         vendor: 'HomeTown',
//         price: 40000,
//         originalPrice: 129900,
//         discount: '69% Off',
//         imageMain: 'https://www.hometown.in/cdn/shop/files/1_8e1308b2-614c-4e59-98b7-f72c2c5534e9.jpg?v=1758273291&width=728',
//         imageHover: 'https://www.hometown.in/cdn/shop/files/2_ea8614cd-e1ca-4478-804e-c8840d5eaf57.jpg?v=1758273291&width=1100',
//         url: '/products/bradford-fabric-two-seater-recliner-in-beige-colour',
//         hasOptions: false,
//     },
//     {
//         id: '12',
//         title: 'Nuvia Half Leather 3 Seater Triple Electric Zero Gravity Recliner in Grey Colour',
//         vendor: 'HomeTown',
//         price: 179900,
//         originalPrice: 450000,
//         discount: '60% Off',
//         imageMain: 'https://www.hometown.in/cdn/shop/files/enhanced_98fca9ac-6ac8-4712-9fab-db574a87919d.png?v=1758883478&width=2048',
//         imageHover: 'https://www.hometown.in/cdn/shop/files/Z6A2223-Photoroom.png?v=1758883478&width=1280',
//         url: '/products/nuvia-half-leather-3-seater-double-electric-recliner',
//         hasOptions: true,
//     },
//     {
//         id: '13',
//         title: 'Nuvia Half Leather Single Seater Double Electric Recliner',
//         vendor: 'HomeTown',
//         price: 89900,
//         originalPrice: 230000,
//         discount: '60% Off',
//         imageMain: 'https://www.hometown.in/cdn/shop/files/13enhanced.png?v=1758883097&width=2048',
//         imageHover: 'https://www.hometown.in/cdn/shop/files/Z6A2213-Photoroom.png?v=1758883097&width=853',
//         url: '/products/nuvia-half-leather-single-seater-double-electric-recliner',
//         hasOptions: true,
//     },
//     {
//         id: '14',
//         title: 'Enfield Fabric 3 Seater Recliner in Grey Colour',
//         vendor: 'HomeTown',
//         price: 70000,
//         originalPrice: 185900,
//         discount: '62% Off',
//         imageMain: 'https://www.hometown.in/cdn/shop/files/1_965449f4-1037-49f4-933a-a39140460691.jpg?v=1758882734&width=2000',
//         imageHover: 'https://www.hometown.in/cdn/shop/files/2_84222a28-7f31-451a-880c-d0acfb499ce2.jpg?v=1758882734&width=2000',
//         url: '/products/enfield-fabric-3-seater-recliner-in-grey-colour-1',
//         hasOptions: true,
//     },
//     {
//         id: '15',
//         title: 'Tigris Leatherette Two Seater Recliner in Brown Colour',
//         vendor: 'HomeTown',
//         price: 74900,
//         originalPrice: 154000,
//         discount: '51% Off',
//         imageMain: 'https://www.hometown.in/cdn/shop/files/1_4883a469-e925-4a7b-9215-19c91a000794.jpg?v=1758273385&width=2000',
//         imageHover: 'https://www.hometown.in/cdn/shop/files/2_f25ff23e-c727-4df4-8647-55d88000ddb5.jpg?v=1758273385&width=1024',
//         url: '/products/tigris-leatherette-two-seater-recliner-in-brown-colour',
//         hasOptions: false,
//     },
//     {
//         id: '16',
//         title: 'Tigris Leatherette Single Seater Recliner in Brown Colour',
//         vendor: 'HomeTown',
//         price: 37900,
//         originalPrice: 84900,
//         discount: '55% Off',
//         imageMain: 'https://www.hometown.in/cdn/shop/files/1_97e8f228-049a-462e-9838-3502bd6ac0d7.jpg?v=1758273385&width=2000',
//         imageHover: 'https://www.hometown.in/cdn/shop/files/2_ae9a2d06-dc86-492e-8253-f1cdaef53072.jpg?v=1758273385&width=1024',
//         url: '/products/tigris-leatherette-single-seater-recliner-in-brown-colour',
//         hasOptions: false,
//     },
//     {
//         id: '17',
//         title: 'Liora Single Seater Fabric Rocker + Recliner in Brown Colour',
//         vendor: 'HomeTown',
//         price: 32900,
//         originalPrice: 122900,
//         discount: '73% Off',
//         imageMain: 'https://www.hometown.in/cdn/shop/files/LioraSingleseater.png?v=1758620634&width=1024',
//         imageHover: 'https://www.hometown.in/cdn/shop/files/00333.png?v=1758620634&width=1150',
//         url: '/products/liora-single-seater-fabric-rocker-recliner-in-brown-colour',
//         hasOptions: false,
//     },
//     {
//         id: '18',
//         title: 'Zenora 2 Seater Double Electric Recliner With Consoel in Light Brown Colour',
//         vendor: 'HomeTown',
//         price: 129900,
//         originalPrice: 531900,
//         discount: '75% Off',
//         imageMain: 'https://www.hometown.in/cdn/shop/files/ChatGPTImageMay8_2025_12_52_26PM.png?v=1756924276&width=1024',
//         imageHover: 'https://www.hometown.in/cdn/shop/files/5_e6575c60-d9df-4214-b963-201df2c41759.jpg?v=1756924276&width=1024',
//         url: '/products/zenora-2-seater-double-electric-recliner-withconsol-in-light-brown',
//         hasOptions: false,
//     },
//     {
//         id: '19',
//         title: 'Calvio Half Leather Single Seater Electric Recliner in Burgundy Colour',
//         vendor: 'HomeTown',
//         price: 59900,
//         originalPrice: 160000,
//         discount: '62% Off',
//         imageMain: 'https://www.hometown.in/cdn/shop/files/enhanced_015a4aa0-aeb5-4e42-898d-e4ead5358dfe.png?v=1755761487&width=2048',
//         imageHover: 'https://www.hometown.in/cdn/shop/files/706961524_L321_13-Photoroom.png?v=1755761487&width=742',
//         url: '/products/calvio-half-leather-single-seater-electric-recliner-burgundy',
//         hasOptions: false,
//     },
//     {
//         id: '20',
//         title: 'Murray Half Leather Single Seater Recliner in Beige Colour',
//         vendor: 'HomeTown',
//         price: 44900,
//         originalPrice: 117900,
//         discount: '61% Off',
//         imageMain: 'https://www.hometown.in/cdn/shop/files/1_de2b59c8-5807-413f-860e-a776d23d5bad.jpg?v=1758273335&width=1100',
//         imageHover: 'https://www.hometown.in/cdn/shop/files/2_3de84b5c-57be-4946-82f1-25284a006aac.jpg?v=1758273335&width=1600',
//         url: '/products/murray-half-leather-single-seater-recliner-in-beige-colour',
//         hasOptions: false,
//     },
// ];

// const tabs = [
//     { id: 'sofas', label: 'Sofas', products: sofas },
//     { id: 'recliners', label: 'Recliners', products: recliners },
//     { id: 'wardrobes', label: 'Wardrobes', products: [] },
//     { id: 'dressing-tables', label: 'Dressing Tables', products: [] },
//     { id: 'center-tables', label: 'Center Tables', products: [] },
// ];

// export default function BestsellersSection() {
//     const [activeTab, setActiveTab] = useState('sofas');

//     const currentProducts = tabs.find(tab => tab.id === activeTab)?.products || [];

//     return (
//         <section className="py-16 bg-white">
//             <div className="max-w-7xl mx-auto px-4">
//                 <div className="text-center mb-12">
//                     <h2 className="text-4xl font-bold text-gray-900 mb-4">
//                         Our <em className="text-red-500">Bestsellers</em>
//                     </h2>
//                     <div className="flex justify-center">
//                         <div className="flex flex-wrap justify-center gap-4">
//                             {tabs.map(tab => (
//                                 <button
//                                     key={tab.id}
//                                     onClick={() => setActiveTab(tab.id)}
//                                     className={`px-6 py-2 border-b-2 font-medium transition-colors ${activeTab === tab.id
//                                         ? 'border-red-500 text-red-500'
//                                         : 'border-transparent text-gray-500 hover:text-gray-700'
//                                         }`}
//                                 >
//                                     {tab.label}
//                                 </button>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
//                     {currentProducts.map(product => (
//                         <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow">
//                             <div className="relative overflow-hidden aspect-square">
//                                 <Image
//                                     src={product.imageMain}
//                                     alt={product.title}
//                                     fill
//                                     className="object-cover group-hover:scale-105 transition-transform duration-300"
//                                 />
//                                 {product.imageHover && (
//                                     <Image
//                                         src={product.imageHover}
//                                         alt={product.title}
//                                         fill
//                                         className="object-cover hidden group-hover:block absolute inset-0 transition-opacity duration-300"
//                                     />
//                                 )}
//                                 <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
//                                     {product.discount}
//                                 </span>
//                             </div>
//                             <div className="p-4">
//                                 <h3 className="text-sm font-semibold text-gray-900 mb-2 line-clamp-2">
//                                     <a href={product.url} className="hover:text-red-500 transition-colors">
//                                         {product.title}
//                                     </a>
//                                 </h3>
//                                 <p className="text-xs text-gray-500 mb-2">{product.vendor}</p>
//                                 <div className="flex items-center justify-between">
//                                     <div>
//                                         <span className="text-lg font-bold text-gray-900">₹{product.price.toLocaleString()}</span>
//                                         <span className="ml-2 text-sm text-gray-500 line-through">₹{product.originalPrice.toLocaleString()}</span>
//                                     </div>
//                                     <button
//                                         className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${product.hasOptions
//                                             ? 'bg-white text-black border border-black hover:bg-black hover:text-white'
//                                             : 'bg-black text-white hover:bg-gray-800'
//                                             }`}
//                                     >
//                                         {product.hasOptions ? 'Choose options' : 'Add to cart'}
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }


// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';

// interface Product {
//     id: string;
//     title: string;
//     vendor: string;
//     price: number;
//     originalPrice: number;
//     discount: string;
//     imageMain: string;
//     imageHover: string;
//     url: string;
//     hasOptions: boolean;
// }


// const sofas: Product[] = [
//     {
//         id: '1',
//         title: 'Paddington Fabric Single Seater Sofa',
//         vendor: 'HomeTown',
//         price: 14900,
//         originalPrice: 36900,
//         discount: '59% Off',
//         imageMain: 'https://www.hometown.in/cdn/shop/files/1_17c113e1-5ddf-4d18-bc33-669dc9a2da33.jpg?v=1758798716&width=1100',
//         imageHover: 'https://www.hometown.in/cdn/shop/files/3_88b4fea2-1804-4021-adc9-2c2903b1cf02.jpg?v=1758798716&width=1397',
//         url: '/products/paddington-fabric-single-seater-sofa',
//         hasOptions: true,
//     },
//     {
//         id: '2',
//         title: 'Alexa Half Leather Single Seater Sofa in Light Grey Colour',
//         vendor: 'HomeTown',
//         price: 39900,
//         originalPrice: 99900,
//         discount: '60% Off',
//         imageMain: 'https://www.hometown.in/cdn/shop/files/1_e46493c9-34ca-435e-ac2d-e1dadfd3e377.jpg?v=1747207078&width=2000',
//         imageHover: 'https://www.hometown.in/cdn/shop/files/2_9cf91967-1447-47a9-a58e-a20fc096e102.jpg?v=1747207079&width=2000',
//         url: '/products/alexa-half-leather-single-seater-sofa-in-light-grey-colour',
//         hasOptions: false,
//     },
//     {
//         id: '3',
//         title: 'Garcia Fabric Three Seater Sofa',
//         vendor: 'HomeTown',
//         price: 31000,
//         originalPrice: 74900,
//         discount: '58% Off',
//         imageMain: 'https://www.hometown.in/cdn/shop/files/6000087515001_LS.jpg?v=1758776652&width=1600',
//         imageHover: 'https://www.hometown.in/cdn/shop/files/IMG_0524.jpg?v=1758776652&width=1600',
//         url: '/products/garcia-fabric-three-seater-sofa',
//         hasOptions: true,
//     },
//     {
//         id: '4',
//         title: 'Garcia Fabric Two Seater Sofa',
//         vendor: 'HomeTown',
//         price: 23900,
//         originalPrice: 56900,
//         discount: '57% Off',
//         imageMain: 'https://www.hometown.in/cdn/shop/files/6000087742001_LS.jpg?v=1758776316&width=1600',
//         imageHover: 'https://www.hometown.in/cdn/shop/files/IMG_0463.jpg?v=1758776316&width=1600',
//         url: '/products/garcia-fabric-two-seater-sofa',
//         hasOptions: true,
//     },
//     {
//         id: '5',
//         title: 'Garcia Fabric Single Seater Sofa',
//         vendor: 'HomeTown',
//         price: 14900,
//         originalPrice: 36900,
//         discount: '59% Off',
//         imageMain: 'https://www.hometown.in/cdn/shop/files/6000087506001_LS.jpg?v=1758775925&width=1600',
//         imageHover: 'https://www.hometown.in/cdn/shop/files/IMG_0438.jpg?v=1758775925&width=1600',
//         url: '/products/garcia-fabric-single-seater-sofa',
//         hasOptions: true,
//     },
//     {
//         id: '6',
//         title: 'Bradford Fabric Two Seater Sofa in Beige Colour',
//         vendor: 'HomeTown',
//         price: 29900,
//         originalPrice: 97900,
//         discount: '69% Off',
//         imageMain: 'https://www.hometown.in/cdn/shop/files/1_b62dff9a-51e3-4de0-befc-8d9b43c1e09d.jpg?v=1747205297&width=728',
//         imageHover: 'https://www.hometown.in/cdn/shop/files/2_c233a2a1-2ca0-4575-9fb8-811f27b38d6e.jpg?v=1747205297&width=1500',
//         url: '/products/bradford-fabric-two-seater-sofa-in-beige-colour',
//         hasOptions: false,
//     },
//     {
//         id: '7',
//         title: 'Riga Fabric 1 Seater Sofa in Beige Colour',
//         vendor: 'HomeTown',
//         price: 18900,
//         originalPrice: 75000,
//         discount: '74% Off',
//         imageMain: 'https://www.hometown.in/cdn/shop/files/Glasgow_1Set_HD.jpg?v=1758271360&width=2196',
//         imageHover: 'https://www.hometown.in/cdn/shop/files/Glasgow_10.jpg?v=1758271360&width=4442',
//         url: '/products/riga-fabric-1-seater-sofa-in-beige-colour',
//         hasOptions: false,
//     },
//     {
//         id: '8',
//         title: 'Manchester Fabric 3 Seater Sofa in Grey Colour',
//         vendor: 'HomeTown',
//         price: 26000,
//         originalPrice: 118000,
//         discount: '77% Off',
//         imageMain: 'https://www.hometown.in/cdn/shop/files/Baltimor_3Set_HD.jpg?v=1754761968&width=2828',
//         imageHover: 'https://www.hometown.in/cdn/shop/files/Baltimor_1.jpg?v=1754761968&width=4809',
//         url: '/products/manchester-fabric-3-seater-sofa-in-grey-colour',
//         hasOptions: false,
//     },
//     {
//         id: '9',
//         title: 'Manchester Fabric 2 Seater Sofa in Grey Colour',
//         vendor: 'HomeTown',
//         price: 19900,
//         originalPrice: 90000,
//         discount: '77% Off',
//         imageMain: 'https://www.hometown.in/cdn/shop/files/MANCHESTER_000.jpg?v=1754761968&width=1600',
//         imageHover: 'https://www.hometown.in/cdn/shop/files/Baltimor_5.jpg?v=1754761968&width=4477',
//         url: '/products/manchester-fabric-2-seater-sofa-in-grey-colour',
//         hasOptions: false,
//     },
//     {
//         id: '10',
//         title: 'Manchester Fabric 1 Seater Sofa in Grey Colour',
//         vendor: 'HomeTown',
//         price: 14900,
//         originalPrice: 61000,
//         discount: '75% Off',
//         imageMain: 'https://www.hometown.in/cdn/shop/files/Baltimor_1Set_HD.jpg?v=1754761968&width=2563',
//         imageHover: 'https://www.hometown.in/cdn/shop/files/Baltimor_9.jpg?v=1754761968&width=4287',
//         url: '/products/manchester-fabric-1-seater-sofa-in-grey-colour',
//         hasOptions: false,
//     },
// ];

// const recliners: Product[] = [
//     {
//         id: '11',
//         title: 'Bradford Fabric Two Seater Recliner in Beige Colour',
//         vendor: 'HomeTown',
//         price: 40000,
//         originalPrice: 129900,
//         discount: '69% Off',
//         imageMain: 'https://www.hometown.in/cdn/shop/files/1_8e1308b2-614c-4e59-98b7-f72c2c5534e9.jpg?v=1758273291&width=728',
//         imageHover: 'https://www.hometown.in/cdn/shop/files/2_ea8614cd-e1ca-4478-804e-c8840d5eaf57.jpg?v=1758273291&width=1100',
//         url: '/products/bradford-fabric-two-seater-recliner-in-beige-colour',
//         hasOptions: false,
//     },
//     {
//         id: '12',
//         title: 'Nuvia Half Leather 3 Seater Triple Electric Zero Gravity Recliner in Grey Colour',
//         vendor: 'HomeTown',
//         price: 179900,
//         originalPrice: 450000,
//         discount: '60% Off',
//         imageMain: 'https://www.hometown.in/cdn/shop/files/enhanced_98fca9ac-6ac8-4712-9fab-db574a87919d.png?v=1758883478&width=2048',
//         imageHover: 'https://www.hometown.in/cdn/shop/files/Z6A2223-Photoroom.png?v=1758883478&width=1280',
//         url: '/products/nuvia-half-leather-3-seater-double-electric-recliner',
//         hasOptions: true,
//     },
//     {
//         id: '13',
//         title: 'Nuvia Half Leather Single Seater Double Electric Recliner',
//         vendor: 'HomeTown',
//         price: 89900,
//         originalPrice: 230000,
//         discount: '60% Off',
//         imageMain: 'https://www.hometown.in/cdn/shop/files/13enhanced.png?v=1758883097&width=2048',
//         imageHover: 'https://www.hometown.in/cdn/shop/files/Z6A2213-Photoroom.png?v=1758883097&width=853',
//         url: '/products/nuvia-half-leather-single-seater-double-electric-recliner',
//         hasOptions: true,
//     },
//     {
//         id: '14',
//         title: 'Enfield Fabric 3 Seater Recliner in Grey Colour',
//         vendor: 'HomeTown',
//         price: 70000,
//         originalPrice: 185900,
//         discount: '62% Off',
//         imageMain: 'https://www.hometown.in/cdn/shop/files/1_965449f4-1037-49f4-933a-a39140460691.jpg?v=1758882734&width=2000',
//         imageHover: 'https://www.hometown.in/cdn/shop/files/2_84222a28-7f31-451a-880c-d0acfb499ce2.jpg?v=1758882734&width=2000',
//         url: '/products/enfield-fabric-3-seater-recliner-in-grey-colour-1',
//         hasOptions: true,
//     },
//     {
//         id: '15',
//         title: 'Tigris Leatherette Two Seater Recliner in Brown Colour',
//         vendor: 'HomeTown',
//         price: 74900,
//         originalPrice: 154000,
//         discount: '51% Off',
//         imageMain: 'https://www.hometown.in/cdn/shop/files/1_4883a469-e925-4a7b-9215-19c91a000794.jpg?v=1758273385&width=2000',
//         imageHover: 'https://www.hometown.in/cdn/shop/files/2_f25ff23e-c727-4df4-8647-55d88000ddb5.jpg?v=1758273385&width=1024',
//         url: '/products/tigris-leatherette-two-seater-recliner-in-brown-colour',
//         hasOptions: false,
//     },
//     {
//         id: '16',
//         title: 'Tigris Leatherette Single Seater Recliner in Brown Colour',
//         vendor: 'HomeTown',
//         price: 37900,
//         originalPrice: 84900,
//         discount: '55% Off',
//         imageMain: 'https://www.hometown.in/cdn/shop/files/1_97e8f228-049a-462e-9838-3502bd6ac0d7.jpg?v=1758273385&width=2000',
//         imageHover: 'https://www.hometown.in/cdn/shop/files/2_ae9a2d06-dc86-492e-8253-f1cdaef53072.jpg?v=1758273385&width=1024',
//         url: '/products/tigris-leatherette-single-seater-recliner-in-brown-colour',
//         hasOptions: false,
//     },
//     {
//         id: '17',
//         title: 'Liora Single Seater Fabric Rocker + Recliner in Brown Colour',
//         vendor: 'HomeTown',
//         price: 32900,
//         originalPrice: 122900,
//         discount: '73% Off',
//         imageMain: 'https://www.hometown.in/cdn/shop/files/LioraSingleseater.png?v=1758620634&width=1024',
//         imageHover: 'https://www.hometown.in/cdn/shop/files/00333.png?v=1758620634&width=1150',
//         url: '/products/liora-single-seater-fabric-rocker-recliner-in-brown-colour',
//         hasOptions: false,
//     },
//     {
//         id: '18',
//         title: 'Zenora 2 Seater Double Electric Recliner With Consoel in Light Brown Colour',
//         vendor: 'HomeTown',
//         price: 129900,
//         originalPrice: 531900,
//         discount: '75% Off',
//         imageMain: 'https://www.hometown.in/cdn/shop/files/ChatGPTImageMay8_2025_12_52_26PM.png?v=1756924276&width=1024',
//         imageHover: 'https://www.hometown.in/cdn/shop/files/5_e6575c60-d9df-4214-b963-201df2c41759.jpg?v=1756924276&width=1024',
//         url: '/products/zenora-2-seater-double-electric-recliner-withconsol-in-light-brown',
//         hasOptions: false,
//     },
//     {
//         id: '19',
//         title: 'Calvio Half Leather Single Seater Electric Recliner in Burgundy Colour',
//         vendor: 'HomeTown',
//         price: 59900,
//         originalPrice: 160000,
//         discount: '62% Off',
//         imageMain: 'https://www.hometown.in/cdn/shop/files/enhanced_015a4aa0-aeb5-4e42-898d-e4ead5358dfe.png?v=1755761487&width=2048',
//         imageHover: 'https://www.hometown.in/cdn/shop/files/706961524_L321_13-Photoroom.png?v=1755761487&width=742',
//         url: '/products/calvio-half-leather-single-seater-electric-recliner-burgundy',
//         hasOptions: false,
//     },
//     {
//         id: '20',
//         title: 'Murray Half Leather Single Seater Recliner in Beige Colour',
//         vendor: 'HomeTown',
//         price: 44900,
//         originalPrice: 117900,
//         discount: '61% Off',
//         imageMain: 'https://www.hometown.in/cdn/shop/files/1_de2b59c8-5807-413f-860e-a776d23d5bad.jpg?v=1758273335&width=1100',
//         imageHover: 'https://www.hometown.in/cdn/shop/files/2_3de84b5c-57be-4946-82f1-25284a006aac.jpg?v=1758273335&width=1600',
//         url: '/products/murray-half-leather-single-seater-recliner-in-beige-colour',
//         hasOptions: false,
//     },
// ];
// const tabs = [
//     { id: 'sofas', label: 'Sofas', products: sofas },
//     { id: 'recliners', label: 'Recliners', products: recliners },
//     { id: 'wardrobes', label: 'Wardrobes', products: [] },
//     { id: 'dressing-tables', label: 'Dressing Tables', products: [] },
//     { id: 'center-tables', label: 'Center Tables', products: [] },
// ];

// export default function BestsellersSection() {
//     const [activeTab, setActiveTab] = useState('sofas');
//     const currentProducts = tabs.find(tab => tab.id === activeTab)?.products || [];

//     return (
//         <section className="py-12 md:py-16 bg-white">
//             <div className="templateContainer px-4 sm:px-6 lg:px-8">
//                 {/* Title & Tabs */}
//                 <div className="text-center mb-8 md:mb-12">
//                     <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
//                         Our <em className="text-red-500">Bestsellers</em>
//                     </h2>
//                     <div className="flex justify-center">
//                         <div className="flex flex-wrap gap-2 sm:gap-4 justify-center">
//                             {tabs.map(tab => (
//                                 <button
//                                     key={tab.id}
//                                     onClick={() => setActiveTab(tab.id)}
//                                     className={`px-4 sm:px-6 py-2 text-sm sm:text-base border-b-2 font-medium transition-colors ${activeTab === tab.id
//                                         ? 'border-red-500 text-red-500'
//                                         : 'border-transparent text-gray-500 hover:text-gray-700'
//                                         }`}
//                                 >
//                                     {tab.label}
//                                 </button>
//                             ))}
//                         </div>
//                     </div>
//                 </div>

//                 {/* Product Grid */}
//                 <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
//                     {currentProducts.map(product => (
//                         <div
//                             key={product.id}
//                             className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow group overflow-hidden"
//                         >
//                             {/* Image Container */}
//                             <div className="relative w-full aspect-square overflow-hidden">
//                                 {/* Main Image */}
//                                 <Image
//                                     src={product.imageMain}
//                                     alt={product.title}
//                                     fill
//                                     sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
//                                     className="object-cover transition-opacity duration-300 group-hover:opacity-0"
//                                 />
//                                 {/* Hover Image */}
//                                 {product.imageHover && (
//                                     <Image
//                                         src={product.imageHover}
//                                         alt={product.title}
//                                         fill
//                                         className="object-cover opacity-0 group-hover:opacity-100 absolute inset-0 transition-opacity duration-300"
//                                     />
//                                 )}
//                                 {/* Discount Badge */}
//                                 <span className="absolute top-2 left-2 bg-red-500 text-white text-xs sm:text-sm px-2 py-0.5 rounded shadow">
//                                     {product.discount}
//                                 </span>
//                             </div>

//                             {/* Product Info */}
//                             <div className="p-3 sm:p-4 flex flex-col justify-between h-full">
//                                 <div>
//                                     <h3 className="text-sm font-semibold text-gray-900 mb-1 line-clamp-2">
//                                         <a href={product.url} className="hover:text-red-500 transition-colors">
//                                             {product.title}
//                                         </a>
//                                     </h3>
//                                     <p className="text-xs text-gray-500 mb-2">{product.vendor}</p>
//                                 </div>

//                                 <div className="flex items-center justify-between mt-auto">
//                                     {/* Price */}
//                                     <div>
//                                         <span className="text-base font-bold text-gray-900">
//                                             ₹{product.price.toLocaleString()}
//                                         </span>
//                                         <span className="ml-1 text-sm text-gray-500 line-through">
//                                             ₹{product.originalPrice.toLocaleString()}
//                                         </span>
//                                     </div>

//                                     {/* Button */}
//                                     <button
//                                         className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded transition-colors ${product.hasOptions
//                                             ? 'bg-white text-black border border-black hover:bg-black hover:text-white'
//                                             : 'bg-black text-white hover:bg-gray-800'
//                                             }`}
//                                     >
//                                         {product.hasOptions ? 'Choose options' : 'Add to cart'}
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }

'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Product {
    id: string;
    title: string;
    vendor: string;
    price: number;
    originalPrice: number;
    discount: string;
    imageMain: string;
    imageHover: string;
    url: string;
    hasOptions: boolean;
}

const sofas: Product[] = [
    {
        id: '1',
        title: 'Paddington Fabric Single Seater Sofa',
        vendor: 'HomeTown',
        price: 14900,
        originalPrice: 36900,
        discount: '59% Off',
        imageMain: 'https://www.hometown.in/cdn/shop/files/1_17c113e1-5ddf-4d18-bc33-669dc9a2da33.jpg?v=1758798716&width=1100',
        imageHover: 'https://www.hometown.in/cdn/shop/files/3_88b4fea2-1804-4021-adc9-2c2903b1cf02.jpg?v=1758798716&width=1397',
        url: '/products/paddington-fabric-single-seater-sofa',
        hasOptions: true,
    },
    {
        id: '2',
        title: 'Alexa Half Leather Single Seater Sofa in Light Grey Colour',
        vendor: 'HomeTown',
        price: 39900,
        originalPrice: 99900,
        discount: '60% Off',
        imageMain: 'https://www.hometown.in/cdn/shop/files/1_e46493c9-34ca-435e-ac2d-e1dadfd3e377.jpg?v=1747207078&width=2000',
        imageHover: 'https://www.hometown.in/cdn/shop/files/2_9cf91967-1447-47a9-a58e-a20fc096e102.jpg?v=1747207079&width=2000',
        url: '/products/alexa-half-leather-single-seater-sofa-in-light-grey-colour',
        hasOptions: false,
    },
    {
        id: '3',
        title: 'Garcia Fabric Three Seater Sofa',
        vendor: 'HomeTown',
        price: 31000,
        originalPrice: 74900,
        discount: '58% Off',
        imageMain: 'https://www.hometown.in/cdn/shop/files/6000087515001_LS.jpg?v=1758776652&width=1600',
        imageHover: 'https://www.hometown.in/cdn/shop/files/IMG_0524.jpg?v=1758776652&width=1600',
        url: '/products/garcia-fabric-three-seater-sofa',
        hasOptions: true,
    },
    {
        id: '4',
        title: 'Garcia Fabric Two Seater Sofa',
        vendor: 'HomeTown',
        price: 23900,
        originalPrice: 56900,
        discount: '57% Off',
        imageMain: 'https://www.hometown.in/cdn/shop/files/6000087742001_LS.jpg?v=1758776316&width=1600',
        imageHover: 'https://www.hometown.in/cdn/shop/files/IMG_0463.jpg?v=1758776316&width=1600',
        url: '/products/garcia-fabric-two-seater-sofa',
        hasOptions: true,
    },
    {
        id: '5',
        title: 'Garcia Fabric Single Seater Sofa',
        vendor: 'HomeTown',
        price: 14900,
        originalPrice: 36900,
        discount: '59% Off',
        imageMain: 'https://www.hometown.in/cdn/shop/files/6000087506001_LS.jpg?v=1758775925&width=1600',
        imageHover: 'https://www.hometown.in/cdn/shop/files/IMG_0438.jpg?v=1758775925&width=1600',
        url: '/products/garcia-fabric-single-seater-sofa',
        hasOptions: true,
    },
    {
        id: '6',
        title: 'Bradford Fabric Two Seater Sofa in Beige Colour',
        vendor: 'HomeTown',
        price: 29900,
        originalPrice: 97900,
        discount: '69% Off',
        imageMain: 'https://www.hometown.in/cdn/shop/files/1_b62dff9a-51e3-4de0-befc-8d9b43c1e09d.jpg?v=1747205297&width=728',
        imageHover: 'https://www.hometown.in/cdn/shop/files/2_c233a2a1-2ca0-4575-9fb8-811f27b38d6e.jpg?v=1747205297&width=1500',
        url: '/products/bradford-fabric-two-seater-sofa-in-beige-colour',
        hasOptions: false,
    },
    {
        id: '7',
        title: 'Riga Fabric 1 Seater Sofa in Beige Colour',
        vendor: 'HomeTown',
        price: 18900,
        originalPrice: 75000,
        discount: '74% Off',
        imageMain: 'https://www.hometown.in/cdn/shop/files/Glasgow_1Set_HD.jpg?v=1758271360&width=2196',
        imageHover: 'https://www.hometown.in/cdn/shop/files/Glasgow_10.jpg?v=1758271360&width=4442',
        url: '/products/riga-fabric-1-seater-sofa-in-beige-colour',
        hasOptions: false,
    },
    {
        id: '8',
        title: 'Manchester Fabric 3 Seater Sofa in Grey Colour',
        vendor: 'HomeTown',
        price: 26000,
        originalPrice: 118000,
        discount: '77% Off',
        imageMain: 'https://www.hometown.in/cdn/shop/files/Baltimor_3Set_HD.jpg?v=1754761968&width=2828',
        imageHover: 'https://www.hometown.in/cdn/shop/files/Baltimor_1.jpg?v=1754761968&width=4809',
        url: '/products/manchester-fabric-3-seater-sofa-in-grey-colour',
        hasOptions: false,
    },
    {
        id: '9',
        title: 'Manchester Fabric 2 Seater Sofa in Grey Colour',
        vendor: 'HomeTown',
        price: 19900,
        originalPrice: 90000,
        discount: '77% Off',
        imageMain: 'https://www.hometown.in/cdn/shop/files/MANCHESTER_000.jpg?v=1754761968&width=1600',
        imageHover: 'https://www.hometown.in/cdn/shop/files/Baltimor_5.jpg?v=1754761968&width=4477',
        url: '/products/manchester-fabric-2-seater-sofa-in-grey-colour',
        hasOptions: false,
    },
    {
        id: '10',
        title: 'Manchester Fabric 1 Seater Sofa in Grey Colour',
        vendor: 'HomeTown',
        price: 14900,
        originalPrice: 61000,
        discount: '75% Off',
        imageMain: 'https://www.hometown.in/cdn/shop/files/Baltimor_1Set_HD.jpg?v=1754761968&width=2563',
        imageHover: 'https://www.hometown.in/cdn/shop/files/Baltimor_9.jpg?v=1754761968&width=4287',
        url: '/products/manchester-fabric-1-seater-sofa-in-grey-colour',
        hasOptions: false,
    },
];

const recliners: Product[] = [
    {
        id: '11',
        title: 'Bradford Fabric Two Seater Recliner in Beige Colour',
        vendor: 'HomeTown',
        price: 40000,
        originalPrice: 129900,
        discount: '69% Off',
        imageMain: 'https://www.hometown.in/cdn/shop/files/1_8e1308b2-614c-4e59-98b7-f72c2c5534e9.jpg?v=1758273291&width=728',
        imageHover: 'https://www.hometown.in/cdn/shop/files/2_ea8614cd-e1ca-4478-804e-c8840d5eaf57.jpg?v=1758273291&width=1100',
        url: '/products/bradford-fabric-two-seater-recliner-in-beige-colour',
        hasOptions: false,
    },
    {
        id: '12',
        title: 'Nuvia Half Leather 3 Seater Triple Electric Zero Gravity Recliner in Grey Colour',
        vendor: 'HomeTown',
        price: 179900,
        originalPrice: 450000,
        discount: '60% Off',
        imageMain: 'https://www.hometown.in/cdn/shop/files/enhanced_98fca9ac-6ac8-4712-9fab-db574a87919d.png?v=1758883478&width=2048',
        imageHover: 'https://www.hometown.in/cdn/shop/files/Z6A2223-Photoroom.png?v=1758883478&width=1280',
        url: '/products/nuvia-half-leather-3-seater-double-electric-recliner',
        hasOptions: true,
    },
    {
        id: '13',
        title: 'Nuvia Half Leather Single Seater Double Electric Recliner',
        vendor: 'HomeTown',
        price: 89900,
        originalPrice: 230000,
        discount: '60% Off',
        imageMain: 'https://www.hometown.in/cdn/shop/files/13enhanced.png?v=1758883097&width=2048',
        imageHover: 'https://www.hometown.in/cdn/shop/files/Z6A2213-Photoroom.png?v=1758883097&width=853',
        url: '/products/nuvia-half-leather-single-seater-double-electric-recliner',
        hasOptions: true,
    },
    {
        id: '14',
        title: 'Enfield Fabric 3 Seater Recliner in Grey Colour',
        vendor: 'HomeTown',
        price: 70000,
        originalPrice: 185900,
        discount: '62% Off',
        imageMain: 'https://www.hometown.in/cdn/shop/files/1_965449f4-1037-49f4-933a-a39140460691.jpg?v=1758882734&width=2000',
        imageHover: 'https://www.hometown.in/cdn/shop/files/2_84222a28-7f31-451a-880c-d0acfb499ce2.jpg?v=1758882734&width=2000',
        url: '/products/enfield-fabric-3-seater-recliner-in-grey-colour-1',
        hasOptions: true,
    },
    {
        id: '15',
        title: 'Tigris Leatherette Two Seater Recliner in Brown Colour',
        vendor: 'HomeTown',
        price: 74900,
        originalPrice: 154000,
        discount: '51% Off',
        imageMain: 'https://www.hometown.in/cdn/shop/files/1_4883a469-e925-4a7b-9215-19c91a000794.jpg?v=1758273385&width=2000',
        imageHover: 'https://www.hometown.in/cdn/shop/files/2_f25ff23e-c727-4df4-8647-55d88000ddb5.jpg?v=1758273385&width=1024',
        url: '/products/tigris-leatherette-two-seater-recliner-in-brown-colour',
        hasOptions: false,
    },
    {
        id: '16',
        title: 'Tigris Leatherette Single Seater Recliner in Brown Colour',
        vendor: 'HomeTown',
        price: 37900,
        originalPrice: 84900,
        discount: '55% Off',
        imageMain: 'https://www.hometown.in/cdn/shop/files/1_97e8f228-049a-462e-9838-3502bd6ac0d7.jpg?v=1758273385&width=2000',
        imageHover: 'https://www.hometown.in/cdn/shop/files/2_ae9a2d06-dc86-492e-8253-f1cdaef53072.jpg?v=1758273385&width=1024',
        url: '/products/tigris-leatherette-single-seater-recliner-in-brown-colour',
        hasOptions: false,
    },
    {
        id: '17',
        title: 'Liora Single Seater Fabric Rocker + Recliner in Brown Colour',
        vendor: 'HomeTown',
        price: 32900,
        originalPrice: 122900,
        discount: '73% Off',
        imageMain: 'https://www.hometown.in/cdn/shop/files/LioraSingleseater.png?v=1758620634&width=1024',
        imageHover: 'https://www.hometown.in/cdn/shop/files/00333.png?v=1758620634&width=1150',
        url: '/products/liora-single-seater-fabric-rocker-recliner-in-brown-colour',
        hasOptions: false,
    },
    {
        id: '18',
        title: 'Zenora 2 Seater Double Electric Recliner With Consoel in Light Brown Colour',
        vendor: 'HomeTown',
        price: 129900,
        originalPrice: 531900,
        discount: '75% Off',
        imageMain: 'https://www.hometown.in/cdn/shop/files/ChatGPTImageMay8_2025_12_52_26PM.png?v=1756924276&width=1024',
        imageHover: 'https://www.hometown.in/cdn/shop/files/5_e6575c60-d9df-4214-b963-201df2c41759.jpg?v=1756924276&width=1024',
        url: '/products/zenora-2-seater-double-electric-recliner-withconsol-in-light-brown',
        hasOptions: false,
    },
    {
        id: '19',
        title: 'Calvio Half Leather Single Seater Electric Recliner in Burgundy Colour',
        vendor: 'HomeTown',
        price: 59900,
        originalPrice: 160000,
        discount: '62% Off',
        imageMain: 'https://www.hometown.in/cdn/shop/files/enhanced_015a4aa0-aeb5-4e42-898d-e4ead5358dfe.png?v=1755761487&width=2048',
        imageHover: 'https://www.hometown.in/cdn/shop/files/706961524_L321_13-Photoroom.png?v=1755761487&width=742',
        url: '/products/calvio-half-leather-single-seater-electric-recliner-burgundy',
        hasOptions: false,
    },
    {
        id: '20',
        title: 'Murray Half Leather Single Seater Recliner in Beige Colour',
        vendor: 'HomeTown',
        price: 44900,
        originalPrice: 117900,
        discount: '61% Off',
        imageMain: 'https://www.hometown.in/cdn/shop/files/1_de2b59c8-5807-413f-860e-a776d23d5bad.jpg?v=1758273335&width=1100',
        imageHover: 'https://www.hometown.in/cdn/shop/files/2_3de84b5c-57be-4946-82f1-25284a006aac.jpg?v=1758273335&width=1600',
        url: '/products/murray-half-leather-single-seater-recliner-in-beige-colour',
        hasOptions: false,
    },
];

const tabs = [
    { id: 'sofas', label: 'Sofas', products: sofas },
    { id: 'recliners', label: 'Recliners', products: recliners },
    { id: 'wardrobes', label: 'Wardrobes', products: [] },
    { id: 'dressing-tables', label: 'Dressing Tables', products: [] },
    { id: 'center-tables', label: 'Center Tables', products: [] },
];

export default function BestSellerSection() {
    const [activeTab, setActiveTab] = useState('sofas');
    const currentProducts = tabs.find(tab => tab.id === activeTab)?.products || [];

    return (
        <section className="py-12 md:py-16 bg-white">
            <div className="templateContainer px-4 sm:px-6 lg:px-8">
                {/* Title & Tabs */}
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">
                        Our <span className="text-red-500">Bestsellers</span>
                    </h2>
                    <div className="flex justify-center">
                        <div className="flex flex-wrap gap-2 sm:gap-4 justify-center">
                            {tabs.map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`px-4 sm:px-6 py-2 text-sm sm:text-base border-b-2 font-medium transition-colors ${activeTab === tab.id
                                        ? 'border-red-500 text-red-500'
                                        : 'border-transparent text-gray-500 hover:text-gray-700'
                                        }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                    {currentProducts.map(product => (
                        <div
                            key={product.id}
                            className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow group flex flex-col"
                        >
                            {/* Image Container */}
                            <div className="relative w-full rounded-lg aspect-square overflow-hidden z-0">
                                <Image
                                    src={product.imageMain}
                                    alt={product.title}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                                    className="object-cover transition-opacity duration-300 group-hover:opacity-0"
                                />
                                {product.imageHover && (
                                    <Image
                                        src={product.imageHover}
                                        alt={product.title}
                                        fill
                                        className="object-cover opacity-0 group-hover:opacity-100 absolute inset-0 transition-opacity duration-300"
                                    />
                                )}
                                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs sm:text-sm px-2 py-0.5 rounded shadow z-10">
                                    {product.discount}
                                </span>
                            </div>

                            {/* Content Section */}
                            <div className="p-3 sm:p-4 flex flex-col justify-between flex-grow relative z-10">
                                <div>
                                    <h3 className="text-sm font-semibold text-gray-900 mb-1 line-clamp-2">
                                        <a href={product.url} className="hover:text-red-500 transition-colors">
                                            {product.title}
                                        </a>
                                    </h3>
                                    <p className="text-xs text-gray-500 mb-2">{product.vendor}</p>
                                </div>

                                <div className="flex items-center justify-between mt-auto">
                                    <div>
                                        <span className="text-base font-bold text-gray-900">₹{product.price}</span>
                                        <span className="ml-1 text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
                                    </div>

                                    <button
                                        className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded transition-colors ${product.hasOptions
                                            ? 'bg-white text-black border border-black hover:bg-black hover:text-white'
                                            : 'bg-black text-white hover:bg-gray-800'
                                            }`}
                                    >
                                        {product.hasOptions ? 'Choose options' : 'Add to cart'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
