import "./App.css";
import Serices from "./components/Services";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import DentalImplant from "./components/DentalImplant";
import DentalCare from "./components/DentalCare";
import GetInTouch from "./components/GetInTouch";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Serices />
      <DentalImplant />
      <DentalCare />
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default App;
