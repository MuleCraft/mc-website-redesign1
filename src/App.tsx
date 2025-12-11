import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-[120vh] flex flex-col">
              <Navbar />
              <main className="flex-grow pt-[80px]">
                <Home />
              </main>
              <Footer />
            </div>
          }
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
