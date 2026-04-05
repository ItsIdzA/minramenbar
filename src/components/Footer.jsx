import { Cat as Github } from "lucide-react";
import { Bird as Twitter } from "lucide-react";
import { GraduationCap as Linkedin } from "lucide-react";
import { Mail } from "lucide-react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { SiTripadvisor } from "react-icons/si";

const footerLinks = {
  Product: ["Features", "Pricing", "Security", "Roadmap", "Changelog"],
  Company: ["About", "Blog", "Careers", "Press", "Partners"],
  Resources: [
    "Documentation",
    "Help Center",
    "Community",
    "API Reference",
    "Status",
  ],
  Legal: ["Privacy", "Terms", "Cookie Policy", "Licenses", "Compliance"],
};

export default function Footer() {
  return (
    <footer className="border-t-3 border-red-900 bg-red-800/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Main footer content - hidden on mobile, visible on sm and up */}
        <div className="hidden sm:grid sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12">
          <div className="flex flex-col justify-between col-span-1 sm:col-span-3 lg:col-span-2 text-center sm:text-left">
            <div className="flex h-full items-center justify-center sm:justify-start space-x-2 mb-3 sm:mb-4">
              <div className="rounded-lg">
                <img
                  src="/logo.png"
                  alt="CodeFlow Logo"
                  className="w-6 h-6 sm:w-8 sm:h-8 rounded-full"
                />
              </div>
              <span className="text-lg sm:text-xl font-bold">
                <span className="text-amber-50">Min Ramen Bar</span>
              </span>
            </div>
            <div className="flex justify-center sm:justify-start space-x-3 sm:space-x-4">
              <a
                href="https://www.instagram.com/minramenbar.heidelberg/"
                target="_blank"
                rel="noopener norefferer"
                className="p-2 sm:p-2.5 bg-white/80 border-2 border-red-900 rounded-lg hover:bg-white transition-colors duration-200"
              >
                <BsInstagram className="w-5 h-5 sm:w-5 sm:h-5 text-red-900" />
              </a>
              <a
                href="https://www.facebook.com/minramenkarlsruhe/"
                target="_blank"
                rel="noopener norefferer"
                className="p-2 sm:p-2.5 bg-white/80 border-2 border-red-900 rounded-lg hover:bg-white transition-colors duration-200"
              >
                <BsFacebook className="w-5 h-5 sm:w-5 sm:h-5 text-red-900" />
              </a>
              <a
                href="https://www.tripadvisor.de/Restaurant_Review-g187286-d26767397-Reviews-Min_Ramen_Bar-Heidelberg_Baden_Wurttemberg.html"
                target="_blank"
                rel="noopener norefferer"
                className="p-2 sm:p-2.5 bg-white/80 border-2 border-red-900 rounded-lg hover:bg-white transition-colors duration-200"
              >
                <SiTripadvisor className="w-5 h-5 sm:w-5 sm:h-5 text-red-900" />
              </a>
            </div>
          </div>

          {/* Footer links - visible on sm and up */}
          <div className="sm:col-span-3 lg:col-span-4">
            <div className="grid grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h3 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">
                    {category}
                  </h3>
                  <ul className="space-y-2 sm:space-y-3">
                    {links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-white/80 hover:text-white transition-colors duration-200 text-xs sm:text-sm"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t-0 sm:border-t border-red-900">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <p className="text-white/80 text-xs sm:text-sm">
              © 2026 Min Ramen Bar. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 sm:space-x-6 text-xs sm:text-sm">
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors duration-200"
              >
                Cookie Settings
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}