import { a as createComponent, m as maybeRenderHead, b as renderTemplate, c as createAstro, d as addAttribute, r as renderComponent } from '../chunks/astro/server_UUQtL_eQ.mjs';
import 'kleur/colors';
import { c as contact, R as ResultSlider, a as getCollection, $ as $$Layout, b as $$Navbar, d as $$ContactForm, e as $$Footer } from '../chunks/Footer_BeK1ws8k.mjs';
import 'clsx';
/* empty css                                 */
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="hero" class="relative overflow-hidden" aria-label="Hero - Clínica Estética" data-astro-cid-bbe6dxrz>  <div class="hero-bg text-white py-12 md:py-20" data-astro-cid-bbe6dxrz> <div class="max-w-6xl mx-auto px-6" data-astro-cid-bbe6dxrz> <div class="grid gap-8 hero-grid" data-astro-cid-bbe6dxrz> <!-- Columna izquierda: texto --> <div class="space-y-6" data-aos="fade-right" data-astro-cid-bbe6dxrz> <div class="flex items-center gap-3" data-astro-cid-bbe6dxrz> <span class="badge-soft" aria-hidden="true" data-astro-cid-bbe6dxrz> <!-- Diploma SVG (discreto) --> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden focusable="false" data-astro-cid-bbe6dxrz><path d="M21 7V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V7" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-bbe6dxrz></path></svg>
Clínica Certificada
</span> <span class="text-sm text-white/80" data-astro-cid-bbe6dxrz>Formación internacional</span> </div> <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight" style="color:inherit" data-astro-cid-bbe6dxrz>
Transforme su imagen con confianza
</h1> <p class="text-lg text-white/85 max-w-xl" data-astro-cid-bbe6dxrz>
Especialista en contorno corporal con formación internacional. Tecnología médica de vanguardia, protocolos seguros y resultados de apariencia natural.
</p> <!-- CTA --> <div class="flex flex-wrap gap-4 mt-2" data-astro-cid-bbe6dxrz> <a href="#contacto" class="inline-flex items-center gap-3 px-6 py-3 rounded-lg font-semibold shadow-sm" style="background:var(--primary); color:white; box-shadow: 0 12px 36px rgba(0,61,176,0.14);" aria-label="Agendar consulta" data-aos="zoom-in" data-astro-cid-bbe6dxrz> <!-- Calendar SVG small --> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden focusable="false" data-astro-cid-bbe6dxrz><path d="M7 10H17M3 7H21M7 3V7M17 3V7M5 21H19C20.1046 21 21 20.1046 21 19V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V19C3 20.1046 3.89543 21 5 21Z" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-bbe6dxrz></path></svg>
Agendar Consulta
</a> <a href="#servicios" class="inline-flex items-center gap-3 px-6 py-3 rounded-lg font-semibold border border-white/30 text-white/95" aria-label="Ver servicios" data-aos="zoom-in" data-aos-delay="80" data-astro-cid-bbe6dxrz>
Ver Servicios
</a> </div> <!-- Confianza / micro-beneficios --> <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md" data-astro-cid-bbe6dxrz> <div class="trust-item" data-astro-cid-bbe6dxrz> <!-- Shield SVG --> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden focusable="false" data-astro-cid-bbe6dxrz><path d="M12 2L20 5V11C20 16 16 20 12 22C8 20 4 16 4 11V5L12 2Z" stroke="white" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-bbe6dxrz></path></svg>
Protocolos clínicos y seguimiento personalizado
</div> <div class="trust-item" data-astro-cid-bbe6dxrz> <!-- Device SVG --> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden focusable="false" data-astro-cid-bbe6dxrz><rect x="3" y="4" width="18" height="14" rx="2" stroke="white" stroke-width="1.1" data-astro-cid-bbe6dxrz></rect><path d="M8 20H16" stroke="white" stroke-width="1.1" stroke-linecap="round" data-astro-cid-bbe6dxrz></path></svg>
Consultas presenciales y virtuales
</div> </div> <!-- Pequeño renglón de logos/afiliaciones (usa imágenes optimizadas) --> <div class="mt-6 flex items-center gap-6" aria-hidden="true" data-astro-cid-bbe6dxrz> <img src="/images/logos/logo1.svg" alt="" class="h-8 opacity-80" data-astro-cid-bbe6dxrz> <img src="/images/logos/logo2.svg" alt="" class="h-6 opacity-80" data-astro-cid-bbe6dxrz> <img src="/images/logos/logo3.svg" alt="" class="h-7 opacity-80" data-astro-cid-bbe6dxrz> </div> </div> <!-- Columna derecha: imagen con marco --> <div class="flex justify-center md:justify-end" data-aos="fade-left" data-astro-cid-bbe6dxrz> <div class="img-frame w-[22.5rem] md:w-[25rem] lg:w-[28rem]" role="img" aria-label="Foto de la doctora Susana" data-astro-cid-bbe6dxrz> <img src="/images/doc/doca.JPG" alt="Dra. Susana - especialista en contorno corporal" class="w-full h-full object-cover block" data-astro-cid-bbe6dxrz> </div> </div> </div> </div> </div> </section>`;
}, "C:/Users/pipel/OneDrive - ucatolica.edu.co/Documents/Proyecto doctora/proyecto/src/components/Hero.astro", void 0);

const $$Astro$3 = createAstro("https://dra.susanagrajales.com");
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$About;
  const {
    name = "Dra. Susana Grajales ",
    title = "Cirujana Pl\xE1stica Especializada",
    image = "/images/doc/docb.JPG",
    bio = `M\xE9dico cirujano con una s\xF3lida formaci\xF3n cl\xEDnica y quir\xFArgica, especializada en cirug\xEDa de contorno corporal y medicina antienvejecimiento, se destaca por su alto compromiso con la investigaci\xF3n cient\xEDfica, la docencia m\xE9dica y el desarrollo acad\xE9mico. Ha demostrado un profundo inter\xE9s y entrenamiento en el \xE1rea de manejo de pacientes quemados, consolidando su experticia en escenarios cl\xEDnicos complejos. Miembro valioso en los equipos con los que ha trabajado, caracteriz\xE1ndose por su capacidad de liderazgo colaborativo y su contribuci\xF3n constante a un trabajo coordinado, eficiente y enfocado en la excelencia asistencial.`,
    education = [
      { title: "Universidad Javeriana", subtitle: "Formaci\xF3n m\xE9dica" },
      { title: "Universidad S\xE3o Leopoldo Mandic- Brasil", subtitle: "Cirug\xEDa est\xE9tica y recostructiva" }
    ],
    centers = [
      "Unidad de Especialistas Santaf\xE9 Real \xB7 Calle 124 #7-38, Cons. 601, Bogot\xE1 D.C.",
      "Cl\xEDnica Central del Quind\xEDo \xB7 Cra 12 #1N-35, Cons. 401, Armenia, Quind\xEDo"
    ]
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section id="sobre" class="py-12"> <div class="max-w-6xl mx-auto px-6"> <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"> <!-- Imagen --> <div class="flex justify-center md:justify-start"> <img${addAttribute(image, "src")}${addAttribute(`Foto ${name}`, "alt")} class="w-full max-w-md rounded-2xl shadow-xl object-cover" style="aspect-ratio: 4/5;" data-aos="fade-up"> </div> <!-- Contenido --> <div data-aos="fade-up"> <h3 class="text-[#163c60] text-3xl font-bold mb-2" style="font-family:'Playfair Display', serif;">${name}</h3> <p class="text-gray-500 mb-6" style="font-family:'Playfair Display', serif;">${title}</p> <p class="text-gray-600 leading-relaxed mb-6" style="font-family:'Playfair Display', serif;"> ${bio} </p> <!-- Tarjetas de formación --> <div class="flex flex-col sm:flex-row gap-4 mb-6"> ${education.map((e) => renderTemplate`<div class="flex-1 bg-white border border-gray-100 rounded-lg p-4 shadow-sm"> <div class="flex items-start gap-3"> <!-- Icono simple (graduación / globo) --> <div class="flex-shrink-0"> <svg class="w-6 h-6 text-[#163c60]" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 14l9-5-9-5-9 5 9 5z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 14l6.16-3.422A12 12 0 0112 21.5 12 12 0 015.84 10.578L12 14z"></path> </svg> </div> <div> <div class="text-sm font-semibold text-[#163c60]" style="font-family:'Playfair Display', serif;">${e.title}</div> ${e.subtitle ? renderTemplate`<div class="text-xs text-gray-500 mt-1" style="font-family:'Playfair Display', serif;">${e.subtitle}</div>` : null} </div> </div> </div>`)} </div> <!-- Centros de atención --> <div class="bg-[#eef3f7] border border-[#e2e8ee] rounded-lg p-4"> <div class="text-sm font-semibold text-[#163c60] mb-3" style="font-family:'Playfair Display', serif;">Centros de Atención:</div> <ul class="space-y-2 text-gray-700"> ${centers.map((c) => renderTemplate`<li class="flex items-start gap-3"> <i class="fa-solid fa-hospital" style="color: #163C5F;"></i> <span class="text-sm" style="font-family:'Playfair Display', serif;">${c}</span> </li>`)} </ul> </div> </div> </div> </div> </section>`;
}, "C:/Users/pipel/OneDrive - ucatolica.edu.co/Documents/Proyecto doctora/proyecto/src/components/About.astro", void 0);

