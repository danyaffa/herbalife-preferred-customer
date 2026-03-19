// FILE: /pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const siteUrl = "https://www.no1proteinforglp1.com";
  const siteName = "NutriPreferred – Herbalife with Jaffa & Dan";
  const logoUrl = `${siteUrl}/images/logo.png`;

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: "Leffler International Investments Pty Ltd",
    alternateName: "NutriPreferred",
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: logoUrl,
      width: 200,
      height: 100
    },
    image: logoUrl,
    sameAs: [
      "https://www.youtube.com/playlist?list=PLB3ZV-mBfQYyXcNczTG7oc9fffG9P97_P"
    ],
    description:
      "Herbalife Independent Member – Jaffa & Dan Leffler, offering Herbalife preferred customer discounts and distributor opportunities with personalised wellness support.",
    contactPoint: {
      "@type": "ContactPoint",
      email: "leffleryd@gmail.com",
      contactType: "customer service",
      availableLanguage: ["English"]
    },
    founder: [
      { "@type": "Person", name: "Jaffa Leffler" },
      { "@type": "Person", name: "Dan Leffler" }
    ]
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: siteName,
    url: siteUrl,
    description:
      "Sign up as a Herbalife Preferred Customer for exclusive product discounts up to 25% or become an Independent Distributor. Wellness support, free shake recipes, and business opportunities from Jaffa & Dan Leffler.",
    publisher: {
      "@id": `${siteUrl}/#organization`
    },
    inLanguage: "en",
    potentialAction: {
      "@type": "ReadAction",
      target: siteUrl
    }
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteUrl}/#webpage`,
    url: siteUrl,
    name: "Herbalife Preferred Customer & Independent Distributor | NutriPreferred",
    description:
      "Sign up as a Herbalife Preferred Customer for exclusive 25% product discounts, or become an Independent Distributor. Join Jaffa & Dan Leffler for personalised wellness support.",
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: { "@id": `${siteUrl}/#organization` },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: logoUrl
    },
    datePublished: "2025-01-01",
    dateModified: "2026-03-19",
    inLanguage: "en",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteUrl
        }
      ]
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
          text: "A Herbalife Preferred Customer enjoys exclusive savings of up to 25% on all Herbalife nutrition products, including shakes, supplements, teas, and weight management items, with personalised wellness support from a dedicated sponsor."
        }
      },
      {
        "@type": "Question",
        name: "How do I sign up as a Herbalife Preferred Customer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Visit nutripreferred.com, choose the Preferred Customer path, and click Register. You'll be directed to our contact form. After submitting your details, you'll receive the sponsor information needed to complete your Herbalife registration."
        }
      },
      {
        "@type": "Question",
        name: "What is the difference between a Preferred Customer and an Independent Distributor?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Preferred Customers get discounted pricing on Herbalife products for personal use with up to 25% savings. Independent Distributors can also earn income by building their own Herbalife business, selling products, and helping others achieve their wellness goals."
        }
      },
      {
        "@type": "Question",
        name: "How do I become an Independent Herbalife Distributor?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Visit nutripreferred.com, choose the Independent Distributor path, and click Register. Complete our contact form to receive sponsor details and full training, mentorship, and ongoing support to build your business."
        }
      },
      {
        "@type": "Question",
        name: "What products can I buy as a Herbalife Preferred Customer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "As a Preferred Customer you can purchase all Herbalife products at a 25% discount, including Formula 1 shakes, herbal teas, protein bars, supplements, skin care, and weight management programs."
        }
      },
      {
        "@type": "Question",
        name: "Is there a cost to become a Herbalife Preferred Customer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Signing up as a Herbalife Preferred Customer is free. There is no membership fee — you simply gain access to discounted pricing on all Herbalife nutrition products."
        }
      },
      {
        "@type": "Question",
        name: "Can Herbalife protein shakes support GLP-1 injections?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Herbalife's #1 protein shakes in the world are an excellent nutritional support for people on GLP-1 injections, helping to maintain muscle mass and meet daily protein requirements while managing weight. Consult your healthcare provider for personalised advice."
        }
      },
      {
        "@type": "Question",
        name: "Who are Jaffa and Dan Leffler?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Jaffa and Dan Leffler are Independent Herbalife Members since 1993 and Senior Executive Presidents 15K. They run NutriPreferred and are passionate about helping people achieve their health, energy, and lifestyle goals through Herbalife nutrition products and business opportunities."
        }
      }
    ]
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Herbalife Preferred Customer & Distributor Sign Up",
    provider: {
      "@id": `${siteUrl}/#organization`
    },
    description:
      "Join Herbalife as a Preferred Customer for exclusive 25% product discounts or as an Independent Distributor to build a wellness business from home. Free coaching, shake recipes, and personalised wellness support.",
    url: siteUrl,
    serviceType: "Health and Wellness Membership",
    areaServed: {
      "@type": "Country",
      name: "Worldwide"
    },
    offers: [
      {
        "@type": "Offer",
        name: "Herbalife Preferred Customer Membership",
        description: "Free sign-up with up to 25% discount on all Herbalife nutrition products",
        price: "0",
        priceCurrency: "USD"
      },
      {
        "@type": "Offer",
        name: "Independent Herbalife Distributor",
        description: "Start your own Herbalife business with full training and mentorship"
      }
    ]
  };

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person-jaffa`,
    name: "Jaffa Leffler",
    jobTitle: "Senior Executive President 15K, Independent Herbalife Member",
    worksFor: {
      "@id": `${siteUrl}/#organization`
    },
    url: siteUrl,
    knowsAbout: [
      "Herbalife Nutrition",
      "Wellness Coaching",
      "Weight Management",
      "Protein Shakes",
      "GLP-1 Nutrition Support",
      "Home-Based Business"
    ],
    description: "Jaffa Leffler is an Independent Herbalife Member since 1993, Senior Executive President 15K, helping people achieve their health and wellness goals through Herbalife nutrition products."
  };

  const videoJsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      name: "How to Become a Herbalife Preferred Customer",
      description: "Learn about the benefits of becoming a Herbalife Preferred Customer and how to save up to 25% on nutrition products.",
      thumbnailUrl: logoUrl,
      uploadDate: "2025-01-01",
      contentUrl: "https://youtu.be/d_mjG_QdK9I",
      embedUrl: "https://www.youtube.com/embed/d_mjG_QdK9I",
      publisher: { "@id": `${siteUrl}/#organization` }
    },
    {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      name: "How to Become an Independent Herbalife Distributor",
      description: "Discover the Herbalife business opportunity and how to build a wellness business from home with full training and mentorship.",
      thumbnailUrl: logoUrl,
      uploadDate: "2025-01-01",
      contentUrl: "https://youtu.be/tAu3O8fkOIo",
      embedUrl: "https://www.youtube.com/embed/tAu3O8fkOIo",
      publisher: { "@id": `${siteUrl}/#organization` }
    }
  ];

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Sign Up as a Herbalife Preferred Customer or Distributor",
    description: "Step-by-step guide to register as a Herbalife Preferred Customer or Independent Distributor through NutriPreferred.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Choose Your Path",
        text: "Choose Preferred Customer for product discounts or Independent Distributor for a business opportunity."
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Click Sign Up",
        text: "Click the Sign Up button to open the official Herbalife registration form."
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Contact Us",
        text: "Submit the contact form with your details. After submitting, you will receive the sponsor information needed to complete your Herbalife registration."
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Email Us",
        text: "Send us an email at leffleryd@gmail.com after registration so we can welcome you and get started."
      }
    ]
  };

  return (
    <Html lang="en">
      <Head>
        {/* Web App Manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* Preconnect for performance */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://www.youtube.com" />

        {/* JSON-LD structured data for search engines, AI platforms, and social media */}
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {videoJsonLd.map((video, i) => (
          <script
            key={`video-${i}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(video) }}
          />
        ))}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
