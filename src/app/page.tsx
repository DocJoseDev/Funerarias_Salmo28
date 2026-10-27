const heroStats = [
  { value: "24/7", label: "Acompañamiento inmediato" },
  { value: "+150", label: "Familias atendidas con calma" },
  { value: "13", label: "Estados con cobertura y enlace" },
];

const serviceCards = [
  {
    title: "Previsión familiar",
    copy: "Planes claros para proteger a tu familia y organizar cada detalle con tiempo.",
  },
  {
    title: "Traslados y logística",
    copy: "Coordinación sobria y puntual para que ningún paso importante quede sin atender.",
  },
  {
    title: "Capilla y despedida",
    copy: "Espacios tranquilos, cuidados y dignos para una ceremonia serena y respetuosa.",
  },
  {
    title: "Asesoría integral",
    copy: "Te guiamos en trámites, opciones y decisiones con una atención cercana y honesta.",
  },
];

const benefits = [
  {
    title: "Atención humana",
    copy: "Presencia inmediata y acompañamiento cercano para resolver lo urgente con serenidad.",
  },
  {
    title: "Planes accesibles",
    copy: "Opciones adaptadas al presupuesto sin perder dignidad, claridad ni calidad en el servicio.",
  },
  {
    title: "Orientación clara",
    copy: "Cada paso se explica con lenguaje sencillo para que la familia no cargue con dudas innecesarias.",
  },
  {
    title: "Cobertura coordinada",
    copy: "Acompañamiento nacional con enlace local para mantener orden en todo el proceso.",
  },
];

const locations = [
  "Ciudad de México",
  "Guadalajara",
  "Monterrey",
  "Puebla",
  "Querétaro",
  "León",
  "Mérida",
  "Tijuana",
];

function LogoMark() {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-black shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset]">
        <svg
          aria-hidden="true"
          viewBox="0 0 64 64"
          className="h-10 w-10 text-white"
          fill="none"
        >
          <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="1.5" opacity="0.35" />
          <path d="M31 14h4v8h7v4h-7v24h-4V26h-7v-4h7z" fill="currentColor" />
          <path d="M23 42c4 2 8 3 9 3s5-1 9-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
          <path d="M24 21c2-3 4-5 8-5s6 2 8 5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" opacity="0.4" />
        </svg>
      </div>
      <div>
        <p className="text-[0.7rem] uppercase tracking-[0.5em] text-white/55">Salmo 28</p>
        <p className="text-sm text-white/78">Funeraria y previsión familiar</p>
      </div>
    </div>
  );
}