const $$Astro$2 = createAstro("https://dra.susanagrajales.com");
const $$Testimonios = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Testimonios;
  const defaultTestimonials = [
    {
      name: "Silvia F.",
      meta: "Paciente \xB7 Bogot\xE1",
      text: "La atenci\xF3n fue impecable, desde la consulta inicial hasta el postoperatorio. Resultados naturales y profesionales."
    },
    {
      name: "Ana L.",
      meta: "Paciente \xB7 Medell\xEDn",
      text: "El equipo explic\xF3 cada paso con detalle. Me sent\xED en confianza y el resultado fue justo lo que esperaba."
    },
    {
      name: "Carlos P.",
      meta: "Paciente \xB7 Cali",
      text: "Profesionalismo total. Muy satisfecho con el trato y los resultados visibles despu\xE9s del tiempo de recuperaci\xF3n."
    }
  ];
  const props = Astro2.props;
  const testimonials = props.testimonials ?? defaultTestimonials;
  return renderTemplate`${maybeRenderHead()}<section id="testimonios" class="py-16 bg-white" data-aos="fade-up" data-astro-cid-2t7lomlc> <div class="max-w-6xl mx-auto px-6" data-astro-cid-2t7lomlc> <!-- Header --> <div class="text-center mb-10" data-astro-cid-2t7lomlc> <h2 class="text-3xl md:text-4xl font-bold" style="color:var(--primary); font-family:'Playfair Display', serif;" data-astro-cid-2t7lomlc>Testimonios</h2> <p class="mt-3 text-gray-600 max-w-2xl mx-auto" style="font-family:'Playfair Display', serif;" data-astro-cid-2t7lomlc>
Experiencias reales que reflejan nuestro enfoque clínico y el trato personalizado que ofrecemos.
</p> </div> <!-- Grid --> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch" data-astro-cid-2t7lomlc> ${testimonials.map((t, i) => {
    const initials = t.name.split(" ").map((n) => n[0]).slice(0, 2).join("");
    return renderTemplate`<figure class="card-lift flex flex-col rounded-2xl p-6 min-h-[220px]" role="group"${addAttribute(`Testimonio de ${t.name}`, "aria-label")} data-aos="fade-up"${addAttribute(i * 100, "data-aos-delay")} data-astro-cid-2t7lomlc> <header class="flex items-center gap-4 mb-4" data-astro-cid-2t7lomlc> ${t.photo ? renderTemplate`<img${addAttribute(t.photo, "src")}${addAttribute(`Foto de ${t.name}`, "alt")} class="w-12 h-12 rounded-full object-cover border-2 border-white shadow" data-astro-cid-2t7lomlc>` : renderTemplate`<div class="w-12 h-12 rounded-full grid place-items-center text-white font-semibold avatar-gradient" aria-hidden="true" data-astro-cid-2t7lomlc> <span class="text-sm" data-astro-cid-2t7lomlc>${initials}</span> </div>`} <div data-astro-cid-2t7lomlc> <div class="text-[#163c60] font-semibold text-lg" style="font-family:'Playfair Display', serif;" data-astro-cid-2t7lomlc>${t.name}</div> <div class="text-sm text-gray-500" data-astro-cid-2t7lomlc>${t.meta}</div> </div> </header> <blockquote class="text-gray-700 leading-relaxed flex-1 relative" data-astro-cid-2t7lomlc> <span class="quote-mark" aria-hidden data-astro-cid-2t7lomlc>“</span> <p class="relative z-10 ml-2" data-astro-cid-2t7lomlc>${t.text}</p> </blockquote> <figcaption class="mt-6 flex items-center justify-between" data-astro-cid-2t7lomlc> <div class="testi-badge" data-astro-cid-2t7lomlc> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" class="opacity-90" xmlns="http://www.w3.org/2000/svg" data-astro-cid-2t7lomlc> <path d="M12 2L20 6V11C20 16 16 20 12 22C8 20 4 16 4 11V6L12 2Z" stroke="currentColor" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-2t7lomlc></path> </svg> <span class="text-xs" data-astro-cid-2t7lomlc>Paciente verificado</span> </div> <a href="#contacto" class="testi-btn"${addAttribute(`Agendar consulta - ${t.name}`, "aria-label")} data-astro-cid-2t7lomlc>
