'use client';
import Slider from 'react-slick';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useCategories } from '@/context/CategoriesContext';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { slugConvert } from '@/lib/utils';

const SampleNextArrow = ({ onClick }: { onClick?: () => void }) => (
  <div className="ml-2 p-2 rounded-full bg-white shadow cursor-pointer hover:bg-[#991b1b] hover:text-white" onClick={onClick}>
    <ChevronRight size={20} />
  </div>
);

const SamplePrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <div className="p-2 rounded-full bg-white shadow cursor-pointer hover:bg-[#991b1b] hover:text-white" onClick={onClick}>
    <ChevronLeft size={20} />
  </div>
);

const FeaturedCategories = () => {
  let sliderRef: Slider | null = null;
  const { categories, isLoading } = useCategories();
  const router = useRouter();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    cssEase: 'ease-in-out',
    slidesToShow: 6,
    slidesToScroll: 2,
    arrows: true,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 6 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
    ],
  };

  // Placeholder for loading
  const skeletonItems = new Array(6).fill(null);

  return (
    <section className="mt-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="relative grid grid-cols-1 md:grid-cols-3 items-center gap-4 mb-2">
          <div className="text-center col-span-1 md:col-start-2">
            <h2 className="text-2xl md:text-3xl font-extrabold text-black">
              Top Categories
            </h2>

          </div>

          <div className="flex mt-4 flex-col items-center md:items-end justify-center md:justify-end col-span-1 md:col-start-3">
            <Link
              href="/categories"
              onClick={() => router.push('/categories')}
              className="text-sm text-gray-600 hover:underline mt-1 mr-4"
            >
              View All
            </Link>
          </div>
        </div>
        <p className='text-black p-2 md:p-4 md:mx-24 mx-2  my-4 text-center'>
          Explore our wide range of authentic crystal jewelry and energy stones. From healing pendants and gemstone bracelets to chakra pendulums and raw crystals - Om Sritara brings you the best online crystal shop experience with handpicked, Reiki-energised products.
        </p>

        <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
          {isLoading
            ? skeletonItems.map((_, index) => (
              <div key={index} className="px-4">
                <div className="flex flex-col items-center text-center animate-pulse">
                  <div className="w-40 h-40 bg-gray-200 rounded-full" />
                  <div className="mt-4 w-24 h-4 bg-gray-200 rounded" />
                </div>
              </div>
            ))
            : categories?.data?.map((category, index) => (
              <div key={index} className="px-4">
                <div className="flex flex-col items-center text-center">
                  <div className="w-40 h-40 overflow-hidden rounded-full shadow-md">
                    <Image
                      src={category.image}
                      alt={category.title}
                      width={160} // same as w-40
                      height={160} // same as h-40
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="mt-4 flex items-center justify-center w-full px-2">
                    <h3
                      onClick={() => router.push(`/categories/${slugConvert(category?.name)}`)}
                      className="text-lg font-semibold cursor-pointer"
                    >
                      {category.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </section>
  );
};

export default FeaturedCategories;