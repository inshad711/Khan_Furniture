// // D:\NewBadalFurniture\furniture\app\component\Header\Navbar.tsx

// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// interface SubItem {
//     name: string;
//     href: string;
// }

// interface Promo {
//     imgSrc: string;
//     imgAlt: string;
//     text: string;
//     linkHref: string;
//     linkText: string;
// }

// interface MenuItem {
//     name: string;
//     href: string;
//     subItems: SubItem[];
//     promo?: Promo;
//     className?: string;
//     isMega?: boolean;
// }

// const menuItems: MenuItem[] = [
//     {
//         name: 'Living Rooms',
//         href: '/living-rooms',
//         subItems: [
//             { name: 'Sofas', href: '/living-rooms/sofas' },
//             { name: 'Sectionals', href: '/living-rooms/sectionals' },
//             { name: 'Loveseats', href: '/living-rooms/loveseats' },
//             { name: 'Chairs', href: '/living-rooms/chairs' },
//             { name: 'Recliners', href: '/living-rooms/recliners' },
//             { name: 'Lift Chairs', href: '/living-rooms/lift-chairs' },
//             { name: 'Ottomans & Poufs', href: '/living-rooms/ottomans-poufs' },
//             { name: 'Chaises / Settees', href: '/living-rooms/chaises-settees' },
//             { name: 'End Tables', href: '/living-rooms/end-tables' },
//             { name: 'Coffee / Cocktail Tables', href: '/living-rooms/coffee-cocktail-tables' },
//             { name: 'Console Tables', href: '/living-rooms/console-tables' },
//         ],
//         promo: {
//             imgSrc: 'https://starfurniture.com/media/catalog/category/ST706708_a.jpg',
//             imgAlt: '',
//             text: 'Elevate Your Screen Time!',
//             linkHref: '/office-media/tv-stands-entertainment',
//             linkText: 'TV STANDS',
//         },
//         className: 'lovingroomMenu',
//         isMega: true,
//     },
//     {
//         name: 'Bedrooms',
//         href: '/bedrooms',
//         subItems: [
//             { name: 'Beds', href: '/bedrooms/beds' },
//             { name: 'Nightstands', href: '/bedrooms/nightstands' },
//             { name: 'Dressers', href: '/bedrooms/dressers' },
//             { name: 'Dresser Mirrors', href: '/bedrooms/dresser-mirrors' },
//             { name: 'Chests & Armoires', href: '/bedrooms/chests-armoires' },
//             { name: 'Bedroom Benches', href: '/bedrooms/bedroom-benches' },
//         ],
//         promo: {
//             imgSrc: 'https://starfurniture.com/media/catalog/category/ST754922_a.jpg',
//             imgAlt: "Don't Forget a Mattress!",
//             text: "Don't Forget a Mattress!",
//             linkHref: '/mattresses/mattress',
//             linkText: 'MATTRESSES',
//         },
//         isMega: true,
//     },
//     {
//         name: 'Mattresses',
//         href: '/mattresses',
//         subItems: [
//             { name: 'Mattress', href: '/mattresses/mattress' },
//             { name: 'Box Springs', href: '/mattresses/box-springs' },
//             { name: 'Adjustable Bases', href: '/mattresses/adjustable-bases' },
//             { name: 'Pillows', href: '/mattresses/pillows' },
//             { name: 'Protectors', href: '/mattresses/protectors' },
//             { name: 'Bed Frames', href: '/mattresses/bed-frames' },
//         ],
//         promo: {
//             imgSrc: 'https://starfurniture.com/media/catalog/category/matress.jpg',
//             imgAlt: 'PREVIEW OUR MATTRESS EXPERIENCE',
//             text: 'PREVIEW OUR MATTRESS EXPERIENCE',
//             linkHref: '/mattresses',
//             linkText: 'PREVIEW OUR MATTRESS EXPERIENCE',
//         },
//         isMega: true,
//     },
//     {
//         name: 'Dining Rooms',
//         href: '/dining-rooms',
//         subItems: [
//             { name: 'Dining Room Sets', href: '/dining-rooms/dining-room-sets' },
//             { name: 'Dining Tables', href: '/dining-rooms/dining-tables' },
//             { name: 'Dining Chairs', href: '/dining-rooms/dining-chairs' },
//             { name: 'Dining Benches', href: '/dining-rooms/dining-benches' },
//             { name: 'Barstools / Counter Stools', href: '/dining-rooms/barstools-counter-stools' },
//             { name: 'China Cabinets', href: '/dining-rooms/china-cabinets' },
//             { name: 'Curios', href: '/dining-rooms/curios' },
//             { name: 'Sideboard / Buffet / Server', href: '/dining-rooms/sideboard-buffet-server' },
//             { name: 'Bars', href: '/dining-rooms/bars' },
//         ],
//         promo: {
//             imgSrc: 'https://starfurniture.com/media/catalog/category/ST757242_a.jpg',
//             imgAlt: '',
//             text: 'Beautify Your Walls!',
//             linkHref: '/decor-accents/wall-art',
//             linkText: 'WALL ART',
//         },
//         className: 'diningroomMenu',
//         isMega: true,
//     },
//     {
//         name: 'Home Office',
//         href: '/office-media',
//         subItems: [
//             { name: 'Desks', href: '/office-media/desks' },
//             { name: 'Bookcases', href: '/office-media/bookcases' },
//             { name: 'File Cabinets', href: '/office-media/file-cabinets' },
//             { name: 'Office Chairs', href: '/office-media/office-chairs' },
//             { name: 'TV Stands / Entertainment', href: '/office-media/tv-stands-entertainment' },
//             { name: 'Wall Units', href: '/office-media/wall-units' },
//             { name: 'Credenzas & Hutches', href: '/office-media/credenzas-hutches' },
//         ],
//         promo: {
//             imgSrc: 'https://starfurniture.com/media/catalog/category/ST756918_d.jpg',
//             imgAlt: '',
//             text: 'A Glow of Personality!',
//             linkHref: '/decor-accents/lighting/table-lamps',
//             linkText: 'TABLE LAMPS',
//         },
//         className: 'officemediaMenu',
//         isMega: true,
//     },
//     {
//         name: 'Decor, Accents & Rugs',
//         href: '/decor-accents',
//         subItems: [
//             { name: 'Accent Tables', href: '/decor-accents/accent-tables' },
//             { name: 'Bookcase / Etageres', href: '/decor-accents/bookcase-etageres' },
//             { name: 'Cabinets & Chests', href: '/decor-accents/cabinets-chests' },
//             { name: 'Bars/Wine Cabinets', href: '/decor-accents/bars-wine-cabinets' },
//             { name: 'Benches', href: '/decor-accents/benches' },
//             { name: 'Floor Mirrors', href: '/decor-accents/floor-mirrors' },
//             { name: 'Wall Art', href: '/decor-accents/wall-art' },
//             { name: 'Wall Mirrors', href: '/decor-accents/wall-mirrors' },
//             { name: 'Lighting', href: '/decor-accents/lighting' },
//             { name: 'Rugs', href: '/decor-accents/rugs' },
//         ],
//         promo: {
//             imgSrc: 'https://starfurniture.com/media/catalog/category/ST706681_a.jpg',
//             imgAlt: '',
//             text: 'Style in Every Corner!',
//             linkHref: '/decor-accents/accent-tables',
//             linkText: 'ACCENT TABLES',
//         },
//         className: 'decorMenu',
//         isMega: true,
//     },
//     {
//         name: 'Clearance',
//         href: '/clearance',
//         subItems: [
//             { name: 'View All', href: '/clearance/view-all?iscloseout=159/' },
//             { name: 'Living Rooms', href: '/clearance/living-rooms?iscloseout=159/' },
//             { name: 'Bedrooms', href: '/clearance/bedrooms?iscloseout=159/' },
//             { name: 'Mattresses', href: '/clearance/mattresses?iscloseout=159/' },
//             { name: 'Dining Rooms', href: '/clearance/dining-rooms?iscloseout=159/' },
//             { name: 'Office / Media', href: '/clearance/home-office?iscloseout=159/' },
//             { name: 'Decor, Accents & Rugs', href: '/clearance/decor-44-accents-rugs?iscloseout=159/' },
//         ],
//         className: 'clearanceMenu text--clearance',
//     },
// ];