Agendar consulta
</a> </figcaption> </figure>`;
  })} </div> <div class="mt-8 text-center text-sm text-gray-500" data-astro-cid-2t7lomlc>
Imágenes y testimonios obtenidos con consentimiento informado. Los resultados varían según cada paciente.
</div> </div> </section>`;
}, "C:/Users/pipel/OneDrive - ucatolica.edu.co/Documents/Proyecto doctora/proyecto/src/components/Testimonios.astro", void 0);

const $$WhastappButton = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div> <a${addAttribute(`https://wa.me/${contact.whatsapp}`, "href")} target="_blank" rel="noopener noreferrer" class="fixed bottom-6 right-6 bg-[#153C5E] hover:bg-green-600 text-white rounded-full p-4 shadow-lg flex items-center justify-center z-50"> <i class="fa-brands fa-whatsapp fa-2xl"></i> <p>contactanos ahora</p> </a> </div>`;
}, "C:/Users/pipel/OneDrive - ucatolica.edu.co/Documents/Proyecto doctora/proyecto/src/components/WhastappButton.astro", void 0);

const $$Astro$1 = createAstro("https://dra.susanagrajales.com");
const $$BeforeAfter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BeforeAfter;
  const items = Astro2.props.items ?? [
    { before: "/images/results/liposuccion/liposuccion_antes.png", after: "/images/results/liposuccion/liposuccion_despues.png", label: "Liposucci\xF3n", title: "Liposucci\xF3n", description: "Resultado a los 6 meses post cirug\xEDa", procedure: "procedimiento de cirug\xEDa est\xE9tica que consiste en eliminar dep\xF3sitos de grasa localizada" },
    { before: "/images/results/pexia/pexia_antes.png", after: "/images/results/pexia/pexia_despues.png", label: "Mastopexia", title: "Pexia Mamaria", description: "Resultados visibles a las 12 semanas", procedure: "Disminuicion del tama\xF1o y peso de los senos, asi como levantar, reafirmar y remodelar los senos ca\xEDdos." },
    { before: "/images/results/mamoplastia/mamo_antes.png", after: "/images/results/mamoplastia/mamo_despues.png", label: "Mamoplastia", title: "Mamoplastia de aumento", description: "Aumento y mejoramiento de senos", procedure: "cirug\xEDa pl\xE1stica que tiene como objetivo aumentar el tama\xF1o y mejorar la forma de los senos" }
  ];
  Astro2.props.columns ?? { };
  return renderTemplate`${maybeRenderHead()}<section id="resultados" class="max-w-6xl mx-auto px-6 py-12" data-aos="fade-up" data-astro-cid-fztqauyw> <header class="mb-8 text-center" data-astro-cid-fztqauyw> <h2 class="text-3xl md:text-4xl font-bold section-title" data-astro-cid-fztqauyw>Antes y Después — Resultados Reales</h2> <p class="mt-2 text-gray-600 max-w-2xl mx-auto" data-astro-cid-fztqauyw>Casos clínicos reales con consentimiento informado. Haz clic para ver detalles del procedimiento.</p> </header> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" data-astro-cid-fztqauyw> ${items.map((it) => renderTemplate`<div data-astro-cid-fztqauyw> <!-- Cargar el slider en cliente para evitar SSR issues --> ${renderComponent($$result, "ResultSlider", ResultSlider, { "client:load": true, "before": it.before, "after": it.after, "label": it.label, "title": it.title, "description": it.description, "procedure": it.procedure, "className": "hover:scale-[1.01] transition-transform duration-300", "client:component-hydration": "load", "client:component-path": "C:/Users/pipel/OneDrive - ucatolica.edu.co/Documents/Proyecto doctora/proyecto/src/components/ResultSlider.tsx", "client:component-export": "default", "data-astro-cid-fztqauyw": true })} </div>`)} </div> <div class="mt-8 text-center text-sm text-gray-500" data-astro-cid-fztqauyw>Imágenes con consentimiento informado. Los resultados varían según cada paciente.</div> </section>`;
}, "C:/Users/pipel/OneDrive - ucatolica.edu.co/Documents/Proyecto doctora/proyecto/src/components/BeforeAfter.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$BackToTop = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["<script>\n  // Show/hide button after scrolling 200px\n  window.addEventListener('scroll', function() {\n    const btn = document.getElementById('backToTopBtn');\n    if (!btn) return;\n    if (window.scrollY > 200) {\n      btn.classList.remove('opacity-0');\n    } else {\n      btn.classList.add('opacity-0');\n    }\n  });\n  // Scroll to top on click\n  function scrollToTop() {\n    window.scrollTo({ top: 0, behavior: 'smooth' });\n  }\n<\/script> ", '<button id="backToTopBtn" class="fixed bottom-6 left-6 z-50 bg-[#163c60] text-white rounded-full shadow-lg p-3 transition-opacity duration-300 opacity-0 hover:bg-[#003DB0] focus:outline-none focus:ring-2 focus:ring-[#003DB0] group" aria-label="Volver arriba" onclick="scrollToTop()" tabindex="0"> <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path> </svg> <span class="absolute left-full ml-3 bottom-1/2 translate-y-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 group-focus:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap shadow-lg select-none">\nVolver arriba\n</span> </button>'])), maybeRenderHead());
}, "C:/Users/pipel/OneDrive - ucatolica.edu.co/Documents/Proyecto doctora/proyecto/src/components/BackToTop.astro", void 0);

