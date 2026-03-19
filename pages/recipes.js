// /pages/recipes.js
import Head from "next/head";
import { useState } from "react";

const recipes = [
  {
    id: 1,
    name: "Chocolate Protein Cookies",
    category: "Snack",
    image: "https://www.herbalife.com/dmassets/regional-reusable-assets/apac/images/ri-chocolate-protein-cookies-apac.jpg",
    description: "A protein-rich cookie recipe featuring Formula 1 Dutch Chocolate, designed as a nutritious snack.",
    prepTime: "12 min",
    totalTime: "25 min",
    servings: "5",
    calories: 76,
    protein: 12,
    ingredients: [
      "56g Formula 1 Dutch Chocolate",
      "1 cup smooth peanut butter",
      "1/2 cup coconut palm sugar",
      "2 tablespoons unsweetened cocoa powder",
      "2 large eggs",
      "Optional: 1/3 cup mini dark chocolate chips"
    ],
    steps: [
      "Preheat oven to 180°C and coat baking sheet with coconut oil spray.",
      "Combine all ingredients in a bowl until mixture resembles cookie dough.",
      "Form 2-tablespoon portions into balls, flatten between palms into cookie shapes, and place on baking sheet.",
      "Bake at 180°C for 10–12 minutes.",
      "Cool for 15 minutes to set."
    ]
  },
  {
    id: 2,
    name: "Cristiano Ronaldo's Signature Shake",
    category: "Shake",
    image: "https://www.herbalife.com/dmassets/regional-reusable-assets/apac/images/li-cristiano-ronaldos-signature-shake-apac.jpg",
    description: "A protein-rich shake designed for performance and fitness, featuring Herbalife24 Formula 1 Sport combined with fresh fruit.",
    prepTime: "2 min",
    totalTime: "2 min",
    servings: "1",
    calories: 328,
    protein: 22.9,
    ingredients: [
      "2 scoops Herbalife24 Formula 1 Sport",
      "320ml skim milk",
      "1 banana",
      "1/2 cup strawberries",
      "3–5 ice cubes"
    ],
    steps: [
      "Place all ingredients into a blender.",
      "Blend until smooth and combined.",
      "Pour into a glass and enjoy."
    ]
  },
  {
    id: 3,
    name: "Cake Batter Shake",
    category: "Shake",
    image: "https://www.herbalife.com/dmassets/regional-reusable-assets/apac/images/ri-cake-batter-shake-apac.jpg",
    description: "A creamy shake combining two vanilla-based shake mixes with ricotta cheese and extract flavorings for a dessert-inspired beverage.",
    prepTime: "5 min",
    totalTime: "5 min",
    servings: "1",
    calories: 251,
    protein: 22,
    ingredients: [
      "14g Formula 1 Nutritional Shake Mix, Cookies 'n Cream",
      "14g Formula 1 Nutritional Shake Mix, French Vanilla",
      "3 Tbsp ricotta cheese",
      "1/8 tsp almond extract",
      "1/8 tsp vanilla extract",
      "1 cup cold water",
      "3–5 ice cubes"
    ],
    steps: [
      "Combine all ingredients in a blender.",
      "Mix well until smooth.",
      "Pour into a glass and serve."
    ]
  },
  {
    id: 4,
    name: "Berry Blast Shake",
    category: "Shake",
    image: "https://www.herbalife.com/dmassets/global-reusable-assets/images/recipes/ri_goji_strawberry_protein_shake_1319770212.jpg",
    description: "Fruity and refreshing, this shake provides the nutrients your body needs with sweet and flavorful goji berries.",
    prepTime: "2 min",
    totalTime: "2 min",
    servings: "1",
    calories: 218,
    protein: 26,
    ingredients: [
      "2 scoops Formula 1 Nutritional Shake Mix, French Vanilla",
      "1 scoop Personalised Protein Powder",
      "3 capfuls Herbal Aloe Concentrate",
      "250ml water",
      "90g strawberries",
      "100g plain nonfat Greek yogurt",
      "7g (1 tablespoon) goji berries",
      "3–5 ice cubes"
    ],
    steps: [
      "Place the liquid in a blender, then add the remaining ingredients.",
      "Blend for 30 seconds.",
      "Pour into a glass.",
      "Top with more goji berries and enjoy."
    ]
  },
  {
    id: 5,
    name: "Vanilla Blueberry Protein Shake",
    category: "Shake",
    image: "https://www.herbalife.com/dmassets/global-reusable-assets/images/recipes/ri_blueberry_protein_shake_299995920.jpeg",
    description: "Start off the day with this delicious protein shake made with fresh blueberries. It's simple and easy to make.",
    prepTime: "2 min",
    totalTime: "10 min",
    servings: "1",
    calories: 200,
    protein: 20,
    ingredients: [
      "28g Formula 1 Nutritional Shake Mix, French Vanilla",
      "2 serves of Personalised Protein Powder",
      "230ml water",
      "3/4 cup blueberries",
      "3–5 ice cubes"
    ],
    steps: [
      "Place liquid in blender first, then add remaining ingredients.",
      "Blend for 30 seconds.",
      "Pour into a glass and enjoy."
    ]
  },
  {
    id: 6,
    name: "Apple Caramel Protein Shake",
    category: "Shake",
    image: "https://www.herbalife.com/dmassets/global-reusable-assets/images/recipes/ri_apple_protein_shake_1020383172.jpg",
    description: "This protein-packed caramel apple-flavored shake provides fiber and the nutrients your body needs.",
    prepTime: "2 min",
    totalTime: "2 min",
    servings: "1",
    calories: 190,
    protein: 19,
    ingredients: [
      "2 scoops Formula 1 Nutritional Shake Mix, French Vanilla",
      "2 scoops Formula 3 Personalised Protein Powder",
      "1 scoop Active Fiber Complex, Apple",
      "1/2 red apple, diced",
      "250ml water",
      "3–5 ice cubes (optional)"
    ],
    steps: [
      "Place the liquid in a blender, then add the remaining ingredients.",
      "Blend for 30 seconds.",
      "Pour into a glass and enjoy."
    ]
  },
  {
    id: 7,
    name: "Mocha Energy Boost Protein Shake",
    category: "Shake",
    image: "https://www.herbalife.com/dmassets/regional-reusable-assets/en-au/apac/images/ri-mocha-protein-shake.jpg",
    description: "Looking for a little boost to get through your day? This mocha flavoured shake delivers the extra energy you need!",
    prepTime: "2 min",
    totalTime: "2 min",
    servings: "1",
    calories: 220,
    protein: 22,
    ingredients: [
      "2 scoops Formula 1 Nutritional Shake Mix, Dutch Chocolate",
      "1 scoop Personalised Protein Powder",
      "250ml soy milk",
      "2g coffee powder",
      "3–5 ice cubes"
    ],
    steps: [
      "Place the liquid in a blender, then add the remaining ingredients.",
      "Blend for 30 seconds.",
      "Pour into a glass and enjoy."
    ]
  },
  {
    id: 8,
    name: "Matcha and Red Bean Shake",
    category: "Shake",
    image: "https://www.herbalife.com/dmassets/global-reusable-assets/images/recipes/ri_matcha_red_bean_protein_shake_534746442.jpg",
    description: "Focus on your goals while enjoying classic Japanese flavours. Sweet red beans and savory matcha blend together in this protein shake to create a nutritious treat.",
    prepTime: "2 min",
    totalTime: "2 min",
    servings: "1",
    calories: 265,
    protein: 23,
    ingredients: [
      "2 scoops Formula 1 Nutritional Shake Mix, French Vanilla",
      "1 scoop Personalised Protein Powder",
      "250ml soy milk",
      "1 tablespoon Japanese red bean paste",
      "1 tablespoon matcha powder",
      "3–5 ice cubes"
    ],
    steps: [
      "Place the liquid in a blender, then add the remaining ingredients.",
      "Blend for 30 seconds.",
      "Pour into a glass and enjoy."
    ]
  },
  {
    id: 9,
    name: "Passion Fruit Protein Shake",
    category: "Shake",
    image: "https://www.herbalife.com/dmassets/global-reusable-assets/images/recipes/ri_mango_passion_fruit_protein_shake_207636034.jpeg",
    description: "Discover a passion for this protein-packed shake full of fiber, aloe and passion fruit.",
    prepTime: "2 min",
    totalTime: "2 min",
    servings: "1",
    calories: 250,
    protein: 27.6,
    ingredients: [
      "2 scoops Formula 1 Nutritional Shake Mix, Berry",
      "1 scoop Personalised Protein Powder",
      "3 capfuls Herbal Aloe Concentrated Aloe Vera",
      "2 passion fruits",
      "100g plain nonfat Greek yogurt",
      "250ml water",
      "3–5 ice cubes"
    ],
    steps: [
      "Place the liquid in a blender, then add the remaining ingredients.",
      "Blend for 30 seconds.",
      "Pour into a glass and enjoy."
    ]
  },
  {
    id: 10,
    name: "Pineapple Shake",
    category: "Shake",
    image: "https://www.herbalife.com/dmassets/global-reusable-assets/images/recipes/ri_pineapple_protein_shake_144386859.jpeg",
    description: "Support your digestion with a taste of the tropics in this refreshing pineapple shake.",
    prepTime: "2 min",
    totalTime: "2 min",
    servings: "1",
    calories: 254,
    protein: 26,
    ingredients: [
      "2 scoops Formula 1 Nutritional Shake Mix",
      "1 scoop Formula 3 Personalised Protein Powder",
      "3 capfuls Herbal Aloe Concentrated Aloe Vera",
      "250ml water",
      "140g pineapple",
      "100g plain nonfat Greek yogurt",
      "3–5 ice cubes",
      "30ml nata de coco (topping)"
    ],
    steps: [
      "Place the liquid in a blender, then add the remaining ingredients.",
      "Blend for 30 seconds.",
      "Pour into a glass.",
      "Top shake with nata de coco, serve and enjoy."
    ]
  },
  {
    id: 11,
    name: "Tropical Twist Shake",
    category: "Shake",
    image: "https://www.herbalife.com/dmassets/global-reusable-assets/images/recipes/ri_papaya_protein_shake_589393054.jpeg",
    description: "Ripe, creamy and refreshing. This pleasing papaya shake tastes like summer but supports digestion any time of year.",
    prepTime: "2 min",
    totalTime: "2 min",
    servings: "1",
    calories: 348,
    protein: 21,
    ingredients: [
      "2 scoops Formula 1 Nutritional Shake Mix, Tropical Fruit",
      "3 capfuls Herbal Aloe Concentrated Aloe Vera",
      "1 scoop Active Fiber Complex",
      "250ml low-fat milk",
      "225g papaya cubes",
      "15g (1 tablespoon) chia seeds",
      "3–5 ice cubes"
    ],
    steps: [
      "Place the liquid in a blender, then add the remaining ingredients.",
      "Blend for 30 seconds.",
      "Pour into a glass and enjoy."
    ]
  },
  {
    id: 12,
    name: "Green Apple Shake",
    category: "Shake",
    image: "https://www.herbalife.com/dmassets/global-reusable-assets/images/recipes/ri_green_apple_protein_shake_1246359919.jpg",
    description: "Sweet, sour and bursting with the tang of green apples, this shake provides essential nutrients and probiotics.",
    prepTime: "2 min",
    totalTime: "2 min",
    servings: "1",
    calories: 276,
    protein: 26,
    ingredients: [
      "2 scoops Formula 1 Nutritional Shake Mix, French Vanilla",
      "1 scoop Personalised Protein Powder",
      "3 capfuls Herbal Aloe Concentrated Aloe Vera",
      "250ml water",
      "156g green apple",
      "100g plain nonfat Greek yogurt",
      "3–5 ice cubes"
    ],
    steps: [
      "Place the liquid in a blender, then add the remaining ingredients.",
      "Blend for 30 seconds.",
      "Pour into a glass and enjoy."
    ]
  },
  {
    id: 13,
    name: "Glowing Skin Collagen Shake",
    category: "Shake",
    image: "https://www.herbalife.com/dmassets/global-reusable-assets/images/recipes/ri_collagen_probiotic_shake_65407879.jpeg",
    description: "A refreshing shake featuring Herbal Aloe Concentrate and Greek yogurt packed with probiotics for glowing skin.",
    prepTime: "2 min",
    totalTime: "2 min",
    servings: "1",
    calories: 188,
    protein: 15,
    ingredients: [
      "2 scoops Formula 1 Shake Mix, Vanilla",
      "3 capfuls Herbal Aloe Concentrate",
      "118ml orange juice",
      "118ml water",
      "3–5 ice cubes",
      "2 tablespoons plain nonfat Greek yogurt"
    ],
    steps: [
      "Add liquids to blender, then remaining ingredients except yogurt.",
      "Blend for 30 seconds.",
      "In a glass, swirl 1–2 tablespoons Greek yogurt along bottom edges.",
      "Pour blended mixture into glass.",
      "Top with extra yogurt as desired; garnish with orange zest and serve."
    ]
  },
  {
    id: 14,
    name: "Mango Tango Shake",
    category: "Shake",
    image: "https://www.herbalife.com/dmassets/global-reusable-assets/images/recipes/ri_mango_protein_shake_228254188.jpeg",
    description: "This Mango Tango Shake brings the summer to your home, even during winter. The irresistible flavour of fresh mango with French Vanilla will surely satisfy you.",
    prepTime: "2 min",
    totalTime: "2 min",
    servings: "1",
    calories: 252,
    protein: 19.5,
    ingredients: [
      "28g Formula 1 Nutritional Shake Mix, French Vanilla",
      "3 capfuls Herbal Aloe Concentrate, Mango",
      "1 cup non-fat milk",
      "1/2 cup mango chunks (fresh or frozen)",
      "3–5 ice cubes"
    ],
    steps: [
      "Place the liquid in a blender, then add the remaining ingredients.",
      "Blend for 30 seconds.",
      "Pour into a glass and enjoy."
    ]
  },
  {
    id: 15,
    name: "Creamy Mushroom Protein Soup",
    category: "Soup",
    image: "https://www.herbalife.com/dmassets/global-reusable-assets/images/recipes/ri_mushroom_protein_soup_1321354621.jpg",
    description: "Earthy with a hint of vanilla, this soup provides a delicious meal full of the nutrients you need to focus on your health goals.",
    prepTime: "5 min",
    totalTime: "10 min",
    servings: "1",
    calories: 267,
    protein: 23.1,
    ingredients: [
      "2 scoops Formula 1 Nutritional Shake Mix, Vanilla",
      "250ml low-fat milk",
      "200ml clear chicken broth",
      "190g shiitake mushrooms (approx. 10 stalks)",
      "Black pepper, cayenne pepper, oregano leaves (to taste)"
    ],
    steps: [
      "Blend the Formula 1 shake mix with low-fat milk and set aside.",
      "Add shiitake mushrooms and chicken broth to a pot and bring to boil.",
      "Combine both mixtures together by blending.",
      "Season with peppers or oregano to preference, then serve."
    ]
  },
  {
    id: 16,
    name: "Cherry Cheesecake Shake",
    category: "Shake",
    image: "https://www.herbalife.com/dmassets/global-reusable-assets/images/recipes/ri_cherry_protein_shake_1020383172.jpeg",
    description: "Delight your tastebuds with this luscious, creamy shake that tastes like a delectable dessert.",
    prepTime: "2 min",
    totalTime: "2 min",
    servings: "1",
    calories: 310,
    protein: 26,
    ingredients: [
      "2 scoops Formula 1 Nutritional Shake Mix, French Vanilla",
      "250ml low-fat milk",
      "75g fresh or frozen cherries",
      "80g non-fat ricotta cheese",
      "3–5 ice cubes (optional)"
    ],
    steps: [
      "Place the liquid in a blender, then add the remaining ingredients.",
      "Blend for 30 seconds.",
      "Pour into a glass and enjoy."
    ]
  },
  {
    id: 17,
    name: "Mango Yogurt Shake",
    category: "Shake",
    image: "https://www.herbalife.com/dmassets/global-reusable-assets/images/recipes/ri_mango_yogurt_protein_shake_1272536174.jpg",
    description: "Put a tropical twist on your next shake with this delicious recipe. It's creamy, cool and bursting with flavor.",
    prepTime: "2 min",
    totalTime: "2 min",
    servings: "1",
    calories: 297,
    protein: 25.2,
    ingredients: [
      "2 scoops Formula 1 Nutritional Shake Mix, French Vanilla",
      "1 scoop Personalised Protein Powder",
      "3 capfuls Herbal Aloe Concentrated Aloe Vera",
      "100g plain nonfat Greek yogurt",
      "250ml water",
      "230g mango chunks",
      "40g pomelo pulps (topping)",
      "3–5 ice cubes"
    ],
    steps: [
      "Place the liquid in a blender, then add the remaining ingredients.",
      "Blend for 30 seconds.",
      "Pour into a glass and enjoy."
    ]
  }
];

