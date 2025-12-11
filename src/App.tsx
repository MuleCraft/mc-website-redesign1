import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Clients from "./components/Clients"
import PlatformServices from "./components/PlatformServices"
import ProductSection from "./components/ProductSection"
import "./App.css"

function App() {
  return (
    <div className="min-h-[120vh] flex flex-col">
      <Navbar />
      <main className="flex-grow pt-[80px]">
        <Hero />
        <Clients />
        <PlatformServices />
        <ProductSection />
        {/* <Services /> */}
      </main>
      <Footer />
    </div>
  )
}

export default App
