import { ChefHat, Home, Info, Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { t } = useTranslation();

    return (
        <div className="fixed flex flex-col text-amber-50 z-50 h-20">
            <nav className="bg-red-900/95 backdrop-blur-md z-50 min-w-screen fixed">
                <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
                    {/* Logo */}
                    <div className="flex items-center">
                        <a 
                            href="/"
                            className="flex items-center"
                        >
                            <img 
                                src="/logo.png" 
                                alt="Min Ramen Bar Logo"
                                className="rounded-full w-10 h-10 sm:w-12 sm:h-12 md:w-12 md:h-12 mr-2"
                            />
                            <div>
                                <span className="text-xl font-semibold relative after:absolute after:left-1/2 after:-bottom-1 after:h-0.5 after:w-0 after:bg-amber-50 after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full">
                                    Min Ramen Bar
                                </span>
                            </div>
                        </a>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex md:space-x-4 lg:space-x-8">
                        <a 
                            href="#" 
                            className="flex items-center space-x-1 relative text-amber-50/90 hover:text-white transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white/70 after:transition-all after:duration-300 hover:after:w-full px-2 py-1 "
                        >
                            <Home className="w-5 h-5" />
                            <span>{t("nav.home")}</span>
                        </a>
                        <a 
                            href="https://menury.com/r/cf13eb4ca5/Heidelberg/MinRamenBar/de" 
                            className="flex items-center space-x-1 relative text-amber-50/90 hover:text-white transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white/70 after:transition-all after:duration-300 hover:after:w-full px-2 py-1 "
                        >
                            <ChefHat className="w-5 h-5" />
                            <span>{t("nav.menu")}</span>
                        </a>
                        <a 
                            href="#" 
                            className="flex items-center space-x-1 relative text-amber-50/90 hover:text-white transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white/70 after:transition-all after:duration-300 hover:after:w-full px-2 py-1 "
                        >
                            <Info className="w-5 h-5" />
                            <span>{t("nav.about")}</span>
                        </a>
                        <a 
                            href="#" 
                            className="flex items-center space-x-1 relative text-amber-50/90 hover:text-white transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white/70 after:transition-all after:duration-300 hover:after:w-full px-2 py-1 "
                        >
                            <Phone className="w-5 h-5" />
                            <span>{t("nav.contact")}</span>
                        </a>
                    </div>

                    <button 
                        className="md:hidden"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-expanded={mobileMenuOpen}
                    >
                        {mobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>

            </nav>
            {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="absolute top-[90%] md:hidden min-w-screen bg-red-900/90 backdrop-blur-sm text-amber-50 p-4 z-0 space-y-2 animate-in slide-in-from-top duration-500">                        <a 
                            href="#" 
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center space-x-1 hover:bg-amber-50 hover:text-red-950 px-2 py-1 rounded-md"
                        >
                            <Home className="w-5 h-5" />
                            <span>{t("nav.home")}</span>
                        </a>
                        <a 
                            href="https://menury.com/r/cf13eb4ca5/Heidelberg/MinRamenBar/de" 
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center space-x-1 hover:bg-amber-50 hover:text-red-950 px-2 py-1 rounded-md"
                        >
                            <ChefHat className="w-5 h-5" />
                            <span>{t("nav.menu")}</span>
                        </a>
                        <a 
                            href="#" 
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center space-x-1 hover:bg-amber-50 hover:text-red-950 px-2 py-1 rounded-md"
                        >
                            <Info className="w-5 h-5" />
                            <span>{t("nav.about")}</span>
                        </a>
                        <a 
                            href="#" 
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center space-x-1 hover:bg-amber-50 hover:text-red-950 px-2 py-1 rounded-md"
                        >
                            <Phone className="w-5 h-5" />
                            <span>{t("nav.contact")}</span>
                        </a>
                    </div>
                )}
        </div>
    )
}
