import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import logo from '@/public/logo.png';
import Image from 'next/image';

const AppDownloadPopup = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Check if the user has already seen or closed the popup in this session
        const hasSeenPopup = sessionStorage.getItem('hasSeenAppPopup');

        if (!hasSeenPopup) {
            const timer = setTimeout(() => {
                setIsOpen(true);
            }, 5000); // 5 seconds

            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        sessionStorage.setItem('hasSeenAppPopup', 'true');
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 relative animate-in fade-in zoom-in duration-300">
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors bg-gray-100 rounded-full p-1"
                >
                    <X size={20} />
                </button>

                <div className="text-center mt-4">
                    {/* <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl mx-auto flex items-center justify-center mb-4 shadow-inner">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
                    </div> */}
                    <Image
                        src={logo}
                        alt="Omsritara Logo"
                        className="w-24 h-auto md:w-24 mx-auto flex items-center justify-center mb-4"
                        priority
                    />

                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Download Our App!</h2>
                    <p className="text-gray-600 mb-6">
                        Get the best experience, exclusive offers, and seamless shopping by downloading the Om Sritara mobile app.
                    </p>

                    <a
                        href="https://play.google.com/store/apps/details?id=in.omsritara.app&pcampaignid=web_share"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block hover:scale-105 transition-transform"
                        onClick={handleClose} // Also close it when they click the link
                    >
                        <img
                            src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                            alt="Get it on Google Play"
                            className="h-14 w-auto mx-auto"
                        />
                    </a>

                    <button
                        onClick={handleClose}
                        className="block w-full text-center mt-6 text-sm text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        Maybe later
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AppDownloadPopup;
