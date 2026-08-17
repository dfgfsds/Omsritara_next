'use client';

import { useUser } from '@/context/UserContext';
import { useEffect, useState } from 'react';
import { updateUserAPi } from '@/api-endpoints/authendication';
import { useVendor } from '@/context/VendorContext';
import { InvalidateQueryFilters, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { Loader } from 'lucide-react';
import axios from 'axios';
import { baseUrl } from '@/api-endpoints/ApiUrls';
import toast from 'react-hot-toast';
export default function ProfileAccount() {
  const { user }: any = useUser();
  const { vendorId } = useVendor();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [openModal, setOpenModal] = useState(false);
  const queryClient = useQueryClient();
  const router = useRouter();
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (user) {
      setFormData({
        name: user?.data?.name || '',
        email: user?.data?.email || '',
        phone: user?.data?.contact_number || '',
      });
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    if (id === 'phone') {
      const numericValue = value.replace(/\D/g, '');
      if (numericValue.length <= 10) {
        setFormData(prev => ({ ...prev, [id]: numericValue }));
      }
    } else {
      setFormData(prev => ({ ...prev, [id]: value }));
    }
  };

  const handleUpdate = async () => {
    if (!formData.phone || formData.phone.length !== 10) {
      toast.error('Please enter a valid 10-digit phone number');
      return;
    }
    setLoader(true);
    try {
      const updateApi = await updateUserAPi(`/${user?.data?.id}`, {
        ...formData,
        updated_by: user?.data?.name ? user?.data?.name : 'user',
        role: 3,
        contact_number: formData.phone,
        vendor: vendorId
      });
      if (updateApi) {
        queryClient.invalidateQueries(['gerUserData'] as InvalidateQueryFilters);
        toast.success('Profile updated successfully!');
        setLoader(false)
      }
    } catch (err: any) {
      console.error(err);
      toast.error(err?.response?.data?.message || err?.response?.data?.error || 'Failed to update profile');
      setLoader(false)
    }
  };

  const handleLogout = async () => {
    try {
      const userId = localStorage.getItem('userId');
      if (userId && vendorId) {
        await axios.post(`${baseUrl}/device/logout/`, {
          vendor_id: vendorId,
          device_id: 'BP4A.251205.006',
          user_id: parseInt(userId, 10)
        });
      }
    } catch (error) {
      console.error('Logout API error:', error);
    }
    if (typeof window !== 'undefined') {
      localStorage.clear();
    }
    setOpenModal(false);
    router.push('/login');
  };

  return (
    <div className="space-y-8">
      {/* === Info Card === */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <h2 className="text-xl font-bold">Personal Information</h2>
          <p className="text-sm text-gray-600">Update your account details</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              value={formData?.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={formData?.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="phone" className="block text-sm font-medium mb-1">
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              value={formData?.phone}
              onChange={handleChange}
              className={`w-full border rounded-md p-2 ${formData?.phone?.length > 0 && formData?.phone?.length !== 10 ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`}
            />
            {formData?.phone?.length > 0 && formData?.phone?.length !== 10 && (
              <p className="text-red-500 text-sm mt-1">Please enter a valid 10-digit phone number.</p>
            )}
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button
            onClick={handleUpdate}
            disabled={loader || !formData?.phone || formData?.phone?.length !== 10}
            className={`px-4 py-2 font-bold text-white rounded-md ${loader || !formData?.phone || formData?.phone?.length !== 10 ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#a5291b] hover:bg-red-700'}`}
          >
            {loader ? (
              <div className='flex gap-2'>
                <Loader /> Loading...
              </div>
            ) : ' Save Changes'}

          </button>
        </div>
      </div>

      {/* === Logout Button === */}
      <div className="flex justify-between items-center pt-2">
        <button
          className="px-4 py-2 bg-[#a5291b] hover:bg-red-700 text-white font-bold rounded-md"
          onClick={() => setOpenModal(true)}
        >
          Logout
        </button>
      </div>

      {/* === Logout Confirmation Modal === */}
      {openModal && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
          <div
            className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-semibold mb-4">Confirm Logout</h2>
            <p className="text-sm text-gray-600 mb-4">
              Are you sure you want to sign out?
            </p>

            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={() => setOpenModal(false)}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 text-white rounded-md text-sm font-medium hover:bg-red-700"
              >
                Confirm Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
