import "./App.css";

const NAV_LINKS = [
  { href: "#how-it-works", label: "Ako to funguje" },
  { href: "#pricing", label: "Prínos pre firmu" },
];

function App() {
  return (
    <div className="page">
      {/* TOP NAV */}
      <header className="top-nav">
        <div className="top-nav__inner">
          <a href="#top" className="top-nav__brand">
            <span className="top-nav__logo-dot" />
            <span className="top-nav__logo-text">DATAOPTIC</span>
          </a>

          <nav className="top-nav__links">
            {NAV_LINKS.map((item) => (
              <a key={item.href} href={item.href} className="top-nav__link">
                {item.label}
              </a>
            ))}
          </nav>

          <a href="#chat" className="top-nav__cta">
            Znížiť náklady
          </a>
        </div>
      </header>

      {/* HERO CHAT BLOCK */}
      <main className="hero" id="top">
        <section className="hero-card" id="chat">
          <p className="hero-card__eyebrow">AI nad tvojimi firemnými dátami</p>

          <h1 className="hero-card__title">
            Zníž náklady vo firme pomocou vlastného data asistenta
          </h1>

          <p className="hero-card__subtitle">
            Povedz, kde dnes pália náklady – AI ti navrhne konkrétne kroky
            automatizácie reportov, procesov a rutinných úloh.
          </p>

          <div className="hero-card__chat-row">
            <input
              className="hero-card__input"
              type="text"
              placeholder="Napíš v jednej vete, kde máš najväčšie zbytočné náklady…"
            />
            <button type="button" className="hero-card__button">
              Navrhnúť úsporu
            </button>
          </div>

          <p className="hero-card__hint">
            Príklady: „ručne robíme reporty z e-shopu“, „prepisujeme faktúry do
            systému“, „nikto nesleduje maržu po kategóriách“.
          </p>
        </section>
      </main>

      {/* (ďalšie sekcie doplníme neskôr) */}
    </div>
  );
}

export default App;