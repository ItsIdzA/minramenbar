import { Vegan, VeganIcon } from "lucide-react";
import { GiChiliPepper } from "react-icons/gi";

const ramen = [
    {
        img: "/ramen-kara-miso.png",
        name: "Shio",
        base: "Salzbasis",
        variations: [],
        isSpicy: false,
        description: "Leicht, klar und fein würzig – Shio-Ramen ist die mildeste und traditionellste Variante mit einer angenehm ausgewogenen Brühe.",
        imagePosition: "right"
    },
    {
        img: "/ramen-tonkotsu.png",
        name: "Shoyu",
        base: "Sojasoßenbasis",
        variations: ['vegan'],
        isSpicy: false,
        description: "Herzhaft und aromatisch mit einer tiefen Umami-Note – Shoyu-Ramen ist ein Klassiker mit kräftigem, aber ausgewogenem Geschmack.",
        imagePosition: "left"
    },
    {
        img: "/ramen-kara-miso.png",
        name: "Miso",
        base: "Sojabohnenpastenbasis",
        variations: ['vegan', 'hot', 'veganhot'],
        isSpicy: false,
        description: "Cremig, würzig und intensiv – Miso-Ramen überzeugt mit einem warmen, vollmundigen Geschmack und viel Tiefe.",
        imagePosition: "right"
    },
    {
        img: "/ramen-tonkotsu.png",
        name: "Tonkotsu",
        base: "Schweinebrühe",
        variations: [],
        isSpicy: false,
        description: "Kräftig, reichhaltig und besonders cremig – Tonkotsu-Ramen ist bekannt für seine samtige Brühe und seinen intensiven Fleischgeschmack.",
        imagePosition: "left"
    },
    {
        img: "/ramen-kara-miso.png",
        name: "Tantanmen",
        base: "Sojabohnenpaste & Chiliöl",
        variations: [],
        isSpicy: true,
        description: "Scharf, nussig und aromatisch – Tantanmen bringt eine würzige Wärme mit cremiger Textur und leichtem Feuer.",
        imagePosition: "right"
    },
    {
        img: "/ramen-tonkotsu.png",
        name: "Thai-Curry",
        base: "Curry-Kokos Soße",
        variations: [],
        isSpicy: true,
        description: "Exotisch, cremig und leicht scharf – Thai Curry Ramen verbindet die Würze von Curry mit der milderen Süße von Kokos.",
        imagePosition: "left"
    },
]



export default function Ramen() {
    const NoodleWave = () => (
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

    return (
        <section id="ramen" className="py-16 sm:py-20 overflow-hidden relative">
            {/* Section Title */}
            <div className="flex justify-center items-center min-w-screen min-h-max w-auto">
                {/* Left NoodleWave */}
                <NoodleWave />

                {/* Title Text */}
                <div className="text-center px-4 sm:px-8 shrink-0">
                    <span className="text-4xl md:text-4xl lg:text-5xl font-bold bg-linear-to-b from-red-950 to-red-900 bg-clip-text text-transparent">
                        Unsere Spezialität:
                    </span>
                </div>

                {/* Right NoodleWave */}
                <NoodleWave />
            </div>


            <div className="max-w-6xl mx-auto px-10 sm:px-6 lg:px-8">
                <h3 className="text-center text-5xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-linear-to-b from-red-800 to-red-600 hover:from-red-500 transition duration-300 bg-clip-text text-transparent">
                    Ramen
                </h3>

                <div className="space-y-16 sm:space-y-20 lg:space-y-32 pt-16">
                    {ramen.map((_ramen, key) => (
                        <div 
                            key={key} 
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
                                    alt={_ramen.name} 
                                    className="rounded-full max-w-50 shadow-lg shadow-red-800/80 hover:shadow-xl hover:shadow-red-900/80 transition duration-300"
                                />
                            </div>

                            {/* Description */}
                            <div className='flex-1 w-full h-full'>
                                <div className='max-w-lg mx-auto lg:mx-0 text-center lg:text-left'>
                                    {/* Title */}
                                    <h3 className="flex flex-col">
                                        <span className="flex gap-4 items-center">
                                            {/* Name */}
                                            <span className='text-4xl sm:text-3xl lg:text-4xl font-bold'>
                                                {_ramen.name} Ramen
                                            </span>
                                            {/* Spicy Icon */}
                                            {_ramen.isSpicy && <GiChiliPepper className="text-red-600 size-8 hover:scale-105 transition duration-200"/>}
                                        </span>
                                        {/* Base */}
                                        <span className='text-2xl sm:text-1xl lg:text-2xl font-semibold text-gray-700 mb-4 sm:mb-6'>
                                            {_ramen.base}
                                        </span>
                                    </h3>

                                    {/* Description */}
                                    <p className='text-xl sm:text-lg leading-relaxed'>
                                        {_ramen.description}
                                    </p>
                                    
                                    {/* Other Variations (Vegan, Spicy, Vegan + Spicy) */}
                                    {_ramen.variations.length !== 0 && (
                                        <div className="flex text-gray-700 space-x-1 my-8">
                                            <span className="">*auch in: </span>
                                            {_ramen.variations.map((variation, i) => (
                                                <div key={i} className="flex cursor-default">
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
                    ))}
                </div>
            </div>
        </section>
    )
}