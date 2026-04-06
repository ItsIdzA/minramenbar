import { BsFacebook, BsInstagram } from "react-icons/bs";
import { SiTripadvisor } from "react-icons/si";
import { useTranslation } from "react-i18next";

const socialIconClass =
  "p-2 bg-white/80 border-2 border-red-900 rounded-lg hover:bg-white transition-colors duration-200 text-red-900";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t-2 border-red-900 bg-red-800/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <a
            href="#"
            className="flex items-center gap-2.5 text-amber-50 hover:text-white transition-colors shrink-0"
          >
            <img
              src="/logo.png"
              alt={t("footer.logoAlt")}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full ring-2 ring-red-950/40"
            />
            <span className="text-base sm:text-lg font-bold tracking-tight">
              Min Ramen Bar
            </span>
          </a>

          <div className="flex items-center justify-center gap-2 sm:gap-2.5">
            <a
              href="https://www.instagram.com/minramenbar.heidelberg/"
              target="_blank"
              rel="noopener noreferrer"
              className={socialIconClass}
              aria-label="Instagram"
            >
              <BsInstagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/minramenkarlsruhe/"
              target="_blank"
              rel="noopener noreferrer"
              className={socialIconClass}
              aria-label="Facebook"
            >
              <BsFacebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.tripadvisor.de/Restaurant_Review-g187286-d26767397-Reviews-Min_Ramen_Bar-Heidelberg_Baden_Wurttemberg.html"
              target="_blank"
              rel="noopener noreferrer"
              className={socialIconClass}
              aria-label="Tripadvisor"
            >
              <SiTripadvisor className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-red-900/80 flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4 text-center sm:text-left">
          <p className="text-white/80 text-xs sm:text-sm order-2 sm:order-1">
            {t("footer.copyright")}
          </p>
          <nav
            className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs sm:text-sm order-1 sm:order-2"
            aria-label={t("footer.legalNavLabel")}
          >
            <a
              href="#"
              className="text-white/80 hover:text-white transition-colors duration-200"
            >
              {t("footer.privacyPolicy")}
            </a>
            <a
              href="#"
              className="text-white/80 hover:text-white transition-colors duration-200"
            >
              {t("footer.termsOfService")}
            </a>
            <button
              type="button"
              onClick={() => {
                if (
                  typeof window !== "undefined" &&
                  window.Cookiebot &&
                  typeof window.Cookiebot.renew === "function"
                ) {
                  window.Cookiebot.renew();
                }
              }}
              className="text-white/80 hover:text-white transition-colors duration-200 bg-transparent border-0 p-0 cursor-pointer font-inherit"
            >
              {t("footer.cookieSettings")}
            </button>
          </nav>
        </div>
      </div>
    </footer>
  );
}
