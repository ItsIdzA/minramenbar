import { Vegan } from "lucide-react";
import { GiChiliPepper } from "react-icons/gi";
import { useTranslation } from "react-i18next";

function NoodleWave() {
    return (
        <div
            className="hidden sm:inline-block grow h-8 opacity-80"
            style={{
                // Ein einfaches, wellenartiges SVG. %23991b1b ist der Hex-Code für Tailwind's red-800
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='20' viewBox='0 0 60 20'%3E%3Cpath d='M0 10 Q15 0 30 10 T60 10' fill='none' stroke='%23991b1b' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'repeat-x',
                backgroundPosition: 'center',
            }}
        />
    );
}

const ramen = [
    {
        key: "shio",
        img: "/ramen-kara-miso.png",
        variations: [],
        isSpicy: false,
        imagePosition: "right"
    },
    {
        key: "shoyu",
        img: "/ramen-tonkotsu.png",
        variations: ['vegan'],
        isSpicy: false,
        imagePosition: "left"
    },
    {
        key: "miso",
        img: "/ramen-kara-miso.png",
        variations: ['vegan', 'hot', 'veganhot'],
        isSpicy: false,
        imagePosition: "right"
    },
    {
        key: "tonkotsu",
        img: "/ramen-tonkotsu.png",
        variations: [],
        isSpicy: false,
        imagePosition: "left"
    },
    {
        key: "tantanmen",
        img: "/ramen-kara-miso.png",
        variations: [],
        isSpicy: true,
        imagePosition: "right"
    },
    {
        key: "thaiCurry",
        img: "/ramen-tonkotsu.png",
        variations: [],
        isSpicy: true,
        imagePosition: "left"
    },
]

export default function Ramen() {
    const { t } = useTranslation();

    return (
        <section id="ramen" className="py-16 sm:py-20 overflow-hidden relative">
            {/* Section Title */}
            <div className="flex justify-center items-center min-w-screen min-h-max w-auto">
                {/* Left NoodleWave */}
                <NoodleWave />

                {/* Title Text */}
                <div className="text-center px-4 sm:px-8 shrink-0">
                    <span className="text-4xl md:text-4xl lg:text-5xl font-bold bg-linear-to-b from-red-950 to-red-900 bg-clip-text text-transparent">
                        {t("ramen.specialty")}
                    </span>
                </div>

                {/* Right NoodleWave */}
                <NoodleWave />
            </div>


            <div className="max-w-6xl mx-auto px-10 sm:px-6 lg:px-8">
                <h3 className="text-center text-5xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-linear-to-b from-red-800 to-red-600 hover:from-red-500 transition duration-300 bg-clip-text text-transparent">
                    {t("ramen.title")}
                </h3>

                <div className="space-y-16 sm:space-y-20 lg:space-y-32 pt-16">
                    {ramen.map((_ramen) => {
                        const name = t(`ramen.items.${_ramen.key}.name`);
                        const base = t(`ramen.items.${_ramen.key}.base`);
                        const description = t(`ramen.items.${_ramen.key}.description`);
                        const showRamenSuffix = _ramen.key !== "tantanmen";

                        return (
                        <div 
                            key={_ramen.key} 
                            className={`flex flex-col lg:flex-row items-center gap-8 sm:gap-12 ${
                                _ramen.imagePosition === "right" 
                                    ? "lg:flex-row-reverse" 
                                    : ""
                            }`}
                        >
                            {/* Image */}
                            <div className='flex-1 w-full flex justify-center'>
                                <img 
                                    src={_ramen.img} 
                                    alt={name} 
                                    className="rounded-full max-w-50 shadow-lg shadow-red-800/80 hover:shadow-xl hover:shadow-red-900/80 transition duration-300"
                                />
                            </div>

                            {/* Description */}
                            <div className='flex-1 w-full h-full'>
                                <div className='max-w-lg mx-auto lg:mx-0 text-center lg:text-left'>
                                    {/* Title */}
                                    <h3 className="flex flex-col">
                                        <span className="flex gap-1 lg:gap-4 items-center not-lg:justify-center relative">
                                            {/* Name */}
                                            <span className='text-4xl sm:text-3xl lg:text-4xl font-bold not-lg:px-8'>
                                                {name}{showRamenSuffix ? ` ${t("ramen.nameSuffix")}` : ""}
                                            </span>
                                            {/* Spicy Icon */}
                                            {_ramen.isSpicy && <GiChiliPepper className="not-sm:absolute not-sm:bg-red-600/25 not-sm:border border-red-600 not-sm:backdrop-blur-xs not-sm:rounded-lg right-0 p-1 text-red-600 size-8 hover:scale-105 transition duration-200"/>}
                                        </span>
                                        {/* Base */}
                                        <span className='text-2xl sm:text-1xl lg:text-2xl font-semibold text-gray-700 mb-4 sm:mb-6'>
                                            {base}
                                        </span>
                                    </h3>

                                    {/* Description */}
                                    <p className='text-xl sm:text-lg leading-relaxed'>
                                        {description}
                                    </p>
                                    
                                    {/* Other Variations (Vegan, Spicy, Vegan + Spicy) */}
                                    {_ramen.variations.length !== 0 && (
                                        <div className="flex text-gray-700 space-x-1 my-8">
                                            <span className="">{t("ramen.alsoAvailable")}</span>
                                            {_ramen.variations.map((variation, i) => (
                                                <div key={variation} className="flex cursor-default">
                                                    <span className="flex hover:scale-110 transition duration-200">
                                                        <span>{variation.includes('vegan') && <Vegan className={`text-green-600 scale-90 mr-1`} />}</span>
                                                        <span className="font-medium">{variation === 'veganhot' && "+"}</span>
                                                        <span>{variation.includes('hot') && <GiChiliPepper className="text-red-600 size-6 scale-90"/> }</span>
                                                    </span>
                                                    
                                                    <span>{i < _ramen.variations.length - 1 && ", "}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    )})}
                </div>
            </div>
        </section>
    )
}
