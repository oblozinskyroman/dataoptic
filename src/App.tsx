import "./App.css";

const NAV_LINKS = [
  { href: "#hero", label: "Úvod" },
  { href: "#ai-demo", label: "AI demo" },
  { href: "#benefits", label: "Pre koho" },
];

const AI_SUGGESTIONS = [
  "Ručne robíme mesačné reporty z e-shopu a účtovníctva.",
  "Potrebujem strážiť cashflow z bánk a faktúr.",
  "Chcem denný manažérsky report pre vedenie.",
];

function App() {
  return (
    <div className="page">
      {/* TOP NAV */}
      <header className="top-nav">
        <div className="top-nav__inner">
          <a href="#hero" className="top-nav__brand">
            <span className="top-nav__dot" />
            <span className="top-nav__logo">DATAOPTIC</span>
          </a>

          <nav className="top-nav__links">
            {NAV_LINKS.map((item) => (
              <a key={item.href} href={item.href} className="top-nav__link">
                {item.label}
              </a>
            ))}
          </nav>

          <a href="#ai-demo" className="top-nav__cta">
            Znížiť náklady
          </a>
        </div>
      </header>

      <main className="main">
        {/* HERO S POZADÍM */}
        <section id="hero" className="hero">
          <div className="hero__bg" aria-hidden="true" />
          <div className="hero__overlay" aria-hidden="true" />
          <div className="hero__inner">
            <p className="hero__eyebrow">
              Moderná data intelligence &amp; automatizácia procesov
            </p>

            <h1 className="hero__title">
              Znížte náklady vo firme{" "}
              <span className="hero__highlight">vlastným data asistentom</span>
            </h1>

            <p className="hero__subtitle">
              Povedzte, kde dnes pália náklady – AI navrhne konkrétne kroky
              automatizácie reportov, procesov a rutinných úloh. Menej Excelu,
              viac prehľadných rozhodnutí.
            </p>
          </div>
        </section>

        {/* AI DEMO PANEL */}
        <section id="ai-demo" className="ai-section">
          <div className="ai-panel">
            <div className="ai-panel__header">
              <div className="ai-panel__header-left">
                <span className="ai-panel__status-dot" />
                <div>
                  <div className="ai-panel__title">
                    AI asistent na hľadanie úspor v procesoch
                  </div>
                  <div className="ai-panel__hint">
                    V jednej vete popíšte, kde vo firme tušíte zbytočné náklady.
                  </div>
                </div>
              </div>
              <span className="ai-panel__badge">Interaktívne demo</span>
            </div>

            <div className="ai-panel__body">
              <input
                className="ai-panel__input"
                type="text"
                placeholder="Napr. Ručne robíme reporty z e-shopu a účtovníctva…"
              />
              <button type="button" className="ai-panel__submit">
                Navrhnúť úspory
              </button>
            </div>

            <div className="ai-panel__suggestions">
              {AI_SUGGESTIONS.map((text) => (
                <button key={text} type="button" className="ai-chip">
                  {text}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFITY / PRE KOHO */}
        <section
          id="benefits"
          className="section section--benefits section--light"
        >
          <h2 className="section__title">Ako DataOptic šetrí náklady</h2>
          <p className="section__subtitle">
            Namiesto ďalšieho nástroja dostanete asistenta nad vašimi dátami,
            ktorý navrhuje konkrétne kroky – nie len grafy.
          </p>

          <div className="cards">
            <article className="card">
              <h3 className="card__title">1. Kde tečú peniaze von</h3>
              <p className="card__text">
                Identifikujeme procesy, kde ľudia trávia hodiny ručným
                prepisovaním, exportami a kontrolou čísel.
              </p>
            </article>

            <article className="card">
              <h3 className="card__title">2. Prepojené dáta</h3>
              <p className="card__text">
                Prepojíme systémy (e-shop, ERP, účtovníctvo, banky) do jedného
                dátového modelu, nad ktorým vie AI pracovať.
              </p>
            </article>

            <article className="card">
              <h3 className="card__title">3. AI asistent v praxi</h3>
              <p className="card__text">
                Spustíme asistenta, ktorý sleduje odchýlky, stráži cashflow a
                navrhuje konkrétne kroky úspor.
              </p>
            </article>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer__inner">
          <span>© {new Date().getFullYear()} DataOptic</span>
          <span className="footer__dot">•</span>
          <span>AI data asistent na znižovanie nákladov</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
