import "./App.css";
import { useEffect, useState, type FormEvent } from "react";

const NAV_LINKS = [
  { href: "#services", label: "Služby" },
  { href: "#how-we-work", label: "Ako pracujeme" },
  { href: "#for-whom", label: "Pre koho" },
];

const AI_PLACEHOLDER_SCRIPTS = [
  "Navrhni dashboard pre riadenie cashflowu…",
  "Automatizuj report marže z e-shopu a účtovníctva…",
  "Sleduj cashflow z bánk, ERP a faktúr na jednom mieste…",
  "Nastav týždenný manažérsky report pre vedenie…",
];

const AI_SUGGESTIONS = [
  "Automatizuj fakturačné procesy a párovanie platieb.",
  "Prepoj e-shop, sklad a účtovníctvo do jedného reportu.",
  "Nastav denný report cashflowu pre vedenie firmy.",
];

function App() {
  const [aiInput, setAiInput] = useState("");
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [displayedPlaceholder, setDisplayedPlaceholder] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  // jednoduchá „bolt“ animácia textu v placeholderi
  useEffect(() => {
    const script = AI_PLACEHOLDER_SCRIPTS[placeholderIndex];
    let charIndex = 0;

    setDisplayedPlaceholder("");
    setIsTyping(true);

    const typingInterval = setInterval(() => {
      charIndex += 1;
      if (charIndex <= script.length) {
        setDisplayedPlaceholder(script.slice(0, charIndex));
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
      }
    }, 40);

    const nextScriptTimeout = setTimeout(() => {
      setPlaceholderIndex((prev) => (prev + 1) % AI_PLACEHOLDER_SCRIPTS.length);
    }, 5500);

    return () => {
      clearInterval(typingInterval);
      clearTimeout(nextScriptTimeout);
    };
  }, [placeholderIndex]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const value = aiInput.trim();
    if (!value) return;

    // zatiaľ len konzola – neskôr sa tu môže napojiť reálny backend / Supabase / OpenAI
    console.log("AI dopyt:", value);

    setAiInput("");
  };

  const handleSuggestionClick = (suggestion: string) => {
    setAiInput(suggestion);
  };

  return (
    <div className="page">
      {/* TOP NAV */}
      <header className="top-nav">
        <div className="top-nav__inner">
          <a href="#hero" className="logo">
            <span className="logo__dot" />
            <span className="logo__text">DATAOPTIC</span>
          </a>

          <nav className="main-nav">
            {NAV_LINKS.map((item) => (
              <a key={item.href} href={item.href} className="main-nav__link">
                {item.label}
              </a>
            ))}
          </nav>

          <a href="#contact" className="btn btn--ghost">
            Automatizovať biznis
          </a>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section id="hero" className="hero">
          <div className="hero__content">
            <p className="hero__badge">
              <span className="hero__badge-dot" />
              Moderná data intelligence & automatizácia procesov
            </p>

            <h1 className="hero__headline">
              Data intelligence &{" "}
              <span className="hero__highlight">automatizácia</span>, ktorá šetrí
              čas aj peniaze
            </h1>

            <p className="hero__sub">
              Pomáhame firmám vidieť svoje dáta jasne, odhaliť úzke hrdlá a
              automatizovať rutinné procesy. Bez zbytočného korporátneho
              balastu, priamo k výsledkom.
            </p>

            <div className="hero__actions">
              <a href="#contact" className="btn btn--primary">
                Chcem nezáväzný call
              </a>
              <a href="#services" className="btn btn--secondary">
                Čo presne robíme
              </a>
            </div>
          </div>

          {/* AI ASISTENT – štýl ako ServisAI, ale v tmavších farbách */}
          <div className="ai-card">
            <div className="ai-card__header">
              <div>
                <p className="ai-card__title">AI asistent pre automatizáciu procesov</p>
                <p className="ai-card__subtitle">
                  Napíšte, čo chcete vo firme zrýchliť – AI navrhne dátové riešenie
                  aj automatizáciu.
                </p>
              </div>
              <span className="ai-card__pill">Live demo</span>
            </div>

            <form className="ai-card__form" onSubmit={handleSubmit}>
              <input
                type="text"
                className="ai-card__input"
                value={aiInput}
                onChange={(e) => setAiInput(e.target.value)}
                placeholder={isTyping ? displayedPlaceholder : displayedPlaceholder}
              />
              <button type="submit" className="btn btn--primary ai-card__submit">
                Navrhnúť riešenie
              </button>
            </form>

            <div className="ai-card__suggestions">
              {AI_SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  type="button"
                  className="ai-chip"
                  onClick={() => handleSuggestionClick(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section id="services" className="section section--padded">
          <div className="section__header section__header--center">
            <h2>Čo vám DataOptic prinesie</h2>
          </div>

          <div className="grid grid--3">
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
                Reporty odchádzajú automaticky – denne, týždenne alebo mesačne.
                Žiadne Excel peklo, žiadne ručné prepisovanie.
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
        </section>

        {/* FOR WHOM */}
        <section id="for-whom" className="section section--padded section--alt">
          <div className="section__header section__header--center">
            <h2>Pre koho je DataOptic</h2>
            <p>
              Najviac hodnoty prinášame firmám, ktoré už majú dáta, ale nemajú z
              nich použiteľný obraz.
            </p>
          </div>

          <div className="grid grid--3">
            <article className="card card--tagged">
              <span className="card__tag">B2B služby &amp; agentúry</span>
              <p>
                Sledujete výkon kampaní, projektov alebo accountov v rôznych
                nástrojoch a potrebujete jeden jasný pohľad.
              </p>
            </article>

            <article className="card card--tagged">
              <span className="card__tag">E-commerce &amp; retail</span>
              <p>
                Prepojenie e-shopu, ERP, marketingu a logistiky do jedného
                dashboardu – marža, sklad, cashflow, zákazníci.
              </p>
            </article>

            <article className="card card--tagged">
              <span className="card__tag">Výroba &amp; prevádzka</span>
              <p>
                OEE, prestoje, kvalita, náklady. Z výrobných dát spravíme
                prehľadné reporty pre management aj líniových manažérov.
              </p>
            </article>
          </div>
        </section>

        {/* FINAL CTA */}
        <section id="contact" className="section section--cta">
          <div className="section__header section__header--center">
            <h2>Chcete vidieť svoje dáta jasne?</h2>
            <p>
              Poďme si dať krátky call. Povieme vám úprimne, či vieme priniesť
              reálny efekt – alebo nie.
            </p>
          </div>

          <div className="cta-actions">
            <a href="mailto:info@dataoptic.sk" className="btn btn--primary">
              Napísať e-mail
            </a>
            <a href="#hero" className="btn btn--secondary">
              Vrátiť sa hore
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer__inner">
          <span>© {new Date().getFullYear()} DataOptic</span>
          <span className="footer__dot">•</span>
          <span>Data intelligence & automatizácia procesov</span>
        </div>
      </footer>
    </div>
  );
}

export default App;