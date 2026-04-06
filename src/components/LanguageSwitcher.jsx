import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const resolved = i18n.resolvedLanguage ?? i18n.language;
  const isDe = resolved.startsWith("de");

  return (
    <button
      type="button"
      onClick={() => i18n.changeLanguage(isDe ? "en" : "de")}
      className="fixed bottom-4 right-4 z-60 flex items-center gap-2 rounded-full border-2 border-red-900 bg-red-800/95 px-4 py-2.5 text-sm font-semibold text-amber-50 shadow-lg shadow-red-950/40 backdrop-blur-sm transition hover:bg-red-900 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-200 focus-visible:ring-offset-2 focus-visible:ring-offset-amber-50"
      aria-label={isDe ? t("language.switchToEnglish") : t("language.switchToGerman")}
    >
      <span
        className={isDe ? "text-amber-200" : "text-amber-50/70"}
        aria-hidden
      >
        {t("language.currentDe")}
      </span>
      <span className="text-amber-50/50" aria-hidden>
        |
      </span>
      <span
        className={!isDe ? "text-amber-200" : "text-amber-50/70"}
        aria-hidden
      >
        {t("language.currentEn")}
      </span>
    </button>
  );
}
