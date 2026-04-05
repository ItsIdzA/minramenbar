import Slider from 'react-slick';
const SlickSlider = Slider.default || Slider;

const reviews = [
    {
        id: 1,
        author: "Jacqueline M",
        pfp: "/review-pfp-jacquelinem.jpg",
        content: "Authentische Küche, Gerichte sind sehr lecker und von sehr guter Qualität, sehr nette Bedienung und keine langen Wartezeiten",
        src: "Tripadvisor",

    },
    {
        id: 2,
        author: "Elena K",
        pfp: "/review-pfp-elenak.jpg",
        content: "Mit Abstand die besten Ramen in der ganzen Stadt. Freundliches Personal, angemessene Preise. [...]",
        src: "Tripadvisor"
    },
    {
        id: 3,
        author: "Olga L",
        pfp: "/review-pfp-olgal.jpg",
        content: "Super leckere Vorspeisen und Ramen, freundliche Bedienung und schneller Service :) definitiv weiterzuempfehlen! 😊",
        src: "Tripadvisor"
    },
]

export default function Testimonials() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    return (
        <section id="testimonials" className="py-16 lg:py-20 overflow-hidden relative flex justify-center bg-amber-50">
            <div className="max-w-7xl lg:flex items-start gap-16">
                {/* header */}
                <div className="not-lg:min-w-screen px-4 md:px-8 lg:px-12 flex flex-col not-lg:justify-center not-lg:items-center ">
                    <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-linear-to-b from-red-800 to-red-600 hover:from-red-500 transition duration-300 bg-clip-text text-transparent">
                        Feedback
                    </h1>
                    <h2 className="not-lg:text-center">
                        <span className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold bg-linear-to-b from-red-950 to-red-900 bg-clip-text text-transparent">
                            Das sagen unsere Gäste:
                        </span>
                    </h2>
                </div>
        
                {/* testimonial cards */}
                {/* Large Screen */}
                <div className="hidden lg:flex lg:w-1/2">
                    <div className="space-y-6 sm:space-y-8">
                        {reviews.map((testimonial, key) => (
                            <div 
                                key={key} 
                                className="bg-red-700/80 p-4 sm:p-6 backdrop-blur-sm border border-red-950 rounded-xl sm:rounded-2xl hover:scale-103 transition duration-500 hover:shadow-2xl shadow-red-950/80"
                            >
                                <div className="flex items-start space-x-3 sm:space-x-4">
                                    <div className="shrink-0">
                                        <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                                            "
                                        </div>
                                    </div>

                                    <div className="grow">
                                        <p className="text-white text-base sm:text-lg leading-relaxed mb-3 sm:mb-4">
                                            {testimonial.content}
                                        </p>

                                        <div className="flex items-center space-x-2 sm:space-x-3">
                                            <img 
                                                src={testimonial.pfp} 
                                                alt={testimonial.author} 
                                                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                                            />
                                            <div>
                                                <h4 className="font-semibold text-white text-sm sm:text-base">
                                                    {testimonial.author}
                                                </h4>
                                                
                                                <p className="text-xs sm:text-sm text-amber-100/80">
                                                    {testimonial.src}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Small Screen */}
                <div className="flex lg:hidden py-10 max-w-screen">
                    <SlickSlider {...settings} className="w-full">
                        {reviews.map((testimonial) => (
                            <div key={testimonial.id} className="px-8 sm:px-12">
                                <div className="bg-red-700/80 p-4 sm:p-6 backdrop-blur-sm border border-red-950 rounded-xl sm:rounded-2xl hover:scale-101 transition duration-500 hover:shadow-lg shadow-red-950/60 w-full mx-auto">
                                    <p className="text-white text-base sm:text-lg leading-relaxed mb-3 sm:mb-4">
                                        {testimonial.content}
                                    </p>
                                    <div className="flex items-center space-x-3">
                                        <img 
                                            src={testimonial.pfp} 
                                            alt={testimonial.author} 
                                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                                        />
                                        <div>
                                            <h4 className="font-semibold text-white text-sm sm:text-base">
                                                {testimonial.author}
                                            </h4>
                                            <p className="text-xs sm:text-sm text-amber-100/80">
                                                {testimonial.src}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </SlickSlider>
                </div>
            </div>
        </section>
    )
}