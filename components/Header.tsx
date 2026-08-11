'use client';
import React, { useState, useEffect, useRef, Fragment } from 'react';
import {
    Menu,
    X,
    ShoppingCart,
    User,
    Heart,
    ChevronDown,
    Calendar,
    Sparkles,
    Phone
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import SearchBar from './SearchBar';
import logo from '@/public/logo.png';

import { useProducts } from '@/context/ProductsContext';
import { useCurrency } from '@/context/CurrencyContext';
import { useVendor } from '@/context/VendorContext';
import { useUser } from '@/context/UserContext';
import { useCartItem } from '@/context/CartItemContext';
import { useWishList } from '@/context/WishListContext';
import LoginModal from '@/pages/LoginModal/page';
import { useCategories } from '@/context/CategoriesContext';
import { useIntentions } from '@/context/IntentionsContext';
import QuickSearch from './SearchBar';
import { slugConvert } from '@/lib/utils';
// import { getCategoriesWithSubcategoriesApi } from '@/Api-Service/Apis';

type Category = {
    id: number | string;
    name: string;
    subcategories?: { id: number | string; name: string }[];
};

const gemstonesData = [
    {
        title: "Rashi Navratna",
        items: [
            "Mesham", "Rishabam", "Mithunam", "Kadagam", "Simmam", "Kanni", "Thulam", "Viruchigam", "Dhanusu", "Magaram", "Kumbam", "Meenam"
        ]
    },
    {
        title: "Planet Gemstone",
        items: [
            "Sun Gemstones", "Moon (Chandra) Gemstones", "Mars (Mangal) Gemstones", "Mercury Gemstones", "Jupiter (Guru) Gemstones", "Venus (Shukra) Gemstones", "Saturn (Shani) Gemstones", "Rahu Gemstones", "Ketu Gemstones"
        ]
    },
    // {
    //     title: "Precious Gemstones",
    //     items: [
    //         "Sulemani Red Hakik", "Iolite (Neeli)", "Sulemani Black Hakik", "Amethyst (Jamunia)", "Moon Stone", "Peridot", "Citrine (Sunela)", "Blue Topaz", "White Topaz", "Yellow Topaz"
    //     ]
    // },
    // {
    //     title: "Semi-Precious Gemstones",
    //     items: [
    //         "Pink Sapphire", "Purple Sapphire", "Blue Sapphire (Neelam)", "White Sapphire", "Bi-Color Sapphire (Pitambari)", "Padparadscha"
    //     ]
    // },

    {
        title: "Birthstones",
        items: [
            "January Birthstone", "February Birthstone", "March Birthstone", "April Birthstone", "May Birthstone", "June Birthstone", "July Birthstone", "August Birthstone", "September Birthstone", "October Birthstone", "November Birthstone", "December Birthstone"
        ]
    }
];


const Header: React.FC = () => {
    const { vendorId } = useVendor();
    const { user, setUser } = useUser();
    const { cartItem } = useCartItem();
    const { currency, setCurrency } = useCurrency();
    const { products } = useProducts();
    const pathname = usePathname() || "";

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
    const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
    const [isGemstonesOpen, setIsGemstonesOpen] = useState(false);
    const [isIntentionOpen, setIsIntentionOpen] = useState(false);
    const [isOffersOpen, setIsOffersOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [signInModal, setSignInModal] = useState(false);
    const [isMobileGemstonesOpen, setIsMobileGemstonesOpen] = useState(false);


    const currencyRef = useRef<HTMLDivElement>(null);
    const userMenuRef = useRef<HTMLDivElement>(null);
    const categoriesRef = useRef<HTMLDivElement>(null);
    const gemstonesRef = useRef<HTMLDivElement>(null);
    const intentionRef = useRef<HTMLDivElement>(null);
    const offersRef = useRef<HTMLDivElement>(null);

    const userName = user?.data?.name ?? '';
    const userId = user?.data?.id ?? '';
    const cartCount = cartItem?.data?.length ?? 0;
    const { categories, isLoading } = useCategories();
    const { intentions, isIntentionsLoading }: any = useIntentions();
    const offersPage = [
        { name: "Combo Offers", url: '/combo-offers' },
        { name: "Money Combo", url: '/combo-offers-money' },
        { name: "Relationship Combo", url: '/combo-offers-love' },
    ];
    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (
                isCurrencyOpen &&
                currencyRef.current &&
                !currencyRef.current.contains(e.target as Node)
            )
                setIsCurrencyOpen(false);

            if (
                isUserMenuOpen &&
                userMenuRef.current &&
                !userMenuRef.current.contains(e.target as Node)
            )
                setIsUserMenuOpen(false);

            if (
                isCategoriesOpen &&
                categoriesRef.current &&
                !categoriesRef.current.contains(e.target as Node)
            )
                setIsCategoriesOpen(false);

            if (
                isGemstonesOpen &&
                gemstonesRef.current &&
                !gemstonesRef.current.contains(e.target as Node)
            )
                setIsGemstonesOpen(false);
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isCurrencyOpen, isUserMenuOpen, isCategoriesOpen, isGemstonesOpen]);

    /* ---------- helpers ---------- */
    const router = useRouter();
    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    const logout = () => {
        ['userId', 'userName', 'email', 'cartId'].forEach((k) =>
            localStorage.removeItem(k)
        );
        setUser(null);
    };

    const isActive = (path: string) => {
        if (path === "/") return pathname === "/";
        return pathname.startsWith(path);
    };

    return (
        <>
            <header className="w-full pb-4 bg-white relative">
                <div className="flex items-center justify-between  py-3 mx-10">
                    {/* logo */}
                    <Link href="/">
                        <Image
                            src={logo}
                            alt="Omsritara Logo"
                            className="w-24 h-auto md:w-24"
                            priority
                        />
                    </Link>

                    {/* right‑hand icons (desktop) */}
                    <div className="hidden lg:flex items-center gap-6 text-sm">
                        {/* search (desktop only) */}
                        {/* <div className="hidden lg:flex  "> */}
                        <QuickSearch products={products?.data} />
                        {/* </div> */}

                        <Link href="/cart" className="flex items-center gap-1 cursor-pointer">
                            <span className="ml-2">Cart</span>
                            <span className="relative">
                                <ShoppingCart size={18} />
                                {cartCount > 0 && (
                                    <span className="absolute -top-1 -right-3 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-[10px] text-white">
                                        {cartCount}
                                    </span>
                                )}
                            </span>
                        </Link>
                        {/* wishlist / cart */}
                        <Link
                            href="/wishlist"
                            className="flex items-center gap-1 cursor-pointer"
                        >
                            Wishlist  <Heart size={18} />
                        </Link>
                        {/* currency switcher */}
                        <div className="relative" ref={currencyRef}>
                            <button
                                onClick={() => setIsCurrencyOpen((o) => !o)}
                                className="flex items-center gap-1"
                            >
                                {currency} <ChevronDown className="w-4 h-4" />
                            </button>
                            {isCurrencyOpen && (
                                <div className="absolute mt-2 bg-white shadow-md rounded-md border w-24">
                                    {(['INR', 'USD'] as const).map((c) => (
                                        <button
                                            key={c}
                                            onClick={() => {
                                                setCurrency(c);
                                                setIsCurrencyOpen(false);
                                            }}
                                            className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                                        >
                                            {c}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* user / login */}
                        <div className="relative" ref={userMenuRef}>
                            {userName || userId ? (
                                <>
                                    <button
                                        onClick={() => setIsUserMenuOpen((o) => !o)}
                                        className="flex items-center gap-1 cursor-pointer"
                                    >
                                        <User size={18} />
                                        {userName ? userName?.split(' ')[0] : 'user'}
                                        <ChevronDown className="w-4 h-4" />
                                    </button>

                                    {isUserMenuOpen && (
                                        <div className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow text-sm z-50">
                                            <Link
                                                href="/profile?tab=account"
                                                className="block px-4 py-2 hover:bg-gray-100 m-2 rounded-md"
                                                onClick={() => setIsUserMenuOpen(false)}
                                            >
                                                Profile
                                            </Link>
                                            <Link
                                                href="/profile?tab=orders"
                                                className="block px-4 py-2 hover:bg-gray-100 m-2 rounded-md"
                                                onClick={() => setIsUserMenuOpen(false)}
                                            >
                                                Orders
                                            </Link>
                                            <button
                                                onClick={logout}
                                                className="block text-left py-2 hover:bg-red-600 pl-4 mx-2 mt-2 mb-2  hover:text-white rounded-md w-[90%]"
                                            >
                                                Logout
                                            </button>
                                        </div>
                                    )}
                                </>
                            ) : (
                                <button
                                    onClick={() => setSignInModal(true)}
                                    className="flex items-center gap-1 cursor-pointer bg-[#a5291b] text-white px-4 py-2 rounded-md"
                                >
                                    <User size={18} /> Login
                                </button>
                            )}
                        </div>
                    </div>

                    {/* mobile menu toggle */}
                    <button
                        className="lg:hidden text-[#a5291b]"
                        onClick={() => setIsMobileMenuOpen((o) => !o)}
                    >
                        {isMobileMenuOpen ? "" : <Menu />}
                    </button>
                </div>


                {/* ---------- DESKTOP MAIN NAV --------------------------------------- */}
                <div className="hidden lg:flex justify-evenly px-12 py-1 text-md text-white bg-[#a5291b] mx-10 rounded-md">
                    <div className="flex justify-evenly w-full">
                        <Link
                            href="/"
                            className={`nav-item relative ${isActive("/") ? "underline" : ""}`}
                        >
                            Home
                        </Link>

                        <Link
                            href="/shop"
                            className={`nav-item relative ${isActive("/shop") ? "underline" : ""}`}
                        >
                            Shop
                        </Link>

                        {/* Categories hover menu */}
                        <div
                            className="relative"
                            ref={categoriesRef}
                            onMouseEnter={() => setIsCategoriesOpen(true)}
                            onMouseLeave={() => setIsCategoriesOpen(false)}
                        >
                            <button
                                onClick={() => { if (pathname !== "/categories") router.push("/categories"); }}
                                className={`nav-item relative flex items-center gap-1 ${pathname.startsWith("/categories") ? "underline" : ""}`}
                                type="button"
                            >
                                Categories
                                <ChevronDown className="w-4 h-4" />
                            </button>

                            {isCategoriesOpen && (
                                <div className="absolute left-0 w-48 bg-white text-black border rounded-md shadow text-sm z-50 max-h-80 overflow-y-auto no-scrollbar">
                                    {isLoading ? (
                                        <div className="px-4 py-2">Loading…</div>
                                    ) : categories?.data?.length ? (
                                        categories.data.map((cat: any) => (
                                            <Fragment key={cat.id}>
                                                <Link
                                                    href={`/categories/${slugConvert(cat.name)}`}
                                                    className="block px-4 py-2 hover:bg-gray-100"
                                                    onClick={() => setIsCategoriesOpen(false)}
                                                >
                                                    {cat.name}
                                                </Link>
                                            </Fragment>
                                        ))
                                    ) : (
                                        <div className="px-4 py-2">No categories found</div>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Gemstones hover menu */}
                        <div
                            className=""
                            ref={gemstonesRef}
                            onMouseEnter={() => setIsGemstonesOpen(true)}
                            onMouseLeave={() => setIsGemstonesOpen(false)}
                        >
                            <button
                                onClick={() => { if (pathname !== "/gemstones") router.push("/gemstones"); }}
                                className={`nav-item relative flex items-center gap-1 ${pathname.startsWith("/gemstones") ? "underline" : ""}`}
                                type="button"
                            >
                                Gemstones
                                <ChevronDown className="w-4 h-4" />
                            </button>

                            {isGemstonesOpen && (
                                <div className="absolute top-[calc(100%-1rem)] left-0 w-full z-[60] px-10 flex justify-center">
                                    <div className="bg-white border text-black rounded-md shadow-2xl text-sm p-8 max-h-[75vh] overflow-y-auto no-scrollbar relative cursor-default w-full max-w-5xl">
                                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-8">
                                            {gemstonesData.map((section) => (
                                                <div key={section.title} className="flex flex-col">
                                                    <h3 className="font-bold text-[#a5291b] mb-3 border-b border-gray-200 pb-1 text-base">{section.title}</h3>
                                                    <ul className="flex flex-col gap-2">
                                                        {section.items.map((item) => (
                                                            <li key={item}>
                                                                <Link
                                                                    href={`/gemstones/${slugConvert(item)}`}
                                                                    className="hover:text-[#a5291b] text-gray-700 hover:underline transition-colors duration-200"
                                                                    onClick={() => setIsGemstonesOpen(false)}
                                                                >
                                                                    {item}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                            <div className="flex flex-col relative overflow-hidden bg-gradient-to-b from-white to-red-50/50 p-6 rounded-2xl border border-red-100 hover:border-red-300 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_40px_-10px_rgba(165,41,27,0.3)] transition-all duration-500 group h-full">
                                                {/* Animated background glow */}
                                                <div className="absolute -top-16 -right-16 w-40 h-40 bg-gradient-to-br from-amber-100 to-red-200 rounded-full blur-3xl opacity-50 group-hover:opacity-80 group-hover:scale-150 transition-all duration-700"></div>
                                                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-red-100 rounded-full blur-2xl opacity-50 group-hover:scale-125 transition-transform duration-700 delay-100"></div>

                                                <div className="z-10 relative flex flex-col h-full">
                                                    <div className="flex items-start justify-between mb-4">
                                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-bold tracking-wider text-[#a5291b] uppercase bg-red-100/80 rounded-full border border-red-200 backdrop-blur-sm">
                                                            <span className="relative flex h-1.5 w-1.5">
                                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500"></span>
                                                            </span>
                                                            Live Experts
                                                        </span>
                                                        <div className="p-2 bg-red-50 rounded-full text-[#a5291b] group-hover:bg-[#a5291b] group-hover:text-white transition-colors duration-300">
                                                            <User className="w-4 h-4" />
                                                        </div>
                                                    </div>

                                                    <h3 className="font-extrabold text-gray-900 mb-2 text-xl tracking-tight group-hover:text-[#a5291b] transition-colors duration-300">
                                                        Consultation
                                                    </h3>

                                                    <p className="text-gray-500 text-sm mb-6 leading-relaxed flex-grow">
                                                        Connect with certified astrologers & gemologists for highly personalized gemstone remedies and life guidance.
                                                    </p>

                                                    <a
                                                        href="tel:+917092973555"
                                                        onClick={() => setIsGemstonesOpen(false)}
                                                        className="relative overflow-hidden z-10 bg-white text-[#a5291b] border-2 border-[#a5291b] text-center py-2.5 px-4 rounded-xl font-bold text-sm shadow-sm group-hover:bg-[#a5291b] group-hover:text-white transform transition-all duration-300 hover:-translate-y-1 mt-auto flex items-center justify-center gap-2 w-full"
                                                    >
                                                        <Phone className="w-4 h-4" />
                                                        <span>Call Now</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Intention hover menu */}
                        <div
                            className="relative"
                            ref={intentionRef}
                            onMouseEnter={() => setIsIntentionOpen(true)}
                            onMouseLeave={() => setIsIntentionOpen(false)}
                        >
                            <button
                                onClick={() => { if (pathname !== "/shopByIntention") router.push("/shopByIntention"); }}
                                className={`nav-item relative flex items-center gap-1 ${pathname.startsWith("/shopByIntention") ? "underline" : ""}`}
                                type="button"
                            >
                                Shop by Intention
                                <ChevronDown className="w-4 h-4" />
                            </button>

                            {isIntentionOpen && (
                                <div className="absolute left-0 w-56 bg-white border text-black rounded-md shadow text-sm z-50 max-h-80 overflow-y-auto no-scrollbar">
                                    {isIntentionsLoading ? (
                                        <div className="px-4 py-2">Loading…</div>
                                    ) : intentions?.length ? (
                                        intentions.map((cat: any) => (
                                            <Fragment key={cat.id}>
                                                <Link
                                                    href={`/shopByIntention/${cat.name}`}
                                                    className="block px-4 py-2 hover:bg-gray-100"
                                                    onClick={() => setIsIntentionOpen(false)}
                                                >
                                                    {cat.name}
                                                </Link>
                                            </Fragment>
                                        ))
                                    ) : (
                                        <div className="px-4 py-2">No intentions found</div>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Offers hover menu */}
                        <div
                            className="relative"
                            ref={intentionRef}
                            onMouseEnter={() => setIsOffersOpen(true)}
                            onMouseLeave={() => setIsOffersOpen(false)}
                        >
                            <button
                                onClick={() => { if (pathname !== "/combo-offers") router.push("/combo-offers"); }}
                                className={`nav-item relative flex items-center gap-1 ${pathname.startsWith("/combo-offers") ? "underline" : ""}`}
                                type="button"
                            >
                                Offers
                                <ChevronDown className="w-4 h-4" />
                            </button>

                            {isOffersOpen && (
                                <div className="absolute left-0 w-52 bg-white border text-black rounded-md shadow text-sm z-50 max-h-80 overflow-y-auto no-scrollbar">

                                    {offersPage.map((cat: any) => (
                                        <Fragment key={cat.id}>
                                            <Link
                                                href={`/${cat.url}`}
                                                className="block px-4 py-2 hover:bg-gray-100"
                                                onClick={() => setIsIntentionOpen(false)}
                                            >
                                                {cat.name}
                                            </Link>
                                        </Fragment>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* <Link
                            href="/combo-offers"
                            className={`nav-item relative ${isActive("/combo-offers") ? "underline" : ""}`}
                        >
                            Offers
                        </Link> */}

                        {/* <Link
                            href="/blog"
                            className={`nav-item relative ${isActive("/blog") ? "underline" : ""}`}
                        >
                            Blog
                        </Link> */}

                        <Link
                            href="/buying-guide"
                            className={`nav-item relative ${isActive("/buying-guide") ? "underline" : ""}`}
                        >
                            Buying Guide
                        </Link>

                        <Link
                            href="/contact-us"
                            className={`nav-item relative ${isActive("/contact-us") ? "underline" : ""}`}
                        >
                            Contact&nbsp;Us
                        </Link>

                        <Link
                            href="/about"
                            className={`nav-item relative ${isActive("/about") ? "underline" : ""}`}
                        >
                            About&nbsp;Us
                        </Link>
                        <Link
                            href="/courses"
                            className={`nav-item relative ${isActive("/courses") ? "underline" : ""}`}
                        >
                            Academy
                        </Link>
                    </div>
                </div>

                {/* ---------- MOBILE MENU -------------------------------------------- */}
                {isMobileMenuOpen && (
                    <div
                        className={`fixed top-0 left-0 z-50 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0 ' : '-translate-x-full'
                            }`}
                    >
                        {/* Backdrop */}
                        <div
                            className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
                            onClick={closeMobileMenu}
                        />

                        {/* Sidebar (Drawer) */}
                        <div
                            className={`absolute top-0 left-0 w-72 h-full bg-white shadow-lg p-4 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                                }`}
                        >
                            {/* Close button */}
                            <div className="flex justify-end">
                                <button onClick={closeMobileMenu} className="text-[#a5291b]">
                                    <X />
                                </button>
                            </div>

                            {/* Logo */}
                            <Image
                                src={logo}
                                alt="Omsritara Logo"
                                height={90}
                                width={90}
                                className="w-32 h-auto mb-4"
                                priority
                            />

                            <nav className="flex flex-col gap-3">
                                <Link
                                    href="/"
                                    onClick={closeMobileMenu}
                                    className={`relative pb-1 ${isActive("/") ? "underline" : ""}`}
                                >
                                    Home
                                </Link>

                                <Link
                                    href="/shop"
                                    onClick={closeMobileMenu}
                                    className={`relative pb-1 ${isActive("/shop") ? "underline" : ""}`}
                                >
                                    Shop
                                </Link>

                                <Link
                                    href="/categories"
                                    onClick={closeMobileMenu}
                                    className={`relative pb-1 ${pathname.startsWith("/categories") ? "underline" : ""}`}
                                >
                                    Categories
                                </Link>

                                {/* Mobile Gemstones Menu */}
                                <div className="w-full">
                                    <button
                                        onClick={() => setIsMobileGemstonesOpen(!isMobileGemstonesOpen)}
                                        className={`flex items-center justify-between w-full relative pb-1 ${pathname.startsWith("/gemstones") ? "underline" : ""}`}
                                    >
                                        Gemstones
                                        <ChevronDown className={`w-4 h-4 transition-transform ${isMobileGemstonesOpen ? "rotate-180" : ""}`} />
                                    </button>

                                    {isMobileGemstonesOpen && (
                                        <div className="pl-4 mt-2 flex flex-col gap-6 max-h-[50vh] overflow-y-auto no-scrollbar mb-2">
                                            {gemstonesData.map((section) => (
                                                <div key={section.title}>
                                                    <h3 className="font-bold text-[#a5291b] mb-2">{section.title}</h3>
                                                    <ul className="flex flex-col gap-2">
                                                        {section.items.map((item) => (
                                                            <li key={item}>
                                                                <Link
                                                                    href={`/gemstones/${slugConvert(item)}`}
                                                                    className="text-sm text-gray-700 block py-0.5"
                                                                    onClick={closeMobileMenu}
                                                                >
                                                                    {item}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                            <div className="relative overflow-hidden bg-gradient-to-b from-white to-red-50/50 p-5 rounded-xl border border-red-100 mt-4 shadow-sm group">
                                                <div className="absolute -top-10 -right-10 w-24 h-24 bg-red-100 rounded-full blur-xl opacity-70"></div>

                                                <div className="z-10 relative">
                                                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 mb-3 text-[9px] font-bold tracking-wider text-[#a5291b] uppercase bg-red-100/80 rounded-full border border-red-200">
                                                        <span className="relative flex h-1.5 w-1.5">
                                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500"></span>
                                                        </span>
                                                        Live Experts
                                                    </span>

                                                    <h3 className="font-extrabold text-gray-900 mb-1 text-base group-hover:text-[#a5291b] transition-colors">
                                                        Consultation
                                                    </h3>

                                                    <p className="text-gray-500 text-xs mb-4 leading-relaxed">
                                                        Connect with certified astrologers for personalized gemstone remedies.
                                                    </p>

                                                    <a
                                                        href="tel:+918989052020"
                                                        className="relative overflow-hidden bg-white text-[#a5291b] border-2 border-[#a5291b] flex items-center justify-center gap-2 py-2 px-4 rounded-lg text-sm font-bold transition-all hover:bg-[#a5291b] hover:text-white"
                                                        onClick={closeMobileMenu}
                                                    >
                                                        <Phone className="w-4 h-4" />
                                                        Call Now
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <Link
                                    href="/shopByIntention"
                                    onClick={closeMobileMenu}
                                    className={`relative pb-1 ${pathname.startsWith("/shopByIntention") ? "underline" : ""}`}
                                >
                                    Shop by Intention
                                </Link>

                                <Link
                                    href="/combo-offers"
                                    onClick={closeMobileMenu}
                                    className={`relative pb-1 ${pathname === "/combo-offers" ? "underline" : ""}`}
                                >
                                    Combo Offers
                                </Link>
                                <Link
                                    href="/combo-offers-money"
                                    onClick={closeMobileMenu}
                                    className={`relative pb-1 ${pathname === "/combo-offers" ? "underline" : ""}`}
                                >
                                    Money Combo
                                </Link>

                                <Link
                                    href="/combo-offers-love"
                                    onClick={closeMobileMenu}
                                    className={`relative pb-1 ${pathname === "/combo-offers-love" ? "underline" : ""}`}
                                >
                                    Relationship Combo
                                </Link>

                                {/* <Link
                                    href="/blog"
                                    onClick={closeMobileMenu}
                                    className={`relative pb-1 ${isActive("/blog") ? "underline" : ""}`}
                                >
                                    Blog
                                </Link> */}

                                <Link
                                    href="/buying-guide"
                                    onClick={closeMobileMenu}
                                    className={`relative pb-1 ${isActive("/buying-guide") ? "underline" : ""}`}
                                >
                                    Buying Guide
                                </Link>

                                <Link
                                    href="/contact-us"
                                    onClick={closeMobileMenu}
                                    className={` ${isActive("/contact-us") ? "underline" : ""}`}
                                >
                                    Contact Us
                                </Link>

                                <Link
                                    href="/about"
                                    onClick={closeMobileMenu}
                                    className={`relative pb-1 ${isActive("/about") ? "underline" : ""}`}
                                >
                                    About Us
                                </Link>
                                <Link
                                    href="/courses"
                                    onClick={closeMobileMenu}
                                    className={`relative pb-1 ${isActive("/courses") ? "underline" : ""}`}
                                >
                                    Academy
                                </Link>

                                <Link
                                    href="/cart"
                                    onClick={closeMobileMenu}
                                    className={`relative pb-1 ${isActive("/cart") ? "underline" : ""}`}
                                >
                                    Cart
                                </Link>
                            </nav>
                            {/* User Section */}
                            <div className="mt-6 flex flex-col gap-3 text-sm">
                                {userName ? (
                                    <>
                                        <Link href="/wishlist" onClick={closeMobileMenu}>Wishlist</Link>
                                        <Link href="/profile?tab=account" onClick={closeMobileMenu}>
                                            {userName.split(' ')[0]}'s Account
                                        </Link>
                                        <button
                                            onClick={() => { logout(); closeMobileMenu(); }}
                                            className="text-left text-red-700 font-semibold"
                                        >
                                            Logout
                                        </button>
                                    </>
                                ) : (
                                    <button
                                        onClick={() => { setSignInModal(true); closeMobileMenu(); }}
                                        className="text-left"
                                    >
                                        Login
                                    </button>
                                )}
                            </div>

                            {/* Footer */}
                            <div className="mt-6 pt-4 border-t text-red-700 font-bold">
                                Call&nbsp;Us:&nbsp;+91&nbsp;89890&nbsp;52020
                            </div>
                        </div>
                    </div>
                )}



                <div className=" lg:hidden flex-1 mx-4">
                    <SearchBar products={products?.data} />
                </div>
            </header>

            {/* ---------- LOGIN MODAL -------------------------------------------- */}
            {signInModal && (
                <LoginModal
                    open={signInModal}
                    handleClose={() => setSignInModal(false)}
                    vendorId={vendorId}
                />
            )}
        </>
    );
};

export default Header;
