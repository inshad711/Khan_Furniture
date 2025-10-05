'use client';

import { Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';


const Footer: React.FC = () => {


    return (
        <footer className="bg-gray-50 text-gray-800 py-8 md:py-12">
            <div className="max-w-7xl mx-auto px-4">
                {/* Top Footer */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                    {/* Logo and Socials */}
                    <div className="md:col-span-3 flex flex-col items-center md:items-start">
                        <Link href="/" className="mb-6">
                            <Image
                                src="https://starfurniture.com/media/logo/stores/1/SF-Logo.jpg" // Replace with actual path
                                alt="HomeTown - Buy Furniture Online"
                                width={250}
                                height={71}
                                className="w-40 md:w-60 h-auto"
                            />
                        </Link>
                        <ul className="flex space-x-3">
                            <li>
                                <a
                                    href="https://facebook.com/hometown.in"
                                    className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
                                    aria-label="Facebook"
                                >
                                    <svg width="10" height="19" viewBox="0 0 10 19" fill="currentColor">
                                        <path d="M9.43 0.601562H6.85818C5.72137 0.601563 4.63111 1.07567 3.82727 1.91958C3.02342 2.7635 2.57182 3.90809 2.57182 5.10156V7.80156H0V11.4016H2.57182V18.6016H6.00091V11.4016H8.57273L9.43 7.80156H6.00091V5.10156C6.00091 4.86287 6.09123 4.63395 6.252 4.46517C6.41277 4.29638 6.63082 4.20156 6.85818 4.20156H9.43V0.601562Z" fill="currentColor" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://instagram.com/hometownindia"
                                    className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
                                    aria-label="Instagram"
                                >
                                    <svg width="18" height="19" viewBox="0 0 18 19" fill="currentColor">
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M13.5 0.601562H4.50001C2.01472 0.601562 0 2.61629 0 5.10157V14.1016C0 16.5869 2.01472 18.6016 4.50001 18.6016H13.5C15.9853 18.6016 18 16.5869 18 14.1016V5.10157C18 2.61629 15.9853 0.601562 13.5 0.601562ZM9.43984 6.84775C8.86916 6.76313 8.28632 6.8606 7.77423 7.12632C7.26214 7.39203 6.84687 7.81245 6.58749 8.32778C6.32811 8.84311 6.23783 9.42711 6.32948 9.99671C6.42114 10.5663 6.69007 11.0925 7.09801 11.5004C7.50596 11.9084 8.03216 12.1773 8.60175 12.269C9.17135 12.3606 9.75535 12.2704 10.2707 12.011C10.786 11.7516 11.2064 11.3363 11.4721 10.8242C11.7379 10.3121 11.8353 9.7293 11.7507 9.15862C11.6644 8.5765 11.3931 8.03757 10.977 7.62145C10.5609 7.20533 10.022 6.93407 9.43984 6.84775ZM6.98468 5.60468C7.81683 5.17289 8.76394 5.01449 9.6913 5.15201C10.6372 5.29228 11.513 5.73307 12.1892 6.40927C12.8654 7.08546 13.3062 7.96121 13.4465 8.90716C13.584 9.83452 13.4256 10.7816 12.9938 11.6138C12.562 12.4459 11.8788 13.1207 11.0414 13.5422C10.204 13.9637 9.255 14.1104 8.3294 13.9615C7.40381 13.8126 6.54874 13.3755 5.88583 12.7126C5.22292 12.0497 4.78591 11.1947 4.63697 10.2691C4.48803 9.34346 4.63474 8.39447 5.05623 7.55706C5.47772 6.71965 6.15253 6.03646 6.98468 5.60468ZM13.9453 3.7952C13.4719 3.7952 13.0882 4.17896 13.0882 4.65234C13.0882 5.12573 13.4719 5.50949 13.9453 5.50949H13.9543C14.4277 5.50949 14.8114 5.12573 14.8114 4.65234C14.8114 4.17896 14.4277 3.7952 13.9543 3.7952H13.9453Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://in.pinterest.com/hometownstore/"
                                    className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
                                    aria-label="Pinterest"
                                >
                                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12.6611 3.07934C10.6273 2.79957 8.56095 3.26511 6.84363 4.38998C5.12631 5.51485 3.87398 7.22309 3.31788 9.19927C2.76179 11.1754 2.93948 13.2861 3.81815 15.1415C4.69683 16.9969 6.21713 18.4717 8.09835 19.2936C8.04748 18.6406 8.09417 17.9838 8.2369 17.3446C8.39415 16.6315 9.33848 12.7011 9.33848 12.7011C9.15043 12.2796 9.05646 11.8222 9.06308 11.3607C9.06308 10.0985 9.79152 9.15671 10.6976 9.15671C10.8604 9.15434 11.0218 9.18705 11.1708 9.25261C11.3198 9.31818 11.4529 9.41506 11.5611 9.53667C11.6694 9.65828 11.7501 9.80177 11.7979 9.95739C11.8458 10.113 11.8595 10.2771 11.8383 10.4385C11.8383 11.2035 11.347 12.3611 11.0903 13.4474C11.0396 13.6466 11.0363 13.855 11.0809 14.0557C11.1254 14.2564 11.2165 14.4438 11.3468 14.6028C11.477 14.7619 11.6428 14.8881 11.8308 14.9713C12.0188 15.0545 12.2237 15.0924 12.429 15.0819C14.0423 15.0819 15.1235 13.0156 15.1235 10.5762C15.1235 8.70622 13.885 7.30545 11.602 7.30545C11.0558 7.28423 10.5109 7.37423 10.0006 7.57001C9.49018 7.76579 9.02493 8.06325 8.63303 8.44433C8.24114 8.82542 7.93078 9.28217 7.72081 9.78687C7.51084 10.2916 7.40563 10.8337 7.41157 11.3803C7.38723 11.9866 7.58284 12.5813 7.96235 13.0547C8.03327 13.1077 8.08505 13.1822 8.10989 13.2672C8.13473 13.3521 8.13127 13.4428 8.10005 13.5256C8.06095 13.682 7.96235 14.0552 7.92326 14.192C7.91512 14.2384 7.8962 14.2823 7.86803 14.32C7.83985 14.3578 7.80319 14.3884 7.76102 14.4094C7.71885 14.4304 7.67233 14.4412 7.62521 14.441C7.5781 14.4407 7.5317 14.4294 7.48976 14.4079C6.31339 13.937 5.7592 12.6425 5.7592 11.1644C5.7592 8.74447 7.78556 5.84773 11.84 5.84773C15.0665 5.84773 17.2119 8.20813 17.2119 10.7326C17.2119 14.0552 15.3614 16.5533 12.6271 16.5533C12.2184 16.5663 11.813 16.4761 11.4484 16.291C11.0838 16.1059 10.7718 15.8318 10.5412 15.4942C10.5412 15.4942 10.0499 17.4627 9.95301 17.835C9.75521 18.4782 9.46334 19.0886 9.08688 19.6463C9.87141 19.8843 10.6865 20.0033 11.5059 19.9999C12.6224 20.0008 13.7282 19.7815 14.7598 19.3544C15.7914 18.9274 16.7287 18.3011 17.5179 17.5113C18.3071 16.7215 18.9328 15.7838 19.3591 14.7519C19.7854 13.72 20.004 12.6141 20.0023 11.4976C20.0013 9.44485 19.2576 7.46184 17.9085 5.91469C16.5595 4.36754 14.6962 3.36074 12.6628 3.08019L12.6611 3.07934Z" fill="currentColor" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.youtube.com/@HomeTownIndia"
                                    className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
                                    aria-label="YouTube"
                                >
                                    <svg width="22" height="17" viewBox="0 0 22 17" fill="currentColor">
                                        <path d="M21.5408 3.10093C21.4156 2.61695 21.1701 2.17559 20.8288 1.82102C20.4875 1.46645 20.0625 1.2111 19.5962 1.08054C17.8799 0.601563 11 0.601562 11 0.601562C11 0.601562 4.12009 0.601562 2.40379 1.078C1.93733 1.20813 1.51207 1.46333 1.17073 1.81797C0.829388 2.1726 0.58398 2.61419 0.459152 3.09838C-8.9407e-08 4.88182 0 8.60156 0 8.60156C0 8.60156 -8.9407e-08 12.3213 0.459152 14.1022C0.712054 15.0856 1.45848 15.8602 2.40379 16.1226C4.12009 16.6016 11 16.6016 11 16.6016C11 16.6016 17.8799 16.6016 19.5962 16.1226C20.544 15.8602 21.2879 15.0856 21.5408 14.1022C22 12.3213 22 8.60156 22 8.60156C22 8.60156 22 4.88182 21.5408 3.10093ZM8.81473 12.0156V5.18755L14.5112 8.57609L8.81473 12.0156Z" fill="currentColor" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div className="md:col-span-2">
                        <h3 className="text-sm font-semibold mb-4">Customer Service</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/pages/cancellation-policy" className="hover:underline">Cancellation Policy</Link></li>
                            <li><Link href="/pages/service-assurance-warranty" className="hover:underline">Service Assurance / Warranty</Link></li>
                            <li><Link href="/pages/faqs" className="hover:underline">FAQ</Link></li>
                            <li><Link href="/pages/terms-condition" className="hover:underline">Terms & Conditions</Link></li>
                        </ul>
                    </div>

                    {/* About HomeTown */}
                    <div className="md:col-span-2">
                        <h3 className="text-sm font-semibold mb-4">About HomeTown</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="https://www.praxisretail.in/" className="hover:underline">About Us</Link></li>
                            <li><Link href="/blogs/all" className="hover:underline">Blogs</Link></li>
                            <li><Link href="https://www.praxisretail.in/" className="hover:underline">Corporate Website</Link></li>
                            <li><Link href="/a/storelocator" className="hover:underline">Store Locator</Link></li>
                            <li><Link href="/pages/site-map" className="hover:underline">Sitemap</Link></li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    {/* <div className="md:col-span-3">
                        <h3 className="text-sm font-semibold mb-4">Contact Us</h3>
                        <div className="space-y-4 text-sm">
                            <div className="flex items-start space-x-3">
                                <div className="w-8 h-8 bg-pink-500 rounded flex items-center justify-center flex-shrink-0">
                                    <svg width="16" height="16" viewBox="0 0 35 35" fill="none">
                                        <path d="M11.3333 11.6016H23.3333C24.1583 11.6016 24.8333 12.2766 24.8333 13.1016V22.1016C24.8333 22.9266 24.1583 23.6016 23.3333 23.6016H11.3333C10.5083 23.6016 9.83325 22.9266 9.83325 22.1016V13.1016C9.83325 12.2766 10.5083 11.6016 11.3333 11.6016Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M24.8333 13.1016L17.3333 18.3516L9.83325 13.1016" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <a href="mailto:care@hometown.in" className="hover:underline">care@hometown.in</a>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center flex-shrink-0">
                                    <svg width="16" height="16" viewBox="0 0 35 35" fill="none">
                                        <path
                                            d="M24.8338 21.2916V23.5416C24.8347 23.7505 24.7919 23.9573 24.7082 24.1486C24.6245 24.34 24.5018 24.5118 24.3479 24.653C24.194 24.7942 24.0122 24.9017 23.8144 24.9687C23.6165 25.0356 23.4068 25.0604 23.1988 25.0416C20.8909 24.7909 18.6741 24.0022 16.7263 22.7391C14.9142 21.5876 13.3778 20.0513 12.2263 18.2391C10.9588 16.2825 10.17 14.0549 9.92381 11.7366C9.90507 11.5292 9.92972 11.3202 9.99619 11.1229C10.0627 10.9255 10.1695 10.7442 10.3099 10.5904C10.4503 10.4365 10.6212 10.3137 10.8117 10.2295C11.0021 10.1454 11.2081 10.1018 11.4163 10.1016H13.6663C14.0303 10.0981 14.3832 10.2269 14.6591 10.4643C14.9351 10.7016 15.1154 11.0312 15.1663 11.3916C15.2613 12.1117 15.4374 12.8187 15.6913 13.4991C15.7922 13.7676 15.8141 14.0593 15.7542 14.3398C15.6944 14.6203 15.5555 14.8777 15.3538 15.0816L14.4013 16.0341C15.469 17.9118 17.0237 19.4665 18.9013 20.5341L19.8538 19.5816C20.0577 19.38 20.3152 19.241 20.5957 19.1812C20.8761 19.1214 21.1679 19.1432 21.4363 19.2441C22.1168 19.498 22.8238 19.6742 23.5438 19.7691C23.9081 19.8205 24.2409 20.004 24.4787 20.2848C24.7166 20.5655 24.8429 20.9238 24.8338 21.2916Z"
                                            stroke="white"
                                            strokeWidth="1.64"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <a href="tel:08069252525" className="hover:underline">08069252525 (Availability 10AM - 7PM)</a>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center flex-shrink-0">
                                    <svg width="16" height="16" viewBox="0 0 35 35" fill="none">
                                        <path
                                            d="M24.0833 16.1016C24.0833 21.3516 17.3333 25.8516 17.3333 25.8516C17.3333 25.8516 10.5833 21.3516 10.5833 16.1016C10.5833 14.3114 11.2944 12.5945 12.5603 11.3286C13.8262 10.0627 15.543 9.35156 17.3333 9.35156C19.1235 9.35156 20.8404 10.0627 22.1062 11.3286C23.3721 12.5945 24.0833 14.3114 24.0833 16.1016Z"
                                            stroke="white"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M17.3333 18.3516C18.5759 18.3516 19.5833 17.3442 19.5833 16.1016C19.5833 14.8589 18.5759 13.8516 17.3333 13.8516C16.0906 13.8516 15.0833 14.8589 15.0833 16.1016C15.0833 17.3442 16.0906 18.3516 17.3333 18.3516Z"
                                            stroke="white"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <Link href="/a/storelocator" className="hover:underline">Store Locator</Link>
                            </div>
                        </div>
                    </div> */}
                    <div className="md:col-span-3">
                        <h3 className="text-sm font-semibold mb-4">Contact Us</h3>
                        <div className="space-y-4 text-sm">
                            <div className="flex items-start space-x-3">
                                <div className="w-8 h-8 bg-pink-500 rounded flex items-center justify-center flex-shrink-0">
                                    <Mail color="white" size={16} />
                                </div>
                                <a href="mailto:care@hometown.in" className="hover:underline">care@hometown.in</a>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center flex-shrink-0">
                                    <Phone color="white" size={16} />
                                </div>
                                <a href="tel:08069252525" className="hover:underline">08069252525 (Availability 10AM - 7PM)</a>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center flex-shrink-0">
                                    <MapPin color="white" size={16} />
                                </div>
                                <Link href="/a/storelocator" className="hover:underline">Store Locator</Link>
                            </div>
                        </div>
                    </div>


                </div>

                {/* Bottom Footer */}
                <div className="border-t border-gray-200 pt-6 mt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center text-sm">
                        <p>&copy; 2025 <Link href="/" className="underline">HT Interiors</Link></p>
                        <ul className="flex flex-wrap justify-center md:justify-end space-x-4 mt-4 md:mt-0">
                            <li><Link href="/policies/terms-of-service" className="hover:underline">Terms & Conditions</Link></li>
                            <li><Link href="/policies/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
                            <li><Link href="/policies/refund-policy" className="hover:underline">Refund policy</Link></li>
                            <li><Link href="/policies/shipping-policy" className="hover:underline">Shipping policy</Link></li>
                            <li><Link href="/policies/contact-information" className="hover:underline">Contact information</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;