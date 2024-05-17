import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer.jsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="bg-gradient-to-b from-green-50 from-10% via-green-300 via-30% to green-400">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
