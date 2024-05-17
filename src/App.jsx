import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer.jsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="bg-gradient-to-b from-slate-700 from-10% via-slate-800 via-40% to slate-900">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
