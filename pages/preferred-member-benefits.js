// /pages/preferred-member-benefits.js
import Head from "next/head";

export default function PreferredMemberBenefitsPage() {
  const herbalifeRegistrationUrl =
    "https://accounts.myherbalife.com/Account/Create?appId=1&locale=en-US&redirect=https://www.myherbalife.com/en-US/";

  const siteUrl = "https://www.nutripreferred.com";
  const pageUrl = `${siteUrl}/preferred-member-benefits`;
  const pageTitle = "Benefits of Being a Herbalife Preferred Member | NutriPreferred";
  const pageDescription =
    "Discover all the benefits of becoming a Herbalife Preferred Member — exclusive discounts up to 25%, personalised sponsor support, educational resources, rewards, community access, and early product launches. No selling required.";
  const ogImage = `${siteUrl}/images/logo.png`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content="Herbalife preferred member benefits, Herbalife membership advantages, Herbalife discount program, Herbalife wellness support, Herbalife sponsor support, Herbalife rewards, Herbalife community, Herbalife new products, preferred customer perks, Herbalife education materials, Herbalife health goals"
        />
        <link rel="canonical" href={pageUrl} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="NutriPreferred – Herbalife with Jaffa & Dan" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={ogImage} />

        {/* Pinterest */}
        <meta name="pinterest-rich-pin" content="true" />

        {/* SEO */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta name="author" content="Jaffa & Dan Leffler" />

        {/* AI Discovery */}
        <meta name="ai-content-description" content="Comprehensive guide to all benefits of being a Herbalife Preferred Member, including exclusive discounts, personalised sponsor support, educational materials, reward programs, community networking, early product access, and total flexibility with no selling obligations." />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />

        {/* JSON-LD Article Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: "What Are the Benefits of Being a Preferred Member of Herbalife?",
              description: pageDescription,
              author: {
                "@type": "Person",
                name: "Jaffa & Dan Leffler"
              },
              publisher: {
                "@type": "Organization",
                name: "NutriPreferred",
                logo: { "@type": "ImageObject", url: ogImage }
              },
              url: pageUrl,
              datePublished: "2026-03-19",
              dateModified: "2026-03-19",
              mainEntityOfPage: pageUrl
            })
          }}
        />
      </Head>

      <div className="page">
        {/* HEADER */}
        <header className="site-header">
          <a href="/" className="top-left-logo" aria-label="NutriPreferred Home">
            <img src="/images/logo.png" alt="NutriPreferred – Herbalife Independent Member Logo" width="160" height="80" />
          </a>

          <nav className="site-nav" aria-label="Main navigation">
            <a href="/">Home</a>
            <a
              href="https://www.youtube.com/playlist?list=PLB3ZV-mBfQYyXcNczTG7oc9fffG9P97_P"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blog
            </a>
            <a href="/#who-we-are">About</a>
            <a href="/contact">Contact</a>
          </nav>
        </header>

        <main>
          {/* PAGE HERO */}
          <section className="benefits-hero">
            <h1 className="benefits-hero-title">
              Benefits of Being a Herbalife Preferred&nbsp;Member
            </h1>
            <p className="benefits-hero-subtitle">
              More than just discounts — it is a complete wellness experience tailored to your personal health goals.
            </p>
          </section>

          {/* INTRO */}
          <section className="benefits-intro">
            <p>
              Joining the Herbalife Preferred Member program gives you access to a wide range of benefits
              beyond product discounts. From expert guidance to exclusive resources, your membership is designed to
              enrich every part of your wellness journey.
            </p>
          </section>

          {/* BENEFITS GRID */}
          <section className="benefits-grid" aria-label="Membership benefits">
            <div className="benefit-card">
              <div className="benefit-icon">📚</div>
              <h2>Exclusive Educational Materials</h2>
              <p>
                Access wellness guides, nutrition plans, and expert advice to make informed choices
                about your diet, fitness, and well-being. Maximise the benefits of Herbalife products in your daily routine.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">🤝</div>
              <h2>Personalised Sponsor Support</h2>
              <p>
                Your dedicated sponsor provides guidance, motivation, and personalised product recommendations
                based on your individual health goals. Support every step of the way.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">🎁</div>
              <h2>Rewards & Incentives</h2>
              <p>
                Earn incentives based on your purchases and engagement — exclusive promotions,
                limited-time offers, and special gifts that recognise your commitment to healthy living.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">🌍</div>
              <h2>Community & Networking</h2>
              <p>
                Join a global community passionate about health and wellness. Participate in local and online events,
                fitness challenges, and workshops to connect and find inspiration.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">🚀</div>
              <h2>Early Access to New Products</h2>
              <p>
                Be among the first to try innovative Herbalife formulas and product launches.
                Preferred Members enjoy early access to special promotions and new releases.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">✨</div>
              <h2>Total Flexibility</h2>
              <p>
                No selling. No recruiting. No quotas. Just the freedom to purchase and use
                Herbalife products at your own pace, focused entirely on your personal wellness.
              </p>
            </div>
          </section>

          {/* MEET OUR TEAM */}
          <section className="section meet-team-section" aria-label="Meet our educators team">
            <h2 className="meet-team-title">Meet Our Wellness Educators</h2>
            <p className="meet-team-text">
              Get to know Jaffa & Dan and discover how we help people transform their health through
              personalised nutrition coaching, wellness education, and community support.
            </p>
            <a
              href="https://www.youtube.com/playlist?list=PLB3ZV-mBfQYyXcNczTG7oc9fffG9P97_P"
              target="_blank"
              rel="noopener noreferrer"
              className="meet-team-btn"
              aria-label="Watch our wellness educators team on YouTube"
            >
              Meet Our Educators Team
            </a>
          </section>

          {/* CTA */}
          <section className="benefits-cta-section">
            <h2>Ready to Experience These Benefits?</h2>
            <p>
              Becoming a Preferred Member is more than discounts — it is expert support, educational resources,
              community engagement, and rewarding incentives, all designed to help you reach your health goals.
            </p>
            <a
              href="/contact?type=preferred"
              className="button"
              aria-label="Register to become a Herbalife Preferred Member"
            >
              Register to Become a Preferred Member
            </a>
          </section>
        </main>

        {/* FOOTER */}
        <footer id="footer" aria-label="Contact and legal">
          <p>
            Contact us:{" "}
            <a href="mailto:leffleryd@gmail.com">leffleryd@gmail.com</a>
          </p>
          <p>&copy; {new Date().getFullYear()} Leffler International Investments Pty Ltd | Independent Herbalife Member</p>
        </footer>
      </div>
    </>
  );
}
