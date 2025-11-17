import "./App.css";

const NAV_LINKS = [
  { href: "#ako-to-funguje", label: "Ako to funguje" },
  { href: "#pre-koho", label: "Pre koho" },
  { href: "#benefits", label: "Výhody" },
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
            Znížiť náklady
          </a>
        </div>
      </header>

      <main className="main">
        {/* HERO */}
        <section id="hero" className="hero">
          <div className="hero__bg" />

          <div className="hero__content">
            <p className="hero__eyebrow">
              Moderná data intelligence &amp; automatizácia procesov
            </p>

            <h1 className="hero__title">
              Znížte náklady vo firme pomocou{" "}
              <span className="hero__highlight">vlastného data asistenta</span>
            </h1>

            <p className="hero__subtitle">
              Povedzte, kde dnes pália náklady – AI vám navrhne konkrétne kroky,
              ako automatizovať reporty, procesy a rutinné úlohy. Menej Excelu,
              viac prehľadných rozhodnutí.
            </p>

            <div className="hero__actions">
              <a href="#ai-demo" className="btn btn--primary">
                Nájsť úspory v AI deme
              </a>
              <a href="#benefits" className="btn btn--ghost">
                Kde vieme šetriť náklady
              </a>
            </div>

            {/* AI DEMO PANEL V HERO */}
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
                    placeholder="V jednej vete popíšte, kde vo firme tušíte zbytočné náklady…"
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
          </div>
        </section>

        {/* SEKCIÁ – AKO TO FUNGUJE */}
        <section id="ako-to-funguje" className="section section--how">
          <h2 className="section__title">Ako DataOptic šetrí náklady</h2>
          <p className="section__subtitle">
            Namiesto ďalšieho nástroja dostanete asistenta nad vašimi dátami,
            ktorý navrhne konkrétne kroky – nie len grafy.
          </p>

          <div className="steps">
            <article className="step">
              <h3 className="step__title">1. Kde tečú peniaze von</h3>
              <p className="step__text">
                Spolu identifikujeme procesy, kde ľudia trávia hodiny ručným
                prepisovaním, exportami a kontrolou čísel.
              </p>
            </article>
            <article className="step">
              <h3 className="step__title">2. Prepojenie dát</h3>
              <p className="step__text">
                Prepojíme systémy (e-shop, ERP, účtovníctvo, banky) do jedného
                dátového modelu, nad ktorým vie AI pracovať.
              </p>
            </article>
            <article className="step">
              <h3 className="step__title">3. AI asistent v praxi</h3>
              <p className="step__text">
                Spustíme asistenta, ktorý generuje reporty, upozorňuje na
                odchýlky a navrhuje konkrétne úsporné kroky.
              </p>
            </article>
          </div>
        </section>

        {/* BENEFITS */}
        <section id="benefits" className="section section--benefits">
          <h2 className="section__title">Kde dáva DataOptic najväčší zmysel</h2>
          <p className="section__subtitle">
            Pre firmy, ktoré už majú dáta, ale nemajú z nich jasný obraz – alebo
            ich spracúvajú ručne v Exceli.
          </p>

          <div className="cards">
            <article className="card">
              <h3 className="card__title">Jasná kontrola nákladov</h3>
              <p className="card__text">
                Vidíte marže, náklady a zisk v reálnom čase. Žiadne čakanie na
                mesačné vyhodnotenie od účtovníctva.
              </p>
            </article>

            <article className="card">
              <h3 className="card__title">Automatizované reporty</h3>
              <p className="card__text">
                Reporty chodia automaticky – denne, týždenne alebo mesačne.
                Žiadne „Excel peklo“ a ručné prepisovanie.
              </p>
            </article>

            <article className="card">
              <h3 className="card__title">Úspora času tímu</h3>
              <p className="card__text">
                AI asistent preberá rutinu (importy, prepočty, notifikácie),
                aby sa ľudia venovali práci s najvyššou pridanou hodnotou.
              </p>
            </article>
          </div>
        </section>

        {/* PRE KOHO */}
        <section id="pre-koho" className="section section--who">
          <h2 className="section__title">Pre koho je DataOptic</h2>
          <p className="section__subtitle">
            Najväčší efekt prinášame firmám s obratom, kde už aj malé percento
            úspory znamená výrazné peniaze.
          </p>

          <div className="chips-row">
            <span className="chip">E-shopy s vlastným skladom</span>
            <span className="chip">Výrobná a logistická firma</span>
            <span className="chip">Služby s veľkým tímom</span>
            <span className="chip">Multi-pobočkové firmy</span>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer__inner">
          <span>© {new Date().getFullYear()} DataOptic</span>
          <span className="footer__dot">•</span>
          <span>AI pre znižovanie nákladov a lepšie rozhodnutia</span>
        </div>
      </footer>
    </div>
  );
}

export default App;