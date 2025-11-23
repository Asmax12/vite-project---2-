import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import header_ar from "./translation/ar/header.json";
import hero_ar from "./translation/ar/hero.json";
import products_ar from "./translation/ar/products.json";
import footer_ar from "./translation/ar/footer.json";

import header_en from "./translation/en/header.json";
import hero_en from "./translation/en/hero.json";
import products_en from "./translation/en/products.json";
import footer_en from "./translation/en/footer.json";

i18n
  .use(LanguageDetector) 
  .use(initReactI18next)
  .init({
    resources: {
      ar: {
        header: header_ar,
        hero: hero_ar,
        products: products_ar,
        footer: footer_ar
      },
      en: {
        header: header_en,
        hero: hero_en,
        products: products_en,
        footer: footer_en
      }
    },

    fallbackLng: "en",
    debug: false,

    interpolation: {
      escapeValue: false,
    },
  });

i18n.on("languageChanged", (lng) => {
  document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
  document.documentElement.lang = lng;
});

export default i18n;
