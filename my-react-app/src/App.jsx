import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Portfolio from "./pages/portfolio.jsx";
import Navbar from "./navbar.jsx";
import Events from "./pages/events.jsx";
import UseState from "./pages/usestate.jsx";
import OnChange from "./pages/onchange.jsx";
import Updater from "./pages/updaterfunction.jsx";
import Objects from "./pages/objects.jsx";
import Arrays from "./pages/arrays.jsx";
import Popup from "./pages/popup.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path ="/" element ={<Home />} />
          <Route path ="/about" element ={<About />} />
          <Route path ="/portfolio" element ={<Portfolio />} />
          <Route path ="/onchange" element ={<OnChange />} />
          <Route path ="/updaterfunction" element ={<Updater />} />
          <Route path ="/objects" element ={<Objects />} />
          <Route path ="/arrays" element ={<Arrays />} />
          <Route path ="/popup" element ={<Popup />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
