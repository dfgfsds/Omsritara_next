import React, { useState } from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import CourseCard from '@/components/CourseCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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

// Sample course data with bilingual support
export const COURSES_DATA: any[] = [
  {
    id: 'reiki-level-1',
    banner: '/img/courses/ReikiLevel1.webp',
    en: {
      name: 'Usui Reiki Level 1 Course with Certification | Online & Offline Reiki Training',
      description: 'Start your Reiki healing journey with our Usui Reiki Level 1 Certification Course. Learn Reiki basics, self-healing techniques, chakra balancing, Reiki attunement, and energy awareness through expert-led online and offline Reiki training. Perfect for beginners seeking personal growth, stress relief, and spiritual wellness.',
      duration: "2 Hours",
      mode: "Online & Offline",
      language: "Tamil & English",
      format: "Video + Book",
      certification: "Included",
      original_price: "₹3,000",
      offer_price: "₹1,999",
      benefits: [
        'Reduce stress and promote relaxation',
        'Improve emotional and mental well-being',
        'Balance chakras and energy flow',
        'Enhance intuition and self-awareness',
        'Support personal and spiritual ',
        'Build a strong Reiki foundation'
      ],
      learn: [
        'Introduction to Usui Reiki',
        'Reiki Level 1 Attunement',
        'Self-Healing Techniques',
        'Reiki Hand Positions',
        'Chakra Balancing',
        'Energy Awareness',
        'Aura & Energy Cleansing',
        'Meditation & Grounding',
        'Reiki Ethics & Best Practices'
      ],
      faq: [
        {
          question: "What is the Usui Reiki Level 1 Certification Course?",
          answer: "The Usui Reiki Level 1 Certification Course is a beginner-friendly Reiki healing program that teaches Reiki fundamentals, self-healing, chakra balancing, Reiki attunement, and energy awareness. It is available in both online and offline formats with certification."
        },
        {
          question: "Who can join the Reiki Level 1 Course?",
          answer: "Anyone can join the Reiki Level 1 Course, including beginners, students, working professionals, yoga practitioners, therapists, and individuals interested in self-healing, stress relief, and spiritual development. No previous Reiki experience is required."
        },
        {
          question: "Is certification included in the Reiki Level 1 Course?",
          answer: "Yes. After successfully completing the Usui Reiki Level 1 Course, you will receive a Reiki Level 1 Certification. The course includes Reiki attunement, study materials, and online or offline training."
        }
      ],
      CTA: "Enroll in the Usui Reiki Level 1 Certification Course today for just ₹1,999 and begin your journey toward self-healing, energy balancing, and spiritual growth. Limited-time offer with certification included.",
      seo: {
        title: 'Usui Reiki Level 1 Course with Certification | Online & Offline',
        description: '',
        keywords: '',
        canonical: '',
        ogImage: '',
        faqSchema: {},
        courseSchema: {},
        breadcrumbSchema: {}
      }
    },
    ta: {
      name: 'உசுயி ரெய்கி லெவல் 1 சான்றிதழ் பயிற்சி | ஆன்லைன் & ஆஃப்லைன் ரெய்கி பயிற்சி',
      description: 'உசுயி ரெய்கி லெவல் 1 சான்றிதழ் பயிற்சியின் மூலம் உங்கள் ரெய்கி பயணத்தை தொடங்குங்கள். ரெய்கியின் அடிப்படைகள், சுய குணப்படுத்தல் (Self Healing), சக்ரா சமநிலை, ரெய்கி அட்ட்யூன்மெண்ட் (Reiki Attunement), மற்றும் ஆற்றல் விழிப்புணர்வு ஆகியவற்றை ஆன்லைன் மற்றும் ஆஃப்லைன் முறையில் கற்றுக்கொள்ளுங்கள். தொடக்கநிலையிலிருப்போருக்கும் ஆன்மீக வளர்ச்சியை நாடுபவர்களுக்கும் ஏற்ற பயிற்சி.',
      duration: "2 மணி நேரம்",
      mode: "ஆன்லைன் & ஆஃப்லைன்",
      language: "தமிழ் & ஆங்கிலம்",
      format: "வீடியோ + புத்தகம்",
      certification: "வழங்கப்படும்",
      original_price: "₹3,000",
      offer_price: "₹1,999",
      benefits: [
        'மன அழுத்தத்தை குறைக்க உதவும்',
        'மன மற்றும் உணர்ச்சி சமநிலையை மேம்படுத்தும்',
        'சக்ரா மற்றும் உடல் ஆற்றலை சமப்படுத்தும்',
        'உள்ளுணர்வை அதிகரிக்கும்',
        'சுய வளர்ச்சி மற்றும் ஆன்மீக முன்னேற்றத்திற்கு உதவும்',
        'மேம்பட்ட ரெய்கி பயிற்சிக்கான வலுவான அடித்தளத்தை உருவாக்கும்',
      ],
      learn: [
        'உசுயி ரெய்கி அறிமுகம்',
        'ரெய்கி லெவல் 1 அட்ட்யூன்மெண்ட்',
        'சுய குணப்படுத்தும் முறைகள்',
        'ரெய்கி கை நிலைகள்',
        'சக்ரா சமநிலைப்படுத்தல்',
        'ஆற்றல் விழிப்புணர்வு',
        'ஆரா மற்றும் ஆற்றல் சுத்திகரிப்பு',
        'தியானம் மற்றும் கிரவுண்டிங்',
        'ரெய்கி ஒழுக்கநெறிகள்'
      ],
      faq: [
        {
          question: "உசுயி ரெய்கி லெவல் 1 பயிற்சி என்றால் என்ன?",
          answer: "உசுயி ரெய்கி லெவல் 1 என்பது ரெய்கியின் அடிப்படை பயிற்சி ஆகும். இதில் ரெய்கி அடிப்படைகள், சுய குணப்படுத்தல், சக்ரா சமநிலை, ரெய்கி அட்ட்யூன்மெண்ட் மற்றும் ஆற்றல் விழிப்புணர்வு ஆகியவற்றை கற்றுக்கொடுக்கப்படுகிறது."
        },
        {
          question: "இந்த ரெய்கி லெவல் 1 பயிற்சியில் யார் சேரலாம்?",
          answer: "தொடக்கநிலையினர், மாணவர்கள், வேலை செய்பவர்கள், யோகா மற்றும் தியான பயிற்சியாளர்கள், ஹீலர்கள் மற்றும் சுய வளர்ச்சியில் ஆர்வமுள்ள அனைவரும் இந்த பயிற்சியில் சேரலாம். முன் அனுபவம் தேவையில்லை."
        },
        {
          question: "இந்த பாடநெறியை முடித்த பிறகு சான்றிதழ் கிடைக்குமா?",
          answer: "ஆம். உசுயி ரெய்கி லெவல் 1 பயிற்சியை வெற்றிகரமாக முடித்தவுடன் ரெய்கி லெவல் 1 சான்றிதழ் வழங்கப்படும். இதில் ரெய்கி அட்ட்யூன்மெண்ட் மற்றும் பயிற்சி பொருட்களும் அடங்கும்."
        },
      ],
      CTA: '₹1,999 சிறப்பு சலுகையில் உசுயி ரெய்கி லெவல் 1 சான்றிதழ் பயிற்சியில் சேருங்கள். சுய குணப்படுத்தல், சக்ரா சமநிலை, மன அமைதி மற்றும் ஆன்மீக வளர்ச்சிக்கான உங்கள் பயணத்தை இன்று தொடங்குங்கள்.'
    }
  }
];
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

