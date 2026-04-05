import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Locations from "./components/Locations"
import Ramen from "./components/Ramen"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="bg-white text-red-950 min-h-screen">
      <Navbar />
      <Hero />
      <Locations />
      <Ramen />
      <Footer />
    </div>
  )
}

export default App
