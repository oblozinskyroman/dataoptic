import "./App.css";

function App() {
  return (
    <div className="page">
      <header className="nav">
        <div className="nav__logo">DataOptic</div>
        <nav className="nav__links">
          <a href="#services">Služby</a>
          <a href="#process">Ako pracujeme</a>
          <a href="#clients">Pre koho</a>
        </nav>
        <a href="#contact" className="nav__cta">
          Dohodnúť konzultáciu
        </a>
      </header>

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="hero__content">
            <h1>
              Data intelligence &amp; automatizácia,
              <br />
              ktorá šetrí čas aj peniaze
            </h1>
            <p>
              Pomáhame firmám vidieť svoje dáta jasne,
              odhaliť úzke hrdlá a automatizovať rutinné procesy.
              Bez zbytočného korporátneho balastu, priamo k výsledkom.
            </p>
            <div className="hero__actions">
              <a href="#contact" className="btn btn--primary">
                Chcem nezáväzný call
              </a>
              <a href="#services" className="btn btn--ghost">
                Čo presne robíme
              </a>
            </div>
            <p className="hero__note">
              ⚡ Prvé odporúčania do 7 dní od úvodného workshopu.
            </p>
          </div>
        </section>

        {/* SLUŽBY / BENEFITY */}
        <section id="services" className="section">
          <h2>Čo vám DataOptic prinesie</h2>
          <div className="grid">
            <div className="card">
              <h3>Jasný obraz o biznise</h3>
              <p>
                Prepojíme dáta z rôznych systémov do jedného prehľadného
                dashboardu. Manažérske čísla bez ručného exportovania.
              </p>
            </div>
            <div className="card">
              <h3>Automatizované reporty</h3>
              <p>
                Reporty odchádzajú automaticky – denne, týždenne alebo mesačne.
                Žiadne Excel peklo, žiadne ručné prepisovanie.
              </p>
            </div>
            <div className="card">
              <h3>Úspora času ľudí</h3>
              <p>
                Automatizujeme rutinu (importy, prepočty, notifikácie), aby sa
                ľudia mohli venovať tomu, čo tvorí skutočnú hodnotu.
              </p>
            </div>
          </div>
        </section>

        {/* PROCES */}
        <section id="process" className="section section--alt">
          <h2>Ako s vami budeme spolupracovať</h2>
          <ol className="steps">
            <li>
              <span>Krok 1</span>
              Úvodný online call (30–45 min), kde si ujasníme aktuálny stav a cieľ.
            </li>
            <li>
              <span>Krok 2</span>
              Rýchly audit dát a procesov – identifikujeme 2–3 najväčšie príležitosti.
            </li>
            <li>
              <span>Krok 3</span>
              Návrh riešenia + odhad prínosu a nákladov. Rozhodnete sa, či ideme ďalej.
            </li>
            <li>
              <span>Krok 4</span>
              Implementácia, testovanie a jednoduché školenie vášho tímu.
            </li>
          </ol>
        </section>

        {/* PRE KOHO */}
        <section id="clients" className="section">
          <h2>Pre koho je DataOptic ideálny</h2>
          <div className="grid grid--two">
            <div className="card">
              <h3>SME a menšie firmy</h3>
              <p>
                Rastiete, pribúda administratíva a cítite, že Excel už nestačí.
                Chcete mať čísla pod kontrolou bez budovania veľkého IT oddelenia.
              </p>
            </div>
            <div className="card">
              <h3>Oddelenia vo väčších firmách</h3>
              <p>
                Potrebujete rýchle, pragmatické riešenie mimo dlhé
                korporátne projekty. Hľadáte partnera, ktorý hovorí „po
                ľudsky“ a doručuje.
              </p>
            </div>
          </div>
        </section>

        {/* KONTAKT / CTA */}
        <section id="contact" className="section section--highlight">
          <div className="contact">
            <h2>Poďme sa pozrieť na vaše dáta</h2>
            <p>
              Napíšte pár viet o firme a probléme, ktorý riešite.
              Ozveme sa vám s návrhom termínu krátkeho online callu.
            </p>
            <a href="mailto:oblozinskyroman8@gmail.com" className="btn btn--primary">
              Napísať e-mail
            </a>
            <p className="contact__meta">
              Alebo priamo e-mail:{" "}
              <a href="mailto:oblozinskyroman8@gmail.com">
                oblozinskyroman8@gmail.com
              </a>
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} DataOptic</span>
        <span>Data intelligence &amp; automatizácia procesov</span>
      </footer>
    </div>
  );
}

export default App;
