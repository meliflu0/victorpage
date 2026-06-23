import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import heroImg from "@/assets/hero-portrait.jpg";
import artistImg from "@/assets/artist.jpg";
import w1 from "@/assets/work-1.jpg";
import w2 from "@/assets/work-2.jpg";
import w3 from "@/assets/work-3.jpg";
import w4 from "@/assets/work-4.jpg";
import w5 from "@/assets/work-5.jpg";
import w6 from "@/assets/work-6.jpg";
import w7 from "@/assets/work-7.jpg";
import w8 from "@/assets/work-8.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Victor Piedrahita — Tatuajes Realistas y Retratos · Castelldefels, Barcelona" },
      { name: "description", content: "Especialista en retratos hiperrealistas y realismo black & grey. Más de 14 años creando tatuajes con un nivel de detalle excepcional en Castelldefels, Barcelona." },
      { property: "og:title", content: "Victor Piedrahita Tattoo" },
      { property: "og:description", content: "Retratos y tatuajes realistas que cuentan historias." },
      { property: "og:image", content: heroImg },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Victor Piedrahita Tattoo",
        image: heroImg,
        description: "Tatuador especialista en retratos y realismo black & grey en Castelldefels, Barcelona.",
        address: { "@type": "PostalAddress", addressLocality: "Castelldefels", addressRegion: "Barcelona", addressCountry: "ES" },
        priceRange: "€€€",
        sameAs: ["https://instagram.com/victorpiedrahitatattoo"],
      }),
    }],
  }),
  component: Index,
});

const works = [
  { src: w1, title: "Retrato Femenino", cat: "Retratos", zone: "Brazo", h: "tall" },
  { src: w2, title: "León Realista", cat: "Black & Grey", zone: "Pecho", h: "short" },
  { src: w3, title: "Manga Religiosa", cat: "Grandes Piezas", zone: "Manga completa", h: "xtall" },
  { src: w4, title: "Ojo Hiperrealista", cat: "Retratos", zone: "Detalle", h: "short" },
  { src: w5, title: "Rosa y Cráneo", cat: "Black & Grey", zone: "Antebrazo", h: "tall" },
  { src: w6, title: "Composición Espalda", cat: "Black & Grey", zone: "Espalda", h: "tall" },
  { src: w7, title: "Tigre Realismo Color", cat: "Realismo Color", zone: "Brazo", h: "tall" },
  { src: w8, title: "Back Piece", cat: "Grandes Piezas", zone: "Espalda completa", h: "xtall" },
];

