// FILE: /pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const siteUrl = "https://www.nutripreferred.com";

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Leffler International Investments Pty Ltd",
    url: siteUrl,
    logo: `${siteUrl}/images/logo.png`,
    sameAs: [
      // add your socials here when ready
      // "https://www.facebook.com/...",
      // "https://www.instagram.com/..."
    ],
    description:
      "Herbalife Independent Member – Jaffa & Dan Leffler, offering Herbalife preferred customer discounts and distributor opportunities."
  };

  return (
    <Html lang="en">
      <Head>
        {/* Google Search Console – replace content value with your code */}
        <meta
          name="google-site-verification"
          content="PASTE_GOOGLE_VERIFICATION_CODE_HERE"
        />

        {/* Bing / Microsoft (msvalidate) – replace with your code */}
        <meta
          name="msvalidate.01"
          content="PASTE_BING_MICROSOFT_CODE_HERE"
        />

        {/* JSON-LD schema for AI/search engines */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
