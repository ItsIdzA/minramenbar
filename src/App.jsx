import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Locations from "./components/Locations"
import Ramen from "./components/Ramen"
import Footer from "./components/Footer"
import Testimonials from "./components/Testimonials"

function App() {
  const NoodleWaveSeperator = () => {
    return (
      <div className="w-full flex overflow-hidden">
        <div
          className="w-full h-10" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='20' viewBox='0 0 60 20'%3E%3Cpath d='M0 10 Q15 0 30 10 T60 10 V20 H0 Z' fill='${"%23fffbeb"}' /%3E%3Cpath d='M0 10 Q15 0 30 10 T60 10' fill='none' stroke='%23991b1b' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat-x',
            backgroundPosition: 'bottom',
          }}
        />
      </div>
    )
  }

  return (
    <div className="bg-white text-red-950 min-h-screen w-full">
      <Navbar />
      <Hero />
      <Locations />
      <Ramen />
      <NoodleWaveSeperator />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
