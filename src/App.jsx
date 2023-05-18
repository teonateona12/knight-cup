import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Completed from "./pages/Completed/Completed";
import Experience from "./pages/Experience/Experience";
import Landing from "./pages/Landing/Landing";
import Personal from "./pages/Personal/Personal";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/completed" element={<Completed />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/personal" element={<Personal />} />
      </Routes>
    </Router>
  );
}
