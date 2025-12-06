'use client';
import React from 'react';
import Slider from 'react-slick';
import ProductCard from './ProductCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import bg from '@/public/omsritara-new-arrivalas-bg.png';
import { useProducts } from '@/context/ProductsContext';
import { useRouter } from 'next/navigation';
import { useCartItem } from '@/context/CartItemContext';
import { useWishList } from '@/context/WishListContext';
import ProductCardSkeleton from './ProductCardSkeleton';

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: false,
  cssEase: 'linear',
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 3 } },
    { breakpoint: 768, settings: { slidesToShow: 2 } },
    { breakpoint: 640, settings: { slidesToShow: 2 } },
  ],
};

const NewArrivals: React.FC = () => {
  const { products, isLoading }: any = useProducts();
  const { wishList }: any = useWishList();
  const { cartItem }: any = useCartItem();
  const router = useRouter();

  const mergedProductData = React.useMemo(() => {
    if (!products?.data) return [];

    // Filter products by status
    const activeProducts = products.data.filter((product: any) =>
      product.status === true ||
      product.status === 1 ||
      product.status === '1' ||
      product.status === 'true' ||
      product.status === 'TRUE' ||
      product.status === 'active' ||
      product.status === 'ACTIVE'
    );

    // Merge cart info
    const withCartInfo = activeProducts.map((product: any, idx: number) => {
      const matchCart = cartItem?.data?.find(
        (ci: any) => ci.product === product.id
      );
      return matchCart
        ? {
          ...product,
          Aid: idx,
          cartQty: matchCart.quantity,
          cartId: matchCart.id,
        }
        : product;
    });

    // Merge wishlist info
    return withCartInfo.map((prod: any) => {
      const wish = wishList?.data?.find((w: any) => w.product === prod.id);
      return {
        ...prod,
        isLike: !!wish,
        wishListId: wish?.id,
      };
    });
  }, [products, cartItem, wishList]);


  const sortedProductData = React.useMemo(() => {
    // Prefer created_at/updated_at if you have it; fallback to id
    return [...mergedProductData].sort((a, b) => {
      if (a.created_at && b.created_at) {
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
      }
      return Number(b.id) - Number(a.id);
    });
  }, [mergedProductData]);

  function slugConvert(name: string) {
    return name
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')         // Replace spaces with hyphens
      .replace(/[^\w-]+/g, '');     // Remove non-word characters except hyphens
  }

  return (
    <section
      className="py-2 mt-20"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto md:px-4 max-w-7xl">
        <h2 className="text-4xl font-semibold text-center mb-6">
          New Arrivals
        </h2>
        <p className='text-black md:mx-24 mx-12  my-4 text-center'>
          Discover new healing crystals online — freshly charged and added weekly. Buy healing crystals online that radiate pure positive energy and natural beauty
        </p>

        <Slider {...sliderSettings}>
          {isLoading
            ? Array.from({ length: 5 }).map((_, idx) => (
              <div key={idx} className="px-2">
                <ProductCardSkeleton />
              </div>
            ))
            : sortedProductData.map((product: any, idx: any) => (
              <div key={idx} className="px-2">
                <ProductCard
                  image={product.image_urls[0] || ''}
                  hoverImage={product.image_urls[1] || ''}
                  title={product.name}
                  price={product.price}
                  onAddToCart={() => alert(`Add to cart: ${product.name}`)}
                  onView={() => router.push(`/shop/${slugConvert(product?.name)}`)}
                  onWishlist={() => alert(`Wishlist: ${product.name}`)}
                  product={product}
                />
              </div>
            ))}
        </Slider>
      </div>
    </section>
  );
};

export default NewArrivals;

