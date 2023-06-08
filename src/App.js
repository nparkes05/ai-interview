import logo from './logo.svg';
import './App.css';
import Navbar from "./Navigation/Navbar.js"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Interview from "./pages/Interview"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="Interview" element={<Interview />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
