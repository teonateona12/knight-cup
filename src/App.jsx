import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Completed from "./pages/Completed/Completed";
import Experience from "./pages/Experience/Experience";
import Landing from "./pages/Landing/Landing";
import Personal from "./pages/Personal/Personal";
import {updateLocal} from "./store/userSlice"
import { useDispatch,useSelector } from 'react-redux'; 

export default function App() {
  const userData = useSelector((state)=>state.user)
  const dispatch = useDispatch(); 


  React.useEffect(() => {
   
  const user = JSON.parse(localStorage.getItem("user"))||userData
  dispatch(updateLocal(user))
  console.log(user)
    
    
  }, []);
  
  console.log(userData)
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
