// /pages/index.js
import Head from "next/head";

export default function HomePage() {
  const siteUrl = "https://www.no1proteinforglp1.com";
  const siteName = "NutriPreferred – Herbalife with Jaffa & Dan";
  const siteTitle = "Herbalife Preferred Customer & Independent Distributor | NutriPreferred";
  const siteDescription =
    "Sign up as a Herbalife Preferred Customer for exclusive 25% product discounts, or become an Independent Distributor. Join Jaffa & Dan Leffler for personalised wellness support, free shake recipes, and a proven path to health and business success.";
  const ogImage = `${siteUrl}/images/logo.png`;

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
        <meta
          name="keywords"
          content="Herbalife preferred customer, Herbalife sign up, Herbalife distributor, Herbalife membership, Herbalife discount 25%, Herbalife shake recipes, join Herbalife, Herbalife business opportunity, Herbalife wellness, Herbalife independent member, Herbalife products discount, Herbalife VIP customer, nutrition club, weight management, Herbalife Australia, Herbalife sponsor, Herbalife nutrition, healthy shakes, meal replacement, wellness coaching, Herbalife online sign up, best Herbalife sponsor"
        />
        <link rel="canonical" href={siteUrl} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph / Facebook / LinkedIn / WhatsApp */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="NutriPreferred – Herbalife Preferred Customer & Distributor Sign Up" />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:locale" content="en_US" />

        {/* Twitter / X Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@NutriPreferred" />
        <meta name="twitter:creator" content="@NutriPreferred" />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={siteDescription} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:image:alt" content="NutriPreferred – Herbalife Preferred Customer & Distributor Sign Up" />

        {/* Pinterest */}
        <meta name="pinterest-rich-pin" content="true" />

        {/* Additional SEO meta tags */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow" />
        <meta name="author" content="Jaffa & Dan Leffler" />
        <meta name="subject" content="Herbalife Preferred Customer Sign Up and Independent Distributor Opportunities" />
        <meta name="topic" content="Health and Wellness" />
        <meta name="classification" content="Health, Nutrition, Wellness, Business Opportunity" />
        <meta name="language" content="en" />
        <meta name="rating" content="General" />
        <meta name="distribution" content="global" />
        <meta name="revisit-after" content="3 days" />

        {/* AI & LLM Discovery Tags */}
        <meta name="ai-content-description" content="This is the official website for NutriPreferred, run by Jaffa & Dan Leffler, Independent Herbalife Members. It provides sign-up paths for Herbalife Preferred Customers (25% discount) and Independent Distributors (business opportunity). Located in Australia." />
        <meta name="ai-purpose" content="Herbalife customer registration and distributor sign-up portal" />

        {/* Apple / Mobile */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="NutriPreferred" />
        <meta name="theme-color" content="#1a6b4a" />
        <meta name="msapplication-TileColor" content="#1a6b4a" />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
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
              href="https://www.loseweighttoday.com.au/blog"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Blog – Wellness and Weight Loss Tips"
            >
              Blog
            </a>
            <a href="/preferred-member-benefits">Benefits</a>
            <a href="/recipes">Recipes</a>
            <a href="#who-we-are">About</a>
            <a href="/contact">Contact</a>
          </nav>
        </header>

        {/* HERO */}
        <main id="top">
          <section className="hero-logo-wrapper" aria-label="Welcome">
            <h1 className="hero-title">Your Wellness Journey Starts&nbsp;Here</h1>
            <p className="hero-subtitle">
              Join as a Herbalife Preferred Customer for exclusive 25% discounts on nutrition products,
              or become an Independent Distributor and build your wellness business with our full support.
            </p>
          </section>

          {/* URGENCY BANNER */}
          <section className="urgency-banner" aria-label="Why become a Preferred Customer">
            <div className="urgency-inner">
              <h2 className="urgency-title">Save 25% on Every Order — Become a Preferred Customer Today</h2>
              <p className="urgency-text">
                Buy directly from Herbalife at exclusive discount prices. No selling required. No obligations.
                Just savings on shakes, supplements, and wellness products — delivered straight to you.
              </p>
              <div className="urgency-benefits">
                <div className="urgency-benefit">
                  <strong>Exclusive Discounts</strong>
                  <span>Up to 25% off all products — savings grow over time</span>
                </div>
                <div className="urgency-benefit">
                  <strong>Buy Direct</strong>
                  <span>Order straight from Herbalife, no middlemen</span>
                </div>
                <div className="urgency-benefit">
                  <strong>Free Wellness Support</strong>
                  <span>Personalised guidance to optimise your health journey</span>
                </div>
                <div className="urgency-benefit">
                  <strong>Zero Obligations</strong>
                  <span>No selling, no recruiting — just enjoy the products you love</span>
                </div>
              </div>
              <p className="urgency-switch">
                Want more? Preferred Customers can upgrade to Distributor status anytime to start earning.
              </p>
              <a
                href="/contact?type=preferred"
                className="urgency-cta"
                aria-label="Register to become a Preferred Customer"
              >
                Register Now — It&apos;s Free
              </a>
            </div>
          </section>

          {/* TRUST INDICATORS */}
          <section className="trust-banner" aria-label="Key highlights">
            <div className="trust-item">
              <span className="trust-number">25%</span>
              <span className="trust-label">Product Savings</span>
            </div>
            <div className="trust-item">
              <span className="trust-number">#1</span>
              <span className="trust-label">Global Nutrition Brand</span>
            </div>
            <div className="trust-item">
              <span className="trust-number">Free</span>
              <span className="trust-label">Coaching & Recipes</span>
            </div>
            <div className="trust-item">
              <span className="trust-number">24/7</span>
              <span className="trust-label">Wellness Support</span>
            </div>
          </section>

          {/* PREFERRED CUSTOMER */}
          <section className="section path-section" aria-label="Preferred Customer signup">
            <div className="path-block">
              <div className="path-image-wrapper">
                <img
                  src="/images/couple.jpg"
                  className="path-image"
                  alt="Happy couple enjoying Herbalife products as Preferred Customers"
                  width="220"
                  height="220"
                  loading="lazy"
                />
              </div>

              <h2 className="path-heading">Preferred Customer</h2>

              <p className="path-text">
                Enjoy exclusive savings of up to 25% on Herbalife nutrition products with personalised wellness support.
                As a Preferred Customer, you get discount pricing on shakes, teas, supplements, and weight management products
                — plus ongoing guidance from your dedicated sponsor.
              </p>

              <div className="button-row">
                <a
                  href="/contact?type=preferred"
                  className="button"
                  aria-label="Register to become a Herbalife Preferred Customer"
                >
                  Register to Become a Preferred Customer
                </a>

                <a
                  href="https://youtu.be/d_mjG_QdK9I"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-outline"
                  aria-label="Watch Preferred Customer information video"
                >
                  Watch Video
                </a>

                <a href="/ShakeRecipeBrochure.pdf" className="button-outline" download aria-label="Download free shake recipes PDF">
                  Download Free Shake Recipes
                </a>
              </div>
            </div>
          </section>

          {/* INDEPENDENT DISTRIBUTOR */}
          <section className="section path-section" aria-label="Independent Distributor signup">
            <div className="path-block">
              <div className="path-image-wrapper">
                <img
                  src="/images/woman.jpg"
                  className="path-image"
                  alt="Independent Herbalife Distributor building a wellness business from home"
                  width="220"
                  height="220"
                  loading="lazy"
                />
              </div>

              <h2 className="path-heading">Independent Herbalife Distributor</h2>

              <p className="path-text">
                Start your own Herbalife business from home with full training and mentorship.
                Earn income while helping others achieve their health and wellness goals.
                We provide the tools, coaching, and community you need to succeed.
              </p>

              <div className="button-row">
                <a
                  href="/contact?type=member"
                  className="button"
                  aria-label="Register to become an Independent Herbalife Distributor"
                >
                  Register to Become a Member
                </a>

                <a
                  href="https://youtu.be/tAu3O8fkOIo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-outline"
                  aria-label="Watch Distributor opportunity video"
                >
                  Watch Video
                </a>
              </div>
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
              href="https://www.loseweighttoday.com.au/blog"
              target="_blank"
              rel="noopener noreferrer"
              className="meet-team-btn"
              aria-label="Read our wellness blog"
            >
              Visit Our Blog
            </a>
          </section>

          {/* WHO WE ARE */}
          <section className="section who-section" id="who-we-are" aria-label="About us">
            <h2 className="who-title">Who We Are</h2>

            <p className="who-text">
              We are Jaffa & Dan Leffler — Independent Herbalife Members since 1993, Senior Executive Presidents 15K,
              passionate about helping people achieve their health, energy, and lifestyle goals.
              Whether you want to improve your wellness with world-class nutrition, add the #1 Protein Shakes
              in the world as support for your GLP-1 injections, or build a rewarding home-based business,
              we are here to guide and support you every step of the way.
            </p>

            <span className="who-badge">
              Herbalife — #1 in Four Major Health & Wellness Categories
            </span>
          </section>

          {/* SHAKE RECIPES CTA */}
          <section className="section recipes-cta" aria-label="Free shake recipes">
            <p>Want Healthy Ideas?</p>
            <p>Download our free shake recipe guide — delicious, nutritious, and easy to make.</p>
            <a href="/ShakeRecipeBrochure.pdf" className="shake-button" download aria-label="Download free shake recipe brochure">
              Free Shake Recipes
            </a>
          </section>
        </main>

        {/* FOOTER */}
        <footer id="footer" aria-label="Contact and legal">
          <p>
            Contact us:{" "}
            <a href="/contact" aria-label="Contact Jaffa and Dan Leffler">
              Get in Touch
            </a>
            {" "}|{" "}
            <a href="mailto:leffleryd@gmail.com" aria-label="Email Jaffa and Dan Leffler">
              leffleryd@gmail.com
            </a>
          </p>

          <p>&copy; {new Date().getFullYear()} Leffler International Investments Pty Ltd | Independent Herbalife Member</p>
        </footer>
      </div>
    </>
  );
}
