import React from 'react';
import { User, Star, MapPin, Phone, MessageSquare, Send } from 'lucide-react';

export default function EnquiryForm() {
    return (
        <div className="mt-6 pt-6 border-t border-gray-100" id="enquiry-form">
            <h3 className="text-lg font-bold text-[#8B0000] font-serif mb-4 uppercase tracking-wider">Request an Enquiry</h3>

            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Enquiry Sent Successfully!"); }}>
                <div className="relative group">
                    <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1.5 ml-1 group-focus-within:text-[#8B0000] transition-colors">Full Name</label>
                    <div className="relative flex items-center">
                        <User className="absolute left-3.5 text-gray-400 group-focus-within:text-[#8B0000] transition-colors" size={16} />
                        <input type="text" required className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-3 py-2.5 text-gray-800 text-sm font-medium focus:outline-none focus:border-[#8B0000] focus:ring-4 focus:ring-[#8B0000]/10 transition-all placeholder-gray-400 shadow-sm hover:border-gray-300" placeholder="Your Name" />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative group">
                        <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1.5 ml-1 group-focus-within:text-[#8B0000] transition-colors">Date of Birth</label>
                        <div className="relative flex items-center">
                            <input type="date" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 text-gray-800 text-sm font-medium focus:outline-none focus:border-[#8B0000] focus:ring-4 focus:ring-[#8B0000]/10 transition-all placeholder-gray-400 shadow-sm hover:border-gray-300" />
                        </div>
                    </div>
                    <div className="relative group">
                        <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1.5 ml-1 group-focus-within:text-[#8B0000] transition-colors">Rasi (Zodiac)</label>
                        <div className="relative flex items-center">
                            <Star className="absolute left-3.5 text-gray-400 group-focus-within:text-[#8B0000] transition-colors" size={16} />
                            <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-3 py-2.5 text-gray-800 text-sm font-medium focus:outline-none focus:border-[#8B0000] focus:ring-4 focus:ring-[#8B0000]/10 transition-all placeholder-gray-400 shadow-sm hover:border-gray-300" placeholder="Your Rasi" />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative group">
                        <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1.5 ml-1 group-focus-within:text-[#8B0000] transition-colors">Place / City</label>
                        <div className="relative flex items-center">
                            <MapPin className="absolute left-3.5 text-gray-400 group-focus-within:text-[#8B0000] transition-colors" size={16} />
                            <input type="text" required className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-3 py-2.5 text-gray-800 text-sm font-medium focus:outline-none focus:border-[#8B0000] focus:ring-4 focus:ring-[#8B0000]/10 transition-all placeholder-gray-400 shadow-sm hover:border-gray-300" placeholder="City" />
                        </div>
                    </div>
                    <div className="relative group">
                        <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1.5 ml-1 group-focus-within:text-[#8B0000] transition-colors">Phone Number</label>
                        <div className="relative flex items-center">
                            <Phone className="absolute left-3.5 text-gray-400 group-focus-within:text-[#8B0000] transition-colors" size={16} />
                            <input type="tel" required className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-3 py-2.5 text-gray-800 text-sm font-medium focus:outline-none focus:border-[#8B0000] focus:ring-4 focus:ring-[#8B0000]/10 transition-all placeholder-gray-400 shadow-sm hover:border-gray-300" placeholder="Mobile Number" />
                        </div>
                    </div>
                </div>
                <div className="relative group">
                    <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1.5 ml-1 group-focus-within:text-[#8B0000] transition-colors">Message (Optional)</label>
                    <div className="relative flex">
                        <MessageSquare className="absolute left-3.5 top-3.5 text-gray-400 group-focus-within:text-[#8B0000] transition-colors" size={16} />
                        <textarea rows={2} className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-3 py-2.5 text-gray-800 text-sm font-medium focus:outline-none focus:border-[#8B0000] focus:ring-4 focus:ring-[#8B0000]/10 transition-all placeholder-gray-400 resize-none shadow-sm hover:border-gray-300" placeholder="Any specific requirements?"></textarea>
                    </div>
                </div>
                <div className="pt-2">
                    <button type="submit" className="w-full py-3.5 rounded-xl bg-[#8B0000] text-white font-bold text-base shadow-[0_8px_20px_rgba(139,0,0,0.25)] transition-all duration-300 hover:bg-gradient-to-r hover:from-[#8B0000] hover:to-[#B8860B] hover:-translate-y-1 hover:shadow-[0_12px_25px_rgba(184,134,11,0.3)] flex items-center justify-center gap-2 group">
                        Submit Enquiry
                        <Send size={16} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </button>
                </div>
            </form>
        </div>
    );
}
