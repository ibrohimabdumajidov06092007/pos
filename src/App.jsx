import "./App.css";
import Fot from "./components/Foter/Fot";
import Naw from "./components/nawbar/Naw";
import Feter from "./sahifalar/Feter/Feter";
import About from "./sahifalar/about/About";
import Contact from "./sahifalar/contact/Contact";
import Headar from "./sahifalar/headar/Headar";
import Offer from "./sahifalar/offer/Offer";

function App() {
  return (
    <>
      <div className="bot">
        <Naw />
        <Headar />
        <Feter />
        <Offer />
        <About />
        <Contact />
        <Fot />
      </div>
    </>
  );
}

export default App;