const categories = ["Todos", "Retratos", "Black & Grey", "Realismo Color", "Grandes Piezas"];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("reveal-in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const start = performance.now();
        const dur = 1800;
        const tick = (t: number) => {
          const p = Math.min((t - start) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setN(Math.floor(eased * to));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.disconnect();
      }
    }, { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return <span ref={ref}>{n}{suffix}</span>;
}

function Index() {
  useReveal();
  const [filter, setFilter] = useState("Todos");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [navScrolled, setNavScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const filtered = filter === "Todos" ? works : works.filter((w) => w.cat === filter);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          navScrolled ? "bg-background/85 backdrop-blur-md border-b border-border/60 py-4" : "py-7"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
          <a href="#top" className="flex flex-col leading-none">
            <span className="font-display text-2xl tracking-[0.18em] text-bone">VICTOR</span>
            <span className="eyebrow text-[0.55rem] mt-1">Piedrahita · Tattoo</span>
          </a>
          <nav className="hidden lg:flex items-center gap-10">
            {[
              ["Inicio", "#top"],
              ["Sobre mí", "#about"],
              ["Especialidades", "#especialidades"],
              ["Portfolio", "#portfolio"],
              ["Proceso", "#proceso"],
              ["Contacto", "#contacto"],
            ].map(([l, h]) => (
              <a key={h} href={h} className="text-xs tracking-[0.22em] uppercase text-muted-foreground hover:text-bone transition-colors">
                {l}
              </a>
            ))}
          </nav>
          <a href="#contacto" className="hidden lg:inline-flex btn-ghost !py-3 !px-6 !text-[0.65rem]">
            Reservar
          </a>
          <button
            className="lg:hidden text-bone p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
          >
            <div className="w-6 h-px bg-bone mb-1.5" />
            <div className="w-6 h-px bg-bone mb-1.5" />
            <div className="w-4 h-px bg-bone ml-auto" />
          </button>
        </div>
        {menuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-t border-border">
            <nav className="flex flex-col px-6 py-6 gap-5">
              {[["Inicio", "#top"], ["Sobre mí", "#about"], ["Especialidades", "#especialidades"], ["Portfolio", "#portfolio"], ["Proceso", "#proceso"], ["Contacto", "#contacto"]].map(([l, h]) => (
                <a key={h} href={h} onClick={() => setMenuOpen(false)} className="text-xs tracking-[0.22em] uppercase text-muted-foreground">
                  {l}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Retrato hiperrealista por Victor Piedrahita"
            className="w-full h-full object-cover animate-kenburns"
            width={1920}
            height={1280}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/20 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-24 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-8 reveal">
              <div className="w-12 h-px bg-silver" />
              <span className="eyebrow">Castelldefels · Barcelona</span>
            </div>
            <h1 className="font-serif text-5xl sm:text-7xl lg:text-[6.5rem] leading-[0.95] tracking-tight text-bone mb-8 reveal text-balance">
              Retratos y tatuajes <em className="font-serif italic text-silver">realistas</em> que cuentan historias.
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mb-12 leading-relaxed reveal">
              Más de 14 años creando tatuajes de realismo y retrato con un nivel de detalle excepcional.
            </p>
            <div className="flex flex-wrap gap-4 reveal">
              <a href="#contacto" className="btn-primary">Reservar cita</a>
              <a href="#portfolio" className="btn-ghost">Ver portfolio</a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
          <span className="eyebrow text-[0.6rem]">Scroll</span>
          <div className="w-px h-12 bg-border relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-4 bg-silver animate-scroll-down" />
          </div>
        </div>
      </section>

      {/* AUTORIDAD */}
      <section className="py-24 lg:py-32 border-y border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {[
              { n: 14, s: "+", l: "Años de experiencia" },
              { n: 90, s: "K+", l: "Seguidores en Instagram" },
              { n: 500, s: "+", l: "Trabajos publicados" },
              { n: 100, s: "%", l: "Diseños personalizados" },
            ].map((m, i) => (
              <div key={i} className="reveal text-center lg:text-left border-l border-border lg:pl-8 pl-4">
                <div className="font-display text-6xl lg:text-8xl text-bone mb-3 leading-none">
                  <Counter to={m.n} suffix={m.s} />
                </div>
                <div className="eyebrow">{m.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ESPECIALIDADES */}
      <section id="especialidades" className="py-24 lg:py-40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-20 reveal">
            <div>
              <div className="eyebrow mb-4">01 — Disciplinas</div>
              <h2 className="font-serif text-5xl lg:text-7xl text-bone tracking-tight">Especialidades</h2>
            </div>
            <p className="text-muted-foreground max-w-md text-sm leading-relaxed">
              Un lenguaje visual basado en el detalle, los contrastes profundos y la fidelidad a cada historia.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-border">
            {[
              { img: w1, title: "Retratos", desc: "Captura expresiones, emociones y recuerdos con un nivel de realismo extraordinario." },
              { img: w5, title: "Realismo Black & Grey", desc: "Sombras profundas, contrastes intensos y máxima definición." },
              { img: w3, title: "Grandes Composiciones", desc: "Diseños complejos para pecho, espalda, mangas completas y proyectos de gran formato." },
            ].map((c, i) => (
              <article key={i} className="group relative bg-background reveal overflow-hidden">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.title}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[1200ms] ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="eyebrow mb-3">0{i + 1}</div>
                  <h3 className="font-serif text-3xl text-bone mb-3">{c.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">{c.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GALERÍA DESTACADA - masonry */}
      <section id="portfolio" className="py-24 lg:py-40 bg-card">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16 reveal">
            <div className="eyebrow mb-4">02 — Selección</div>
            <h2 className="font-serif text-5xl lg:text-7xl text-bone tracking-tight">Trabajos destacados</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-12 reveal">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-5 py-2.5 text-[0.7rem] tracking-[0.22em] uppercase border transition-all ${
                  filter === c
                    ? "bg-bone text-ink border-bone"
                    : "bg-transparent text-muted-foreground border-border hover:border-silver hover:text-bone"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
            {filtered.map((w, i) => (
              <button
                key={w.src}
                onClick={() => setLightbox(works.indexOf(w))}
                className="group relative block w-full mb-5 break-inside-avoid overflow-hidden reveal text-left"
              >
                <img
                  src={w.src}
                  alt={w.title}
                  loading="lazy"
                  className="w-full h-auto object-cover grayscale-[0.1] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1200ms] ease-out"
                />
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <div className="eyebrow mb-2">{w.cat}</div>
                  <div className="font-serif text-2xl text-bone">{w.title}</div>
                  <div className="text-xs text-muted-foreground mt-1">{w.zone}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-ink/95 backdrop-blur-xl flex items-center justify-center p-6 animate-in fade-in duration-300"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-bone text-xs tracking-[0.22em] uppercase hover:text-silver"
            onClick={() => setLightbox(null)}
          >
            Cerrar ✕
          </button>
          <button
            className="absolute left-6 top-1/2 -translate-y-1/2 text-bone text-3xl hover:text-silver z-10 p-4"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + works.length) % works.length); }}
          >‹</button>
          <button
            className="absolute right-6 top-1/2 -translate-y-1/2 text-bone text-3xl hover:text-silver z-10 p-4"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % works.length); }}
          >›</button>
          <div className="max-w-5xl w-full max-h-[85vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img src={works[lightbox].src} alt={works[lightbox].title} className="max-h-[75vh] w-auto object-contain" />
            <div className="mt-6 text-center">
              <div className="eyebrow mb-2">{works[lightbox].cat}</div>
              <div className="font-serif text-2xl text-bone">{works[lightbox].title}</div>
              <div className="text-sm text-muted-foreground mt-1">Zona: {works[lightbox].zone}</div>
            </div>
          </div>
        </div>
      )}

      {/* SOBRE VICTOR */}
      <section id="about" className="py-24 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-5 reveal">
            <div className="relative">
              <img src={artistImg} alt="Victor Piedrahita" loading="lazy" className="w-full h-auto grayscale-[0.3]" />
              <div className="absolute -bottom-6 -right-6 bg-background border border-border p-6 hidden sm:block">
                <div className="font-display text-5xl text-bone leading-none">14<span className="text-silver">+</span></div>
                <div className="eyebrow mt-2 text-[0.6rem]">Años de oficio</div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 reveal">
            <div className="eyebrow mb-5">03 — Sobre Victor</div>
            <h2 className="font-serif text-4xl lg:text-6xl text-bone leading-[1.05] mb-8 text-balance">
              Más de 14 años transformando ideas en <em className="italic text-silver">arte</em>.
            </h2>
            <div className="hairline w-24 mb-8" />
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Victor Piedrahita es un artista especializado en retratos y realismo con base en Castelldefels, Barcelona. Su trabajo se caracteriza por la precisión técnica, el nivel de detalle y la capacidad de convertir historias personales en piezas únicas.
              </p>
              <p>
                A lo largo de su trayectoria ha desarrollado un estilo reconocible basado en contrastes profundos, texturas realistas y composiciones con gran impacto visual.
              </p>
              <p className="text-bone">
                Cada proyecto se diseña de forma personalizada para asegurar que cada tatuaje tenga significado, personalidad y una ejecución impecable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FILOSOFÍA */}
      <section className="py-24 lg:py-40 bg-ink relative overflow-hidden border-y border-border">
        <div className="absolute inset-0 opacity-[0.04]">
          <img src={w8} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <div className="eyebrow mb-6 reveal">Filosofía</div>
          <h2 className="font-serif text-5xl lg:text-8xl text-bone leading-[0.95] mb-16 reveal text-balance">
            Cada tatuaje tiene una <em className="italic text-silver">historia</em>.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-border reveal">
            {["Diseño personalizado", "Atención individual", "Máximo detalle", "Compromiso con la calidad", "Experiencia profesional"].map((p, i) => (
              <div key={i} className="bg-ink py-10 px-6">
                <div className="font-display text-2xl text-silver mb-3">0{i + 1}</div>
                <div className="text-sm text-bone leading-snug">{p}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section id="proceso" className="py-24 lg:py-40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-20 reveal">
            <div className="eyebrow mb-4">04 — Cómo trabajo</div>
            <h2 className="font-serif text-5xl lg:text-7xl text-bone tracking-tight">El proceso</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {[
              ["Consulta inicial", "Hablamos de tu idea, referencias y expectativas."],
              ["Definición de idea", "Trabajamos el concepto: estilo, zona y dimensiones."],
              ["Diseño personalizado", "Bocetos exclusivos pensados para ti, nunca repetidos."],
              ["Reserva y planificación", "Fijamos fecha, duración estimada y presupuesto cerrado."],
              ["Sesión de tatuaje", "Ejecución en estudio profesional con material esterilizado."],
              ["Cuidados posteriores", "Te guío en el proceso de curación para un resultado impecable."],
            ].map(([t, d], i) => (
              <div key={i} className="bg-background p-10 reveal group hover:bg-card transition-colors duration-500">
                <div className="flex items-baseline gap-5 mb-6">
                  <span className="font-display text-5xl text-silver group-hover:text-bone transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="h-px flex-1 bg-border" />
                </div>
                <h3 className="font-serif text-2xl text-bone mb-3">{t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="py-24 lg:py-40 bg-card">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-20 reveal">
            <div className="eyebrow mb-4">05 — Confianza</div>
            <h2 className="font-serif text-5xl lg:text-7xl text-bone tracking-tight">Lo que dicen</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { n: "Laura M.", t: "Le confié el retrato de mi padre y el resultado fue sobrecogedor. Detalle, paciencia y arte puro." },
              { n: "Daniel R.", t: "Llevo años queriendo una manga realista y Victor superó todas mis expectativas. Estudio impecable." },
              { n: "Andrea P.", t: "Profesional de principio a fin. El boceto, la sesión, los cuidados… todo cuidado al milímetro." },
            ].map((r, i) => (
              <div key={i} className="border border-border p-10 reveal hover:border-silver transition-colors duration-500">
                <div className="font-serif text-silver text-5xl leading-none mb-4">"</div>
                <p className="text-bone leading-relaxed mb-8 text-balance">{r.t}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-bone">{r.n}</div>
                    <div className="eyebrow text-[0.6rem] mt-1">Cliente verificado</div>
                  </div>
                  <div className="text-silver tracking-widest text-sm">★★★★★</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="py-24 lg:py-32 border-t border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-12 reveal">
            <div>
              <div className="eyebrow mb-4">06 — Instagram</div>
              <h2 className="font-serif text-4xl lg:text-6xl text-bone tracking-tight">Sígueme</h2>
              <div className="text-silver text-sm mt-3 tracking-wide">@victorpiedrahitatattoo</div>
            </div>
            <a
              href="https://instagram.com/victorpiedrahitatattoo"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              Ver perfil completo
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {[w2, w4, w7, w5, w1, w6, w8, w3].map((src, i) => (
              <a
                key={i}
                href="https://instagram.com/victorpiedrahitatattoo"
                target="_blank"
                rel="noreferrer"
                className="group relative aspect-square overflow-hidden reveal"
              >
                <img src={src} alt="" loading="lazy" className="w-full h-full object-cover grayscale-[0.1] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
                <div className="absolute inset-0 bg-ink/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="eyebrow text-bone">@victorpiedrahitatattoo</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-40">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-20 reveal">
            <div className="eyebrow mb-4">07 — FAQ</div>
            <h2 className="font-serif text-5xl lg:text-7xl text-bone tracking-tight">Dudas frecuentes</h2>
          </div>
          <div className="divide-y divide-border border-y border-border">
            {[
              ["¿Cómo puedo reservar?", "Rellena el formulario de contacto con tu idea, zona y referencias. Te responderé personalmente para concretar diseño, fecha y presupuesto."],
              ["¿Cuánto cuesta un tatuaje?", "Cada proyecto es único. El precio depende del tamaño, zona, nivel de detalle y duración estimada. Tras la valoración recibirás un presupuesto cerrado."],
              ["¿Qué estilos realizas?", "Estoy especializado en retratos hiperrealistas, realismo black & grey, realismo a color y grandes composiciones."],
              ["¿Cuánto tarda una sesión?", "Las sesiones suelen durar entre 3 y 7 horas. Los proyectos grandes se dividen en varias sesiones para garantizar calidad y comodidad."],
              ["¿Cómo debo cuidar mi tatuaje?", "Recibirás instrucciones detalladas y seguimiento durante todo el proceso de curación para asegurar un resultado impecable."],
              ["¿Trabajas únicamente con cita previa?", "Sí. Trabajo exclusivamente con cita previa para garantizar atención personalizada y un diseño cuidadosamente desarrollado."],
            ].map(([q, a], i) => (
              <div key={i} className="reveal">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between py-7 text-left group"
                >
                  <span className="font-serif text-xl lg:text-2xl text-bone pr-6">{q}</span>
                  <span className={`text-silver text-2xl transition-transform duration-500 ${openFaq === i ? "rotate-45" : ""}`}>+</span>
                </button>
                <div className={`grid transition-all duration-500 ${openFaq === i ? "grid-rows-[1fr] pb-7" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <p className="text-muted-foreground leading-relaxed max-w-2xl">{a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-24 lg:py-40 bg-ink border-t border-border">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5 reveal">
              <div className="eyebrow mb-4">08 — Contacto</div>
              <h2 className="font-serif text-5xl lg:text-7xl text-bone leading-[0.95] mb-6 text-balance">
                Reserva tu <em className="italic text-silver">cita</em>.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-10 max-w-md">
                Cuéntame tu idea y empecemos a crear algo único.
              </p>
              <div className="space-y-6 border-t border-border pt-10">
                <div>
                  <div className="eyebrow mb-2 text-[0.6rem]">Estudio</div>
                  <div className="text-bone">Castelldefels · Barcelona</div>
                </div>
                <div>
                  <div className="eyebrow mb-2 text-[0.6rem]">Instagram</div>
                  <a href="https://instagram.com/victorpiedrahitatattoo" className="text-bone hover:text-silver transition-colors">
                    @victorpiedrahitatattoo
                  </a>
                </div>
                <div>
                  <div className="eyebrow mb-2 text-[0.6rem]">Solo con cita previa</div>
                  <div className="text-muted-foreground text-sm">Respuesta en 24–48h</div>
                </div>
              </div>
            </div>

            <form
              className="lg:col-span-7 space-y-6 reveal"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Gracias. Te responderé en breve.");
              }}
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <Field label="Nombre" name="name" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Teléfono" name="phone" type="tel" />
                <Field label="Instagram" name="ig" placeholder="@usuario" />
                <Field label="Zona del cuerpo" name="zone" />
                <Field label="Tamaño aproximado" name="size" />
              </div>
              <Field label="Presupuesto aproximado" name="budget" />
              <div>
                <label className="eyebrow block mb-3">Descripción de la idea</label>
                <textarea
                  name="idea"
                  rows={5}
                  required
                  className="w-full bg-transparent border-b border-border focus:border-bone outline-none py-3 text-bone placeholder:text-muted-foreground/50 transition-colors resize-none"
                  placeholder="Cuéntame qué te gustaría tatuar, referencias, significado…"
                />
              </div>
              <div>
                <label className="eyebrow block mb-3">Adjuntar imágenes (opcional)</label>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  className="w-full text-xs text-muted-foreground file:mr-4 file:py-2 file:px-4 file:border file:border-border file:bg-transparent file:text-bone file:text-[0.65rem] file:tracking-[0.22em] file:uppercase hover:file:border-silver"
                />
              </div>
              <div className="flex flex-wrap gap-4 pt-6">
                <button type="submit" className="btn-primary">Solicitar valoración</button>
                <a
                  href="https://instagram.com/victorpiedrahitatattoo"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost"
                >
                  Escribir por Instagram
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 border-t border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-3 gap-10 mb-12">
            <div>
              <div className="font-display text-3xl tracking-[0.18em] text-bone mb-2">VICTOR PIEDRAHITA</div>
              <div className="eyebrow text-[0.6rem]">Especialista en retratos y realismo</div>
              <div className="text-muted-foreground text-sm mt-4">Castelldefels · Barcelona</div>
            </div>
            <div>
              <div className="eyebrow mb-4 text-[0.6rem]">Navegación</div>
              <ul className="space-y-2 text-sm">
                {[["Inicio", "#top"], ["Sobre mí", "#about"], ["Portfolio", "#portfolio"], ["Proceso", "#proceso"], ["Contacto", "#contacto"]].map(([l, h]) => (
                  <li key={h}><a href={h} className="text-muted-foreground hover:text-bone transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <div className="eyebrow mb-4 text-[0.6rem]">Conecta</div>
              <a href="https://instagram.com/victorpiedrahitatattoo" className="text-bone hover:text-silver transition-colors text-sm block mb-2">
                @victorpiedrahitatattoo
              </a>
              <div className="text-muted-foreground text-sm">Solo con cita previa</div>
            </div>
          </div>
          <div className="hairline mb-6 opacity-30" />
          <div className="flex justify-between items-center flex-wrap gap-4 text-xs text-muted-foreground">
            <div>© {new Date().getFullYear()} Victor Piedrahita Tattoo. Todos los derechos reservados.</div>
            <div className="eyebrow text-[0.6rem]">Castelldefels · Barcelona · España</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Field({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label className="eyebrow block mb-3">{label}{required && <span className="text-silver"> *</span>}</label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-border focus:border-bone outline-none py-3 text-bone placeholder:text-muted-foreground/50 transition-colors"
      />
    </div>
  );
}
