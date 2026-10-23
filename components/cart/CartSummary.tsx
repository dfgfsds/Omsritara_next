"use client";

import { getDeliveryChargeApi, getVendorDeliveryDetailsApi, patchUserSelectAddressAPi, updateUserAPi } from '@/api-endpoints/authendication';
import { deleteCouponApi, getAddressApi, getAppliedCouponDataApi, getCartApi, postApplyCouponApi, postCODPaymentApi, postDtdcChargeApi, postPaymentApi, removeCartCoupon } from '@/api-endpoints/CartsApi';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Separator } from '@/components/ui/separator';
import { useUser } from '@/context/UserContext';
import { useVendor } from '@/context/VendorContext';
// import { formatPrice } from '@/lib/utils';
import { InvalidateQueryFilters, useQuery, useQueryClient } from '@tanstack/react-query';
import { Loader2, MapPin, Phone, X } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import OrderSuccessModal from './OrderSucessModal';
import { formatPrice } from '@/lib/utils';
import { useCurrency } from '@/context/CurrencyContext';
import Image from 'next/image';
import LoginModal from '@/pages/LoginModal/page';
import { syncGuestCartToApi } from '@/lib/cartUtils';
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export default function CartSummary({ totalAmount, selectedProducts }: any) {

  const [userId, setUserId] = useState<string | null>(null);
  const [getCartId, setCartId] = useState<string | null>(null);
  const [signInModal, setSignInModal] = useState(false);
  const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);
  const [phoneNumberInput, setPhoneNumberInput] = useState('');
  const [isUpdatingPhone, setIsUpdatingPhone] = useState(false);
  const [cartItems, setCartItem] = useState()
  const [DeliveryChargeValue, setDeliveryChargeValue] = useState<any>()
  const { user }: any = useUser();
  const { vendorId } = useVendor();
  const [code, setCode] = useState('');
  const [isChecking, setIsChecking] = useState(false);
  const [error, setError] = useState('');
  const [getUserName, setUserName] = useState<string | null>(null);
  const router = useRouter();
  const [selectedAddressId, setSelectedAddressId] = useState<string>();
  const queryClient = useQueryClient();
  const [errorMessage, setErrorMessage] = useState<any>()
  const [loading, setLoading] = useState(false);
  const [dtdcSelectValue, setDtdcSelectValue] = useState('');
  const [dtdcLoader, setDtdcLoader] = useState(false);
  const [paymentValue, setPaymentValue] = useState('')
  const [dtdcDeliveryCharge, setDtdcDeliveryCharge] = useState<any>();
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [addressError, setAddressError] = useState('');
  const { convertPrice } = useCurrency();



  const paymentMethod = [
    { value: "", label: "Pay Online" },
    { value: "cod", label: "Cash on Delivery" }
  ]

  const handlePaymentMethod = (value: string) => {
    setPaymentValue(value)
  }



  const getVendorDeliveryDetailsData: any = useQuery({
    queryKey: ['getVendorDeliveryDetailsData', vendorId],
    queryFn: () => getVendorDeliveryDetailsApi(`${vendorId}`),
    enabled: !!vendorId
  })

  const { data, isLoading }: any = useQuery({
    queryKey: ['getAddressData', userId],
    queryFn: () => getAddressApi(`user/${userId}`),
    enabled: !!userId
  })


  // getAppliedCouponDataApi
  const getAppliedCouponData: any = useQuery({
    queryKey: ['getAppliedCouponDataData', userId],
    queryFn: () => getAppliedCouponDataApi(`?user_id=${userId}`),
    enabled: !!userId
  })


  const handleSelectAddress = async (id: any) => {
    try {
      const upadetApi = await patchUserSelectAddressAPi(`user/${userId}/address/${id?.id}`, { updated_by: user?.data?.name || 'user' });
      if (upadetApi) {
        fetchCartAndDeliveryCharge()
        queryClient.invalidateQueries(['getAddressData'] as InvalidateQueryFilters);

      }
    } catch (error) {

    }
  }

  const handleRemoveCartCoupon = async () => {
    try {
      const updateAPi = await removeCartCoupon(`${getCartId}`, `${getAppliedCouponData?.data?.data?.applied_coupons[0]?.coupon_id}`
      )
      if (updateAPi) {
        queryClient.invalidateQueries(['getAppliedCouponDataData'] as InvalidateQueryFilters);
        setError('');
        setCode('');
      }
    } catch (error) {
      console.log(error, "error");

    }
  }
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!userId) return;
    setError('');
    setIsChecking(true);

    const payload = {
      user_id: Number(userId),
      coupon_code: 'FREEDELIVERY',
      vendor_id: vendorId,
      updated_by: getUserName || 'user'
    };

    try {
      const updateApi = await postApplyCouponApi("", payload);
      if (updateApi) {
        fetchCartAndDeliveryCharge()
      }
    } catch (error: any) {
      setError(error?.response?.data?.error || "Failed to apply coupon. Please try again.");
    } finally {
      setIsChecking(false);
    }
  };

  useEffect(() => {
    const updateAuth = () => {
      try {
        const storedUserId = localStorage.getItem('userId');
        const storedCartId = localStorage.getItem('cartId');
        const storedUserName = localStorage.getItem('userName');

        setUserId(storedUserId);
        setCartId(storedCartId);
        setUserName(storedUserName);
      } catch (e) {
        console.error("Failed to access localStorage", e);
      }
    };
    updateAuth();
    window.addEventListener('storage', updateAuth);
    return () => window.removeEventListener('storage', updateAuth);
  }, []);

  const handleCheckout = async (overridePhone?: string | any) => {
    const phoneToUse = (typeof overridePhone === "string" && overridePhone.trim() !== "")
      ? overridePhone.trim()
      : (user?.data?.contact_number || user?.data?.phone || (typeof window !== "undefined" ? localStorage.getItem('contact_number') : "") || "");

    if (!phoneToUse || phoneToUse.trim() === "") {
      setPhoneNumberInput(user?.data?.contact_number || "");
      setIsPhoneModalOpen(true);
      return;
    }

    setLoading(true);
    setErrorMessage('');
    try {
      if (paymentValue === 'cod') {
        const updateApi = await postCODPaymentApi("",
          {
            customer_phone: phoneToUse,
            vendor_id: vendorId,
            user_id: user?.data?.id || Number(userId),
          }
        );
        if (updateApi) {
          setPaymentSuccess(true);
        }
      } else {
        const paymentAPi = await postPaymentApi('', {
          customer_phone: phoneToUse,
          vendor_id: vendorId,
          user_id: user?.data?.id || Number(userId),
        });

        if (paymentAPi) {
          const { payment_order_id, final_price } = paymentAPi.data;

          const options = {
            key: "rzp_live_SrDYpI6FjlNsln",
            amount: final_price * 100,
            currency: "INR",
            name: "Omsritara",
            description: "Order Payment",
            order_id: payment_order_id,
            handler: function (response: any) {
              setPaymentSuccess(true);
            },
            prefill: {
              name: user?.data?.name,
              email: user?.data?.email,
              contact: phoneToUse,
            },
            notes: {
              address: "Selected Address",
              selectedProducts: Object.entries(selectedProducts)
                .map(([id, name]) => `${name} (ID: ${id})`)
                .join(", "),
            },
            theme: {
              color: "#a5291b",
            },
          };
          const razor = new (window as any).Razorpay(options);
          razor.open();
        }
      }
    } catch (error: any) {
      const errorMsg = error?.response?.data?.message || error?.response?.data?.error || error?.message || "";
      if (
        typeof errorMsg === "string" &&
        (errorMsg.includes("customer_phone") ||
          errorMsg.includes("Missing required fields") ||
          errorMsg.toLowerCase().includes("phone"))
      ) {
        setPhoneNumberInput(user?.data?.contact_number || "");
        setIsPhoneModalOpen(true);
        return;
      }
      setErrorMessage(errorMsg || "Failed to initiate payment. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleUpdatePhoneAndProceed = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const cleanPhone = phoneNumberInput.trim();
    if (!cleanPhone || cleanPhone === '') {
      toast.error("Mobile number is required");
      return;
    }

    if (!/^\d{10}$/.test(cleanPhone)) {
      toast.error("Mobile number must be exactly 10 digits");
      return;
    }

    setIsUpdatingPhone(true);
    try {
      const response = await updateUserAPi(`/${user?.data?.id || userId}`, {
        ...(user?.data || {}),
        contact_number: cleanPhone,
        updated_by: user?.data?.name || "user",
        role: 3,
        vendor: vendorId,
      });

      if (response) {
        if (typeof window !== "undefined") {
          localStorage.setItem('contact_number', cleanPhone);
        }
        queryClient.invalidateQueries(["gerUserData"] as InvalidateQueryFilters);
        queryClient.invalidateQueries(["getAddressData"] as InvalidateQueryFilters);
        toast.success("Profile updated successfully");
        setIsPhoneModalOpen(false);
        // Recall checkout API with the newly saved phone number
        await handleCheckout(cleanPhone);
      }
    } catch (error: any) {
      console.error("Update failed:", error);
      toast.error(error?.response?.data?.error || error?.response?.data?.message || "Failed to update profile, please try again.");
    } finally {
      setIsUpdatingPhone(false);
    }
  };
  const fetchCartAndDeliveryCharge = async () => {
    if (!userId || !getCartId) return;
    try {
      // 1. Fetch cart data
      const cartResponse: any = await getCartApi(getCartId);
      if (cartResponse) {
        setCartItem(cartResponse);
      }

      // 2. Fetch delivery charge
      if (user?.data?.contact_number && userId && vendorId) {
        const deliveryResponse: any = await getDeliveryChargeApi('', {
          user_id: userId,
          vendor_id: vendorId,
          payment_mode: paymentValue,
          customer_phone: user?.data?.contact_number,
        });
        if (deliveryResponse) {
          setDeliveryChargeValue(deliveryResponse?.data);
          setAddressError('')
        }
      }
    } catch (error: any) {
      setAddressError(error?.response?.data?.error || "Please Add delivery addess to proceed with checkout.");
    }
  };

  useEffect(() => {
    if (paymentSuccess) {
      // ✅ Load gtag.js dynamically if not already loaded
      if (!window.gtag) {
        const script1 = document.createElement("script");
        script1.async = true;
        script1.src = "https://www.googletagmanager.com/gtag/js?id=AW-16600190683";
        document.head.appendChild(script1);

        const script2 = document.createElement("script");
        script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-16600190683');
      `;
        document.head.appendChild(script2);
      }

      // ✅ Wait a bit to ensure gtag is ready, then fire conversion event
      const timer = setTimeout(() => {
        if (typeof window.gtag === "function") {
          window.gtag('event', 'conversion', {
            send_to: 'AW-16600190683/Px31CLz2ibcbENudy-s9',
            value: 1500.0, // you can replace this with your actual order amount
            currency: 'INR',
            transaction_id: '' // if you have order_id, pass it here
          });
          console.log("Google Ads conversion event fired ✅");
        }
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [paymentSuccess]);

  useEffect(() => {
    if (getCartId && userId) {
      fetchCartAndDeliveryCharge();
    }
  }, [getCartId, userId, vendorId, user?.data?.contact_number, paymentValue, totalAmount]);

  useEffect(() => {
    if (data?.data?.length) {
      const selected = data?.data?.find((address: any) => address?.selected_address === true);
      if (selected?.id) {
        setSelectedAddressId(String(selected?.id));
      }
    }
  }, [data]);

  useEffect(() => {
    if (userId) {
      handleSubmit({ preventDefault: () => { } });
    }
  }, [userId, vendorId, getUserName]);

  return (
    <>
      {userId ? (
        data?.data?.length ? (
          <div className="space-y-3 mb-3">
            <div className="flex items-center justify-between">
              <h3 className="text-md font-bold text-black">Delivery Address</h3>
              <Link
                href="/profile?tab=addresses"
                className="text-sm text-[#a5291b] font-bold hover:text-red-700"
              >
                Manage addresses
              </Link>
            </div>

            <div className="space-y-2">
              {data?.data
                ?.slice()
                .sort((a: any, b: any) => a.created_at.localeCompare(b.created_at))
                .map((address: any) => (
                  <label
                    key={address.id}
                    className={`flex items-start p-2 rounded-lg border cursor-pointer
          ${selectedAddressId === String(address.id) ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:bg-gray-50'}`}
                  >
                    <input
                      type="radio"
                      name="deliveryAddress"
                      value={address.id}
                      checked={selectedAddressId === String(address.id)}
                      onChange={() => { handleSelectAddress(address) }}
                      className="mt-1 h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        {address.street}
                        {address.isDefault && (
                          <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                            Default
                          </span>
                        )}
                      </p>
                      <h3>{address?.address_type}</h3>
                      <span className="text-sm font-semibold text-gray-500">
                        {address.customer_name}
                      </span>
                      <p className="text-sm text-gray-500">
                        {address.email_address} | {address.contact_number}
                      </p>
                      <p className="text-sm text-gray-500">
                        {address.city}, {address.state} - {address.postal_code}
                      </p>
                      <p className="text-sm text-gray-500 capitalize">{address.country}</p>
                    </div>
                  </label>
                ))}
            </div>
          </div>
        ) : (
          <div className="text-center p-4 bg-gray-50 rounded-lg mb-3">
            <MapPin className="mx-auto h-8 w-8 text-gray-400" />
            <p className="mt-2 text-sm text-gray-600">No delivery address found</p>
            <p className="mt-2 inline-block text-sm text-[#a5291b] hover:text-red-700 font-bold cursor-pointer"
              onClick={() => {
                router.push('/profile?tab=addresses')
              }}
            >
              Add a delivery address
            </p>
          </div>
        )
      ) : null}

      <div className="bg-[#F8F7F2] rounded-xl p-3">
        <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

        <div className="space-y-4 font-bold !text-gray-600">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Subtotal</span>
            <span>{convertPrice(Number(totalAmount))}</span>
          </div>
        </div>

        {!userId ? (
          <div className="space-y-4 font-bold !text-gray-600 mt-1">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Total</span>
              <span>{convertPrice(Number(totalAmount))}</span>
            </div>
          </div>
        ) : addressError ? (
          <span className='mt-4 p-2 text-red-500 block'>{addressError}</span>
        ) : (
          <>
            <div className="space-y-4 font-bold !text-gray-600 mt-1">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Deliver Charge (incl transaction charges)</span>
                <span>{convertPrice(Number(DeliveryChargeValue?.final_delivery_charge || 0))}</span>
              </div>
            </div>

            <div className="space-y-4 font-bold !text-gray-600 mt-1">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total</span>
                <span>{convertPrice(Number(DeliveryChargeValue?.final_price_including_delivery || totalAmount))}</span>
              </div>
            </div>
          </>
        )}

        <div className="mt-6 space-y-4">
          {userId && (
            <div>
              <label className='text-xl font-semibold mb-6'>Payment Method</label>
              {paymentMethod?.map((item: any) => (
                <label
                  key={item?.value}
                  className={`flex items-start mt-2 mb-2 p-3 rounded-lg border cursor-pointer
            ${paymentValue === item?.value ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:bg-gray-50'}`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value={item?.value}
                    checked={paymentValue === String(item?.value)}
                    onChange={() => { handlePaymentMethod(item?.value) }}
                    className="mt-1 h-4 w-4 text-[#a5291b] border-gray-300 focus:ring-red-700"
                  />
                  <div className="ml-3">
                    <p className="text-sm text-black font-bold">
                      {item?.label}
                    </p>
                  </div>
                </label>
              ))}
            </div>
          )}

          {!userId ? (
            <button
              className="w-full p-2.5 bg-[#a5291b] cursor-pointer hover:bg-red-700 text-white font-bold rounded-lg transition uppercase tracking-wider text-sm flex items-center justify-center gap-2"
              onClick={() => setSignInModal(true)}
            >
              Proceed to Checkout
            </button>
          ) : !data?.data?.length ? (
            <button className="w-full p-2 bg-[#a5291b] cursor-pointer hover:bg-red-700 text-white font-bold"
              onClick={() => {
                router.push('/profile?tab=addresses')
              }}
            >
              Add a delivery address
            </button>
          ) : (
            <>
              <button className="w-full p-2 flex gap-2 justify-center bg-[#a5291b] cursor-pointer hover:bg-red-700 text-white font-bold"
                onClick={() => handleCheckout()}
                disabled={!selectedAddressId || loading}
              >
                {loading ? 'Processing...' : 'Proceed to Checkout'}
                {loading && <Loader2 className="h-5 w-5 animate-spin" />}
              </button>
              {errorMessage && (
                <div className='text-[#a5291b] mt-2'>
                  {errorMessage}
                </div>
              )}
            </>
          )}

          <div className="text-center text-sm text-muted-foreground">
            <p>We accept:</p>
            <div className="flex justify-center gap-2 mt-2">
              <Image height={10} width={10} src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/visa.svg" alt="Visa" className="h-6 w-auto opacity-70" />
              <Image height={10} width={10} src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/mastercard.svg" alt="Mastercard" className="h-6 w-auto opacity-70" />
              <Image height={10} width={10} src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/paypal.svg" alt="PayPal" className="h-6 w-auto opacity-70" />
              <Image height={10} width={10} src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/applepay.svg" alt="Apple Pay" className="h-6 w-auto opacity-70" />
            </div>
          </div>
        </div>
      </div>

      {signInModal && (
        <LoginModal
          open={signInModal}
          handleClose={async () => {
            setSignInModal(false);
            const storedId = localStorage.getItem('userId');
            const storedCart = localStorage.getItem('cartId');
            if (storedId) {
              setUserId(storedId);
              setCartId(storedCart);
              if (storedCart) {
                await syncGuestCartToApi(storedCart, storedId, vendorId || 63);
              }
              queryClient.invalidateQueries(['getAddressData'] as InvalidateQueryFilters);
              queryClient.invalidateQueries(['getCartitemsData'] as InvalidateQueryFilters);
            }
          }}
          vendorId={vendorId}
        />
      )}

      {paymentSuccess && <OrderSuccessModal />}

      {/* PHONE NUMBER MODAL */}
      {isPhoneModalOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
          onClick={() => !isUpdatingPhone && setIsPhoneModalOpen(false)}
        >
          <div
            className="relative w-full max-w-md bg-white rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden border border-gray-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#a5291b]" />

            {/* Close Button */}
            <button
              type="button"
              onClick={() => !isUpdatingPhone && setIsPhoneModalOpen(false)}
              disabled={isUpdatingPhone}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 rounded-full p-1 transition disabled:opacity-50"
            >
              <X size={20} />
            </button>

            {/* Header */}
            <div className="text-center mb-6">
              <div className="w-14 h-14 bg-red-50 text-[#a5291b] rounded-full flex items-center justify-center mx-auto mb-3 border border-red-100">
                <Phone size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                Phone Number Required
              </h3>
              <p className="text-xs text-gray-500">
                Please enter your 10-digit mobile number to proceed with your order.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleUpdatePhoneAndProceed}>
              <div className="mb-5">
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                  Mobile Number
                </label>
                <div className="flex rounded-lg border border-gray-300 overflow-hidden focus-within:border-[#a5291b] focus-within:ring-1 focus-within:ring-[#a5291b]">
                  <span className="inline-flex items-center px-3 text-sm font-semibold text-gray-600 bg-gray-50 border-r border-gray-300">
                    +91
                  </span>
                  <input
                    type="tel"
                    autoFocus
                    placeholder="Enter 10-digit number"
                    value={phoneNumberInput}
                    onChange={(e) => setPhoneNumberInput(e.target.value.replace(/\D/g, '').slice(0, 10))}
                    disabled={isUpdatingPhone}
                    className="w-full px-3 py-2.5 text-sm text-gray-900 focus:outline-none"
                    maxLength={10}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isUpdatingPhone || phoneNumberInput.length !== 10}
                className="w-full py-3 px-4 bg-[#a5291b] hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-lg transition uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow"
              >
                {isUpdatingPhone && <Loader2 className="h-4 w-4 animate-spin" />}
                {isUpdatingPhone ? 'Saving & Proceeding...' : 'Continue to Checkout'}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}