const ServiceCard = ({ title, short, image, href, icon }) => {
  return /* @__PURE__ */ jsx(
    "a",
    {
      href,
      className: "block bg-white rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 overflow-hidden",
      children: /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 mb-4", children: [
          /* @__PURE__ */ jsx("div", { className: "w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-[#eef3f7] flex items-center justify-center text-[#163c60] ring-1 ring-[#d7e0ea]", children: /* @__PURE__ */ jsx("img", { src: icon, alt: title, loading: "lazy", className: "w-12 h-12 sm:w-16 sm:h-16 object-contain drop-shadow-md" }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-[#163c60]", children: title })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500 min-h-[3.2rem]", children: short }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 text-sm font-medium text-[#163c60]", children: "Ver más +" })
      ] })
    }
  );
};

const ServicesTabs = ({ services }) => {
  const categories = Array.from(new Set(services.map((s) => s.data.category)));
  const [activeTab, setActiveTab] = useState(categories[0]);
  const filteredServices = services.filter((s) => s.data.category === activeTab);
  return /* @__PURE__ */ jsx("section", { id: "servicios", className: "py-16", "data-aos": "fade-up", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-6", children: [
    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-3 mb-8", "data-aos": "fade-up", "data-aos-delay": "100", children: categories.map((cat, i) => /* @__PURE__ */ jsx(
      "button",
      {
        className: `
                px-6 py-2 rounded-full font-semibold transition 
                duration-300 ease-in-out
                ${cat === activeTab ? "bg-[#143B5A] text-white shadow-lg shadow-primary/30" : "bg-white text-primary border border-primary hover:bg-primary hover:text-[#4784b7]"}
              `,
        onClick: () => setActiveTab(cat),
        "data-aos": "zoom-in",
        "data-aos-delay": 100 + i * 60,
        children: cat
      },
      cat
    )) }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: filteredServices.map((s, i) => /* @__PURE__ */ jsx("div", { "data-aos": "fade-up", "data-aos-delay": i * 100, children: /* @__PURE__ */ jsx(
      ServiceCard,
      {
        icon: s.data.icon,
        title: s.data.title,
        short: s.data.short,
        image: s.data.image,
        href: `/servicios/${s.slug ?? s.id}`
      }
    ) }, s.id)) })
  ] }) });
};

