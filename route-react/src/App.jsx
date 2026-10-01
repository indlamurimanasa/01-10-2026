import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Contact from "./contact.jsx";

function App() {
  return (
    <BrowserRouter>
      <h1>React Routing</h1>

      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;