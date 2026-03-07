'use client';
import seoData from "@/pages/data/intentionSeo.json";
import Head from "next/head";
import { useProducts } from '@/context/ProductsContext';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Heart, SearchCheck } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { deleteCartitemsApi, postCartitemApi, updateCartitemsApi } from '@/api-endpoints/CartsApi';
import { InvalidateQueryFilters, useQueryClient } from '@tanstack/react-query';
import { useVendor } from '@/context/VendorContext';
import LoginModal from '../pages/LoginModal/page';
import { useCartItem } from '@/context/CartItemContext';
import ProductCard from './ProductCard';
import { useRouter } from 'next/router';
import { Pagination } from './Pagination';
import img from "@/public/catAb.jpg"
import { useIntentions } from '@/context/IntentionsContext';
import ProductCardSkeleton from './ProductCardSkeleton';

export default function IntensionsBasedProduct() {
    const topRef = useRef<HTMLDivElement>(null);
    const router = useRouter();
    const { name } = router.query;
    const [getUserId, setUserId] = useState<string | null>(null);
    const [getCartId, setCartId] = useState<string | null>(null);
    const [getUserName, setUserName] = useState<string | null>(null);
    const [signInmodal, setSignInModal] = useState(false);
    const { products, isLoading }: any = useProducts();
    const { intentions }: any = useIntentions();
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);
    const queryClient = useQueryClient();
    const { vendorId } = useVendor();
    const { cartItem }: any = useCartItem();
    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 12;

    useEffect(() => {
        const storedUserId = localStorage.getItem('userId');
        const storedCartId = localStorage.getItem('cartId');
        const storedUserName = localStorage.getItem('userName');

        setUserId(storedUserId);
        setCartId(storedCartId);
        setUserName(storedUserName);
    }, []);

    // Find the category name by ID
    const intention = intentions?.find(
        (cat: any) => cat.name?.toString() === name
    );

    const filteredProducts = products?.data
        ?.filter(
            (product: any) =>
                product.subcategory_name?.toString() === name &&
                (product.status === true ||
                    product.status === 1 ||
                    product.status === '1' ||
                    product.status === 'true' ||
                    product.status === 'TRUE' ||
                    product.status === 'active' ||
                    product.status === 'ACTIVE')
        );

    const filteredMatchingProductsArray = filteredProducts?.map((product: any, index: number) => {
        const matchingCartItem = cartItem?.data?.find((item: any) => item?.product === product?.id);
        if (matchingCartItem) {
            return {
                ...product,
                Aid: index,
                cartQty: matchingCartItem?.quantity,
                cartId: matchingCartItem.id,
            };
        }
        return product;
    });

    const totalPages = Math.ceil((filteredMatchingProductsArray?.length || 0) / ITEMS_PER_PAGE);

    const paginatedItems = filteredMatchingProductsArray?.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    function slugConvert(name: string) {
        return name
            .toLowerCase()
            .trim()
            .replace(/\s+/g, '-')         // Replace spaces with hyphens
            .replace(/[^\w-]+/g, '');     // Remove non-word characters except hyphens
    }

    // --- SEO Logic ---
    const slug = typeof name === 'string' ? name : "main";
    const seoKey = Object.keys(seoData).find(key => key.toLowerCase() === slug.toLowerCase()) || "main";
    const seo = (seoData as any)[seoKey] || seoData.main;

    // Get the first product image URL from the API for dynamic SEO
    const firstProductImage = filteredMatchingProductsArray?.[0]?.image_urls?.[0];

    return (
        <>
            <Head>
                <title>{seo?.title}</title>
                <meta name="description" content={seo?.description} />
                <meta name="keywords" content={seo?.keywords} />

                {/* Canonical URL */}
                <link rel="canonical" href={seo?.url} />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content={seo?.ogTitle || seo?.title} />
                <meta property="og:description" content={seo?.ogDescription || seo?.description} />
                <meta property="og:url" content={seo?.url} />
                <meta property="og:site_name" content="Om Sritara" />
                <meta property="og:image" content={firstProductImage || seo?.ogImage || seo?.image} />
                <meta property="og:image:alt" content={seo?.ogImageAlt || seo?.title} />
                <meta property="og:locale" content="en_IN" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={seo?.twitterTitle || seo?.title} />
                <meta name="twitter:description" content={seo?.twitterDescription || seo?.description} />
                <meta name="twitter:image" content={firstProductImage || seo?.twitterImage || seo?.image} />
                <meta name="twitter:site" content="@omsritara" />

                {/* Schema */}
                {seo?.schema && (
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify(seo.schema)
                        }}
                    />
                )}
            </Head>

            <div className="max-w-6xl mx-auto px-2 md:px-4 py-10" ref={topRef}>
                <div className="my-2 mb-5 flex">
                    <ArrowLeft onClick={() => router.back()} className='text-gray-400 cursor-pointer' />
                    <div className="text-md text-gray-400 flex mt-0.5 gap-1">
                        <span>
                            Home</span><span className='cursor-pointer flex' onClick={() => router.back()}>/ {name}</span>  <span className='text-[#a5291b]'>/ Shop</span></div>
                </div>
                {/* <Image src={intention?.banner_image !== null ? intention?.banner_image : img} alt='banner image' className='w-full h-32 md:h-72 px-2 md:m-2 rounded-md' height={100} width={300} /> */}

                <div className='m-2'>
                    <div className='' dangerouslySetInnerHTML={{ __html: intention?.description2 }} />
                </div>
                <h1 className="text-3xl font-bold  text-[#a5291b] mb-6 mt-6 text-center">
                    {name} Products
                </h1>
                {isLoading ? (
                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
                        {[...Array(6)].map((_, idx) => (
                            <div key={idx} className="px-2">
                                <ProductCardSkeleton />
                            </div>
                        ))}
                    </div>
                ) : paginatedItems?.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {paginatedItems.map((product: any, idx: number) => (
                            <div
                                key={idx}
                                className=""
                                onClick={() => router.push(`/shop/${slugConvert(product?.name)}`)}
                            >
                                <ProductCard
                                    image={product?.image_urls[0] || ''}
                                    hoverImage={product?.image_urls[1] || ''}
                                    title={product?.name}
                                    price={product?.price}
                                    onAddToCart={() => alert(`Add to cart: ${product?.name}`)}
                                    onView={() => router.push(`/shop/${slugConvert(product?.name)}`)}
                                    onWishlist={() => alert(`Wishlist: ${product?.name}`)}
                                    product={product}
                                />
                            </div>
                        ))}
                        {totalPages > 1 && (
                            <div className="flex justify-center mt-6">
                                <Pagination
                                    currentPage={currentPage}
                                    totalPages={totalPages}
                                    onPageChange={(page) => {
                                        setCurrentPage(page);
                                        topRef.current?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                />
                            </div>
                        )}
                    </div>
                ) : (
                    <p className="text-center text-gray-500">No products found for this category.</p>
                )}
                {signInmodal && (
                    <LoginModal open={signInmodal} handleClose={() => setSignInModal(false)} vendorId={vendorId} />
                )}
            </div>
        </>
    );
}