import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

interface CourseCardProps {
  id: string;
  name: string;
  banner: string;
  description: string;
  language?: 'en' | 'ta';
}

const CourseCard: React.FC<CourseCardProps> = ({
  id,
  name,
  banner,
  description,
  language = 'en',
}) => {
  const router = useRouter();

  const handleViewCourse = () => {
    router.push(`/courses/${id}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer h-full flex flex-col"
      onClick={handleViewCourse}>
      {/* Banner Image */}
      <div className="relative w-full h-48 bg-gray-200">
        <Image
          src={banner}
          alt={name}
          fill
          className="object-cover"
          onError={(e) => {
            e.currentTarget.src = '/img/placeholder.jpg';
          }}
        />
      </div>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col">
        {/* Course Name */}
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
          {name}
        </h3>

        {/* Short Description */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-1">
          {description}
        </p>

        {/* CTA Button */}
        <button className="w-full bg-[#a5291b] hover:bg-red-700 text-white font-medium py-2 px-4 rounded transition-colors duration-200">
          {language === 'en' ? 'View Course' : 'பாடநெறி பார்க்க'}
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