// const Navbar: React.FC = () => {
//     const [isMobileOpen, setIsMobileOpen] = useState(false);
//     const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

//     const toggleMobileMenu = () => setIsMobileOpen(!isMobileOpen);

//     const toggleMobileDropdown = (name: string) => {
//         setOpenMobileDropdown(openMobileDropdown === name ? null : name);
//     };

//     return (
//         <nav className="bg-white shadow-md sticky top-0 z-50">
//             <div className="container mx-auto px-4">
//                 <div className="flex justify-between items-center py-4">



//                     {/* Desktop Menu */}
//                     <ul className="hidden md:flex space-x-8 items-center">
//                         {menuItems.map((item) => (
//                             <li
//                                 key={item.name}
//                                 className={`relative group ${item.className || ''}`}
//                             >
//                                 <Link
//                                     href={item.href}
//                                     className="text-gray-700 hover:text-gray-900 py-2 block"
//                                 >
//                                     {item.name}
//                                 </Link>
//                                 {item.subItems.length > 0 && (
//                                     <div className="absolute top-full left-0 w-96 bg-white shadow-lg border border-gray-200 hidden group-hover:block z-10">
//                                         <div className="p-4 grid grid-cols-3 gap-4">
//                                             <ul className="col-span-2 space-y-1">
//                                                 {item.subItems.map((sub) => (
//                                                     <li key={sub.name}>
//                                                         <Link
//                                                             href={sub.href}
//                                                             className="text-gray-600 hover:text-gray-900 text-sm block py-1"
//                                                         >
//                                                             {sub.name}
//                                                         </Link>
//                                                     </li>
//                                                 ))}
//                                             </ul>
//                                             {item.promo && (
//                                                 <div className="col-span-1 text-center">
//                                                     <Image
//                                                         src={item.promo.imgSrc}
//                                                         alt={item.promo.imgAlt}
//                                                         width={150}
//                                                         height={150}
//                                                         className="mx-auto mb-2"
//                                                     />
//                                                     <p className="text-sm font-medium mb-2">
//                                                         {item.promo.text}
//                                                     </p>
//                                                     <Link
//                                                         href={item.promo.linkHref}
//                                                         className="text-xs text-blue-600 hover:underline block px-0 py-2"
//                                                     >
//                                                         {item.promo.linkText}
//                                                     </Link>
//                                                 </div>
//                                             )}
//                                         </div>
//                                     </div>
//                                 )}
//                             </li>
//                         ))}
//                     </ul>

