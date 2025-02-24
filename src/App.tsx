import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home.tsx";
import BlogPost from "./components/blogpost/BlogPost.tsx";
import FourOFour from "./components/FourOFour.tsx";
import AboutMe from "./components/AboutMe.tsx";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<FourOFour />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