const $$Astro = createAstro("https://dra.susanagrajales.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const services = await getCollection("servicios");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${maybeRenderHead()}<section class="hero"> ${renderComponent($$result2, "Hero", $$Hero, {})} </section> ${renderComponent($$result2, "WhastappButton", $$WhastappButton, {})} <section class="about py-16 bg-gray-50"> <div class="max-w-6xl mx-auto px-6"> ${renderComponent($$result2, "About", $$About, {})} </div> </section> <section class="servicios py-16 bg-white"> <div class="max-w-6xl mx-auto px-6"> <h2 class="text-3xl text-center text-primary font-semibold mb-8">Servicios especialiizados</h2> <h3 class="text-center">Tecnologia innovadora para resultados exepcionales</h3> ${renderComponent($$result2, "ServicesTabs", ServicesTabs, { "services": services, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/pipel/OneDrive - ucatolica.edu.co/Documents/Proyecto doctora/proyecto/src/components/ServicesGrid.tsx", "client:component-export": "default" })} </div> </section> ${renderComponent($$result2, "BeforeAfter", $$BeforeAfter, {})} <section class="testimonios py-16 bg-gray-50"> ${renderComponent($$result2, "Testimonios", $$Testimonios, {})} </section> ${renderComponent($$result2, "BackToTop", $$BackToTop, {})} <section class="contact"> <div class="max-w-6xl mx-auto px-6 py-16"> ${renderComponent($$result2, "ContactForm", $$ContactForm, {})} </div> </section> <section> ${renderComponent($$result2, "Footer", $$Footer, {})} </section> ` })}`;
}, "C:/Users/pipel/OneDrive - ucatolica.edu.co/Documents/Proyecto doctora/proyecto/src/pages/index.astro", void 0);

const $$file = "C:/Users/pipel/OneDrive - ucatolica.edu.co/Documents/Proyecto doctora/proyecto/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
