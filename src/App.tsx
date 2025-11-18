import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import "./App.css"

function App() {
  return (
    <div className="min-h-[120vh] flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Content will go here */}
      </main>
      <Footer />
    </div>
  )
}

export default App
