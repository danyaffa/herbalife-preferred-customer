// /pages/instructions.js
import Head from "next/head";

export default function InstructionsPage() {
  const registrationUrl =
    "https://accounts.myherbalife.com/Account/Create?appId=1&qrFlow=1&locale=en-US&SponsorId=sx4pw1BxvAWOTs1Yu1fm1A==&cmp=m_it_it_wbs_dssignup_btn_nap_copylink_20250305";

  const siteUrl = "https://www.nutripreferred.com";
  const pageUrl = `${siteUrl}/instructions`;
  const pageTitle = "How to Become a Preferred Customer – Step-by-Step Instructions | NutriPreferred";
  const pageDescription =
    "Follow these simple step-by-step instructions to become a Herbalife Preferred Customer. Create your account, enter sponsor details (ID 05458162C, LEF), and start saving 25% on all Herbalife products.";
  const ogImage = `${siteUrl}/images/logo.png`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content="Herbalife preferred customer sign up, Herbalife registration instructions, how to become Herbalife preferred customer, Herbalife sponsor ID, Herbalife account setup, Herbalife step by step, Herbalife sign up guide, preferred customer registration"
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

        {/* SEO */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta name="author" content="Jaffa & Dan Leffler" />

        {/* AI Discovery */}
        <meta name="ai-content-description" content="Step-by-step instructions for signing up as a Herbalife Preferred Customer through NutriPreferred. Sponsor: Jaffa Leffler, ID 05458162C, LEF. Includes account creation, path selection, sponsor entry, personal details, address, and payment steps." />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />

        {/* JSON-LD HowTo Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: "How to Become a Herbalife Preferred Customer",
              description: pageDescription,
              step: [
                {
                  "@type": "HowToStep",
                  position: 1,
                  name: "Create an Account",
                  text: "Enter your email address, confirm it, choose a password, confirm it, click 'I am not a robot', and click 'Create an account'."
                },
                {
                  "@type": "HowToStep",
                  position: 2,
                  name: "Choose Your Path",
                  text: "On the second page, click 'Become a Preferred Customer' on the left side."
                },
                {
                  "@type": "HowToStep",
                  position: 3,
                  name: "Enter Sponsor Information",
                  text: "Enter sponsor ID: 05458162C. Enter sponsor name (first 3 letters): LEF."
                },
                {
                  "@type": "HowToStep",
                  position: 4,
                  name: "Enter Your Personal Information",
                  text: "Fill in your last name, first name, gender, date of birth, and other required personal details."
                },
                {
                  "@type": "HowToStep",
                  position: 5,
                  name: "Enter Address & Contact Details",
                  text: "Enter your street address, postal code, city, mobile number, and email address."
                },
                {
                  "@type": "HowToStep",
                  position: 6,
                  name: "Complete Registration & Payment",
                  text: "Review optional preferences, accept terms and conditions, select your shipping address, and enter payment information to finalise."
                }
              ],
              totalTime: "PT10M",
              tool: [{ "@type": "HowToTool", name: "Web browser" }],
              supply: [],
              url: pageUrl
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
            <a href="/preferred-member-benefits">Benefits</a>
            <a href="/#who-we-are">About</a>
            <a href="/#footer">Contact</a>
          </nav>
        </header>

        {/* BREADCRUMB */}
        <div className="breadcrumb">
          <a href="/">Home</a> &gt; Instructions
        </div>

        <main>
          {/* HERO BANNER */}
          <section className="instructions-hero">
            <h1 className="instructions-hero-title">Become a Preferred Customer</h1>
            <p className="instructions-hero-subtitle">and enjoy many benefits and discounts</p>

            <div className="instructions-hero-cta">
              <p className="instructions-start-text">To start:</p>
              <a
                href={registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="instructions-open-form-btn"
                aria-label="Open the Herbalife online registration form"
              >
                Open The Online Registration Form
              </a>
              <p className="instructions-follow-text">and follow the instructions below.</p>
            </div>
          </section>

          {/* STEPS */}
          <div className="instructions-steps">

            {/* STEP 1 */}
            <section className="step-card" aria-label="Step 1">
              <div className="step-content">
                <h2 className="step-title">Step 1: Create an account</h2>
                <ol className="step-list">
                  <li>Enter your e-mail address</li>
                  <li>Enter it again</li>
                  <li>Choose a password</li>
                  <li>Re-enter your password</li>
                  <li>Click on &quot;I am not a robot&quot;</li>
                  <li>Click on the &quot;Create an account&quot; button</li>
                </ol>
              </div>
            </section>

            {/* STEP 2 */}
            <section className="step-card" aria-label="Step 2">
              <div className="step-content">
                <h2 className="step-title">Step 2: Choose your path</h2>
                <p className="step-description">
                  On the second page, click on the <strong>&quot;Become a Preferred Customer&quot;</strong> button on the left side.
                </p>
              </div>
            </section>

            {/* STEP 3 — YOUR SPONSOR DETAILS */}
            <section className="step-card step-card-highlight" aria-label="Step 3">
              <div className="step-content">
                <h2 className="step-title">Step 3: Enter sponsor information</h2>
                <div className="sponsor-details">
                  <div className="sponsor-field">
                    <span className="sponsor-label">1. ID Sponsor Herbalife</span>
                    <span className="sponsor-value">05458162C</span>
                  </div>
                  <div className="sponsor-field">
                    <span className="sponsor-label">2. Sponsor name (first 3 letters):</span>
                    <span className="sponsor-value">LEF</span>
                  </div>
                </div>
              </div>
            </section>

            {/* STEP 4 */}
            <section className="step-card" aria-label="Step 4">
              <div className="step-content">
                <h2 className="step-title">Step 4: Enter your personal information</h2>
                <ol className="step-list">
                  <li>Last name</li>
                  <li>First name</li>
                  <li>Gender (Male / Female)</li>
                  <li>Date of birth</li>
                </ol>
              </div>
            </section>

            {/* STEP 5 */}
            <section className="step-card" aria-label="Step 5">
              <div className="step-content">
                <h2 className="step-title">Step 5: Address and contact details</h2>
                <ol className="step-list">
                  <li>Street address</li>
                  <li>Postal code</li>
                  <li>City</li>
                  <li>State / Region</li>
                  <li>Mobile number</li>
                  <li>Another phone number (optional)</li>
                  <li>Email address (pre-filled)</li>
                </ol>
              </div>
            </section>

            {/* STEP 6 */}
            <section className="step-card" aria-label="Step 6">
              <div className="step-content">
                <h2 className="step-title">Step 6: Optional preferences</h2>
                <ol className="step-list">
                  <li>Newsletter subscription (optional)</li>
                  <li>Previous Preferred Customer Pack purchase status</li>
                  <li>History as Herbalife distributor</li>
                  <li>Click &quot;Continue&quot;</li>
                </ol>
              </div>
            </section>

            {/* STEP 7 */}
            <section className="step-card" aria-label="Step 7">
              <div className="step-content">
                <h2 className="step-title">Step 7: Terms and conditions</h2>
                <p className="step-description">
                  Review and accept Herbalife&apos;s terms and conditions to proceed.
                </p>
              </div>
            </section>

            {/* STEP 8 */}
            <section className="step-card" aria-label="Step 8">
              <div className="step-content">
                <h2 className="step-title">Step 8: Shipping</h2>
                <p className="step-description">
                  Select or confirm your delivery address for your products.
                </p>
              </div>
            </section>

            {/* STEP 9 */}
            <section className="step-card" aria-label="Step 9">
              <div className="step-content">
                <h2 className="step-title">Step 9: Payment</h2>
                <p className="step-description">
                  Select your preferred payment method and enter your payment information to finalise your sign-up.
                </p>
              </div>
            </section>
          </div>

          {/* COMPLETION */}
          <section className="instructions-complete">
            <h2>You&apos;re All Set!</h2>
            <p>
              You will receive an email confirming your registration and will be able to benefit from
              all the advantages of the Preferred Customer program — including up to 25% off all Herbalife products.
            </p>
            <p className="instructions-complete-contact">
              After you complete your registration, please email us at{" "}
              <a href="mailto:leffleryd@gmail.com">leffleryd@gmail.com</a>{" "}
              so we can welcome you and help you get started!
            </p>
          </section>

          {/* CTA */}
          <section className="instructions-bottom-cta">
            <a
              href={registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="instructions-open-form-btn"
              aria-label="Open the Herbalife registration form"
            >
              Open The Online Registration Form
            </a>
          </section>
        </main>

        {/* FOOTER */}
        <footer id="footer" aria-label="Contact and legal">
          <p>
            Contact us:{" "}
            <a href="mailto:leffleryd@gmail.com">leffleryd@gmail.com</a>
          </p>
          <div className="footer-social">
            <a
              href="https://www.youtube.com/playlist?list=PLB3ZV-mBfQYyXcNczTG7oc9fffG9P97_P"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube
            </a>
          </div>
          <p>&copy; {new Date().getFullYear()} Leffler International Investments Pty Ltd | Independent Herbalife Member</p>
        </footer>
      </div>
    </>
  );
}
