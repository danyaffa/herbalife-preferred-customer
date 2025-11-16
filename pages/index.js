// /pages/index.js
import Head from "next/head";

export default function HomePage() {
  const herbalifeRegistrationUrl =
    "https://accounts.myherbalife.com/Account/Create?appId=1&locale=en-US&redirect=https://www.myherbalife.com/en-US/";

  const siteUrl = "https://www.nutripreferred.com";

  return (
    <>
      <Head>
        <title>
          Herbalife Preferred Customer & Independent Member – Jaffa & Dan Leffler
        </title>

        <meta
          name="description"
          content="Choose your path with Herbalife – become a Preferred Customer or Independent Distributor with Jaffa & Dan Leffler. Enjoy savings, wellness support, and business opportunities."
        />
        <meta
          name="keywords"
          content="Herbalife, Herbalife preferred customer, Herbalife independent distributor, Herbalife Melbourne, weight loss shakes, Herbalife nutrition, Herbalife Australia, wellness, Leffler International Investments"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={siteUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta
          property="og:title"
          content="Herbalife Preferred Customer & Independent Member – Jaffa & Dan"
        />
        <meta
          property="og:description"
          content="Wellness, savings, and support with Herbalife. Start as a Preferred Customer or build a business as an Independent Distributor."
        />
        <meta property="og:image" content={`${siteUrl}/images/couple.jpg`} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Herbalife Preferred Customer & Independent Member – Jaffa & Dan"
        />
        <meta
          name="twitter:description"
          content="Choose your Herbalife path with Jaffa & Dan Leffler – wellness, savings, and business opportunity."
        />
        <meta name="twitter:image" content={`${siteUrl}/images/couple.jpg`} />
      </Head>

      <div className="page">
        {/* ------------------------------------------------ */}
        {/* HEADER WITH ROUND LOGO (FINAL) */}
        {/* ------------------------------------------------ */}
        <header className="site-header">
          <a href="/" className="header-logo-image-round">
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

        {/* ------------------------------------------------ */}
        {/* HERO LOGO + TITLE */}
        {/* ------------------------------------------------ */}
        <main id="top">
          <section className="hero-logo-wrapper">
            <img
              src="/images/logo.png"
              alt="Herbalife Independent Member"
              className="hero-logo-image"
            />
            <h1 className="hero-title">Choose Your Path</h1>
            <p className="hero-subtitle">
              Become a Herbalife Preferred Customer or an Independent Distributor
            </p>
          </section>

          {/* ------------------------------------------------ */}
          {/* PREFERRED CUSTOMER SECTION */}
          {/* ------------------------------------------------ */}
          <section className="section path-section">
            <div className="path-block">
              <div className="path-image-wrapper">
                <img
                  src="/images/couple.jpg"
                  alt="Preferred Customer"
                  className="path-image"
                />
              </div>

              <h2 className="path-heading">Preferred Customer</h2>

              <p className="path-text">
                Enjoy exclusive savings on Herbalife products, wellness ideas, and
                support to help you feel your best. No pressure, just a smarter way
                to look after your health.
              </p>

              <div className="button-row">
                <a
                  href={herbalifeRegistrationUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="button"
                >
                  Sign Up as Preferred Customer
                </a>

                <a
                  href="https://youtu.be/d_mjG_QdK9I"
                  target="_blank"
                  rel="noreferrer"
                  className="button-outline"
                >
                  Watch Video
                </a>

                <a
                  href="/ShakeRecipeBrochure.pdf"
                  className="button-outline"
                  download
                >
                  Download Free Shake Recipes
                </a>
              </div>
            </div>
          </section>

          {/* ------------------------------------------------ */}
          {/* INDEPENDENT DISTRIBUTOR */}
          {/* ------------------------------------------------ */}
          <section className="section path-section">
            <div className="path-block">
              <div className="path-image-wrapper">
                <img
                  src="/images/woman.jpg"
                  alt="Independent Distributor"
                  className="path-image"
                />
              </div>

              <h2 className="path-heading">Independent Herbalife Distributor</h2>

              <p className="path-text">
                Start your Herbalife business with support and training. Help
                others with their wellness goals while building flexible income.
              </p>

              <div className="button-row">
                <a
                  href={herbalifeRegistrationUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="button"
                >
                  Sign Up as Independent Herbalife Distributor
                </a>

                <a
                  href="https://youtu.be/tAu3O8fkOIo"
                  target="_blank"
                  rel="noreferrer"
                  className="button-outline"
                >
                  Watch Video
                </a>
              </div>
            </div>
          </section>

          {/* ------------------------------------------------ */}
          {/* HOW IT WORKS */}
          {/* ------------------------------------------------ */}
          <section className="section">
            <div className="how-it-works">
              <h3>How it works</h3>

              <ol>
                <li>
                  Choose whether you start as a{" "}
                  <strong>Preferred Customer</strong> or{" "}
                  <strong>Independent Distributor</strong>.
                </li>

                <li>
                  Click the <strong>Sign Up</strong> button – it takes you to the
                  official Herbalife registration page.
                </li>

                <li>
                  Use our sponsor details:
                  <br />
                  <strong>Sponsor Name:</strong> Jaffa Leffler  
                  <br />
                  <strong>ID:</strong> 05458162C  
                  <br />
                  <strong>First 3 letters of surname:</strong> LEF  
                  <br />
                  <strong>HMP purchased from sponsor?</strong> NO
                </li>

                <li>
                  After registration, email us your confirmation so we can send
                  helpful getting-started tips.
                </li>
              </ol>
            </div>
          </section>

          {/* ------------------------------------------------ */}
          {/* WHO WE ARE */}
          {/* ------------------------------------------------ */}
          <section className="section who-section" id="who-we-are">
            <h2 className="who-title">Who we are</h2>

            <p className="who-text">
              We’re wellness-minded individuals helping others achieve their health,
              energy, and lifestyle goals. With years of experience, we support you
              step-by-step to enjoy better nutrition, exclusive product savings, and
              long-term well-being.
            </p>

            <span className="who-badge">
              Herbalife is proud to be #1 in four major health & wellness categories
            </span>
          </section>

          {/* ------------------------------------------------ */}
          {/* SHAKE RECIPES */}
          {/* ------------------------------------------------ */}
          <section className="section" style={{ marginTop: "3rem" }}>
            <p>Want Healthy Ideas?</p>
            <p>Download our free Herbalife shake recipes brochure.</p>
            <a href="/ShakeRecipeBrochure.pdf" className="shake-button" download>
              Free Shake Recipes
            </a>
          </section>
        </main>

        {/* ------------------------------------------------ */}
        {/* FOOTER */}
        {/* ------------------------------------------------ */}
        <footer id="footer">
          <p>© 2025 Leffler International Investments Pty Ltd. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
