import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer.jsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="bg-gradient-to-b from-green-50 from-10% via-green-300 via-30% to green-400">
      <Navbar />
<<<<<<< HEAD
      <CardList />

=======
      <Outlet />
>>>>>>> aae85d5aa7fc99de8a2fcd5ba25e09db05e34993
      <Footer />
    </div>
  );
}

export default App;
