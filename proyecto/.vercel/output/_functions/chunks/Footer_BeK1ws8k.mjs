import { a as createComponent, e as renderScript, b as renderTemplate, c as createAstro, r as renderComponent, f as renderSlot, g as renderHead, d as addAttribute, A as AstroError, G as GetEntryDeprecationError, R as RenderUndefinedEntryError, u as unescapeHTML, U as UnknownContentCollectionError, h as renderUniqueStylesheet, i as renderScriptElement, j as createHeadAndContent, m as maybeRenderHead } from './astro/server_UUQtL_eQ.mjs';
import 'kleur/colors';
/* empty css                         */
import 'clsx';
import { escape } from 'html-escaper';
import { Traverse } from 'neotraverse/modern';
import pLimit from 'p-limit';
import { z } from 'zod';
import { r as removeBase, i as isRemotePath, p as prependForwardSlash } from './path_tbLlI_c1.mjs';
import { V as VALID_INPUT_FORMATS } from './consts_BmVDRGlB.mjs';
import * as devalue from 'devalue';
import { jsxs, jsx } from 'react/jsx-runtime';
import 'react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

const $$AosInitializer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderScript($$result, "C:/Users/pipel/OneDrive - ucatolica.edu.co/Documents/Proyecto doctora/proyecto/src/components/AosInitializer.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/pipel/OneDrive - ucatolica.edu.co/Documents/Proyecto doctora/proyecto/src/components/AosInitializer.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro = createAstro("https://dra.susanagrajales.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/images/identity/logodoctorasusana.ico"><meta name="generator"', '><title>Dra. Susana Grajales | Cirujana Pl\xE1stica en Bogot\xE1</title><meta name="description" content="Dra. Susana Grajales, cirujana pl\xE1stica en Bogot\xE1. Especialista en procedimientos est\xE9ticos y reconstructivos. Agenda tu consulta con la Dra. Susana Grajales, doctora reconocida por resultados naturales y atenci\xF3n profesional."><meta name="keywords" content="doctora susana, dra susana grajales, cirujana pl\xE1stica, cirug\xEDa pl\xE1stica Bogot\xE1, cirug\xEDa est\xE9tica, procedimientos est\xE9ticos, consulta pl\xE1stica, resultados naturales, doctora susana bogot\xE1, dra susana, dra.susanagrajales"><meta name="author" content="Dra. Susana Grajales"><meta name="robots" content="index, follow"><!-- Open Graph --><meta property="og:title" content="Dra. Susana Grajales | Cirujana Pl\xE1stica en Bogot\xE1"><meta property="og:description" content="Cirug\xEDa pl\xE1stica y est\xE9tica en Bogot\xE1 con la Dra. Susana Grajales. Resultados naturales, atenci\xF3n profesional y procedimientos seguros."><meta property="og:type" content="website"><meta property="og:url" content="https://dra.susanagrajales.com"><meta property="og:image" content="/images/identity/susanalogo.png"><!-- Twitter Card --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="Dra. Susana Grajales | Cirujana Pl\xE1stica en Bogot\xE1"><meta name="twitter:description" content="Cirug\xEDa pl\xE1stica y est\xE9tica en Bogot\xE1 con la Dra. Susana Grajales. Resultados naturales, atenci\xF3n profesional y procedimientos seguros."><meta name="twitter:image" content="/images/identity/susanalogo.png"><link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;600&display=swap" rel="stylesheet"><script src="https://kit.fontawesome.com/5f85240dc2.js" crossorigin="anonymous"><\/script>', "</head> <body data-astro-cid-sckkx6r4> ", " ", " </body></html>"])), addAttribute(Astro2.generator, "content"), renderHead(), renderSlot($$result, $$slots["default"]), renderComponent($$result, "AosInitializer", $$AosInitializer, { "data-astro-cid-sckkx6r4": true }));
}, "C:/Users/pipel/OneDrive - ucatolica.edu.co/Documents/Proyecto doctora/proyecto/src/layouts/Layout.astro", void 0);

