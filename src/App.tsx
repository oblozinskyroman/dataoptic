import React, { useState } from "react";
import "./App.css";

const NAV_LINKS = [
  { href: "#hero", label: "Úvod" },
  { href: "#ai-demo", label: "AI demo" },
  { href: "#benefits", label: "Pre koho" },
];

const AI_SUGGESTIONS = [
  "Sledovať maržu podľa produktov a kanálov.",
  "Zladiť cashflow z bánk, ERP a faktúr.",
  "Nastaviť denný report pre vedenie.",
];

const HERO_METRICS = [
  { label: "Menej ručnej práce", value: "-40 % času na reporty" },
  { label: "Lepší prehľad", value: "1 miesto pre všetky dáta" },
  { label: "Úspora nákladov", value: "menej chýb, menej prestojov" },
];

function App() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState<string | null>(null);

  const handleSubmit = () => {
    if (!input.trim()) return;

    setResponse(
      "Na začiatok prepojíme vaše zdroje dát (e-shop, účtovníctvo, banky) do jedného dátového modelu. " +
        "Nastavíme automatické prepočty a pravidelné reporty priamo do e-mailu alebo Slacku. " +
        "Výsledok: menej ručného exportovania, menej chýb a jasný pohľad na náklady aj maržu."
    );
  };

  const handleChipClick = (text: string) => {
    setInput(text);
    setResponse(
      "Toto je ukážkový návrh riešenia. V ostrej verzii bude AI asistent pracovať s vašimi reálnymi dátami " +
        "a navrhne konkrétne automatizácie podľa procesov vo firme."
    );
  };

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
            <span className="hero__highlight">Data asistent</span>, ktorý znižuje
            náklady firmy
          </h1>

          <p className="hero__subtitle">
            DataOptic prepája dáta z rôznych systémov, odstraňuje ručné Excel
            peklo a pomáha firmám vidieť, kde zbytočne tečú peniaze. Menej
            ručnej práce, menej chýb, viac kontroly nad nákladmi.
          </p>

          <div className="hero__actions">
            <a href="#ai-demo" className="btn btn--primary">
              Vyskúšať AI demo
            </a>
            <a href="#benefits" className="btn btn--ghost">
              Kde vám vieme ušetriť
            </a>
          </div>

          <div className="hero__metrics">
            {HERO_METRICS.map((item) => (
              <div key={item.label} className="hero-metric">
                <span className="hero-metric__label">{item.label}</span>
                <span className="hero-metric__value">{item.value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* AI DEMO PANEL */}
        <section id="ai-demo" className="ai-section">
          <div className="ai-panel">
            <div className="ai-panel__header">
              <div className="ai-panel__header-left">
                <span className="ai-panel__status-dot" />
                <span className="ai-panel__title">
                  AI asistent pre automatizáciu a úsporu nákladov
                </span>
              </div>
              <span className="ai-panel__badge">Ukážkové demo</span>
            </div>

            <div className="ai-panel__body">
              <input
                className="ai-panel__input"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="V jednej vete opíšte, kde vám vo firme mizne najviac času alebo peňazí…"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleSubmit();
                  }
                }}
              />
              <button
                type="button"
                className="ai-panel__submit"
                onClick={handleSubmit}
              >
                Navrhnúť riešenie
              </button>
            </div>

            <div className="ai-panel__suggestions">
              {AI_SUGGESTIONS.map((text) => (
                <button
                  key={text}
                  type="button"
                  className="ai-chip"
                  onClick={() => handleChipClick(text)}
                >
                  {text}
                </button>
              ))}
            </div>

            {response && (
              <div className="ai-panel__result">
                <h4 className="ai-panel__result-title">Príklad, ako by to mohlo fungovať</h4>
                <p className="ai-panel__result-text">{response}</p>
                <p className="ai-panel__result-note">
                  Toto je len ukážka. V produkčnej verzii bude DataOptic pripojený
                  na vaše reálne dáta a navrhnuté scenáre budú konkrétne pre vašu
                  firmu.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* BENEFITS */}
        <section id="benefits" className="section section--benefits">
          <h2 className="section__title">Kde dáva DataOptic najväčší zmysel</h2>
          <p className="section__subtitle">
            Pre firmy, ktoré už majú dáta, ale nemajú z nich jasný obraz – alebo
            ich ľudia každý mesiac ručne skladujú v Exceli.
          </p>

          <div className="cards">
            <article className="card">
              <h3 className="card__title">Jasný obraz o nákladoch</h3>
              <p className="card__text">
                Prepojíme dáta z e-shopu, ERP, účtovníctva a bánk do prehľadných
                dashboardov. Vidíte, kde miznú peniaze a čo zarába.
              </p>
            </article>

            <article className="card">
              <h3 className="card__title">Automatizované reporty</h3>
              <p className="card__text">
                Reporty odchádzajú automaticky – denne, týždenne alebo mesačne.
                Žiadne manuálne exporty, žiadne prepisovanie čísel.
              </p>
            </article>

            <article className="card">
              <h3 className="card__title">Úspora času tímu</h3>
              <p className="card__text">
                AI asistent rieši rutinu (importy, prepočty, upozornenia), aby sa
                váš tím mohol venovať práci, ktorá tvorí skutočnú hodnotu.
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
