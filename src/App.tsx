import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import "./App.css"

function App() {
  return (
    <div className="min-h-[120vh] flex flex-col">
      <Navbar />
      <main className="flex-grow pt-[80px]">
        {/* <Hero /> */}
        {/* <Services /> */}
      </main>
      <Footer />
    </div>
  )
}

export default App
