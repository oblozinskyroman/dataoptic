import "./App.css";

const NAV_LINKS = [
  { href: "#how", label: "Ako funguje" },
  { href: "#benefits", label: "Prínosy pre firmu" },
  { href: "#pricing", label: "Cenník (čoskoro)" },
];

const AI_SUGGESTIONS = [
  "Zautomatizuj report marže z e-shopu a účtovníctva.",
  "Sleduj náklady a cashflow z bánk, ERP a faktúr na jednom mieste.",
  "Nastav denný manažérsky report pre vedenie.",
];

export default function App() {
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
            Nájsť úspory
          </a>
        </div>
      </header>

      <main className="main">
        {/* HERO */}
        <section id="hero" className="hero">
          <div className="hero__content">
            <p className="hero__eyebrow">
              MODERNÁ DATA INTELLIGENCE &amp; AUTOMATIZÁCIA PROCESOV
            </p>

            <h1 className="hero__title">
              Znížte náklady vo firme pomocou{" "}
              <span className="hero__highlight">vlastného data asistenta</span>
            </h1>

            <p className="hero__subtitle">
              Povedzte, kde dnes pália náklady – AI vám navrhne konkrétne kroky
              automatizácie reportov, procesov a rutinných úloh. Menej Excelu,
              menej prepisovania, viac peňazí na výsledku.
            </p>

            <div className="hero__actions">
              <a href="#ai-demo" className="btn btn--primary">
                Spustiť AI demo úspor
              </a>
              <a href="#how" className="btn btn--ghost">
                Ako to funguje
              </a>
            </div>

            {/* AI PANEL priamo v hero – podobne ako ServisAI */}
            <section id="ai-demo" className="ai-section">
              <div className="ai-panel">
                <div className="ai-panel__header">
                  <div className="ai-panel__header-left">
                    <span className="ai-panel__status-dot" />
                    <div>
                      <p className="ai-panel__title">
                        AI asistent na hľadanie úspor v procesoch
                      </p>
                      <p className="ai-panel__description">
                        V jednej vete opíšte, kde máte zbytočné náklady – AI
                        navrhne, čo sa dá automatizovať.
                      </p>
                    </div>
                  </div>
                  <span className="ai-panel__badge">Interaktívne demo</span>
                </div>

                <div className="ai-panel__body">
                  <input
                    className="ai-panel__input"
                    type="text"
                    placeholder="Napr. „Ručne robíme report marže z e-shopu a účtovníctva.“"
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

        {/* BENEFITS */}
        <section id="benefits" className="section section--benefits">
          <h2 className="section__title">
            Kde má data asistent najväčší prínos
          </h2>
          <p className="section__subtitle">
            Zameriavame sa na firmy, ktoré už majú dáta – ale míňajú čas ľudí
            na ručné reporty, exporty a prepisovanie namiesto reálnej práce.
          </p>

          <div className="cards">
            <article className="card">
              <h3 className="card__title">Kontrola nákladov v reálnom čase</h3>
              <p className="card__text">
                Prepojíme banky, ERP, fakturačný systém a e-shop do jedného
                prehľadného pohľadu. Vidíte, kde odchádzajú peniaze práve teraz.
              </p>
            </article>

            <article className="card">
              <h3 className="card__title">Automatizované manažérske reporty</h3>
              <p className="card__text">
                Denné a týždenné reporty odchádzajú automaticky. Žiadne
                „pošli mi ešte raz Excel“, žiadne nočné naháňanie čísiel.
              </p>
            </article>

            <article className="card">
              <h3 className="card__title">Úspora času ľudí</h3>
              <p className="card__text">
                Asistent rieši rutinu – importy, prepočty, upozornenia. Tím sa
                môže venovať predaju, zákazníkom a strategickým rozhodnutiam.
              </p>
            </article>
          </div>
        </section>

        {/* HOW IT WORKS – jednoduchý placeholder */}
        <section id="how" className="section section--how">
          <h2 className="section__title">Ako DataOptic funguje</h2>
          <p className="section__subtitle">
            Najprv identifikujeme, kde vám utekajú peniaze, potom pripojíme
            zdroje dát a nakoniec nasadíme AI asistenta na vaše konkrétne
            procesy.
          </p>

          <div className="steps">
            <div className="step">
              <span className="step__badge">1</span>
              <h3 className="step__title">Audit nákladov a procesov</h3>
              <p className="step__text">
                Spoločne zmapujeme, kde robíte ručnú prácu – reporty, exporty,
                prepisovanie, schvaľovanie.
              </p>
            </div>
            <div className="step">
              <span className="step__badge">2</span>
              <h3 className="step__title">Prepojenie dát</h3>
              <p className="step__text">
                Prepojíme banky, ERP, CRM, e-shop a ďalšie systémy do jednej
                dátovej vrstvy.
              </p>
            </div>
            <div className="step">
              <span className="step__badge">3</span>
              <h3 className="step__title">Nasadenie AI asistenta</h3>
              <p className="step__text">
                Nastavíme AI asistenta, ktorý sleduje čísla, generuje reporty a
                upozorní, keď sa niečo vymyká z normálu.
              </p>
            </div>
          </div>
        </section>

        {/* PRICING PLACEHOLDER */}
        <section id="pricing" className="section section--pricing">
          <h2 className="section__title">Cenník</h2>
          <p className="section__subtitle">
            Neplatíte za licencie navyše – nastavíme jednoduchý model na mieru
            podľa počtu napojených systémov a rozsahu automatizácie.
          </p>
        </section>
      </main>

      <footer className="footer">
        <div className="footer__inner">
          <span>© {new Date().getFullYear()} DataOptic</span>
          <span className="footer__dot">•</span>
          <span>Pomáhame firmám znížiť náklady pomocou dát a AI</span>
        </div>
      </footer>
    </div>
  );
}