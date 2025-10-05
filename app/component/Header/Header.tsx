// // D:\NewBadalFurniture\furniture\app\component\Header\Header.tsx

// 'use client';

// import { useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import {
//     MapPin,
//     User,
//     ShoppingCart,
//     Menu
// } from 'lucide-react'; // Lucide icons

// const Header = () => {
//     const [showStoreDropdown, setShowStoreDropdown] = useState(false);
//     const [showAccountDropdown, setShowAccountDropdown] = useState(false);

//     return (
//         <header className="w-full bg-white shadow-md px-4 py-3">
//             <div className="max-w-screen-xl mx-auto flex items-center justify-between flex-wrap">

//                 {/* Logo & Mobile Nav */}
//                 <div className="flex items-center space-x-4">
//                     <button
//                         onClick={() => console.log('Toggle Nav')}
//                         className="md:hidden text-gray-600"
//                         aria-label="Toggle Navigation"
//                     >
//                         <Menu className="w-5 h-5" />
//                     </button>


//                 </div>

//                 {/* Search */}
//                 <form
//                     className="flex-grow max-w-lg mx-4 w-full"
//                     action="https://starfurniture.com/catalogsearch/result/"
//                     method="get"
//                 >
//                     <div className="relative">
//                         <input
//                             type="text"
//                             name="q"
//                             placeholder="Search entire store here..."
//                             className="w-full border border-gray-300 rounded-md py-2 px-4 pr-20"
//                             maxLength={128}
//                             autoComplete="off"
//                         />
//                         <button
//                             type="submit"
//                             className="absolute right-2 top-1/2 transform -translate-y-1/2 text-sm text-gray-500 font-medium"
//                             aria-label="Search"
//                         >
//                             Search
//                         </button>
//                     </div>
//                 </form>

//                 <Link href="/" aria-label="Store logo">
//                     <Image
//                         src="https://starfurniture.com/media/logo/stores/1/SF-Logo.jpg"
//                         alt="Star Furniture Logo"
//                         width={150}
//                         height={40}
//                         className="object-contain"
//                     />
//                 </Link>

//                 {/* Header Links */}
//                 <div className="flex items-center space-x-6">
//                     {/* Store Locator */}
//                     <div className="relative">
//                         <button
//                             onClick={() => setShowStoreDropdown(!showStoreDropdown)}
//                             className="flex items-center text-sm text-gray-700 space-x-1"
//                             aria-haspopup="true"
//                             aria-expanded={showStoreDropdown}
//                         >
//                             <MapPin className="w-4 h-4" />
//                             <span>Stores</span>
//                         </button>

//                         {showStoreDropdown && (
//                             <div className="absolute top-full left-0 mt-2 bg-white border shadow-md rounded-md w-64 p-4 z-10">
//                                 <input
//                                     type="text"
//                                     placeholder="Zip Code"
//                                     className="w-full mb-2 border border-gray-300 rounded-md py-1 px-2"
//                                 />
//                                 <button className="w-full bg-blue-600 text-white py-1 rounded-md mb-2">
//                                     Save
//                                 </button>
//                                 <Link href="/stores" className="block text-center text-blue-600 hover:underline">
//                                     View All Stores
//                                 </Link>
//                             </div>
//                         )}
//                     </div>

//                     {/* Account Dropdown */}
//                     <div className="relative">
//                         <button
//                             onClick={() => setShowAccountDropdown(!showAccountDropdown)}
//                             className="flex items-center text-sm text-gray-700 space-x-1"
//                             aria-haspopup="true"
//                             aria-expanded={showAccountDropdown}
//                         >
//                             <User className="w-4 h-4" />
//                             <span>Account</span>
//                         </button>

//                         {showAccountDropdown && (
//                             <div className="absolute top-full left-0 mt-2 bg-white border shadow-md rounded-md w-48 p-3 z-10">
//                                 <ul className="space-y-2">
//                                     <li>
//                                         <Link href="/customer/account/login" className="text-gray-700 hover:underline">
//                                             Login
//                                         </Link>
//                                     </li>
//                                     <li>
//                                         <Link href="/customer/account/create" className="text-gray-700 hover:underline">
//                                             Register
//                                         </Link>
//                                     </li>
//                                 </ul>
//                             </div>
//                         )}
//                     </div>