function SectionTitle({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return (
    <div className="max-w-2xl space-y-4">
      <p className="text-xs uppercase tracking-[0.45em] text-rose-200/80">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">{title}</h2>
      <p className="max-w-xl text-sm leading-7 text-white/68 md:text-base">{copy}</p>
    </div>
  );
}

function BenefitCard({ title, copy }: { title: string; copy: string }) {
  return (
    <article className="rounded-[1.75rem] border border-white/8 bg-white/[0.04] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.18)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:border-rose-400/30">
      <div className="mb-5 h-12 w-12 rounded-2xl border border-rose-400/20 bg-rose-500/10 text-rose-100">
        <div className="flex h-full items-center justify-center text-xl">✦</div>
      </div>
      <h3 className="text-lg font-medium text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-white/64">{copy}</p>
    </article>
  );
}

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(120,16,26,0.38),_transparent_40%),linear-gradient(180deg,#090505_0%,#120608_52%,#080405_100%)] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:96px_96px] opacity-20" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-rose-600/10 blur-3xl" />

      <header className="relative z-10 border-b border-white/8 bg-black/20 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <LogoMark />
          <nav className="hidden items-center gap-8 text-sm text-white/72 md:flex">
            <a href="#servicios" className="transition hover:text-white">
              Servicios
            </a>
            <a href="#beneficios" className="transition hover:text-white">
              Beneficios
            </a>
            <a href="#sedes" className="transition hover:text-white">
              Cobertura
            </a>
            <a
              href="#contacto"
              className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-white transition hover:border-rose-300/40 hover:bg-rose-400/10"
            >
              Solicitar orientación
            </a>
          </nav>
        </div>
      </header>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-16 px-6 pb-20 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pb-28 lg:pt-20">
        <div className="flex flex-col justify-center">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-rose-400/25 bg-rose-500/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-rose-100/90">
            Atención sobria y cercana
          </div>
          <h1 className="mt-6 max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Salmo 28, una despedida digna para cuidar a los tuyos.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
            Una funeraria moderna, seria y humana. En Salmo 28 te acompañamos en previsión,
            organización y despedida con una estética sobria, claridad total y un trato que
            no pierde el respeto por lo esencial.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-full bg-rose-500 px-6 py-3.5 text-sm font-medium text-white shadow-[0_16px_40px_rgba(146,19,35,0.35)] transition hover:bg-rose-400"
            >
              Cotizar sin costo
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/5 px-6 py-3.5 text-sm font-medium text-white/88 transition hover:border-white/20 hover:bg-white/8"
            >
              Ver servicios
            </a>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-white/8 bg-white/[0.04] p-5">
                <p className="text-2xl font-semibold text-white">{stat.value}</p>
                <p className="mt-1 text-sm leading-6 text-white/62">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative lg:pl-8">
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-rose-500/20 via-transparent to-black blur-2xl" />
          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-6 shadow-[0_30px_120px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-white/45">Marca</p>
                <h2 className="mt-2 text-2xl font-semibold">Logo minimalista</h2>
              </div>
              <div className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs uppercase tracking-[0.3em] text-white/60">
                B/N
              </div>
            </div>

            <div className="mt-8 flex min-h-[20rem] items-center justify-center rounded-[1.75rem] border border-white/8 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_52%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(0,0,0,0.3))] p-8">
              <div className="text-center">
                <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-full border border-white/15 bg-black/70 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]">
                  <svg viewBox="0 0 140 140" className="h-24 w-24 text-white" fill="none" aria-hidden="true">
                    <circle cx="70" cy="70" r="56" stroke="currentColor" strokeWidth="2" opacity="0.34" />
                    <path d="M63 28h14v16h15v12H77v56H63V56H48V44h15z" fill="currentColor" />
                    <path d="M52 92c8 5 15 7 18 7s10-2 18-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.85" />
                    <path d="M56 38c3-4 7-6 14-6s11 2 14 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.45" />
                    <path d="M67 37l-7 16m14-16l-5 16m15-14l-8 15m13-8l-8 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.18" />
                  </svg>
                </div>
                <p className="mt-6 text-3xl font-semibold tracking-[0.28em] text-white">SALMO 28</p>
                <p className="mt-3 text-sm uppercase tracking-[0.4em] text-white/45">Fe, calma y dirección</p>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/8 bg-black/25 p-4 text-sm text-white/70">
                Cruz de madera estilizada y memoria serena.
              </div>
              <div className="rounded-2xl border border-white/8 bg-black/25 p-4 text-sm text-white/70">
                Comunicación directa, sobria y sin ruido visual.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="beneficios" className="relative z-10 mx-auto max-w-7xl px-6 py-8 lg:px-10 lg:py-12">
        <SectionTitle
          eyebrow="Confianza"
          title="Una marca pensada para transmitir calma desde el primer vistazo."
          copy="La experiencia se apoya en contraste, ritmo y jerarquía visual para que la información importante sea clara, cercana y fácil de recorrer."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((item) => (
            <BenefitCard key={item.title} title={item.title} copy={item.copy} />
          ))}
        </div>
      </section>

      <section id="servicios" className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr]">
          <SectionTitle
            eyebrow="Servicios"
            title="Cobertura integral para acompañar cada momento con orden y dignidad."
            copy="La estructura toma como referencia las landings de alto rendimiento: bloque de propuesta, tarjetas de beneficios, prueba social, y un cierre con conversión."
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {serviceCards.map((card) => (
              <article key={card.title} className="rounded-[1.7rem] border border-white/9 bg-white/[0.04] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.18)] transition duration-300 hover:border-rose-400/25 hover:bg-white/[0.06]">
                <div className="mb-8 flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full bg-rose-400 shadow-[0_0_18px_rgba(244,63,94,0.65)]" />
                  <span className="text-xs uppercase tracking-[0.35em] text-white/45">Salmo 28</span>
                </div>
                <h3 className="text-xl font-medium text-white">{card.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/64">{card.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-4 lg:px-10 lg:py-8">
        <div className="rounded-[2rem] border border-white/8 bg-white/[0.04] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.22)] lg:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-white/45">Cobertura</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">Presencia nacional con atención local.</h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-white/64">
              Como en la referencia visual, esta franja refuerza alcance y respaldo. Aquí se traduce a una cobertura sobria, clara y alineada con la identidad de Salmo 28.
            </p>
          </div>
          <div id="sedes" className="mt-6 flex flex-wrap gap-3">
            {locations.map((location) => (
              <span key={location} className="rounded-full border border-white/10 bg-black/25 px-4 py-2 text-sm text-white/78">
                {location}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr]">
          <div className="rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-8">
            <p className="text-xs uppercase tracking-[0.35em] text-rose-100/70">Nuestra esencia</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Fe, serenidad y una estética que honra lo importante.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/68">
              El concepto visual está pensado para sentirse serio y contemporáneo: fondo negro,
              acentos rojos, tipografía clara y un logo monocromático con cruz de madera. Es una
              lectura visual fuerte, pero contenida, para comunicar respeto sin caer en exceso.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ["Respeto", "Cada detalle comunica cuidado."],
                ["Claridad", "La información se entiende rápido."],
                ["Presencia", "La marca transmite solidez."],
              ].map(([title, copy]) => (
                <div key={title} className="rounded-2xl border border-white/8 bg-black/25 p-4">
                  <p className="font-medium text-white">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-white/60">{copy}</p>
                </div>
              ))}
            </div>
          </div>

          <div id="contacto" className="rounded-[2rem] border border-rose-400/20 bg-[linear-gradient(180deg,rgba(115,13,23,0.35),rgba(0,0,0,0.6))] p-8 shadow-[0_24px_100px_rgba(109,13,26,0.18)]">
            <p className="text-xs uppercase tracking-[0.35em] text-rose-100/70">Solicita información</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">Cuéntanos qué necesitas y te orientamos.</h2>
            <p className="mt-4 text-sm leading-7 text-white/66">
              El formulario es visual y funcional como cierre de landing, para que la página conserve la lógica de conversión del sitio de referencia.
            </p>

            <form className="mt-8 grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none ring-0 transition focus:border-rose-300/40" placeholder="Nombre y apellido" />
                <input className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none ring-0 transition focus:border-rose-300/40" placeholder="Teléfono" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <input className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none ring-0 transition focus:border-rose-300/40" placeholder="Correo electrónico" />
                <input className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none ring-0 transition focus:border-rose-300/40" placeholder="Estado" />
              </div>
              <textarea className="min-h-36 rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none ring-0 transition focus:border-rose-300/40" placeholder="Cuéntanos cómo podemos ayudarte" />
              <label className="flex items-start gap-3 text-sm leading-6 text-white/65">
                <input type="checkbox" className="mt-1 h-4 w-4 rounded border-white/20 bg-black/30 text-rose-500 focus:ring-rose-400" />
                Acepto ser contactado por Salmo 28 para recibir orientación sobre el servicio solicitado.
              </label>
              <button type="submit" className="rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black transition hover:bg-rose-100">
                Solicitar información sin costo
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/8 bg-black/20">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 text-sm text-white/50 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <p>Salmo 28. Una presencia sobria para acompañar con respeto.</p>
          
          <p>Proyecto final de la materia Ingeniería de software - Nava Cervantes Jose Manuel - 2970819</p>
          
        </div>
      </footer>
    </main>
  );
}
