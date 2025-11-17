// src/App.tsx
import "./App.css";

const NAV_LINKS = [
  { href: "#how-it-works", label: "Ako to funguje" },
  { href: "#ai-demo", label: "AI demo" },
  { href: "#benefits", label: "Pre koho" },
];

const AI_SUGGESTIONS = [
  "Rušíme zbytočné manuálne reporty v Exceli.",
  "Chcem vidieť denné marže z e-shopu a účtovníctva.",
  "Potrebujem strážiť cashflow z bánk a faktúr.",
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
            Nájsť úspory v AI deme
          </a>
        </div>
      </header>

      <main className="main">
        {/* HERO */}
        <section id="hero" className="hero">
          <p className="hero__eyebrow">
            MODERNÁ DATA INTELLIGENCE &amp; AUTOMATIZÁCIA PROCESOV
          </p>

          <h1 className="hero__title">
            Znížte náklady vo firme pomocou vlastného{" "}
            <span className="hero__highlight">data asistenta</span>
          </h1>

          <p className="hero__subtitle">
            DataOptic nahradí ručné reporty a prepisovanie dát automatizáciou a
            AI. Menej Excelu, viac prehľadných rozhodnutí a konkrétnych krokov
            na šetrenie nákladov.
          </p>

          <div className="hero__actions">
            <a href="#ai-demo" className="btn btn--primary">
              Spustiť AI demo
            </a>
            <a href="#benefits" className="btn btn--ghost">
              Kde vieme šetriť náklady
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
                  AI asistent na hľadanie úspor v procesoch
                </span>
              </div>
              <span className="ai-panel__badge">Interaktívne demo</span>
            </div>

            <div className="ai-panel__body">
              <input
                className="ai-panel__input"
                type="text"
                placeholder="V jednej vete opíšte, kde vo firme tušíte zbytočné náklady…"
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

        {/* BENEFITS */}
        <section
          id="benefits"
          className="section section--benefits"
        >
          <h2 className="section__title">Ako DataOptic šetrí náklady</h2>
          <p className="section__subtitle">
            Zameriavame sa na firmy, ktoré už majú dáta, ale nemajú z nich
            použiteľný obraz – alebo ich ľudia spracúvajú ručne v Exceli.
          </p>

          <div className="cards">
            <article className="card">
              <h3 className="card__title">Kde tečú peniaze von</h3>
              <p className="card__text">
                Identifikujeme procesy, kde sa hodiny trávia prepisovaním dát,
                ručnými reportmi a kontrolou čísel. Ukážeme konkrétne úspory.
              </p>
            </article>

            <article className="card">
              <h3 className="card__title">Prepojené dáta, jasný obraz</h3>
              <p className="card__text">
                Prepojíme e-shop, ERP, účtovníctvo, banky aj interné tabule do
                jedného dátového modelu, z ktorého vzniknú manažérske prehľady.
              </p>
            </article>

            <article className="card">
              <h3 className="card__title">AI asistent v praxi</h3>
              <p className="card__text">
                Asistent sleduje odchýlky, generuje reporty a navrhuje konkrétne
                kroky – kde škrtať, čo automatizovať a čo sa oplatí vôbec
                nerobiť ručne.
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
