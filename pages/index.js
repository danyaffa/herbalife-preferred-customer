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
          content="Choose your path with Herbalife – Preferred Customer or Independent Distributor."
        />
        <link rel="canonical" href={siteUrl} />
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
            <h1 className="hero-title">Choose Your Path</h1>
            <p className="hero-subtitle">
              Become a Herbalife Preferred Customer or an Independent Distributor
            </p>
          </section>

          {/* PREFERRED CUSTOMER */}
          <section className="section path-section">
            <div className="path-block">
              <div className="path-image-wrapper">
                <img src="/images/couple.jpg" className="path-image" />
              </div>

              <h2 className="path-heading">Preferred Customer</h2>

              <p className="path-text">
                Enjoy exclusive savings on Herbalife products and wellness support.
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
                <img src="/images/woman.jpg" className="path-image" />
              </div>

              <h2 className="path-heading">Independent Herbalife Distributor</h2>

              <p className="path-text">Start your Herbalife business with support.</p>

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
              We help people achieve health, energy, and lifestyle goals with
              Herbalife.
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
          <p>© 2025 Leffler International Investments Pty Ltd.</p>
        </footer>
      </div>
    </>
  );
}
