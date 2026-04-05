import { use, useEffect, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import SplitType from "split-type";

const ramenOptions = [
    {
        name: "Tonkotsu",
        img: "/ramen-tonkotsu.png",
    },
    {
        name: "Kara Miso",
        img: "/ramen-kara-miso.png",
    },
    {
        name: "Tonkotsu",
        img: "/ramen-tonkotsu.png",
    },
    {
        name: "Kara Miso",
        img: "/ramen-kara-miso.png",
    }
]

const locations = [
    "Mannheim",
    "Karlsruhe",
    "Heidelberg"
]

export default function Hero() {
    const [selectedRamen, setSelectedRamen] = useState(ramenOptions[0]);
    const [selectedLocation, setSelectedLocation] = useState(locations[0]);
    const [displayedText, setDisplayedText] = useState("")

    useEffect(() => {
        let charIndex = 0;
        const CHAR_INTERVAL_MS = 100;
        const WORD_COMPLETE_DELAY_MS = 2000;
        const AFTER_CLEAR_DELAY_MS = 300;

        const interval = setInterval(() => {
            charIndex++;
            setDisplayedText(selectedLocation.slice(0, charIndex));

            if (charIndex === selectedLocation.length) {
                clearInterval(interval);
                
                setTimeout(() => {
                    setDisplayedText("");

                    setTimeout(() => {
                        const currentIndex = locations.indexOf(selectedLocation);
                        const nextIndex = (currentIndex + 1) % locations.length;
                        setSelectedLocation(locations[nextIndex]);
                    }, AFTER_CLEAR_DELAY_MS);

                }, WORD_COMPLETE_DELAY_MS)
            }
        }, CHAR_INTERVAL_MS);

        return () => clearInterval(interval);
    }, [selectedLocation]);

    return (
        <section className="relative overflow-hidden items-center bg-amber-50 pt-18 sm:pt-20">
            <div className="flex flex-col md:flex-row container mx-auto max-w-7xl px-4 py-24 space-y-16 lg:space-y-0 items-center justify-between md:max-h-screen">
                {/* Ramen Showcase */}
                <div className="flex flex-col lg:flex-row space-y-10 md:space-y-5 lg:space-y-0 lg:space-x-10 items-center justify-center w-full md:order-1">
                    {/* Selected Ramen */}
                    <a href="#ramen" className="relative rounded-full hover:shadow-lg hover:shadow-red-800/80 transition duration-300 ">
                        <img 
                            src={selectedRamen.img} 
                            alt={selectedRamen.name} 
                            className="w-full max-w-52 h-auto object-cover rounded-full shadow-lg spin "
                        />
                    </a>

                    {/* Ramen Selection */}
                    <div className="flex flex-row lg:flex-col items-center justify-center rounded-full bg-linear-to-r from-red-200/20 to--200/20 border border-gray-100/10 backdrop-blur-md px-5 py-5 space-x-4 lg:space-x-0 lg:space-y-4">
                        {ramenOptions.map((ramen, key) => (
                            <button
                                onClick={() => setSelectedRamen(ramenOptions[key])}
                                className="cursor-pointer max-w-15 rounded-full overflow-hidden hover:scale-115 duration-300"
                            >
                                <img 
                                    src={ramen.img}
                                    alt={ramen.name}
                                />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Hero Text */}
                <div className="py-12 text-center space-y-4 w-full">
                    {/* Title */}
                    <h1 className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl md:order-2">
                        <span className="font-semibold text-red-950">Wilkommen in der</span>
                        <br />
                        <span className="font-bold bg-linear-to-r from-red-800 to-red-600 bg-clip-text text-transparent">Min Ramen Bar</span>
                    </h1>
                    {/* Sub-Title */}
                    <a 
                        href="#locations"
                        className="text-lg cursor-pointer hover:underline "
                    >
                        <span>Besuche uns in </span>
                        <span className="font-semibold">{displayedText}</span>
                        <span>|.</span>
                    </a>
                </div>
            </div>
        </section>
    )
}