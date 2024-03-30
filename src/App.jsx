import "./App.css";
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import About from "./pages/About.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Footer />
    </div>
  );
}

export default App;
