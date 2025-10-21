import 'kleur/colors';
import { k as decodeKey } from './chunks/astro/server_UUQtL_eQ.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_C13bWzhA.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/pipel/OneDrive%20-%20ucatolica.edu.co/Documents/Proyecto%20doctora/proyecto/","cacheDir":"file:///C:/Users/pipel/OneDrive%20-%20ucatolica.edu.co/Documents/Proyecto%20doctora/proyecto/node_modules/.astro/","outDir":"file:///C:/Users/pipel/OneDrive%20-%20ucatolica.edu.co/Documents/Proyecto%20doctora/proyecto/dist/","srcDir":"file:///C:/Users/pipel/OneDrive%20-%20ucatolica.edu.co/Documents/Proyecto%20doctora/proyecto/src/","publicDir":"file:///C:/Users/pipel/OneDrive%20-%20ucatolica.edu.co/Documents/Proyecto%20doctora/proyecto/public/","buildClientDir":"file:///C:/Users/pipel/OneDrive%20-%20ucatolica.edu.co/Documents/Proyecto%20doctora/proyecto/dist/client/","buildServerDir":"file:///C:/Users/pipel/OneDrive%20-%20ucatolica.edu.co/Documents/Proyecto%20doctora/proyecto/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/AosInitializer.DvB2Xm2x.css"},{"type":"external","src":"/_astro/index.GlHukFyV.css"},{"type":"inline","content":":root{--primary: #003DB0;--grad-start: #163c60;--grad-end: #123a57;--muted: #dfe6ea}.hero-bg[data-astro-cid-bbe6dxrz]{background:linear-gradient(180deg,var(--grad-start),var(--grad-end));clip-path:polygon(0 0,100% 0,100% 88%,0 100%)}.img-frame[data-astro-cid-bbe6dxrz]{border-radius:1rem;overflow:hidden;box-shadow:0 20px 50px #02061773;transition:transform .5s cubic-bezier(.2,.9,.3,1),box-shadow .3s ease;transform-origin:center;border:1px solid rgba(255,255,255,.06);background:linear-gradient(180deg,#ffffff05,#0000000a)}.img-frame[data-astro-cid-bbe6dxrz]:hover{transform:translateY(-6px) rotate(-.6deg);box-shadow:0 36px 80px #0206178c}.badge-soft[data-astro-cid-bbe6dxrz]{background:#ffffff14;color:var(--muted);padding:.35rem .6rem;border-radius:.6rem;font-weight:600;font-size:.85rem;display:inline-flex;gap:.5rem;align-items:center;border:1px solid rgba(255,255,255,.04)}.trust-item[data-astro-cid-bbe6dxrz]{font-size:.92rem;color:#ffffffeb;display:flex;gap:.6rem;align-items:center}@media (min-width: 768px){.hero-grid[data-astro-cid-bbe6dxrz]{grid-template-columns:1fr 440px;align-items:center}}:root{--primary: #003DB0;--beige: #f8f9fb;--muted: #dfe6ea}.quote-mark[data-astro-cid-2t7lomlc]{font-size:3.8rem;color:#163c6014;position:absolute;left:-.2em;top:-.7em;z-index:0;font-family:Playfair Display,serif;font-weight:700}.avatar-gradient[data-astro-cid-2t7lomlc]{background:#163c60;box-shadow:0 8px 22px #163c601a;border:2px solid #fff}.card-lift[data-astro-cid-2t7lomlc]{transition:transform .28s cubic-bezier(.2,.9,.28,1),box-shadow .28s;border:1.5px solid #e6e9ee;background:var(--beige);box-shadow:0 10px 32px #163c6012}.card-lift[data-astro-cid-2t7lomlc]:hover{transform:translateY(-8px) scale(1.025);box-shadow:0 28px 60px #163c6021;border-color:#b6c6d6}.testi-badge[data-astro-cid-2t7lomlc]{background:#003db00f;border:1px solid rgba(0,61,176,.08);color:#163c60;font-weight:600;border-radius:.6rem;font-size:.92rem;padding:.32rem .8rem;display:inline-flex;align-items:center;gap:.4rem}.testi-btn[data-astro-cid-2t7lomlc]{background:#163c60;color:#fff;font-weight:600;border-radius:.6rem;font-size:.97rem;padding:.5rem 1.2rem;box-shadow:0 2px 8px #163c601a;transition:transform .18s,box-shadow .18s,background .18s;display:inline-flex;align-items:center;gap:.5rem}.testi-btn[data-astro-cid-2t7lomlc]:hover{transform:translateY(-2px) scale(1.04);box-shadow:0 6px 18px #163c6021;background:#123a57}:root{--primary: #003DB0}.section-title[data-astro-cid-fztqauyw]{color:var(--primary)}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://dra.susanagrajales.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/pipel/OneDrive - ucatolica.edu.co/Documents/Proyecto doctora/proyecto/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/pipel/OneDrive - ucatolica.edu.co/Documents/Proyecto doctora/proyecto/src/pages/servicios/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/servicios/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/servicios/[slug]@_@astro":"pages/servicios/_slug_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_Dp6NdgVZ.mjs","C:/Users/pipel/OneDrive - ucatolica.edu.co/Documents/Proyecto doctora/proyecto/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DMWKAROl.mjs","C:\\Users\\pipel\\OneDrive - ucatolica.edu.co\\Documents\\Proyecto doctora\\proyecto\\.astro\\content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","C:\\Users\\pipel\\OneDrive - ucatolica.edu.co\\Documents\\Proyecto doctora\\proyecto\\.astro\\content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_tDDY5qtu.mjs","C:/Users/pipel/OneDrive - ucatolica.edu.co/Documents/Proyecto doctora/proyecto/src/components/ResultSlider.tsx":"_astro/ResultSlider.5Xx_a6bu.js","C:/Users/pipel/OneDrive - ucatolica.edu.co/Documents/Proyecto doctora/proyecto/src/components/ServicesGrid.tsx":"_astro/ServicesGrid.BChMX0sx.js","@astrojs/react/client.js":"_astro/client.D2WMwoKK.js","C:/Users/pipel/OneDrive - ucatolica.edu.co/Documents/Proyecto doctora/proyecto/src/components/AosInitializer.astro?astro&type=script&index=0&lang.ts":"_astro/AosInitializer.astro_astro_type_script_index_0_lang.BRfh0mx7.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/_slug_.DXnbMGWr.css","/_astro/index.GlHukFyV.css","/favicon.svg","/info.txt","/Presentacion y Servicios Dra Susana.docx","/robots.txt","/sitemap.txt","/_astro/AosInitializer.astro_astro_type_script_index_0_lang.BRfh0mx7.js","/_astro/AosInitializer.DvB2Xm2x.css","/_astro/client.D2WMwoKK.js","/_astro/index.RH_Wq4ov.js","/_astro/jsx-runtime.D_zvdyIk.js","/_astro/ResultSlider.5Xx_a6bu.js","/_astro/ServicesGrid.BChMX0sx.js","/images/doc/doca.JPG","/images/doc/docb.JPG","/images/identity/logodoctorasusana.ico","/images/identity/susanalogo.png","/images/identity/susanalogoheader.png","/images/icons/abdominoplastia.png","/images/icons/alectomia.png","/images/icons/aplicación de Toxina Botulínica.png","/images/icons/aumento-labios.png","/images/icons/bicectomia.png","/images/icons/blefaroplastia.png","/images/icons/braquioplastia.png","/images/icons/correccion-cicatriz.png","/images/icons/cruroplastia.png","/images/icons/dermolipectomia-post-bariatrica.png","/images/icons/estimuladores-colageno.png","/images/icons/explantacion-mamaria.png","/images/icons/ginecomastia.png","/images/icons/gluteoplastia.png","/images/icons/Inyeccion-grasa.png","/images/icons/Lifting de Labio.png","/images/icons/Lifting Facial (Ritidectomía).png","/images/icons/liftingdelabios.png","/images/icons/Lipoescultura.png","/images/icons/Mamoplastia de Aumento.png","/images/icons/Mastopexia.png","/images/icons/NCTF - Factor de Tratamiento Celular.png","/images/icons/Ninfoplastia (Labioplastia).png","/images/icons/Otoplastia.png","/images/icons/reconstruccion mamaria.png","/images/icons/reduccion mamaria.png","/images/icons/retiro de biopolimeros.png","/images/icons/Rinomodelación con Ácido Hialurónico.png","/images/icons/Rinoplastia.png","/images/icons/Torsoplastia.png","/images/icons/Tratamiento de Quemados y Quemaduras.png","/images/servicios/abdominoplastia.jpg","/images/servicios/abdominoplastia.png","/images/servicios/alectomia.png","/images/servicios/aumento-labios.png","/images/servicios/bichectomia.png","/images/servicios/blefaroplastia.png","/images/servicios/braquioplastia.png","/images/servicios/correccion-cicatriz.png","/images/servicios/cruroplastia.png","/images/servicios/estimuladores.png","/images/servicios/explantacion.jpg","/images/servicios/ginecomastia.png","/images/servicios/gluteoplastia.png","/images/servicios/inyeccion-grasa.png","/images/servicios/lifting-facial.png","/images/servicios/lifting-labio.png","/images/servicios/lipoescultura.png","/images/servicios/liposuccion.png","/images/servicios/mamoplastiaaumento.jpg","/images/servicios/mastopexia.jpg","/images/servicios/nctf.png","/images/servicios/ninfoplastia.jpg","/images/servicios/Otoplastia.png","/images/servicios/PhotoCollage_20250125_085711481.jpg","/images/servicios/post-bariatrica.jpg","/images/servicios/reduccionmamaria.jpg","/images/servicios/reseccion-tumores.png","/images/servicios/rinomodelacion.jpg","/images/servicios/rinoplastia.png","/images/servicios/toxina-botulinica.png","/images/results/alctomia/alectomia_caso1_antes.jpg","/images/results/alctomia/alectomia_caso1_despues.jpg","/images/results/alctomia/alectomia_caso2_antes.jpg","/images/results/alctomia/alectomia_caso2_despues.jpg","/images/results/blefaropastia/blefaropastia_caso1_antes.jpg","/images/results/blefaropastia/blefaropastia_caso1_despues.jpg","/images/results/blefaropastia/blefaropastia_caso2_antes.jpg","/images/results/blefaropastia/blefaropastia_caso2_despues.jpg","/images/results/blefaropastia/PhotoCollage_20240716_115837697.jpg","/images/results/ginecomastia/ginecomastia_caso1_antes.jpg","/images/results/ginecomastia/ginecomastia_caso1_despues.jpg","/images/results/ginecomastia/ginecomastia_caso2_antes.jpg","/images/results/ginecomastia/ginecomastia_caso2_despues.jpg","/images/results/labios_acido/labios_caso1_antes.jpg","/images/results/labios_acido/labios_caso1_despues.jpg","/images/results/labios_acido/labios_caso2_antes.jpg","/images/results/labios_acido/labios_caso2_despues.jpg","/images/results/labios_acido/PhotoCollage_20240823_125505843.jpg","/images/results/labios_acido/PhotoCollage_20240904_181135873.jpg","/images/results/liposuccion/liposuccion_antes.png","/images/results/liposuccion/liposuccion_despues.png","/images/results/mamoplastia/mamo_antes.png","/images/results/mamoplastia/mamo_despues.png","/images/results/otoplastia/otoplastia_caso1_antes.jpg","/images/results/otoplastia/otoplastia_caso1_despues.jpg","/images/results/otoplastia/otoplastia_caso2_antes.jpg","/images/results/otoplastia/otoplastia_caso2_despues.jpg","/images/results/pexia/pexia_antes.png","/images/results/pexia/pexia_despues.png","/images/results/rinoplastia/rino_caso1_antes.jpg","/images/results/rinoplastia/rino_caso1_despues.jpg"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"VAyw7uazW5S7a1M2KlsE0/t+kvSSY5LScAUUTDK79To="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