const centers = [
  {
    city: "Bogotá",
    name: "Unidad de Especialistas Santafé Real",
    address: "Calle 124 #7-38 consultorio 601, Bogotá D.C."
  },
  {
    city: "Armenia",
    name: "Clínica Central del Quindío",
    address: "Carrera 12 #1N-35 consultorio 401, Armenia, Quindío."
  }
];
const phone = "+57 301 503 1356";
const whatsapp = "573015031356";
const contact = { centers, phone, whatsapp };

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isRemotePath(imageSrc)) {
    return;
  }
  const ext = imageSrc.split(".").at(-1)?.toLowerCase();
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  if (filePath) {
    params.set("importer", filePath);
  }
  return `${imageSrc}?${params.toString()}`;
}

class ImmutableDataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('./_astro_data-layer-content_tDDY5qtu.mjs');
      if (data.default instanceof Map) {
        return ImmutableDataStore.fromMap(data.default);
      }
      const map = devalue.unflatten(data.default);
      return ImmutableDataStore.fromMap(map);
    } catch {
    }
    return new ImmutableDataStore();
  }
  static async fromMap(data) {
    const store = new ImmutableDataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = ImmutableDataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": "https://dra.susanagrajales.com", "SSR": true};
function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
z.object({
  tags: z.array(z.string()).optional(),
  lastModified: z.date().optional()
});
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection,
  liveCollections
}) {
  return async function getCollection(collection, filter) {
    if (collection in liveCollections) {
      throw new AstroError({
        ...UnknownContentCollectionError,
        message: `Collection "${collection}" is a live collection. Use getLiveCollection() instead of getCollection().`
      });
    }
    const hasFilter = typeof filter === "function";
    const store = await globalDataStore.get();
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else if (store.hasCollection(collection)) {
      const { default: imageAssetMap } = await import('./content-assets_DleWbedO.mjs');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap);
        let entry = {
          ...rawEntry,
          data,
          collection
        };
        if (entry.legacyId) {
          entry = emulateLegacyEntry(entry);
        }
        if (hasFilter && !filter(entry)) {
          continue;
        }
        result.push(entry);
      }
      return result;
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Please check your content config file for errors.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign(__vite_import_meta_env__, { Path: process.env.Path })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (hasFilter) {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
function createGetEntryBySlug({
  getEntryImport,
  getRenderEntryImport,
  collectionNames,
  getEntry
}) {
  return async function getEntryBySlug(collection, slug) {
    const store = await globalDataStore.get();
    if (!collectionNames.has(collection)) {
      if (store.hasCollection(collection)) {
        const entry2 = await getEntry(collection, slug);
        if (entry2 && "slug" in entry2) {
          return entry2;
        }
        throw new AstroError({
          ...GetEntryDeprecationError,
          message: GetEntryDeprecationError.message(collection, "getEntryBySlug")
        });
      }
      console.warn(
        `The collection ${JSON.stringify(collection)} does not exist. Please ensure it is defined in your content config.`
      );
      return void 0;
    }
    const entryImport = await getEntryImport(collection, slug);
    if (typeof entryImport !== "function") return void 0;
    const entry = await entryImport();
    return {
      id: entry.id,
      slug: entry.slug,
      body: entry.body,
      collection: entry.collection,
      data: entry.data,
      async render() {
        return render({
          collection: entry.collection,
          id: entry.id,
          renderEntryImport: await getRenderEntryImport(collection, slug)
        });
      }
    };
  };
}
function emulateLegacyEntry({ legacyId, ...entry }) {
  const legacyEntry = {
    ...entry,
    id: legacyId,
    slug: entry.id
  };
  return {
    ...legacyEntry,
    // Define separately so the render function isn't included in the object passed to `renderEntry()`
    render: () => renderEntry(legacyEntry)
  };
}
function createGetEntry({
  getEntryImport,
  getRenderEntryImport,
  collectionNames,
  liveCollections
}) {
  return async function getEntry(collectionOrLookupObject, lookup) {
    let collection, lookupId;
    if (typeof collectionOrLookupObject === "string") {
      collection = collectionOrLookupObject;
      if (!lookup)
        throw new AstroError({
          ...UnknownContentCollectionError,
          message: "`getEntry()` requires an entry identifier as the second argument."
        });
      lookupId = lookup;
    } else {
      collection = collectionOrLookupObject.collection;
      lookupId = "id" in collectionOrLookupObject ? collectionOrLookupObject.id : collectionOrLookupObject.slug;
    }
    if (collection in liveCollections) {
      throw new AstroError({
        ...UnknownContentCollectionError,
        message: `Collection "${collection}" is a live collection. Use getLiveEntry() instead of getEntry().`
      });
    }
    if (typeof lookupId === "object") {
      throw new AstroError({
        ...UnknownContentCollectionError,
        message: `The entry identifier must be a string. Received object.`
      });
    }
    const store = await globalDataStore.get();
    if (store.hasCollection(collection)) {
      const entry2 = store.get(collection, lookupId);
      if (!entry2) {
        console.warn(`Entry ${collection} → ${lookupId} was not found.`);
        return;
      }
      const { default: imageAssetMap } = await import('./content-assets_DleWbedO.mjs');
      entry2.data = updateImageReferencesInData(entry2.data, entry2.filePath, imageAssetMap);
      if (entry2.legacyId) {
        return emulateLegacyEntry({ ...entry2, collection });
      }
      return {
        ...entry2,
        collection
      };
    }
    if (!collectionNames.has(collection)) {
      console.warn(
        `The collection ${JSON.stringify(collection)} does not exist. Please ensure it is defined in your content config.`
      );
      return void 0;
    }
    const entryImport = await getEntryImport(collection, lookupId);
    if (typeof entryImport !== "function") return void 0;
    const entry = await entryImport();
    if (entry._internal.type === "content") {
      return {
        id: entry.id,
        slug: entry.slug,
        body: entry.body,
        collection: entry.collection,
        data: entry.data,
        async render() {
          return render({
            collection: entry.collection,
            id: entry.id,
            renderEntryImport: await getRenderEntryImport(collection, lookupId)
          });
        }
      };
    } else if (entry._internal.type === "data") {
      return {
        id: entry.id,
        collection: entry.collection,
        data: entry.data
      };
    }
    return void 0;
  };
}
const CONTENT_LAYER_IMAGE_REGEX = /__ASTRO_IMAGE_="([^"]+)"/g;
async function updateImageReferencesInBody(html, fileName) {
  const { default: imageAssetMap } = await import('./content-assets_DleWbedO.mjs');
  const imageObjects = /* @__PURE__ */ new Map();
  const { getImage } = await import('./_astro_assets_xAwPfXVp.mjs').then(n => n._);
  for (const [_full, imagePath] of html.matchAll(CONTENT_LAYER_IMAGE_REGEX)) {
    try {
      const decodedImagePath = JSON.parse(imagePath.replaceAll("&#x22;", '"'));
      let image;
      if (URL.canParse(decodedImagePath.src)) {
        image = await getImage(decodedImagePath);
      } else {
        const id = imageSrcToImportId(decodedImagePath.src, fileName);
        const imported = imageAssetMap.get(id);
        if (!id || imageObjects.has(id) || !imported) {
          continue;
        }
        image = await getImage({ ...decodedImagePath, src: imported });
      }
      imageObjects.set(imagePath, image);
    } catch {
      throw new Error(`Failed to parse image reference: ${imagePath}`);
    }
  }
  return html.replaceAll(CONTENT_LAYER_IMAGE_REGEX, (full, imagePath) => {
    const image = imageObjects.get(imagePath);
    if (!image) {
      return full;
    }
    const { index, ...attributes } = image.attributes;
    return Object.entries({
      ...attributes,
      src: image.src,
      srcset: image.srcSet.attribute,
      // This attribute is used by the toolbar audit
      ...Object.assign(__vite_import_meta_env__, { Path: process.env.Path }).DEV ? { "data-image-component": "true" } : {}
    }).map(([key, value]) => value ? `${key}="${escape(value)}"` : "").join(" ");
  });
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new Traverse(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap?.get(id);
      if (imported) {
        ctx.update(imported);
      } else {
        ctx.update(src);
      }
    }
  });
}
async function renderEntry(entry) {
  if (!entry) {
    throw new AstroError(RenderUndefinedEntryError);
  }
  if ("render" in entry && !("legacyId" in entry)) {
    return entry.render();
  }
  if (entry.deferredRender) {
    try {
      const { default: contentModules } = await import('./content-modules_Dz-S_Wwv.mjs');
      const renderEntryImport = contentModules.get(entry.filePath);
      return render({
        collection: "",
        id: entry.id,
        renderEntryImport
      });
    } catch (e) {
      console.error(e);
    }
  }
  const html = entry?.rendered?.metadata?.imagePaths?.length && entry.filePath ? await updateImageReferencesInBody(entry.rendered.html, entry.filePath) : entry?.rendered?.html;
  const Content = createComponent(() => renderTemplate`${unescapeHTML(html)}`);
  return {
    Content,
    headings: entry?.rendered?.metadata?.headings ?? [],
    remarkPluginFrontmatter: entry?.rendered?.metadata?.frontmatter ?? {}
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const liveCollections = {};

const contentDir = '/src/content/';

const contentEntryGlob = "";
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = "";
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
const collectionToEntryMap = createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {};

const collectionNames = new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = "";
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
	liveCollections,
});

