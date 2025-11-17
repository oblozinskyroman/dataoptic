import React, { useEffect, useState, FormEvent } from "react";
import "./App.css";

const NAV_LINKS = [
  { href: "#services", label: "Služby" },
  { href: "#how-we-work", label: "Ako pracujeme" },
  { href: "#for-whom", label: "Pre koho" },
];

const DEMO_MESSAGES = [
  "Navrhni mi dashboard na riadenie cashflow.",
  "Zautomatizuj report marže z e-shopu a účtovníctva.",
  "Sleduj kapacitu tímu a úzke hrdlá vo firmách.",
];

function App() {
  const [typedPlaceholder, setTypedPlaceholder] = useState("");
  const [demoIndex, setDemoIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const [userInput, setUserInput] = useState("");

  // Bolt-style animovaný placeholder
  useEffect(() => {
    const current = DEMO_MESSAGES[demoIndex];
    let timeout = 100;

    if (!isDeleting && charIndex <= current.length) {
      setTypedPlaceholder(current.slice(0, charIndex));
      setCharIndex((c) => c + 1);
      timeout = 55;
    } else if (!isDeleting && charIndex > current.length) {
      timeout = 1400; // pauza na konci
      setIsDeleting(true);
    } else if (isDeleting && charIndex >= 0) {
      setTypedPlaceholder(current.slice(0, charIndex));
      setCharIndex((c) => c - 1);
      timeout = 35;
    } else if (isDeleting && charIndex < 0) {
      setIsDeleting(false);
      setDemoIndex((i) => (i + 1) % DEMO_MESSAGES.length);
      setCharIndex(0);
      timeout = 250;
    }

    const id = setTimeout(() => {}, timeout);
    return () => clearTimeout(id);
  }, [demoIndex, charIndex, isDeleting]);

  // Musíme reálne meniť placeholder, inak by predchádzajúci effect nič nerobil
  useEffect(() => {
    // prázdny efekt – len aby sa hook re-spustil
  }, [typedPlaceholder]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    // Tu neskôr napojíme reálny backend / Supabase.
    console.log("AI dopyt:", userInput);
    setUserInput("");
  };

  const effectivePlaceholder =
    typedPlaceholder ||
    "Napíšte, čo chcete vo firme zrýchliť alebo zautomatizovať…";

  return (
    <div className="page">
      {/* TOP NAV */}
      <header className="top-nav">
        <div className="nav-shell">
          <a href="#hero" className="logo">
            <span className="logo-dot" />
            <span className="logo-text">DATAOPTIC</span>
          </a>

          <nav className="nav-links">
            {NAV_LINKS.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          <a href="#contact" className="nav-cta">
            Automatizovať biznis
          </a>
        </div>
      </header>

      <main>
        {/* HERO + AI ASISTENT */}
        <section id="hero" className="hero">
          <div className="shell">
            <p className="pill pill-hero">
              <span className="pill-dot" />
              Moderná data intelligence & automatizácia procesov
            </p>

            <h1 className="hero-title">
              Data intelligence &{" "}
              <span className="hero-highlight">automatizácia</span>,<br />
              ktorá šetrí čas aj peniaze
            </h1>

            <p className="hero-subtitle">
              Pomáhame firmám vidieť svoje dáta jasne, odhaliť úzke hrdlá a
              automatizovať rutinné procesy. Bez zbytočného korporátneho
              balastu, priamo k výsledkom.
            </p>

            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">
                Chcem nezáväzný call
              </a>
              <a href="#services" className="btn btn-secondary">
                Čo presne robíme
              </a>
            </div>

            {/* AI asistent – štýl ako ServisAI */}
            <section className="ai-section">
              <div className="ai-card">
                <div className="ai-card-header">
                  <div className="ai-avatar">🤖</div>
                  <div>
                    <div className="ai-title">AI asistent pre automatizáciu</div>
                    <div className="ai-subtitle">
                      Napíšte, čo vo firme bolí. Asistent navrhne, čo sa oplatí
                      automatizovať.
                    </div>
                  </div>
                </div>

                <form className="ai-form" onSubmit={handleSubmit}>
                  <input
                    className="ai-input"
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder={effectivePlaceholder}
                  />
                  <button type="submit" className="ai-submit">
                    Navrhnúť riešenie
                  </button>
                </form>

                <div className="ai-chips">
                  <button
                    type="button"
                    className="chip"
                    onClick={() =>
                      setUserInput(
                        "Zautomatizuj report marže z e-shopu a účtovníctva."
                      )
                    }
                  >
                    Zautomatizuj report marže z e-shopu a účtovníctva.
                  </button>
                  <button
                    type="button"
                    className="chip"
                    onClick={() =>
                      setUserInput(
                        "Sleduj cashflow z bánk, ERP a faktúr na jednom mieste."
                      )
                    }
                  >
                    Sleduj cashflow z bánk, ERP a faktúr na jednom mieste.
                  </button>
                  <button
                    type="button"
                    className="chip"
                    onClick={() =>
                      setUserInput(
                        "Nastav týždenný manažérsky report pre vedenie."
                      )
                    }
                  >
                    Nastav týždenný manažérsky report pre vedenie.
                  </button>
                </div>
              </div>
            </section>
          </div>
        </section>

        {/* BENEFITY */}
        <section id="services" className="section">
          <div className="shell">
            <header className="section-header">
              <h2>Čo vám DataOptic prinesie</h2>
            </header>

            <div className="grid grid-3">
              <article className="card">
                <h3>Jasný obraz o biznise</h3>
                <p>
                  Prepojíme dáta z rôznych systémov do jedného prehľadného
                  dashboardu. Manažérske čísla bez ručného exportovania.
                </p>
              </article>

              <article className="card">
                <h3>Automatizované reporty</h3>
                <p>
                  Reporty odchádzajú automaticky – denne, týždenne alebo
                  mesačne. Žiadne Excel peklo, žiadne ručné prepisovanie.
                </p>
              </article>

              <article className="card">
                <h3>Úspora času ľudí</h3>
                <p>
                  Automatizujeme rutinu (importy, prepočty, notifikácie), aby sa
                  váš tím venoval tomu, čo tvorí skutočnú hodnotu.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* AKO PRACUJEME */}
        <section id="how-we-work" className="section section-alt">
          <div className="shell">
            <header className="section-header">
              <h2>Ako s vami budeme spolupracovať</h2>
            </header>

            <ol className="steps">
              <li className="steps-item">
                <span className="steps-badge">KROK 1</span>
                <h3>Úvodný online call (30–45 min)</h3>
                <p>
                  Pochopíme biznis, systémy a cieľ. Žiadny sales tlak, iba
                  konkrétne otázky a prvé nápady.
                </p>
              </li>

              <li className="steps-item">
                <span className="steps-badge">KROK 2</span>
                <h3>Workshop & návrh riešenia</h3>
                <p>
                  Detailne zmapujeme toky dát, úzke hrdlá a manuálne úlohy.
                  Dostanete návrh architektúry a hrubý odhad prínosu.
                </p>
              </li>

              <li className="steps-item">
                <span className="steps-badge">KROK 3</span>
                <h3>Implementácia na etapy</h3>
                <p>
                  Začíname od najrýchlejšieho prínosu. Každá etapa má jasný cieľ,
                  deadline a zodpovednosti na oboch stranách.
                </p>
              </li>

              <li className="steps-item">
                <span className="steps-badge">KROK 4</span>
                <h3>Monitoring & priebežný rozvoj</h3>
                <p>
                  Sledujeme využitie riešenia, dopĺňame nové pohľady a
                  automatizácie podľa toho, čo firmu najviac bolí.
                </p>
              </li>
            </ol>
          </div>
        </section>

        {/* PRE KOHO */}
        <section id="for-whom" className="section">
          <div className="shell">
            <header className="section-header">
              <h2>Pre koho je DataOptic</h2>
              <p className="section-subtitle">
                Najviac hodnoty prinášame firmám, ktoré už majú dáta, ale nemajú
                z nich použiteľný obraz.
              </p>
            </header>

            <div className="grid grid-3 for-whom-grid">
              <article className="card card-tagged">
                <span className="card-tag">B2B služby & agentúry</span>
                <p>
                  Sledujete výkon kampaní, projektov alebo accountov v rôznych
                  nástrojoch a potrebujete jeden jasný pohľad.
                </p>
              </article>

              <article className="card card-tagged">
                <span className="card-tag">E-commerce & retail</span>
                <p>
                  Prepojíme e-shop, ERP, marketing a logistiku do jedného
                  dashboardu – marža, sklad, cashflow, zákazníci.
                </p>
              </article>

              <article className="card card-tagged">
                <span className="card-tag">Výroba & prevádzka</span>
                <p>
                  OEE, prestoje, kvalita, náklady. Z výrobných dát spravíme
                  prehľadné reporty pre management aj líniových manažérov.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="section section-cta">
          <div className="shell">
            <header className="section-header section-header-center">
              <h2>Chcete vidieť svoje dáta jasne?</h2>
              <p className="section-subtitle">
                Poďme si dať krátky call. Povieme vám úprimne, či vieme priniesť
                reálny efekt – alebo nie.
              </p>
            </header>

            <div className="hero-buttons hero-buttons-center">
              <a href="mailto:info@dataoptic.sk" className="btn btn-primary">
                Napísať e-mail
              </a>
              <a href="#hero" className="btn btn-secondary">
                Vrátiť sa hore
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="shell footer-inner">
          <span>© {new Date().getFullYear()} DataOptic</span>
          <span className="footer-dot">•</span>
          <span>Data intelligence & automatizácia procesov</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
