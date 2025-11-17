import React from "react";
import "./App.css";

const NAV_LINKS = [
  { href: "#services", label: "Služby" },
  { href: "#how-we-work", label: "Ako pracujeme" },
  { href: "#for-whom", label: "Pre koho" },
];

function App() {
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
            Dohodnúť konzultáciu
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
              Data intelligence & automatizácia,
              <br />
              ktorá šetrí čas aj peniaze
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

            <p className="hero__note">
              ⚡ Prvé odporúčania do 7 dní od úvodného workshopu.
            </p>
          </div>
        </section>

        {/* BENEFITS */}
        <section id="services" className="section section--padded">
          <div className="section__header">
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

        {/* HOW WE WORK */}
        <section id="how-we-work" className="section section--padded">
          <div className="section__header">
            <h2>Ako s vami budeme spolupracovať</h2>
          </div>

          <ol className="steps">
            <li className="steps__item">
              <span className="steps__badge">KROK 1</span>
              <h3>Úvodný online call (30–45 min)</h3>
              <p>
                Pochopíme biznis, systémy a cieľ. Žiadny sales tlak, iba
                konkrétne otázky a prvé nápady.
              </p>
            </li>

            <li className="steps__item">
              <span className="steps__badge">KROK 2</span>
              <h3>Workshop & návrh riešenia</h3>
              <p>
                Detailne zmapujeme toky dát, úzke hrdlá a manuálne úlohy. Dostanete
                návrh architektúry a hrubý odhad prínosu.
              </p>
            </li>

            <li className="steps__item">
              <span className="steps__badge">KROK 3</span>
              <h3>Implementácia na etapy</h3>
              <p>
                Začíname od najrýchlejšieho prínosu. Každá etapa má jasný cieľ,
                deadline a zodpovednosti na oboch stranách.
              </p>
            </li>

            <li className="steps__item">
              <span className="steps__badge">KROK 4</span>
              <h3>Monitoring & priebežný rozvoj</h3>
              <p>
                Sledujeme využitie riešenia, dopĺňame nové pohľady a automatizácie
                podľa toho, čo firmu najviac bolí.
              </p>
            </li>
          </ol>
        </section>

        {/* FOR WHOM */}
        <section id="for-whom" className="section section--padded">
          <div className="section__header">
            <h2>Pre koho je DataOptic</h2>
            <p>
              Najviac hodnoty prinášame firmám, ktoré už majú dáta, ale nemajú z
              nich použiteľný obraz.
            </p>
          </div>

          <div className="grid grid--3">
            <article className="card card--tagged">
              <span className="card__tag">B2B služby & agentúry</span>
              <p>
                Sledujete výkon kampaní, projektov alebo accountov v rôznych
                nástrojoch a potrebujete jeden jasný pohľad.
              </p>
            </article>

            <article className="card card--tagged">
              <span className="card__tag">E-commerce & retail</span>
              <p>
                Prepojenie e-shopu, ERP, marketingu a logistiky do jedného
                dashboardu – marža, sklad, cashflow, zákazníci.
              </p>
            </article>

            <article className="card card--tagged">
              <span className="card__tag">Výroba & prevádzka</span>
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