const getEntry = createGetEntry({
	getEntryImport: createGlobLookup(collectionToEntryMap),
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	collectionNames,
	liveCollections,
});

const getEntryBySlug = createGetEntryBySlug({
	getEntryImport: createGlobLookup(contentCollectionToEntryMap),
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	collectionNames,
	getEntry,
});

const ResultSlider = ({
  before = "",
  after = "",
  altBefore = "Antes",
  altAfter = "Después",
  label = "",
  title = "",
  description = "",
  procedure = "",
  className = ""
}) => {
  return /* @__PURE__ */ jsxs(
    "article",
    {
      className: `bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 ${className}`,
      "aria-label": title || label || "Comparación antes y después",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          label ? /* @__PURE__ */ jsx("div", { className: "absolute z-10 top-3 left-3 bg-white/10 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-lg border border-white/8 shadow-sm", children: label }) : null,
          /* @__PURE__ */ jsx("div", { className: "w-full aspect-[4/3] bg-gray-50", children: /* @__PURE__ */ jsx(
            ReactCompareSlider,
            {
              itemOne: /* @__PURE__ */ jsx(ReactCompareSliderImage, { src: before, alt: altBefore }),
              itemTwo: /* @__PURE__ */ jsx(ReactCompareSliderImage, { src: after, alt: altAfter }),
              style: { height: "100%", touchAction: "none" }
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-5", children: [
          title ? /* @__PURE__ */ jsx("h3", { className: "text-gray-900 font-semibold text-lg leading-snug", children: title }) : null,
          description ? /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-gray-500", children: description }) : null,
          procedure ? /* @__PURE__ */ jsxs("div", { className: "mt-4 bg-gray-50 border border-gray-100 p-3 rounded-lg", children: [
            /* @__PURE__ */ jsx("h4", { className: "text-sm font-medium text-gray-800", children: "Procedimiento" }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-gray-600", children: procedure })
          ] }) : null
        ] })
      ]
    }
  );
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$ContactForm = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", `<section class="min-h-[70vh] py-16 bg-gradient-to-b from-[#f8f9fb] to-white"> <div class="container mx-auto px-6"> <div class="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"> <!-- Left: Info / Marca --> <div class="space-y-4"> <h2 class="text-3xl lg:text-4xl font-semibold leading-tight" style="font-family:'Playfair Display', serif;">Agenda tu Consulta</h2> <p class="text-gray-600 max-w-xl" style="font-family:'Playfair Display', serif;">
El primer paso hacia tu transformaci\xF3n. Completa el formulario y nos pondremos en contacto para confirmar la cita.
</p> <div class="mt-6 flex flex-col gap-2"> <div class="px-3 py-2 rounded-lg bg-[#163c60] text-white text-sm shadow-sm" style="font-family:'Playfair Display', serif;"> <strong>Atenci\xF3n personalizada</strong> <div class="text-xs opacity-90">Respuesta en 24\u201348h</div> </div> <div class="px-3 py-2 rounded-lg border border-[#cac9ce] text-sm text-gray-700 bg-white" style="font-family:'Playfair Display', serif;"> <div class="text-sm">
Centros: `, " \xB7 ", " \u2022 ", " \xB7 ", ' </div> <div class="text-sm mt-1">Tel / WhatsApp: ', `</div> </div> </div> </div> <!-- Right: Formulario --> <div> <form id="contactForm" class="bg-white border border-[#cac9ce] rounded-2xl2 p-6 shadow-md" autocomplete="off" novalidate> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> <label class="flex flex-col"> <span class="text-sm text-gray-700 mb-2" style="font-family:'Playfair Display', serif;">Nombre Completo *</span> <input name="name" required type="text" class="input input-ghost bg-[#fafafa] border border-[#e6e7e9] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#163c60]/20 transition" placeholder="Ej. Mar\xEDa P\xE9rez"> </label> <label class="flex flex-col"> <span class="text-sm text-gray-700 mb-2" style="font-family:'Playfair Display', serif;">Tel\xE9fono *</span> <input name="phone" required type="tel" class="input input-ghost bg-[#fafafa] border border-[#e6e7e9] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#163c60]/20 transition" placeholder="+57 300 000 0000"> </label> </div> <div class="mt-4"> <label class="flex flex-col"> <span class="text-sm text-gray-700 mb-2" style="font-family:'Playfair Display', serif;">Email *</span> <input name="email" required type="email" class="input input-ghost bg-[#fafafa] border border-[#e6e7e9] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#163c60]/20 transition" placeholder="correo@ejemplo.com"> </label> </div> <div class="mt-4"> <label class="flex flex-col"> <span class="text-sm text-gray-700 mb-2" style="font-family:'Playfair Display', serif;">Procedimiento de inter\xE9s</span> <select name="procedure" class="select select-bordered w-full rounded-lg px-3 py-2 bg-white border border-[#e6e7e9]"> <option value="">Selecciona un procedimiento</option> <option>Mamoplastia</option> <option>Abdominoplastia</option> <option>Lipoescultura</option> </select> </label> </div> <div class="mt-4"> <label class="flex flex-col"> <span class="text-sm text-gray-700 mb-2" style="font-family:'Playfair Display', serif;">Mensaje</span> <textarea name="message" rows="4" class="textarea textarea-ghost bg-[#fafafa] border border-[#e6e7e9] rounded-lg px-4 py-3 resize-y focus:outline-none focus:ring-2 focus:ring-[#163c60]/20 transition" placeholder="Cu\xE9ntanos brevemente tu caso..."></textarea> </label> </div> <div class="mt-5 flex items-center justify-between gap-4"> <div class="text-sm text-gray-600" style="font-family:'Playfair Display', serif;"> <label class="inline-flex items-center gap-2"> <input type="checkbox" name="consent" class="checkbox checkbox-sm border-[#e6e7e9]"> <span>Acepto ser contactado</span> </label> </div> <button type="submit" class="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#163c60] text-white font-medium shadow-sm hover:brightness-95 transition">
Enviar solicitud
</button> </div> <div id="formFeedback" class="mt-4 text-sm" aria-live="polite"></div> </form> </div> </div> </div> <script type="module">
    const form = document.getElementById('contactForm');
    const feedback = document.getElementById('formFeedback');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      feedback.innerHTML = '';

      const data = new FormData(form);
      if (!data.get('name') || !data.get('email') || !data.get('phone')) {
        feedback.innerHTML = '<div class="text-sm text-amber-700">Por favor completa los campos obligatorios*</div>';
        return;
      }

      try {
        const resp = await fetch('/api/contact', { method: 'POST', body: data });
        if (!resp.ok) throw new Error('server error');
        const json = await resp.json();
        if (json.success) {
          feedback.innerHTML = '<div class="text-sm text-green-700">\xA1Solicitud enviada! Te contactamos pronto.</div>';
          form.reset();
        } else {
          feedback.innerHTML = '<div class="text-sm text-red-700">No se pudo enviar. Intenta m\xE1s tarde.</div>';
        }
      } catch (err) {
        console.error(err);
        feedback.innerHTML = '<div class="text-sm text-red-700">Error de conexi\xF3n. Intenta nuevamente.</div>';
      }
    });
  <\/script> </section>`])), maybeRenderHead(), contact.centers[0].name, contact.centers[0].address, contact.centers[1].name, contact.centers[1].address, contact.phone);
}, "C:/Users/pipel/OneDrive - ucatolica.edu.co/Documents/Proyecto doctora/proyecto/src/components/ContactForm.astro", void 0);

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="bg-white shadow-sm"> <div class="max-w-6xl mx-auto flex items-center justify-between p-4"> <a href="/" class="text-xl font-bold text-primary"><div> <img src="/images/identity/susanalogoheader.png" alt="Logo" class="h-[6rem] mb-4"> </div></a> <ul class="hidden md:flex gap-6 text-md" style="font-family:'Playfair Display', serif;"> <li><a href="/" class="hover:underline">Inicio</a></li> <li><a href="/servicios" class="hover:underline">Servicios</a></li> <li><a href="/#servicios" class="hover:underline">Procedimientos</a></li> <li><a href="/#resultados" class="hover:underline">Resultados</a></li> <li><a href="/#testimonios" class="hover:underline">Testimonios</a></li> <li><a href="/#contacto" class="text-primary font-medium">Contacto</a></li> </ul> <a${addAttribute(`https://wa.me/${contact.whatsapp}?text=Hola%20Dra.%20Nitiz%2C%20quiero%20agendar%20una%20consulta`, "href")} target="_blank" class="md:inline-block px-4 py-2 rounded-lg bg-[#143B5C] text-white">Reservar</a> </div> </nav>`;
}, "C:/Users/pipel/OneDrive - ucatolica.edu.co/Documents/Proyecto doctora/proyecto/src/components/Navbar.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="bg-gray-900 text-gray-300 py-10 background-[#163C5F]"> <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"> <!-- Logo y descripción --> <div> <img src="/images/identity/susanalogo.png" alt="Logo" class="h-[10rem] mb-4"> </div> <!-- Enlaces rápidos --> <div> <h4 class="text-white font-semibold mb-4" style="font-family:'Playfair Display', serif;">Enlaces rápidos</h4> <ul class="space-y-2 text-sm" style="font-family:'Playfair Display', serif;"> <li><a href="/" class="hover:text-white">Inicio</a></li> <li><a href="/servicios" class="hover:text-white">Servicios</a></li> <li><a href="/resultados" class="hover:text-white">Resultados</a></li> <li><a href="/contacto" class="hover:text-white">Contacto</a></li> </ul> </div> <!-- Contacto --> <div> <h4 class="text-white font-semibold mb-4" style="font-family:'Playfair Display', serif;">Contacto</h4> <ul class="space-y-2 text-sm" style="font-family:'Playfair Display', serif;"> ${contact.centers.map((c) => renderTemplate`<li> <div class="font-semibold">${c.city} · ${c.name}</div> <div class="opacity-90">${c.address}</div> </li>`)} <li class="mt-2">Tel / WhatsApp: ${contact.phone}</li> </ul> </div> <!-- Redes sociales --> <div> <h4 class="text-white font-semibold mb-4" style="font-family:'Playfair Display', serif;">Síguenos</h4> <div class="flex space-x-4"> <a href="#" aria-label="Instagram" class="hover:text-white"><i class="fa-brands fa-instagram fa-xl" style="color: #ffffff;"></i></a> <a href="#" aria-label="Facebook" class="hover:text-white"><i class="fa-brands fa-facebook fa-xl" style="color: #ffffff;"></i></a> <a href="#" aria-label="WhatsApp" class="hover:text-white"><i class="fa-brands fa-whatsapp fa-xl"></i></a> </div> </div> </div> <!-- Línea inferior --> <div class="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500" style="font-family:'Playfair Display', serif;">
© ${year} Clínica Estética. Todos los derechos reservados.
</div> </footer>`;
}, "C:/Users/pipel/OneDrive - ucatolica.edu.co/Documents/Proyecto doctora/proyecto/src/components/Footer.astro", void 0);

export { $$Layout as $, ResultSlider as R, getCollection as a, $$Navbar as b, contact as c, $$ContactForm as d, $$Footer as e, getEntryBySlug as g, renderEntry as r };
