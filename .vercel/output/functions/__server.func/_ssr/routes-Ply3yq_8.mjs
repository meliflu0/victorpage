import { r as __toESM } from "../_runtime.mjs";
import { t as hero_portrait_default } from "./hero-portrait-CEVmqiMU.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Ply3yq_8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var artist_default = "/assets/artist-3Ja7SwRU.jpg";
var work_1_default = "/assets/work-1-CAYCGJ9y.jpg";
var work_2_default = "/assets/work-2-CgNAdc5V.jpg";
var work_3_default = "/assets/work-3-C5T3dojM.jpg";
var work_4_default = "/assets/work-4-CQto6Cm8.jpg";
var work_5_default = "/assets/work-5-BHl5Vmmt.jpg";
var work_6_default = "/assets/work-6-uplD6NoB.jpg";
var work_7_default = "/assets/work-7-BY1IuyXy.jpg";
var work_8_default = "/assets/work-8-CE7rQ4LC.jpg";
var works = [
	{
		src: work_1_default,
		title: "Retrato Femenino",
		cat: "Retratos",
		zone: "Brazo",
		h: "tall"
	},
	{
		src: work_2_default,
		title: "León Realista",
		cat: "Black & Grey",
		zone: "Pecho",
		h: "short"
	},
	{
		src: work_3_default,
		title: "Manga Religiosa",
		cat: "Grandes Piezas",
		zone: "Manga completa",
		h: "xtall"
	},
	{
		src: work_4_default,
		title: "Ojo Hiperrealista",
		cat: "Retratos",
		zone: "Detalle",
		h: "short"
	},
	{
		src: work_5_default,
		title: "Rosa y Cráneo",
		cat: "Black & Grey",
		zone: "Antebrazo",
		h: "tall"
	},
	{
		src: work_6_default,
		title: "Composición Espalda",
		cat: "Black & Grey",
		zone: "Espalda",
		h: "tall"
	},
	{
		src: work_7_default,
		title: "Tigre Realismo Color",
		cat: "Realismo Color",
		zone: "Brazo",
		h: "tall"
	},
	{
		src: work_8_default,
		title: "Back Piece",
		cat: "Grandes Piezas",
		zone: "Espalda completa",
		h: "xtall"
	}
];
var categories = [
	"Todos",
	"Retratos",
	"Black & Grey",
	"Realismo Color",
	"Grandes Piezas"
];
function useReveal() {
	(0, import_react.useEffect)(() => {
		const els = document.querySelectorAll(".reveal");
		const io = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) {
					e.target.classList.add("reveal-in");
					io.unobserve(e.target);
				}
			});
		}, {
			threshold: .12,
			rootMargin: "0px 0px -60px 0px"
		});
		els.forEach((el) => io.observe(el));
		return () => io.disconnect();
	}, []);
}
function Counter({ to, suffix = "" }) {
	const [n, setN] = (0, import_react.useState)(0);
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) {
				const start = performance.now();
				const dur = 1800;
				const tick = (t) => {
					const p = Math.min((t - start) / dur, 1);
					const eased = 1 - Math.pow(1 - p, 3);
					setN(Math.floor(eased * to));
					if (p < 1) requestAnimationFrame(tick);
				};
				requestAnimationFrame(tick);
				io.disconnect();
			}
		}, { threshold: .5 });
		io.observe(el);
		return () => io.disconnect();
	}, [to]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		children: [n, suffix]
	});
}
function Index() {
	useReveal();
	const [filter, setFilter] = (0, import_react.useState)("Todos");
	const [openFaq, setOpenFaq] = (0, import_react.useState)(0);
	const [lightbox, setLightbox] = (0, import_react.useState)(null);
	const [navScrolled, setNavScrolled] = (0, import_react.useState)(false);
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setNavScrolled(window.scrollY > 40);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	const filtered = filter === "Todos" ? works : works.filter((w) => w.cat === filter);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground overflow-x-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navScrolled ? "bg-background/85 backdrop-blur-md border-b border-border/60 py-4" : "py-7"}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-6 flex items-center justify-between",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#top",
							className: "flex flex-col leading-none",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-2xl tracking-[0.18em] text-bone",
								children: "VICTOR"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow text-[0.55rem] mt-1",
								children: "Piedrahita · Tattoo"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "hidden lg:flex items-center gap-10",
							children: [
								["Inicio", "#top"],
								["Sobre mí", "#about"],
								["Especialidades", "#especialidades"],
								["Portfolio", "#portfolio"],
								["Proceso", "#proceso"],
								["Contacto", "#contacto"]
							].map(([l, h]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: h,
								className: "text-xs tracking-[0.22em] uppercase text-muted-foreground hover:text-bone transition-colors",
								children: l
							}, h))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#contacto",
							className: "hidden lg:inline-flex btn-ghost !py-3 !px-6 !text-[0.65rem]",
							children: "Reservar"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "lg:hidden text-bone p-2",
							onClick: () => setMenuOpen(!menuOpen),
							"aria-label": "Menú",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-6 h-px bg-bone mb-1.5" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-6 h-px bg-bone mb-1.5" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-4 h-px bg-bone ml-auto" })
							]
						})
					]
				}), menuOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-t border-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "flex flex-col px-6 py-6 gap-5",
						children: [
							["Inicio", "#top"],
							["Sobre mí", "#about"],
							["Especialidades", "#especialidades"],
							["Portfolio", "#portfolio"],
							["Proceso", "#proceso"],
							["Contacto", "#contacto"]
						].map(([l, h]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: h,
							onClick: () => setMenuOpen(false),
							className: "text-xs tracking-[0.22em] uppercase text-muted-foreground",
							children: l
						}, h))
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "top",
				className: "relative min-h-screen flex items-center overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute inset-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: hero_portrait_default,
								alt: "Retrato hiperrealista por Victor Piedrahita",
								className: "w-full h-full object-cover animate-kenburns",
								width: 1920,
								height: 1280
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-background/80 via-background/20 to-transparent" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-24 w-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-3xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-4 mb-8 reveal",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-12 h-px bg-silver" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "eyebrow",
										children: "Castelldefels · Barcelona"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "font-serif text-5xl sm:text-7xl lg:text-[6.5rem] leading-[0.95] tracking-tight text-bone mb-8 reveal text-balance",
									children: [
										"Retratos y tatuajes ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
											className: "font-serif italic text-silver",
											children: "realistas"
										}),
										" que cuentan historias."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-base sm:text-lg text-muted-foreground max-w-xl mb-12 leading-relaxed reveal",
									children: "Más de 14 años creando tatuajes de realismo y retrato con un nivel de detalle excepcional."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap gap-4 reveal",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#contacto",
										className: "btn-primary",
										children: "Reservar cita"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#portfolio",
										className: "btn-ghost",
										children: "Ver portfolio"
									})]
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow text-[0.6rem]",
							children: "Scroll"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-px h-12 bg-border relative overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-0 w-full h-4 bg-silver animate-scroll-down" })
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-24 lg:py-32 border-y border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-7xl px-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8",
						children: [
							{
								n: 14,
								s: "+",
								l: "Años de experiencia"
							},
							{
								n: 90,
								s: "K+",
								l: "Seguidores en Instagram"
							},
							{
								n: 500,
								s: "+",
								l: "Trabajos publicados"
							},
							{
								n: 100,
								s: "%",
								l: "Diseños personalizados"
							}
						].map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "reveal text-center lg:text-left border-l border-border lg:pl-8 pl-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-6xl lg:text-8xl text-bone mb-3 leading-none",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
									to: m.n,
									suffix: m.s
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "eyebrow",
								children: m.l
							})]
						}, i))
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "especialidades",
				className: "py-24 lg:py-40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-end justify-between flex-wrap gap-6 mb-20 reveal",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "eyebrow mb-4",
							children: "01 — Disciplinas"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-serif text-5xl lg:text-7xl text-bone tracking-tight",
							children: "Especialidades"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground max-w-md text-sm leading-relaxed",
							children: "Un lenguaje visual basado en el detalle, los contrastes profundos y la fidelidad a cada historia."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid md:grid-cols-3 gap-px bg-border",
						children: [
							{
								img: work_1_default,
								title: "Retratos",
								desc: "Captura expresiones, emociones y recuerdos con un nivel de realismo extraordinario."
							},
							{
								img: work_5_default,
								title: "Realismo Black & Grey",
								desc: "Sombras profundas, contrastes intensos y máxima definición."
							},
							{
								img: work_3_default,
								title: "Grandes Composiciones",
								desc: "Diseños complejos para pecho, espalda, mangas completas y proyectos de gran formato."
							}
						].map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "group relative bg-background reveal overflow-hidden",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "aspect-[4/5] overflow-hidden",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: c.img,
									alt: c.title,
									loading: "lazy",
									className: "w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[1200ms] ease-out"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute bottom-0 left-0 right-0 p-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "eyebrow mb-3",
										children: ["0", i + 1]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-serif text-3xl text-bone mb-3",
										children: c.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground leading-relaxed max-w-xs",
										children: c.desc
									})
								]
							})]
						}, i))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "portfolio",
				className: "py-24 lg:py-40 bg-card",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-center mb-16 reveal",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "eyebrow mb-4",
								children: "02 — Selección"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-serif text-5xl lg:text-7xl text-bone tracking-tight",
								children: "Trabajos destacados"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap justify-center gap-2 mb-12 reveal",
							children: categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setFilter(c),
								className: `px-5 py-2.5 text-[0.7rem] tracking-[0.22em] uppercase border transition-all ${filter === c ? "bg-bone text-ink border-bone" : "bg-transparent text-muted-foreground border-border hover:border-silver hover:text-bone"}`,
								children: c
							}, c))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]",
							children: filtered.map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setLightbox(works.indexOf(w)),
								className: "group relative block w-full mb-5 break-inside-avoid overflow-hidden reveal text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: w.src,
									alt: w.title,
									loading: "lazy",
									className: "w-full h-auto object-cover grayscale-[0.1] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1200ms] ease-out"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "eyebrow mb-2",
											children: w.cat
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-serif text-2xl text-bone",
											children: w.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs text-muted-foreground mt-1",
											children: w.zone
										})
									]
								})]
							}, w.src))
						})
					]
				})
			}),
			lightbox !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed inset-0 z-[100] bg-ink/95 backdrop-blur-xl flex items-center justify-center p-6 animate-in fade-in duration-300",
				onClick: () => setLightbox(null),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "absolute top-6 right-6 text-bone text-xs tracking-[0.22em] uppercase hover:text-silver",
						onClick: () => setLightbox(null),
						children: "Cerrar ✕"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "absolute left-6 top-1/2 -translate-y-1/2 text-bone text-3xl hover:text-silver z-10 p-4",
						onClick: (e) => {
							e.stopPropagation();
							setLightbox((lightbox - 1 + works.length) % works.length);
						},
						children: "‹"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "absolute right-6 top-1/2 -translate-y-1/2 text-bone text-3xl hover:text-silver z-10 p-4",
						onClick: (e) => {
							e.stopPropagation();
							setLightbox((lightbox + 1) % works.length);
						},
						children: "›"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-5xl w-full max-h-[85vh] flex flex-col items-center",
						onClick: (e) => e.stopPropagation(),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: works[lightbox].src,
							alt: works[lightbox].title,
							className: "max-h-[75vh] w-auto object-contain"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "eyebrow mb-2",
									children: works[lightbox].cat
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-serif text-2xl text-bone",
									children: works[lightbox].title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-sm text-muted-foreground mt-1",
									children: ["Zona: ", works[lightbox].zone]
								})
							]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "about",
				className: "py-24 lg:py-40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:col-span-5 reveal",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: artist_default,
								alt: "Victor Piedrahita",
								loading: "lazy",
								className: "w-full h-auto grayscale-[0.3]"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute -bottom-6 -right-6 bg-background border border-border p-6 hidden sm:block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "font-display text-5xl text-bone leading-none",
									children: ["14", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-silver",
										children: "+"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "eyebrow mt-2 text-[0.6rem]",
									children: "Años de oficio"
								})]
							})]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-7 reveal",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "eyebrow mb-5",
								children: "03 — Sobre Victor"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "font-serif text-4xl lg:text-6xl text-bone leading-[1.05] mb-8 text-balance",
								children: [
									"Más de 14 años transformando ideas en ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
										className: "italic text-silver",
										children: "arte"
									}),
									"."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hairline w-24 mb-8" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-5 text-muted-foreground leading-relaxed",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Victor Piedrahita es un artista especializado en retratos y realismo con base en Castelldefels, Barcelona. Su trabajo se caracteriza por la precisión técnica, el nivel de detalle y la capacidad de convertir historias personales en piezas únicas." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A lo largo de su trayectoria ha desarrollado un estilo reconocible basado en contrastes profundos, texturas realistas y composiciones con gran impacto visual." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-bone",
										children: "Cada proyecto se diseña de forma personalizada para asegurar que cada tatuaje tenga significado, personalidad y una ejecución impecable."
									})
								]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "py-24 lg:py-40 bg-ink relative overflow-hidden border-y border-border",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 opacity-[0.04]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: work_8_default,
						alt: "",
						className: "w-full h-full object-cover"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto max-w-5xl px-6 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "eyebrow mb-6 reveal",
							children: "Filosofía"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-serif text-5xl lg:text-8xl text-bone leading-[0.95] mb-16 reveal text-balance",
							children: [
								"Cada tatuaje tiene una ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
									className: "italic text-silver",
									children: "historia"
								}),
								"."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-border reveal",
							children: [
								"Diseño personalizado",
								"Atención individual",
								"Máximo detalle",
								"Compromiso con la calidad",
								"Experiencia profesional"
							].map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-ink py-10 px-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "font-display text-2xl text-silver mb-3",
									children: ["0", i + 1]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm text-bone leading-snug",
									children: p
								})]
							}, i))
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "proceso",
				className: "py-24 lg:py-40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center mb-20 reveal",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "eyebrow mb-4",
							children: "04 — Cómo trabajo"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-serif text-5xl lg:text-7xl text-bone tracking-tight",
							children: "El proceso"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border",
						children: [
							["Consulta inicial", "Hablamos de tu idea, referencias y expectativas."],
							["Definición de idea", "Trabajamos el concepto: estilo, zona y dimensiones."],
							["Diseño personalizado", "Bocetos exclusivos pensados para ti, nunca repetidos."],
							["Reserva y planificación", "Fijamos fecha, duración estimada y presupuesto cerrado."],
							["Sesión de tatuaje", "Ejecución en estudio profesional con material esterilizado."],
							["Cuidados posteriores", "Te guío en el proceso de curación para un resultado impecable."]
						].map(([t, d], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-background p-10 reveal group hover:bg-card transition-colors duration-500",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-baseline gap-5 mb-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-5xl text-silver group-hover:text-bone transition-colors",
										children: String(i + 1).padStart(2, "0")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px flex-1 bg-border" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-serif text-2xl text-bone mb-3",
									children: t
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground leading-relaxed",
									children: d
								})
							]
						}, i))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-24 lg:py-40 bg-card",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center mb-20 reveal",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "eyebrow mb-4",
							children: "05 — Confianza"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-serif text-5xl lg:text-7xl text-bone tracking-tight",
							children: "Lo que dicen"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid md:grid-cols-3 gap-6",
						children: [
							{
								n: "Laura M.",
								t: "Le confié el retrato de mi padre y el resultado fue sobrecogedor. Detalle, paciencia y arte puro."
							},
							{
								n: "Daniel R.",
								t: "Llevo años queriendo una manga realista y Victor superó todas mis expectativas. Estudio impecable."
							},
							{
								n: "Andrea P.",
								t: "Profesional de principio a fin. El boceto, la sesión, los cuidados… todo cuidado al milímetro."
							}
						].map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border border-border p-10 reveal hover:border-silver transition-colors duration-500",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-serif text-silver text-5xl leading-none mb-4",
									children: "\""
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-bone leading-relaxed mb-8 text-balance",
									children: r.t
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-sm text-bone",
										children: r.n
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "eyebrow text-[0.6rem] mt-1",
										children: "Cliente verificado"
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-silver tracking-widest text-sm",
										children: "★★★★★"
									})]
								})
							]
						}, i))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-24 lg:py-32 border-t border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-end justify-between flex-wrap gap-6 mb-12 reveal",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "eyebrow mb-4",
								children: "06 — Instagram"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-serif text-4xl lg:text-6xl text-bone tracking-tight",
								children: "Sígueme"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-silver text-sm mt-3 tracking-wide",
								children: "@victorpiedrahitatattoo"
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://instagram.com/victorpiedrahitatattoo",
							target: "_blank",
							rel: "noreferrer",
							className: "btn-ghost",
							children: "Ver perfil completo"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 md:grid-cols-4 gap-2",
						children: [
							work_2_default,
							work_4_default,
							work_7_default,
							work_5_default,
							work_1_default,
							work_6_default,
							work_8_default,
							work_3_default
						].map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "https://instagram.com/victorpiedrahitatattoo",
							target: "_blank",
							rel: "noreferrer",
							className: "group relative aspect-square overflow-hidden reveal",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src,
								alt: "",
								loading: "lazy",
								className: "w-full h-full object-cover grayscale-[0.1] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-0 bg-ink/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "eyebrow text-bone",
									children: "@victorpiedrahitatattoo"
								})
							})]
						}, i))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-24 lg:py-40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-4xl px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center mb-20 reveal",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "eyebrow mb-4",
							children: "07 — FAQ"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-serif text-5xl lg:text-7xl text-bone tracking-tight",
							children: "Dudas frecuentes"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "divide-y divide-border border-y border-border",
						children: [
							["¿Cómo puedo reservar?", "Rellena el formulario de contacto con tu idea, zona y referencias. Te responderé personalmente para concretar diseño, fecha y presupuesto."],
							["¿Cuánto cuesta un tatuaje?", "Cada proyecto es único. El precio depende del tamaño, zona, nivel de detalle y duración estimada. Tras la valoración recibirás un presupuesto cerrado."],
							["¿Qué estilos realizas?", "Estoy especializado en retratos hiperrealistas, realismo black & grey, realismo a color y grandes composiciones."],
							["¿Cuánto tarda una sesión?", "Las sesiones suelen durar entre 3 y 7 horas. Los proyectos grandes se dividen en varias sesiones para garantizar calidad y comodidad."],
							["¿Cómo debo cuidar mi tatuaje?", "Recibirás instrucciones detalladas y seguimiento durante todo el proceso de curación para asegurar un resultado impecable."],
							["¿Trabajas únicamente con cita previa?", "Sí. Trabajo exclusivamente con cita previa para garantizar atención personalizada y un diseño cuidadosamente desarrollado."]
						].map(([q, a], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "reveal",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setOpenFaq(openFaq === i ? null : i),
								className: "w-full flex items-center justify-between py-7 text-left group",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-serif text-xl lg:text-2xl text-bone pr-6",
									children: q
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `text-silver text-2xl transition-transform duration-500 ${openFaq === i ? "rotate-45" : ""}`,
									children: "+"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `grid transition-all duration-500 ${openFaq === i ? "grid-rows-[1fr] pb-7" : "grid-rows-[0fr]"}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "overflow-hidden",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-muted-foreground leading-relaxed max-w-2xl",
										children: a
									})
								})
							})]
						}, i))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "contacto",
				className: "py-24 lg:py-40 bg-ink border-t border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-6xl px-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid lg:grid-cols-12 gap-16",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-5 reveal",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "eyebrow mb-4",
									children: "08 — Contacto"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "font-serif text-5xl lg:text-7xl text-bone leading-[0.95] mb-6 text-balance",
									children: [
										"Reserva tu ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
											className: "italic text-silver",
											children: "cita"
										}),
										"."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground leading-relaxed mb-10 max-w-md",
									children: "Cuéntame tu idea y empecemos a crear algo único."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-6 border-t border-border pt-10",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "eyebrow mb-2 text-[0.6rem]",
											children: "Estudio"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-bone",
											children: "Castelldefels · Barcelona"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "eyebrow mb-2 text-[0.6rem]",
											children: "Instagram"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "https://instagram.com/victorpiedrahitatattoo",
											className: "text-bone hover:text-silver transition-colors",
											children: "@victorpiedrahitatattoo"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "eyebrow mb-2 text-[0.6rem]",
											children: "Solo con cita previa"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-muted-foreground text-sm",
											children: "Respuesta en 24–48h"
										})] })
									]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							className: "lg:col-span-7 space-y-6 reveal",
							onSubmit: (e) => {
								e.preventDefault();
								alert("Gracias. Te responderé en breve.");
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid sm:grid-cols-2 gap-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "Nombre",
											name: "name",
											required: true
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "Email",
											name: "email",
											type: "email",
											required: true
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "Teléfono",
											name: "phone",
											type: "tel"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "Instagram",
											name: "ig",
											placeholder: "@usuario"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "Zona del cuerpo",
											name: "zone"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "Tamaño aproximado",
											name: "size"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Presupuesto aproximado",
									name: "budget"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "eyebrow block mb-3",
									children: "Descripción de la idea"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									name: "idea",
									rows: 5,
									required: true,
									className: "w-full bg-transparent border-b border-border focus:border-bone outline-none py-3 text-bone placeholder:text-muted-foreground/50 transition-colors resize-none",
									placeholder: "Cuéntame qué te gustaría tatuar, referencias, significado…"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "eyebrow block mb-3",
									children: "Adjuntar imágenes (opcional)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "file",
									multiple: true,
									accept: "image/*",
									className: "w-full text-xs text-muted-foreground file:mr-4 file:py-2 file:px-4 file:border file:border-border file:bg-transparent file:text-bone file:text-[0.65rem] file:tracking-[0.22em] file:uppercase hover:file:border-silver"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap gap-4 pt-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "submit",
										className: "btn-primary",
										children: "Solicitar valoración"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "https://instagram.com/victorpiedrahitatattoo",
										target: "_blank",
										rel: "noreferrer",
										className: "btn-ghost",
										children: "Escribir por Instagram"
									})]
								})
							]
						})]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "py-16 border-t border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid md:grid-cols-3 gap-10 mb-12",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-display text-3xl tracking-[0.18em] text-bone mb-2",
										children: "VICTOR PIEDRAHITA"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "eyebrow text-[0.6rem]",
										children: "Especialista en retratos y realismo"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-muted-foreground text-sm mt-4",
										children: "Castelldefels · Barcelona"
									})
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "eyebrow mb-4 text-[0.6rem]",
									children: "Navegación"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "space-y-2 text-sm",
									children: [
										["Inicio", "#top"],
										["Sobre mí", "#about"],
										["Portfolio", "#portfolio"],
										["Proceso", "#proceso"],
										["Contacto", "#contacto"]
									].map(([l, h]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: h,
										className: "text-muted-foreground hover:text-bone transition-colors",
										children: l
									}) }, h))
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "eyebrow mb-4 text-[0.6rem]",
										children: "Conecta"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "https://instagram.com/victorpiedrahitatattoo",
										className: "text-bone hover:text-silver transition-colors text-sm block mb-2",
										children: "@victorpiedrahitatattoo"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-muted-foreground text-sm",
										children: "Solo con cita previa"
									})
								] })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hairline mb-6 opacity-30" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between items-center flex-wrap gap-4 text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								"© ",
								(/* @__PURE__ */ new Date()).getFullYear(),
								" Victor Piedrahita Tattoo. Todos los derechos reservados."
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "eyebrow text-[0.6rem]",
								children: "Castelldefels · Barcelona · España"
							})]
						})
					]
				})
			})
		]
	});
}
function Field({ label, name, type = "text", required, placeholder }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "eyebrow block mb-3",
		children: [label, required && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-silver",
			children: " *"
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		name,
		required,
		placeholder,
		className: "w-full bg-transparent border-b border-border focus:border-bone outline-none py-3 text-bone placeholder:text-muted-foreground/50 transition-colors"
	})] });
}
//#endregion
export { Index as component };
