import "@/styles/globals.css";
import "../styles/fonts.css";
import { AppProps } from "next/app";

import Layout from "@/components/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { ProductsProvider } from "@/context/ProductsContext";
import { VendorProvider } from "@/context/VendorContext";
import { UserProvider } from "@/context/UserContext";
import { CartItemProvider } from "@/context/CartItemContext";
import { CategoriesProvider } from "@/context/CategoriesContext";
import { PolicyProvider } from "@/context/PolicyContext";
import { CurrencyProvider } from "@/context/CurrencyContext";
import { WishListProvider } from "@/context/WishListContext";
import { IntentionProvider } from "@/context/IntentionsContext";
import { Toaster } from "react-hot-toast";
import 'quill/dist/quill.snow.css';
import { ReviewItemProvider } from "@/context/ReviewsUserContext";
import { ReviewProductsProvider } from "@/context/ReviewsContext";
import HomeSeo from "@/components/homeseohead";



export default function App({ Component, pageProps }: AppProps) {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <>

            <HomeSeo />

            {/* Context Providers */}
            <QueryClientProvider client={queryClient}>
                <VendorProvider>
                    <WishListProvider>
                        <ProductsProvider>
                            <UserProvider>
                                <CartItemProvider>
                                    <CategoriesProvider>
                                        <IntentionProvider>
                                            <CurrencyProvider>
                                                <PolicyProvider>
                                                    <ReviewItemProvider>
                                                        <ReviewProductsProvider>
                                                            <Layout>
                                                                <Toaster position="top-right" reverseOrder={false} />
                                                                <Component {...pageProps} />
                                                            </Layout>
                                                        </ReviewProductsProvider>
                                                    </ReviewItemProvider>
                                                </PolicyProvider>
                                            </CurrencyProvider>
                                        </IntentionProvider>
                                    </CategoriesProvider>
                                </CartItemProvider>
                            </UserProvider>
                        </ProductsProvider>
                    </WishListProvider>
                </VendorProvider>
            </QueryClientProvider>

        </>
    );
}
