import "./App.css";
import AllGames from "./components/AllGames";
import Hero from "./components/Hero";
import About from "./components/About";
import News from "./components/News";
import PageNotFound from "./components/PageNotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SinglePage from "./components/SinglePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/games" element={<AllGames />} />
        <Route path="/games/:id" element={<SinglePage />} />
        <Route path="/news" element={<News />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
