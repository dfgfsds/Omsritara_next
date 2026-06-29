import React, { useState } from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import CourseCard from '@/components/CourseCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { COURSES_DATA } from '../../data/courses';

export interface CourseContent {
  name: string;
  description: string;
  benefits: string[];
}

export interface Course {
  id: string;
  banner: string;
  en: CourseContent;
  ta: CourseContent;
}


export default function CoursesPage() {
  const [language, setLanguage] = useState<'en' | 'ta'>('en');
  const [displayedCourses] = useState(COURSES_DATA);

  return (
    <>
      <Head>
        <title>{language === 'en' ? 'Courses' : 'பாடநெறிகள்'} - Omsritara</title>
        <meta
          name="description"
          content={language === 'en'
            ? 'Explore our comprehensive collection of healing and spiritual courses'
            : 'நமது குணப்படுத்தல் மற்றும் ஆன்மீக பாடநெறிகளின் விரிவான சேகரணத்தை ஆராய்ந்து கொள்ளுங்கள்'
          }
        />
      </Head>

      {/* Header Section */}
      <div className="bg-gradient-to-r from-red-50 to-red-100 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
                {language === 'en' ? 'Our Courses' : 'எங்கள் பாடநெறிகள்'}
              </h1>
              <p className="text-gray-600 text-lg">
                {language === 'en'
                  ? 'Discover transformative courses to enhance your wellness and spiritual journey'
                  : 'உங்கள் சுகாதாரம் மற்றும் ஆன்மீக பயணத்தை மேம்படுத்த மாற்றம் செய்யும் பாடநெறிகளைக் கண்டறியுங்கள்'}
              </p>
            </div>

            {/* Language Switcher */}
            <div className="flex gap-2">
              <button
                onClick={() => setLanguage('en')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${language === 'en'
                  ? 'bg-[#a5291b] text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage('ta')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${language === 'ta'
                  ? 'bg-[#a5291b] text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
              >
                தமிழ்
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Courses Grid Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {displayedCourses.length > 0 ? (
          <>
            {/* Grid Layout - 4 columns on desktop, 2 on tablet, 1 on mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {displayedCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  id={course.id}
                  name={language === 'en' ? course.en.name : course.ta.name}
                  banner={course.banner}
                  description={language === 'en' ? course.en.description : course.ta.description}
                  language={language}
                />
              ))}
            </div>

            {/* Course Count */}
            <div className="text-center text-gray-600 mt-8">
              <p className="text-sm">
                {language === 'en'
                  ? `Showing ${displayedCourses.length} courses`
                  : `${displayedCourses.length} பாடநெறிகள் காட்டப்படுகிறது`
                }
              </p>
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-gray-600">
              {language === 'en'
                ? 'No courses available at the moment'
                : 'தற்போது எந்த பாடநெறிகளும் கிடைக்கவில்லை'}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

