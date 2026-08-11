import React, { useState } from 'react';
import { User, Star, MapPin, Phone, MessageSquare, Send, Clock, CheckCircle2, AlertCircle } from 'lucide-react';

export default function EnquiryForm() {
    const [formData, setFormData] = useState({
        name: '',
        date_of_birth: '',
        rasi: '',
        birth_time: '',
        birth_place: '',
        location: '',
        phone_no: '',
        message: ''
    });

    const [status, setStatus] = useState<{ type: 'success' | 'error' | '', message: string }>({ type: '', message: '' });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus({ type: '', message: '' });

        try {
            const payload = {
                name: formData.name,
                phone_no: formData.phone_no,
                location: formData.location,
                date_of_birth: formData.date_of_birth,
                birth_place: formData.birth_place,
                birth_time: formData.birth_time,
                message: formData.message
            };

            const response = await fetch('https://api.ftdigitalsolutions.in/omsritara/gemz/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                setStatus({ type: 'success', message: 'Enquiry sent successfully!' });
                setFormData({
                    name: '',
                    date_of_birth: '',
                    rasi: '',
                    birth_time: '',
                    birth_place: '',
                    location: '',
                    phone_no: '',
                    message: ''
                });
            } else {
                setStatus({ type: 'error', message: 'Failed to send enquiry. Please try again later.' });
            }
        } catch (error) {
            setStatus({ type: 'error', message: 'An error occurred. Please check your network and try again.' });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="mt-6 pt-6 border-t border-gray-100" id="enquiry-form">
            <h3 className="text-lg font-bold text-[#8B0000] font-serif mb-4 uppercase tracking-wider">Request an Enquiry</h3>

            {status.message && (
                <div className={`mb-4 p-3 rounded-lg flex items-start gap-2 ${status.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                    {status.type === 'success' ? <CheckCircle2 size={18} className="mt-0.5" /> : <AlertCircle size={18} className="mt-0.5" />}
                    <p className="text-sm">{status.message}</p>
                </div>
            )}

            <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="relative group">
                    <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1.5 ml-1 group-focus-within:text-[#8B0000] transition-colors">Full Name</label>
                    <div className="relative flex items-center">
                        <User className="absolute left-3.5 text-gray-400 group-focus-within:text-[#8B0000] transition-colors" size={16} />
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-3 py-2.5 text-gray-800 text-sm font-medium focus:outline-none focus:border-[#8B0000] focus:ring-4 focus:ring-[#8B0000]/10 transition-all placeholder-gray-400 shadow-sm hover:border-gray-300" placeholder="Your Name" />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative group">
                        <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1.5 ml-1 group-focus-within:text-[#8B0000] transition-colors">Date of Birth</label>
                        <div className="relative flex items-center">
                            <input type="date" name="date_of_birth" value={formData.date_of_birth} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 text-gray-800 text-sm font-medium focus:outline-none focus:border-[#8B0000] focus:ring-4 focus:ring-[#8B0000]/10 transition-all placeholder-gray-400 shadow-sm hover:border-gray-300" />
                        </div>
                    </div>
                    <div className="relative group">
                        <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1.5 ml-1 group-focus-within:text-[#8B0000] transition-colors">Rasi (Zodiac)</label>
                        <div className="relative flex items-center">
                            <Star className="absolute left-3.5 text-gray-400 group-focus-within:text-[#8B0000] transition-colors" size={16} />
                            <input type="text" name="rasi" value={formData.rasi} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-3 py-2.5 text-gray-800 text-sm font-medium focus:outline-none focus:border-[#8B0000] focus:ring-4 focus:ring-[#8B0000]/10 transition-all placeholder-gray-400 shadow-sm hover:border-gray-300" placeholder="Your Rasi" />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative group">
                        <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1.5 ml-1 group-focus-within:text-[#8B0000] transition-colors">Birth Time</label>
                        <div className="relative flex items-center">
                            <Clock className="absolute left-3.5 text-gray-400 group-focus-within:text-[#8B0000] transition-colors" size={16} />
                            <input type="time" name="birth_time" value={formData.birth_time} onChange={handleChange} required className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-3 py-2.5 text-gray-800 text-sm font-medium focus:outline-none focus:border-[#8B0000] focus:ring-4 focus:ring-[#8B0000]/10 transition-all placeholder-gray-400 shadow-sm hover:border-gray-300" />
                        </div>
                    </div>
                    <div className="relative group">
                        <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1.5 ml-1 group-focus-within:text-[#8B0000] transition-colors">Birth Place</label>
                        <div className="relative flex items-center">
                            <MapPin className="absolute left-3.5 text-gray-400 group-focus-within:text-[#8B0000] transition-colors" size={16} />
                            <input type="text" name="birth_place" value={formData.birth_place} onChange={handleChange} required className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-3 py-2.5 text-gray-800 text-sm font-medium focus:outline-none focus:border-[#8B0000] focus:ring-4 focus:ring-[#8B0000]/10 transition-all placeholder-gray-400 shadow-sm hover:border-gray-300" placeholder="City of Birth" />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative group">
                        <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1.5 ml-1 group-focus-within:text-[#8B0000] transition-colors">Place / City</label>
                        <div className="relative flex items-center">
                            <MapPin className="absolute left-3.5 text-gray-400 group-focus-within:text-[#8B0000] transition-colors" size={16} />
                            <input type="text" name="location" value={formData.location} onChange={handleChange} required className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-3 py-2.5 text-gray-800 text-sm font-medium focus:outline-none focus:border-[#8B0000] focus:ring-4 focus:ring-[#8B0000]/10 transition-all placeholder-gray-400 shadow-sm hover:border-gray-300" placeholder="City" />
                        </div>
                    </div>
                    <div className="relative group">
                        <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1.5 ml-1 group-focus-within:text-[#8B0000] transition-colors">Phone Number</label>
                        <div className="relative flex items-center">
                            <Phone className="absolute left-3.5 text-gray-400 group-focus-within:text-[#8B0000] transition-colors" size={16} />
                            <input type="tel" name="phone_no" value={formData.phone_no} onChange={handleChange} required className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-3 py-2.5 text-gray-800 text-sm font-medium focus:outline-none focus:border-[#8B0000] focus:ring-4 focus:ring-[#8B0000]/10 transition-all placeholder-gray-400 shadow-sm hover:border-gray-300" placeholder="Mobile Number" />
                        </div>
                    </div>
                </div>
                <div className="relative group">
                    <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1.5 ml-1 group-focus-within:text-[#8B0000] transition-colors">Message (Optional)</label>
                    <div className="relative flex">
                        <MessageSquare className="absolute left-3.5 top-3.5 text-gray-400 group-focus-within:text-[#8B0000] transition-colors" size={16} />
                        <textarea rows={2} name="message" value={formData.message} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-3 py-2.5 text-gray-800 text-sm font-medium focus:outline-none focus:border-[#8B0000] focus:ring-4 focus:ring-[#8B0000]/10 transition-all placeholder-gray-400 resize-none shadow-sm hover:border-gray-300" placeholder="Any specific requirements?"></textarea>
                    </div>
                </div>
                <div className="pt-2">
                    <button type="submit" disabled={isLoading} className="w-full py-3.5 rounded-xl bg-[#8B0000] text-white font-bold text-base shadow-[0_8px_20px_rgba(139,0,0,0.25)] transition-all duration-300 hover:bg-gradient-to-r hover:from-[#8B0000] hover:to-[#B8860B] hover:-translate-y-1 hover:shadow-[0_12px_25px_rgba(184,134,11,0.3)] disabled:opacity-70 disabled:hover:translate-y-0 flex items-center justify-center gap-2 group">
                        {isLoading ? 'Sending...' : 'Submit Enquiry'}
                        {!isLoading && <Send size={16} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />}
                    </button>
                </div>
            </form>
        </div>
    );
}
