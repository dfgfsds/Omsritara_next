import React, { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';
import axios from 'axios';
import { postCourseLead } from '@/api-endpoints/course';
import { COURSES_DATA } from '@/data/courses';

interface CourseEnrollmentFormProps {
    isOpen: boolean;
    onClose: () => void;
    language: 'en' | 'ta';
}

const CourseEnrollmentForm: React.FC<CourseEnrollmentFormProps> = ({ isOpen, onClose, language }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone_no: '',
        location: '',
        course: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    if (!isOpen) return null;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await postCourseLead(formData);
            setIsSubmitted(true);
        } catch (error) {
            console.error('Error submitting form:', error);
        }

        // You might want to send this data to an API here
    };

    const handleClose = () => {
        setFormData({
            name: '',
            email: '',
            phone_no: '',
            location: '',
            course: '',
        });
        setIsSubmitted(false);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg p-6 sm:p-8 max-w-md w-11/12 sm:w-full relative">
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                >
                    <X size={24} />
                </button>

                {isSubmitted ? (
                    <div className="text-center">
                        <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">
                            {language === 'en' ? 'Submission Successful!' : 'சமர்ப்பிப்பு வெற்றிகரமாக முடிந்தது!'}
                        </h3>
                        <p className="text-gray-600 mb-6">
                            {language === 'en'
                                ? 'Thank you for your inquiry. We will get back to you soon.'
                                : 'உங்கள் விசாரணைக்கு நன்றி. விரைவில் உங்களைத் தொடர்புகொள்வோம்.'}
                        </p>
                        <button
                            onClick={handleClose}
                            className="bg-[#a5291b] hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-200"
                        >
                            {language === 'en' ? 'Close' : 'மூடு'}
                        </button>
                    </div>
                ) : (
                    <>
                        <h2 className="text-xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
                            {language === 'en' ? 'Enroll in Course' : 'பாடநெறியில் சேரவும்'}
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-gray-700 text-xs sm:text-sm font-bold mb-2">
                                    {language === 'en' ? 'Name' : 'பெயர்'}
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-sm sm:text-base text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-700 text-xs sm:text-sm font-bold mb-2">
                                    {language === 'en' ? 'Email' : 'மின்னஞ்சல்'}
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-sm sm:text-base text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="phone_no" className="block text-gray-700 text-xs sm:text-sm font-bold mb-2">
                                    {language === 'en' ? 'Phone Number' : 'கைபேசி எண்'}
                                </label>
                                <input
                                    type="tel"
                                    id="phone_no"
                                    name="phone_no"
                                    value={formData.phone_no}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-sm sm:text-base text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    maxLength={10}
                                    pattern="[0-9]{10}"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="location" className="block text-gray-700 text-xs sm:text-sm font-bold mb-2">
                                    {language === 'en' ? 'Location' : 'இருப்பிடம்'}
                                </label>
                                <input
                                    type="text"
                                    id="location"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-sm sm:text-base text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="course" className="block text-gray-700 text-xs sm:text-sm font-bold mb-2">
                                    {language === 'en' ? 'Select Course' : 'பாடநெறியைத் தேர்ந்தெடுக்கவும்'}
                                </label>
                                <select
                                    id="course"
                                    name="course"
                                    value={formData.course}
                                    onChange={handleChange}
                                    className="shadow border rounded w-full py-2 px-3 text-sm sm:text-base text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                >
                                    <option value="">
                                        {language === 'en' ? '-- Select a Course --' : '-- ஒரு பாடநெறியைத் தேர்ந்தெடுக்கவும் --'}
                                    </option>
                                    {COURSES_DATA.map((c) => (
                                        <option key={c.id} value={c.id}>
                                            {language === 'en' ? c.en.name : c.ta.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <button
                                type="submit"
                                className="bg-[#a5291b] hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg w-full transition-colors duration-200"
                            >
                                {language === 'en' ? 'Submit' : 'சமர்ப்பி'}
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default CourseEnrollmentForm;