//                     {/* Cart */}
//                     <Link href="/checkout/cart" className="flex items-center text-sm text-gray-700 space-x-1">
//                         <ShoppingCart className="w-4 h-4" />
//                         <span>Cart</span>
//                     </Link>
//                 </div>
//             </div>
//         </header>
//     );
// };

// export default Header;



// D:\NewBadalFurniture\furniture\app\component\Header\Header.tsx

'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    MapPin,
    User,
    ShoppingCart,
    // Menu
} from 'lucide-react'; // Lucide icons

const Header = () => {
    const [showStoreDropdown, setShowStoreDropdown] = useState(false);
    const [showAccountDropdown, setShowAccountDropdown] = useState(false);

    return (
        <header className="w-full bg-white shadow-md px-4 py-3">
            <div className="max-w-screen-xl mx-auto flex items-center justify-between flex-wrap md:flex-nowrap">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <Link href="/" aria-label="Store logo">
                        <Image
                            src="https://starfurniture.com/media/logo/stores/1/SF-Logo.jpg"
                            alt="Star Furniture Logo"
                            width={150}
                            height={40}
                            className="object-contain"
                        />
                    </Link>
                </div>

                {/* Search */}
                <form
                    className="flex-grow w-full md:max-w-lg md:mx-4 mx-0 mt-4 md:mt-0"
                    action="https://starfurniture.com/catalogsearch/result/"
                    method="get"
                >
                    <div className="relative">
                        <input
                            type="text"
                            name="q"
                            placeholder="Search entire store here..."
                            className="w-full border border-gray-300 rounded-md py-2 px-4 pr-20"
                            maxLength={128}
                            autoComplete="off"
                        />
                        <button
                            type="submit"
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-sm text-gray-500 font-medium"
                            aria-label="Search"
                        >
                            Search
                        </button>
                    </div>
                </form>

                {/* Header Links - Hidden on mobile, shown on tablet and up */}
                <div className="hidden md:flex items-center space-x-6 mt-4 md:mt-0">
                    {/* Store Locator */}
                    <div className="relative">
                        <button
                            onClick={() => setShowStoreDropdown(!showStoreDropdown)}
                            className="flex items-center text-sm text-gray-700 space-x-1"
                            aria-haspopup="true"
                            aria-expanded={showStoreDropdown}
                        >
                            <MapPin className="w-4 h-4" />
                            <span>Stores</span>
                        </button>

                        {showStoreDropdown && (
                            <div className="absolute top-full left-0 mt-2 bg-white border shadow-md rounded-md w-64 p-4 z-10">
                                <input
                                    type="text"
                                    placeholder="Zip Code"
                                    className="w-full mb-2 border border-gray-300 rounded-md py-1 px-2"
                                />
                                <button className="w-full bg-blue-600 text-white py-1 rounded-md mb-2">
                                    Save
                                </button>
                                <Link href="/stores" className="block text-center text-blue-600 hover:underline">
                                    View All Stores
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Account Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setShowAccountDropdown(!showAccountDropdown)}
                            className="flex items-center text-sm text-gray-700 space-x-1"
                            aria-haspopup="true"
                            aria-expanded={showAccountDropdown}
                        >
                            <User className="w-4 h-4" />
                            <span>Account</span>
                        </button>

                        {showAccountDropdown && (
                            <div className="absolute top-full left-0 mt-2 bg-white border shadow-md rounded-md w-48 p-3 z-10">
                                <ul className="space-y-2">
                                    <li>
                                        <Link href="/customer/account/login" className="text-gray-700 hover:underline">
                                            Login
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/customer/account/create" className="text-gray-700 hover:underline">
                                            Register
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Cart */}
                    <Link href="/checkout/cart" className="flex items-center text-sm text-gray-700 space-x-1">
                        <ShoppingCart className="w-4 h-4" />
                        <span>Cart</span>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;