import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import de from "./locales/de.json";
import en from "./locales/en.json";

const STORAGE_KEY = "min-ramen-bar-lang";

function getStoredLanguage() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "de" || stored === "en") return stored;
  } catch {
    /* ignore */
  }
  return null;
}

const initialLanguage = getStoredLanguage() ?? "de";

i18n.use(initReactI18next).init({
  resources: {
    de: { translation: de },
    en: { translation: en },
  },
  lng: initialLanguage,
  fallbackLng: "de",
  supportedLngs: ["de", "en"],
  nonExplicitSupportedLngs: true,
  interpolation: {
    escapeValue: false,
  },
});

function applyDocumentLanguage(lng) {
  if (typeof document === "undefined") return;
  const base = String(lng).split("-")[0];
  document.documentElement.lang = base === "en" ? "en" : "de";
}

applyDocumentLanguage(initialLanguage);

i18n.on("languageChanged", (lng) => {
  try {
    localStorage.setItem(STORAGE_KEY, lng.split("-")[0]);
  } catch {
    /* ignore */
  }
  applyDocumentLanguage(lng);
});

export default i18n;
