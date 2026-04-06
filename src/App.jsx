"use client";

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Locations from "./components/Locations"
import Ramen from "./components/Ramen"
import Footer from "./components/Footer"
import Testimonials from "./components/Testimonials"
import LanguageSwitcher from "./components/LanguageSwitcher"
import ReactCookieBot from "react-cookiebot"

const domainGroupId = 'fadc7b09-d702-44b5-9362-9015d005be35'

function NoodleWaveSeparator() {
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

function App() {
  return (
    <div className="bg-white text-red-950 min-h-screen w-full">
      <ReactCookieBot domainGroupId={domainGroupId} />
      <Navbar />
      <Hero />
      <Locations />
      <Ramen />
      <NoodleWaveSeparator />
      <Testimonials />
      <Footer />
      <LanguageSwitcher />
    </div>
  )
}

export default App
