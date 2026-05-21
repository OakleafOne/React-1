import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Portfolio from "./pages/portfolio.jsx";
import Navbar from "./navbar.jsx";
import Events from "./pages/events.jsx";
import UseState from "./pages/usestate.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path ="/" element ={<Home />} />
          <Route path ="/about" element ={<About />} />
          <Route path ="/portfolio" element ={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
