import { Vegan } from "lucide-react";

const ramen = [
    {
        img: "/ramen-kara-miso.png",
        name: "Shio",
        base: "Salzbasis",
        variations: [],
        description: "Leicht, klar und fein würzig – Shio-Ramen ist die mildeste und traditionellste Variante mit einer angenehm ausgewogenen Brühe.",
        imagePosition: "right"
    },
    {
        img: "/ramen-tonkotsu.png",
        name: "Shoyu",
        base: "Sojasoßenbasis",
        variations: ['vegan'],
        description: "Herzhaft und aromatisch mit einer tiefen Umami-Note – Shoyu-Ramen ist ein Klassiker mit kräftigem, aber ausgewogenem Geschmack.",
        imagePosition: "left"
    },
    {
        img: "/ramen-kara-miso.png",
        name: "Miso",
        base: "Sojabohnenpastenbasis",
        variations: ['vegan', 'hot', 'veganhot'],
        description: "Cremig, würzig und intensiv – Miso-Ramen überzeugt mit einem warmen, vollmundigen Geschmack und viel Tiefe.",
        imagePosition: "right"
    },
    {
        img: "/ramen-tonkotsu.png",
        name: "Tonkotsu",
        base: "Schweinebrühe",
        variations: [],
        description: "Kräftig, reichhaltig und besonders cremig – Tonkotsu-Ramen ist bekannt für seine samtige Brühe und seinen intensiven Fleischgeschmack.",
        imagePosition: "left"
    },
    {
        img: "/ramen-kara-miso.png",
        name: "Tantanmen",
        base: "Sojabohnenpaste & Chiliöl",
        variations: [],
        description: "Scharf, nussig und aromatisch – Tantanmen bringt eine würzige Wärme mit cremiger Textur und leichtem Feuer.",
        imagePosition: "right"
    },
    {
        img: "/ramen-tonkotsu.png",
        name: "Thai-Curry",
        base: "Curry-Kokos Soße",
        variations: [],
        description: "Exotisch, cremig und leicht scharf – Thai Curry Ramen verbindet die Würze von Curry mit der milderen Süße von Kokos.",
        imagePosition: "left"
    },
]



export default function Ramen() {
    const hotIcon = () => {
        <span>
            <img src="/pepper.svg" alt="hot" />
        </span>
    }

    const veganIcon = () => {
        <span>
            <Vegan />
        </span>
    }

    return (
        <section id="ramen" className="py-16 sm:py-20 overflow-hidden relative">
            <div className="max-w-6xl mx-auto px-10 sm:px-6 lg:px-8">
                <div className="space-y-16 sm:space-y-20 lg:space-y-32 pt-16">
                    {ramen.map((_ramen, key) => (
                        <div className='flex-1 w-full h-full'>
                            <div className='max-w-lg mx-auto lg:mx-0 text-center lg:text-left'>
                                {/* Title */}
                                <h3 className="flex flex-col">
                                    {/* Name */}
                                    <span className="flex justify-between items-center">
                                        <div>
                                            {(_ramen.variations.length !== 0) && (
                                                _ramen.variations.forEach(variation => {
                                                    if (variation === 'vegan') {
                                                        <div>
                                                            {veganIcon}
                                                        </div>
                                                    } else if (variation === 'hot') {
                                                        <div>
                                                            {hotIcon}
                                                        </div>
                                                    } else if (variation === 'veganhot') {
                                                        <div>
                                                            {veganIcon}
                                                            {hotIcon}
                                                        </div>
                                                    }
                                                })
                                            )}
                                        </div>
                                    </span>
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}