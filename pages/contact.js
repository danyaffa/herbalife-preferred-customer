// /pages/contact.js
import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function ContactPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [showPopup, setShowPopup] = useState(false);
  const [sending, setSending] = useState(false);
  const [registrationType, setRegistrationType] = useState("");

  const preferredRegistrationUrl =
    "https://accounts.myherbalife.com/Account/Create?appId=1&qrFlow=1&locale=en-US&SponsorId=sx4pw1BxvAWOTs1Yu1fm1A==&cmp=m_it_it_wbs_dssignup_btn_nap_copylink_20250305";
  const memberRegistrationUrl =
    "https://accounts.myherbalife.com/Account/Create?appId=1&locale=en-AU&redirect=https://www.myherbalife.com/en-AU/";

  const siteUrl = "https://www.nutripreferred.com";
  const pageUrl = `${siteUrl}/contact`;
  const pageTitle = "Contact Us | NutriPreferred – Herbalife with Jaffa & Dan";
  const pageDescription =
    "Get in touch with Jaffa & Dan Leffler. Whether you want to become a Herbalife Preferred Customer, an Independent Distributor, or simply learn more about our wellness products, we are here to help.";
  const ogImage = `${siteUrl}/images/logo.png`;

  useEffect(() => {
    const type = router.query.type;
    if (type === "preferred" || type === "member") {
      setRegistrationType(type);
    }
  }, [router.query.type]);

  const getRegistrationUrl = () => {
    return registrationType === "member"
      ? memberRegistrationUrl
      : preferredRegistrationUrl;
  };

  const getTypeLabel = () => {
    return registrationType === "member"
      ? "Independent Herbalife Member"
      : "Preferred Customer";
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    // Compose email via mailto
    const subject = registrationType === "member"
      ? "New Member Registration Enquiry – NutriPreferred"
      : "New Preferred Customer Enquiry – NutriPreferred";
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nType: ${getTypeLabel()}\n\nMessage:\n${formData.message}`;
    const mailtoUrl = `mailto:leffleryd@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open email client
    window.open(mailtoUrl, "_blank");

    // Show sponsor details popup after a short delay
    setTimeout(() => {
      setSending(false);
      setShowPopup(true);
    }, 800);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content="contact Herbalife distributor, Herbalife enquiry, Herbalife preferred customer contact, Herbalife sign up help, NutriPreferred contact, Jaffa Leffler Herbalife, wellness enquiry"
        />
        <link rel="canonical" href={pageUrl} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:site_name" content="NutriPreferred – Herbalife with Jaffa & Dan" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />

        {/* SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Jaffa & Dan Leffler" />

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
              href="https://www.youtube.com/playlist?list=PLB3ZV-mBfQYyXcNczTG7oc9fffG9P97_P"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blog
            </a>
            <a href="/preferred-member-benefits">Benefits</a>
            <a href="/#who-we-are">About</a>
            <a href="/contact">Contact</a>
          </nav>
        </header>

        <main>
          {/* HERO */}
          <section className="contact-hero">
            <h1 className="contact-hero-title">Contact Us</h1>
            <p className="contact-hero-subtitle">
              {registrationType
                ? `You're one step away from becoming a ${getTypeLabel()}!`
                : "We're here to help you get started on your wellness journey."}
            </p>
          </section>

          {/* WHY REACH OUT */}
          <section className="contact-reasons">
            <h2>Why Reach Out? What to Expect?</h2>
            <p>We&apos;re here to help you get started on your wellness journey with the right support and savings.</p>
            <div className="reasons-grid">
              <div className="reason-item">
                <strong>Interested in becoming a Preferred Customer</strong>
                <span>Save up to 25% on Herbalife products</span>
              </div>
              <div className="reason-item">
                <strong>Curious about nutrition products</strong>
                <span>Get personalised product recommendations</span>
              </div>
              <div className="reason-item">
                <strong>Looking for a business opportunity</strong>
                <span>Flexible home-based wellness business</span>
              </div>
            </div>
            <p className="expect-text">
              Expect a personal reply within 24 hours, step-by-step registration instructions,
              and access to exclusive offers and wellness tips.
            </p>
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

          {/* CONTACT FORM */}
          <section className="contact-form-section">
            <form className="contact-form" onSubmit={handleSubmit}>
              {registrationType && (
                <div className="form-type-badge">
                  Registering as: <strong>{getTypeLabel()}</strong>
                </div>
              )}

              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  autoComplete="name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  autoComplete="email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder={
                    registrationType === "preferred"
                      ? "I'd like to become a Preferred Customer and enjoy 25% discounts..."
                      : registrationType === "member"
                      ? "I'm interested in becoming an Independent Herbalife Member..."
                      : "Tell us about your wellness goals or questions..."
                  }
                  rows="5"
                />
              </div>

              <button type="submit" className="contact-submit-btn" disabled={sending}>
                {sending ? "Sending..." : "SEND"}
              </button>
            </form>
          </section>
        </main>

        {/* SPONSOR DETAILS POPUP — only appears after form submission */}
        {showPopup && (
          <div className="popup-overlay" onClick={closePopup}>
            <div className="popup-card" onClick={(e) => e.stopPropagation()}>
              <button className="popup-close" onClick={closePopup} aria-label="Close">
                &times;
              </button>

              <h2 className="popup-title">Thank You!</h2>
              <p className="popup-subtitle">
                Your message has been sent. You will need the following information
                to complete your {getTypeLabel()} registration:
              </p>

              <div className="popup-sponsor-details">
                <h3>Copy My Details</h3>
                <ul className="sponsor-list">
                  <li>
                    <strong>Sponsor Name:</strong> Jaffa Leffler
                  </li>
                  <li>
                    <strong>Sponsor ID:</strong> 05458162C
                  </li>
                  <li>
                    <strong>Last Name (3 letters):</strong> LEF
                  </li>
                  <li>
                    <strong>Purchased Herbalife Member Pack from Sponsor?</strong> NO
                  </li>
                </ul>
              </div>

              <div className="popup-buttons">
                <button
                  type="button"
                  className="popup-download-btn"
                  onClick={() => {
                    const text =
                      "Sponsor Details for Herbalife Registration\n" +
                      "==========================================\n\n" +
                      "Sponsor Name: Jaffa Leffler\n" +
                      "Sponsor ID: 05458162C\n" +
                      "Last Name (3 letters): LEF\n" +
                      "Purchased Herbalife Member Pack from Sponsor? NO\n";
                    const blob = new Blob([text], { type: "text/plain" });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement("a");
                    a.href = url;
                    a.download = "sponsor-details.txt";
                    a.click();
                    URL.revokeObjectURL(url);
                  }}
                >
                  Download These Details
                </button>

                <a
                  href={getRegistrationUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="popup-signup-btn"
                >
                  Sign Up Now
                </a>
              </div>
            </div>
          </div>
        )}

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
