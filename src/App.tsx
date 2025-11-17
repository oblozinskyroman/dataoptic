import "./App.css";

const NAV_LINKS = [
  { href: "#hero", label: "Úvod" },
  { href: "#ai-demo", label: "AI demo" },
  { href: "#benefits", label: "Pre koho" },
];

const AI_SUGGESTIONS = [
  "Zautomatizuj report marže z e-shopu a účtovníctva.",
  "Sleduj cashflow z bánk, ERP a faktúr na jednom mieste.",
  "Nastav denný manažérsky report pre vedenie.",
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
            Spustiť AI asistenta
          </a>
        </div>
      </header>

      <main className="main">
        {/* HERO */}
        <section id="hero" className="hero">
          <p className="hero__eyebrow">
            Moderná data intelligence &amp; automatizácia procesov
          </p>

          <h1 className="hero__title">
            Postavte si{" "}
            <span className="hero__highlight">data asistenta</span>, ktorý šetrí
            čas aj peniaze
          </h1>

          <p className="hero__subtitle">
            DataOptic pomáha firmám vidieť dáta jasne, odhaliť úzke hrdlá a
            zautomatizovať rutinné procesy. Bez korporátneho balastu – priamo k
            výsledkom.
          </p>

          <div className="hero__actions">
            <a href="#ai-demo" className="btn btn--primary">
              Vyskúšať AI demo
            </a>
            <a href="#benefits" className="btn btn--ghost">
              Čo všetko vieme riešiť
            </a>
          </div>
        </section>

        {/* AI DEMO PANEL */}
        <section id="ai-demo" className="ai-section">
          <div className="ai-panel">
            <div className="ai-panel__header">
              <div className="ai-panel__header-left">
                <span className="ai-panel__status-dot" />
                <span className="ai-panel__title">
                  AI asistent pre automatizáciu procesov
                </span>
              </div>
              <span className="ai-panel__badge">Živé demo</span>
            </div>

            <div className="ai-panel__body">
              <input
                className="ai-panel__input"
                type="text"
                placeholder="Opíšte v jednej vete, čo chcete vo firme zautomatizovať…"
              />
              <button type="button" className="ai-panel__submit">
                Navrhnúť riešenie
              </button>
            </div>

            <div className="ai-panel__suggestions">
              {AI_SUGGESTIONS.map((text) => (
                <button
                  key={text}
                  type="button"
                  className="ai-chip"
                  // čisto vizuálne, žiadna logika
                >
                  {text}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section id="benefits" className="section section--benefits">
          <h2 className="section__title">Kde dáva DataOptic najväčší zmysel</h2>
          <p className="section__subtitle">
            Zameriavame sa na firmy, ktoré už majú dáta, ale nemajú z nich
            použiteľný obraz – alebo ich spracúvajú ručne v Exceli.
          </p>

          <div className="cards">
            <article className="card">
              <h3 className="card__title">Jasný obraz o biznise</h3>
              <p className="card__text">
                Prepojíme dáta z rôznych systémov do prehľadných dashboardov.
                Manažérske čísla bez ručného exportovania.
              </p>
            </article>

            <article className="card">
              <h3 className="card__title">Automatizované reporty</h3>
              <p className="card__text">
                Reporty odchádzajú automaticky – denne, týždenne alebo mesačne.
                Žiadne Excel peklo, žiadne ručné prepisovanie.
              </p>
            </article>

            <article className="card">
              <h3 className="card__title">Úspora času ľudí</h3>
              <p className="card__text">
                AI asistent rieši rutinu (importy, prepočty, notifikácie), aby
                sa váš tím mohol venovať práci, ktorá tvorí skutočnú hodnotu.
              </p>
            </article>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer__inner">
          <span>© {new Date().getFullYear()} DataOptic</span>
          <span className="footer__dot">•</span>
          <span>Data intelligence &amp; automatizácia procesov</span>
        </div>
      </footer>
    </div>
  );
}

export default App;