export default function RecipesPage() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [filter, setFilter] = useState("All");

  const siteUrl = "https://www.no1proteinforglp1.com";
  const pageUrl = `${siteUrl}/recipes`;
  const pageTitle = "Herbalife Shake & Snack Recipes | NutriPreferred";
  const pageDescription =
    "Delicious protein shake recipes, snack ideas and soup recipes using Herbalife products. Easy to make, nutritious, and packed with protein to support your wellness goals.";
  const ogImage = `${siteUrl}/images/logo.png`;

  const categories = ["All", ...new Set(recipes.map(r => r.category))];
  const filtered = filter === "All" ? recipes : recipes.filter(r => r.category === filter);

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content="Herbalife recipes, Herbalife shake recipes, protein shake recipes, Herbalife snack recipes, healthy shake recipes, Formula 1 shake recipes, Herbalife protein cookies, Herbalife soup recipes, wellness recipes"
        />
        <link rel="canonical" href={pageUrl} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:type" content="article" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="NutriPreferred – Herbalife with Jaffa & Dan" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={ogImage} />

        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta name="author" content="Jaffa & Dan Leffler" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              name: pageTitle,
              description: pageDescription,
              url: pageUrl,
              publisher: {
                "@type": "Organization",
                name: "NutriPreferred",
                logo: { "@type": "ImageObject", url: ogImage }
              }
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
              href="https://www.loseweighttoday.com.au/blog"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blog
            </a>
            <a href="/preferred-member-benefits">Benefits</a>
            <a href="/recipes">Recipes</a>
            <a href="/#who-we-are">About</a>
            <a href="/contact">Contact</a>
          </nav>
        </header>

        <main>
          {/* HERO */}
          <section className="recipes-hero">
            <h1 className="recipes-hero-title">Delicious &amp; Nutritious Recipes</h1>
            <p className="recipes-hero-subtitle">
              Simple, protein-packed recipes to fuel your wellness journey — from refreshing shakes to satisfying snacks.
            </p>
          </section>

          {/* FILTER TABS */}
          <section className="recipes-filters">
            {categories.map(cat => (
              <button
                key={cat}
                className={`recipes-filter-btn${filter === cat ? " active" : ""}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </section>

          {/* RECIPE GRID */}
          <section className="recipes-grid" aria-label="Recipe collection">
            {filtered.map(recipe => (
              <article
                key={recipe.id}
                className="recipe-card"
                onClick={() => setSelectedRecipe(recipe)}
                tabIndex={0}
                onKeyDown={e => e.key === "Enter" && setSelectedRecipe(recipe)}
                role="button"
                aria-label={`View ${recipe.name} recipe`}
              >
                <div className="recipe-card-image-wrap">
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="recipe-card-image"
                    loading="lazy"
                  />
                  <span className="recipe-card-category">{recipe.category}</span>
                </div>
                <div className="recipe-card-body">
                  <h2 className="recipe-card-title">{recipe.name}</h2>
                  <p className="recipe-card-desc">{recipe.description}</p>
                  <div className="recipe-card-meta">
                    <span className="recipe-meta-item">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                      {recipe.totalTime}
                    </span>
                    <span className="recipe-meta-item">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
                      {recipe.servings} serving{recipe.servings !== "1" ? "s" : ""}
                    </span>
                    <span className="recipe-meta-item recipe-meta-protein">
                      {recipe.protein}g protein
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </section>

          {/* CTA */}
          <section className="recipes-cta-section">
            <h2>Want Personalised Recipe Recommendations?</h2>
            <p>
              As a Preferred Member, you get access to personalised nutrition advice and recipes tailored to your health goals.
            </p>
            <a
              href="/contact?type=preferred"
              className="button"
              aria-label="Contact us for personalised recipe recommendations"
            >
              Get in Touch
            </a>
          </section>
        </main>

        {/* FOOTER */}
        <footer className="site-footer" id="footer" aria-label="Contact and legal">
          <div className="footer-inner">
            <div className="footer-col footer-brand">
              <img src="/images/logo.png" alt="NutriPreferred" width="140" height="70" />
              <p>Independent Herbalife Nutrition Distributors since 1993.</p>
              <address className="footer-brand-address">
                23 Salisbury St, Caulfield North<br />
                Melbourne, VIC 3161
              </address>
            </div>

            <div className="footer-col">
              <h3>Contact</h3>
              <ul>
                <li><a href="/contact">Contact Us</a></li>
                <li><a href="mailto:leffleryd@gmail.com">leffleryd@gmail.com</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="/preferred-member-benefits">Benefits</a></li>
                <li><a href="/recipes">Recipes</a></li>
                <li><a href="https://www.loseweighttoday.com.au/blog" target="_blank" rel="noopener noreferrer">Blog</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h3>Social</h3>
              <ul>
                <li><a href="https://www.facebook.com/loseweighttodayau" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                <li>Telegram — @YaffaDan</li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>We have been serving our customers since 1993 — Senior Executive Presidents 15K</p>
            <p>&copy; {new Date().getFullYear()} Leffler International Investments Pty Ltd — Jaffa &amp; Dan Leffler — Independent Herbalife Nutrition Distributors</p>
          </div>
        </footer>
      </div>

      {/* RECIPE DETAIL MODAL */}
      {selectedRecipe && (
        <div
          className="recipe-modal-overlay"
          onClick={() => setSelectedRecipe(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedRecipe.name} recipe details`}
        >
          <div className="recipe-modal" onClick={e => e.stopPropagation()}>
            <button
              className="recipe-modal-close"
              onClick={() => setSelectedRecipe(null)}
              aria-label="Close recipe"
            >
              &times;
            </button>

            <div className="recipe-modal-header">
              <img
                src={selectedRecipe.image}
                alt={selectedRecipe.name}
                className="recipe-modal-image"
              />
              <div className="recipe-modal-header-info">
                <span className="recipe-card-category">{selectedRecipe.category}</span>
                <h2 className="recipe-modal-title">{selectedRecipe.name}</h2>
                <p className="recipe-modal-desc">{selectedRecipe.description}</p>
                <div className="recipe-modal-stats">
                  <div className="recipe-stat">
                    <span className="recipe-stat-value">{selectedRecipe.calories}</span>
                    <span className="recipe-stat-label">kcal</span>
                  </div>
                  <div className="recipe-stat">
                    <span className="recipe-stat-value">{selectedRecipe.protein}g</span>
                    <span className="recipe-stat-label">protein</span>
                  </div>
                  <div className="recipe-stat">
                    <span className="recipe-stat-value">{selectedRecipe.prepTime}</span>
                    <span className="recipe-stat-label">prep</span>
                  </div>
                  <div className="recipe-stat">
                    <span className="recipe-stat-value">{selectedRecipe.servings}</span>
                    <span className="recipe-stat-label">serving{selectedRecipe.servings !== "1" ? "s" : ""}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="recipe-modal-body">
              <div className="recipe-modal-ingredients">
                <h3>Ingredients</h3>
                <ul>
                  {selectedRecipe.ingredients.map((ing, i) => (
                    <li key={i}>{ing}</li>
                  ))}
                </ul>
              </div>

              <div className="recipe-modal-steps">
                <h3>Instructions</h3>
                <ol>
                  {selectedRecipe.steps.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>
              </div>
            </div>

            <p className="recipe-modal-disclaimer">
              Always read the label — use only as directed. Nutritional values are approximate.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
