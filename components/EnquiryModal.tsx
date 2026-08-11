import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, Star, User, MapPin, Phone, MessageSquare, Send, CheckCircle } from 'lucide-react';

interface StoneData {
    name: string;
    image: string;
}

interface EnquiryModalProps {
    isOpen: boolean;
    onClose: () => void;
    stone: StoneData;
    currentFormat: string;
    selectedMetal: string;
}

export default function EnquiryModal({ isOpen, onClose, stone, currentFormat, selectedMetal }: EnquiryModalProps) {
    const [formData, setFormData] = useState({
        name: "",
        location: "",
        phone_no: "",
        message: ""
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if (!isOpen) {
            // Reset form when modal closes
            setTimeout(() => {
                setFormData({ name: "", location: "", phone_no: "", message: "" });
                setError(null);
                setSuccess(false);
            }, 300);
        }
    }, [isOpen]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await fetch("https://api.ftdigitalsolutions.in/omsritara/gemz/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const contentType = response.headers.get("content-type");
            let data: any = {};

            if (contentType && contentType.indexOf("application/json") !== -1) {
                data = await response.json();
            } else {
                const text = await response.text();
                try {
                    data = JSON.parse(text);
                } catch (e) {
                    data = { message: text || "An unexpected error occurred." };
                }
            }

            if (!response.ok || data.status === 'error' || data.error) {
                throw new Error(data.message || data.error || data.msg || "Something went wrong. Please try again.");
            }

            setSuccess(true);
        } catch (err: any) {
            setError(err.message || "Failed to submit enquiry.");
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0a192f]/80 backdrop-blur-sm transition-all">
            <div className="bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] w-full max-w-3xl max-h-[90vh] overflow-hidden relative animate-in fade-in zoom-in duration-300 flex flex-col md:flex-row border border-white/20">
                {/* Left Side - Image/Greeting (Hidden on small screens) */}
                <div className="hidden md:block w-2/5 relative bg-[#0a192f]">
                    <Image src={stone.image} alt="Gemstone image" layout="fill" objectFit="cover" className="opacity-50 mix-blend-screen" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-[#0a192f]/50 to-transparent flex flex-col justify-end p-8 text-white">
                        <div className="w-10 h-1 bg-[#B8860B] mb-5 rounded-full"></div>
                        <h3 className="text-3xl font-serif font-bold mb-3 text-[#e6d5b8] leading-tight">Gemstones</h3>
                        <p className="text-gray-300 mb-4 text-xs leading-relaxed font-light">Discover carefully selected gemstones chosen for their quality, beauty, and spiritual significance.</p>
                        <p className="text-gray-300 text-xs leading-relaxed font-light">All Om Sritara gemstones are quality checked and energized with the divine blessings of Guru Matha Sri Tara Amma before being recommended.</p>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="w-full md:w-3/5 p-6 md:p-8 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] relative bg-white">
                    {/* Close button */}
                    <button
                        onClick={onClose}
                        className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-50 text-gray-500 flex items-center justify-center hover:bg-red-50 hover:text-[#8B0000] transition-colors shadow-sm border border-gray-100"
                    >
                        <X size={16} strokeWidth={2.5} />
                    </button>

                    {success ? (
                        <div className="flex flex-col items-center justify-center h-full py-10 animate-in fade-in zoom-in duration-500">
                            <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-6 shadow-sm border border-green-100">
                                <CheckCircle size={40} strokeWidth={2} />
                            </div>
                            <h3 className="text-2xl font-extrabold text-[#8B0000] font-serif tracking-tight mb-2">Enquiry Sent!</h3>
                            <p className="text-center text-gray-600 mb-8 text-sm font-medium px-4">
                                Thank you for your interest. Our gemstone experts will contact you shortly.
                            </p>
                            <button
                                onClick={onClose}
                                className="px-8 py-3 rounded-xl bg-gray-900 text-white font-bold text-sm shadow-md hover:bg-gray-800 hover:-translate-y-0.5 transition-all"
                            >
                                Close Window
                            </button>
                        </div>
                    ) : (
                        <>
                            {/* Header */}
                            <div className="mb-6 pr-10">
                                <h3 className="text-2xl font-extrabold text-[#8B0000] font-serif tracking-tight mb-1.5">Request an Enquiry</h3>
                                <p className="text-xs text-gray-500 font-medium">Leave your details and our gemstone experts will contact you shortly.</p>
                            </div>

                            {/* Selection Summary */}
                            <div className="bg-[#faf7f2] border border-[#e6d5b8]/60 rounded-xl p-4 mb-6 flex flex-wrap gap-x-6 gap-y-3 shadow-sm">
                                <div className="w-full flex items-center gap-3 mb-1 border-b border-[#e6d5b8]/60 pb-2">
                                    <div className="w-7 h-7 rounded-full bg-yellow-100 flex items-center justify-center text-[#B8860B] shadow-sm">
                                        <Star size={14} fill="currentColor" />
                                    </div>
                                    <span className="font-bold text-gray-700 text-base font-serif">Interested in: </span>
                                    <span className="text-[#8B0000] font-extrabold text-base tracking-wide">{stone.name}</span>
                                </div>
                                <div className="flex-1 min-w-[90px]">
                                    <span className="text-gray-400 font-semibold uppercase tracking-wider text-[9px] block mb-1">Format</span>
                                    <span className="font-bold text-gray-800 bg-white px-2 py-1 text-sm rounded-md border border-gray-100 inline-block shadow-sm">{currentFormat}</span>
                                </div>
                                {currentFormat !== "Loose Gemstone" && (
                                    <div className="flex-1 min-w-[90px]">
                                        <span className="text-gray-400 font-semibold uppercase tracking-wider text-[9px] block mb-1">Metal</span>
                                        <span className="font-bold text-gray-800 bg-white px-2 py-1 text-sm rounded-md border border-gray-100 inline-block shadow-sm">{selectedMetal}</span>
                                    </div>
                                )}
                            </div>

                            <form className="space-y-4" onSubmit={handleSubmit}>
                                {error && (
                                    <div className="bg-red-50 text-red-600 p-3 rounded-xl text-sm border border-red-100 flex items-start gap-2 animate-in fade-in slide-in-from-top-2">
                                        <X size={16} className="mt-0.5 shrink-0" />
                                        <span className="font-medium">{error}</span>
                                    </div>
                                )}

                                {/* Inputs with elegant styling */}
                                <div className="relative group">
                                    <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1.5 ml-1 group-focus-within:text-[#8B0000] transition-colors">Full Name</label>
                                    <div className="relative flex items-center">
                                        <User className="absolute left-3.5 text-gray-400 group-focus-within:text-[#8B0000] transition-colors" size={16} />
                                        <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-white border border-gray-200 rounded-xl pl-10 pr-3 py-2.5 text-gray-800 text-sm font-medium focus:outline-none focus:border-[#8B0000] focus:ring-4 focus:ring-[#8B0000]/10 transition-all placeholder-gray-300 shadow-sm hover:border-gray-300" placeholder="Name" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="relative group">
                                        <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1.5 ml-1 group-focus-within:text-[#8B0000] transition-colors">Place / City</label>
                                        <div className="relative flex items-center">
                                            <MapPin className="absolute left-3.5 text-gray-400 group-focus-within:text-[#8B0000] transition-colors" size={16} />
                                            <input type="text" name="location" value={formData.location} onChange={handleChange} required className="w-full bg-white border border-gray-200 rounded-xl pl-10 pr-3 py-2.5 text-gray-800 text-sm font-medium focus:outline-none focus:border-[#8B0000] focus:ring-4 focus:ring-[#8B0000]/10 transition-all placeholder-gray-300 shadow-sm hover:border-gray-300" placeholder="Place" />
                                        </div>
                                    </div>
                                    <div className="relative group">
                                        <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1.5 ml-1 group-focus-within:text-[#8B0000] transition-colors">Phone Number</label>
                                        <div className="relative flex items-center">
                                            <Phone className="absolute left-3.5 text-gray-400 group-focus-within:text-[#8B0000] transition-colors" size={16} />
                                            <input type="tel" name="phone_no" value={formData.phone_no} onChange={handleChange} required className="w-full bg-white border border-gray-200 rounded-xl pl-10 pr-3 py-2.5 text-gray-800 text-sm font-medium focus:outline-none focus:border-[#8B0000] focus:ring-4 focus:ring-[#8B0000]/10 transition-all placeholder-gray-300 shadow-sm hover:border-gray-300" placeholder="Mobile Number" />
                                        </div>
                                    </div>
                                </div>
                                <div className="relative group">
                                    <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1.5 ml-1 group-focus-within:text-[#8B0000] transition-colors">Message (Optional)</label>
                                    <div className="relative flex">
                                        <MessageSquare className="absolute left-3.5 top-3.5 text-gray-400 group-focus-within:text-[#8B0000] transition-colors" size={16} />
                                        <textarea name="message" value={formData.message} onChange={handleChange} rows={2} className="w-full bg-white border border-gray-200 rounded-xl pl-10 pr-3 py-2.5 text-gray-800 text-sm font-medium focus:outline-none focus:border-[#8B0000] focus:ring-4 focus:ring-[#8B0000]/10 transition-all placeholder-gray-300 resize-none shadow-sm hover:border-gray-300" placeholder="Any specific requirements or questions?"></textarea>
                                    </div>
                                </div>
                                <div className="pt-2">
                                    <button type="submit" disabled={loading} className={`w-full py-3.5 rounded-xl bg-gradient-to-r from-[#8B0000] via-[#B8860B] to-[#8B0000] bg-[length:200%_100%] text-white font-bold text-base shadow-[0_8px_20px_rgba(139,0,0,0.25)] transition-all duration-500 ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[position:100%_0] hover:-translate-y-1 hover:shadow-[0_12px_25px_rgba(184,134,11,0.3)]'} flex items-center justify-center gap-2 group`}>
                                        {loading ? (
                                            <span className="flex items-center gap-2">
                                                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Submitting...
                                            </span>
                                        ) : (
                                            <>
                                                Submit Enquiry
                                                <Send size={16} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