//                     {/* Mobile Menu Toggle */}
//                     <button
//                         onClick={toggleMobileMenu}
//                         className="md:hidden text-gray-700 hover:text-gray-900 text-xl"
//                     >
//                         ☰
//                     </button>
//                 </div>

//                 {/* Mobile Menu */}
//                 {isMobileOpen && (
//                     <div className="md:hidden pb-4 border-t border-gray-200">
//                         <ul className="space-y-2">
//                             {menuItems.map((item) => (
//                                 <li key={item.name}>
//                                     <button
//                                         onClick={() => toggleMobileDropdown(item.name)}
//                                         className="w-full text-left text-gray-700 hover:text-gray-900 py-2 px-4 flex justify-between items-center"
//                                     >
//                                         <span>{item.name}</span>
//                                         <span>{openMobileDropdown === item.name ? '▲' : '▼'}</span>
//                                     </button>
//                                     {openMobileDropdown === item.name && item.subItems.length > 0 && (
//                                         <ul className="pl-8 space-y-1 bg-gray-50">
//                                             {item.subItems.map((sub) => (
//                                                 <li key={sub.name}>
//                                                     <Link
//                                                         href={sub.href}
//                                                         className="text-gray-600 hover:text-gray-900 text-sm block py-1"
//                                                         onClick={toggleMobileMenu}
//                                                     >
//                                                         {sub.name}
//                                                     </Link>
//                                                 </li>
//                                             ))}
//                                             {item.promo && (
//                                                 <li className="pl-4 pt-2">
//                                                     <Image
//                                                         src={item.promo.imgSrc}
//                                                         alt={item.promo.imgAlt}
//                                                         width={100}
//                                                         height={100}
//                                                         className="mx-auto mb-2"
//                                                     />
//                                                     <p className="text-xs font-medium mb-2 text-center">
//                                                         {item.promo.text}
//                                                     </p>
//                                                     <Link
//                                                         href={item.promo.linkHref}
//                                                         className="text-xs text-blue-600 hover:underline block text-center px-0 py-1"
//                                                         onClick={toggleMobileMenu}
//                                                     >
//                                                         {item.promo.linkText}
//                                                     </Link>
//                                                 </li>
//                                             )}
//                                         </ul>
//                                     )}
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 )}
//             </div>
//         </nav>
//     );
// };

