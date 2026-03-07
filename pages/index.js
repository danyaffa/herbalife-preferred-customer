// /pages/index.js
import Head from "next/head";

export default function HomePage() {
  const herbalifeRegistrationUrl =
    "https://accounts.myherbalife.com/Account/Create?appId=1&locale=en-US&redirect=https://www.myherbalife.com/en-US/";

  const siteUrl = "https://www.nutripreferred.com";

  return (
    <>
      <Head>
        <title>Herbalife Preferred Customer & Independent Member – Jaffa & Dan</title>
        <meta
          name="description"
          content="Sign up as a Herbalife Preferred Customer for exclusive product discounts up to 25% off, or become an Independent Distributor. Join Jaffa & Dan Leffler for wellness support, free shake recipes, and a proven path to health and business success."
        />
        <meta
          name="keywords"
          content="Herbalife preferred customer, Herbalife sign up, Herbalife distributor, Herbalife membership, Herbalife discounts, Herbalife shake recipes, join Herbalife, Herbalife business opportunity, Herbalife wellness, Herbalife independent member, Herbalife products discount, Herbalife VIP customer, nutrition club, weight management"
        />
        <link rel="canonical" href={siteUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content="Herbalife Preferred Customer & Independent Member – Jaffa & Dan" />
        <meta property="og:description" content="Sign up as a Herbalife Preferred Customer for exclusive product discounts, or become an Independent Distributor. Free shake recipes, wellness support, and business opportunities." />
        <meta property="og:image" content={`${siteUrl}/images/logo.png`} />
        <meta property="og:site_name" content="NutriPreferred – Herbalife with Jaffa & Dan" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Herbalife Preferred Customer & Independent Member" />
        <meta name="twitter:description" content="Join Herbalife as a Preferred Customer or Independent Distributor. Exclusive discounts, free shake recipes, and wellness support from Jaffa & Dan Leffler." />
        <meta name="twitter:image" content={`${siteUrl}/images/logo.png`} />

        {/* Additional SEO meta tags */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="Jaffa & Dan Leffler" />
        <meta name="subject" content="Herbalife Preferred Customer Sign Up and Independent Distributor Opportunities" />
        <meta name="topic" content="Health and Wellness" />
        <meta name="classification" content="Health, Nutrition, Wellness, Business Opportunity" />
      </Head>

      <div className="page">
        {/* HEADER */}
        <header className="site-header">
          <a href="/" className="top-left-logo">
            <img src="/images/logo.png" alt="Herbalife Logo" />
          </a>

          <nav className="site-nav">
            <a href="#top">Home</a>
            <a
              href="https://www.youtube.com/playlist?list=PLB3ZV-mBfQYyXcNczTG7oc9fffG9P97_P"
              target="_blank"
              rel="noreferrer"
            >
              Blog-Breaking-Down-Metabolic-Health
            </a>
            <a href="#who-we-are">About</a>
            <a href="#footer">Contact</a>
          </nav>
        </header>

        {/* HERO TEXT ONLY */}
        <main id="top">
          <section className="hero-logo-wrapper">
            <h1 className="hero-title">Choose Your Herbalife Path</h1>
            <p className="hero-subtitle">
              Become a Herbalife Preferred Customer for exclusive discounts or join as an Independent Distributor to build your wellness business
            </p>
          </section>

          {/* PREFERRED CUSTOMER */}
          <section className="section path-section">
            <div className="path-block">
              <div className="path-image-wrapper">
                <img src="/images/couple.jpg" className="path-image" alt="Happy couple enjoying Herbalife products as Preferred Customers" />
              </div>

              <h2 className="path-heading">Preferred Customer</h2>

              <p className="path-text">
                Enjoy exclusive savings of up to 25% on Herbalife nutrition products with personalized wellness support. As a Preferred Customer, you get discount pricing on shakes, supplements, and weight management products.
              </p>

              <div className="button-row">
                <a
                  href={herbalifeRegistrationUrl}
                  target="_blank"
                  className="button"
                >
                  Sign Up as Preferred Customer
                </a>

                <a
                  href="https://youtu.be/d_mjG_QdK9I"
                  target="_blank"
                  className="button-outline"
                >
                  Watch Video
                </a>

                <a href="/ShakeRecipeBrochure.pdf" className="button-outline" download>
                  Download Free Shake Recipes
                </a>
              </div>
            </div>
          </section>

          {/* INDEPENDENT DISTRIBUTOR */}
          <section className="section path-section">
            <div className="path-block">
              <div className="path-image-wrapper">
                <img src="/images/woman.jpg" className="path-image" alt="Independent Herbalife Distributor building a wellness business" />
              </div>

              <h2 className="path-heading">Independent Herbalife Distributor</h2>

              <p className="path-text">Start your own Herbalife business from home with full training and mentorship. Earn income while helping others achieve their health and wellness goals as an Independent Distributor.</p>

              <div className="button-row">
                <a
                  href={herbalifeRegistrationUrl}
                  target="_blank"
                  className="button"
                >
                  Sign Up as Independent Herbalife Distributor
                </a>

                <a
                  href="https://youtu.be/tAu3O8fkOIo"
                  target="_blank"
                  className="button-outline"
                >
                  Watch Video
                </a>
              </div>
            </div>
          </section>

          {/* HOW IT WORKS */}
          <section className="section">
            <div className="how-it-works">
              <h3>How it works</h3>
              <ol>
                <li>Choose Preferred Customer or Independent Distributor.</li>
                <li>Click Sign Up to open the Herbalife registration form.</li>
                <li>
                  Sponsor details: Jaffa Leffler – ID 05458162C – LEF – HMP Purchased:
                  NO.
                </li>
                <li>Email us after registration.</li>
              </ol>
            </div>
          </section>

          {/* WHO WE ARE */}
          <section className="section who-section" id="who-we-are">
            <h2 className="who-title">Who we are</h2>

            <p className="who-text">
              We are Jaffa & Dan Leffler, Independent Herbalife Members helping people achieve their health, energy, and lifestyle goals through Herbalife nutrition products and business opportunities. Whether you want to improve your wellness or build a home-based business, we provide the guidance and support you need.
            </p>

            <span className="who-badge">
              Herbalife is #1 in four major health & wellness categories
            </span>
          </section>

          {/* SHAKE RECIPES */}
          <section className="section" style={{ marginTop: "3rem" }}>
            <p>Want Healthy Ideas?</p>
            <p>Download free shake recipes.</p>
            <a href="/ShakeRecipeBrochure.pdf" className="shake-button" download>
              Free Shake Recipes
            </a>
          </section>
        </main>

        {/* FOOTER */}
        <footer id="footer">
          <p>Contact: <a href="mailto:leffleryd@gmail.com">leffleryd@gmail.com</a></p>
          <p>© 2025 Leffler International Investments Pty Ltd. | Independent Herbalife Member</p>
        </footer>
      </div>
    </>
  );
}
