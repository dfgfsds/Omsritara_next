import Head from "next/head";
import Script from "next/script";

export default function HomeSeo() {
    return (
        <>
            {/* ✅ SEO and Favicon */}
            <Head>

                <link rel="icon" href="/favicon.ico" />

                <meta
                    name="google-site-verification"
                    content="Xz1YaaLs5InPzC2s0xVI4jx05V0RE-jVCXceaqJePtg"
                />

                <meta name="p:domain_verify" content="827644200a1c51d4939f6948a6cd13e2" />

            </Head>
            {/* Google Tag Manager */}

            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-QR65DT0BZL"
                strategy="afterInteractive"
            />

            <Script
                id="ga-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-QR65DT0BZL');
    `,
                }}
            />

            {/* Google Tag Manager */}
            <Script
                id="gtm"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-M9PT8ZN8');
    `,
                }}
            />

            {/* Facebook Pixel */}
            <Script
                id="fb-pixel"
                strategy="lazyOnload"
                dangerouslySetInnerHTML={{
                    __html: `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '834668306404616');
      fbq('track', 'PageView');
    `,
                }}
            />

            {/* Microsoft Clarity */}
            <Script
                id="clarity"
                strategy="lazyOnload"
                dangerouslySetInnerHTML={{
                    __html: `
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "tvjlv787ac");
    `,
                }}
            />


            {/* Google Tag Manager (noscript) */}
            <noscript>
                <iframe
                    src="https://www.googletagmanager.com/ns.html?id=GTM-M9PT8ZN8"
                    height="0"
                    width="0"
                    style={{ display: "none", visibility: "hidden" }}
                ></iframe>
            </noscript>
            {/* End Google Tag Manager (noscript) */}</>
    )
}
