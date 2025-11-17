import { useState } from "react";
import "./App.css";

const NAV_LINKS = [
  { href: "#hero", label: "Úvod" },
  { href: "#ai-demo", label: "AI demo" },
  { href: "#benefits", label: "Pre koho" },
];

const AI_SUGGESTIONS = [
  "Zautomatizuj mesačný report marže z e-shopu a účtovníctva.",
  "Sleduj cashflow z bánk, ERP a faktúr na jednom mieste.",
  "Nastav denný manažérsky report pre vedenie.",
];

function App() {
  const [prompt, setPrompt] = useState("");
  const [demoResult, setDemoResult] = useState<string | null>(null);

  const handleRunDemo = () => {
    if (!prompt.trim()) return;

    setDemoResult(
      "Prvý krok by bol prepojiť vaše existujúce systémy (e-shop, účtovníctvo, banky) do jedného dátového zdroja. " +
        "Nad tým nastavíme pravidelné prepočty a automatické reporty, aby ste videli náklady a marže v reálnom čase " +
        "bez ručného prepisovania."
    );
  };

  const handleSuggestionClick = (text: string) => {
    setPrompt(text);
    setDemoResult(
      "Takéto zadanie by sme rozbili na konkrétne kroky: definovať zdroje dát, nastaviť integrácie, vytvoriť prehľadný dashboard " +
        "a automatické notifikácie pri odchýlkach. Cieľ: menej ručnej práce, menej chýb a jasný obraz o nákladoch."
    );
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleRunDemo();
    }
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
            Nájsť úspory v AI deme
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
            Znížte náklady s vlastným{" "}
            <span className="hero__highlight">data asistentom</span>
          </h1>

          <p className="hero__subtitle">
            Pomôžeme vám nahradiť ručné reporty a prepisovanie dát
            automatizáciou a AI. Menej Excelu, viac prehľadných rozhodnutí.
          </p>

          <div className="hero__actions">
            <a href="#ai-demo" className="btn btn--primary">
              Nájsť úspory v AI deme
            </a>
            <a href="#benefits" className="btn btn--ghost">
              Kde vieme šetriť náklady
            </a>
          </div>

          <ul className="hero__bullets">
            <li className="hero__bullet">Odhalíme, kde odchádzajú peniaze.</li>
            <li className="hero__bullet">Automatizujeme rutinné reporty.</li>
            <li className="hero__bullet">Prepojíme dáta z rôznych systémov.</li>
          </ul>
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
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="V jednej vete popíšte, kde vo firme tušíte zbytočné náklady…"
              />
              <button
                type="button"
                className="ai-panel__submit"
                onClick={handleRunDemo}
              >
                Navrhnúť úspory
              </button>
            </div>

            <div className="ai-panel__suggestions">
              {AI_SUGGESTIONS.map((text) => (
                <button
                  key={text}
                  type="button"
                  className="ai-chip"
                  onClick={() => handleSuggestionClick(text)}
                >
                  {text}
                </button>
              ))}
            </div>

            {demoResult && (
              <div className="ai-panel__result">
                <p className="ai-panel__result-label">Ukážka návrhu riešenia</p>
                <p className="ai-panel__result-text">{demoResult}</p>
              </div>
            )}
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
              <h3 className="card__title">Jasný obraz o nákladoch</h3>
              <p className="card__text">
                Prepojíme dáta z rôznych systémov do prehľadných dashboardov.
                Vidíte marže, náklady a zisk v reálnom čase.
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