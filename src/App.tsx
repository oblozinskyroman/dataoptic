import { FormEvent, useState } from "react";
import "./App.css";

const NAV_LINKS = [
  { href: "#hero", label: "Úvod" },
  { href: "#ai-demo", label: "AI demo" },
  { href: "#savings", label: "Úspora nákladov" },
  { href: "#benefits", label: "Pre koho" },
];

const AI_SUGGESTIONS = [
  "Zautomatizuj mesačný reporting nákladov a marže.",
  "Spoj banky, ERP a faktúry do jedného cashflow prehľadu.",
  "Nastav denný manažérsky report pre vedenie.",
];

function App() {
  const [aiInput, setAiInput] = useState("");
  const [aiHint, setAiHint] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChipClick = (text: string) => {
    setAiInput(text);
    setAiHint(
      "Toto je iba demo. V ostrej verzii tu bude návrh riešenia na mieru pre vašu firmu."
    );
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!aiInput.trim()) return;

    setIsSubmitting(true);
    // jednoduché front-end demo, žiadny backend
    setTimeout(() => {
      setAiHint(
        "Ukážková odpoveď: DataOptic zoberie vaše existujúce systémy, prepojí ich a postaví nad nimi AI asistenta, ktorý denne sleduje náklady a upozorní na odchýlky."
      );
      setIsSubmitting(false);
    }, 450);
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
            Znížte náklady s{" "}
            <span className="hero__highlight">vlastným data asistentom</span>
          </h1>

          <p className="hero__subtitle">
            DataOptic prepája vaše systémy a AI tak, aby ste menej platili za
            rutinu – a viac mohli investovať do rastu firmy.
          </p>

          <div className="hero__actions">
            <a href="#ai-demo" className="btn btn--primary">
              Vyskúšať AI demo
            </a>
            <a href="#savings" className="btn btn--ghost">
              Ako šetríme náklady
            </a>
          </div>

          <div className="hero__metrics">
            <div className="hero__metric">
              <span className="hero__metric-value">-30 %</span>
              <span className="hero__metric-label">čas na reporting</span>
            </div>
            <div className="hero__metric">
              <span className="hero__metric-value">-20 %</span>
              <span className="hero__metric-label">operatívne náklady</span>
            </div>
            <div className="hero__metric">
              <span className="hero__metric-value">+1 deň</span>
              <span className="hero__metric-label">
                náskok v prehľade cashflow
              </span>
            </div>
          </div>
        </section>

        {/* AI DEMO PANEL */}
        <section id="ai-demo" className="ai-section">
          <div className="ai-panel">
            <div className="ai-panel__header">
              <div className="ai-panel__header-left">
                <span className="ai-panel__status-dot" />
                <span className="ai-panel__title">
                  AI asistent pre znižovanie nákladov
                </span>
              </div>
              <span className="ai-panel__badge">Interaktívne demo</span>
            </div>

            <form className="ai-panel__body" onSubmit={handleSubmit}>
              <input
                className="ai-panel__input"
                type="text"
                value={aiInput}
                onChange={(e) => setAiInput(e.target.value)}
                placeholder="Opíšte v jednej vete, kde teraz vo firme míňate zbytočne veľa času alebo peňazí…"
              />
              <button type="submit" className="ai-panel__submit">
                {isSubmitting ? "Spracovávam…" : "Navrhnúť riešenie"}
              </button>
            </form>

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

            {aiHint && <p className="ai-panel__hint">{aiHint}</p>}
          </div>
        </section>

        {/* SAVINGS SECTION */}
        <section id="savings" className="section section--savings">
          <h2 className="section__title">Ako vám znižujeme náklady</h2>
          <p className="section__subtitle">
            Nepridávame ďalší systém. Zmysel má len to, čo zníži ľudskú prácu,
            duplicitu a riziko chýb.
          </p>

          <div className="savings-grid">
            <article className="saving">
              <h3 className="saving__title">Automatizácia rutiny</h3>
              <p className="saving__text">
                Importy, exporty, prepočty, párovanie platieb, upozornenia –
                všetko, čo opakujete, sa dá zautomatizovať.
              </p>
            </article>

            <article className="saving">
              <h3 className="saving__title">Jedna pravda o číslach</h3>
              <p className="saving__text">
                Namiesto desiatok Excelov jeden centrálny zdroj pravdy. Menej
                chaosu, menej chýb, rýchlejšie rozhodnutia.
              </p>
            </article>

            <article className="saving">
              <h3 className="saving__title">Manažérsky pohľad na náklady</h3>
              <p className="saving__text">
                Každé ráno jasné čísla: kde rastú náklady, kde klesá marža, kde
                unikajú peniaze.
              </p>
            </article>
          </div>
        </section>

        {/* BENEFITS */}
        <section id="benefits" className="section section--benefits">
          <h2 className="section__title">Kde dáva DataOptic najväčší zmysel</h2>
          <p className="section__subtitle">
            Firmy, ktoré už majú dáta, ale nemajú z nich použiteľný obraz – alebo
            ich ľudia stále spracúvajú ručne v Exceli.
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