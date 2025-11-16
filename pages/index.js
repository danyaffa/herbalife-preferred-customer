import { useState } from "react";
import Head from "next/head";

export default function HomePage() {
  const [userType, setUserType] = useState(null); // "preferred" | "distributor"
  const [showForm, setShowForm] = useState(false);
  const [showSponsor, setShowSponsor] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const handleChoose = (type) => {
    setUserType(type);
    setShowForm(true);
    setShowSponsor(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setShowSponsor(true);
  };

  const toggleContact = () => setShowContact((v) => !v);

  return (
    <>
      <Head>
        <title>Herbalife Preferred Customer & Member – Jaffa & Dan Leffler</title>
        <meta
          name="description"
          content="Become a Herbalife Preferred Customer or Independent Distributor with Jaffa & Dan Leffler. Enjoy product discounts, guidance, and ongoing support."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className="header">
        <img
          src="/images/logo.png"
          alt="Herbalife Logo"
          className="header-logo"
        />
      </header>

      <main>
        <h1>Choose Your Path</h1>
        <p className="subtext">
          Become a Herbalife Preferred Customer or an Independent Distributor
        </p>

        {/* Cards */}
        <section className="cards">
          <article className="card">
            <img src="/images/couple.jpg" alt="Preferred customer" />
            <h2>Preferred Customer</h2>
            <p>
              Enjoy simple discounts on Herbalife products, wellness support,
              and health ideas. No selling, no pressure – just a smarter way to
              look after your health.
            </p>
            <button
              type="button"
              className="button"
              onClick={() => handleChoose("preferred")}
            >
              I want to be a Preferred Customer
            </button>
          </article>

          <article className="card">
            <img src="/images/woman.jpg" alt="Independent distributor" />
            <h2>Independent Distributor</h2>
            <p>
              Build your own Herbalife business with mentoring and guidance.
              Help others with their wellness goals while earning income and
              enjoying product benefits.
            </p>
            <button
              type="button"
              className="button-secondary"
              onClick={() => handleChoose("distributor")}
            >
              I want to be an Independent Distributor
            </button>
          </article>
        </section>

        {/* Simple “registration helper” form */}
        <section
          className={`form-section ${showForm ? "visible" : ""}`}
          aria-hidden={!showForm}
        >
          <h2>Registration Helper</h2>
          <p className="helper">
            Step 1 – Tell us how you&apos;d like to register.  
            Step 2 – Copy our sponsor details.  
            Step 3 – Click the correct Herbalife registration link.
          </p>

          <form onSubmit={handleFormSubmit}>
            <div className="form-row">
              <label htmlFor="fullName">Your full name</label>
              <input
                id="fullName"
                className="form-input"
                required
                placeholder="Enter your full name"
              />
            </div>

            <div className="form-row">
              <label htmlFor="email">Your email</label>
              <input
                id="email"
                type="email"
                className="form-input"
                required
                placeholder="Enter your email"
              />
            </div>

            <div className="form-row">
              <label htmlFor="path">I want to register as</label>
              <select
                id="path"
                className="form-select"
                value={userType || ""}
                onChange={(e) => setUserType(e.target.value || null)}
                required
              >
                <option value="">Select an option</option>
                <option value="preferred">Preferred Customer</option>
                <option value="distributor">Independent Distributor</option>
              </select>
            </div>

            <p className="helper">
              Whatever you choose – membership or discount customer – you
              receive **25% discount** on Herbalife products.  
              We are happy with whichever option suits you best.
            </p>

            <button type="submit" className="button">
              Show me the Sponsor Details
            </button>
          </form>
        </section>

        {/* Sponsor details */}
        <section
          className={`sponsor-info ${showSponsor ? "visible" : ""}`}
          aria-hidden={!showSponsor}
        >
          <h2>Copy My Details</h2>
          <p>
            Please copy these details exactly as shown – you will need them when
            you complete the Herbalife registration form.
          </p>

          <div className="sponsor-grid">
            <strong>Sponsor Name:</strong>
            <span>Jaffa Leffler</span>

            <strong>Herbalife ID:</strong>
            <span>05458162C</span>

            <strong>First 3 letters of surname:</strong>
            <span>LEF</span>

            <strong>
              Purchased your Herbalife Member Pack (HMP) from your sponsor:
            </strong>
            <span>NO</span>
          </div>

          <p className="helper" style={{ marginTop: "0.75rem" }}>
            Registration link (use for both Preferred Customers and Members):
          </p>
          <a
            className="button-secondary"
            href="https://accounts.myherbalife.com/Account/Create?appId=1&locale=en-US&redirect=https://www.myherbalife.com/en-US/"
            target="_blank"
            rel="noreferrer"
          >
            Go to Herbalife Registration Form
          </a>
        </section>

        {/* Instructions box */}
        <section className="instructions">
          <h3>How it works</h3>
          <ol>
            <li>
              Choose whether you prefer to start as a <strong>Preferred
              Customer</strong> or an <strong>Independent Distributor</strong>.
            </li>
            <li>Copy our sponsor details exactly as written above.</li>
            <li>
              Click the registration button and complete your details on the
              official Herbalife website.
            </li>
            <li>
              Once finished, email us your confirmation so we can welcome you
              properly and send helpful getting-started tips.
            </li>
          </ol>
        </section>

        {/* Shake recipes */}
        <section className="shake-recipes">
          <h3>Want Healthy Ideas?</h3>
          <p>Download our free Herbalife shake recipes brochure.</p>
          <a
            href="/ShakeRecipeBrochure.pdf"
            className="shake-button"
            download
          >
            Free Shake Recipes
          </a>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Leffler International Investments Pty Ltd</p>
        <button type="button" className="button contact-toggle" onClick={toggleContact}>
          Contact Us
        </button>

        <div className={`contact-form ${showContact ? "visible" : ""}`}>
          <form action="mailto:leffleryd@gmail.com" method="POST">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows={4}
            />
            <button type="submit" className="button">
              Send
            </button>
          </form>
        </div>
      </footer>
    </>
  );
}