// export default Navbar;

// D:\NewBadalFurniture\furniture\app\component\Header\Navbar.tsx

'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

interface SubItem {
    name: string;
    href: string;
}

interface Promo {
    imgSrc: string;
    imgAlt: string;
    text: string;
    linkHref: string;
    linkText: string;
}

interface MenuItem {
    name: string;
    href: string;
    subItems: SubItem[];
    promo?: Promo;
    className?: string;
    isMega?: boolean;
}

const menuItems: MenuItem[] = [
    {
        name: 'Living Rooms',
        href: '/living-rooms',
        subItems: [
            { name: 'Sofas', href: '/living-rooms/sofas' },
            { name: 'Sectionals', href: '/living-rooms/sectionals' },
            { name: 'Loveseats', href: '/living-rooms/loveseats' },
            { name: 'Chairs', href: '/living-rooms/chairs' },
            { name: 'Recliners', href: '/living-rooms/recliners' },
            { name: 'Lift Chairs', href: '/living-rooms/lift-chairs' },
            { name: 'Ottomans & Poufs', href: '/living-rooms/ottomans-poufs' },
            { name: 'Chaises / Settees', href: '/living-rooms/chaises-settees' },
            { name: 'End Tables', href: '/living-rooms/end-tables' },
            { name: 'Coffee / Cocktail Tables', href: '/living-rooms/coffee-cocktail-tables' },
            { name: 'Console Tables', href: '/living-rooms/console-tables' },
        ],
        promo: {
            imgSrc: 'https://starfurniture.com/media/catalog/category/ST706708_a.jpg',
            imgAlt: '',
            text: 'Elevate Your Screen Time!',
            linkHref: '/office-media/tv-stands-entertainment',
            linkText: 'TV STANDS',
        },
        className: 'lovingroomMenu',
        isMega: true,
    },
    {
        name: 'Bedrooms',
        href: '/bedrooms',
        subItems: [
            { name: 'Beds', href: '/bedrooms/beds' },
            { name: 'Nightstands', href: '/bedrooms/nightstands' },
            { name: 'Dressers', href: '/bedrooms/dressers' },
            { name: 'Dresser Mirrors', href: '/bedrooms/dresser-mirrors' },
            { name: 'Chests & Armoires', href: '/bedrooms/chests-armoires' },
            { name: 'Bedroom Benches', href: '/bedrooms/bedroom-benches' },
        ],
        promo: {
            imgSrc: 'https://starfurniture.com/media/catalog/category/ST754922_a.jpg',
            imgAlt: "Don't Forget a Mattress!",
            text: "Don't Forget a Mattress!",
            linkHref: '/mattresses/mattress',
            linkText: 'MATTRESSES',
        },
        isMega: true,
    },
    {
        name: 'Mattresses',
        href: '/mattresses',
        subItems: [
            { name: 'Mattress', href: '/mattresses/mattress' },
            { name: 'Box Springs', href: '/mattresses/box-springs' },
            { name: 'Adjustable Bases', href: '/mattresses/adjustable-bases' },
            { name: 'Pillows', href: '/mattresses/pillows' },
            { name: 'Protectors', href: '/mattresses/protectors' },
            { name: 'Bed Frames', href: '/mattresses/bed-frames' },
        ],
        promo: {
            imgSrc: 'https://starfurniture.com/media/catalog/category/matress.jpg',
            imgAlt: 'PREVIEW OUR MATTRESS EXPERIENCE',
            text: 'PREVIEW OUR MATTRESS EXPERIENCE',
            linkHref: '/mattresses',
            linkText: 'PREVIEW OUR MATTRESS EXPERIENCE',
        },
        isMega: true,
    },
    {
        name: 'Dining Rooms',
        href: '/dining-rooms',
        subItems: [
            { name: 'Dining Room Sets', href: '/dining-rooms/dining-room-sets' },
            { name: 'Dining Tables', href: '/dining-rooms/dining-tables' },
            { name: 'Dining Chairs', href: '/dining-rooms/dining-chairs' },
            { name: 'Dining Benches', href: '/dining-rooms/dining-benches' },
            { name: 'Barstools / Counter Stools', href: '/dining-rooms/barstools-counter-stools' },
            { name: 'China Cabinets', href: '/dining-rooms/china-cabinets' },
            { name: 'Curios', href: '/dining-rooms/curios' },
            { name: 'Sideboard / Buffet / Server', href: '/dining-rooms/sideboard-buffet-server' },
            { name: 'Bars', href: '/dining-rooms/bars' },
        ],
        promo: {
            imgSrc: 'https://starfurniture.com/media/catalog/category/ST757242_a.jpg',
            imgAlt: '',
            text: 'Beautify Your Walls!',
            linkHref: '/decor-accents/wall-art',
            linkText: 'WALL ART',
        },
        className: 'diningroomMenu',
        isMega: true,
    },
    {
        name: 'Home Office',
        href: '/office-media',
        subItems: [
            { name: 'Desks', href: '/office-media/desks' },
            { name: 'Bookcases', href: '/office-media/bookcases' },
            { name: 'File Cabinets', href: '/office-media/file-cabinets' },
            { name: 'Office Chairs', href: '/office-media/office-chairs' },
            { name: 'TV Stands / Entertainment', href: '/office-media/tv-stands-entertainment' },
            { name: 'Wall Units', href: '/office-media/wall-units' },
            { name: 'Credenzas & Hutches', href: '/office-media/credenzas-hutches' },
        ],
        promo: {
            imgSrc: 'https://starfurniture.com/media/catalog/category/ST756918_d.jpg',
            imgAlt: '',
            text: 'A Glow of Personality!',
            linkHref: '/decor-accents/lighting/table-lamps',
            linkText: 'TABLE LAMPS',
        },
        className: 'officemediaMenu',
        isMega: true,
    },
    {
        name: 'Decor, Accents & Rugs',
        href: '/decor-accents',
        subItems: [
            { name: 'Accent Tables', href: '/decor-accents/accent-tables' },
            { name: 'Bookcase / Etageres', href: '/decor-accents/bookcase-etageres' },
            { name: 'Cabinets & Chests', href: '/decor-accents/cabinets-chests' },
            { name: 'Bars/Wine Cabinets', href: '/decor-accents/bars-wine-cabinets' },
            { name: 'Benches', href: '/decor-accents/benches' },
            { name: 'Floor Mirrors', href: '/decor-accents/floor-mirrors' },
            { name: 'Wall Art', href: '/decor-accents/wall-art' },
            { name: 'Wall Mirrors', href: '/decor-accents/wall-mirrors' },
            { name: 'Lighting', href: '/decor-accents/lighting' },
            { name: 'Rugs', href: '/decor-accents/rugs' },
        ],
        promo: {
            imgSrc: 'https://starfurniture.com/media/catalog/category/ST706681_a.jpg',
            imgAlt: '',
            text: 'Style in Every Corner!',
            linkHref: '/decor-accents/accent-tables',
            linkText: 'ACCENT TABLES',
        },
        className: 'decorMenu',
        isMega: true,
    },

];

