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
      "https://www.youtube.com/playlist?list=PLB3ZV-mBfQYyXcNczTG7oc9fffG9P97_P"
    ],
    description:
      "Herbalife Independent Member – Jaffa & Dan Leffler, offering Herbalife preferred customer discounts and distributor opportunities.",
    contactPoint: {
      "@type": "ContactPoint",
      email: "leffleryd@gmail.com",
      contactType: "customer service"
    }
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "NutriPreferred – Herbalife with Jaffa & Dan",
    url: siteUrl,
    description:
      "Sign up as a Herbalife Preferred Customer for exclusive product discounts or become an Independent Distributor. Wellness support, free shake recipes, and business opportunities.",
    publisher: {
      "@type": "Organization",
      name: "Leffler International Investments Pty Ltd"
    }
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is a Herbalife Preferred Customer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A Herbalife Preferred Customer enjoys exclusive savings of up to 25% on all Herbalife nutrition products, including shakes, supplements, and weight management items, with personalized wellness support."
        }
      },
      {
        "@type": "Question",
        name: "How do I sign up as a Herbalife Preferred Customer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Visit nutripreferred.com, choose the Preferred Customer path, and click Sign Up. You'll be directed to the official Herbalife registration form. Use sponsor Jaffa Leffler, ID 05458162C."
        }
      },
      {
        "@type": "Question",
        name: "What is the difference between a Preferred Customer and an Independent Distributor?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Preferred Customers get discounted pricing on Herbalife products for personal use. Independent Distributors can also earn income by building their own Herbalife business and helping others achieve their wellness goals."
        }
      },
      {
        "@type": "Question",
        name: "How do I become an Independent Herbalife Distributor?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Visit nutripreferred.com, choose the Independent Distributor path, and click Sign Up. Complete the Herbalife registration with sponsor Jaffa Leffler, ID 05458162C. You'll receive full training and mentorship to start your business."
        }
      }
    ]
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Herbalife Preferred Customer & Distributor Sign Up",
    provider: {
      "@type": "Organization",
      name: "Leffler International Investments Pty Ltd"
    },
    description:
      "Join Herbalife as a Preferred Customer for exclusive product discounts or as an Independent Distributor to build a wellness business from home.",
    url: siteUrl,
    serviceType: "Health and Wellness Membership"
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

        {/* JSON-LD structured data for search engines and AI platforms */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
