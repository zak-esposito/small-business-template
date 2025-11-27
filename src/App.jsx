import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <main className="font-sans">
        <Hero />

        <div className="bg-white text-slate-900">
          <Services />
        </div>

        <About />

        <div className="bg-white text-slate-900">
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;

