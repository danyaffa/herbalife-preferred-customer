import Head from "next/head";

export default function HomePage() {
  const herbalifeRegistrationUrl =
    "https://accounts.myherbalife.com/Account/Create?appId=1&locale=en-US&redirect=https://www.myherbalife.com/en-US/";

  return (
    <>
      <Head>
        <title>Herbalife Preferred Customer & Independent Member – Jaffa & Dan</title>
        <meta
          name="description"
          content="Choose your path with Herbalife – become a Preferred Customer or Independent Distributor with Jaffa & Dan Leffler. Enjoy savings, wellness support, and business opportunities."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="page">
        {/* Top header & nav */}
        <header className="site-header">
          <div className="header-logo-block">
            <span className="header-logo-text-main">Herbalife</span>
            <span className="header-logo-text-sub">Independent Member</span>
          </div>

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

        <main id="top">
          {/* Center logo + hero text */}
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

          {/* Preferred Customer */}
          <section className="section path-section">
            <div className="path-block">
              <div className="path-image-wrapper">
                <img
                  src="/images/couple.jpg"
                  alt="Preferred customer enjoying Herbalife"
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

          {/* Independent Distributor */}
          <section className="section path-section">
            <div className="path-block">
              <div className="path-image-wrapper">
                <img
                  src="/images/woman.jpg"
                  alt="Independent Herbalife Distributor"
                  className="path-image"
                />
              </div>

              <h2 className="path-heading">Independent Herbalife Distributor</h2>
              <p className="path-text">
                Start your Herbalife business with support and training. Help
                others with their wellness goals while building flexible income
                and a community of like-minded people.
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

          {/* How it works */}
          <section className="section">
            <div className="how-it-works">
              <h3>How it works</h3>
              <ol>
                <li>
                  Choose whether you prefer to start as a{" "}
                  <strong>Preferred Customer</strong> or an{" "}
                  <strong>Independent Distributor</strong>.
                </li>
                <li>
                  Click on the <strong>Sign Up</strong> button above – this will
                  take you to the official Herbalife registration page.
                </li>
                <li>
                  Complete the form with your personal details. When you&apos;re
                  asked for sponsor information, enter:
                  <br />
                  Sponsor Name: <strong>Jaffa Leffler</strong>, Herbalife ID:{" "}
                  <strong>05458162C</strong>, First 3 letters of surname:{" "}
                  <strong>LEF</strong>, and answer{" "}
                  <strong>NO</strong> to &quot;Purchased your Herbalife Member Pack
                  (HMP) from your sponsor&quot;.
                </li>
                <li>
                  After you register, email us your confirmation so we can welcome
                  you and send you helpful getting-started tips.
                </li>
              </ol>
            </div>
          </section>

          {/* Who we are */}
          <section className="section who-section" id="who-we-are">
            <h2 className="who-title">Who we are</h2>
            <p className="who-text">
              We&apos;re a passionate community of wellness-minded individuals
              committed to helping others achieve their health, energy, and
              lifestyle goals. With years of personal experience and a supportive
              network, we guide you step-by-step to enjoy better nutrition,
              exclusive product savings, and a path to long-term well-being.
              Whether you&apos;re starting your journey or ready to share it with
              others, we&apos;re here to support your success.
            </p>
            <span className="who-badge">
              Herbalife is proud to be #1 in four major health and wellness
              categories
            </span>
          </section>

          {/* Shake recipes section (small) */}
          <section className="section" style={{ marginTop: "3rem" }}>
            <p>Want Healthy Ideas?</p>
            <p>Download our free Herbalife shake recipes brochure.</p>
            <a href="/ShakeRecipeBrochure.pdf" className="shake-button" download>
              Free Shake Recipes
            </a>
          </section>
        </main>

        <footer id="footer">
          <p>© 2025 Leffler International Investments Pty Ltd. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
