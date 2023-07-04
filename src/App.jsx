import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Completed from "./pages/Completed/Completed";
import Experience from "./pages/Experience/Experience";
import Landing from "./pages/Landing/Landing";
import Personal from "./pages/Personal/Personal";
import { updateLocal } from "./store/userSlice";
import { useDispatch } from "react-redux";

export default function App() {
  const [checkStorage, setCheckStorage] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch(updateLocal(user));
    }
    setCheckStorage(true);
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/completed" element={<Completed />} />
        <Route
          path="/experience"
          element={checkStorage ? <Experience /> : null}
        />
        <Route path="/personal" element={<Personal />} />
      </Routes>
    </Router>
  );
}
