import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Layout from '@/components/Layout';
import { COURSES_DATA } from '../index';
import { ArrowLeft, CheckCircle, ChevronDown } from 'lucide-react';
import CourseEnrollmentForm from '@/components/CourseEnrollmentForm';

const CourseDetailPage: React.FC = () => {
    const router = useRouter();
    const { title } = router.query;
    const [language, setLanguage] = useState<'en' | 'ta'>('en');
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Find course by IDS
    const course = COURSES_DATA.find((c) => c.id === title);
    const courseContent = course ? (language === 'en' ? course.en : course.ta) : null;

    if (!course) {
        return (
            <>
                <Head>
                    <title>Course Not Found - Omsritara</title>
                </Head>
                <div className="max-w-7xl mx-auto px-4 py-16 text-center">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">Course Not Found</h1>
                    <p className="text-gray-600 mb-8">The course you're looking for doesn't exist.</p>
                    <button
                        onClick={() => router.push('/courses')}
                        className="bg-[#a5291b] hover:bg-red-700 text-white font-bold py-2 px-6 rounded transition-colors"
                    >
                        Back to Courses
                    </button>
                </div>
            </>
        );
    }

    return (
        <>
            <Head>
                <title>{courseContent?.name} - Omsritara</title>
                <meta name="description" content={courseContent?.description} />
            </Head>

            <div className="bg-gray-50 px-4 py-4 border-b border-gray-200">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <button
                        onClick={() => router.push('/courses')}
                        className="flex items-center gap-2 text-[#a5291b] hover:text-red-700 font-medium transition-colors"
                    >
                        <ArrowLeft size={20} />
                        {language === 'en' ? 'Back to Courses' : 'பாடநெறிகளுக்குத் திரும்பவும்'}
                    </button>

                    <div className="flex gap-2">
                        <button
                            onClick={() => setLanguage('en')}
                            className={`px-3 py-1 rounded font-medium transition-colors text-sm ${language === 'en'
                                ? 'bg-[#a5291b] text-white'
                                : 'bg-white text-gray-700 hover:bg-gray-100'
                                }`}
                        >
                            English
                        </button>
                        <button
                            onClick={() => setLanguage('ta')}
                            className={`px-3 py-1 rounded font-medium transition-colors text-sm ${language === 'ta'
                                ? 'bg-[#a5291b] text-white'
                                : 'bg-white text-gray-700 hover:bg-gray-100'
                                }`}
                        >
                            தமிழ்
                        </button>
                    </div>
                </div>
            </div>


            <div className=" bg-gray-200">
                <Image
                    src={course.banner}
                    alt={courseContent?.name}
                    width={1200}
                    height={400}
                    className="object-cover w-full "
                    priority
                />
            </div>


            <div className="max-w-4xl mx-auto px-4 py-12">

                <h1 className="text-xl md:text-4xl font-bold text-gray-800 mb-4">
                    {courseContent?.name}
                </h1>


                <p className="text-md md:text-xl text-gray-600 mb-8 leading-relaxed">
                    {courseContent?.description}
                </p>

                <hr className="my-8" />

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                    <div className="bg-white border rounded-lg p-4">
                        <p className="text-sm text-gray-500">{language === 'en' ? 'Duration' : 'காலம்'}</p>
                        <p className="font-semibold">{courseContent?.duration}</p>
                    </div>

                    <div className="bg-white border rounded-lg p-4">
                        <p className="text-sm text-gray-500">{language === 'en' ? 'Mode' : 'பயிற்சி முறை'}</p>
                        <p className="font-semibold">{courseContent?.mode}</p>
                    </div>

                    <div className="bg-white border rounded-lg p-4">
                        <p className="text-sm text-gray-500">{language === 'en' ? 'Language' : 'மொழிகள்'}</p>
                        <p className="font-semibold">{courseContent?.language}</p>
                    </div>

                    <div className="bg-white border rounded-lg p-4">
                        <p className="text-sm text-gray-500">{language === 'en' ? 'Format' : 'பயிற்சி வடிவம்'}</p>
                        <p className="font-semibold">{courseContent?.format}</p>
                    </div>

                    <div className="bg-white border rounded-lg p-4">
                        <p className="text-sm text-gray-500">{language === 'en' ? 'Certification' : 'சான்றிதழ்'}</p>
                        <p className="font-semibold text-green-600">
                            {courseContent?.certification}
                        </p>
                    </div>

                    <div className="bg-white border rounded-lg p-4">
                        <p className="text-sm text-gray-500">{language === 'en' ? 'Original Price' : 'அசல் விலை'}</p>
                        <p className="font-semibold line-through text-gray-400">
                            {courseContent?.original_price}
                        </p>
                    </div>

                    <div className="bg-white border rounded-lg p-4">
                        <p className="text-sm text-gray-500">{language === 'en' ? 'Offer Price' : 'சலுகை விலை'}</p>
                        <p className="font-bold text-[#a5291b] text-xl">
                            {courseContent?.offer_price}
                        </p>
                    </div>
                </div>

                <hr className="my-8" />


                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">
                        {language === 'en' ? "Benefits" : 'பயன்கள்'}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {courseContent?.benefits.map((benefit, index) => (
                            <div key={index} className="flex gap-3 items-start bg-red-50 p-4 rounded-lg">
                                <CheckCircle className="text-[#a5291b] mt-1 flex-shrink-0" size={24} />
                                <p className="text-gray-700 leading-relaxed">{benefit}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <hr className="my-8" />

                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">
                        {language === "en"
                            ? "What You'll Learn"
                            : "இந்த பாடநெறியில் நீங்கள் கற்றுக்கொள்வது"}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {courseContent?.learn?.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white border border-red-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-all"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-8 h-8 rounded-full bg-[#a5291b] text-white flex items-center justify-center font-bold">
                                        {index + 1}
                                    </div>

                                    <h3 className="font-semibold text-gray-800">
                                        {item}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">
                        {language === "en"
                            ? "Frequently Asked Questions"
                            : "அடிக்கடி கேட்கப்படும் கேள்விகள்"}
                    </h2>

                    <div className="space-y-4">
                        {courseContent?.faq?.map((item, index) => (
                            <details
                                key={index}
                                className="group bg-white border border-gray-200 rounded-xl p-5"
                            >
                                <summary className="flex items-center justify-between cursor-pointer font-semibold text-gray-800 list-none">
                                    {item.question}
                                    <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
                                </summary>

                                <p className="mt-4 text-gray-600 leading-relaxed">
                                    {item.answer}
                                </p>
                            </details>
                        ))} 
                    </div>
                </div>


                <div className="bg-gradient-to-r from-red-50 to-red-100 p-8 rounded-lg text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">
                        {language === 'en' ? 'Ready to Begin?' : 'தொடங்க தயாரா?'}
                    </h3>
                    <p className="text-gray-600 mb-6">
                        {courseContent?.CTA}
                    </p>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-[#a5291b] hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200"
                    >
                        {language === 'en' ? 'Enroll Now' : 'இப்போது சேரவும்'}
                    </button>
                </div>
            </div>

            <CourseEnrollmentForm
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                language={language}
            />

            <div className="bg-gray-50 mt-16 py-12 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8">
                        {language === 'en' ? 'Other Courses' : 'மற்ற பாடநெறிகள்'}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {COURSES_DATA.filter((c) => c.id !== course.id)
                            .slice(0, 3)
                            .map((relatedCourse) => {
                                const relatedContent = language === 'en' ? relatedCourse.en : relatedCourse.ta;
                                return (
                                    <div
                                        key={relatedCourse.id}
                                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                                        onClick={() => router.push(`/courses/${relatedCourse.id}`)}
                                    >
                                      <div className="relative w-full h-48 bg-gray-200">
                                              <Image
                                                src={relatedCourse?.banner}
                                                alt={relatedContent?.name}
                                                fill
                                                className="object-cover"
                                                onError={(e) => {
                                                  e.currentTarget.src = '/img/placeholder.jpg';
                                                }}
                                              />
                                            </div>
                                        <div className="p-4">
                                            <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                                                {relatedContent.name}
                                            </h3>
                                            <p className="text-sm text-gray-600 line-clamp-2">
                                                {relatedContent.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default CourseDetailPage;
