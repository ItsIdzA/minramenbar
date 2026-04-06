import { ChevronRight, ChevronLeft, Clock, MapPin, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { openCookiebotRenew } from "../cookiebot.js";

const locations = [
    {
        id: 0,
        city: "Mannheim",
        img: "/bar-mannheim.jpg",
        tel: "0176 76331912",
        email: "min.ramen.mannheim@gmail.com",
        adress: "M7 11, 68161 Mannheim",
        mapsSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1832.8791416944148!2d8.471438264929374!3d49.48294781990191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797cd18bce262d1%3A0xaf05bba9c0ada1ff!2sMin%20Ramen%20Bar!5e0!3m2!1sde!2sde!4v1775071147652!5m2!1sde!2sde"
    },
    {
        id: 1,
        city: "Heidelberg",
        img: "/bar-heidelberg.jpg",
        tel: "0176 32439486",
        email: "min.ramen.heidelberg@gmail.com",
        adress: "Neugasse 17, 69117 Heidelberg",
        mapsSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d917.8179233988902!2d8.695158233440878!3d49.409262907516734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797c104ae8dfeb1%3A0x36d11b38da68ba81!2sMin%20Ramen%20Bar!5e0!3m2!1sde!2sde!4v1775074149329!5m2!1sde!2sde"
    },
    {
        id: 2,
        city: "Karlsruhe",
        img: "/bar-karlsruhe.jpg",
        tel: "0721 14597578",
        email: "",
        adress: "Waldstr. 19, 76133 Karlsruhe",
        mapsSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d778.0382619734878!2d8.398613494127789!3d49.010616519957225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479707e28f8df8cb%3A0x6c041c10a5155a28!2sMin%20Ramen%20Bar!5e0!3m2!1sde!2sde!4v1775074095848!5m2!1sde!2sde"
    },
]

export default function Locations() {
    const { t } = useTranslation();
    const [currentLocation, setCurrentLocation] = useState(locations[0])

    useEffect(() => {
        console.log("currentLocation ID:" + currentLocation)
    })

    useEffect(() => {
        console.log("currentLocation ID:" + currentLocation)
    })

    return (
        <section id="locations" className="relative flex flex-col overflow-hidden">
            {/* Section */}
            <div className="relative overflow-hidden">
                <div 
                    className="flex h-full -transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentLocation.id * 100}%)` }}
                >
                    {locations.map((loc) => (
                        <div
                            key={loc.id}
                            className="w-full shrink-0 relative"
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0 max-h-max bg-black z-0">
                                <img 
                                    src={loc.img}
                                    alt={loc.city} 
                                    className="min-w-full h-180 overflow-hidden object-cover opacity-15 "
                                />
                            </div>
                            
                            {/* Content */}
                            <div className="relative flex items-center justify-center h-180 min-w-screen text-gray-100">
                                <div className="flex flex-col w-full max-w-7xl">
                                    <div className="flex flex-col md:flex-row items-center justify-evenly pt-16 w-full md:p-8 min-h-full space-y-10 mb-10 md:mb-0 md:space-y-0">
                                        {/* Restaurant Information */}
                                        <div className="flex-1 space-y-10">
                                            {/* City Name */}
                                            <h2 className="font-semibold text-5xl text-center md:text-left uppercase">
                                                {loc.city}
                                            </h2>
                            
                                            {/* Information */}
                                            <div className="flex flex-col space-y-4">
                                                <p className="flex flex-row space-x-2">
                                                    <MapPin />
                                                    <span className="font-semibold">{t("locations.address")} </span>
                                                    <span className="font-light">{loc.adress}</span>
                                                </p>
                                                <p className="flex flex-row space-x-2">
                                                    <Phone />
                                                    <span className="font-semibold">{t("locations.phone")} </span>
                                                    <span className="font-light">
                                                        <a 
                                                            href={`tel: ${loc.tel}`}
                                                            className="text-white transition duration-300 hover:drop-shadow-[0_0_8px_#22d3ee] not-lg:underline underline-offset-3"
                                                        >
                                                            {loc.tel}
                                                        </a>
                                                    </span>
                                                </p>
                                                <p className="flex flex-row space-x-2">
                                                    <Clock />
                                                    <span className="font-semibold">{t("locations.hours")} </span>
                                                    <span className="font-light">{t("locations.hoursValue")}</span>
                                                </p>
                                                <p className="font-extralight text-sm">
                                                    {t("locations.reservationNote")}
                                                </p>
                                            </div>
                                        </div>
                            
                                        {/* Map */}
                                        <div className="w-120 max-w-full p-8 md:p-10 lg:p-0 flex-1 z-20">
                                            <div className="relative rounded-2xl bg-white/50 backdrop-blur-sm border border-white shadow-lg shadow-white/20 overflow-hidden pb-[75%] h-0">
                                                <div
                                                    className="absolute inset-0 z-0 flex flex-col items-center justify-center gap-2 p-3 text-center text-xs text-red-950 sm:text-sm"
                                                    role="status"
                                                >
                                                    <p className="leading-snug">{t("locations.mapEmbedHelp")}</p>
                                                    <div className="flex w-full max-w-xs flex-col items-stretch gap-2 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
                                                        <button
                                                            type="button"
                                                            onClick={openCookiebotRenew}
                                                            className="rounded-lg border border-red-900/40 bg-red-800 px-3 py-2 text-xs font-semibold text-amber-50 shadow-sm transition hover:bg-red-900 sm:text-sm cursor-pointer"
                                                        >
                                                            {t("footer.cookieSettings")}
                                                        </button>
                                                        <a
                                                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`Min Ramen Bar ${loc.adress} ${loc.city}`)}`}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-center text-xs font-semibold text-red-800 underline decoration-red-800/50 underline-offset-2 hover:text-red-950 sm:text-sm"
                                                        >
                                                            {t("locations.openInGoogleMaps")}
                                                        </a>
                                                    </div>
                                                </div>
                                                
                                                <iframe 
                                                    data-cookieblock-src={loc.mapsSrc}
                                                    data-cookieconsent="marketing"
                                                    width="400" 
                                                    height="300" 
                                                    allowFullScreen="false" 
                                                    loading="lazy" 
                                                    referrerPolicy="no-referrer-when-downgrade" 
                                                    title={t("locations.mapTitle")}
                                                    className="absolute left-0 top-0 border-0 h-full w-full"
                                                />
                                            </div>
                                        </div>
                                    </div>    
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Arrow Buttons */}
            <div className="absolute inset-y-170 inset-x-0 2xl:inset-0 z-10 max-w-screen flex items-center justify-evenly 2xl:justify-between mb-12 lg:mb-0 pointer-events-none">
                <button 
                    type="button"
                    onClick={() => {
                        if (currentLocation.id !== 0)  {
                            setCurrentLocation(locations[(currentLocation.id - 1) % locations.length]);
                        }
                    }}
                    className="md:px-12 pointer-events-auto"
                >
                    <ChevronLeft 
                        className={`size-10 md:size-12 2xl:size-14 ${
                            currentLocation.id == 0
                                ? 'text-gray-500/20'
                                : 'text-white/80 hover:scale-105 cursor-pointer transition duration-300 hover:drop-shadow-[0_0_8px_#22d3ee]'
                        }`}
                    />
                </button>
                <button 
                    type="button"
                    onClick={() => {
                        if (currentLocation.id !== locations.length - 1)  {
                            setCurrentLocation(locations[(currentLocation.id + 1) % locations.length]);
                        }
                    }}
                    className="md:px-12 pointer-events-auto"
                >
                    <ChevronRight
                        className={`size-10 md:size-12 2xl:size-14 ${
                            currentLocation.id == locations.length - 1
                                ? 'text-gray-500/20'
                                : 'text-white/80 hover:scale-105 cursor-pointer transition duration-300 hover:drop-shadow-[0_0_8px_#22d3ee]'
                        }`} 
                    />
                </button>
            </div>
        </section>
    );
}