const Navbar: React.FC = () => {
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

    const toggleMobileMenu = () => setIsMobileOpen(!isMobileOpen);

    const toggleMobileDropdown = (name: string) => {
        setOpenMobileDropdown(openMobileDropdown === name ? null : name);
    };

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    {/* Desktop Menu - Full on desktop, hidden on mobile/tablet */}
                    <ul className="hidden lg:flex space-x-8 items-center flex-1 justify-center">
                        {menuItems.map((item) => (
                            <li
                                key={item.name}
                                className={`relative group ${item.className || ''}`}
                            >
                                {/* <Link
                                    href={item.href}
                                    className="text-gray-700 hover:text-gray-900 py-2 block"
                                >
                                    {item.name}
                                    <ChevronDown />
                                </Link> */}
                                <Link
                                    href={item.href}
                                    className="text-gray-700 hover:text-gray-900 py-2 flex items-center space-x-1"
                                >
                                    <span>{item.name}</span>
                                    <ChevronDown />
                                </Link>

                                {item.subItems.length > 0 && (
                                    <div className="absolute top-full left-0 w-96 bg-white shadow-lg border border-gray-200 hidden group-hover:block z-10">
                                        <div className="p-4 grid grid-cols-3 gap-4">
                                            <ul className="col-span-2 space-y-1">
                                                {item.subItems.map((sub) => (
                                                    <li key={sub.name}>
                                                        <Link
                                                            href={sub.href}
                                                            className="text-gray-600 hover:text-gray-900 text-sm block py-1"
                                                        >
                                                            {sub.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                            {item.promo && (
                                                <div className="col-span-1 text-center">
                                                    <Image
                                                        src={item.promo.imgSrc}
                                                        alt={item.promo.imgAlt}
                                                        width={150}
                                                        height={150}
                                                        className="mx-auto mb-2"
                                                    />
                                                    <p className="text-sm font-medium mb-2">
                                                        {item.promo.text}
                                                    </p>
                                                    <Link
                                                        href={item.promo.linkHref}
                                                        className="text-xs text-blue-600 hover:underline block px-0 py-2"
                                                    >
                                                        {item.promo.linkText}
                                                    </Link>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* Mobile/Tablet Menu Toggle - Shown on mobile and tablet */}
                    <button
                        onClick={toggleMobileMenu}
                        className="lg:hidden text-gray-700 hover:text-gray-900 text-xl"
                    >
                        ☰
                    </button>
                </div>

                {/* Mobile/Tablet Menu */}
                {isMobileOpen && (
                    <div className="lg:hidden pb-4 border-t border-gray-200">
                        <ul className="space-y-2">
                            {menuItems.map((item) => (
                                <li key={item.name}>
                                    <button
                                        onClick={() => toggleMobileDropdown(item.name)}
                                        className="w-full text-left text-gray-700 hover:text-gray-900 py-2 px-4 flex justify-between items-center"
                                    >
                                        <span>{item.name}</span>
                                        <span>{openMobileDropdown === item.name ? '▲' : '▼'}</span>
                                    </button>
                                    {openMobileDropdown === item.name && item.subItems.length > 0 && (
                                        <ul className="pl-8 space-y-1 bg-gray-50">
                                            {item.subItems.map((sub) => (
                                                <li key={sub.name}>
                                                    <Link
                                                        href={sub.href}
                                                        className="text-gray-600 hover:text-gray-900 text-sm block py-1"
                                                        onClick={toggleMobileMenu}
                                                    >
                                                        {sub.name}
                                                    </Link>
                                                </li>
                                            ))}
                                            {item.promo && (
                                                <li className="pl-4 pt-2">
                                                    <Image
                                                        src={item.promo.imgSrc}
                                                        alt={item.promo.imgAlt}
                                                        width={100}
                                                        height={100}
                                                        className="mx-auto mb-2"
                                                    />
                                                    <p className="text-xs font-medium mb-2 text-center">
                                                        {item.promo.text}
                                                    </p>
                                                    <Link
                                                        href={item.promo.linkHref}
                                                        className="text-xs text-blue-600 hover:underline block text-center px-0 py-1"
                                                        onClick={toggleMobileMenu}
                                                    >
                                                        {item.promo.linkText}
                                                    </Link>
                                                </li>
                                            )}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;